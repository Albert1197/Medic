import React from 'react'
import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
   <>
    <NavBar />
    <div>
      <section class="bg-white py-12">
    <div class="container mx-auto text-center">
      <h2 class="text-2xl font-semibold mb-4">Our services</h2>
      <p class="text-gray-700">We offer a variety of medical services to meet your needs.</p>
      <div class="flex justify-center mt-8 space-x-4">
        <div class="p-4 border rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2">Medical consultation</h3>
          <p class="text-gray-600">Consult with our qualified physicians for diagnosis and treatment.</p>
        </div>
        <div class="p-4 border rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2">Clinical analysis</h3>
          <p class="text-gray-600">We perform a variety of analyses for an accurate diagnosis.</p>
        </div>
        <div class="p-4 border rounded-lg shadow-md">
          <h3 class="text-xl font-semibold mb-2">Surgeries</h3>
          <p class="text-gray-600">Surgical procedures performed by experts in the field.</p>
        </div>
      </div>
    </div>
  </section>

    </div>
    </>
    
  )
}

export default HomePage
