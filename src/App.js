import * as React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom"
import logo from './logo.svg';
import './styling.css';
import { default as HomePage } from './homepage.js';
import { default as Header } from "./Header.js";
import { default as TestingPage } from './TestingPage.js';
import { default as AboutMePage } from './AboutMePage.js';

export function App() {
  return (
    
    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/testingpage" element={<TestingPage />} />
      <Route path="/AboutPipes" element={< AboutMePage/>} />
    </Routes>
  );
}

export default App;
