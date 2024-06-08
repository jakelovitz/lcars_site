import React, { useState } from 'react'; // Ensure useState is imported
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import TestingPage from './pages/TestingPage';
import LibraryPage from './pages/LibraryPage';
import reportWebVitals from './reportWebVitals';

const initialState = {
  currentPageIndex: 0,
  pages: [AboutMe, TestingPage, LibraryPage],
};

function Index() {
  const [state, setState] = React.useState(initialState); // Use React.useState

  const navigateToPage = pageIndex => {
    setState({ ...state, currentPageIndex: pageIndex });
  };

  return (
    <React.StrictMode>
      <App
        header={<Header />}
        currentPage={state.pages[state.currentPageIndex]}
        footer={<Footer />}
        navigateToPage={navigateToPage}
      />
    </React.StrictMode>
  );
}

// Use createRoot to create a root and then render your component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
