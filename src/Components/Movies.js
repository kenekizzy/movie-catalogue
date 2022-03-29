import React from 'react'
import { useParams } from 'react-router-dom'
import { useMovieFetch } from "../hooks/useMovieFetch"
import Bread from './BreadCrumbs/Bread'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'
import Grid from './MovieGrid/Grid'
import Actor from './Actor/Actor'
import Spinners from './Spinner/Spinner'
import MovieInfo from './MovieInfo/MovieInfo'
import MovieInfoBar from './MovieInfoBar/MovieInfoBar'
import NoImage from "../images/no_image.jpg"

function Movies() {
    const {movieId} = useParams()
    const {state, loading, error} = useMovieFetch(movieId) 
    console.log(state)
    if(loading) return <Spinners/>
    if(error) return <div>Something is wrong</div>
  return (
    <>
        <Bread movieTitle={state.original_title} />
        <MovieInfo movie ={state} />
        <MovieInfoBar 
            time = {state.runtime}
            budget = {state.budget}
            revenue = {state.revenue}
        /> 
        <Grid header="Actors">
            {state.actors.map(actor => {
        return <Actor
            key = {actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl = {actor.profile_path? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`: NoImage}
        />
    })}
        </Grid>
    </>
  )
}

export default Movies