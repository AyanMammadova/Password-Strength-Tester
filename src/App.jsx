import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='min-h-[100vh] flex flex-col justify-between w-[100%] bg-black'>
        <div className='flex flex-col'>
          <Header />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
