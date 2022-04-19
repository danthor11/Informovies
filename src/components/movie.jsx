import React from "react"
import {styled} from "@mui/material/styles"
import { Paper } from "@mui/material"
import { Typography } from "@mui/material"
import { Link , useNavigate} from "react-router-dom"


export const Item = styled(Paper)(({theme}) => ({
    background : "#fff",
    textAlign : "center",
    maxWidth:"300px",
    transition: "0.3s ease",
    ":hover":{
        transform:"scale(1.025)",
        boxShadow:"0px 0px 3px #22b7ff"
    },
    ["@media (min-width:590px)"]:{
        width:"240px"
    }
}))

export const Image = styled("img")(()=> ({
    width:"100%",
    height:"auto",
    borderRadius:"5px 5px 0 0"
}))

const Paragraph = styled("p")(()=> ({
    textAlign:"center",
    padding:"0 1rem",
    color:"rgba(0, 0, 0, 0.6)"  
}))

const Details = styled("div")(()=>({
    paddingBottom:"1.5rem",
    color:"rgba(1, 1, 1, 0.8)"
}))

const Movie = ({movieInfo}) => {
    const {
        title,
        year,
        image,
        imDbRating,
        crew,
        id
    } = movieInfo

    const handleClick = () => {
        useNavigate()
    }

    return (
        <Link to={`/movie/${id}`} style={{textDecoration:"none"}}>
            <Item>
                <Image src={image} alt={title} />
                <Typography variant="h5" align={"center"} my={2} px={2}>
                    {title}
                </Typography>
                <Details>
                    <Paragraph>{crew}</Paragraph>
                    <div><strong>{year}</strong></div>
                
                    {imDbRating
                        ? <div>Rating(imdb): {imDbRating}</div>
                        : "It´s not available"
                    }
                </Details>
            </Item>
        </Link>
    )
}

export default Movie