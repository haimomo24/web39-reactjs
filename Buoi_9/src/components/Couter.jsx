
import { useDispatch, useSelector } from 'react-redux'
import { dowCount, upCount } from '../actions/couterAction';

const Couter = () => {
  const result = useSelector((state)=> state);

  //  cap nat data tu UI len store 
  const dispath = useDispatch();

    const handleIncrement = ()=>{
      dispath(upCount());
    }
    const handleDecrement = ()=>{
      dispath(dowCount());
    }
  return (
    <>
        <button onClick={handleIncrement}>+</button>
        { <h1>{result.count}</h1> }
        <button onClick={handleDecrement}>-</button>

    </>
  )
}

export default Couter