import money from 'ember-money';
import { module, test } from 'qunit';

module('Unit | Utility | money');

test('formats with three decimals', function(assert) {
  assert.equal(money(1.0).toString(), '1.00');
});

test('adds another money value', function(assert) {
  assert.equal(money(1).sum(money(0.02)).toString(), '1.02');
});

test('substracts another money value', function(assert) {
  assert.equal(money(1.0).sum(money(-0.02)).toString(), '0.98');
});

test('parses string as float value', function(assert) {
  assert.equal(money('1.234'), '1.23');
});

test('ignores digits less significant than 0.01', function(assert) {
  assert.equal(money(0.009).toString(), '0.00');
  assert.equal(money(1.009).toString(), '1.00');
  assert.equal(money(0.001).sum(money(0.009)).toString(), '0.00');
  assert.equal(money(1.001).sum(money(1.009)).toString(), '2.00');
});
