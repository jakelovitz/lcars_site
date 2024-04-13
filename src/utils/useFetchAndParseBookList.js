import Papa from 'papaparse';

const googleSheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3e4RAFBS130gqzEmRvVn0rNSFrpkGgWe4S5DRFRrbV3nd-Bm1U0Yz0ZdnEuOKHC1t-7YlVOff-13k/pub?output=csv';

const fetchAndParseBookList = () => {
  return new Promise((resolve, reject) => {
    fetch(googleSheetURL)
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const transformedData = results.data
              .filter(book => !book["Exclude"]) // Exclude rows where the 'Exclude' column is not empty
              .map(book => ({
                title: book["Title"],
                subtitle: book["Subtitle"],
                authors: book["Author(s)"],
                genre: book["Genre"],
                subGenre: book["Sub-Genre"] && book["Sub-Genre"].trim() ? book["Sub-Genre"] : "Not Specified",
                isbn: book["ISBN"],
                olid: book["OLID"],
                series: book["Series"],
                volume: book["Volume"] // Parse volume to int if present
              }));
            console.log('transformedData', transformedData);
            resolve(transformedData);
          },
          error: (error) => {
            reject(error);
          }
        });
      })
      .catch(error => reject(error));
  });
};

export default fetchAndParseBookList;

