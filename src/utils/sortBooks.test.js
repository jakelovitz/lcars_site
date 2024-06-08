import { sortBooks } from './sortBooks';

describe('sortBooks', () => {
  test('sorts books by author names (case-insensitive)', () => {
    const books = [
      { sorted_authors: 'c Author', title: 'Title 3' },
      { sorted_authors: 'a Author', title: 'Title 1' },
      { sorted_authors: 'B Author', title: 'Title 2' },
    ];
    const expected = [
      { sorted_authors: 'a Author', title: 'Title 1' },
      { sorted_authors: 'B Author', title: 'Title 2' },
      { sorted_authors: 'c Author', title: 'Title 3' },
    ];
    expect(sortBooks(books)).toEqual(expected);
  });

  test('sorts books by series names (case-insensitive)', () => {
    const books = [
      { sorted_authors: 'Author', series: 'c Series', volume: 1 },
      { sorted_authors: 'Author', series: 'a Series', volume: 1 },
      { sorted_authors: 'Author', series: 'B Series', volume: 1 },
    ];
    const expected = [
      { sorted_authors: 'Author', series: 'a Series', volume: 1 },
      { sorted_authors: 'Author', series: 'B Series', volume: 1 },
      { sorted_authors: 'Author', series: 'c Series', volume: 1 },
    ];
    expect(sortBooks(books)).toEqual(expected);
  });

  test('sorts books by volume numbers', () => {
    const books = [
      { sorted_authors: 'Author', series: 'Series', volume: 3 },
      { sorted_authors: 'Author', series: 'Series', volume: 1 },
      { sorted_authors: 'Author', series: 'Series', volume: 2 },
    ];
    const expected = [
      { sorted_authors: 'Author', series: 'Series', volume: 1 },
      { sorted_authors: 'Author', series: 'Series', volume: 2 },
      { sorted_authors: 'Author', series: 'Series', volume: 3 },
    ];
    expect(sortBooks(books)).toEqual(expected);
  });

  test('sorts books without series last', () => {
    const books = [
      { sorted_authors: 'Author', series: 'Series A', volume: 1 },
      { sorted_authors: 'Author', volume: 1 },
      { sorted_authors: 'Author', series: 'Series B', volume: 1 },
    ];
    const expected = [
      { sorted_authors: 'Author', series: 'Series A', volume: 1 },
      { sorted_authors: 'Author', series: 'Series B', volume: 1 },
      { sorted_authors: 'Author', volume: 1 },
    ];
    expect(sortBooks(books)).toEqual(expected);
  });

  test('handles books with missing volume by putting them last', () => {
    const books = [
      { sorted_authors: 'Author', series: 'Series', volume: 1 },
      { sorted_authors: 'Author', series: 'Series', volume: null },
      { sorted_authors: 'Author', series: 'Series', volume: 2 },
    ];
    const expected = [
      { sorted_authors: 'Author', series: 'Series', volume: 1 },
      { sorted_authors: 'Author', series: 'Series', volume: 2 },
      { sorted_authors: 'Author', series: 'Series', volume: null },
    ];
    expect(sortBooks(books)).toEqual(expected);
  });

  test('sorts books by author, then series, then volume', () => {
    const books = [
      { sorted_authors: 'Author B', series: 'Series A', volume: 1 },
      { sorted_authors: 'Author A', series: 'Series B', volume: 1 },
      { sorted_authors: 'Author A', series: 'Series A', volume: 2 },
      { sorted_authors: 'Author A', series: 'Series A', volume: 1 },
      { sorted_authors: 'Author B', series: 'Series B', volume: 1 },
    ];
    const expected = [
      { sorted_authors: 'Author A', series: 'Series A', volume: 1 },
      { sorted_authors: 'Author A', series: 'Series A', volume: 2 },
      { sorted_authors: 'Author A', series: 'Series B', volume: 1 },
      { sorted_authors: 'Author B', series: 'Series A', volume: 1 },
      { sorted_authors: 'Author B', series: 'Series B', volume: 1 },
    ];
    expect(sortBooks(books)).toEqual(expected);
  });
});
