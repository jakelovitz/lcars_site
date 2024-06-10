import React from 'react';
import './../assets/styling.css';

function TestingPage() {
  return (
    <div>
      <div data-testid="testing-page-content">
        <div className="content">
          <div className="flexbox">
            <div className="col">
              <img
                style={{ width: '90%', height: '90%', objectFit: 'contain' }}
                src={process.env.PUBLIC_URL + '/glados.webp'}
                alt="glados"
              />
            </div>
            <div className="col">
              <p className="go-big">
                <span className="go-space-white">
                  "Since you went to all the trouble of waking me up, you must
                  really, really love to test." - GLaDOS
                </span>
              </p>
              <p>
                I really did love testing the Aperture Science Handheld Portal
                Device with GlaDOS circa 2008-2011. Nowadays (circa 2015 -
                present day), however, I've shifted to my focus from portals* to
                protocols**, primarily within that one final frontier of
                Software applications: the Electronic Health Record.
              </p>
              <p>
                *Not entirely true: I have tested a couple of patient portals
              </p>
              <p>**and APIs, databases, front ends, back ends, etc</p>
            </div>
          </div>
        </div>
        <div className="lcars-bar">
          <div className="lcars-bar-inner"></div>
        </div>

        <div className="content">
          <p>
            Had you told me that any time prior to 2015, I would have asked
            "...what precisely does 'testing software' entail? How is that a
            full time gig?"
          </p>
          <p>
            Here's how Glenford J. Myers, Tom Badgett, and Corey Sandler define
            the process of software testing in their in-depth and aptly named
            The Art of Software Testing, Third Edition:
          </p>
          <blockquote>
            Testing is the process of executing a program with the intent of
            finding errors
          </blockquote>
          <p>
            That's a quick and concise definition, which Myers et al. define on
            page 6 and spend most the rest of the book probing the implications
            of. In Cem Kaner, Jams Bach, and Bret Pettichord have a slightly
            different take, which they lay out in Indispensable Lessons Learned
            in Software Testing, a Context-Driven Approach:
          </p>
          <blockquote>Testing is done to find the right information</blockquote>
          <p>
            I like how Myers et al. describe the process, but prefer Kaner et
            al.'s description of our purpose. Thus my definition of (software)
            testing:
          </p>
          <blockquote>
            Testing is the process of executing a program with the intent of
            finding the right information.
          </blockquote>
          <p>
            Which is all very well and good, but still begs the question of how,
            exactly, one goes about doing that. Well, unlike the basics of the
            2008 video game Portal, and it's 2011 successor, it turns out that
            software testing is quite like software development - it's actually
            a pretty deep field
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestingPage;
