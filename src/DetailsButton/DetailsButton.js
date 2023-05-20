import React from 'react'
import Button from '@mui/material/Button'
import './DetailsButton.css'
import { alpha, styled } from '@mui/material/styles';

const DetailsButton = (props) => {
    const DetailsButton = styled(Button)(({ theme }) => ({
           color: 'white',
           backgroundColor: '#F57854',
          '&:hover': {
            boxShadow: `0px 0px 0px 8px rgb(245, 120, 84, 0.2)`,
            backgroundColor : '#F57854'
          },
      }));

    return(
        <DetailsButton  variant='contained' style = {{fontSize:'1.5vw', borderRadius:'1vw',padding:'0.5vw'}}>כן! אשמח לקבל פרטים נוספים</DetailsButton>
    )
}

export default DetailsButton