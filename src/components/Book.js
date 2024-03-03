import React from 'react';

const Book = ({ title, subtitle, series, authors, genre, subGenre }) => {
  return (
    <div className="book">
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}

      <div className="flexbox">
        <div className="col">
          <p>Author: {authors}</p>
          <p>Genre: {genre}</p>
          {subGenre && <p>Sub-Genre: {subGenre}</p>}
        </div>
        <div className="col">
          {series && <p>Series: {series}</p>}
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Book;
