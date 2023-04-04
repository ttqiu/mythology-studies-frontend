import Client from '../services/api'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CreatureDetails = ({ user }) => {
  let navigate = useNavigate()
  const { id } = useParams()
  const [creatureDetails, setCreatureDetails] = useState({})
  const [comments, setComments] = useState([])
  // const [favorite, setFavorite] = useState({})

  const getCreatureDetails = async () => {
    const response = await Client.get(`/api/creatures/${id}`)
    setCreatureDetails(response.data)
    let comments = response.data.comments.slice(-10)
    setComments(comments.reverse())
  }

  useEffect(() => {
    getCreatureDetails()
  }, [id])

  // const handleFavorite = async () => {
  //   if (user) {
  //     await Client.post(`/api/favorite/${user.id}/${CreatureDetails.id}`)
  //   }
  // }

  // const handleUnFavorite = async () => {
  //   if (user) {
  //     await Client.delete(`/api/favorite/${user.id}/${CreatureDetails.id}`)
  //   }
  // }

  const handleDeleteComment = async (id) => {
    if (user) {
      await Client.delete(`/api/comments/${id}`)
      // navigate(0)
      getCreatureDetails()
    }
  }

  return user ? (
    <div>
      <div className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        <h1>{creatureDetails.name}</h1>
      </div>
      <section>
        <div className="flex-row">
          <div className="image-container">
            <img src={creatureDetails.image}></img>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-4">
              {creatureDetails.description}
            </label>
          </div>
          <div className="block text-gray-700 font-bold mb-4">
            <h3>Origins: </h3>
            {creatureDetails.origins?.map((origin) => (
              <div
                key={origin.id}
                className="font-medium text-blue-500 transition-colors hover:text-blue-700 cursor-pointer"
              >
                <p onClick={() => navigate(`/origins/${origin.id}`)}>
                  {origin.origin}{' '}
                </p>
              </div>
            ))}
          </div>
          {/* {!favorite && (
            <div>
              <button onClick={handleFavorite}>Enroll</button>
            </div>
          )}
          {favorite && (
            <div>
              <button onClick={handleUnFavorite}>Withdraw</button>
            </div>
          )} */}
        </div>
      </section>
      <div>
        <h1 className="comments">Comments</h1>
        <div>
          <button
            onClick={() => navigate(`/form/${user.id}/${id}`)}
            className="mb-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Post a Comment
          </button>
        </div>
        {comments.map((comment) => (
          <div className="comment-container" key={comment.id}>
            <p className="mb-2 text-gray-900 dark:text-white">
              Comment: {comment.content}
            </p>
            {user?.id === comment.userId && (
              <button
                onClick={() => navigate(`/updateForm/${id}/${comment.id}`)}
                className="group relative mb-4 flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update Comment
              </button>
            )}
            {user?.id === comment.userId && (
              <button
                onClick={() => handleDeleteComment(comment.id)}
                className="group relative mb-2 flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Delete Comment
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default CreatureDetails
