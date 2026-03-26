// STARTUP CODE
import { useState } from 'react';
export default function DeleteModal() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="p-5 border">
            <button onClick={() => setIsVisible(true)} className="bg-red-500 text-white p-2">
                DELETE ITEM
            </button>

            {/* GAP: Use the && operator to conditionally show the div below */}
            {isVisible && (
                <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400">
                    <p>Are you sure ?</p>
                    <button onClick={() => setIsVisible(false)} className="bg-gray-300 p-1">
                        PROCEED (Dismiss)
                    </button>
                </div>
            )}
        </div>

    );
}