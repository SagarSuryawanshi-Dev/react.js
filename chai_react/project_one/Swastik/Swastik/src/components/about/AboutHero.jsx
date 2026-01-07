import React from "react";
import images from "../../assets/aboutPage/images";

const imageClass = "w-full h-screen object-cover";

const AboutHero = () => {
  return (
    <div className="relative w-full h-screen overflow-x-hidden bg-amber-900/10">

      {/* Images */}
      <div className="absolute inset-0 grid grid-cols-5 brightness-50">
        <img src={images.imageOne} className={imageClass} alt="" />
        <img src={images.imageTwo} className={imageClass} alt="" />
        <img src={images.imageThree} className={imageClass} alt="" />
        <img src={images.imageFour} className={imageClass} alt="" />
        <img src={images.imageFive} className={imageClass} alt="" />
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-start px-100 pt-50 text-white">
        <h2 className="text-xl">About Us</h2>
        <div className="w-32 h-1 bg-white rounded-full my-3"></div>
        <h1 className="text-5xl font-bold leading-20">
          A Legacy of <br />
          26 Years <br />
          and Counting
        </h1>
      </div>

    </div>
  );
};

export default AboutHero;
