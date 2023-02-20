const CastItem =({ name, profile_path, character }) => {
    const img = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : 'https://i.ibb.co/yQNvgQ7/1231313.jpg';

    return ( 
        <li>
          <img src={img} alt="actor" width='100' />
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
         )
}

export default CastItem