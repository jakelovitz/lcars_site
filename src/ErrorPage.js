import React, { Component } from 'react';
import * as ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './homepage.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Pdf from '../Lovitz-Resume.pdf';

class ErrorPage extends Component {
    render() {
        return (
            <div>Error yo!</div>
        )
    }
}

export default ErrorPage;
