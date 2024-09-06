import React from 'react';
import styles from './BrandLogo.module.css';
import Logo from './Assets/Brand Logo.svg';

const BrandLogoHor = ({ width = '100%', height = '100%' }) => {
  return (
    <div>
      <Logo 
        className={styles.logoWrap} 
        style={{ width, height }} 
        alt="Brand Logo"
      />
    </div>
  );
};

export { BrandLogoHor };
