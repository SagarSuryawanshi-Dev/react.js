import React from 'react'
import images from "../../assets/aboutPage/images";

const Details = () => {
  return (
    <div className='w-screen h-screen bg-[#FFFCF5] flex p-12'>

      {/* 1st block */}
      <div className='mt-16'>

        <div className='w-30 h-8 bg-black text-white flex justify-center items-center'>
          <h5>WHO WE ARE</h5>
        </div>

        {/* tagline */}
        <div className="mt-6 mb-20 max-w-2xl">
          <h1 className="text-5xl font-normal leading-tight">
            Building <span className="font-bold">Dreams,</span>
          </h1>
          <h1 className="text-5xl font-normal leading-tight">
            Creating <span className="font-bold">Legacies</span>
          </h1>
        </div>

        {/* blocks */}
        {/* <div className=' grid grid-cols-2 grid-rows-2 w-fit gap-4 p-2 mt-10'>
          <div className='  hover:duration-500 hover:bg-black hover:text-white bg-white shadow-2xl'>
            <h1 className='font-bold text-[80px] leading-16'>15+</h1>
            <p className='w-40.75 h-9.75'>Experience luxury</p>
          </div>
          <div className='w-67.5 h-43 font-bold  grid justify-center items-center hover:duration-500 hover:bg-black hover:text-white bg-white shadow-2xl'>
            <h1 className='font-bold text-[80px] leading-16'>15+</h1>
            <p className='w-40.75 h-9.75'>Experience luxury</p>
          </div>
          <div className=' w-67.5 h-43 font-bold  grid justify-center items-center hover:duration-500 hover:bg-black hover:text-white bg-white shadow-2xl'>
            <h1 className='font-bold text-[80px] leading-16'>15+</h1>
            <p className='w-40.75 h-9.75'>Experience luxury</p>
          </div>
          <div className='w-67.5 h-43 font-bold  grid justify-center items-center hover:duration-500 hover:bg-black hover:text-white bg-white shadow-2xl'>
            <h1 className='font-bold text-[80px] leading-16'>15+</h1>
            <p className='w-40.75 h-9.75'>Experience luxury</p>
          </div>
        </div> */}


      </div>

      {/* 2nd block */}
      <div className='flex-1 p-8'>
        <div className='mt-10'>
          <p className='mb-10 text-base text-[20px]'>Founded in 1998, Swastik Group emerged from a simple vision: to create homes where families don't just live, but thrive. What started as a modest construction venture has evolved into one of Pune's most respected real estate developers, known for architectural excellence, timely delivery, and unwavering commitment to quality.</p>
          <p className='mb-10 text-base text-[20px]'>
            Today, with 5000+ happy families calling Swastik their home, we continue to push boundaries, embrace innovation, and set new benchmarks in sustainable urban living. Our journey from a single project to becoming a household name is powered by the trust of our customers and the dedication of our team.
          </p>
          <p className='mb-10 text-base text-[20px]'>
            Over 26 years, we've transformed Pune's skyline with 24+ completed projects spanning over 3.2 million square feet. Each building stands as a testament to our core philosophy: that a home is not just a structure, but a sanctuary where memories are made and futures are built.
          </p>
        </div>

        <div>
          <img src={images.weareimage} alt="" />
        </div>

      </div>
    </div>

  )

}

export default Details;
