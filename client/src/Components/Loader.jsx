import React from 'react'
// import { SunspotLoader } from "react-awesome-loaders";

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-[80vh]'>




        <div className='animation-spin rounded-full h-14 w-14 border-4 border-gray-300 border-t-primary'></div>
      {/* <SunspotLoader
        gradientColors={["#6366F1", "#E0E7FF"]}
        shadowColor={"#3730A3"}
        desktopSize={"128px"}
        mobileSize={"100px"}
      /> */}
    </div>
  )
}

export default Loader
