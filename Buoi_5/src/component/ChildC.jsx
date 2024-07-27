

const ChildC = ({array}) => {
    const lengthArr =array.length;
  return (
    <div>
        {lengthArr && array.map((value, index) =>{
            return <h1 key={index}>{value.name}</h1>
        })}
        {! lengthArr && "khong ton tai du lieu"}
    </div>
  )
}

export default ChildC