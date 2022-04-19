import React from "react"

import { Item ,Image } from "./movie"
import { Typography } from "@mui/material"

const MoviesFinded = ({movieInfo}) => {
    
    const {
        title,
        image,
        description
    } = movieInfo

    return(
        <Item>
            <Image src={image} alt={title} />
            <Typography variant="h5" align={"center"} mt={2}>
                {title}
            </Typography>
            <Typography variant="subtitle1" py={1} textAlign={"center"} px={2} mb={1}>
                {description}
            </Typography>
        </Item>
    )
}

export default MoviesFinded 