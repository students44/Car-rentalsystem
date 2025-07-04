import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {



    const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "Best Sellers", "Offers & Deals", "Contact Us", "FAQs"]
        },
        {
            title: "Need Help?",
            links: ["Delivery Information", "Return & Refund Policy", "Payment Methods", "Track your Order", "Contact Us"]
        },
        {
            title: "Follow Us",
            links: [
            { name: "Instagram", url: "https://www.instagram.com" },
            { name: "Twitter", url: "https://www.twitter.com" },
            { name: "Facebook", url: "https://www.facebook.com" },
            { name: "YouTube", url: "https://www.youtube.com" }
    ]
        }
    ];

  return (
   <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-10 border-border-color  text-gray-500">
                <div>
                    <img className="w-34 md:w-32" src={assets.logo} alt="footer logo" />
                    <p className="max-w-[410px] mt-6 text-lg">We Offer All kind`s of rents car for twenty hour for cheap price</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-md space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2025 © PrebuiltUI All Right Reserved.
            </p>
        </div>
  )
}

export default Footer
