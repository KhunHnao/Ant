import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <section className="w-full h-screen bg-cyan-500 flex justify-between items-start">
        <div className="w-2/4 p-24 pr-8 h-full flex flex-col justify-between">
          <div>
            <h1 className="text-6xl font-bold text-white mb-2">URL Shortener + QR Code Generator</h1>
            <p className="text-white text-lg">Just enter your link and you get it in one click. It doesn't get much simpler than that.</p>
          </div>
          <div>
            <p className="text-white text-lg mb-2">Enter your URL:</p>
            <input type="text" className="w-[300px] p-2 bg-white rounded-lg mr-2" placeholder="https://extreme.ly/long/url/00292928345"/>
            <button id="submit" className="p-2 bg-yellow-500 rounded-lg"><i className="text-white mx-2 fa-solid fa-wand-magic-sparkles"></i></button>
          </div>
        </div>
        <div className="w-2/4 p-24 pl-8 h-full flex flex-col justify-center items-center">
          <div>
            <p className="animate-spin"><i className="fa-solid fa-gear text-white text-xl"></i></p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
