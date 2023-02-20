import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APImovieCredits } from "services/Api"
import CastItem from 'components/CastItem';


const Cast = () => {

  const [actors, setActors] = useState([])
  const [error, setError] = useState(null)
  const {movieId} = useParams()

  useEffect(() => {
    async function getMovieCredits () {
      try{
        const  response = await APImovieCredits(movieId);
        setActors(response.cast)
      }
      catch {setError (error => error)}
    }
    getMovieCredits();
  }, [error, movieId])

  return (
    <div> 
      {actors.length !== 0 ? (
        <ul>
          {actors.map(({ id, name, profile_path, character }) => {
            return (
              <CastItem
                key={id}
                name={name}
                profile_path={profile_path}
                character={character}
              />
            );
          })}
        </ul>
      ) : (
        <p>There is no information about actors</p>
      )}
    </div>
    )
 }

 export default Cast;