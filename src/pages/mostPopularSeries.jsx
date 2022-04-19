import React ,{useState} from "react";
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { styled } from "@mui/system"
import { Typography, Box } from "@mui/material";
import {Loading} from "../components/loading"
import { Paginate } from "../components/paginate";
import Serie from "../components/series";
import { useSerie } from "../services/serieHook";
import {Helmet} from "react-helmet";

const SeriesMostPopular = () => {
    
    const { serieMostPopular ,isLoading} = useSerie()
    const [page, setPage] = useState(0);
    const limits = serieMostPopular ? serieMostPopular?.length : null

    console.log(serieMostPopular)
    return (
        <Box minHeight={"80vh"}>
            <Helmet>
                <title>Series most popular || Informovies</title>
                <meta name="description" content="Series most popular" />
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
                    Most popular Series
                </Typography>
                {isLoading
                    ? <Loading/>
                    :(
                        <>
                            <Grid container gap={4} flexWrap justifyContent={"center"} xs={{gap:"8px",width:"100%"}}>
                                {serieMostPopular  ?
                                    (serieMostPopular[page].map(serie => {
                                        return <Serie key={serie.id} serieInfo={serie}/>
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

export default SeriesMostPopular

const Title =  styled(Typography)(() => ({
    textAlign:"center",
    color:"eee"
}))