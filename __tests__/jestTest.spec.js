//This file makes unit tests.

describe('A simple test for the 6th assignment', () => {

    const transform = require('../transform.js');

    // The test case.
    
    test('Test: if text becomes uppercase', () => {
        return transform('test').then(text => {
            expect(text).toBe('TEST');
        });

    });

});