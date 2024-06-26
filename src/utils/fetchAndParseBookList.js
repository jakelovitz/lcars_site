import Papa from 'papaparse';
import { sortBooks } from './sortBooks';

const googleSheetURL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3e4RAFBS130gqzEmRvVn0rNSFrpkGgWe4S5DRFRrbV3nd-Bm1U0Yz0ZdnEuOKHC1t-7YlVOff-13k/pub?output=csv';

const fetchAndParseBookList = () => {
  return new Promise((resolve, reject) => {
    fetch(googleSheetURL)
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.text();
      })
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: results => {
            const transformedData = results.data
              .filter(book => !book['Exclude'])
              .map(book => ({
                title: book['Title'],
                subtitle: book['Subtitle'],
                authors: book['Author(s)'],
                sorted_authors: book['Author(s) - Last Name'],
                genre: book['Genre'],
                subGenre:
                  book['Sub-Genre'] && book['Sub-Genre'].trim()
                    ? book['Sub-Genre']
                    : 'Not Specified',
                isbn: book['ISBN'],
                olid: book['OLID'],
                series: book['Series'],
                volume: book['Volume'] ? parseInt(book['Volume'], 10) : null,
              }));

            const sortedData = sortBooks(transformedData);
            resolve(sortedData);
          },
          error: error => {
            reject(error);
          },
        });
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default fetchAndParseBookList;
