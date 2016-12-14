# auto-bind-extend

[![codecov.io](https://codecov.io/github/dmamills/auto-bind-extend/coverage.svg?branch=master)](https://codecov.io/github/dmamills/auto-bind-extend?branch=master) [![Build Status](https://secure.travis-ci.org/dmamills/auto-bind-extend.png)](http://travis-ci.org/dmamills/auto-bind-extend)

a simple class that can be used to put your function context troubles to rest. Based on [auto-bind](https://github.com/sindresorhus/auto-bind)

## example

```javascript

const BaseAutoBind = require('auto-bind-extend');

class Cool extends BaseAutoBind {
    constructor() {
        super();
        this.name = 'Cool';
    }

    say() {
        return this.name;
    }
}

let cool = new Cool();

// No matter where this function may travel, it'll stay cool
let coolSayFn = cool.say;
console.log(coolSayFn()); // Cool!
```


## dev

```
npm test
npm run coverage
```
