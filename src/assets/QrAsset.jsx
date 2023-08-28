import {PiQrCode,PiQrCodeFill} from "react-icons/pi";

export default function QrAsset({isSelected}) {
    return (
        <div className="w-full h-full">
            {isSelected ? <PiQrCodeFill size="28"/> : <PiQrCode size="28"/>}
        </div>
     )
}