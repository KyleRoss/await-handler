# await-handler
[![npm](https://img.shields.io/npm/v/await-handler.svg?style=for-the-badge)](https://www.npmjs.com/package/await-handler) [![npm](https://img.shields.io/npm/dt/await-handler.svg?style=for-the-badge)](https://www.npmjs.com/package/await-handler) [![David](https://img.shields.io/david/KyleRoss/await-handler.svg?style=for-the-badge)](https://david-dm.org/KyleRoss/await-handler) [![Travis](https://img.shields.io/travis/KyleRoss/await-handler/master.svg?style=for-the-badge)](https://travis-ci.org/KyleRoss/await-handler) [![license](https://img.shields.io/github/license/KyleRoss/await-handler.svg?style=for-the-badge)](https://github.com/KyleRoss/await-handler/blob/master/LICENSE) [![Beerpay](https://img.shields.io/beerpay/KyleRoss/await-handler.svg?style=for-the-badge)](https://beerpay.io/KyleRoss/await-handler)

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
MIT License. See [License](https://github.com/KyleRoss/await-handler/blob/master/LICENSE) in the repository.
