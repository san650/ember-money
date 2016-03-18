import { moduleFor, test } from 'ember-qunit';
import money from 'ember-money';

moduleFor('transform:money', 'Unit | Transform | money');

test('serializes a value with decimals', function(assert) {
  let transform = this.subject();

  assert.equal(transform.serialize(money(1.234)), '1.234');
});

test('deserialize a value with decimals', function(assert) {
  let transform = this.subject();

  assert.equal(transform.deserialize('1.234').toString(), '1.234');
});
