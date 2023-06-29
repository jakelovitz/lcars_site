import React, { Component } from 'react';
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './styling.css';
import {
    BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import Pdf from '../src/Lovitz-Resume.pdf';

class HomePage extends Component {
    render() {
        return (
            <BrowserRouter>
                <header>
                    <div class="wrap" id="gap">
                        <div class="left-frame">
                            <div>
                                <div class="panel-3"><span class="hop"></span></div>
                                <div class="panel-4"><span class="hop"></span></div>
                                <div class="panel-5"><span class="hop"></span></div>			
                                <div class="panel-6"><span class="hop"></span>
                            </div>
                                <div class="panel-7"><span class="hop"></span></div>
                                <div class="panel-8"><span class="hop"></span></div>
                                <div class="panel-9"><span class="hop"></span></div>
                            </div>
                            <div>
                                <div class="panel-10">10<span class="hop">-31</span></div>
                            </div>
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
                    <div class="content">

                        {/* <h1>Hello!</h1> */}
                        {/* <h2>Thanks for coming</h2> */}
                    <div class="flexbox">
                    <div class="col">
                      <img style={{width: "100%", height: "100%", objectFit: 'contain'}} src={process.env.PUBLIC_URL + '/pipes_alone.png'} alt="your humble web developer" />
                    </div>
                    <div class="col">
                      <p>Your Humble Software Engineer in Test</p>
                      <p>Communication is not possible. The shuttle has no power. Using the gravitational pull of a star to slingshot back in time? We are going to Starbase Montgomery for Engineering consultations prompted by minor read-out anomalies. Probes have recorded unusual levels of geological activity in all five planetary systems. Assemble a team. Look at records of the Drema quadrant. Would these scans detect artificial transmissions as well as natural signals?</p>
                      <p>Unidentified vessel travelling at sub warp speed, bearing 235.7. Fluctuations in energy readings from it, Captain. All transporters off. A strange set-up, but I'd say the graviton generator is depolarized. The dark colourings of the scrapes are the leavings of natural rubber, a type of non-conductive sole used by researchers experimenting with electricity. The molecules must have been partly de-phased by the anyon beam.</p>
                    </div>
                  </div>
            
                  <p>I`m a QA Engineer with 4+ years of experience working with Electronic Health Records. I`ve formulated three pillars for the Enterprising QA Engineer (the EQAE!) to lean on:</p>
                  <h3>Be a subject matter expert</h3>
                  <p>Comprehensive knowledge is the bedrock of comprehensive testing, especially for an EHR. The EQAE has a thorough understanding of their product as a whole, a mastery of their functional areas in particular, and a deep appreciation for all the interactions and interplay in between the two.</p>
                  <h3></h3>
                        
            
            
                        <footer>
                            <div class="footer-inside">
                                <div class="footer-text">
                                    <p>LCARS Inspired Website Template designed &amp; developed by Jim Robertus <a href="https://www.thelcars.com">www.TheLCARS.com</a>.</p>
                                </div>
                            </div>
                            <div class="footer-panel">
                                <span class="hop">22</span>47
                            </div>
                        </footer>
            
                    </div>
            
                </div>
            </div>
            
            
            </header>
            </BrowserRouter>
              
              
              );
    }
}

export default HomePage;
