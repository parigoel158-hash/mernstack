//Array element
// To add element
//!Push(val)
let arr = ["Noida", "Nainital", "Rishikesh"];
console.log(arr);
arr.push("Shimla");
console.log(arr);
//unshift(val)
arr.unshift("Manali");
console.log(arr);
//Splice(index, deleteCount, "Name of elemnts table added");
arr.splice(2,0, "Lucknow", "Agra")
console.log(arr);
//Remove Elements
//!Pop()
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
arr.splice(2,2)
console.log(arr);
//Slice
let name=["Pari", "Purvi", "Vikhyat", "Kartik"]
console.log();
let sname = name.slice(0,3)
console.log(sname);
//join
let joinArray = name.join("@");
console.log(joinArray); 