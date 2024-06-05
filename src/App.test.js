import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import App from './App';

// Mock components
const MockHeader = () => <div>Header</div>;
const MockFooter = () => <div>Footer</div>;
const MockCurrentPage = () => <div>Current Page</div>;
const mockNavigateToPage = jest.fn();

describe('App component', () => {
  beforeEach(() => {
    render(
      <App
        header={<MockHeader />}
        footer={<MockFooter />}
        currentPage={MockCurrentPage}
        navigateToPage={mockNavigateToPage}
      />
    );
  });

  test('renders navigation buttons', () => {
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();
    expect(screen.getByText('Library')).toBeInTheDocument();
  });

  test('calls navigateToPage with correct argument when About Me button is clicked', () => {
    fireEvent.click(screen.getByText('About Me'));
    expect(mockNavigateToPage).toHaveBeenCalledWith(0);
  });

  test('calls navigateToPage with correct argument when Testing button is clicked', () => {
    fireEvent.click(screen.getByText('Testing'));
    expect(mockNavigateToPage).toHaveBeenCalledWith(1);
  });

  test('calls navigateToPage with correct argument when Library button is clicked', () => {
    fireEvent.click(screen.getByText('Library'));
    expect(mockNavigateToPage).toHaveBeenCalledWith(2);
  });
});
