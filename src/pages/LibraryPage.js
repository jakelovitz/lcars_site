import React, { Component } from 'react';
import Select from 'react-select';
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
      subGenres: [],
      currentGenre: null,
      currentSubGenre: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    fetchAndParseBookList()
      .then(books => {
        const genres = ['All', ...new Set(books.map(book => book.genre))]
          .map(genre => ({ value: genre, label: genre }));
        this.setState({
          books,
          filteredBooks: books,
          genres,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleGenreChange = selectedOption => {
    // const { books } = this.state;
    this.setState({
      currentGenre: selectedOption,
      currentSubGenre: null
    }, () => {
      this.filterBooksByGenre();
      this.updateSubGenres();
    });
  };

  updateSubGenres = () => {
    const { books, currentGenre } = this.state;
    if (currentGenre && currentGenre.value !== 'All') {
      const subGenres = [...new Set(books.filter(book => book.genre === currentGenre.value).map(book => book['subGenre']))]
        .map(subGenre => ({ value: subGenre, label: subGenre }));
      this.setState({ subGenres });
      console.log('subgenres', subGenres)
    } else {
      this.setState({ subGenres: [] });
    }
  };

  filterBooksByGenre = () => {
    const { books, currentGenre, currentSubGenre } = this.state;
    let filteredBooks = books;

    if (currentGenre && currentGenre.value !== 'All') {
      filteredBooks = filteredBooks.filter(book => book.genre === currentGenre.value);
    }
    if (currentSubGenre && currentSubGenre.value !== 'All') {
      filteredBooks = filteredBooks.filter(book => book['subGenre'] === currentSubGenre.value);
    }

    this.setState({ filteredBooks });
  };

  handleSubGenreChange = selectedOption => {
    this.setState({ currentSubGenre: selectedOption }, this.filterBooksByGenre);
  };

  render() {
    const { loading, error, filteredBooks, genres, subGenres, currentGenre, currentSubGenre } = this.state;

    if (loading) return <div>Loading books...</div>;
    if (error) return <div>Error loading books: {error.message}</div>;

    return (
      <div>
        <div>
          <div className="content">
            <h1>Library</h1>
            <p>I've spent the last few years putting my library together. Enjoy strolling through the titles.</p>

            <div className="flexbox">
              <div className="col">
                <Select
                  value={currentGenre}
                  onChange={this.handleGenreChange}
                  options={genres}
                  styles={customSelectStyles}
                  isClearable={true}
                  placeholder="Select a genre..."
                />
                </div>
                <div className="col">
                {currentGenre && subGenres.length > 0 && (
                  <Select
                    value={currentSubGenre}
                    onChange={this.handleSubGenreChange}
                    options={subGenres}
                    styles={customSelectStyles}
                    isClearable={true}
                    placeholder="Select a sub-genre..."
                  />
                )}
              </div>
            </div>

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
