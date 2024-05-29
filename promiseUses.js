fetch('https://fakestoreapi.com/products/9')
.then(function onfulfillHandler(response){
    return response.json();
})
.then(function onfulfillHandler2(json){
    console.log(json);
})
.catch(function errorHandling(error){
    console.log('error in fetching')
})

Promise.all([
    fetch('https://fakestoreapi.com/products/9'),
    fetch('https://fakestoreapi.com/products/1'),
    fetch('https://fakestoreapi.com/products/9') 
])
.then(function onHandling(response){
    return Promise.all(response.map(res => res.json()));
})
.then(function print(res){
    console.log('i am response',res)
})