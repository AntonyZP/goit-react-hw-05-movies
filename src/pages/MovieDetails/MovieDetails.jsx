import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { APImovieDetails } from "services/Api"
import BackLink from "components/BackLink";

const MovieDetails = () => {

    const[movieInfo, setMovieInfo] = useState({})
    const[error, setError] = useState(null)
    const {movieId} = useParams();
    const location = useLocation();
    const backLinkHref  = location.state?.from ?? '/';

    useEffect(() =>{
        const controller = new AbortController()
        async function getMovieDetails () {
            try {
                const response = await APImovieDetails(movieId, {signal: controller.signal});
                setMovieInfo(response);
            } 
            catch {
                setError(error => error.message)
            }       
        }
        getMovieDetails();
  return () => {controller.abort();}
    }, [error, movieId])

    const {genres, vote_average, overview, release_date, poster_path, title
    } = movieInfo

    const poster =
    poster_path !== null
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://i.ibb.co/n6tGsmL/asdasda.jpg';

    return (
<main>
    {/* to={backLinkHref} */}
    <BackLink to={backLinkHref}>back</BackLink>
    <div>
        <img src={poster} alt='poster' width='200'/>
        <div>
            <h1>{title} ({new Date(release_date).getFullYear()})</h1>
            <p>User score: {Math.ceil(vote_average * 10)} %</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{ genres?.length > 0
                ? genres.map(genre => genre.name).join(', ')
                : '-' }
            </p>
        </div>
        <div>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <Link to={'cast'} state={{ from: location?.state?.from }}>Cast</Link>
                </li>
                <li>
                    <Link to={'reviews'} state={{ from: location?.state?.from }}>Reviews</Link>
                </li>
            </ul>
            
        </div>
    </div>
    <Outlet />
</main>
    )
}

export default MovieDetails;