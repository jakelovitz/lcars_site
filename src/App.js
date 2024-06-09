import React from 'react';
import './assets/styling.css';
import ScrollToTopButton from './components/ScrollToTop';
import { Link } from 'react-router-dom';

function App({ children, footer }) {
  return (
    <div>
      <div className="wrap" id="gap">
        <div className="left-frame">
          <div>
            <div className="panel-3">
              <span className="hop"></span>
            </div>
            <div className="sidebar-buttons">
              <Link to="/" id="0">
                About Me
              </Link>
              <Link to="/testing" id="1">
                Testing
              </Link>
              <Link to="/library" id="2">
                Library
              </Link>
            </div>
            <div className="panel-4">
              <span className="hop"></span>
            </div>
            <div className="panel-5">
              <span className="hop"></span>
            </div>
            <div className="panel-6">
              <span className="hop"></span>
            </div>
            <div className="panel-7">
              <span className="hop"></span>
            </div>
            <div className="panel-8">
              <span className="hop"></span>
            </div>
            <div className="panel-9">
              <span className="hop"></span>
            </div>
          </div>
          <div className="panel-10">
            <span className="hop"></span>
          </div>
        </div>

        <div className="right-frame">
          <div className="bar-panel">
            <div className="bar-6"></div>
            <div className="bar-7"></div>
            <div className="bar-8"></div>
            <div className="bar-9">
              <div className="bar-9-inside"></div>
            </div>
          </div>

          <div className="runner">
            <div className="corner-bg">
              <div className="corner"></div>
            </div>
            <div className="block-2"></div>
            <div className="block-3"></div>
            <div className="block-4b">
              <div className="block-4-floatbar"></div>
            </div>
          </div>

          <div>{children}</div>
          {footer}
        </div>
      </div>
      <ScrollToTopButton className="scroll-to-top-button" />
    </div>
  );
}

export default App;
