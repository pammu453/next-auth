import React from 'react'
import { SignIn } from '@clerk/nextjs'

const page = () => {
    return (
        <div className='flex min-h-screen bg-gradient-to-t from-cyan-100 via-slate-400 to-pink-400 justify-center items-center p-3'>
            <SignIn />
        </div>
    )
}

export default page
