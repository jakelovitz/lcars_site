import React from 'react';

const Book = ({ Title, Subtitle, Series, Author, AuthorLastFirst, yearPublished, Genre, numberOfPages, Tags }) => {
  return (
    <div className="book">
      <h3>{Title}</h3>
      {Subtitle && <h4>{Subtitle}</h4>}

        <div class="flexbox">
          <div class="col">
            <p>Author: {Author}</p>
            <p>Genre: {Genre}</p>
          </div>
          <div class="col">
            {numberOfPages && <p>Number of Pages: {numberOfPages}</p>}
            {yearPublished && <p>Year Published: {yearPublished}</p>}
          </div>
        </div>
      <hr></hr>
    </div>
  );
};

export default Book;
