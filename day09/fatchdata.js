function user(){
   fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then((val) => {
    console.log(val);

  }).catch(err => {
     console.log(err)
  })

}

//
async function user(){
  let resp = await fetch("https://jsonplaceholder.typicode.com/users");
  resp = await resp.json();
  console.log(resp)
}
user()
 