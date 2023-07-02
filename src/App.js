import * as React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom"
import logo from './logo.svg';
import './styling.css';
import { default as HomePage } from './homepage.js';
import { default as Header } from "./Header.js";
import { default as TestingPage } from './TestingPage.js';

export function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/testingpage" element={<TestingPage />} />
    </Routes>
  );
}

export default App;
