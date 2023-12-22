import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [url, setUrl] = useState('');
  const [processing, setProcessing] = useState(false);
  const [qrCodePath, setQrCodePath] = useState('');

  const generateQRCode = async () => {
    try {
      setProcessing(true);

      // Make a request to generate QR code
      const qrResponse = await axios.post('/api/v1/generate_qr', {
        start_url: url,
      });

      // Extract QR code path from the response
      const { qr_code_path } = qrResponse.data;
      setQrCodePath(qr_code_path);
    } catch (error) {
      console.error('Failed to generate QR code:', error);
    } finally {
      setProcessing(false);
    }
  };

  const generateShortUrl = async () => {
    try {
      setProcessing(true);

      // Make a request to generate short URL
      const shortUrlResponse = await axios.post('/api/v1/generate_link', {
        start_url: url,
      });

      // Handle the response as needed
      console.log(shortUrlResponse.data);
    } catch (error) {
      console.error('Failed to generate short URL:', error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <Header />
      <section className="w-full h-screen bg-cyan-500 flex justify-between items-start">
        <div className="w-2/4 p-24 pr-8 h-full flex flex-col justify-between">
          <div>
            <h1 className="text-6xl font-bold text-white mb-2">
              URL Shortener + QR Code Generator
            </h1>
            <p className="text-white text-lg">
              Just enter your link and you get it in one click. It doesn't get
              much simpler than that.
            </p>
          </div>
          <div>
            <p className="text-white text-lg mb-2">Enter your URL:</p>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-[300px] p-2 bg-white rounded-lg mr-2"
              placeholder="https://extreme.ly/long/url/00292928345"
            />
            <button
              id="submit"
              onClick={generateQRCode} // Trigger QR code generation
              className="p-2 bg-yellow-500 rounded-lg"
            >
              <i className="text-white mx-2 fa-solid fa-wand-magic-sparkles"></i>
            </button>
            <button
              id="submit"
              onClick={generateShortUrl} // Trigger short URL generation
              className="p-2 bg-yellow-500 rounded-lg ml-2"
            >
              <i className="text-white mx-2 fa-solid fa-link"></i>
            </button>
          </div>
        </div>
        <div className="w-2/4 p-24 pl-8 h-full flex flex-col justify-center items-center">
          {processing ? (
            <>
              <p className="animate-spin">
                <i className="fa-solid fa-gear text-white text-2xl"></i>
              </p>
              <p className="text-white animate-pulse">
                Processing your URL...
              </p>
            </>
          ) : (
            // Display QR code image if available
            qrCodePath && (
              <img src={qrCodePath} alt="QR Code" className="w-64 h-64" />
            )
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
