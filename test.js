"use strict";
const assert = require('assert');
const on = require('./');

describe('Await Handler', function() {
    it('should return promise', function() {
        let result = on(Promise.resolve('success'));
        assert.ok(result instanceof Promise);
    });
    
    describe('Signature', function() {
        it('should receive both properties on success', async function() {
            let [err, res] = await on(Promise.resolve('success'));
            assert.ok(err === null);
            assert.ok(res === 'success');
        });
        
        it('should receive one property on error', async function() {
            let [err, res] = await on(Promise.reject('error'));
            assert.ok(err === 'error');
            assert.ok(!res);
        });
    });
});
