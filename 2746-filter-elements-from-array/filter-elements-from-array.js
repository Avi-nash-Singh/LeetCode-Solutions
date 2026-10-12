/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let res = []
    for(let i =0; i<arr.length; i++){
        let val = fn(arr[i], i)
        if(val !== 0 && val !== false){
            res.push(arr[i])
        }
    }
    return res
};