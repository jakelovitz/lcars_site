import React, { useState } from 'react';
import './../assets/styling.css';

function TestingPage() {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [result, setResult] = useState('');

  const codeStyle = {
    backgroundColor: '#2b2b2b',
    color: '#9944ff', // Custom text color
    padding: '2px 4px',
    borderRadius: '3px',
    fontFamily: 'Courier New, Courier, monospace',
    fontSize: '0.85em',
    display: 'inline-block',
  };

  const handleTriangleType = () => {
    if (sideA === '' || sideB === '' || sideC === '') {
      alert('Please fill out all fields.');
      return;
    }

    const a = parseInt(sideA);
    const b = parseInt(sideB);
    const c = parseInt(sideC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      setResult('Invalid: Triangle sides must be positive integers.');
      return;
    }

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

  const handleInputChange = setter => e => {
    const value = e.target.value;
    if (/^-?\d*$/.test(value) || value === '') {
      setter(value);
    }
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
                Device with GlaDOS circa 2008-2011. Nowadays (circa 2015 -
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
            In their in-depth and aptly named "The Art of Software Testing,
            Third Edition," Glenford J. Myers, Tom Badgett, and Corey Sandler
            define software testing as:
          </p>
          <blockquote>
            Testing is the process of executing a program with the intent of
            finding errors
          </blockquote>
          <p>
            This concise definition, found on page 6, serves as the foundation
            for their exploration throughout the book. In contrast, Cem Kaner,
            James Bach, and Bret Pettichord, in "Lessons Learned in Software
            Testing, A Context-Driven Approach," offer a slightly different
            take:
          </p>
          <blockquote>Testing is done to find the right information</blockquote>
          <p>
            I appreciate Myers et al.'s description of the process but prefer
            Kaner et al.'s emphasis on the purpose. Therefore, my working
            definition of software testing is:
          </p>
          <blockquote>
            Testing is the process of executing a program with the intent of
            finding the right information.
          </blockquote>
          <p>
            Christie Wilson expands on this concept of "the right information"
            in her book "Grokking Continuous Delivery." She categorizes tests
            that provide useful information as Signals and those that do not as
            Noise. Kaner, Bach, and Pettichord emphasize the tester's role as
            "the headlights of the project," indicating that finding the right
            information illuminates the project's path, aiding in crucial
            decision-making.
          </p>
          <p>
            The authors of "The Art of Software Testing" begin with a
            self-assessment, asking readers to write test cases for the
            following program:
          </p>
          <b>
            The program reads three integer values from an input dialog. The
            three values represent the lengths of the sides of a triangle. The
            program displays a message that states whether the triangle is
            scalene, isosceles, or equilateral.
          </b>
          <p>
            Here, I encourage the reader to try that exercise twice; once before
            they continue any further, with only the three sentence description
            of the program to guide their test suite, and then once again once
            they've had a chance to play with an implemented version of the
            program, provided below by yours truly. See if you can uncover any
            additional test cases in the act of playing around with the program
            you may not have initially considered.
          </p>
        </div>

        <div className="content">
          <h2>Triangle Type Tester</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Side A:&nbsp;
              <input
                type="text"
                value={sideA}
                onChange={handleInputChange(setSideA)}
                required
              />
            </label>
            <br />
            <label>
              Side B:&nbsp;
              <input
                type="text"
                value={sideB}
                onChange={handleInputChange(setSideB)}
                required
              />
            </label>
            <br />
            <label>
              Side C:&nbsp;
              <input
                type="text"
                value={sideC}
                onChange={handleInputChange(setSideC)}
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
          <h2>Testing the Triangle</h2>
          <p>
            At its core, a test case consists of two separate yet equally
            important groups: the input data, which defines your scenarios; and
            the description of output, which provides criteria for evalutation.
            Additonally, it's helpful to provide your test scenario—some context
            for others to better understand your inputs. Below are my test cases
            to ensure the program handles various valid triangle configurations.
            While three cases initially seemed sufficient, two additional cases
            covered the permutations of isosceles triangles.
          </p>
          <p>
            These are my test cases to check that that program can handle
            various valid configurations of a triangle. While one might have
            initially expected three cases to be sufficient here, you can add a
            couple additional test cases to cover the remaining possible
            permutations of the Isosceles triangle.
          </p>
          <h3>Valid Triangles</h3>
          <div>
            <span>1. </span>
            <b>Equilateral Triangle: </b>
            <span>All sides are equal.</span>
          </div>
          <p style={codeStyle}>
            {`{a: 5, b: 5, c: 5, expected: 'Equilateral'}`}
          </p>
          <br></br>
          <div>
            <span>2. </span>
            <b>Scalene Triangle: </b>
            <span>All sides are different.</span>
          </div>
          <p style={codeStyle}>{`{a: 3, b: 4, c: 5, expected: 'Scalene'}`}</p>
          <br></br>
          <div>
            <span>3. </span>
            <b>Isosceles Triangle: </b>
            <span>Two sides are equal.</span>
          </div>
          <p style={codeStyle}>{`{a: 3, b: 3, c: 4, expected: 'Isosceles'}`}</p>
          <br></br>
          <p style={codeStyle}>{`{a: 3, b: 4, c: 3, expected: 'Isosceles'}`}</p>
          <br></br>
          <p style={codeStyle}>{`{a: 4, b: 3, c: 3, expected: 'Isosceles'}`}</p>
          <br></br>
          <p>
            These cases ensure the program correctly identifies each type of
            valid triangle.
          </p>
          <h3>Invalid Inputs</h3>
          <p>
            Next, I added cases to check for invalid inputs, such as negative
            numbers and non-integers.
          </p>
          <div>
            <span>1. </span>
            <b>Zero Length:</b>
          </div>
          <p style={codeStyle}>
            {`{a: 0, b: 4, c: 5, expected: 'Invalid: Triangle sides must be positive integers.'}`}
          </p>
          <div>
            <span>2. </span>
            <b>Negative Length:</b>
          </div>
          <p style={codeStyle}>
            {`{a: -3, b: 4, c: 5, expected: 'Invalid: Triangle sides must be positive integers.'}`}
          </p>
          <div>
            <span>3. </span>
            <b>All zeros:</b>
          </div>
          <p style={codeStyle}>
            {`{a: 0, b: 0, c: 0, expected: 'Invalid: Triangle sides must be positive integers.'}`}
          </p>
          <div>
            <span>4. </span>
            <b>Non-Numeric Value:</b>
          </div>
          <p style={codeStyle}>
            {`{a: 'a', b: 2, c: 3, expected: 'Invalid: Triangle sides must be positive integers.'}`}
          </p>
          <div>
            <span>5. </span>
            <b>Floating Point Number:</b>
          </div>
          <p style={codeStyle}>
            {`{a: 3.5, b: 4, c: 5, expected: 'Invalid: Triangle sides must be positive integers.'}`}
          </p>
          <div>
            <span>6. </span>
            <b>Undefined value:</b>
          </div>
          <p style={codeStyle}>
            {`{a: 2, b: 3, c: undefined, expected: 'Invalid: The provided lengths do not form a triangle.'}`}
          </p>
          <p>
            These cases ensure the program handles invalid inputs gracefully and
            correctly.
          </p>
          <h3>Invalid Triangles</h3>
          <p>
            Finally, I tested cases where the provided inputs do not form a
            valid triangle. These include cases where the sum of two sides
            equals or is less than the third side:
          </p>
          <div>
            <span>1. </span>
            <b>Sum of Two Sides Equals the Third:</b>
          </div>
          <p style={codeStyle}>
            {`{a: 1, b: 2, c: 3, expected: 'Invalid: The provided lengths do not form a triangle.'}`}
          </p>
          <p style={codeStyle}>
            {`{a: 1, b: 3, c: 2, expected: 'Invalid: The provided lengths do not form a triangle.'}`}
          </p>
          <p style={codeStyle}>
            {`{a: 3, b: 1, c: 2, expected: 'Invalid: The provided lengths do not form a triangle.'}`}
          </p>
          <div>
            <span>2. </span>
            <b>Sum of Two Sides Less than the Third:</b>
          </div>
          <p style={codeStyle}>
            {`{a: 1, b: 2, c: 4, expected: 'Invalid: The provided lengths do not form a triangle.'}`}
          </p>
          <p style={codeStyle}>
            {`{a: 1, b: 4, c: 2, expected: 'Invalid: The provided lengths do not form a triangle.'}`}
          </p>
          <p style={codeStyle}>
            {`{a: 4, b: 1, c: 2, expected: 'Invalid: The provided lengths do not form a triangle.'}`}
          </p>
          <p>
            These cases ensure the program accurately identifies invalid
            triangles.
          </p>
          <p>
            We now have 17 tests, 17 signals, that we can use to gather all the
            information we need to say with a high degree of certainty that the
            program is working as intended.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestingPage;
