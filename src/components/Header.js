import React from 'react';
import './../assets/styling.css';
import Pdf from './../assets/Lovitz_Resume.pdf';

function Header() {
  return (
    <header>
      <div className="wrap">
        {/* <div className="scroll-top">
                    <a id="scroll-top" href=""><span className="hop">screen</span>top</a>
                </div> */}

        <div className="left-frame-top">
          <div className="panel-1">
            <a href=""></a>
          </div>
          <div className="panel-2">
            <span className="hop"></span>
          </div>
        </div>

        <div className="right-frame-top">
          <div className="banner">Jake Lovitz</div>

          <div className="data-cascade-button-group">
            <div className="cascade-wrapper">
              <div className="data-cascade">
                <div className="row-1">
                  <div className="dc1">101</div>
                  <div className="dc2">7109</div>
                  <div className="dc3">1966</div>
                  <div className="dc4">1222</div>
                  <div className="dc5">2020</div>
                  <div className="dc6">1444</div>
                  <div className="dc7">102</div>
                  <div className="dc8">1103</div>
                  <div className="dc9">1935</div>
                  <div className="dc10">1940</div>
                  <div className="dc11">708</div>
                  <div className="dc12">M113</div>
                  <div className="dc13">1956</div>
                  <div className="dc14">1209</div>
                </div>
                <div className="row-2">
                  <div className="dc1">102</div>
                  <div className="dc2">8102</div>
                  <div className="dc3">1987</div>
                  <div className="dc4">044</div>
                  <div className="dc5">0051</div>
                  <div className="dc6">607</div>
                  <div className="dc7">1976</div>
                  <div className="dc8">1031</div>
                  <div className="dc9">1984</div>
                  <div className="dc10">1954</div>
                  <div className="dc11">1103</div>
                  <div className="dc12">415</div>
                  <div className="dc13">1045</div>
                  <div className="dc14">1864</div>
                </div>
                <div className="row-3">
                  <div className="dc1">103</div>
                  <div className="dc2">714</div>
                  <div className="dc3">1993</div>
                  <div className="dc4">0222</div>
                  <div className="dc5">052</div>
                  <div className="dc6">1968</div>
                  <div className="dc7">2450</div>
                  <div className="dc8">746</div>
                  <div className="dc9">56</div>
                  <div className="dc10">47</div>
                  <div className="dc11">716</div>
                  <div className="dc12">8719</div>
                  <div className="dc13">417</div>
                  <div className="dc14">602</div>
                </div>
                <div className="row-4">
                  <div className="dc1">104</div>
                  <div className="dc2">6104</div>
                  <div className="dc3">1995</div>
                  <div className="dc4">322</div>
                  <div className="dc5">90</div>
                  <div className="dc6">1931</div>
                  <div className="dc7">1701</div>
                  <div className="dc8">51</div>
                  <div className="dc9">29</div>
                  <div className="dc10">218</div>
                  <div className="dc11">908</div>
                  <div className="dc12">2114</div>
                  <div className="dc13">85</div>
                  <div className="dc14">3504</div>
                </div>
                <div className="row-5">
                  <div className="dc1">105</div>
                  <div className="dc2">08</div>
                  <div className="dc3">2001</div>
                  <div className="dc4">713</div>
                  <div className="dc5">079</div>
                  <div className="dc6">1940</div>
                  <div className="dc7">LV</div>
                  <div className="dc8">426</div>
                  <div className="dc9">105</div>
                  <div className="dc10">10</div>
                  <div className="dc11">1206</div>
                  <div className="dc12">1979</div>
                  <div className="dc13">402</div>
                  <div className="dc14">795</div>
                </div>
                <div className="row-6">
                  <div className="dc1">106</div>
                  <div className="dc2">31</div>
                  <div className="dc3">2017</div>
                  <div className="dc4">429</div>
                  <div className="dc5">65</div>
                  <div className="dc6">871</div>
                  <div className="dc7">1031</div>
                  <div className="dc8">541</div>
                  <div className="dc9">656</div>
                  <div className="dc10">764</div>
                  <div className="dc11">88</div>
                  <div className="dc12">001</div>
                  <div className="dc13">27</div>
                  <div className="dc14">05</div>
                </div>
              </div>
            </div>

            <div className="button-col">
              <div className="button" id="top-left">
                <a
                  href="https://linkedin.com/in/jakelovitz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="button" id="bottom-left">
                <a
                  href="https://medium.com/@jakelovitz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
              </div>
            </div>
            <div className="button-col">
              <div className="button" id="top-right">
                <a
                  href="https://github.com/jakelovitz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="button" id="bottom-right">
                <a href={Pdf} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </div>
            </div>
          </div>

          <div className="runner">
            <div className="top-corner-bg">
              <div className="top-corner"></div>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4">
              <div className="block-4-floatbar"></div>
            </div>
          </div>
          <div className="bar-panel">
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
            <div className="bar-4">
              <div className="bar-4-inside"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
