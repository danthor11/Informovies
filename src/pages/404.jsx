import React from "react"
import {Typography,Button,Grid} from "@mui/material"
import { useNavigate } from "react-router-dom"
import error404 from "../assets/404.png"
import { styled } from "@mui/system"

export const NotFound = ( ) => {
    let navigate = useNavigate()

    return(
        <Grid textAlign="center" my={4} minHeight={"85vh"}>
            <Typography variant="h1" py={2} style={{color:"rgba(66, 66, 66, 0.815)"}}>
                Error 404:
            </Typography>
            <Typography variant="h3" py={2} style={{color:"rgba(44, 44, 44, .9)"}}>
                Page Not Found
            </Typography>
            <Image src={error404} alt="404-image"/>
            <Button 
                variant={"contained"} 
                size={"large"} 
                onClick={()=> navigate("/")}
                style={{background:"rgb(66, 194, 255)"}}
            >
                Back to Home   
            </Button>
        </Grid>
    )

}

const Image = styled("img")(()=>({
    width:"50%",
    height:"auto",
    margin:"1rem auto",
    display:"block",
    ["@media (min-width:590px)"]:{
        width:"90%"
    }
}))