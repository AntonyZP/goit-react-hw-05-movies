import ReviewsItem from "components/ReviewsItem";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APImovieReviews } from "services/Api"

const Reviews = () => {

  const [reviewList, setReviewList] = useState([])
  const [error, setError] = useState(null)
  const {movieId} = useParams()

  useEffect(() => {
    async function getReviewList () {
      try{
        const  response = await APImovieReviews(movieId);
        setReviewList(response.results)
      }
      catch {setError (error => error)}
    }
    getReviewList()
  }, [error, movieId])


  return (

    <div>
      {reviewList.length !== 0 ? (
        <ul>
          {reviewList.map(({id, author, content}) => {
            return (
              <ReviewsItem
              key = {id}
              author = {author}
              content = {content}
              />
            )
          })
          }
        </ul>
      ) : (
        <p>There is no review here</p>
      )}
    </div>

  )
}

export default Reviews;