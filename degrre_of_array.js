var findShortestSubArray = function (nums) {
    let numCount = new Map();
    let degree = 0

    let first_seen = new Map()
    let min_length = 0
//  *** Pseudo Code ****
//  1. keep track of where eacj element occurs first
//  2 keep track of the number of times each element occurs
//  3 the differnece between the last index and the first index at which the element occur  should be the contigous subarray
    for (let i = 0; i <= nums.length; i++) {
        if (first_seen) {
            if (first_seen.get(nums[i]) === undefined) {
                first_seen.set(nums[i], i)
            }
            if (first_seen.get(nums[i])) {
                first_seen.set(nums[i], first_seen.get(nums[i]))
            };
        }
        numCount.set(nums[i], (numCount.get(nums[i]) || 0) + 1)
        

        if (numCount.get(nums[i]) > degree) {
            degree = numCount.get(nums[i])
            min_length = i - first_seen.get(nums[i]) + 1
        } else if (numCount.get(nums[i])=== degree) {
            console.log('i got here');
            min_length = Math.min(min_length, i - first_seen.get(nums[i]) + 1)
        }
    }

    // console.log(numCount, first_seen);
    return 'min-length==>', min_length;
};

const subArray = findShortestSubArray([2,1,1,2,1,3,3,3,1,3,1,3,2])
// [2,1,1,2,1,3,3,3,1,3,1,3,2]
// [1,2,2,3,1]
console.log(subArray);