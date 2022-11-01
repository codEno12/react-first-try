/**
 * After creating your index.js you will need an App.js file 
 * then continue to import that necessary modules as well
 * 
 * [] - empty dependency array
 * 
 * 
 * 
 * onChange((e) => setSearchTerm(e.target.value))
 * e = event 
 */

import { useState, useEffect } from 'react';
import MovieCard from './MovieCard'
import './App.css';
import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=38ad7483';



const App = () => {
    //state
    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }
    useEffect(() =>{
        searchMovies('Harry Potter')
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input 
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}    
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
                
            {
                movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div> 
                ): (
                    <div className="empty">
                        <h2> No movies founds </h2>    
                    </div>
                )
            }


        </div>
    );
}

/**
 * We have to export every single one of the components
 * so we can call it from somewhere else 
 */

export default App

