import React from 'react';

const Book = ({ Title, Subtitle, Series, Author, AuthorLastFirst, YearPublished, Genre, NumberOfPages, Tags }) => {
  return (
    <div className="book">

        {/* <div class="lcars-text-bar">
            <span>{Title}</span>
        </div> */}

      <h2>{Title}</h2>
      {Subtitle && <h4>{Subtitle}</h4>}
      <p>Author: {Author}</p>
      <p>Genre: {Genre}</p>
      {YearPublished && <p>Year Published: {YearPublished}</p>}
      {NumberOfPages && <p>Number of Pages: {NumberOfPages}</p>}
      {Tags && <p>Tags: {Tags}</p>}

      <div class="lcars-text-bar">
          <span></span>
      </div>
    </div>
  );
};

export default Book;
