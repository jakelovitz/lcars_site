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
    const { onNavigate, footer } = this.props;

    if (loading) return <div>Loading books...</div>;
    if (error) return <div>Error loading books: {error.message}</div>;

    return (
      <div class="wrap" id="gap">
        <div class="left-frame">
          <div>
              <div class="panel-3"><span class="hop"></span></div>
              <div class="sidebar-buttons">
                  <a onClick={() => onNavigate(0)} id="0">About Me</a>
                  <a onClick={() => onNavigate(1)} id="1">Testing</a>
                  <a onClick={() => onNavigate(2)} id="2">Library</a>
              </div>
              <div class="panel-4"><span class="hop"></span></div>
                  <div class="panel-5">Hello<span class="hop">Pipes</span></div>
                  <div class="panel-6"><span class="hop"></span></div>
                  <div class="panel-7"><span class="hop"></span></div>
                  <div class="panel-8"><span class="hop"></span></div>
                  <div class="panel-9">And<span class="hop">Again</span></div>
              </div>
              <div class="panel-10">Oh and<span class="hop">Yet Again</span></div>
          </div>

          <div className="right-frame">
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
          {footer}
        </div>
      </div>
    );
  }
}

export default LibraryPage;