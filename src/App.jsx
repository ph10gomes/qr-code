import { useState } from 'react'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  const [qrCodeUrl, setQrCodeUrl] = useState('')

  function generate(link) {
    QRCodeLink.toDataURL(link, {
      width: 500,
      margin: 3,
    }, (err, url) => {
      setQrCodeUrl(url)
    })
  }

  function handleQrCode(e) {
    setValue(e.target.value)
    generate(e.target.value)
  }

  return (
    <div className="container">
      <div className="card">
        <strong className="title">GERADOR DE QR CODE</strong>
        <span className='subtitle'>Insira uma URL ou texto para criar seu QR Code</span>

        <input type="text" className='input' value={value} onChange={(e) => handleQrCode(e)} placeholder="Seu texto aqui..." />

        <div className="qr-code">
          <QRCode value={value} size={96} elevation={2} />
        </div>

        <a href={qrCodeUrl} download="qrcode.png" className='btn-download'>Download</a>
      </div>
      <div className="footer">
        <span>✌<a href="https://github.com/edutrindade" target="_blank" rel="noreferrer" className="author">Eduardo Trindade</a></span>
      </div>
    </div>
  )
}

export default App
