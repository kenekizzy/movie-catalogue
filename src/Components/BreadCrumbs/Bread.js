import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Wrapper, Content } from "./BreadStyle";

function Bread({movieTitle}) {
  return (
    <Wrapper>
        <Content>
            <Link to="/movie-catalogue">
                <span>Home</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
  )
}

Bread.propTypes ={
  movieTitle: PropTypes.string
}

export default Bread