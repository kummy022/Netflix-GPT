import { CDN_URL_POSTER } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-44 pr-4">
      <img alt="Movies" src={CDN_URL_POSTER + posterPath}/>
    </div>
  )
}

export default MovieCard