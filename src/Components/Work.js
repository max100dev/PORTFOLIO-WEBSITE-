import React from 'react'
import img1 from "../Assets/Images/design.png"
import img2 from "../Assets/Images/coding.png"
import img3 from "../Assets/Images/optimization.png"
import img4 from "../Assets/Images/hosting.png"
const Work = () => {
    return (
        <section className="section work">

            <h1 className="work__title">What do I do?</h1>
            <div className="work__services">

                <div className="service">
                    <img className="service__img" src={img1} alt="Design Service" />
                    <h3 className="service__title">Design</h3>
                    <p className="service__desc">Plan layout and content</p>
                </div>

                <div className="service">
                    <img className="service__img" src={img2} alt="Coding Service" />
                    <h3 className="service__title">Coding</h3>
                    <p className="service__desc">Put design into real website</p>
                </div>

                <div className="service">
                    <img className="service__img" src={img3} alt="Optimization Service" />
                    <h3 className="service__title">Optimization</h3>
                    <p className="service__desc">Let your website appear first in Google</p>
                </div>

                <div className="service">
                    <img className="service__img" src={img4} alt="Hosting Service" />
                    <h3 className="service__title">Hosting</h3>
                    <p className="service__desc">Put website on the internet</p>
                </div>
            </div>

        </section>
    )
}

export default Work
