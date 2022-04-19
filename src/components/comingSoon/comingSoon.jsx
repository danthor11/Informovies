import React,{useContext} from "react"
import {Carrousel} from "./carrousel"
import { ComingSoonMovies } from "../../context/comingSoon"

export const ComingSoon = () => {
    
    const {comingSoon,error} = useContext(ComingSoonMovies)

    
    if(error)
        return <p>Error pl</p>


    return(
        <>
            {comingSoon &&
                <Carrousel elements={comingSoon.items}/>
            } 
            
        
        </>
    )
}