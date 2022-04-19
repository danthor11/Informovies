import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useMovie } from "../services/movieHooks";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { Helmet } from "react-helmet"
import { SearchForm } from "../components/searchForm";
import { ResultsSearch } from "../components/results";


const SearchingByTitle = () => {
    const { movieToSearch } = useParams()




    console.log("render",movieToSearch)



    return (
        <Box minHeight={"90vh"}>
            <Helmet>
                {movieToSearch 
                    ? <title>Results of {movieToSearch} || Informovies</title> 
                    : <title>Search page || Informovies</title> 
                }
                
                <meta name="description" content={`Results of ${movieToSearch}`} />
            </Helmet>

            <Box 
            style={{ margin: "auto", 
                width: "100%", display: "flex", 
                flexDirection: "column", justifyContent: "center" 
            }}
            >
                <Box 
                    style={{ margin: "1rem auto", fontSize: "1.5rem",
                     background:"lightblue", padding:"2rem 4rem", borderRadius:"6px" 
                    }}
                    sx={{flexGrow:0,display:{sm:"none",xs:"block"}}}
                >
                    <SearchForm route={"/search"} btnStyle={"gray"} />
                </Box>

                

                {movieToSearch && <>
                        <Typography
                        variant="h3"
                        mb={3}
                        mx={8}
                        p={2}
                        sx={{ margin: "0 24px" }}
                        align={"center"}
                        borderBottom={"2px solid"}
                        color={"rgba(66, 66, 66, 0.815)"}
                    >
                        Results
                    </Typography>
                    <ResultsSearch movieToSearch={movieToSearch} fontSize={"large"}/>
                
                </>
                }
                    
            </Box>
        </Box>
    )
}

export default SearchingByTitle

