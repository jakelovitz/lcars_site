import React from 'react';
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './styling.css';
import { Link } from "react-router-dom";
import Pdf from '../src/Lovitz-Resume.pdf';

function Header() {
        return (
           
                <header>
                <div class="wrap">
                    <div class="scroll-top">
                        <a id="scroll-top" href=""><span class="hop">screen</span>top</a>
                    </div>
                    <div class="left-frame-top">
                        <div class="panel-1"><a href=""></a></div>
                        <div class="panel-2"><span class="hop"></span></div>
                    </div>
                    <div class="right-frame-top">
                        <div class="banner">
                            Jake Lovitz
                        </div>
                            <div class="data-cascade-button-group">
                                <div class="cascade-wrapper">
                                    <div class="data-cascade">
                                        <div class="row-1"><div class="dc1">101</div><div class="dc2">7109</div><div class="dc3">1966</div><div class="dc4">1222</div><div class="dc5">2020</div><div class="dc6">1444</div><div class="dc7">102</div><div class="dc8">1103</div><div class="dc9">1935</div><div class="dc10">1940</div><div class="dc11">708</div><div class="dc12">M113</div><div class="dc13">1956</div><div class="dc14">1209</div></div><div class="row-2"><div class="dc1">102</div><div class="dc2">8102</div><div class="dc3">1987</div><div class="dc4">044</div><div class="dc5">0051</div><div class="dc6">607</div><div class="dc7">1976</div><div class="dc8">1031</div><div class="dc9">1984</div><div class="dc10">1954</div><div class="dc11">1103</div><div class="dc12">415</div><div class="dc13">1045</div><div class="dc14">1864</div></div><div class="row-3"><div class="dc1">103</div><div class="dc2">714</div><div class="dc3">1993</div><div class="dc4">0222</div><div class="dc5">052</div><div class="dc6">1968</div><div class="dc7">2450</div><div class="dc8">746</div><div class="dc9">56</div><div class="dc10">47</div><div class="dc11">716</div><div class="dc12">8719</div><div class="dc13">417</div><div class="dc14">602</div></div><div class="row-4"><div class="dc1">104</div><div class="dc2">6104</div><div class="dc3">1995</div><div class="dc4">322</div><div class="dc5">90</div><div class="dc6">1931</div><div class="dc7">1701</div><div class="dc8">51</div><div class="dc9">29</div><div class="dc10">218</div><div class="dc11">908</div><div class="dc12">2114</div><div class="dc13">85</div><div class="dc14">3504</div></div><div class="row-5"><div class="dc1">105</div><div class="dc2">08</div><div class="dc3">2001</div><div class="dc4">713</div><div class="dc5">079</div><div class="dc6">1940</div><div class="dc7">LV</div><div class="dc8">426</div><div class="dc9">105</div><div class="dc10">10</div><div class="dc11">1206</div><div class="dc12">1979</div><div class="dc13">402</div><div class="dc14">795</div></div><div class="row-6"><div class="dc1">106</div><div class="dc2">31</div><div class="dc3">2017</div><div class="dc4">429</div><div class="dc5">65</div><div class="dc6">871</div><div class="dc7">1031</div><div class="dc8">541</div><div class="dc9">656</div><div class="dc10">764</div><div class="dc11">88</div><div class="dc12">001</div><div class="dc13">27</div><div class="dc14">05</div></div>
                                    </div> 
                                </div> 
                                <div class="button-col">
                                    <div class="button" id="top-left"><a href="https://linkedin.com/in/jakelovitz/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                                    <div class="button" id="bottom-left"><a href="https://medium.com/@jakelovitz" target="_blank" rel="noopener noreferrer">Medium</a></div>
                                </div>
                                <div class="button-col">
                                    <div class="button" id="top-right"><a href="https://github.com/jakelovitz" target="_blank" rel="noopener noreferrer">GitHub</a></div>
                                    <div class="button" id="bottom-right"><a href = {Pdf} target = "_blank" rel="noopener noreferrer">Resume</a></div>
                                </div>
                            </div>
                            <div class="runner">
                                <div class="top-corner-bg">
                                    <div class="top-corner"></div>
                                </div>
                                <div class="block-2"></div>
                                <div class="block-3"></div>
                                <div class="block-4">
                                    <div class="block-4-floatbar"></div>
                                </div>
                            </div>
                            <div class="bar-panel">
                                <div class="bar-1"></div>
                                <div class="bar-2"></div>
                                <div class="bar-3"></div>
                                <div class="bar-4"><div class="bar-4-inside"></div></div>		
                            </div>
                        </div>
                    </div>
                </header>
           
              
              
              );
    }


export default Header;