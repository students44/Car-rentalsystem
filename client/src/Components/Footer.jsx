import React from "react";
import { assets } from "../assets/assets";
import {
  FaFacebook, 
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaHome
 } from "react-icons/fa";

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: ["Home", "Browse Car", "List Your Car", "About us"],
    },
    {
      title: "Resources",
      links: [
        "Help center",
        "Terms of Service",
        "Privacy & Policy",
        "Insurance",
      ],
    },
  {
  title: "Contact",
  links: [
   
    {
      name: "Islamabad, G/13/2",
      icon: <FaMapMarkerAlt />
    },
    {
      name: "03452645064",
      icon: <FaPhoneAlt />,
      url: "tel:03452645064"
    },
    {
      name: "Insurance",
      icon: <FaBuilding />
    },
    {
      name: "itstudents005@gmail.com",
      icon: <FaEnvelope />,
      url: "mailto:itstudents005@gmail.com"
    }
  ]
},

    {
      title: "Follow Us",
      links: [
        {
          name: "Facebook",
          url: "https://www.facebook.com",
          icon: <FaFacebook />
        },
        {
          name: "YouTube",
          url: "https://www.youtube.com/",
          icon: <FaYoutube />
        },
        { name: "GitHub", url: "https://www.github.com", icon: <FaGithub /> },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com",
          icon: <FaLinkedin />
        },
      ],
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32  pt-15 text-sm text-gray-500 bg-gray-100">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-10  border-border-color  text-gray-500 border-b">
        <div>
          <img className="w-34 md:w-32" src={assets.logo} alt="footer logo" />
          <p className="max-w-[410px] mt-6 text-lg">
            We Offer All kind`s of rents car for twenty hour for cheap price
          </p>
        </div>
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-base font-medium text-gray-900 uppercase md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-md space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {typeof link === "string" ? (
                      <a href="#" className="hover:underline transition">
                        {link}
                      </a>
                    ) : (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline transition flex items-center gap-2"
                      >
                        <span className="text-lg">{link.icon}</span>
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright 2025 © Web Tech Fusion All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
