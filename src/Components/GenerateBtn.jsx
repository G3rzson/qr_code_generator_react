import React from 'react'
import DOMPurify from 'dompurify';

export default function GenerateBtn({ setInputValue, inputValue, setErrorMessage, setQrValue, setIsGenerated }) {
        // A QR-kód generálása az input értéke alapján
    const generateQRCode = () => {
        if (inputValue.trim() === "") {
            setErrorMessage("A QR-kód generáláshoz szükséges megadni egy értéket!");
            return;
        }
        setQrValue(DOMPurify.sanitize(inputValue));
        setInputValue('');
        setIsGenerated(true);
    };

    return (
        <button 
            className="py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 text-white"
            onClick={generateQRCode}
        >
            QR-kód generálása
        </button>
    )
}