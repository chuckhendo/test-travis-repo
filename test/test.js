/*jshint node:true */
/*global beforeEach, afterEach, describe, it, spyOn, xdescribe, xit */
"use strict";

var expect = require('chai').expect;
var testModule = require('../index.js');

describe("test()", function () {
    it("should return test", function () {
        expect(testModule.test()).to.equal('test');
    });
});

describe("test2()", function () {
    it("should return test2", function () {
        expect(testModule.test2()).to.equal('test2');
    });
});

describe("test3()", function () {
    it("should return test3", function () {
        expect(testModule.test3()).to.equal('test3');
    });
});

describe("test4()", function () {
    it("should return test4", function () {
        expect(testModule.test4()).to.equal('test4');
    });
});
