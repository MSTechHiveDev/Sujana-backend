'use client';

import React from 'react';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import whatsappIcon from '../../assets/whatsapp.png';
import youtubeIcon from '../../assets/youtube.png';

export default function FloatingSocialMedia() {
  const phoneNumber = '919876543210'; // 🔥 Replace with your actual number

  const socialLinks = [
    {
      href: 'https://www.instagram.com/kadapa_public_school',
      icon: instagramIcon,
      bottom: 'bottom-60',
    },
    {
      href: 'https://www.facebook.com/kadapapublicschool/',
      icon: facebookIcon,
      bottom: 'bottom-42',
    },
    {
      href: 'https://www.youtube.com/@KadapaPublicSchool',
      icon: youtubeIcon,
      bottom: 'bottom-24',
    },
    {
      href: `https://wa.me/${phoneNumber}`,
      icon: whatsappIcon,
      bottom: 'bottom-6',
    },
  ];

  return (
    <>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            fixed right-3 sm:right-4 lg:right-6 z-[100000]
            flex
            w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 items-center justify-center
            transition-all duration-300
            hover:scale-110 animate-pulse
            ${link.bottom}
          `}
        >
          <img src={link.icon} alt="" className="w-8 h-8 sm:w-10 sm:h-10" />
        </a>
      ))}
    </>
  );
}
