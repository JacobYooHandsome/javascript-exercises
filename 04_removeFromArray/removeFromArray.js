const removeFromArray = function(arr, ...nums) {
    let returnArr = arr;
    for (let i=0; i<nums.length; i++) {
        returnArr = returnArr.filter((element) => element !== nums[i]);
    }
    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
