import MoviesListItem from "components/MoviesListItem"

const TrendingMoviesList = ({trendingMovies}) => {

    return (
        <ul>
            {trendingMovies.map(({id, title})=>
            <MoviesListItem 
            key={id}
            id={id}
            title={title}/>
            )}  
        </ul>
    )
}

export default TrendingMoviesList