'use strict';

/**
 * Adds commas to a number
 * @param {array} passingArray
 * @return {array}
 */
module.exports = (passingArray) => {
    return [... new Set(passingArray)];
};