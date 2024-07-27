

const ChildA = ({array}) => {

// check array co ton tai hay khong hay mang rong  ?

if(array.length < 0) return <p>khong ton tai gia tri </p>


  return (

    array.map((item, index ) =>{
        // console.log(item)
        return (
            <div>
                <h1 key={index}>{item.name}</h1>
               
            </div>
            
        )
    })
  )
}

export default ChildA