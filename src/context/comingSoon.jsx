import React from "react"
import { useComingSoon } from "../services/useComingSoon"

export const  ComingSoonMovies = React.createContext()


export const ComingSoonMoviesProvider = ({children}) => {
    const {comingSoon,error} = useComingSoon()

    return(
        <ComingSoonMovies.Provider value={{comingSoon,error}}>
            {children}
        </ComingSoonMovies.Provider>
    )
}