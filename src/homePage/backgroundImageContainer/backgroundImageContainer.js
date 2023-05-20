import React from 'react'
import './backgroundImageContainer.css';


const BackgroundImageContainer = (props) => {
    
    return(      
        <div className='backgroundImageContainer'> 
            {props.children}
        </div>
    )
}

export default BackgroundImageContainer