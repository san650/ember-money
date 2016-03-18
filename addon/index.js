const PRECISION = 100; // The precision we're going to use
//const EPSILON = 0.01;  // The smallest number we're going to support

function floor(value) {
  return Math.floor(value * PRECISION) / PRECISION;
}

class Money {
  constructor(value) {
    if (typeof(value) === 'string') {
      this.value = floor(parseFloat(value));
    } else {
      this.value = floor(value);
    }
  }

  valueOf() {
    return this.value;
  }

  sum(other) {
    return new Money(this + other);
  }

  toString() {
    return this.valueOf().toFixed(2);
  }
}

export default function money(value) {
  return new Money(value);
}

export function serialize(money) {
  return money.toString();
}

export function deserialize(value) {
  return money(value);
}
