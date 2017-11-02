"use strict";
/**
 * Handler which takes a promise and returns array signature with `[err, data]`.
 * @param  {Promise} promise Promise to handle
 * @return {Array}           Array with signature `[err, data]`
 */
module.exports = function awaitHandler(promise) {
    return promise.then(data => {
        return [null, data];
    })
    .catch(err => [err]);
};
