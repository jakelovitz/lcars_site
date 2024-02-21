import React, { Component, state, setState, } from 'react';
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
  
  useEffect = () => {
    fetchAndParseBookList()
      .then(books => {
        const genres = [...new Set(books.map(book => book.Genre))];
        setState({ books, genres, filteredBooks: books, loading: false });
      })
      .catch(error => setState({ error, loading: false }));
  };

  filterBooksByGenre = (genre) => {
    const filteredBooks = state.books.filter(book => book.Genre === genre);
    setState({ ...state, filteredBooks, currentGenre: genre });
  };
  
  sortBooks = (criteria) => {
    const sortedBooks = [...state.filteredBooks].sort((a, b) => {
      if (criteria === 'Author') {
        return a.Author.localeCompare(b.Author);
      } else if (criteria === 'Title') {
        return a.Title.localeCompare(b.Title);
      }
      return 0;
    });
    setState({ ...state, filteredBooks: sortedBooks, sortCriteria: criteria });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre }, () => {
      this.filterBooksByGenre();
      console.log(this.state.currentGenre)
      console.log(this.state.filteredBooks)
    });
  };

  filterBooksByGenre = () => {
    const { books, currentGenre } = this.state;
    const filteredBooks = currentGenre === 'All Genres'
      ? books
      : books.filter(book => book.Genre === currentGenre);
    this.setState({ filteredBooks });
  };

  renderGenreButtons = () => {
    const { genres } = this.state;
    return genres.map(genre => (
      <button key={genre} onClick={() => this.handleGenreChange(genre)}>
        {genre}
      </button>
    ));
  };
  
  
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
      }
    );
  }
  
  render() {
    const { loading, error, books } = this.state;
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
          <div class="right-frame">
            <div class="bar-panel">
            <div class="bar-6"></div>
            <div class="bar-7"></div>
            <div class="bar-8"></div>
            <div class="bar-9"><div class="bar-9-inside"></div></div>
          </div> 
          <div class="runner">
            <div class="corner-bg">
              <div class="corner"></div>
            </div>
            <div class="block-2"></div>
            <div class="block-3"></div>
            <div class="block-4b">
            <div class="block-4-floatbar"></div>
            </div>
          </div>
            <div class="content">
                <h1>Library</h1>
                <p>I've spent the last few years putting my library together. Enjoy strolling through the titles.</p>
                <button key={'History'} onClick={() => this.handleGenreChange('History')} >hello</button>
                <div class="lcars-bar">
              <div class="lcars-bar-inner"></div>
            </div> 
              <div class="flexbox">
                <div className="book-list">
                {books.map((book, index) => (
                    <Book key={index} {...book} />
                  ))}
                </div>
              <div/>
            </div>
            {footer}
          </div>
        </div>
      </div>
    );
  }
}
export default LibraryPage;