import React ,{useState} from "react";
import Movie from "../components/movie"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { styled } from "@mui/system"
import { Typography ,Box} from "@mui/material";
import { useMovie } from "../services/movieHooks";
import {Loading} from "../components/loading"
import { Paginate } from "../components/paginate";
import {Helmet} from "react-helmet"

const MoviesMostPopular = () => {
    
    const { moviesMostPopular ,isLoading} = useMovie()
    const [page, setPage] = useState(0);
    const limits = moviesMostPopular? moviesMostPopular?.length:null

    return (
        <Box minHeight={"80vh"}> 
            <Helmet>
                <title>Movies most popular || Informovies</title>
                <meta name="description" content="Movies most popular" />
            </Helmet>
            <Container >
                <Typography 
                    variant="h3" 
                    my={3} 
                    mx={8} 
                    p={2} 
                    sx={{margin:"24px 24px"}}
                    align={"center"} 
                    borderBottom={"2px solid"}
                    color={"rgba(66, 66, 66, 0.815)"}
                >
                    Most popular Movies
                </Typography>
                {isLoading
                    ? <Loading/>
                    :(
                        <>
                            <Grid container gap={4} flexWrap justifyContent={"center"} xs={{gap:"8px",width:"100%"}}>
                                {moviesMostPopular  ?
                                    (moviesMostPopular[page].map(movie => {
                                        return <Movie key={movie.id} movieInfo={movie}/>
                                    }))
                                    :""
                                }
                            </Grid>
                            <Paginate page={page} setPage={setPage} limits={limits}/>
                        </>
                    )     

                }
                
            </Container>
        </Box>
    )
}

export default MoviesMostPopular

const Title =  styled(Typography)(() => ({
    textAlign:"center",
    color:"eee"
}))