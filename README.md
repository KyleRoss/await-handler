# await-handler
[![npm version](https://img.shields.io/npm/v/await-handler.svg)](https://www.npmjs.com/package/await-handler) ![NPM Dependencies](https://david-dm.org/KyleRoss/await-handler.svg) [![NPM Downloads](https://img.shields.io/npm/dm/await-handler.svg)](https://www.npmjs.com/package/await-handler) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/KyleRoss/await-handler/master/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/KyleRoss/await-handler.svg)](https://github.com/KyleRoss/await-handler/issues)

Simple signature to ease the paid of catching errors using async/await. This module will allow a simple method of catching errors from an `await` handler without the need to wrap everything in try/catch blocks. This module is a Node.js only version based on [await-to-js](https://github.com/scopsy/await-to-js) minus the typescript aspect. Credit for this module goes to [Dima Grossman](http://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/), as it was based off the code provided.

You continue to use async/await normally, except to wrap the function you are "awaiting", in this module to allow destructuring the returned array into variables. This similar to the golang syntax.

**NOTE:** This module works in Node 6+, but in order to use async/await, you need to use Node 8+ or compile with Babel.

## Install
Install via NPM:
```
npm i await-handler --save
```

## Usage
```js
const on = require('await-handler');

async function asyncFunctionExample(callback) {
    let [err, result] = await on(myAsyncTask());
    if(err) return callback(err);
    
    // ...
}

asyncFunctionExample(function(err) {
    console.error(err);
});
```

## API

### on(promise)
**Type:** Function

Adds handler to `promise` for returning data when resolved and an error when rejected. The handlers return an array with the signature `[error, data]`. If `error` is not `null`, it will be the rejection response from the Promise. The `data` value will be the value resolved from the Promise.

---

## Tests
To run the tests:

```
npm install
npm run test
```

## License
MIT License - See LICENSE in the repo.
