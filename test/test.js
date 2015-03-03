/*jshint node:true */
/*global beforeEach, afterEach, describe, it, spyOn, xdescribe, xit */
"use strict";

var expect = require('chai').expect;
var testModule = require('../index.js');

describe("test()", function () {
    expect(testModule.test()).to.equal('test');
});
