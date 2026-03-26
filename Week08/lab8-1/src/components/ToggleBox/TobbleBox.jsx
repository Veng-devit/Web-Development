// STARTUP CODE
import { useState } from 'react';
import './ToggleBox.css'; // Assume .active { background: blue; color: white; }

export default function ToggleBox () {
    const [isSelected, setIsSelected] = useState(false);

    const handleToggle = () => {
        // GAP: Update state to the opposite of its current value
        setIsSelected(!isSelected);

    };
    return (
        <div className="toggle-container p-4">
            <p className={isSelected ? "active toggle-text" : "toggle-text"}>Style me !</p>
            <button onClick={handleToggle} className="toggle-btn border p-1">
                {isSelected ? "Deactivate" : "Activate"}
            </button>
        </div>
    );
}