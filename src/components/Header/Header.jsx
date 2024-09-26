import React from 'react';
import './Header.css'; // Check the relative path

const Header = () => {
  const scrollToExploreMenu = () => {
    document.getElementById('explore-menu').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='header'>
      <div className="header-contents"> 
        <h2>Order your favourite Food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button onClick={scrollToExploreMenu}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
