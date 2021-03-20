function findShortSubArray(nums: number[]): number {
    const first_seen = new Map<number, number>();
    let min_length: number = 0;
    let degree: number = 0
    const numCount = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
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
        } else if (numCount.get(nums[i]) === degree) {
            console.log('i got here');
            min_length = Math.min(min_length, i - first_seen.get(nums[i]) + 1)
        }
    }
    return min_length;
};

console.log(findShortestSubArray([2, 1, 1, 2, 1, 3, 3, 3, 1, 3, 1, 3, 2]))
// [2,1,1,2,1,3,3,3,1,3,1,3,2]
// [1,2,2,3,1]