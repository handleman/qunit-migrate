module.exports = function (data) {
  var assertions = [
    'ok', 'equal', 'notEqual',
    'propEqual', 'notPropEqual',
    'deepEqual', 'notDeepEqual',
    'strictEqual', 'notStrictEqual',
    'throws', 'expect'
  ];
  var assertPrefix = 'assert.';
  var result = data;

  assertions.map(function (assertion) {
    var regex = new RegExp('\^' + assertion + '\\(');
    var regexWithoutStart = new RegExp(assertion + '\\(');
    var replacement = assertPrefix + assertion + '(';
    result = result.split('\n').map(function (x) {
      var stripped = x.trim();
      if (regex.test(stripped)) {
        x = x.replace(regexWithoutStart, replacement);
      }
      return x;
    }).join('\n');
  });

  return result;
}
