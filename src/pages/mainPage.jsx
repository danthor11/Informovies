import React from "react"
import { DrawerAppBar } from "../components/drawer"
import { Box , Typography ,Paper} from "@mui/material"
import { styled } from "@mui/system"
import Cinema from "../assets/tarantino.cinema.jpeg"
import Detail1 from "../assets/detail-1.jpg"
import Detail2 from "../assets/detail-2.jpg"
import Detail3 from "../assets/detail-3.jpg"
import Serie from "../assets/serie.jpg"
import { ContactSection } from "../components/contact"
import {Helmet} from "react-helmet"
import {ComingSoon} from "../components/comingSoon/comingSoon"
import { ComingSoonMoviesProvider } from "../context/comingSoon"


export const Home = ( ) => {


    return(
        <ComingSoonMoviesProvider>

            <Helmet>
                <title>Home page || Informovies</title>
                <meta name="description" content="home page" />
            </Helmet> 

            <Box
            style={{width:"100%",minHeight:"85vh",display:"flex",flexDirection:"column",alignItems:"center"}}
            >
                <BoxWithImages image={Cinema}>
                    <BoxTitle>
                        <PaperTitle >
                            <Typography variant="h4">
                                Are you ready to know something else about movies?
                            </Typography>
                            <Typography variant="body1" pt={2} color={"aliceblue"}>
                                In this <strong>InforMovies</strong> you can watch information about movies
                            </Typography>
                        </PaperTitle>
                    </BoxTitle>
                </BoxWithImages>
                

                <Box style={{width:"100%"}}>
                    <Typography variant="h3" my={2} p={3} style={{color:"#595a5c"}} textAlign={"center"}>
                        You can see
                    </Typography>
                </Box>
                <BoxInformative>
                    <BoxThings>
                        <Paper style={{borderRadius:"5px"}}>
                            <Image src={Detail1} alt="image1"/>
                            <Box p={3} pt={1}>
                                <Typography variant="h5"mb={1} textAlign={"center"}>Lorem</Typography>
                                <Typography variant="paragraph" style={{color:"#595a5c"}}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qo, facilis quas rerum, mollitia voluptas, ipsum reicien is minima nobis ad error iste cupiditate? Eius corporis doloremque dolorem repudiandae possimus architecto impedit?
                                </Typography>
                            </Box>
                        </Paper>                    <Paper style={{borderRadius:"5px"}}>
                            <Image src={Detail2} alt="image2"/>
                            <Box p={3} pt={1}>
                                <Typography variant="h5"mb={1} textAlign={"center"}>Lorem</Typography>
                                <Typography variant="paragraph" style={{color:"#595a5c"}}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qo, facilis quas rerum, mollitia voluptas, ipsum reicien is minima nobis ad error iste cupiditate? Eius corporis doloremque dolorem repudiandae possimus architecto impedit?
                                </Typography>
                            </Box>
                        </Paper>
                        <Paper style={{borderRadius:"5px"}}>
                            <Image src={Detail3} alt="image3"/>
                            <Box p={3} pt={1}>
                                <Typography variant="h5"mb={1} textAlign={"center"}>Lorem</Typography>
                                <Typography variant="paragraph" style={{color:"#595a5c"}}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qo, facilis quas rerum, mollitia voluptas, ipsum reicien is minima nobis ad error iste cupiditate? Eius corporis doloremque dolorem repudiandae possimus architecto impedit?
                                </Typography>
                            </Box>
                        </Paper>
                    </BoxThings>
        
                </BoxInformative>
                
                <BoxWithImages image={Serie}>        
                    <BoxTitle>
                        <PaperTitle >
                            <Typography variant="h4">
                                And What about Tv series?
                            </Typography>
                            <Typography variant="body1" pt={2} color={"aliceblue"}>
                                Also you can looking for information about tv series and you favorite.
                            </Typography>
                        </PaperTitle>
                    </BoxTitle>
                </BoxWithImages> 
                
              
                    <ComingSoon/>
                    

               
            </Box>
        </ComingSoonMoviesProvider>
    )
}


const BoxWithImages = styled("div")((prop)=>({
    background: `url(${prop.image})`,
    width:"100%",
    minHeight:"500px",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    position:"static",
    display:"flex",
    flex:"1",
    justifyContent:"space-between",
    alignItems:"center",
    
}))

const BoxTitle = styled(Box)(()=>({
    padding:"2rem"
}))

const PaperTitle = styled(Paper)(()=>({
    padding:"2.5rem 1rem",
    color:"#eee",
    background:"rgba(24,24,24,0.7)",
    border:"none",
    boxShadow:"none",
    fontWeight:"200"
}))

const BoxInformative = styled("div")(()=>({
    background: "#eee",
    width:"90vw",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    marginBottom:"4rem"
}))

const BoxThings = styled("div")(()=>({
    width:"100%",
    margin:"0 auto",
    display:"flex",
    alignItems:"center",
    gap:"16px",
    ["@media(max-width:590px)"]:{
        flexDirection:"column",
        alignContent:"center",
        width:"60%",
        margin:"0 auto",
        gap:"1.5rem"
    },
    ["@media(max-width:400px)"]:{
        width:"80%",
        
    },
    
}))

const Image = styled("img")(()=>({
    width:"100%",
    height:"180px",
    borderTopLeftRadius:"inherit",
    borderTopRightRadius:"inherit",
}))