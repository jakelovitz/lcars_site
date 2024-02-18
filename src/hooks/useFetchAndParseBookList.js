import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

const useFetchAndParseBookList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming 'BookList.html' is located in the 'public' folder
        const url = process.env.PUBLIC_URL + '/BookList.html';
        const response = await fetch(url);
        const htmlString = await response.text();
        // Sanitize the HTML string with DOMPurify
        const cleanHtmlString = DOMPurify.sanitize(htmlString);
        const parser = new DOMParser();
        const doc = parser.parseFromString(cleanHtmlString, "text/html");
        // Implement the specific parsing logic for 'BookList.html' here
        const parsedData = parseBookListDocument(doc); // Adjust this function to your needs
        setData(parsedData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Implement your specific parsing logic for 'BookList.html' here
  function parseBookListDocument(doc) {
    // Assuming there's only one book per document or you'll loop through multiple
    const book = {};
    book.title = doc.querySelector('.title')?.textContent || '';
    book.subtitle = doc.querySelector('.subtitle')?.textContent || '';
    book.author = doc.querySelector('.author')?.textContent || '';
    book.thumbnail = doc.querySelector('img')?.getAttribute('src') || '';
    book.genre = doc.querySelectorAll('.field')[0]?.textContent.split(':')[1].trim() || '';
    book.readingStatus = doc.querySelectorAll('.field')[1]?.textContent.split(':')[1].trim() || '';
    book.tags = doc.querySelectorAll('.field')[2]?.textContent.split(':')[1].trim() || '';
  
    return [book]; // Returning an array to keep the data structure consistent with your expectations
  }

  return { data, loading, error };
};

export default useFetchAndParseBookList;

