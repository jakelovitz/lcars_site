import React from 'react';
import { render, screen } from '@testing-library/react';
import Book from './Book'; // Adjust the import path according to your file structure

describe('Book Component', () => {
  // Test 1: Renders basic book information
  test('renders basic book information', () => {
    render(<Book Title="The Great Gatsby" Author="F. Scott Fitzgerald" Genre="Novel" />);
    expect(screen.getByText("The Great Gatsby")).toBeInTheDocument();
    expect(screen.getByText("Author: F. Scott Fitzgerald")).toBeInTheDocument();
    expect(screen.getByText("Genre: Novel")).toBeInTheDocument();
  });

  // Test 2: Conditionally renders subtitle, year published, and number of pages
  test('conditionally renders additional information if present', () => {
    render(
      <Book 
        Title="The Great Gatsby" 
        Subtitle="A Novel" 
        Author="F. Scott Fitzgerald" 
        yearPublished={1925} 
        numberOfPages={218} 
        Genre="Novel" 
      />
    );
    expect(screen.getByText("A Novel")).toBeInTheDocument();
    expect(screen.getByText("Year Published: 1925")).toBeInTheDocument();
    expect(screen.getByText("Number of Pages: 218")).toBeInTheDocument();
  });

  // Test 3: Does not render optional fields if they are not provided
  test('does not render optional fields when not provided', () => {
    render(<Book Title="The Great Gatsby" Author="F. Scott Fitzgerald" Genre="Novel" />);
    const subtitle = screen.queryByText(/subtitle:/i);
    expect(subtitle).not.toBeInTheDocument();
    // Add similar checks for other optional fields as needed
  });
});