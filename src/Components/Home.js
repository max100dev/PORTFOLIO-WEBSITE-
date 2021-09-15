import React from 'react'
import img from "../Assets/Images/developer.svg"

const Home = () => {
    return (
        <section className="section home">

            <div className="home__hero">
                <h1 className="hero__title">Freelance Web Developer</h1>
                <img className="hero__img" src={img} alt="Web Developer Image" />
            </div>

            
            <button className="home__action-btn">Explore</button>

        </section>
    )
}

export default Home
