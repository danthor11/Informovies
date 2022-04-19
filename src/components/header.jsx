
import React , { useState }from "react"
import { 
    AppBar,
    Box,
    Toolbar,
    Typography,
    InputBase, 
    MenuItem,
} from "@mui/material"
import { styled,alpha } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import {Link, useNavigate }from "react-router-dom"
import MenuIcon  from "@mui/icons-material/Menu"
import IconButton from '@mui/material/IconButton'
import { DrawerAppBar } from "./drawer"
import { SearchForm } from "./searchForm"

const drawerWidth=240


export const Header = ({setIsSearching , setMovieSearched , movieSearched}) => {
    let navigate = useNavigate()
    const [searchInput, setSearchInput] = useState("")
    const [openDrawer, setOpenDrawer] = useState(false);

    
    const handleChange = ({target}) => {
      setSearchInput(target.value)
      console.log("sdad")
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      navigate(`/search/${searchInput}`)
    }

    // const toggleDrawer = (open) => (event) => {
    //     console.log(event.type,open)
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //       return;
    //     }
    //     setOpenDrawer(open);
    // }
    
    return (
        <Box sm={{marginBottom:"64px !important"}} sx={{marginBottom:"56px"}}>
            <AppBar style={{background:"#42C2FF"}} sx={{boxShadow:"none"}} >
                <Toolbar> 
                    <Box 
                        sx={{flexGrow:0,display:{sm:"none",xs:"flex"}}}
                        mr={0.5}
                    >
                        <IconButton
                            size="large"
                            style={{color:"aliceblue"}}
                            onClick={()=>setOpenDrawer(true)}
                        >
                          <MenuIcon/>
                        </IconButton> 
                    </Box>

                    <Typography variant="h6"
                        noWrap
                        component="div"
                        color="antiquewhite"
                        width={"auto"}
                        fontSize={30}
                    >
                        <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
                            Infor<Typography color="gray" display={"inline"} fontSize={30} >Movies</Typography> 
                        </Link>
                    </Typography>

                    <Box 
                        display={"flex"} 
                        marginLeft={6}
                        fontSize={20} 
                        gap={2}
                        sx={{flexGrow:1,display:{xs:"none",sm:"flex"}}}
                    >
                        <MovieMenu 
                            variant="h6"
                            noWrap
                            color="GrayText"
                            style={{cursor:"pointer"}}
                        >
                            Movies 
                            <Box 
                                position={"absolute"} 
                                backgroundColor={"#eee"} 
                                style={{opacity:"0",visibility:"hidden",transition:"all 0.3s ease-out",
                                background:"#42C2FF", boxShadow:"0px 0px 5px 0px rgba(25,118,210,0.5)"
                                }}
                            >
                                <MenuItem p={12} style={{borderBottom:"1px solid rgba(70, 69, 69,0.3)"}}>
                                    <Link to="/movies/most-popular"
                                        style={{textDecoration:"none", color:"inherit",fontSize:"1.1rem"}}
                                    >
                                        Most Popular Movies 
                                    </Link>
                                </MenuItem>  
                                <MenuItem p={12}>
                                    <Link to="/movies/top-250"
                                        style={{textDecoration:"none", color:"inherit",fontSize:"1.1rem"}}
                                    >
                                        Top Movies
                                    </Link>
                                </MenuItem>
                                
                            </Box>
                        </MovieMenu>

                        <MovieMenu 
                            variant="h6"
                            noWrap
                            color="GrayText"
                            style={{cursor:"pointer"}}
                        >
                            Series 
                            <Box 
                                position={"absolute"} 
                                style={{opacity:"0",visibility:"hidden",transition:"all 0.3s ease-out",
                                background:"#42C2FF"
                                }}
                            >
                                <MenuItem p={12} style={{borderBottom:"1px solid rgba(70, 69, 69,0.3)"}}>
                                    <Link to="/series/most-popular"
                                        style={{textDecoration:"none", color:"inherit",fontSize:"1.1rem"}}
                                    >
                                        Most Popular Series
                                    </Link>
                                </MenuItem>  
                                <MenuItem p={12}>
                                    <Link to="/series/top-250"
                                        style={{textDecoration:"none", color:"inherit",fontSize:"1.1rem"}}
                                    >
                                        Top Series
                                    </Link>
                                </MenuItem>
                                
                            </Box>
                        </MovieMenu>

                        <Typography variant="h6"
                            noWrap
                            color="GrayText"
                        >
                            <Link 
                            to="/about" 
                            style={{textDecoration:"none",color:"inherit"}}>
                                About
                            </Link>
                        </Typography>
                    </Box> 

                    <SearchForm route={"/search"} sx={{flexGrow:0,display:{xs:"none",sm:"block"}}} btnStyle={"lightBlue"}/>
                </Toolbar>
            </AppBar>

            <DrawerAppBar 
                openDrawer={openDrawer}  
                setOpenDrawer={setOpenDrawer}
            />
        </Box>
    )
}


const MovieMenu = styled(Typography)(()=>({
   
    ":hover div":{
        opacity:"1 !important",
        visibility:"visible !important"
    }
}))


