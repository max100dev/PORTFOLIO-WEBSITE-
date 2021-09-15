import React from 'react'
import img1 from "../Assets/Images/fb.png"
import img2 from "../Assets/Images/ig.png"
const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav">
                <ul className="nav__parent">
                    <li className="nav__list"><a href="">LinkedIn</a></li>
                    <li className="nav__list"><a href="">Github</a></li>
                    <li className="nav__list"><a href="">Fiverr</a></li>
                    <li className="nav__list"><a href="">Upwork</a></li>
                    <li className="nav__list"><a className="social__icon" href=""><img className="nav__img" src={img1} alt="Facebook" /></a></li>
                    <li className="nav__list"><a className="social__icon"  href=""><img className="nav__img" src={img2} alt="Instagram" /></a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
