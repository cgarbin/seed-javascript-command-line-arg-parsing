// See https://hackernoon.com/a-crash-course-on-testing-with-node-js-6c7428d3da02

let expect = require("chai").expect;
let add = require("../lib/add");
let multiply = require("../lib/multiply");

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
