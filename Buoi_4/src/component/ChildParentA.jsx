import React from 'react'

const ChildParentA = ({data,email,age}) => {
    console.log(data);
    console.log(email);
    console.log(age);
  return (
    <>
     <h1>heloo anh em {data} </h1>
     <p>{email}</p>
     <p>Tuoi:{age}</p>
    </>
   
  )
}



export default ChildParentA;