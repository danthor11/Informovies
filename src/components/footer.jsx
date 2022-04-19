import { Typography } from "@mui/material"
import { Box } from "@mui/system"


export const Footer = ()=> {
    return (
        <Box style={{background:"#42C2FF"}}  width={"100%"}  py={3} textAlign={"center"} > 
            <Typography variant="h6" color={"antiquewhite"}>
                © 2022 InforMovies, Inc.
            </Typography>
        </Box>
    )
}