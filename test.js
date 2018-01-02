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
        
        it('should receive error and undefined', async function() {
            let [err, res] = await on(Promise.reject('error'));
            assert.ok(err === 'error');
            assert.ok(res === undefined);
        });
        
        it('should include additional properties on error object', async function() {
            let [err, res] = await on(Promise.reject(new Error('Test')), { prop: 'test' });
            assert.ok(err instanceof Error);
            assert.ok(err.prop === 'test');
            assert.ok(res === undefined);
        });
    });
});
