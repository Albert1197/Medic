import React from 'react'
import NavBar from '../components/NavBar'
const AboutPage = () => {
  return (
    <>
    <NavBar />
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">About our clinic</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tortor nec justo
          facilisis gravida in in ex. Vestibulum dapibus tortor eget eros iaculis, a gravida
          quam euismod.
        </p>
        <p className="text-gray-700 mt-4">
          Fusce tincidunt tincidunt eros, eget malesuada odio dignissim sit amet. Sed sit amet
          vehicula odio, a tincidunt lorem.
        </p>
      </div>
    </div>
    </>
  )
}

export default AboutPage
