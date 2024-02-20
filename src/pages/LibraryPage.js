import React, { Component } from 'react';
import fetchAndParseBookList from '../utils/useFetchAndParseBookList';
import Book from './../components/Book'; // Adjust the import path as necessary

class LibraryPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        books: [],
        loading: true,
        error: null
      };
    }
  
    componentDidMount() {
      this.fetchBooks();
    }
  
    fetchBooks = () => {
      fetchAndParseBookList()
        .then(books => {
          this.setState({
            books: books,
            loading: false
          });
        })
        .catch(error => {
          this.setState({
            error: error,
            loading: false
          });
        });
    }
  
    render() {
      const { loading, error, books } = this.state;
  
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
    }
  }
  
  export default LibraryPage;