import React, {useState,useEffect,Suspense} from "react"
import { useMovie } from "../services/movieHooks"
import { Box , Typography, Grid } from "@mui/material"
import { Link } from "react-router-dom"
import { Loading } from "./loading"

export const ResultsSearch = ({movieToSearch}) => {

    const {setSearchValue,resultsByTitle,isLoading,error} = useMovie()

    useEffect(()=>{
        setSearchValue(movieToSearch)
    },[movieToSearch])


    if(error){
        <Typography variant="h4" pt={3} mx={1} px={2} color="GrayText" textAlign={"center"}>
            Sorry, there are not results!
        </Typography>
    }

    return(
        
        <Suspense fallback={<Loading messageLoading="Searching results..."/>}>
            {!isLoading
                ?<GridLazyLoad container gap={2} flexWrap justifyContent={"center"} my={2}>
                    { resultsByTitle?.results ?
                        resultsByTitle.results?.map(movie =>{
                            return <Link to={`/movie/${movie.id}`} key={movie.id} style={{textDecoration:"none"}}>
                                <MoviesLazyLoad movieInfo={movie}/>
                            </Link>
                        })
                        :null
                
                    }
                </GridLazyLoad>
                :<Loading messageLoading="Searching results..."/>

            }

        </Suspense>
        
    )
}

const MoviesLazyLoad = React.lazy(()=>
    import("../components/ElementFinded")    
)

const GridLazyLoad = React.lazy( ( ) => import("@mui/material/Grid"))
