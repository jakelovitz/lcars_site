import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import TestingPage from './pages/TestingPage';
import LibraryPage from './pages/LibraryPage';
import reportWebVitals from './reportWebVitals';

function Index() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <App footer={<Footer />}>
                <AboutMe />
              </App>
            }
          />
          <Route
            path="/testing"
            element={
              <App footer={<Footer />}>
                <TestingPage />
              </App>
            }
          />
          <Route
            path="/library"
            element={
              <App footer={<Footer />}>
                <LibraryPage />
              </App>
            }
          />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

reportWebVitals();
