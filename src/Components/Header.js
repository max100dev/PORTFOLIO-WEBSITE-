import React from 'react'
import img1 from "../Assets/Images/fb.png"
import img2 from "../Assets/Images/ig.png"
const Header = () => {

    const handleNavBar = (e) => {
        const headerMobile = e.target.nextElementSibling;
        headerMobile.classList.toggle("show-nav");
        const hamburger = e.target;
        hamburger.classList.toggle("change-to-cross")
    }
    return (
        <header className="header">

            <div className="header__logo">
                <h1 className="logo__title">Max<span className="second-color">100</span>Dev</h1>
            </div>

            <nav className="desktop header__nav">
                <ul className="nav__parent">
                    <li className="nav__list"><a href="">Home</a></li>
                    <li className="nav__list"><a href="">About</a></li>
                    <li className="nav__list"><a href="">Work</a></li>
                    <li className="nav__list"><a href="">Projects</a></li>
                    <li className="nav__list"><a href="">Contact</a></li>
                </ul>
            </nav>

            <div onClick={handleNavBar} className="header__hamburger"></div>
            <nav className="header__nav--mobile">
                <ul className="nav__parent--mobile">
                    <li className="nav__list nav__list--mobile"><a href="">Home</a></li>
                    <li className="nav__list nav__list--mobile"><a href="">About</a></li>
                    <li className="nav__list nav__list--mobile"><a href="">Work</a></li>
                    <li className="nav__list nav__list--mobile"><a href="">Projects</a></li>
                    <li className="nav__list nav__list--mobile"><a href="">Contact</a></li>
                </ul>

                <ul className="nav__social--parent">
                    <li className="nav__list nav__list--header"><a className="social__icon" href=""><img className="nav__img" src={img1} alt="Facebook" /></a></li>
                    <li className="nav__list nav__list--header"><a className="social__icon"  href=""><img className="nav__img" src={img2} alt="Instagram" /></a></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header
