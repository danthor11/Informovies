import React from "react"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { styled, width } from "@mui/system";
import { Box, Typography } from "@mui/material";
 
export const Paginate = (props) => {

    
    const prevPage = ()=>{
        if(props.page>0)
            props.setPage((prev)=>prev-1)
    }

    const nextPage = ()=>{
        console.log(props.page,props.limits)

        if(props.page+1<props.limits)
            props.setPage((prev)=>prev+1)
    }

    return(
        
        
        <PaginateMenu>       
            <Stack direction={"row"} gap={4}>

                <Arrows onClick={prevPage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"/>
                    </svg>
                </Arrows>
                
                <Arrows onClick={nextPage}>
                
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/>
                    </svg>            
                </Arrows>
            </Stack>

            <Typography variant="h6" textAlign={"center"} style={{color:"#353535",fontSize:"1.5rem"}}>
               Page {props.page+1} of {props.limits}
            </Typography>
        </PaginateMenu>
        
    )
}




const PaginateMenu = styled("div")(()=>({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:"20px",
    margin:"2rem auto",
    width:"fit-content",
    padding:"1rem 2rem",
    borderRadius:"4px"
}))

const PaginateItem = styled("button")(()=>({
    width:"60px",
    height:"60px",
    textAlign:"center",
    padding:"10px",
    border:"1px solid",
    borderRadius:"50%",
    lineHeight:"20px",
    cursor:"pointer",
    color:"#fff",
    fill:"#fff"
    
}))
const Arrows = styled(PaginateItem)(()=>({
    backgroundColor:"#3d9cf5",
    transition:"0.5s ease",
    ":hover":{
        backgroundColor:"#60aaf0",
    }
}))
