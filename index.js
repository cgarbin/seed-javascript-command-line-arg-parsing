#!/usr/bin/env node

/**
 * A seed for command-line argument parsing in JavaScript.
 *
 * Covers:
 *
 * - Parsing arguments and options
 * - Showing help text
 * - Validating presence/absence of mandatory parameters
 * - Validating parameter type (e.g. expect a number)
 * - Handling optional parameters
 * - Hanlding short (-v) and long (--verbose) version of parameters
 * - Splitting the code into modules to organize it
 *
 * It uses Commander.js for arguments/options parsing.
 *
 * Sources for this code and command-line programs in general:
 *
 * - https://developer.atlassian.com/blog/2015/11/scripting-with-node/
 * - https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
 * - http://slides.com/timsanteford/conquering-commander-js#/
 * - https://github.com/tj/commander.js/
 *
 * This program takes two arguments and a few options (argparse gives --help|-h
 * for free):
 *
 *    number1 number1 [--operation add|multiply] (default 'add') [--verbose|-v]
 *
 * The program adds or multiplies the first two numbers, as specified. Verbose
 * does what is expected: print more information.
 */
"use strict";

const program = require("commander");
const add = require("./lib/add");
const multiply = require("./lib/multiply");

let number1 = 0;
let number2 = 0;

// number1 number1 [--operation add|multiply] (default 'add') [--verbose|-v]
program
  .version("0.1.0")
  .description("Adds or multiplies two numbers")
  // Two arguments
  .arguments("<number1> <number2>")
  // Option with two values and default
  .option(
    "-o, --operation <operation>",
    "Operation to perform (add or multiply)",
    /^(add|multiply)$/i,
    "add"
  )
  // Option without any value
  .option("-v, --verbose", "Verbose mode")
  .action((n1, n2) => {
    number1 = parseInt(n1, 10);
    number2 = parseInt(n2, 10);
    if (isNaN(number1) || isNaN(number2)) {
      console.error("Please enter valid numbers");
      process.exit(1);
    }
  })
  .parse(process.argv);

// Show help if no option given (also exits the program)
if (program.args.length === 0) {
  program.help();
}

if (program.verbose) {
  // Logs to stderr, so stdout can be redirected without extraneous information
  console.warn("Command line arguments and options:");
  console.warn("   Number1:   " + number1);
  console.warn("   Number2:   " + number2);
  console.warn("   Operation: " + program.operation);
}

if (program.operation === "add") {
  console.log("Number1 + Number2 = " + add.add(number1, number2));
} else {
  console.log("Number1 * Number2 = " + multiply.multiply(number1, number2));
}
