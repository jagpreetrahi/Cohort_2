function largestNumber(arr){
    let num = -Infinity;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > num){
            num = arr[i]
        }
    }
    return num;

}

const result = largestNumber([2,3,4, 13,65, 100]);
console.log("THe largest Number in the given array is " , result);