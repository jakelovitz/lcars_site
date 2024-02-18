import * as React from "react";
import './assets/styling.css';

function App({ header, footer, currentPage: CurrentPage, navigateToPage }) {
  return (
    <div>
      {header}
      {/* Pass the footer as a prop to the CurrentPage */}
      <CurrentPage onNavigate={navigateToPage} footer={footer} />
    </div>
  );
}

export default App;