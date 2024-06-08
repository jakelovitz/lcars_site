import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import reactSelectEvent from 'react-select-event';
import LibraryPage from './LibraryPage';
import fetchAndParseBookList from '../utils/fetchAndParseBookList';
import { sortBooks } from '../utils/sortBooks';

// Mock the fetchAndParseBookList function
jest.mock('../utils/fetchAndParseBookList', () => jest.fn());
jest.mock('../utils/sortBooks', () => ({
  sortBooks: jest.fn(),
}));

const mockBooks = [
  {
    title: 'Book 1',
    author: 'Author A',
    genre: 'Fiction',
    subGenre: 'Adventure',
    olid: 'OL12345M',
  },
  {
    title: 'Book 2',
    author: 'Author B',
    genre: 'Non-Fiction',
    subGenre: 'Biography',
    olid: 'OL67890M',
  },
];

describe('LibraryPage Component', () => {
  beforeEach(() => {
    fetchAndParseBookList.mockResolvedValue(mockBooks);
    sortBooks.mockImplementation(books =>
      books.sort((a, b) => a.author.localeCompare(b.author))
    ); // Mock implementation for sorting
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches and displays books on mount', async () => {
    await act(async () => {
      render(<LibraryPage />);
    });
    expect(fetchAndParseBookList).toHaveBeenCalled();
    await waitFor(() =>
      expect(screen.getByTestId('book-OL12345M')).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByTestId('book-OL67890M')).toBeInTheDocument()
    );
  });

  test('displays error message if fetching books fails', async () => {
    fetchAndParseBookList.mockRejectedValue(new Error('Failed to fetch books'));
    await act(async () => {
      render(<LibraryPage />);
    });
    await waitFor(() =>
      expect(
        screen.getByText('Error loading books: Failed to fetch books')
      ).toBeInTheDocument()
    );
  });

  test('renders genre and sub-genre dropdowns', async () => {
    await act(async () => {
      render(<LibraryPage />);
    });
    await waitFor(() =>
      expect(screen.getByTestId('book-OL12345M')).toBeInTheDocument()
    );
    const genreDropdown = screen.getByText('Select a genre...');

    // Open the dropdown to make options visible
    await act(async () => {
      fireEvent.mouseDown(genreDropdown);
    });

    await act(async () => {
      await reactSelectEvent.select(genreDropdown, 'Fiction');
    });

    await waitFor(() =>
      expect(screen.getByText('Select a sub-genre...')).toBeInTheDocument()
    );
  });

  test('filters books by genre and sub-genre', async () => {
    await act(async () => {
      render(<LibraryPage />);
    });
    await waitFor(() =>
      expect(screen.getByTestId('book-OL12345M')).toBeInTheDocument()
    );

    const genreDropdown = screen.getByText('Select a genre...');

    // Open the dropdown to make options visible
    await act(async () => {
      fireEvent.mouseDown(genreDropdown);
    });

    await act(async () => {
      await reactSelectEvent.select(genreDropdown, 'Fiction');
    });

    await waitFor(() =>
      expect(screen.getByTestId('book-OL12345M')).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.queryByTestId('book-OL67890M')).not.toBeInTheDocument()
    );

    const subGenreDropdown = screen.getByText('Select a sub-genre...');

    // Open the dropdown to make options visible
    await act(async () => {
      fireEvent.mouseDown(subGenreDropdown);
    });

    await act(async () => {
      await reactSelectEvent.select(subGenreDropdown, 'Adventure');
    });

    await waitFor(() =>
      expect(screen.getByTestId('book-OL12345M')).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.queryByTestId('book-OL67890M')).not.toBeInTheDocument()
    );
  });

  test('sorts books by author and title', async () => {
    await act(async () => {
      render(<LibraryPage />);
    });
    await waitFor(() =>
      expect(screen.getByTestId('book-OL12345M')).toBeInTheDocument()
    );

    await act(async () => {
      fireEvent.click(screen.getByText('Sort by Author'));
    });

    await waitFor(() =>
      expect(sortBooks).toHaveBeenCalledWith(expect.any(Array))
    );
    await waitFor(() =>
      expect(screen.getByText('Sorted by: Author')).toBeInTheDocument()
    );

    await act(async () => {
      fireEvent.click(screen.getByText('Sort by Title'));
    });

    await waitFor(() =>
      expect(screen.getByText('Sorted by: Title')).toBeInTheDocument()
    );
  });
});
