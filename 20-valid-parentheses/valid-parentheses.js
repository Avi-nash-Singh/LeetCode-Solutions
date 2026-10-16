/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let res = []
    let val = s.split('')
    let brackets = {
        ')':'(',
        ']':'[',
        "}":"{"
    }
    if(s.length%2 !==0) return false
    for(let i of val){
        if(i === '(' || i === '[' || i === '{' ){
            res.push(i)
        }else{
            if(res[res.length-1] !== brackets[i]){
                return false
            }
            res.pop()
        }

    }
    return res.length === 0
};