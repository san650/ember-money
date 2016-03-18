# ember-money

[![Build Status](https://travis-ci.org/san650/ember-money.svg?branch=master)](https://travis-ci.org/san650/ember-money)
![Latest version](https://img.shields.io/npm/v/ember-money.svg)

Money value type for Ember

This addon helps you implement the "Money" concept in your application.

```js
money('1.234') == '1.23'
money(0.009) == '0.00'
money(1.009) == '1.00'
money(1).sum(money(0.02)) == '1.02'
money(0.001).sum(money(0.009)) == '0.00'
money(1.001).sum(money(1.009)) == '2.00'
```

## Installation

```sh
ember install ember-money
```

## Development

### Installation

```sh
$ git clone https://github.com/san650/ember-money.git
$ cd $_
$ npm install
$ bower install
```

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Project's health

[![Build Status](https://travis-ci.org/san650/ember-money.svg?branch=master)](https://travis-ci.org/san650/ember-money)

## License

ember-money is licensed under the MIT license.

See [LICENSE](./LICENSE.md) for the full license text.
