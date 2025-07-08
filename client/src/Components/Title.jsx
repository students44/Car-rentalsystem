import React from 'react';

const Title = ({ title, subtitle, align }) => {
  const alignClass = align === "left" ? "md:items-start md:text-left" : "";

  return (
    <div className={`flex flex-col justify-center items-center text-center ${alignClass}`}>
      <h1 className="hero-title font-semibold text-4xl md:text-[40px]">
        {title}
        <span className="hero-underline"></span>
      </h1>
      <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-156'>
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
