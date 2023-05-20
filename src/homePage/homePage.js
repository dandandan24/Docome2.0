import React from 'react'
import BackgroundImageContainer from './backgroundImageContainer/backgroundImageContainer'
import Hero from '../hero/hero'
import Grid from '@mui/material/Grid'
import './homePage.css'
import DetailsButton from '../DetailsButton/DetailsButton'
import Logo from '../Images/Logo.png'

const HomePage = (props) => {
    return(
        <Hero>
            <BackgroundImageContainer>
                <Grid container>
                    <Grid item xs= {6}>
                        <Grid item xs = {5} style = {{marginTop:'3vh'}}>
                            <img src = {Logo} style = {{width:'100%'}}></img>
                        </Grid>
                    </Grid>
                    <Grid item xs= {6}>
                        <Grid container>   
                            <Grid item xs = {3}></Grid>
                            <Grid item xs = {8} >
                                <p className='Header'>אלבום סיפור חיים – בדיוק המתנה המקורית שחיפשתם</p>
                            </Grid>
                            <Grid item xs = {2}></Grid>
                            <Grid item xs = {9}>
                                <p className='Subtext'>חוגגים יום הולדת לאדם אהוב?  <br></br>
                                מרגישים שמיציתם את כל הרעיונות ה"שיגרתיים" למתנה <br></br>
וכבר לא נשארו 
יותר שפנים בכובע? <br></br>
אז הגעתם למקום הנכון!<br></br>
הפעם זו תהיה מתנה מקורית ומיוחדת כזאת שתרגש<br></br>
ותעשה טוב על הלב. אלבום סיפור חיים במתנה הוא<br></br>
אלבום גדול ומרהיב ביופיו המשלב בין ספר ואלבום<br></br>
תמונות גדול. אלבום המתעד תחנות בסיפור החיים<br></br>
של אדם קרוב ויקר בסיפורים, בחוויות ובתמונות מן<br></br>
העבר. תוך שילוב צילומים אישיים ומשפחתיים עכשווים<br></br>
 שיוצרים יחד חוויה וזיכרונות משפחתיים חדשים.<br></br></p>
                            </Grid>
                            <Grid item xs = {3}></Grid>
                            <Grid item xs = {8} style = {{marginTop: '5vh'}}>
                            <DetailsButton></DetailsButton>
                            </Grid>
                        </Grid>
                    </Grid>
                   
                </Grid>
            </BackgroundImageContainer>  
        </Hero>
    )
}

export default HomePage