import { useState } from 'react';


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );

    const increment = ( byVal = 1 ) => {
        setCounter( counter + byVal);
    };

    const decrement = ( byVal = 1 ) => {

        // Si llega a 0 se vuelve false
        counter && setCounter( counter - byVal);
    };
    
    const reset = () => {
        setCounter( initialValue );
    };

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}
