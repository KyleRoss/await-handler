"use strict";
/**
 * Handler which takes a promise and resolves with array signature `[err, results]`.
 * @param  {Promise} promise    Promise to handle
 * @param  {Object}  errorProps Object containing additional properties to include in a returned error
 * @return {Promise<Array>}     Array with signature `[err, results]`
 */
module.exports = function awaitHandler(promise, errorProps) {
    return promise.then(data => {
        return [null, data];
    }).catch(err => {
        if(errorProps) Object.assign(err, errorProps);
        return [err, undefined];
    });
};
