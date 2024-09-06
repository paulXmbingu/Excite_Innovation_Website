import React from 'react';
import styles from './BrandLogo.module.css';
import Logo from './Assets/Brand Logo.svg';

const BrandLogoHor = () => {
  return (
    <div>
      <Logo 
        className={styles.logoWrap} 
        alt="Brand Logo"
    />
    </div>
  );
};

export { BrandLogoHor };
