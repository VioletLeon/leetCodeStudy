/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let newSums = []

    for (let i = 0; i < nums.length; i++){
        let j = ( i + k) % nums.length;
        console.log(i + k, i, k)
        newSums[j] = nums[i]
        console.log(newSums, nums)
    }

    for (let i=0; i < nums.length; i++){
        nums[i] = newSums[i]
    }

    return newSums
};
