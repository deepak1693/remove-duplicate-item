'use strict';

/**
 * Adds commas to a number
 * @param {array} passingArray
 * @return {array}
 */
let removeDuplicateFromArray = (passingArray) => {
    return [... new Set(passingArray)];
};

module.exports = removeDuplicateFromArray