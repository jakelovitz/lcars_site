import * as React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom"
import logo from './logo.svg';
import './styling.css';
import { default as Header } from "./Header.js";
import { default as TestingPage } from './TestingPage.js';
import { default as AboutMePage } from './AboutMePage.js';
import { default as PageFrame } from './PageFrame.js';
import { default as Footer } from "./Footer.js";
import { default as Content } from "./Content.js";
import { useState } from 'react';

class App extends React.Component {

  render() {
    
    return (
      
      <div>

        <Header />

        <PageFrame />

      </div>  
    );
  }

}

export default App;