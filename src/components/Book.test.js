import React from 'react';
import { render, screen } from '@testing-library/react';
import Book from './Book'; // Adjust the import path according to your file structure

describe('Book Component', () => {
  // Test 1: Renders basic book information
  test('renders basic book information', () => {
    render(<Book title="The Great Gatsby" authors="F. Scott Fitzgerald" genre="Fiction" subGenre="US Literature" />);
    expect(screen.getByText("The Great Gatsby")).toBeInTheDocument();
    expect(screen.getByText("Author: F. Scott Fitzgerald")).toBeInTheDocument();
    expect(screen.getByText("Genre: Fiction")).toBeInTheDocument();
    expect(screen.getByText("Sub-Genre: US Literature"))
  });

  // Test 2: Conditionally renders subtitle, Series, Volume
  test('conditionally renders additional information if present', () => {
    render(
      <Book 
        title="The Great Gatsby" 
        subtitle="A Novel" 
        authors="F. Scott Fitzgerald" 
        genre="Fiction"
        subGenre="US Literature"
      />
    );
    expect(screen.getByText("A Novel")).toBeInTheDocument();
  });

  // Test 3: Does not render optional fields if they are not provided
  test('does not render optional fields when not provided', () => {
    render(<Book Title="The Great Gatsby" Author="F. Scott Fitzgerald" Genre="Fiction" />);
    const subtitle = screen.queryByText(/subtitle:/i);
    expect(subtitle).not.toBeInTheDocument();
    // Add similar checks for other optional fields as needed
  });
});