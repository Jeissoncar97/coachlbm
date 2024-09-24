import React, { useState, useEffect } from 'react';
import Logo from '../../public/White_logo.svg'
import '../styles/header.css'

const images = [
  '../assets/photosHeader/photo1.jpg',
  '../assets/photosHeader/photo2.jpg',
  '../assets/photosHeader/photo3.jpg',
  '../assets/photosHeader/photo4.jpg',
  '../assets/photosHeader/photo5.jpg',
  '../assets/photosHeader/photo6.jpg',
  '../assets/photosHeader/photo7.jpg',
];

const Header = () => {
  return (
    <>
      <div className='header'>
        <img className='logo_header' src={Logo} alt="" />
      </div>
    </>
  )
};

export default Header;