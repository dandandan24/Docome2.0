import React from 'react'
import Hero from '../hero/hero'
import Grid from '@mui/material/Grid'
import './proccesspage.css'
import ProccessStep from './proccessStep/proccessStep'
import CreateIcon from '@mui/icons-material/Create';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CelebrationIcon from '@mui/icons-material/Celebration';
import DetailsButton from '../DetailsButton/DetailsButton'

const ProccessPage = (props) => {
    const stepVars = [[CreateIcon,"משאירים פרטים בדף זה","אנחנו יוצרים אתכם קשר ושולחים לכם שאלון רקע מקדים שישמש אותנו בהמשך התהליך","#124770"],
                      [QuestionAnswerIcon, "נפגשים ומקשיבים לסיפור" , "ראיונות אישיים המתקיימים בבית, במהלך הראיונות נקשיב לסיפור האישי, לזיכרונות ולקולות שעולים", "#82E6E4"],
                       [CameraAltIcon, "מצטלמים, תחייכו" , "מצלמים את אמא, אבא ואת כל המשפחה המעמד הזה תמיד מאוד מרגש והופך לחוויה חגיגית ומשפחתית", "#FFD459"],
                        [SettingsIcon, "מעבדים את המידע " , "יוצרים מכל המידע שקיבלנו מכם עד כה טקסט סיפורי שייהפוך את הסיפור האישי שלכם למרתק", "#F57854"],
                        [ManageSearchIcon,"משלבים מידע משלים","מאתרים מידע היסטורי ברמה הלאומית והבינלאומית המתממשק עם הסיפורים במסע החיים","#124770"],
                        [AutoFixNormalIcon,"עורכים את התמונות","עורכים את התמונות באיכות גבוהה, מתקנים תאורה וצבעים על מנת קבלת תוצר מקורי אך מיטבי","#82E6E4"],
                         [AutoStoriesIcon,"מייצרים אלבום","מעצבים את כל החומר הכתוב ותמונות מהצילומים באלבום אחד ייחודי המכיל את סיפורכם ושולחים להדפסה","#FFD459"],
                          [CelebrationIcon,"נהנים ביחד","מגיעים לאירוע משפחתי חגיגי, מנחים פעילות חוויתית ומלכדת לכל המשפחה בפעילות בני המשפחה מעלים סיפורים זכרונות וחוויות משותפות שמעניקים רובד נוסף לסיפור החיים","#F57854"]]

    return(
        <Hero height = "250vh">
            <Grid container>
                <Grid item xs = {12} style = {{marginBottom:'5vh'}}>
                    <p className='proccessHeader'>מה כולל תהליך יצירת אלבום סיפור חיים</p>
                </Grid>
                <Grid item xs = {1}/>
                <Grid item xs = {4.5}>
                    <Grid container>
                        <Grid item xs = {12} style = {{height:'25vh'}}/>               
                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[1][0]} header = {stepVars[1][1]} text = {stepVars[1][2]} color = {stepVars[1][3]}></ProccessStep>
                        </Grid>

                        <Grid item xs = {12} style = {{height:'30vh'}}/>

                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[3][0]} header = {stepVars[3][1]} text = {stepVars[3][2]} color = {stepVars[3][3]}></ProccessStep>
                        </Grid>

                        <Grid item xs = {12} style = {{height:'30vh'}}/>

                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[5][0]} header = {stepVars[5][1]} text = {stepVars[5][2]} color = {stepVars[5][3]}></ProccessStep>
                        </Grid>

                        <Grid item xs = {12} style = {{height:'30vh'}}/>

                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[7][0]} header = {stepVars[7][1]} text = {stepVars[7][2]} color = {stepVars[7][3]}></ProccessStep>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs = {1}/>
                <Grid item xs = {4.5}>
                    <Grid container>
                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[0][0]} header = {stepVars[0][1]} text = {stepVars[0][2]} color = {stepVars[0][3]}></ProccessStep>
                        </Grid>
                        <Grid item xs = {12} style = {{height:'30vh'}}/>

                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[2][0]} header = {stepVars[2][1]} text = {stepVars[2][2]} color = {stepVars[2][3]}></ProccessStep>
                        </Grid>

                        <Grid item xs = {12} style = {{height:'30vh'}}/>

                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[4][0]} header = {stepVars[4][1]} text = {stepVars[4][2]} color = {stepVars[4][3]}></ProccessStep>
                        </Grid>

                        <Grid item xs = {12} style = {{height:'30vh'}}/>

                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[6][0]} header = {stepVars[6][1]} text = {stepVars[6][2]} color = {stepVars[6][3]}></ProccessStep>
                        </Grid>               
                    </Grid>
                </Grid>
                <Grid item xs = {1}/>
                {/* <Grid item xs = {3}/> 
                <Grid container item xs = {4}>
                    <Grid container style = {{display:'flex',justifyContent : 'center'}} >
                        <Grid item xs = {12} style = {{height:'15vh'}}/>               
                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[1][0]} header = {stepVars[1][1]} text = {stepVars[1][2]} color = {stepVars[1][3]}></ProccessStep>
                        </Grid>

                        <Grid item xs = {12} style = {{height:'10vh'}}/>

                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[3][0]} header = {stepVars[3][1]} text = {stepVars[3][2]} color = {stepVars[3][3]}></ProccessStep>
                        </Grid>

                        <Grid item xs = {12} style = {{height:'10vh'}}/>

                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[5][0]} header = {stepVars[5][1]} text = {stepVars[5][2]} color = {stepVars[5][3]}></ProccessStep>
                        </Grid>

                        <Grid item xs = {12} style = {{height:'10vh'}}/>

                        <Grid item xs = {12}>
                            <ProccessStep Icon={stepVars[7][0]} header = {stepVars[7][1]} text = {stepVars[7][2]} color = {stepVars[7][3]}></ProccessStep>
                        </Grid>
                    </Grid>
                </Grid> */}
                <Grid item xs = {12} style = {{marginTop:'5vh',marginBottom:'5vh', textAlign:'center'}}>
                    <DetailsButton></DetailsButton>
                </Grid>
            

            </Grid>
        
        </Hero>
    )
}

export default ProccessPage