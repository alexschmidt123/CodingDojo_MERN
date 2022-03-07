//https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

function bubbleSort(arr){
    // move from left to right in the array starting at index 0
    for (let j = 0; j < arr.length -1; j++){
        for (let i = 0; i < arr.length - j ; i++){
            // compar the value at the current index wit the value at the next- if value is greater than the next
            if (arr[i] > arr[i+1]){
                //if out of order,Swap value at the current index with the value of the next
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
        }

    }
    return arr
} 





console.log(bubbleSort([5,23,0,12,8,6])) //[0,5,6,8,12,23]