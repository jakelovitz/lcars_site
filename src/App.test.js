import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import AboutMe from './pages/AboutMe';
import TestingPage from './pages/TestingPage';
import LibraryPage from './pages/LibraryPage';

test('renders About Me page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App>
        <AboutMe />
      </App>
    </MemoryRouter>
  );
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
});

test('renders Testing page', () => {
  render(
    <MemoryRouter initialEntries={['/testing']}>
      <App>
        <TestingPage />
      </App>
    </MemoryRouter>
  );
  // Use data-testid to find the unique element
  expect(screen.getByTestId('testing-page-title')).toBeInTheDocument();
  expect(screen.getByTestId('testing-page-content')).toBeInTheDocument();
});

test('renders Library page', () => {
  render(
    <MemoryRouter initialEntries={['/library']}>
      <App>
        <LibraryPage />
      </App>
    </MemoryRouter>
  );
  expect(screen.getByText(/Library/i)).toBeInTheDocument();
});
