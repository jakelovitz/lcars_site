import fetchAndParseBookList from './fetchAndParseBookList';
import { sortBooks } from './sortBooks';
import Papa from 'papaparse';

jest.mock('./sortBooks');
jest.mock('papaparse');

describe('fetchAndParseBookList', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('successfully fetches and parses book list', async () => {
    const mockCSV =
      'Title,Subtitle,Author(s),Author(s) - Last Name,Genre,Sub-Genre,ISBN,OLID,Series,Volume,Exclude\n' +
      'Book 1,Subtitle 1,Author A,Author A,Genre A,Sub-Genre A,1234567890,OL12345M,Series A,1,\n' +
      'Book 2,,Author B,Author B,Genre B,,0987654321,OL67890M,,2,';
    const mockBooks = [
      {
        title: 'Book 1',
        subtitle: 'Subtitle 1',
        authors: 'Author A',
        sorted_authors: 'Author A',
        genre: 'Genre A',
        subGenre: 'Sub-Genre A',
        isbn: '1234567890',
        olid: 'OL12345M',
        series: 'Series A',
        volume: 1,
      },
      {
        title: 'Book 2',
        subtitle: '',
        authors: 'Author B',
        sorted_authors: 'Author B',
        genre: 'Genre B',
        subGenre: 'Not Specified',
        isbn: '0987654321',
        olid: 'OL67890M',
        series: '',
        volume: 2,
      },
    ];

    fetch.mockResolvedValue({
      ok: true,
      text: jest.fn().mockResolvedValue(mockCSV),
    });

    Papa.parse.mockImplementation((csvText, options) => {
      options.complete({
        data: [
          {
            Title: 'Book 1',
            Subtitle: 'Subtitle 1',
            'Author(s)': 'Author A',
            'Author(s) - Last Name': 'Author A',
            Genre: 'Genre A',
            'Sub-Genre': 'Sub-Genre A',
            ISBN: '1234567890',
            OLID: 'OL12345M',
            Series: 'Series A',
            Volume: '1',
            Exclude: '',
          },
          {
            Title: 'Book 2',
            Subtitle: '',
            'Author(s)': 'Author B',
            'Author(s) - Last Name': 'Author B',
            Genre: 'Genre B',
            'Sub-Genre': '',
            ISBN: '0987654321',
            OLID: 'OL67890M',
            Series: '',
            Volume: '2',
            Exclude: '',
          },
        ],
      });
    });

    sortBooks.mockReturnValue(mockBooks);

    const result = await fetchAndParseBookList();
    expect(result).toEqual(mockBooks);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://docs.google.com/spreadsheets')
    );
    expect(Papa.parse).toHaveBeenCalledWith(mockCSV, expect.any(Object));
    expect(sortBooks).toHaveBeenCalledWith(mockBooks);
  });

  test('handles fetch failure', async () => {
    fetch.mockRejectedValue(new Error('Failed to fetch'));

    await expect(fetchAndParseBookList()).rejects.toThrow('Failed to fetch');
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://docs.google.com/spreadsheets')
    );
  });

  test('handles CSV parsing error', async () => {
    const mockCSV = 'invalid CSV data';
    fetch.mockResolvedValue({
      ok: true,
      text: jest.fn().mockResolvedValue(mockCSV),
    });

    Papa.parse.mockImplementation((csvText, options) => {
      options.error(new Error('Parsing error'));
    });

    await expect(fetchAndParseBookList()).rejects.toThrow('Parsing error');
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://docs.google.com/spreadsheets')
    );
    expect(Papa.parse).toHaveBeenCalledWith(mockCSV, expect.any(Object));
  });

  test('transforms and sorts data correctly', async () => {
    const mockCSV =
      'Title,Subtitle,Author(s),Author(s) - Last Name,Genre,Sub-Genre,ISBN,OLID,Series,Volume,Exclude\n' +
      'Book 1,Subtitle 1,Author A,Author A,Genre A,Sub-Genre A,1234567890,OL12345M,Series A,1,\n' +
      'Book 2,,Author B,Author B,Genre B,,0987654321,OL67890M,,2,';
    const mockBooks = [
      {
        title: 'Book 1',
        subtitle: 'Subtitle 1',
        authors: 'Author A',
        sorted_authors: 'Author A',
        genre: 'Genre A',
        subGenre: 'Sub-Genre A',
        isbn: '1234567890',
        olid: 'OL12345M',
        series: 'Series A',
        volume: 1,
      },
      {
        title: 'Book 2',
        subtitle: '',
        authors: 'Author B',
        sorted_authors: 'Author B',
        genre: 'Genre B',
        subGenre: 'Not Specified',
        isbn: '0987654321',
        olid: 'OL67890M',
        series: '',
        volume: 2,
      },
    ];

    fetch.mockResolvedValue({
      ok: true,
      text: jest.fn().mockResolvedValue(mockCSV),
    });

    Papa.parse.mockImplementation((csvText, options) => {
      options.complete({
        data: [
          {
            Title: 'Book 1',
            Subtitle: 'Subtitle 1',
            'Author(s)': 'Author A',
            'Author(s) - Last Name': 'Author A',
            Genre: 'Genre A',
            'Sub-Genre': 'Sub-Genre A',
            ISBN: '1234567890',
            OLID: 'OL12345M',
            Series: 'Series A',
            Volume: '1',
            Exclude: '',
          },
          {
            Title: 'Book 2',
            Subtitle: '',
            'Author(s)': 'Author B',
            'Author(s) - Last Name': 'Author B',
            Genre: 'Genre B',
            'Sub-Genre': '',
            ISBN: '0987654321',
            OLID: 'OL67890M',
            Series: '',
            Volume: '2',
            Exclude: '',
          },
        ],
      });
    });

    sortBooks.mockReturnValue(mockBooks.reverse());

    const result = await fetchAndParseBookList();
    expect(result).toEqual(mockBooks.reverse());
    expect(sortBooks).toHaveBeenCalledWith(mockBooks);
  });
});
