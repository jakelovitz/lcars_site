import React from 'react';
import useFetchAndParseBookList from './../hooks/useFetchAndParseBookList';
import Book from './../components/Book'; // Adjust the import path as necessary

const LibraryPage = () => {
  const { books, loading, error } = useFetchAndParseBookList();

  if (loading) return <div>Loading books...</div>;
  if (error) return <div>Error loading books: {error.message}</div>;

  return (
    <div>
      <h1>Library</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <Book key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
