import React from 'react'
import {SignUp} from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex justify-center min-h-screen bg-gradient-to-t from-cyan-100 via-slate-400 to-pink-400 items-center p-3'>
      <SignUp/>
    </div>
  )
}

export default page
