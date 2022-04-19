

import React from "react"
import {Box , FormControl, InputLabel,Button, Input ,TextField, Typography} from "@mui/material"
import {styled} from "@mui/system"



export const ContactSection = () => {

    return(
        <ContactContainer>
            <FormContainer onSubmit={(e)=>{ 
                e.preventDefault()
                console.log("mensaje enviado")
            }}>
                <Typography variant="h3" textAlign="center" style={{color:"#595a5c"}}>
                    Contact Us!
                </Typography>
                
                <FormControl>
                    <InputLabel htmlFor="my-email">You email address</InputLabel>
                    <Input id="my-email"  />
                </FormControl>

                <FormControl>
                    <InputLabel htmlFor="my-name">Your name</InputLabel>
                    <Input id="my-name" style={{'&$focused':"red"}} />
                </FormControl>

                <CssTextField focusColor='#42C2FF'
                    id="outlined-multiline-flexible"
                    label="Message"
                    multiline
                    rows={4}
                    
                />

                
                <ContactButton variant="text" type={"submit"} >
                    Submit
                </ContactButton>
                
            </FormContainer>
        </ContactContainer>

    )
}


const ContactContainer = styled(Box)(()=>({
    width:"100%",
    minHeight:"400px",
    backgroundColor:"#eee"
}))



const FormContainer = styled("form")(()=>({
    display:"flex",
    flexDirection:"column",
    width:"100%",
    margin:"auto",
    gap:"2rem",
    backgroundColor:"#fff",
    padding:"2rem",
    borderRadius:"5px",
    border:"1px solid #c5c6c7",
    ["@media(max-width:590px)"]:{
        width:"100%",
        "& h3":{
          fontSize:"2.25rem"
        }
    },
}))

const CssTextField = styled(TextField, {
    shouldForwardProp: (props) => props !== "focusColor"
  })((p) => ({
    // input label when focused
    "& label.Mui-focused": {
      color: p.focusColor
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: p.focusColor
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: p.focusColor
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: p.focusColor
      }
    }
  }))

const ContactButton = styled(Button)`
  background:#42C2FF;
  fontWeight:bold;
  color:#eeeeee ;
  transition: all 0.5s ease;
  &:hover{
    background: #82d7ff;
  }
`
