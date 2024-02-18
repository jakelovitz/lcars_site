import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import TestingPage from './pages/TestingPage';
import LibraryPage from './pages/LibraryPage';
import reportWebVitals from './reportWebVitals';

// Define the initial state and any other global states here
const initialState = {
  currentPageIndex: 0,
  pages: [AboutMe, TestingPage, LibraryPage],
};

function Index() {
  const [state, setState] = useState(initialState);

  const navigateToPage = (pageIndex) => {
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

ReactDOM.render(<Index />, document.getElementById('root'));