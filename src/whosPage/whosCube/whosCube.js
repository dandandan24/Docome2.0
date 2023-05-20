import React from 'react'
import './whosCube.css'
import TagIcon from '@mui/icons-material/Tag';

const WhosCube = (props) => {
    return(
        <div style = {{backgroundColor : props.backgroundColor ? props.backgroundColor : "none" , height : "100%", width : "100%",display:'flex', flexDirection : 'column', justifyContent:'center'}}> 
            <div style = {{display : 'flex', direction : 'row', justifyContent : 'center', alignItems : 'center'}}>          
                <p className= {props.blue ? 'whosCubeHeaderBlue' : 'whosCubeHeader'}>{props.header}</p>
                <TagIcon style = {{color : 'white', fontSize:'2vw', marginTop:'0.5vh'}}></TagIcon>
            </div>
            <p className= {props.blue ? 'whosCubeTextBlue' : 'whosCubeText'}>{props.subtext}</p>
        </div>
    )
}

export default WhosCube