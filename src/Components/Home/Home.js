import React from "react"
import { useHomeFetch } from "../../hooks/useHomeFetch"
import Hero from "../Hero/Hero"
import SearchBar from "../Search/Search"
import Grid from "../MovieGrid/Grid"
import Thumb from "../Thumb/Thumb"
import Spinners from "../Spinner/Spinner"
import Button from "../Button/Button"
import { BACKDROP_SIZE, IMAGE_BASE_URL, API_KEY } from "../../config"
import NoImage from "../../images/no_image.jpg"

function Home(){
    const { state, loading, error, searchTerm, setIsLoadingMore, setSearchTerm} = useHomeFetch()
    const movies = state.results

    const movieElements =state.results.map(movie =>{
        return <Thumb 
             key={movie.id}
             clickable = {true}
             image = {movie.poster_path? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.poster_path}`: NoImage}
             movieId = {movie.id}
             />
    })
    console.log(state)
    console.log(state.page)
    console.log(movies)
    return (
        <div>
            {!searchTerm && state.results[0] && <Hero 
                image = {`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title = {state.results[0].original_title}
                text = {state.results[0].overview}
            />}
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? "SearchResults" : "Popular Movies"}>
                {movieElements}
            </Grid>
            {loading&& <Spinners />}
            {state.page < state.total_pages && !loading &&<Button text="Load More" callback={() => setIsLoadingMore(true)}/>}
        </div>
    )
}

export default Home