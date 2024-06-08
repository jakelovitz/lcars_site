import React from 'react';
import { render, screen } from '@testing-library/react';
import Book from './Book';

describe('Book component', () => {
  const defaultProps = {
    title: 'Test Book Title',
    subtitle: 'Test Subtitle',
    series: 'Test Series',
    authors: 'Test Author',
    genre: 'Test Genre',
    subGenre: 'Test SubGenre',
    olid: 'OL12345M',
    volume: '1'
  };

  test('renders book title with a link', () => {
    render(<Book {...defaultProps} />);
    const titleLink = screen.getByRole('link', { name: /Test Book Title/i });
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute('href', 'https://openlibrary.org/works/OL12345M');
  });

  test('renders subtitle when provided', () => {
    render(<Book {...defaultProps} />);
    const subtitle = screen.getByText(/Test Subtitle/i);
    expect(subtitle).toBeInTheDocument();
  });

  test('does not render subtitle when not provided', () => {
    const { subtitle, ...propsWithoutSubtitle } = defaultProps;
    render(<Book {...propsWithoutSubtitle} />);
    const subtitleElement = screen.queryByText(/Test Subtitle/i);
    expect(subtitleElement).not.toBeInTheDocument();
  });

  test('renders series and volume when provided', () => {
    render(<Book {...defaultProps} />);
    const seriesText = screen.getByText(/Test Series, Volume 1/i);
    expect(seriesText).toBeInTheDocument();
  });

  test('does not render series and volume when not provided', () => {
    const { series, volume, ...propsWithoutSeries } = defaultProps;
    render(<Book {...propsWithoutSeries} />);
    const seriesElement = screen.queryByText(/Test Series, Volume/i);
    expect(seriesElement).not.toBeInTheDocument();
  });

  test('renders book cover image with correct alt text and src', () => {
    render(<Book {...defaultProps} />);
    const img = screen.getByRole('img', { name: /Test Book Title cover/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://covers.openlibrary.org/b/olid/OL12345M-M.jpg');
  });

  test('renders author, genre, and subgenre', () => {
    render(<Book {...defaultProps} />);
    const author = screen.getByText(/Author: Test Author/i);
    const genre = screen.getByText(/Genre: Test Genre/i);
    const subGenre = screen.getByText(/Sub-Genre: Test SubGenre/i);

    expect(author).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
    expect(subGenre).toBeInTheDocument();
  });

  test('does not break if optional fields are not provided', () => {
    const { subtitle, series, volume, ...requiredProps } = defaultProps;
    render(<Book {...requiredProps} />);
    expect(screen.getByText(/Test Book Title/i)).toBeInTheDocument();
    expect(screen.queryByText(/Test Subtitle/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Test Series, Volume 1/i)).not.toBeInTheDocument();
  });
});
