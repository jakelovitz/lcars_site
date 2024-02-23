import React from 'react';
import './../assets/styling.css';

function TestingPage({ onNavigate, footer }) {
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
                            <img style={{width: "100%", height: "100%", objectFit: 'contain'}} src={process.env.PUBLIC_URL + '/GLaDOS.png'} alt="glados" />
                        </div>

                        <div class="col">
                            <p class="go-big">
                                <span class="go-space-white">
                                "You must really, really love to test." - GLADoS</span>
                            </p>
                            <p>She's not wrong - I really do</p>
                        </div>
                    </div>
                </div>
                
                {footer}
            
            </div>

        </div>  
    )
}

export default TestingPage;