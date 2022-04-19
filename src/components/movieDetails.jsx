import React from "react"
import { Typography } from "@mui/material"
import { padding, styled } from "@mui/system"

export const Movie = ({details}) => {

    return(
        <MovieDetailsComponent>
            <Image 
                src={details.image} 
                alt={details.title} 
            />
            
            <Details>

                <Title variant="h2">
                    { details.title} 
                </Title>

                <Subtitle variant="subtitle1" style={{color:"#a4a6a5"}}>
                    Companies: {details.companies} | Release Date: {details.releaseDate} | {details.contentRating}.
                </Subtitle>

                <Subtitle variant="subtitle1">
                    <strong>Director:</strong> { details.directors }.
                </Subtitle>

                <Subtitle variant="subtitle1">
                    <strong>Year: </strong>{ details.year }.
                </Subtitle>
                <Subtitle variant="subtitle1" >
                    <strong>Runtime: </strong>{details.runtimeStr}.
                </Subtitle>
                <Subtitle variant="subtitle1" >
                    <strong>Genre(s): </strong>{ details.genres}.
                </Subtitle>
            
                <Description variant="body2"  component="p">
                    <strong>Summary:</strong> { details.plot }.
                </Description>
            
            <Subtitle style={{paddingTop:"12px"}}>
                <strong>Rating (IMDB):</strong> {details.imDbRating}/10.
            </Subtitle>  
                
            </Details>
           
                
            
        </MovieDetailsComponent>
    )
}


const MovieDetailsComponent = styled("div")(()=> ({
    display:"flex",
    margin:"2rem auto",
    justifyContent:"center",
    width:"90%",
    maxWidth:"920px",
    gap:"24px",
    background:"#ffffff",
    padding:"12px 30px",
    borderRadius:"5px",
    alignItems:"center",
    overflow:"hidden",
    
    ["@media(max-Width:590px)"]:{
        flexDirection:"column",
        width:"95%",
        padding:"12px 0"
    }
}))

const Image = styled("img")(()=>({
    width:"40%",
    height:"auto",
    ["@media(max-Width:590px)"]:{
        width:"80%"
    }
}))

const Details = styled("div")(()=>({
    display:"flex",
    flexDirection:"column",
    padding:"24px"

}))

const Title = styled(Typography)(()=>({
    color:"#111",
    textAlign:"center"
}))

const Subtitle = styled(Typography)(()=>({
    color:"#2b2b2a"
   
}))

const Description = styled(Typography)(()=>({
    color:"#2b2b2a",
    fontSize:"1.25rem"
   
}))