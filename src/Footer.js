import React from 'react';
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './styling.css';
import { Link } from "react-router-dom";

function Footer() {
    
    return (  

        <div class="footer" >

            <footer>
                <div class="footer-inside">
                    <div class="footer-text">
                        <p>LCARS Inspired Website Template designed &amp; developed by Jim Robertus <a href="https://www.thelcars.com">www.TheLCARS.com </a></p>
                        <p>Translated into JSX and modified for this site by Jake Lovitz</p>
                    </div>
                </div>
                <div class="footer-panel">
                    <span class="hop">22</span>47
                </div>
            </footer>
        </div>

    );

}

export default Footer;