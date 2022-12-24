function getSecondLargest(nums) {
    let arr = nums.sort((a,b) => b - a);
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < max){
            return arr[i];
            break;
        }
    }
}

console.log(getSecondLargest([2, 3, 6, 6, 5]));