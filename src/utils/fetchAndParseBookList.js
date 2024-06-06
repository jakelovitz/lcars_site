import Papa from 'papaparse';
import { sortBooks } from './sortBooks'; // Adjust the path as necessary

const googleSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3e4RAFBS130gqzEmRvVn0rNSFrpkGgWe4S5DRFRrbV3nd-Bm1U0Yz0ZdnEuOKHC1t-7YlVOff-13k/pub?output=csv';

const fetchAndParseBookList = () => {
  return new Promise((resolve, reject) => {
    fetch(googleSheetURL)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.text();
      })
      .then(csvText => {
        console.log('CSV Text:', csvText); // Debugging: Log the raw CSV text
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            console.log('Parsed Results:', results); // Debugging: Log the parsed results
            const transformedData = results.data
              .filter(book => !book["Exclude"]) // Exclude rows where the 'Exclude' column is not empty
              .map(book => ({
                title: book["Title"],
                subtitle: book["Subtitle"],
                authors: book["Author(s)"],
                sorted_authors: book["Author(s) - Last Name"],
                genre: book["Genre"],
                subGenre: book["Sub-Genre"] && book["Sub-Genre"].trim() ? book["Sub-Genre"] : "Not Specified",
                isbn: book["ISBN"],
                olid: book["OLID"],
                series: book["Series"],
                volume: book["Volume"] ? parseInt(book["Volume"], 10) : null // Parse volume to int if present
              }));

            console.log('Transformed Data:', transformedData); // Debugging: Log the transformed data

            const sortedData = sortBooks(transformedData);
            console.log('Sorted Data:', sortedData); // Debugging: Log the sorted data
            resolve(sortedData);
          },
          error: (error) => {
            console.error('Parsing Error:', error); // Debugging: Log parsing errors
            reject(error);
          }
        });
      })
      .catch(error => {
        console.error('Fetch Error:', error); // Debugging: Log fetch errors
        reject(error);
      });
  });
};

export default fetchAndParseBookList;
