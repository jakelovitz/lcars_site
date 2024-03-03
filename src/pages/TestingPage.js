import React from 'react';
import './../assets/styling.css';

function TestingPage() {
    return (
        <div>
            <div >
                <div className="content">
                    <div className="flexbox">
                        <div className="col">
                            <img style={{width: "90%", height: "90%", objectFit: 'contain'}} src={process.env.PUBLIC_URL + '/glados.webp'} alt="glados" />
                        </div>
                        <div className="col">
                            <p className="go-big">
                                <span className="go-space-white">
                                "Since you went to all the trouble of waking me up, you must really, really love to test." - GLaDOS</span>
                            </p>
                            <p>I really did love testing the Aperture Science Handheld Portal Device with GlaDOS circa 2008-2011. Nowadays (circa 2015 - present day), however, I've focused on testing software, primarily that one final frontier of applications: the Electronic Health Record.</p>
                        </div>
                    </div>
                </div>
                <div className="lcars-bar">
                    <div className="lcars-bar-inner"></div>
                </div>

                <div className="content">
                    <p>Had you told me that any time prior to 2015, I would have asked "...what precisely does it mean to 'test software'? What does it entail?"</p>
                    <p>Here's how Glenford J. Myers, Tom Badgett, and Corey Sandler define the process of software testing in their in-depth and aptly named The Art of Software Testing, Third Edition:</p>
                    <blockquote>Testing is the process of executing a program with the intent of finding errors</blockquote>
                    <p>That's a quick and concise definition, which Myers et al. define on page 6 and spend most the rest of the book probing the implications of. Among the most immediate,to them, myself, and I imagine the reader of this page, is the somewhat negative undertone running between those 14 words. 'Bugs are there' is a somewhat pessimistic mindset, yes, but it's laregly just the mindset 'if this programs has bugs, it is absolutely essential that they're found as soon as possible'.</p>
                    <p>In Cem Kaner, Jams Bach, and Bret Pettichord's indespensible Lessons Learned in Software Testing, a Context-Driven approach, the first of their two hundred and ninetey three lessons is that "[the tester] is the headlights of the project" , by which they mean software testers 'light the way' (provide critical context) so that developers, project/product managers, and other stakeholders can make informed decisions. More simply put, in the words of Kaner et al.</p>
                    <blockquote>Testing is done to find the right information</blockquote>
                    <p>This little pearl of wisdom, contained within their first lesson, has remained with me, particularly when coupled with Kaner et al.'s fourth lesson, "focus on failure, so your clients can focus on success". Any software project that requires a cross-functional team to develop (and the majority of thoses that don't!) is going to have bumps in the road. If you can see them you can handle them, but if you miss them they'll send your whole project spiraling off track. By focusing on what can go wrong, the tester helps the rest of their team make sure that everything ultimately goes well. Personally, I'm fond the merging the two strains of thought together:</p>
                    <blockquote>Testing is the process of executing a program with the intent of finding the right information.</blockquote>
                    <p>Which is all very well and good, but still begs the question of how, exactly, one goes about doing that. Well, unlike the basics of the 2008 video game Portal, and it's 2011 successor, it turns out that software testing is quite like software development - it's actually a pretty deep field</p>
                    <p>The Pyramid</p>
                </div>
            </div>
        </div>  
    )
}

export default TestingPage;