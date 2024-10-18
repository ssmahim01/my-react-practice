import { useState } from "react";

const Counter = () => {
    const [state, setState] = useState(0);

    const handleIncrease = () => {
        setState(state + 1)
    };

    const handleDecrease = () => {
        setState(state - 1)
    };

    return (
        <div>
            <h3>Increase Or Decrease Comment: {state}
            </h3>
        <div style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center'
        }}>
            <button style={{
                backgroundColor: 'chartreuse',
                fontWeight: '700',
            }}onClick={handleIncrease}>Add</button>

            <button style={{
                backgroundColor: 'tomato',
                fontWeight: '700',
            }}onClick={handleDecrease}>{state < 0 && handleIncrease()}Remove</button>
            </div>
        </div>
    );
};

export default Counter;