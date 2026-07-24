import React, { useState } from 'react'
const User = () => {

    let [userName, setUserName] =
    useState("Pari");
    const changeName = ()=>{
        //alert('working!!')
        //userName = "Purvi";
        console.log(userName)
        setUserName('Purvi')
    }
    return (
        <>
        <h1> Welcome {userName} </h1>
        <button classsName='btn btn-success' onClick={changeName}>
            Change Name
        </button>
        </>
    ) 
}
export default User;