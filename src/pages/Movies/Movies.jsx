import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import MovieSearchList from 'components/MovieSearchList';
import { APIsearchMovie } from "services/Api"

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query');

  const handleSubmit = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getMoviesByName () {
      try {
        const response = await APIsearchMovie(query);
        setMovies(response.results);
      } catch {
        setError(
            setError(error => error.message)
        );
      } 
    };
    getMoviesByName();
  }, [query]);
  
  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
        {error && <p>Sorry, something went wrong</p>}
      <SearchBar
        onSubmit={handleSubmit}
        onChange={updateQueryString}
        value={query}
      ></SearchBar>
      
      <MovieSearchList movies={movies} />
    </main>
  );
}

export default Movies;

