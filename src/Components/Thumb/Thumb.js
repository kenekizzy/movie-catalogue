import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Image } from "./ThumbStyles"

function Thumb({image, clickable, movieId}) {
  return (
    <Link to={`/${movieId}`}>
        <Image src={image} />
    </Link>
  )
}

Thumb.propTypes = {
  image: PropTypes.string,
  clickable: PropTypes.bool,
  movieId: PropTypes.number
}

export default Thumb