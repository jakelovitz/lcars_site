import React, { Component } from 'react';
import Select from 'react-select'
import fetchAndParseBookList from '../utils/useFetchAndParseBookList';
import Book from './../components/Book';

const customSelectStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'darkslategray',
    backgroundColor: state.isSelected ? 'purple' : 'white',
    padding: 20,
  }),
};

class LibraryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      filteredBooks: [],
      genres: [],
      currentGenre: null,
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
        const genres = ['All', ...new Set(books.map(book => book.Genre))]
          .map(genre => ({ value: genre, label: genre }));
        this.setState({
          books,
          filteredBooks: books,
          genres,
          loading: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleGenreChange = selectedOption => {
    this.setState({ currentGenre: selectedOption }, this.filterBooksByGenre);
  };

  filterBooksByGenre = () => {
    const { books, currentGenre } = this.state;
    const filteredBooks = currentGenre && currentGenre.value !== 'All'
      ? books.filter(book => book.Genre === currentGenre.value)
      : books;
    this.setState({ filteredBooks });
  };

  render() {
    const { loading, error, filteredBooks, genres } = this.state;

    if (loading) return <div>Loading books...</div>;
    if (error) return <div>Error loading books: {error.message}</div>;

    return (
      <div>
        <div >
          <div className="content">
            <h1>Library</h1>
            <p>I've spent the last few years putting my library together. Enjoy strolling through the titles.</p>
            <Select
              value={this.state.currentGenre}
              onChange={this.handleGenreChange}
              options={genres}
              styles={customSelectStyles}
              isClearable={true}
              placeholder="Select a genre..."
            />
            {/* book list starts here */}
            <div className="book-list">
              {filteredBooks.map((book, index) => (
                <Book key={index} {...book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LibraryPage;