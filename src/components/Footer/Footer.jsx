import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo2} alt="" />
                <p>Thanks for choosing <b>Taajio</b> for your food deliveries! <br />We’re committed to bringing you the best meals from your favorite local restaurants. <br />Need help? <br />Our 24/7 support team is here for you. <br />Follow us on social media for exclusive deals, and more</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>


            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li onClick={() => scrollToSection('home')}>Home</li>
                    <li onClick={() => scrollToSection('about-us')}>About Us</li>
                    <li onClick={() => scrollToSection('delivery')}>Delivery</li>
                    <li onClick={() => scrollToSection('privacy-policy')}>Privacy Policy</li>
                </ul>     
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 1234567890</li>
                    <li>contact@taajio.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Taajio.com - All rights reserved  </p>
        


      
    </div>
  )
}

export default Footer
