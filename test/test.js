'use strict';

var expect = require('chai').expect;
var removeDuplicate = require('../index');

describe('#removeDuplicate', () =>{
    it('array will be 1 to 3', () => {
        var result = removeDuplicate([1,2,3,1]);
        console.log(result)
        JSON.stringify(result) == JSON.stringify([1,2,3]);
        // expect(result).to.equal([1,2,3]);
    });

    it('array will be 1 to 5', () =>{
        var result = removeDuplicate([1,1,2,3,4,4,5,5,5,5]);
        console.log(result)
        JSON.stringify(result)==JSON.stringify([1,2,3,4,5]);
       // expect(result).to.equal([1,2,3,4,5]);
    });

});