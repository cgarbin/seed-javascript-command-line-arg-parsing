# seed-command-line-arg-parsing

A seed for command-line argument parsing in JavaScript.

Covers:

- Parsing arguments and options
- Showing help text
- Validating presence/absence of mandatory parameters
- Validating parameter type (e.g. expect a number)
- Handling optional parameters
- Handling short (`-v`) and long (`--verbose`) version of parameters

It uses [Commander.js](https://github.com/tj/commander.js/) to parse the arguments.

Sources for this code and command-line programs in general:

- https://developer.atlassian.com/blog/2015/11/scripting-with-node/
- https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
- http://slides.com/timsanteford/conquering-commander-js#/
- https://github.com/tj/commander.js/

This program takes two arguments and a few options (Commander.js gives `--help|-h`
for free):

    number1 number1 [--operation add|multiply] (default 'add') [--verbose|-v]

The program adds or multiplies the first two numbers, as specified. Verbose
does what is expected: prints more information.

It's also meant to be installed as with node (`npm install -g`). See the `bin` section
of [package.json](package.json) for the name used to invoke the script once installed.

# How to work with this program

- Install node, if not yet installed
- Clone git repository
- `cd` to the repository directory
- Install all dependencies: `npm install`
- Run unit tests with `npm test`
- Install as a shell command with `npm install -g`

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
