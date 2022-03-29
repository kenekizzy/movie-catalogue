import React from "react"
import { Link } from "react-router-dom"
import RMDBLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./HeaderStyles"

function Header(){
    return(
        <Wrapper>
            <Content>
                <Link to="/movie-catalogue/">
                    <LogoImg  src={RMDBLogo} />
                </Link>
                <TMDBLogoImg src={TMDBLogo} />
            </Content>
        </Wrapper>
    )
}


export default Header
