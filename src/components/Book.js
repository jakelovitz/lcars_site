import React from 'react';

const Book = ({ Title, Subtitle, Series, Author, AuthorLastFirst, YearPublished, Genre, NumberOfPages, Tags }) => {
  return (
    <div className="book">
      <h2>{Title}</h2>
      {Subtitle && <h4>{Subtitle}</h4>}
      <p>Author: {Author}</p>
      {YearPublished &&       <p>Year Published: {YearPublished}</p>}
      <p>Genre: {Genre}</p>
      {NumberOfPages && <p>Number of Pages: {NumberOfPages}</p>}
      {Tags && <p>Tags: {Tags}</p>}
    </div>
  );
};

export default Book;
