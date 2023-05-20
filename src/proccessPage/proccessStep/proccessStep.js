import React from 'react'
import Grid from '@mui/material/Grid'
import './proccessStep.css'


const ProccessStep = ({header,text,Icon,color}) => {
    return(
        <div className='stepContainer'>    
            <Icon style = {{color : color, fontSize:'3vw'}}></Icon>       
            <p style = {{fontSize: '1.5vw' ,color : color, fontWeight: '500', marginTop: '0.6vw'}}>{header}</p>
            <div style = {{width:'50%', marginTop:'-3vh'}}>
                <p style = {{fontSize: '1vw' , color : '#124770'}}>{text}</p>
            </div> 
        </div>    
    )
}

export default ProccessStep