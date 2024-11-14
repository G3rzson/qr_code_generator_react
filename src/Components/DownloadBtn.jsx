import React from 'react'

export default function DownloadBtn( { setErrorMessage, setIsGenerated, isGenerated, svgRef } ) {
        // SVG QR-kód letöltése
    const downloadSVG = () => {
        if (!isGenerated) {
            setErrorMessage("A QR-kód letöltéséhez szükséges megadni egy értéket!");
            return;
        }
        const svgContent = svgRef.current.innerHTML;
        const blob = new Blob([svgContent], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "qrcode.svg";
        link.click();

        URL.revokeObjectURL(url);
        setIsGenerated(false);
    };

    return (
        <button 
            className="py-2 px-4 rounded bg-green-500 hover:bg-green-600 text-white"
            onClick={downloadSVG}
        >
            QR-kód letöltése SVG formátumban
        </button>
    )
}
