var assertionsModifier = require('modifiers/assertions');
var definitionsModifier = require('modifiers/definitions');
var globalsModifier = require('modifiers/globals');
var testsModifier = require('modifiers/tests');

module.exports = function (err, data, options) {
  if (err) {
    console.log(err);
    return err;
  }

  data = assertionModifier(data);
  data = globalsModifier(data);
  data = testsModifier(data);

  if (options.definitions) {
  	data = definitionsModifier(data);
  }

  return data;
}
