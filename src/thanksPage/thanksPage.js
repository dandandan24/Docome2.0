import React from 'react'
import './thanksPage.css';
import Hero from '../hero/hero';
import { Grid } from '@mui/material';
import ReactPlayer from 'react-player';

const ThanksPage = (props) => {
    return(
      <Hero backgroundColor = "#EDEDE5">
          <Grid container>
              <Grid item xs = {12}>
                    <p className='thanksHeader'>אז למה לתעד את הסיפור חיים שלכם<br></br>
                  ולמה דוקו-מי הוא המקום האידיאלי בשבילכם לעשות זאת</p> 
              </Grid>
              <Grid item xs = {3}>
              
              </Grid>
              <Grid item xs = {6} style = {{width: '50vw', height:'60vh'}}>
                <ReactPlayer url='https://www.youtube.com/watch?v=WcIcVapfqXw&list=PLMC9KNkIncKseYxDN2niH6glGRWKsLtde' width="100%" height="100%"/>
              </Grid>
              <Grid item xs = {3}>
              
              </Grid>
          </Grid>
           
      </Hero>
    )
    
}

export default ThanksPage