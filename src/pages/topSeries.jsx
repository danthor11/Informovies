import React ,{useState} from "react"
import {
    Container,
    Typography,
    Grid,
    Box
} from "@mui/material"
import { useMovie } from "../services/movieHooks"
import Movie from "../components/movie"
import { Loading } from "../components/loading"
import { Paginate } from "../components/paginate"
import { useSerie } from "../services/serieHook"
import {Helmet} from "react-helmet"

export const TopSeries = () => {
    const {isLoading,seriesRanked} = useSerie()
    const [page, setPage] = useState(0);
    const limits = seriesRanked ? seriesRanked ?.length:null

    return (
        <Box minHeight={"90vh"} >
            <Helmet>
                <title>Top Series | Informovies</title>
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
                    Ranking´s Series
                </Typography>
                {isLoading
                    ? <Loading/>
                    :(
                        <>
                            <Grid container gap={2} flexWrap justifyContent={"center"}>
                                {seriesRanked  ?
                                    (seriesRanked[page].map(serie => {
                                        return <Movie key={serie.id} movieInfo={serie}/>
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