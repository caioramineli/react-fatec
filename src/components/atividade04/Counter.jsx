import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);
    return (
        <>
            <h1>Counter</h1>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                // setTimeout(() => {
                //     alert(number)
                // }, 3000)
            }}>+3 </button>
        </>
    )
}   
