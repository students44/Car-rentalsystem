import React from 'react'

const Login = () => {
 return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-4 flex items-center justify-center">
      <div className="grid md:grid-cols-2 w-full max-w-6xl gap-10">

        {/* Left Column */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
            The best offer <br />
            <span className="text-blue-200">for your business</span>
          </h1>
          <p className="text-blue-100 px-2 md:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        {/* Right Column (Form) */}
        <div className="relative">
          {/* Optional background shapes */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full opacity-30 -z-10 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full opacity-30 -z-10 blur-2xl"></div>

          <div className="bg-white bg-opacity-80 backdrop-blur-md shadow-md rounded-lg p-8 w-full">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input type="password" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="subscribe" className="mr-2" />
                <label htmlFor="subscribe" className="text-sm text-gray-700">Subscribe to our newsletter</label>
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Sign Up
              </button>
            </form>

            {/* Social Buttons */}
            <div className="text-center mt-6">
              <p className="mb-3 text-gray-600">or sign up with:</p>
              <div className="flex justify-center space-x-4 text-blue-600">
                <a href="#" className="hover:text-blue-800">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-blue-800">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-blue-800">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="hover:text-blue-800">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login
