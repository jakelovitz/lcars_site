import React from 'react';
import './../assets/styling.css';

function AboutMe() {
    return (
        <div >
            <div >
                <div className="content">
                    <div className="flexbox">

                        <div className="col">
                            <img style={{width: "90%", height: "90%", objectFit: 'contain'}} src={process.env.PUBLIC_URL + '/pipes_alone.png'} alt="your humble web developer" />
                        </div>

                        <div className="col">
                            <p className="go-big">
                                <span className="go-space-white">
                            My continuing mission: to pioneer unparalleled quality in digital products; to design and develop test suites comprehensive in their scope, depth, and supporting documentation; to boldly ensure consistency and confidence like never before.</span>
                            </p>
                            <p>I'm my mind, I'm a Code Integrity Officer, though in my near ten years of ensuring software products best meet the needs of its end users I've held such titles as Software Tester, Software (Development) Engineer in Test, and Quality Assurance Engineer.</p>
                            <p>Irrespective of the name of the role, I help software teams in their pursuit of that most elusive of goals, quality, through the noble and maligned art of testing.</p>
                        </div>
                    </div>
                    <div class="lcars-text-bar the-end">
                        <span>Off Duty</span>
                    </div>
                    <p>I do actually have a semblance of a life, it's just primarily indoors and there aren't many other people in it. Here are some of my interests and pursuits outside of Quality Assurance</p>
                    <div class="buttons">
                        <a>Movies</a>
                        <a>Albums</a>
                        <a>button 03</a>
                        <a>Spaceships</a>
                        <a>Books</a>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default AboutMe;