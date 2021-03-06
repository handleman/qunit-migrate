module.exports = function () {
  var assertionsModifier = require('../../src/regex/modifiers/assertions');
  var testsModifier = require('../../src/regex/modifiers/tests');
  var globalsModifier = require('../../src/regex/modifiers/globals');
  var definitionsModifier = require('../../src/regex/modifiers/definitions');
  var asyncModifier = require('../../src/regex/modifiers/async');
  var mainModifier = require('../../src/regex/main');
  var assert = require('assert');
  var fs = require('fs');
  var noOfData = 12;

  var oneToTwelveArray = [];
  for(var i = 1; i <= noOfData; i++) {
    oneToTwelveArray.push(i);
  }

  var testData = oneToTwelveArray.map(function (i) {
    return fs.readFileSync('tests/data/' + i + '/actual.js').toString();
  })

  var expectedData = oneToTwelveArray.map(function (i) {
    return fs.readFileSync('tests/data/' + i + '/expected-regex.js').toString();
  })

  describe('Assertions modules', function () {
    it('should have a working assertion modifier', function () {
      for (var i = 0; i < 1; i++) {
  		  var result = assertionsModifier(testData[i]);
  		  assert.equal(result, expectedData[i]);
      }
    });
  });

  describe('Tests modules', function () {
    it('should have a working tests modifier', function () {
      for (var i = 1; i < 2; i++) {
        var result = testsModifier(testData[i]);
        result = asyncModifier(result);
        assert.equal(result, expectedData[i]);
      }
    });
  });

  describe('Async modules', function () {
    it('should have a working async modifier', function () {
      for (var i = 2; i < 3; i++) {
        var result = globalsModifier(testData[i]);
        result = testsModifier(result);
        result = asyncModifier(result);
        assert.equal(result, expectedData[i]);
      }
    });
  });

  describe('Globals modules', function () {
    it('should have a working globals modifier', function () {
      for (var i = 3; i < 4; i++) {
        var result = globalsModifier(testData[i]);
        assert.equal(result, expectedData[i]);
      }
    });
  });

  describe('Definitions modules', function () {
    it('should have a working definitions modifier', function () {
      for (var i = 4; i < 7; i++) {
        var result = definitionsModifier(testData[i]);
        assert.equal(result, expectedData[i]);
      }
    });
  });

  describe('Main worker', function () {
    it('should have a working main worker', function () {
      var options = { definitions: false };
      for (var i = 7; i < 12; i++) {
        var result = mainModifier(testData[i], options);
        assert.equal(result, expectedData[i])
        if (i == 7) {
          options.definitions = true;
        }
        if (i == 9) {
          options.definitions = 'lib/qunit';
        }
        if (i == 10) {
          options.quotes = '"';
        }
      }
    });
  });
};
