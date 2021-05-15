/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let counts = {};
    for (let item of nums) {
        if (counts[item]) {
            return true;
        } else {
            counts[item] = 1;
        }
    }
    return false;
};

