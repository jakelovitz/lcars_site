import React, { useState } from 'react';
import './../assets/styling.css';

function TestingPage() {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [result, setResult] = useState('');

  const handleTriangleType = () => {
    const a = parseInt(sideA);
    const b = parseInt(sideB);
    const c = parseInt(sideC);

    // Check for invalid triangle sides
    if (a <= 0 || b <= 0 || c <= 0) {
      setResult('Invalid: Triangle sides must be positive integers.');
      return;
    }

    // Triangle inequality theorem validation
    if (a + b <= c || a + c <= b || b + c <= a) {
      setResult('Invalid: The provided lengths do not form a triangle.');
      return;
    }

    if (a === b && b === c) {
      setResult('Equilateral');
    } else if (a === b || b === c || a === c) {
      setResult('Isosceles');
    } else {
      setResult('Scalene');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleTriangleType();
  };

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
                Device with GLaDOS circa 2008-2011. Nowadays (circa 2015 -
                present day), however, I've shifted to my focus from portals
                <sup>1</sup> to protocols<sup>2</sup>, primarily within that one
                final frontier of Software applications: the Electronic Health
                Record.
              </p>
              <p>
                <sup>1</sup>Not entirely true: I have tested a couple of patient
                portals
              </p>
              <p>
                <sup>2</sup>and APIs, databases, front ends, back ends, etc
              </p>
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
        </div>

        <div className="content">
          <h2>Triangle Type Tester</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Side A:&nbsp;
              <input
                type="number"
                value={sideA}
                onChange={e => setSideA(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Side B:&nbsp;
              <input
                type="number"
                value={sideB}
                onChange={e => setSideB(e.target.value)}
                required
              />
            </label>
            <br />
            <label>
              Side C:&nbsp;
              <input
                type="number"
                value={sideC}
                onChange={e => setSideC(e.target.value)}
                required
              />
            </label>
            <br />
            <div className="buttons">
              <a onClick={handleTriangleType}>Check Triangle Type</a>
            </div>
          </form>
          {result && (
            <p>
              The triangle is: <strong>{result}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TestingPage;
