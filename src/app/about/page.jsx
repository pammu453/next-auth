import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-t from-cyan-100 via-slate-400 to-pink-400 justify-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>

      <p className="text-lg text-center max-w-2xl">
        Welcome to our application built with Next.js 14 and Clerk for authentication.
        We are dedicated to providing a seamless user experience with secure and reliable technology.
      </p>

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <p className="text-lg">
          Email: <a href="mailto:pramodsavant2001@gmail.com" className="text-blue-600 hover:underline">pramodsavant2001@gmail.com</a>
        </p>
        <p className="text-lg">
          Phone: <a href="tel:+918660625848" className="text-blue-600 hover:underline">+91 8660625848</a>
        </p>
      </div>
    </div>
  )
}

export default About
