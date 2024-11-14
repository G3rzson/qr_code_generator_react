import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import DownloadBtn from "./DownloadBtn";
import GenerateBtn from "./GenerateBtn";
import InputField from "./InputField";

export default function QRCodeGenerator() {
    const canvasRef = useRef(null);
    const svgRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const [qrValue, setQrValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isGenerated, setIsGenerated] = useState(false);

    // QR-kód generálása canvas-hoz és svg-hez
    useEffect(() => {
      if (qrValue) {
        QRCode.toCanvas(canvasRef.current, qrValue, { width: 128 });
        QRCode.toString(qrValue, { type: 'svg' }, (err, svgString) => {
          if (err) return console.error(err);
          svgRef.current.innerHTML = svgString;
        });
      }
    }, [qrValue]);

    return (
        <div className="flex items-center justify-center flex-col p-4">
            <p className="text-red-400 text-2xl mb-1">{errorMessage}</p>
            <div className="flex items-center justify-center flex-col gap-4 w-4/5">
                <InputField 
                    setErrorMessage={setErrorMessage}
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                />
                <GenerateBtn 
                    setInputValue={setInputValue}
                    inputValue={inputValue}
                    setErrorMessage={setErrorMessage}
                    setQrValue={setQrValue}
                    setIsGenerated={setIsGenerated}
                />
              </div>
              <div className="m-4">
                  <canvas ref={canvasRef} />
              </div>
              <div ref={svgRef} style={{ display: 'none' }}></div>
              <DownloadBtn 
                  setErrorMessage={setErrorMessage}  
                  setIsGenerated={setIsGenerated}
                  isGenerated={isGenerated}
                  svgRef={svgRef}
              />
        </div>
    );
};