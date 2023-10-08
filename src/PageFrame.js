import React, { Component, useState } from 'react';
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './styling.css';
import { Link } from "react-router-dom";
import Pdf from '../src/Lovitz-Resume.pdf';
import { default as TestingPage } from './TestingPage.js';

import { default as Header } from "./Header.js";
import { default as Footer } from "./Footer.js";
import { default as AboutMe } from "./AboutMe.js";

let handleClick = () => {
    // this.setState({ contentComponentComponent: e.target.name });
    console.log("ello");
}

// let selectedContent = () => {
//     const 
// }

class PageFrame extends React.Component {



    render() {

        return (

            <div class="wrap" id="gap">

                <div class="left-frame">

                    <div>
                        <div class="panel-3"><span class="hop"></span></div>
                        <div class="sidebar-buttons">
                            <a onClick={ () => { handleClick() } }>About Me</a>
                            <a>Testing</a>
                            <a>Library</a>
                        </div>
                        <div class="panel-4"><span class="hop"></span></div>
                            {/* <div class="panel-5"><span class="hop"></span></div> */}
                            <div class="panel-6"><span class="hop"></span></div>
                            <div class="panel-7"><span class="hop"></span></div>
                            <div class="panel-8"><span class="hop"></span></div>
                            {/* <div class="panel-9"><span class="hop"></span></div> */}
                        </div>
                        {/* <div class="panel-10">10<span class="hop">-31</span></div> */}
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

                    <AboutMe />
                        
                    <Footer />
                
                </div>

            </div>  
        )
    }
}

export default PageFrame;