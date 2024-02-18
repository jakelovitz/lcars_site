import React from 'react';
import './../assets/styling.css';

function Book({ book }) {
    return (
      <div className="book">
        <div className="book-thumbnail">
          <img src={book.thumbnail} alt="Thumbnail" />
        </div>
        <div className="book-info">
          <h2>{book.title}</h2>
          <h3>{book.subtitle}</h3>
          <p className="author">{`Author: ${book.author}`}</p>
          <p>{`Genre: ${book.genre}`}</p>
          <p>{`Reading Status: ${book.readingStatus}`}</p>
          <p>{`Tags: ${book.tags}`}</p>
        </div>
      </div>
    );
  }
  
  export default Book;
  