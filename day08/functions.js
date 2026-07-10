//Higher Order function

let arr= [4, 5, 7, 8, 9, 10, 35, 7, 8, 44, 45,];
//map,filter,reduce

let res =arr.map(function(val){
    return val*9;
})
console.log(arr);
console.log(res);

//Arrow Function
let result = (fnamme) =>{
    return 'Tis is the result : ${fname}'
}
console.log(result("Aman"));

//Callback function
setTimeout(()=>{
    console.log("Welcome to the js world");

},5000)

setInterval(()=>{
    console.log("Working here")
}, 1000)