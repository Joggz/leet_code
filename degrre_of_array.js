var findShortestSubArray = function (nums) {
    let numCount = new Map();
    let degree = 0

    let first_seen = new Map()
    let min_length = 0

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
            // console.log(nums[i], '==>', i, 'first_seen @ ==>', first_seen.get(nums[i]));
            // console.log('min_length ==>', i - first_seen.get(nums[i]) + 1 );
            min_length = i - first_seen.get(nums[i])  + 1
        }
    }
    return 'min-length==>', min_length;
};

const subArray = findShortestSubArray([1, 2, 2, 3, 4, 2])

console.log(subArray);