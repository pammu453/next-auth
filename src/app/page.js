import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-cyan-100 via-slate-400 to-pink-400 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome to the Next.js 14 & Clerk Integration</h1>
      <p className="text-lg mt-4">
        This is a basic example of integrating Clerk for authentication and saving user data with MongoDB.
      </p>
    </div>
  )
}

export default Home
