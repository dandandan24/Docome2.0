import React from 'react'
import Hero from '../hero/hero';
import { Grid } from '@mui/material';
import TeaserAlbum from './Images/TeaserAlbum.jpg'
import './teaserPage.css'
import { Height } from '@mui/icons-material';

const TeaserPage = (props) => {
    return(
        <Hero backgroundColor = "#FFD2A3" height = "70vh">
            <Grid container style = {{height:'100%'}}>
                <Grid item xs = {6} style = {{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    {/* <p className='TeaserHeader'>בול המתנה שחיפשת להורים</p> */}
                    <p className='TeaserSubtext'>כמה פעמים כבר שמעת את סיפורי החיים של אבא<br></br>
                     ואמא, וכל פעם זה כל כך מרגש, ואתה רוצה להנציח את<br></br>
                      הסיפורים האלה אחת ולתמיד, וכל פעם זה נדחה כי אין זמן, כי כולם עסוקים, ועוד שנה עוברת<br></br><br></br>

והינה מגיעה חגיגת יום ההולדת או יום הנישואין של<br></br>
 ההורים וזו ההזדמנות לתת להם מתנה כזאת <br></br>
 שתרגש אותם ואת כל בני המשפחה.<br></br>
  מתנה שתרכז ותתעד ברגישות רבה את אוסף הזיכרונות שלהם,<br></br>
   ותספר את הסיפור המיוחד שלהם, את מי שהם היו ואת מי שהם היום<br></br>
אנחנו פה בשביל לגרום לזה לקרות 
</p>

                </Grid>
                <Grid  container item xs = {6}>  
                    <div style= {{justifyContent: 'center', alignItems:'center', display:'flex', height:'100%'}}> 
                       <img style = {{width:'56%'}} src = {TeaserAlbum}></img>
                    </div>                                     
                </Grid>
               
            </Grid>
        </Hero>
    )
}

export default TeaserPage