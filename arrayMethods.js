const array = [10, 40, 30, 58, 70, 40];

//----------------------------------------------------------------
//return first element that passes condition otherwise undefined
function callback(x){
    return x == 40;
}
const find = array.find(callback);
console.log(find); // 40

//-----------------------------------------------------------------
//return new array that passes condition otherwise undefined
function callback1(x){
    return (x == 40);
}
const find1 = array.filter(callback1);
console.log(find1);

//------------------------------------------------------------------
//return true if an array contains value otherwise false.
const result = array.includes(40);
console.log(result);

//------------------------------------------------------------------
//return the index of first matching element otherwise -1
const result1 = array.indexOf(400);
console.log(result1);

//------------------------------------------------------------------
//splice can remove or add elements to an array
array.splice(2, 1);
console.log(array);

array.splice(3, 0, 12, 13, 14);
console.log(array);