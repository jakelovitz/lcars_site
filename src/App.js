import * as React from "react";
import './assets/styling.css';
import ScrollToTopButton from "./components/ScrollToTop";

function App({ header, footer, currentPage: CurrentPage, navigateToPage,}) {
  return (
    <div>
    {header}
    <CurrentPage onNavigate={navigateToPage} footer={footer}/>
    <ScrollToTopButton class='scroll-to-top-button'/>
  </div>
  );
}

export default App;