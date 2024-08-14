import React from 'react'
import "./Footer.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import user_icon from "../../assets/user_icon.svg"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <div className="footer-top-left-title">
                        <h1>Prince</h1>
                        <img src={theme_pattern} alt="" />
                    </div>
                    <p>i am a frontend develpoer who wants to develop new projects and learn about new technologies..... </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">Ⓒ 2024 Prince Chowdhary. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;