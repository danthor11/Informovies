import React ,{useState} from "react"
import {
    Container,
    Typography,
    Grid,
    Skeleton,
    Box
} from "@mui/material"
import { useMovie } from "../services/movieHooks"
import Movie from "../components/movie"
import { Loading } from "../components/loading"
import { Paginate } from "../components/paginate"
import {Helmet} from "react-helmet"

export const TopMovies = () => {
    const { moviesRanked ,isLoading} = useMovie()
    const [page, setPage] = useState(0);
    const limits = moviesRanked ? moviesRanked ?.length:null

    return (
        <Box minHeight={"80vh"}>
            <Helmet>
                <title>Top Movies || Informovies</title>
                <meta name="description" content="Top movies" />
            </Helmet>
            <Container >
                <Typography 
                    variant="h3" 
                    my={3} 
                    mx={8} 
                    sx={{margin:"24px 24px"}}
                    p={2} 
                    align={"center"} 
                    borderBottom={"2px solid"}
                    color={"rgba(66, 66, 66, 0.815)"}
                >
                    Ranking´s Movies
                </Typography>
                {isLoading
                    ? <Skeleton variant="rectangular" width={800} height={800}/>
                    :(
                        <>
                            <Grid container gap={2} flexWrap justifyContent={"center"}>
                                {moviesRanked  ?
                                    (moviesRanked[page].map(movie => {
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