import React from 'react';
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './styling.css';
import { Link } from "react-router-dom";

function Content() {
    return (   
        <div class="content">
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
        </div>
    );
} 
export default Content;