import React from 'react'
import './spinner.css'
export default function Spinner() {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className='spinner'>

        </div>
        <p className='text-bgDark text-lg font-semibold'>Loading...</p>
    </div>
  )
}
