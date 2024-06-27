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
            Christie Wilson addresses on this concept of the 'Right Information'
            or, in her terminology, "the information you're looking for", in her
            book Grokking Continuous delivery. She groups tests that help you
            find the right information into what she calls Signals, whereas
            tests that distract you from said information are Noise. Kaner,
            Bach, and Pettichord's first lesson (literally the first one in the
            book) states that the tester "is the headlights of the project",
            meaning that the finding the right information, finding signals,
            lights the way of the project by way of providing the raw data for
            making important decisions.
          </p>
          <p>
            The authors of The Art of Software Testing begin the book with a
            self-assessment, wherein they request the reader write a set of test
            cases for the following program:
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
            Like with Law and Order's framing of the American Criminal Justice
            System, a test case consists of two separate yet equally important
            groups: the input data, which defines your scenarios; and the
            description of output, which evaluate execution of said definitions.
          </p>
          <p>
            These are my test cases to check that that program can handle
            various valid configurations of a triangle. While one might have
            initially expected three cases to be sufficient here, you can add a
            couple additional test cases to cover the remaining possible
            permutations of the Isosceles triangle.
          </p>
          <p style={codeStyle}>
            {`{a: 5, b: 5, c: 5, expected: 'Equilateral'}`}
          </p>
          <br></br>
          <p style={codeStyle}>{`{a: 3, b: 4, c: 5, expected: 'Scalene'}`}</p>
          <br></br>
          <p style={codeStyle}>{`{a: 3, b: 3, c: 4, expected: 'Isosceles'}`}</p>
          <br></br>
          <p style={codeStyle}>{`{a: 3, b: 4, c: 3, expected: 'Isosceles'}`}</p>
          <br></br>
          <p style={codeStyle}>{`{a: 4, b: 3, c: 3, expected: 'Isosceles'}`}</p>
          <br></br>
          <p>
            I then added a few cases to check for invalid inputs, such as
            negative numbers. The prompt above assumes that the user will only
            give positive integers, but the program won't. In this case, I was a
            somewhat diligent developer, and made sure the input fields in my
            implementation of the program won't accept non-numberic values or
            null values. Still, I need to check that I did that correctly, so I
            wrote those cases down anyway.
          </p>
          <p style={codeStyle}>
            {`{a: 0, b: 4, c: 5, expected: 'Invalid: Triangle sides must be positive integers.'}`}
          </p>
          <p style={codeStyle}>
            {`{a: -3, b: 4, c: 5, expected: 'Invalid: Triangle sides must be positive integers.'}`}
          </p>
          <p style={codeStyle}>
            {`{a: 0, b: 0, c: 0, expected: 'Invalid: Triangle sides must be positive integers.'}`}
          </p>
          <p style={codeStyle}>
            {`{a: 'a', b: 2, c: 3, expected: 'Invalid: Triangle sides must be positive integers.'}`}
          </p>
          <p style={codeStyle}>
            {`{a: 3.5, b: 4, c: 5, expected: 'Invalid: Triangle sides must be positive integers.'}`}
          </p>
          <p style={codeStyle}>
            {`{a: 2, b: 3, c: undefined, expected: 'Invalid: The provided lengths do not form a triangle.'}`}
          </p>
          <p>
            Finally, I wanted to check areas where the the provided inputs would
            not create a valid triangle, which you can see teased in the final
            case listed above. I needed to add a case wherein, with three
            non-zero integers, the sum of two of them would be equal to the
            third. I also needed to add a case wherein, again with three
            positive integers, the sum of two of them would be less than the
            third. As with my valid test case for the Isosceles triangle, I
            checked all three possible permutations for the both of the invalid
            scenarios I just outlined described above.
          </p>
          <p style={codeStyle}>
            {`{a: 1, b: 2, c: 3, expected: 'Invalid: The provided lengths do not form a triangle.'}`}
          </p>
          <p style={codeStyle}>
            {`{a: 1, b: 3, c: 2, expected: 'Invalid: The provided lengths do not form a triangle.'}`}
          </p>
          <p style={codeStyle}>
            {`{a: 3, b: 1, c: 2, expected: 'Invalid: The provided lengths do not form a triangle.'}`}
          </p>
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
            We now have 17 tests, 17 signals, that we can use to gather all the
            information we need to say with a high degree of certainty that the
            program is working as intented.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TestingPage;
