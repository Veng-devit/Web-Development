import { useState } from "react";

// STARTUP CODE
export default function AsyncCounter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="border border-gray-400 w-60 p-4">
                <h1>Count: {count}</h1>
                <button onClick={handleIncrement}>+1 (Reliable)</button>
            </div>
        </div>
    );
}