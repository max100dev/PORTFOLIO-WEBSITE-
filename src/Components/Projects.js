import React from 'react'
import img1 from "../Assets/Images/live.png"
import img2 from "../Assets/Images/work.png"
const Projects = () => {
    return (
        <section className="section projects">

            <h4 className="projects__title">Portfolio</h4>
            <div className="projects__examples">

                <div className="example">
                    <div className="example__link">
                        <h5 className="link__title">Look at live version</h5>
                        <img className="link__img" src={img1} alt="Live Version" />
                    </div>
                    <div className="example__thumbnail">
                        <img className="thumbnail__img" src={img2} alt="Project Thumbnail" />
                        <h5 className="thumbnail__title">BUSINESS</h5>
                    </div>
                    <div className="example__details">
                        <h4 className="details__title">Business project website. </h4>
                        <p className="details__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ducimus commodi animi totam ipsum cupiditate alias?</p>
                    </div>
                </div>


                <div className="example">
                    <div className="example__link">
                        <h5 className="link__title">Look at live version</h5>
                        <img className="link__img" src={img1} alt="Live Version" />
                    </div>
                    <div className="example__thumbnail">
                        <img className="thumbnail__img" src={img2} alt="Project Thumbnail" />
                        <h5 className="thumbnail__title">BUSINESS</h5>
                    </div>
                    <div className="example__details">
                        <h4 className="details__title">Business project website. </h4>
                        <p className="details__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Ducimus commodi animi totam ipsum cupiditate alias?</p>
                    </div>
                </div>


                <div className="example">
                    <div className="example__link">
                        <h5 className="link__title">Look at live version</h5>
                        <img className="link__img" src={img1} alt="Live Version" />
                    </div>
                    <div className="example__thumbnail">
                        <img className="thumbnail__img" src={img2} alt="Project Thumbnail" />
                        <h5 className="thumbnail__title">GAME</h5>
                    </div>
                    <div className="example__details">
                        <h4 className="details__title">Memory game applicaton - Choose category and difficulty and play!</h4>
                        <p className="details__desc">Memory game app was built just as a fun project. The game's course depends solely on user's decisions and the most important... memory! Before the real game starts, user has to choose which difficulty level and which category they choose.</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Projects
