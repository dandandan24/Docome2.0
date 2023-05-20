import React from 'react'
import './ContactPage.css';
import Hero from '../hero/hero'
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import notebookAndCamera from './notebookAndCamera.JPEG'
import emailjs from '@emailjs/browser'

const ContactPage = (props) => {
    const [name, setName] = useState("");
    const [mail,setMail] = useState("");
    const [message, setMessage] = useState(""); 

    const sendEmail = (e) => {
        // emailjs.send('docome', 'docome', {to_name : 'revital', from_name : name, message : message, from_email: mail, from_phone: '054-3329697'}, 'AdaJ7dw4Wmj9bxnQf')
        //   .then((response) => {
        //     console.log('SUCCESS!', response.status, response.text);
        //   }, (error) => {
        //     console.log('FAILED...', error);
        //   });
        console.log("Email Sent")
      };


    return(
        <Hero backgroundColor = "#F2EDE7">
            <Grid container>
                <Grid item xs = {1}></Grid>
                <Grid item xs = {5} style = {{height: '90vh', marginTop: '5vh', marginBottom : '5vh'}} >
                    <img src = {notebookAndCamera} style={{height : '100%', width : '100%'}}></img>
                </Grid>
                <Grid item xs = {1}></Grid>
                <Grid container item xs = {4} style = {{height:'90vh', marginTop:'5vh'}}>
                    <Grid item xs = {12} style = {{textAlign : 'center'}}>
                        <p className='ContactHeader'>צרו קשר</p>
                    </Grid>  
                    <Grid item xs = {12}>
                        <TextField label = "Full Name" style = {{direction : 'rtl', width: '100%'}} value = {name} onChange = {(event) => setName(event.target.value)}></TextField>  
                    </Grid>
                    <Grid item xs = {12}>
                        <TextField label = "Mail" style = {{direction : 'rtl', width: '100%'}} value = {mail} onChange = {(event) => setMail(event.target.value)}></TextField>                        
                    </Grid>
                    <Grid item xs = {12} >
                        <TextField label = "Type your message here" multiline minRows={7}  style = {{direction : 'rtl', width: '100%'}} value = {message} onChange = {(event) => setMessage(event.target.value)}></TextField>    
                    </Grid> 
                    <Grid container item xs = {12} style = {{justifyContent: 'center'}}>
                        <Button style={{width: "20vw", height:'7vh', fontSize : '1vw',borderRadius: '8px', backgroundColor : '#F57854', color: 'white'}} onClick = {() => {sendEmail()}}>חזרו אליי</Button>
                    </Grid>  
                    <Grid container item xs = {12} style = {{display: 'flex', alignItems:'center'}}>
                        <Grid container item xs = {6}>
                                <a href = "https://instagram.com/doco.me?igshid=YmMyMTA2M2Y="><InstagramIcon style={{fontSize : '2.8vw', borderRadius:'10px',color : '#124770' }}/></a>
                                <a href = "https://wa.me/0542514444"><WhatsAppIcon  style={{fontSize : '2.8vw', color : '#124770'}}/></a>
                                <a href = "https://www.facebook.com/itsdocome?mibextid=ZbWKwL"><FacebookIcon style={{fontSize : '2.8vw' , color : '#124770'}}/></a>  
                        </Grid>
                        <Grid item xs = {6} style = {{direction: 'rtl', color : '#211F58'}}>
                                <p style = {{fontWeight: '500'}}>פרטי התקשרות</p>
                                <p>054-2514444 <br></br> rparzelina@gmail.com</p>
                            
                        </Grid>
                    </Grid>
                 
              
                </Grid>
            </Grid>
        </Hero>
    )
}

export default ContactPage