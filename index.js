"use strict";
/**
 * Handler which takes a promise and returns array signature with `[err, data]`.
 * @param  {Promise} promise    Promise to handle
 * @param  {Object}  errorProps Object containing additional properties to include in a returned error
 * @return {Array}              Array with signature `[err, data]`
 */
module.exports = function awaitHandler(promise, errorProps) {
    return promise.then(data => {
        return [null, data];
    }).catch(err => {
        if(errorProps) Object.assign(err, errorProps);
    });
};
