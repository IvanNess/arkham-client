import React from 'react'

import image from '../../images/investigators.jpg'
import './display-investigator.scss'
import prompter from '../../prompter'

const DisplayInvestigator = ({code})=>{
    return(
        <div className='display-investigator'>
            <div className={`display-image-wrapper display`} >
                <img className={`image ${code} display`} src={image} alt=''/>
            </div>
        </div>
    )
}

export default prompter()(DisplayInvestigator)