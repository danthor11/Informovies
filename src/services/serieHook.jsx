import { useState,useEffect } from "react";
import { getMostPopularSeries , getSerieByTitle, getSerieRanked} from "./moviesServices";

export const useSerie = () => {

    const [serieMostPopular, setSerieMostPopular] = useState(null);
    const [searchValue, setSearchValue] = useState("");
    const [resultsByTitle, setResultsByTitle] = useState(null);
    const [isLoading,setIsLoading] = useState(false)
    const [seriesRanked, setSeriesRanked] = useState(null);


    useEffect(async () => {
        setIsLoading(true)
        const {data} = await getMostPopularSeries()
        if(data){
            setSerieMostPopular(data.items)
            setIsLoading(false)
        }
    },[])


    useEffect(async () => {

        if(searchValue.length > 0) {
            setIsLoading(true)
            const {data} = await getSerieByTitle(searchValue)
            if(data){
                setResultsByTitle(data)   
                setIsLoading(false) 
            }
        }
    },[searchValue])


    useEffect(async() => {
        setIsLoading(true)
        
        const {data} = await getSerieRanked()
        if(data){
            setSeriesRanked(data.items)
            setIsLoading(false)
        }
    }, []);



    return{
        isLoading,
        serieMostPopular,
        resultsByTitle,
        setSearchValue,
        seriesRanked
    }
}