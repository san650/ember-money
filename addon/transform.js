import DS from 'ember-data';
import { serialize, deserialize } from 'ember-money';

export default DS.Transform.extend({ deserialize, serialize });
