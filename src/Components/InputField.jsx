import React from 'react'

export default function InputField({ setErrorMessage, setInputValue, inputValue }) {
        // Az input mező változásainak kezelése
    const handleInputChange = (e) => {
        setErrorMessage("");
        setInputValue(e.target.value);
    };

    return (
        <input
            className="py-2 px-4 rounded w-full text-2xl border-none outline-none"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Írd be az adatot a QR-kódhoz"
        />
    )
}