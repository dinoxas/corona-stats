import React from 'react';
import { FaCode, FaHeart } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className='mt-5 pt-5 pb-4 text-center border-top'>
      <div className='container'>
        <p>
          COVID-19 Checker
          <br />
          <FaCode color='#6c757d' size='24' /> with{' '}
          <FaHeart color='rgba(220,53,69,0.8)' size='24' /> by Dino
        </p>
      </div>
    </footer>
  );
};

export default Footer;
