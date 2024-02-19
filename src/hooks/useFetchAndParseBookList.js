import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import csvFile from '../assets/BookList.csv';

const useFetchAndParseBookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            Papa.parse(csvFile, {
                download: true,
                header: true,
                complete: (results) => {
                    setBooks(results.data);
                    console.log('results', results.data)
                    setLoading(false);
                },
                error: (err) => {
                    setError(err);
                    setLoading(false);
                }
            });
            console.log('books', books)
        };

        fetchData();
    }, []);

    return { books, loading, error };
};

export default useFetchAndParseBookList;

