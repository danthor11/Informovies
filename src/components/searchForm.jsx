import React , {useState}from "react"
import { styled ,alpha,createTheme ,ThemeProvider} from "@mui/system"
import { InputBase } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useNavigate } from "react-router-dom"
import { TextField } from "@mui/material"

const theme = createTheme({
    palette:{
        primary:"blue",
        common:{
            white:"#eee",
        },
        boxShadow:{
            lightBlue:"rgba(255,255,255,0.3)",
            gray:"rgba(0,0,0,0.3)"
        },
        
    }
})

export const  SearchForm = ({route,sx,btnStyle})  => {
    let navigate = useNavigate()
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => setInputValue(e.target.value)

    const handleSubmit= (e) => {
        e.preventDefault()
        navigate(`${route}/${inputValue}`)
    }


    return(
        <ThemeProvider theme={theme} >
            <Search sx={sx} >
                <SearchIconWrapper>
                    <SearchIcon/>
                </SearchIconWrapper>
                <form onSubmit={handleSubmit}>
                    <StyledInput
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Search..."
                        btnStyle={btnStyle}
                    />
                </form>
            </Search>

        </ThemeProvider>
    )
}


export const StyledInput = styled("input")(({ theme , btnStyle}) => ({
   width:"100%",
   backgroundColor: "transparent",
   marginLeft: "0",
   padding:"8px",
   paddingLeft:theme.spacing(6.5),
   border:"none",
   maxWidth:"150px",
   color:"#6e6e6e",
   transition:"all 0.3s ease",
   "&:focus":{
       border:"none",
       outline:"none",
       borderRadius:"6px",
       boxShadow:`0 0 2px 3px ${theme.palette.boxShadow[btnStyle]}`,
   }
}))

  export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "4px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    
    marginLeft: 0,
    width: '100%',
    maxWidth:"300px",
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }))

  export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1.5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }))