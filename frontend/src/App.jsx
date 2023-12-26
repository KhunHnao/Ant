import { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [url, setUrl] = useState('');
  const [processing, setProcessing] = useState(false);
  const [qrCodePath, setQrCodePath] = useState('');
  const [shortUrl, setShortUrl] = useState('')

  const performMagic = async () => {
    try {
      setProcessing(true);

      // Make a request to generate QR code
      const qrResponse = await axios.post('https://5000-kunhnao-ant-b5tt6xs3lep.ws-eu107.gitpod.io/api/v1/generate_qr', {
        start_url: url,

      });

      const { qr_code_path } = qrResponse.data;
      setQrCodePath("https://5000-kunhnao-ant-b5tt6xs3lep.ws-eu107.gitpod.io/" + qr_code_path);



      // Make a request to generate short URL
      const shortUrlResponse = await axios.post('https://5000-kunhnao-ant-b5tt6xs3lep.ws-eu107.gitpod.io/api/v1/generate_link', {
        start_url: url,
      });

      setShortUrl(shortUrlResponse.data["id"]);


    } catch (error) {
      console.error('Failed to perform magic:', error);
    } finally {
      setProcessing(false);
    }
  };

  const copyShortUrl = async () => {
    try {
      await navigator.clipboard.writeText(`https://ant.com/${shortUrl}`);
      alert('Short URL copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy short URL:', error);
    }
  };


  return (
    <>
      <Header />
      <section className="w-full min-h-screen md:h-screen bg-cyan-500 md:flex md:justify-between md:items-start">
        <div className="w-screen md:w-2/4 p-4 md:p-24 pt-24 md:pr-8 h-full flex flex-col md:justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
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
              className="w-[300px] p-2 bg-white rounded-lg mr-2 mb-2"
              placeholder="https://extreme.ly/long/url/00292928345"
            />
            <button
              id="submit"
              onClick={performMagic} // Trigger both actions
              className="p-2 bg-yellow-500 rounded-lg"
            >
              <i className="text-white mx-2 fa-solid fa-wand-magic-sparkles"></i>
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/4 p-4 md:p-24 md:pl-16 h-full flex flex-col justify-center items-center">
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
            qrCodePath && (
              <div className="w-full h-full flex flex-col">
                <h1 className="text-lg mb-3 text-white">You've got your link and QR code! &#x1F389;</h1>
                <div id="short_url" className="flex justify-between items-center text-white p-2 rounded-lg border-2 border-white w-full md:w-[400px] mb-4">
                  <p>ant.com/{shortUrl}</p>
                  <div>
                    <i className="fa-solid fa-copy mr-2" onClick={copyShortUrl}></i>
                    <a href="https://ant.com/${shortUrl}" target="_blank"><i className="fa-solid fa-external-link"></i></a>
                  </div>
                </div>
                <div className=''>
                  <a href={url}>
                    <img src={qrCodePath} alt="QR Code" className="w-[250px] h-[auto] rounded-lg" />
                  </a>
                  <div>
                    <a href={qrCodePath}
                      download={qrCodePath} >
                      <p className="text-white p-1 border-2 rounded-lg w-fit mt-4"><i className="fa-solid fa-download"></i> Download QR Code</p>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
