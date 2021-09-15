import React from 'react'
import img1 from "../Assets/Images/about.png"
import img2 from "../Assets/Images/work.png"
const About = () => {
    return (
        <section className="section about">

                <div className="about__personal">
                    <img className="personal__img" src={img1} alt="Coding Image" />
                    <div className="personal__info">
                        <h3 className="info__title">Hi, I'm Max. I build websites for over a year and a half now.</h3>
                        <p className="info__desc">Learning programming and building websites are so additctive. Endless possibiltes to grow are such an excitement. Other than programming I'm also passioned about music and geography. </p>
                    </div>
                </div>

                <div className="about__business">
                    <img className="business__img" src={img2} alt="Making Website Img" />
                    <div className="business__card">
                        <h3 className="card__title">Do you need a website?</h3>
                        <p className="card__desc">Recently I started making websites for public use. Are you interested? Find out more below.</p>
                    </div>
                </div>
            
        </section>
    )
}

export default About
