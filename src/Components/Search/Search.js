import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import SearchIcon from "../../images/search-icon.svg"
import { Wrapper, Content } from "./SearchStyles"

function SearchBar({setSearchTerm }){
    const [ state, setState ] = useState("")
    const initial = useRef(true)

    const changeName = (event) =>{
        setState(event.currentTarget.value)
    }

    useEffect(()=> {
        if(initial.current){
            initial.current = false
            return 
        }
        const timer = setTimeout(()=> {
            setSearchTerm(state)
        }, 500)

        return ()=> clearTimeout(timer)
    }, [setSearchTerm, state])
    return(
        <Wrapper>
           <Content>
                <img src={SearchIcon} alt="search-icon" />
                <input 
                    type="text"
                    placeholder = "Search Movie"
                    onChange={changeName}
                    value = {state}
                />   
            </Content> 
        </Wrapper>
    )
    
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}

export default SearchBar