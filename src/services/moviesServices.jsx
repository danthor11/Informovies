import axios from "axios"

const URL = "https://imdb-api.com/en/API"
const API_KEY = "k_3ampxnsp"

const splitArray = (array) => {

    let [...arr]  = array;
    let res = [];
    while (arr.length) {
        res.push(arr.splice(0, 10));
    }
    return res;
}

const verifyMoviesInLS = (typeCollection) => {
    const ls = localStorage.getItem(typeCollection)
    if(ls)
        return true
    return false
}


const getMostPopularMovies = async () => {

    if(verifyMoviesInLS("most-popular-movies")){
        console.log("desde el storage")
        return JSON.parse(localStorage.getItem("most-popular-movies"))
    }

    const data = await axios.get(`${URL}/MostPopularMovies/${API_KEY}`)
    
    const response = {
        ...data,
        data:{
            items:[...splitArray(data.data.items)]
        }
    }
    
    localStorage.setItem("most-popular-movies",JSON.stringify(response))
    
    return response
}

const getMovieByTitle = title => {
    return axios.get(`${URL}/SearchTitle/${API_KEY}/${title}`)
            .then(data => data)
} 

const getMovieDetails = id => {
    return axios.get(`${URL}/Title/${API_KEY}/${id}`)
            .then(data => data)
}

const getMoviesRanked = async () => {
    if(verifyMoviesInLS("ranked-movies")){
       
            return JSON.parse(localStorage.getItem("ranked-movies"))
       
    }

    const data = await axios.get(`${URL}/Top250Movies/${API_KEY}`)
    const response = {
        ...data,
        data:{
            items:[...splitArray(data.data.items)]
        }
    }
    
    
    localStorage.setItem("ranked-movies",JSON.stringify(response))
    
    return response
}

const getMostPopularSeries = async () => {
    try {
        const data = await axios.get(`${URL}/MostPopularTVs/${API_KEY}`)

        const response = {
            ...data,
            data: {
                items: [...splitArray(data.data.items)]
            }
        }

        return response

    } catch (error) {
        return {error}
    }
}

const getSerieByTitle = async (title) => {
    try{
        const data = axios.get(`${URL}/Title/${API_KEY}/${id}`)
        return data
    }
    catch(err){
        return {err}
    }
}


const getSerieRanked = async () => {
    try {
        const data = await axios.get(`${URL}/Top250TVs/${API_KEY}`) 
        const response ={
            ...data,
            data:{
                items: [...splitArray(data.data.items)]
            }
        }

        return response
    } catch (err) {
        return {err}
    }
}


const getComingSoon = async () => {
    try {
        const data = await axios.get(`${URL}/ComingSoon/${API_KEY}`)
        if(data.status!==200)
        throw {status:data.status, statusText:data.statusText}

        return data.data
    } catch (err) {
        return (err)
    }
}


export{
    getMostPopularMovies,
    getMovieByTitle,
    getMovieDetails,
    getMoviesRanked,
    getMostPopularSeries,
    getSerieByTitle,
    getSerieRanked,
    getComingSoon
}
