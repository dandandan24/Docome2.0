import React from 'react'
import './AboutPage.css';
import Hero from '../hero/hero';
import { Grid } from '@mui/material';
import Revital from './Revital.jpg'
import Sima from './Sima.jpg'
import RevitalAndSima from './RevitalAndSima.jpg'


const AboutPage = (props) => {
    return(
       <Hero>
            <Grid container>
                <Grid item xs = {1}></Grid>
                <Grid container item xs = {4} style = {{marginTop:'4vh'}} spacing={1}>
                    <Grid item xs = {12}>
                        <img src = {RevitalAndSima} style={{width : '100%', objectFit:'contain'}}></img>
                    </Grid>
                    <Grid item xs = {6}>
                        <img src = {Sima} style={{width : '100%', objectFit:'contain'}}></img>
                    </Grid>
                    <Grid item xs = {6}>
                        <img src = {Revital} style={{width : '100%', objectFit:'contain'}}></img>
                    </Grid> 
                </Grid>
                <Grid item xs = {1.5}></Grid>
                <Grid container item xs = {5} style = {{justifyContent:'right',marginTop:'4vh'}}>
                    <p className='AboutHeader'>קצת על צוות דוקו-מי</p>
                    <p className='AboutSubtext'>את צוות דוקומי מובילות סימה ורויטל – שתיהן עוסקות בתחום <br></br>
                        שהן הכי הכי אוהבות! <br></br>
רויטל היא צלמת מקצועית ומוכשרת שמעבר לעבודה המקצועית<br></br>
 יש לה חיבור טוב עם אנשים ויודעת לתת ביטוי ויזואלי למי שהם באמת.<br></br>
  לצידה סימה שהיא סיפורולוגית ומטפלת רגשית<br></br>
   שתמיד סקרנית לצלול אל תוך סיפור חיים,<br></br>
    להקשיב גם למילים שלא נאמרות,<br></br>
     ולתת חיים חדשים לרגשות, לחוויות ולזיכרונות.<br></br>

הילדים הגדולים שלנו למדו יחד. נפגשנו באסיפות הורים, טיולים.<br></br>
שתינו עסקנו באותה העת בתפקידי ניהול בכירים בעולמות שונים.<br></br>
ואז כעבור שנים, נפגשנו במאפיה השכונתית, החלפנו כמה מילים<br></br>
 וגילינו ששתינו נמצאות בצומת דרכים בקריירה.<br></br>
   חברה נוספת שפגשנו סיפרה שהיא וחבריה מחפשים מתנה מקורית לחבר טוב שחוגג יום הולדתו ה-70 ומכאן – הרמנו את הכפפה והתחלנו לרוץ!

ההתאהבות שלנו בתהליך העשייה וההתרגשות העצומה של חוגג היומולדת הביאו אותנו להבנה שאנחנו חייבות
 להמשיך ולשחזר את ההצלחה!<br></br>
הבנו שיש כאן מוצר מנצח שהוא הרבה מעבר לתיעוד של סיפור חיים.<br></br>
 מדובר במתנה משמעותית, ערכית ובלתי נשכחת שמצליחה לרגש את כל הסובבים. 
</p>
                </Grid>
                <Grid item xs = {0.5}></Grid>
            </Grid>
       </Hero>
    )
}

export default AboutPage