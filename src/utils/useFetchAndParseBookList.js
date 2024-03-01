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
            const transformedData = results.data.map(book => ({
              ...book,
              authorLastFirst: book["Author (Last, First)"], // Transforming to camelCase
              yearPublished: parseInt(book["Year Published"], 10), // Also converting to integer
              numberOfPages: parseInt(book["Number of Pages"], 10), // Converting string to integer
              // Add similar transformations for other fields if necessary
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

