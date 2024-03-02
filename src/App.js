import * as React from "react";
import './assets/styling.css';
import ScrollToTopButton from "./components/ScrollToTop";

function App({ header, footer, currentPage: CurrentPage, navigateToPage,}) {
  return (
    <div>
      {header}
      <div class="wrap" id="gap">
        <div class="left-frame">

          <div>
              <div class="panel-3"><span class="hop"></span></div>
              <div class="sidebar-buttons">
                  <a onClick={() => navigateToPage(0)} id="0">About Me</a>
                  <a onClick={() => navigateToPage(1)} id="1">Testing</a>
                  <a onClick={() => navigateToPage(2)} id="2">Library</a>
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

          <div>
            <CurrentPage/>
            {footer}
          </div>

        </div>

      </div>
      <ScrollToTopButton class='scroll-to-top-button'/>
    </div>
  );
}

export default App;