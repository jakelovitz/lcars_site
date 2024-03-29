import React from 'react';

const Book = ({ title, subtitle, series, authors, genre, subGenre, volume }) => {
  return (
    <div className="book">
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      {series && <p>{series}, Volume {volume} </p>}

      <div className="flexbox">
        <div className="col">
          <p>Author: {authors}</p>
          <p>Genre: {genre}</p>
          <p>Sub-Genre: {subGenre}</p>
        </div>
        {/* <div className="col">
          {series && <p>Series: {series}</p>}
        </div> */}
      </div>
      <hr></hr>
    </div>
  );
};

export default Book;
