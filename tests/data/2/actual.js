test('Def tests 1');
asyncTest('Def tests 2');
QUnit.test('Def tests 3');
QUnit.asyncTest('Def tests 4');
test('Def tests 5', function () {

});

test('Def tests 6', function() {

});

test('Def tests 7', function(){

});

asyncTest('Def tests 8', function () {

});

asyncTest('Def tests 9', function() {

});

asyncTest('Def tests 10', function(){

});

// Won't match all these so these would remain as they are
QUnit.test('Def tests 11', function () {

});

QUnit.test('Def tests 12', function() {

});

QUnit.test('Def tests 13', function(){

});

QUnit.asyncTest('Def tests 14', function () {

});

QUnit.asyncTest('Def tests 15', function() {

});

QUnit.asyncTest('Def tests 16', function(){

});
