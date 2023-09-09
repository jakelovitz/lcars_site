import React, { Component } from 'react';
import { default as HomePage } from './homepage.js';
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './styling.css';
import { Link } from "react-router-dom";
import { default as Header } from "./Header.js";

function TestingPage() {
    return (
        <div>
            <Header />
            <div class="wrap" id="gap">
                <div class="left-frame">
                    <div>
                        <div class="panel-3"><span class="hop"></span></div>
                        <div class="panel-4"><Link to="/">Home<span class="hop"></span> Page</Link></div>
                        <div class="panel-5"><span class="hop"></span></div>			
                        <div class="panel-6"><span class="hop"></span></div>
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
                            <p>This is a page all about ME. I love ME</p>
                            <p>I like Star Wars and Star Trek. LIke Star Wars first but now I'm a big fan of Trek as well. Both good, both good. You like what you like</p>
                        </div>
                    </div>
    
                    <p>I`m a QA Engineer with 4+ years of experience working with Electronic Health Records. I`ve formulated three pillars for the Enterprising QA Engineer (the EQAE!) to lean on:</p>
                    <h3>Be a subject matter expert</h3>
                    <p>Comprehensive knowledge is the bedrock of comprehensive testing, especially for an EHR. The EQAE has a thorough understanding of their product as a whole, a mastery of their functional areas in particular, and a deep appreciation for all the interactions and interplay in between the two.</p>
                
    
    
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
        </div>
    )
}

export default TestingPage;