import { Typography,Grid } from "@mui/material"
import { Box, display } from "@mui/system"
import React,{useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import { getMovieDetails } from "../services/moviesServices"
import ReactPlayer from "react-player"
import styled from "@emotion/styled"
import { Movie } from "../components/movieDetails"
import { Loading } from "../components/loading"
import {Helmet} from "react-helmet"

export const MovieDetails = ( ) => {
    const {movieId} = useParams()
    const [details, setDetails] = useState(null);

    useEffect(async () => {
        const {data} = await getMovieDetails(movieId)
        if(data){
            setDetails(data)
        }
    }, [movieId]);
   
    console.log(details)
    return (
        <>
            <Helmet>
                <title>Test || Informovies</title>
                <meta name="description" content={`Movies detail of $Test`} />
            </Helmet>
            <MovieDetailContainer>
            
                {details
                    ? <Movie details={details}/>
                    : <Loading/>
                }
                
            </MovieDetailContainer>
        </>
    )

}


const MovieDetailContainer = styled("div")(()=>({
    minHeight:"100vh",
    marginTop:"5rem"
}))

