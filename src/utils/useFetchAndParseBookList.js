import Papa from 'papaparse';
import csvFile from './../assets/BookList.csv';

const fetchAndParseBookList = () => {
  return new Promise((resolve, reject) => {
    fetch(csvFile)
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            console.log('results', results.data)
            resolve(results.data); // Assuming you want the parsed CSV data
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

