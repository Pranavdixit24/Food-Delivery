import React from 'react'
import { assets } from '../../assets/assets'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, impedit. Architecto, nemo nobis tempora cupiditate aliquam, nulla delectus velit aperiam mollitia sint dicta numquam. Possimus tenetur rerum accusamus similique voluptate.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div> 
        <hr/>
        <p className='footer-cpoywrite'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, iusto.</p>      
    </div>
  )
}

export default Footer
