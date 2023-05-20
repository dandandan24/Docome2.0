import React from 'react'
import './hero.css';


const Hero = (props) => {
    return(
        <div style = {{backgroundColor : props.backgroundColor ? props.backgroundColor : "none" , height : props.height ? props.height : "100vh", width : props.width ? props.width : "100vw"}}> 
            {props.children}
        </div>
    )
}

export default Hero