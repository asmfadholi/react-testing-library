 import React, { useState } from 'react';
 import './button.css'; 

 function Button({label}) {
    const [count, setCounter] = useState(0);

    return (
        <>
            <div data-testid="button" className="button-style">{label}</div>
            <button onClick={() => setCounter(count => count + 1)} data-testid="count">
                Click to increase: {count}
            </button>
        </>
    )
 }

 export default Button;