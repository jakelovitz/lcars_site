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
                        <div class="panel-5">Hello<span class="hop">Pipes</span></div>
                        <div class="panel-6"><span class="hop"></span></div>
                        <div class="panel-7"><span class="hop"></span></div>
                        <div class="panel-8"><span class="hop"></span></div>
                        <div class="panel-9">And<span class="hop">Again</span></div>
                    </div>
                    <div class="panel-10">Oh and<span class="hop">Yet Again</span></div>
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
                            <p>This is gonna be a page all about testing</p>
                            <p>Communication is not possible. The shuttle has no power. Using the gravitational pull of a star to slingshot back in time? We are going to Starbase Montgomery for Engineering consultations prompted by minor read-out anomalies. Probes have recorded unusual levels of geological activity in all five planetary systems. Assemble a team. Look at records of the Drema quadrant. Would these scans detect artificial transmissions as well as natural signals?</p>
                            <p>Unidentified vessel travelling at sub warp speed, bearing 235.7. Fluctuations in energy readings from it, Captain. All transporters off. A strange set-up, but I'd say the graviton generator is depolarized. The dark colourings of the scrapes are the leavings of natural rubber, a type of non-conductive sole used by researchers experimenting with electricity. The molecules must have been partly de-phased by the anyon beam.</p>
                        </div>
                    </div>
                </div>
                
                {footer}
            
            </div>

        </div>  
    )
}

export default TestingPage;