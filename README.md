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

async function asyncFunctionExample() {
    let [err, result] = await on(myAsyncTask());
    if(err) {
        console.error(err);
        return process.exit(1);
    }
    
    // ... handle the result
    console.log(result);
}
```

## API

### on(promise[, errorProps])
**Type:** Function

Adds handler to `promise` for returning data when resolved and an error when rejected. The handlers return an array with the signature `[error, data]`. If `error` is not `null`, it will be the rejection response from the Promise and `data` will be `undefined`. The `data` value will be the value resolved from the Promise.

Optionally add additional properties to the returned error by providing an Object to `errorProps`.

**Example:**
```js
async function asyncFunctionExample() {
    let [err, result] = await on(myAsyncTask(), { customMessage: 'Something failed!' });
    if(err) {
        console.error(err.customMessage);
        return process.exit(1);
    }
    
    // ... handle the result
    console.log(result);
}
```

---

## Tests
To run the tests:

```
npm install
npm run test
```

## License
MIT License

Copyright (c) 2017-2018 Kyle Ross

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
