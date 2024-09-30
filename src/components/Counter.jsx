import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../app/features/couter/couterSlice.js'

const Counter=()=> {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  return (<>
  <h1>{count}</h1>
  <button onClick={()=>dispatch(increment())}>Add me</button>
  <button onClick={()=>dispatch(decrement())}>Substract me</button>
  </>
  )
}
export default Counter;