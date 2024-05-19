//output message to a console.
console.log("Hello World");

//array od objects displayed as table
const table = [
    {id:1, name:'lakshmi'},
    {id:2, name:'Drishit'},
    {id:3, name:'chukki'}
];
console.table(table);

//output message to console when assertion fails
console.assert( x > y, "x is lesser than y");

//output a trace of file name and line numbers where this function was invoked
const fun1 = () =>{ console.trace("in function1"); };
const fun2 = () =>{ console.trace("in function2"); };
const mainFun = () =>{
    fun1(); 
    fun2();
}
mainFun();

//enables time measurement of code execution for testing purpose
console.time("Timer");
for (let index = 0; index < 1000000000000000; index++) {
    
}
console.timeEnd("Timer");

//output error, information and warning 
console.error("this is an error");
console.info("this is an information");
console.warn("this is a warning");