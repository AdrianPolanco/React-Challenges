import { useState } from 'react'
import './index.css'
import InputPercentage from './components/InputPercentage'
import ProgressBar from './components/ProgressBar'
function App() {
  return (
  <div className='flex flex-col mt-20'>
    <div className='flex flex-row justify-center'>
      <h1 className='text-black font-sans xl:text-6xl lg:text-4xl md:text-2xl sm:text-xl'>Progress Bar</h1>
    </div>
    <div className='flex flex-row justify-center mt-48 xl:mt-32 lg:mt-44 md:mt-44 sm:mt-44'>
        <ProgressBar />
    </div>
    <div className='flex flex-row justify-center gap-4 mt-10 xl:mt-12 lg:mt-14 md:mt-14 sm:mt-14'>
        <label className='xl:text-xl'>Input percentage:</label><InputPercentage />
    </div>
    </div>
  )
}

export default App
