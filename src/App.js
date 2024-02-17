import * as React from "react";
import './styling.css';
import { default as Header } from "./Header.js";
import { default as PageFrame } from './PageFrame.js';

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