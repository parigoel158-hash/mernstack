let promise=new Promise((resolve,rejected)=>{
  let status = false;
  if(status){
    resolve("Work Completed");
   }
   else{
    rejected("Not Completed");
  }
   })
console.log(promise);
//How to use?
promise.then((val)=>{
  console.log(val)
}).catch((err)=>{
  console.log(err)
})