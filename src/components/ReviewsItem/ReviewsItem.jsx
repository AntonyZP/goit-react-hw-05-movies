const ReviewsItem =({ author, content }) => {

    return ( 
        <li >
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
         )
}

export default ReviewsItem