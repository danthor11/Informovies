import React , {useState,useEffect} from "react"
import { fontStyle, maxHeight, styled } from "@mui/system"
import { Paper } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from "react-router-dom";

export const Carrousel = ({elements}) => {

    const [current, setCurrent] = useState(1);
    const length = elements.length
    
    function prevElement() {
        if(current===0)
            return setCurrent(prev => prev + length-1)
        return setCurrent(prev => prev - 1)

    }

    function nextElement() {
        console.log(current===length-1,current,length)
        if(current===length-1)
            return setCurrent(prev=> prev-prev)
        return setCurrent(prev => prev + 1)
    }

    useEffect(()=> {

        const interval = setInterval(()=> {
            console.log("render")
            nextElement()    
        },5000)

        return () => clearInterval(interval)
    },[current])
    



    console.log(current, elements[current].title)
    return(
        <>
                <Title >Coming Soon</Title>
            <Container>
                { elements.map((el,index) => (
                        <PaperMovie key={el.id} className={current!==index ? "hidden" : null}>
                            <Image 
                                src={el.image} 
                                alt={el.title} 
                                className={current!==index ? "hidden" : null}
                            />
                        
                            <Paragraph className={current!==index ? "hidden" : null}>
                                <h3 style={{fontWeight:"900"}}>{el.title}</h3>
                                {el.plot}
                                <Details>
                                    Release date: {el.releaseState}
                                </Details>
                                <LinkMovie to={`/movie/${el.id}`}>
                                    View more
                                </LinkMovie>
                            </Paragraph>
                            
                            
                        </PaperMovie>
                    ))

                }

            </Container>
                
        </>
    )

}

const Title = styled("h2")(()=>({
    color:"black",
    fontWeight:"800",
    fontSize:"2rem",
    position:"relative",
    fontFamily:"'Lato', sans-serif",
    padding:"1rem 0",
    width:"100%",
    textAlign:"center",
    margin:"0",
    paddingTop:"2rem",
    background:"rgba(0,0,0,0.2)",
    
}))

const Container = styled("div")(()=> ({
    
    fontFamily:"'Lato', sans-serif",
    height:"450px",
    width:"100%",
    position:"relative",
    margin:"0",
    
    padding:"0",
    paddingBottom:"1rem",
    background:"rgba(0,0,0,0.2)",
    maxHeight:"600px",
    justifyContent:"center",
    alignItems:"center",
    ["@media (max-width:590px)"]:{
        height:"600px"
    }
}))


const PaperMovie = styled("article")(()=>({
    
    display:"flex",
    alignSelf:"center",
    textAlign : "center",
    position:"absolute",
    objectFit:"contain",
    padding:"1rem  0",
    justifyContent:"space-evenly",
    margin:"1rem 0",
    minHeight:"200px",
    maxHeight:"400px",
    alignItems:"center",
    
    borderRadius:"6px",
    width:"100%",
    zIndex:"1",
    "+.hidden":{
        opacity:"0 !important",
        visibility:"hidden",
        background:"none",
        zIndex:"-20 !important "
    },
    ["@media (max-width:590px)"]:{
        flexDirection:"column",
        justifyContent:"center",
        padding:"1rem 0",
        width:"100%",
        height:"600px",
        maxHeight:"600px"
    }
    
}))


const Image = styled("img")(()=> ({
    width:"300px",
    height:"350px",
    borderRadius:"6px",
    
    transition:"all 0.3s ease-in",
    ["@media (max-width:590px)"]:{
        height:"auto",
        width:"65%",
    }

}))

const Paragraph = styled("p")(()=> ({
    alignSelf:"center",
    maxWidth:"350px",
    textAlign:"center",
    padding:"0 1rem",
    color:"rgba(10, 10, 10, 0.8)" ,
    transition:"all 0.3s ease-in",
    position:"relative"
   
    
}))

const Details = styled("div")(()=>({
    marginTop:"0.75rem",
    opacity:"inherit",
    paddingBottom:"1.5rem",
    color:"rgba(1, 1, 1, 0.6)",
    fontWeight:"600"
}))

const LinkMovie = styled(Link)(()=> ({
    cursor:"pointer",
    zIndex:"10",
    textDecoration:"none",
    padding:"0.5rem 0.75rem",
    background:"#01bffe",
    border:"none",
    borderRadius:"4px",
    color:"whitesmoke",
    transition:"all 0.3 ease",
    ":hover":{
        background:"#11caff"
    }
}))


const Arrow = styled("button")((props)=> ({
    position:"absolute",
    left:props.left,
    right:props.right,
    margin:"0",
    marginLeft:props.marginLeft,
    marginRight:props.marginRight,
    background:"transparent",
    padding:"0.5rem",
    border:"none",
    borderRadius:"50%",
    cursor:"pointer",
    transition:"all 0.2s ease-in",
    ":hover":{
        background:"rgba(0,0,0,0.4)"
    },

    ["@media (max-width:590px)"]:{
        
        marginLeft:"0",
        marginRight:"0",
    }
}))