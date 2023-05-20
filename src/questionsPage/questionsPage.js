import React from 'react'
import './questionsPage.css';
import Hero from '../hero/hero';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DetailsButton from '../DetailsButton/DetailsButton'

const QuestionsPage = (props) => {
    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
      ))(({ theme }) => ({
        borderBottom: `1px solid #124770`,
        '&:before': {
          display: 'none',
        },
      }));
      
      const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
          expandIcon={<AddCircleIcon sx={{ fontSize: '1rem'}} />}
          {...props}
        />
      ))(({ theme }) => ({
        backgroundColor:'rgba(255, 255, 255)',
        color : '#124770',
       marginTop:'3vh',
        flexDirection: 'row',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
          transform: 'rotate(90deg)',
        },
        '& .MuiAccordionSummary-content': {
          marginLeft: theme.spacing(1),
          direction : "rtl",
         
        },
      }));
      
      const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid #124770',
        color: '#124770',
        direction : 'rtl'
      }));
      
        const [expanded, setExpanded] = React.useState('panel1');
      
        const handleChange = (panel) => (event, newExpanded) => {
          setExpanded(newExpanded ? panel : false);
        };
    
    let questionsVar = [["כמה זמן נמשכת הפקת אלבום סיפור חיים?",".עד חודשיים ממועד הראיון האישי"], 
    ["אם אירוע יום ההולדת של אבא הוא בעוד שבוע. מה עושים?", "יש פתרון. אנחנו מנפיקים וואוצ'ר מתנה מהודר שנימסר לאבא במועד יום ההולדת על ידי בני המשפחה כמובן. הוואוצ'ר כולל את כל פרטי המתנה. "]
    ,["אם יש לי אמא שלא מרבה לדבר ולספר על עברה, האם זה מתאים?","הריאיון האישי הוא לב ליבו של כל התהליך. הנסיון שצברנו בתחום הביא אותנו לידיעה ברורה שהכל תלוי באופן בו נשאלות השאלות, בתקשורת הבין אישית, באווירה שנוצרת תוך כדי ראיון. ובסופו של יום גם השתקנים ביותר מדברים ופותחים את ליבם כשיודעים איך לייצר את המרחב המתאים. "],
    ["האם יש אפשרות לצרף לאלבום ברכות שכתבה המשפחה לאבא או אמא?    ","בהחלט כן.    "],["האם אפשרי לרכוש עותק נוסף של אלבום סיפור חיים ?    ","לגמרי אפשרי!    "]]

    return(
       <Hero>
            <Grid container>
              <Grid item xs = {12}>
                    <p className='questionsHeader'>הגעת עד לפה ויש לך שאלות? <br></br>נשמח לענות עליהן!</p>
              </Grid>
              <Grid item xs = {2}></Grid>
              <Grid item xs = {8}>
                            <div>
                                {questionsVar.map((question, index) => {
                                    return(
                                        <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon style = {{color : '#124770'}}/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography style = {{fontSize : '1.2vw', fontWeight : '600'}}>{question[0]}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                        <Typography style = {{color : '#124770', fontSize : '1vw', marginRight:'1.2vw'}}>
                                            {question[1]}
                                        </Typography>
                                        </AccordionDetails>
                                        </Accordion>      
                                    )
                                })}                                     
                             </div>
              </Grid>
              <Grid item xs = {2}></Grid>
              <Grid container item xs = {12} style = {{justifyContent : 'center', marginTop:'7vh'}}>
                <DetailsButton></DetailsButton>
              </Grid>

            </Grid>
       </Hero>
    )
}

export default QuestionsPage