import React from 'react';

const Book = ({
  title,
  subtitle,
  series,
  authors,
  genre,
  subGenre,
  olid,
  volume,
}) => {
  return (
    <div className="book" data-testid={`book-${olid}`}>
      <h3>
        <a
          href={`https://openlibrary.org/works/${olid}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </h3>
      {subtitle && <h4>{subtitle}</h4>}
      {series && (
        <p>
          {series}, Volume {volume}{' '}
        </p>
      )}
      <div className="flexbox">
        <div>
          <img
            src={`https://covers.openlibrary.org/b/olid/${olid}-M.jpg`}
            alt={`${title} cover`}
          />
        </div>
        <div className="col">
          <p>Author: {authors}</p>
          <p>Genre: {genre}</p>
          <p>Sub-Genre: {subGenre}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Book;
