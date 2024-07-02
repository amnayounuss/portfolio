import React from 'react';
import Link from 'next/link';
import {FaGithub, FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa"

const social = [
  { icon: <FaGithub />, path: 'https://github.com/amnayounuss' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/amna-younus/' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/codebyamna' },
  { icon: <FaBehance />, path: 'https://www.behance.net/amnayounuss' },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
        {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
