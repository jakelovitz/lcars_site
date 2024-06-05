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
      const authorA = a.sorted_authors ? a.sorted_authors.toUpperCase() : '';
      const authorB = b.sorted_authors ? b.sorted_authors.toUpperCase() : '';
      if (authorA !== authorB) {
        return authorA.localeCompare(authorB);
      }
      
      const seriesA = a.series ? a.series.toUpperCase() : 'ZZZZ';
      const seriesB = b.series ? b.series.toUpperCase() : 'ZZZZ';
      if (seriesA !== seriesB) {
        return seriesA.localeCompare(seriesB);
      }
      
      const volumeA = a.volume !== null ? a.volume : Infinity;
      const volumeB = b.volume !== null ? b.volume : Infinity;

      return volumeA - volumeB;
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
            <blockquote>A bookshelf is as particular to its owner as are his or her clothes; a personality is stamped on a library just as a shoe is shaped by the foot.</blockquote>
            <p class="go-right"><span class="go-space-white">— Alan Bennett</span></p>
            <p>As much as I love to read books, I have a rivalling fondness for both collecting and simply being around them. As such, I've derived tremendous joy in compiling the following library, so much so that I wanted to share it with anyone interested. Enjoy strolling through the titles.</p>

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
