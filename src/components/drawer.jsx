import React, {useState} from "react"
import { Drawer , Box ,Divider , Typography, Menu,MenuItem} from "@mui/material"
import { Link } from "react-router-dom";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const DrawerAppBar = (props) => {
    
    return(
        <>
            <DrawerWrapper
                anchor={"left"}
                open={props.openDrawer}
                onClose={()=>props.setOpenDrawer(false)}
                classes={{minWidth:"240px"}}
            >   
                <Box height={56}></Box>
                <Divider/>
                <Box minWidth={"250px"}>
                    <Link to="/" style={{textDecoration:"none",color:"inherit"}} onClick={()=>props.setOpenDrawer(false)}>
                        <CustomMenuItem >
                                <HomeIcon/>
                                <Typography>Home</Typography>
                        </CustomMenuItem>
                    </Link>
                    <Divider/>
                    <Link to="/movies/most-popular" style={{textDecoration:"none",color:"inherit"}} onClick={()=>props.setOpenDrawer(false)}>
                        <CustomMenuItem>
                                <MovieCreationIcon/>
                                <Typography>Most Popular Movies</Typography>
                        </CustomMenuItem>
                    </Link>
                    <Link to="/movies/top-250" style={{textDecoration:"none",color:"inherit"}} onClick={()=>props.setOpenDrawer(false)}>
                        <CustomMenuItem >
                                <ThumbUpOffAltIcon/>
                                <Typography>
                                    Top Movies
                                </Typography>
                        </CustomMenuItem>
                    </Link>
                    <Divider/>
                    <Link to="/series/most-popular" style={{textDecoration:"none",color:"inherit"}} onClick={()=>props.setOpenDrawer(false)}>
                        <CustomMenuItem>
                                <LiveTvIcon/>
                                <Typography>Most Popular Series</Typography>
                        </CustomMenuItem>
                    </Link>
                    <Link to="/series/top-250" style={{textDecoration:"none",color:"inherit"}} onClick={()=>props.setOpenDrawer(false)}>
                        <CustomMenuItem >
                                <ConnectedTvIcon/>
                                <Typography>
                                    Top Series
                                </Typography>
                        </CustomMenuItem>
                    </Link>
                    <Divider/>
                    <Link to="/search" style={{textDecoration:"none",color:"inherit"}} onClick={()=>props.setOpenDrawer(false)}>
                        <CustomMenuItem >
                                <SearchIcon/>
                                <Typography>
                                    Search
                                </Typography>
                        </CustomMenuItem>
                    </Link>
                    <Divider/>
                    <Link to="/about" style={{textDecoration:"none",color:"inherit"}} onClick={()=>props.setOpenDrawer(false)}>
                        <CustomMenuItem >
                                <InfoIcon/>
                                <Typography>About</Typography>
                        </CustomMenuItem>
                    </Link>
                </Box>
            </DrawerWrapper>
        </>
    )
}


const CustomMenuItem = styled(MenuItem)(()=>({
    display:"flex",
    gap:"16px",
    ":hover":{
        background:"#d3d0d0"
    }
}))

const DrawerWrapper = styled(Drawer)(()=>({
    minWidth:"300px"
}))