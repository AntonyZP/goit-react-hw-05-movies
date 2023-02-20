import TrendingMoviesList from "components/TrendingMoviesList";
import { useEffect, useState } from "react";
import { APItrendMovies } from "services/Api"


const Home = () => {
    const[trendingMovies, setTrendingMovies] = useState([])
    const[error, setError] = useState(null)

    useEffect(() =>{
        async function getTrendingMovies () {
            try {
                const response = await APItrendMovies();
                setTrendingMovies(response.results)
            } 
            catch {
                setError(error => error.message)
            }       
        }
        getTrendingMovies();
    }, [error])

    return (
     <main>
        <h1>Trending today:</h1>
        {trendingMovies && <TrendingMoviesList trendingMovies={trendingMovies}/>}
        {error && <p>Sorry, something went wrong</p>}
    </main>
    )
}

export default Home;