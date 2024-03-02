import React from 'react';

const Book = ({ Title, Subtitle, Series, Author, AuthorLastFirst, yearPublished, Genre, numberOfPages, Tags }) => {
  return (
    <div className="book">
      <h3>{Title}</h3>
      {Subtitle && <h4>{Subtitle}</h4>}

        <div className="flexbox">
          <div className="col">
            <p>Author: {Author}</p>
            <p>Genre: {Genre}</p>
          </div>
          <div className="col">
            {numberOfPages && <p>Number of Pages: {numberOfPages}</p>}
            {yearPublished && <p>Year Published: {yearPublished}</p>}
          </div>
        </div>
      <hr></hr>
    </div>
  );
};

export default Book;
