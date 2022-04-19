import { useState , useEffect } from "react";
import { getMostPopularMovies, getMovieByTitle, getMoviesRanked } from "./moviesServices";


export const useMovie = () => {
    const [moviesMostPopular, setMoviesMostPopular] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [resultsByTitle, setResultsByTitle] = useState(null);
    const [isLoading,setIsLoading] = useState(false)
    const [moviesRanked, setMoviesRanked] = useState(null);
    const [error, setError] = useState(false);

    useEffect(async () => {
        setIsLoading(true)
        const {data} = await getMostPopularMovies()
        
        if(data){
            setMoviesMostPopular(data.items)
            setIsLoading(false)
        }
    },[])


    useEffect(async () => {
        if(searchValue.length > 0) {
            
            try { 
                setIsLoading(true)
                const {data} = await getMovieByTitle(searchValue)
                if(data.results.length===0)
                    throw {error:"No results"}

                if(data){
                    setResultsByTitle(data)   
                    setIsLoading(false) 
                }
            } catch (err) {
                setError(true)
                setIsLoading(false)
                console.log(err)

            }
        }
    },[searchValue])


    useEffect(async() => {
        setIsLoading(true)
        const {data} = await getMoviesRanked()
        if(data){
            setMoviesRanked(data.items)
            setIsLoading(false)
        }
    }, []);


    return{
        moviesMostPopular,
        searchValue,
        setSearchValue,
        resultsByTitle,
        isLoading,
        moviesRanked,
        error
    }
}