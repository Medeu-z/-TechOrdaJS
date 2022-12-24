function modifyArray(nums) {
    for(let i = 0; i < nums.length; i++){
        nums[i] = check(nums[i]);
    }
    return nums;
}
let check = (n) => {
    return (n % 2 == 0 && n != 1) ? n * 2 : n * 3 ;
}

console.log(modifyArray([1, 2, 3, 4, 5]));