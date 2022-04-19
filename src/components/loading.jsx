import Icon from "../assets/loading.png"
import React from "react"
import { Grid, styled, Typography } from "@mui/material"
import "../assets/styles.css"

const Image = styled("img")`
    display:block
    margin: 1rem auto;
`

export const Loading = ({messageLoading = "Loading..."}) => {
    return (
        <Grid textAlign={"center"} my={2} minHeight={"70vh"}>
            <Image  className="spinner" src={Icon} alt="loading"/>
            <Typography variant="h5" mt={2}>
                {messageLoading}
            </Typography>
        </Grid>
    )
}