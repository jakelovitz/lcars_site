import React from 'react';
import './../assets/styling.css';
import useFetchAndParseBookList from './../hooks/useFetchAndParseBookList';
import Book from './../components/Book';


function LibraryPage({ onNavigate, footer }) {
  const { data, loading, error } = useFetchAndParseBookList();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading the book list</div>;

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
                
                {/* page content here */}
                <div className="book-list">
                  {data.map((book, index) => <Book key={index} book={book} />)}
                </div>
                
                {footer}
            
            </div>

        </div>  
    )
}

export default LibraryPage;

