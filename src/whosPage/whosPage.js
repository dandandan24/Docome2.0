import React from 'react'
import Hero from '../hero/hero'
import './whosPage.css'
import { Grid } from '@mui/material'
import WhosCube from './whosCube/whosCube'

const WhosPage = (props) => {
    const CubesValues = [["#ADDEDB","לבעלי חברות" , "שרוצים לתעד ולספר את סיפור העסק המשלב את סיפור המייסדים, ומתעד את צמיחת העסק לאורך השנים"],
    ["#FFD459","לאנשי עסקים" , "שרוצים לארוז את כל הידע שצברו ואת הדרך שפיתחו למסמך אחד בעל ערך"],
    ["#EDEDE6","לאדם יקר" , "אמא, אבא או אדם אהוב שחוגגים יום הולדת או מאורע משמח"],
    ["#F57854","לעצמכם" , "למי שרוצה לתעד את סיפור חיוו ולעשות סדר בראש, לבטא את חוויות החיים והתובנות המרכזיות באלבום אחד"],
    ["#124770","לחבר יקר" , "שחבריו הקרובים רוצים לתת לו מתנה כזו מקורית ליום הולדתו", true],["#FCCC9E","לסבא וסבתא" , "למי שרוצה לרגשה אותם במתנה מקורית ומרגשת "]]
    return(
      <Hero style = {{display : 'flex', justifyContent:'center'}}>
        <p className='whosHeader'>למי מתאים לתת במתנה אלבום סיפור חיים של דוקו-מי</p> 
        <Grid container>
            <Grid item xs = {2}></Grid>
            <Grid item xs = {8} style = {{height:'81vh', marginTop:'4vh'}}>
                <Grid container style={{textAlign:'center'}}>
                    <Grid item xs = {4} style = {{height:'40.5vh'}}><WhosCube backgroundColor = {CubesValues[0][0]} header = {CubesValues[0][1]} subtext = {CubesValues[0][2]}></WhosCube></Grid>
                    <Grid item xs = {4} style = {{height:'40.5vh'}}><WhosCube backgroundColor = {CubesValues[1][0]} header = {CubesValues[1][1]} subtext = {CubesValues[1][2]}></WhosCube></Grid>
                    <Grid item xs = {4} style = {{height:'40.5vh'}}><WhosCube backgroundColor = {CubesValues[2][0]} header = {CubesValues[2][1]} subtext = {CubesValues[2][2]}></WhosCube></Grid>
                    <Grid item xs = {4} style = {{height:'40.5vh'}}><WhosCube backgroundColor = {CubesValues[3][0]} header = {CubesValues[3][1]} subtext = {CubesValues[3][2]}></WhosCube></Grid>
                    <Grid item xs = {4} style = {{height:'40.5vh'}}><WhosCube backgroundColor = {CubesValues[4][0]} header = {CubesValues[4][1]} subtext = {CubesValues[4][2]} blue = {CubesValues[4][3]}></WhosCube></Grid>
                    <Grid item xs = {4} style = {{height:'40.5vh'}}><WhosCube backgroundColor = {CubesValues[5][0]} header = {CubesValues[5][1]} subtext = {CubesValues[5][2]}></WhosCube></Grid>
                </Grid>
            </Grid>
            <Grid item xs = {2}></Grid>
        </Grid>
        
      </Hero>
    )
}

export default WhosPage