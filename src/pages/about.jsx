import { Typography,Box , Container } from "@mui/material"
import {Helmet} from "react-helmet"
import { ContactSection } from "../components/contact"
import Contact from "../assets/contact.jpg"

export const About = ( ) => {

    return (
        <>
            <Helmet>
                <title>About page || Informovies</title>
                <meta name="description" content="about page" />
            </Helmet>
        
            <Container style={{width:"95%",margin:"4.5rem auto",minHeight:"85vh"}}>
                <Typography variant="h2" mt={"5"}>
                    About us
                </Typography>
                <hr/>
                <Box>
                    <Typography variant="p" my={2} style={{color:"#525252"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nisi enim, exercitationem beatae iste veniam eveniet autem nostrum repudiandae corrupti asperiores ratione quae, ipsam recusandae? Error voluptatem sed labore quos!
                    </Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} justifyContent={"center"} gap={4} mt={4} sx={{flexDirection:{xs:"column-reverse",md:"row"}}}>
                    <ContactSection/>
                    <Box>
                        <img 
                        src={Contact} 
                        alt="contact" 
                        style={{width:"100%",borderRadius:"5px", boxShadow:"0 0 10px rgba(63,170,220,0.3)"

                    }}
                        loading="lazy"
                        />
                    </Box>
                </Box>
            </Container>
        </>
    )
}