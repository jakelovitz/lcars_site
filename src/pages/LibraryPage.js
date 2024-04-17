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
      sortBy: 'author', // 'author' or 'title'
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
    const { books, currentGenre, currentSubGenre, sortBy } = this.state;
    let filteredBooks = books;
  
    if (currentGenre && currentGenre.value !== 'All') {
      filteredBooks = filteredBooks.filter(book => book.genre === currentGenre.value);
    }
    if (currentSubGenre && currentSubGenre.value !== 'All') {
      filteredBooks = filteredBooks.filter(book => book['subGenre'] === currentSubGenre.value);
    }
  
    filteredBooks = sortBy === 'author' ? filteredBooks.sort((a, b) => {
      const authorA = a.sorted_authors ? a.sorted_authors.toUpperCase() : '';
      const authorB = b.sorted_authors ? b.sorted_authors.toUpperCase() : '';
      return authorA.localeCompare(authorB);
    }) : filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  
    this.setState({ filteredBooks });
  };  

  handleSubGenreChange = selectedOption => {
    this.setState({ currentSubGenre: selectedOption }, this.filterBooksByGenre);
  };

  sortByTitle = () => {
    const { filteredBooks } = this.state;
    const sortedBooks = [...filteredBooks].sort((a, b) => a.title.localeCompare(b.title));
    this.setState({ filteredBooks: sortedBooks, sortBy: 'title' });
  };
  
  sortByAuthor = () => {
    const { filteredBooks } = this.state;
    const sortedBooks = [...filteredBooks].sort((a, b) => {
      // Normalize author names to ensure case-insensitive comparison
      const authorA = a.sorted_authors ? a.sorted_authors.toUpperCase() : '';
      const authorB = b.sorted_authors ? b.sorted_authors.toUpperCase() : '';
      if (authorA !== authorB) {
        return authorA.localeCompare(authorB);
      }
      
      // Normalize series names to ensure case-insensitive comparison
      const seriesA = a.series ? a.series.toUpperCase() : 'ZZZZ'; // Using 'ZZZZ' to ensure books without series go last
      const seriesB = b.series ? b.series.toUpperCase() : 'ZZZZ';
      if (seriesA !== seriesB) {
        return seriesA.localeCompare(seriesB);
      }
      
      // Compare volume numbers, parsing them as integers
      const volumeA = parseInt(a.volume, 10);
      const volumeB = parseInt(b.volume, 10);
      
      // Sort by volume, considering cases where volume might not be a valid number
      return (volumeA || 0) - (volumeB || 0); // Defaults to 0 if NaN
    });
    this.setState({ filteredBooks: sortedBooks, sortBy: 'author' });
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

            <div className="flexbox">
              <div className='col'>
                <div class="buttons">
                  <a onClick={this.sortByAuthor}>Sort by Author</a>
                </div>
              </div>
              <div className='col'>
                <div class="buttons">
                  <a onClick={this.sortByTitle}>Sort by Title</a>
                </div>
              </div>
            </div>

            <div class="lcars-text-bar">
              <span>Sorted by: {this.state.sortBy === 'author' ? 'Author' : 'Title'}</span>
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
