import React from 'react';
import './../assets/styling.css';

function AboutMe({ onNavigate, footer }) {
    return (

        <div class="wrap" id="gap">

            <div class="left-frame">

                <div>
                    <div class="panel-3"><span class="hop"></span></div>
                    <div class="sidebar-buttons">
                        <a onClick={() => onNavigate(0)} id="0">About Me</a>
                        <a onClick={() => onNavigate(1)} id="1">Testing</a>
                        <a onClick={() => onNavigate(2)} id="2">Library</a>
                    </div>
                    <div class="panel-4"><span class="hop"></span></div>
                        <div class="panel-5"><span class="hop"></span></div>
                        <div class="panel-6"><span class="hop"></span></div>
                        <div class="panel-7"><span class="hop"></span></div>
                        <div class="panel-8"><span class="hop"></span></div>
                        <div class="panel-9"><span class="hop"></span></div>
                    </div>
                    <div class="panel-10"><span class="hop"></span></div>
                </div>

                <div class="right-frame">
                    <div class="bar-panel">
                    <div class="bar-6"></div>
                    <div class="bar-7"></div>
                    <div class="bar-8"></div>
                    <div class="bar-9"><div class="bar-9-inside"></div></div>
                </div>
                
                <div class="runner">
                    <div class="corner-bg">
                        <div class="corner"></div>
                    </div>
                    <div class="block-2"></div>
                    <div class="block-3"></div>
                    <div class="block-4b">
                    <div class="block-4-floatbar"></div>
                    </div>
                </div>
                
                {/* page content here */}
                <div class="content">
                    <div class="flexbox">

                        <div class="col">
                            <img style={{width: "90%", height: "90%", objectFit: 'contain'}} src={process.env.PUBLIC_URL + '/pipes_alone.png'} alt="your humble web developer" />
                        </div>

                        <div class="col">
                            <p class="go-big">
                                <span class="go-space-white">
                            My continuing mission: to pioneer unparalleled quality in digital products; to design and develop test suites comprehensive in their scope, depth, and supporting documentation; to boldly ensure consistency and confidence like never before.</span>
                            </p>
                            <p>Some of my key proficencies include, but are not limited to:</p>
                            <ul class="lcars-list">
                                <li>First item in a list</li>
                                <li>Second list item</li>
                                <li>Pretty decent at whistling</li>
                            </ul>
                        </div>
                    </div>
                    <h1>On Duty</h1>
                    <p>I`m a former QA Engineer/current SET with 6+ years of experience working with Electronic Health Records. I try to work by the following principles:</p>
                    <h3>Be a Subject Matter Expert</h3>
                    <p>Comprehensive knowledge is the bedrock of comprehensive testing, especially for an EHR. Effective QA necessitates a thorough understanding of your product as a whole, a mastery of your functional areas in particular, and a deep appreciation for all the interactions and interplay in between the two.</p>
                    <h3>Mind the Code</h3>
                    <p>Beyond surface-level understanding, excellence in QA requires delving into the technical underpinnings of the product. This involves regularly engaging with the codebase—even if not directly coding—to understand the scope of changes, pinpoint bugs, and grasp the underlying logic driving the software's behavior. Utilizing tools like Postman, Swagger, Splunk, and Bugsnag is essential for informed testing, bug investigation, workflow simulation, and addressing issues. This hands-on, investigative approach to ensure the software's internals are as robust as its user-facing features.</p>
                    <h3>Try New Things</h3>
                    <p>Something about doing new stuff</p>
                    <h1>Off Duty</h1>
                    <p>I do actually have a semblance of a life, it's just primarily indoors and there aren't many other people in it. Here are some of my interests and pursuits outside of Quality Assurance</p>
                    <h3>Aspiration to dilettante musicianship</h3>
                    <p>That's a nice way of saying I'm terrible at guitar, and will never be better than pretty bad at guitar, but I'd love to reach the point when I can really appreciate when other people are good at guitar.</p>
                    <h3>Hopeful Home baker</h3>
                    <p>I don't even need to say I'm an amateur in this realm, because my results speak for themselves. We recognize this is arguably even more true, in a literal sense, with the above pursuit. Still, we love how dough rises and delight in a well baked loaf.</p>
                    <h3>Dual Alliance Fan</h3>
                    <p>This is not a reference to baseball, in which case the New York Mets are the only team I ever have and ever will support (Braves are a distant second). I'm referring to the age old divide between Star Wars and Star Trek fans. In the folly of my youth I stood firmly on the former side of that divide, but my flag was planted in naught but the shifting sands of ignorance.</p>
                </div>
                
                {footer}
            
            </div>

        </div>  
    )
}

export default AboutMe;