import { useEffect, useState } from "react"
import {getComingSoon} from "./moviesServices.jsx"

export const useComingSoon = () => {
    const [comingSoon, setComingSoon] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false);
    

    useEffect(async() => {
        try {
            setIsLoading(true)
            
            const data = await getComingSoon()
            
            if(data) {
                setComingSoon(data)
                setIsLoading(false)
            }

        } catch (err) {
            setError(true)
            setIsLoading(false)
        }


    }, []);


    return{
        isLoading,
        error,
        comingSoon
    }
}