'use strict';

var apiService = require('../../../../lib/addTwo');

describe('testing Jamine', function () {
    it('should print to the console', function () {
        console.log("I am from: test -> lib -> unit -> lib -> add_spec.js");
    })

    it('should test the expect() assertion', function () {
        expect(3).toBe(3);
    })

    it('should see if it is connected to api directory', function () {
        expect(apiService(1, 2)).toBe(4);
    })
})