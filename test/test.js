/**
 * Unit tests with mocha and chai.
 *
 * Run them with `npm test`.
 *
 * References:
 *
 * - https://mherman.org/blog/2015/09/10/testing-node-js-with-mocha-and-chai/
 * - https://hackernoon.com/a-crash-course-on-testing-with-node-js-6c7428d3da02
 * - https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3
 */
"use strict";

const expect = require("chai").expect;
const { describe, it } = require("mocha");

const add = require("../lib/add");
const multiply = require("../lib/multiply");

describe("add()", function() {
  it("should add two numbers", function() {
    let result = add.add(5, 1);
    expect(result).to.be.equal(6);
  });
});

describe("multiply()", function() {
  it("should multiply two numbers", function() {
    let result = multiply.multiply(5, 3);
    expect(result).to.be.equal(15);
  });
});
