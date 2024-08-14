import React, { useState } from 'react'
import { useRef } from 'react'
import "./Navbar.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef =useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }

    const closeMenu = () => {
        menuRef.current.style.right="-350px";
    }

    return (
        <div className='navbar'>
            <div className="navbar-title">
                <h1>Prince</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open'/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>
                <li><AnchorLink className='anchor-link' href="#home"><p onClick={() => setMenu("#home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href="#about"><p onClick={() => setMenu("About Me")}>About Me</p></AnchorLink>{menu === "About Me" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href="#services"><p onClick={() => setMenu("Services")}>Services</p></AnchorLink>{menu === "Services" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href="#mywork"><p onClick={() => setMenu("Portfolio")}>Portfolio</p></AnchorLink>{menu === "Portfolio" ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href="#contact"><p onClick={() => setMenu("Contact")}>Contact</p></AnchorLink>{menu === "Contact" ? <img src={underline} alt="" /> : <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>

        </div>
    )
}

export default Navbar