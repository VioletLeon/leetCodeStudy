/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPointer = 0
    let rightPointer = nums.length - 1
    let halfWay = 0

    while (leftPointer <= rightPointer) {

        halfWay = Math.round(leftPointer + (rightPointer - leftPointer) / 2)

        if (nums[halfWay] === target) {
            return halfWay
        }
        else if (nums[halfWay] > target){
            rightPointer = halfWay - 1
        }
        else { leftPointer = halfWay + 1 }
    }

    return -1
};
