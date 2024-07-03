/* array, objects and functions are all reference type unlike boolean,number and 
string which are primitive types
*/
//SHALOW COPY
const array = ['noodles',{list:["rice","egg","flour"]}];
const arrayCopy = array;

arrayCopy[0] = "pasta";

console.log(array); //[ 'pasta', { list: [ 'rice', 'egg', 'flour' ] } ]
console.log(arrayCopy); //[ 'pasta', { list: [ 'rice', 'egg', 'flour' ] } ]

//use spread operator to avoid complete copy
const arraySpread = [...array];
arraySpread[0] = "maggi";

console.log(array); //[ 'pasta', { list: [ 'rice', 'egg', 'flour' ] } ]
console.log(arraySpread); //[ 'maggi', { list: [ 'rice', 'egg', 'flour' ] } ]

arraySpread[1].list[0] = "ragi";

//This still does not work because nested objects still are of reference type. This is shallow copy
console.log(array);  //[ 'pasta', { list: [ 'ragi', 'egg', 'flour' ] } ]
console.log(arraySpread); //[ 'maggi', { list: [ 'ragi', 'egg', 'flour' ] } ]

//--------------DEEP COPY-----------------------
const arrayDeep = JSON.parse(JSON.stringify(array));

arrayDeep[1].list[1] = 'scrambled egg';

console.log(array); //[ 'pasta', { list: [ 'ragi', 'egg', 'flour' ] } ]
console.log(arrayDeep); //[ 'pasta', { list: [ 'ragi', 'scrambled egg', 'flour' ] } ]
