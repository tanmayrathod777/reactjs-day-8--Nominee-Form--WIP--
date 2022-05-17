import React , {useState , useMemo} from 'react'

export default function usememo() {
    const [count , setCount] = useState(0);
    const [ item , setItem ] = useState(10);
  return (
    <div>
        <button onClick={() => setCount(count+1)}>
        </button>
    </div>
  )
}
