import { QRCodeSVG } from "qrcode.react"

const Qrcode = () => {
  return (
    <QRCodeSVG value={JSON.stringify({serialNumber: 'D208-SongPicker'})} className="w-80 h-80" bgColor="transparent" />
  )
}

export default Qrcode