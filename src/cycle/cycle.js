import React, { useState } from 'react'
import classNames from 'classnames'

import image from '../images/ahcfull.jpg'

import './cycle.scss'

const Cycle = ({ cycleName }) => {
    console.log(cycleName)

    const [scaleDown, setScaleDown] = useState(false)
    const [scaleUp, setScaleUp] = useState(false)

    const imageWrapperClassnames = classNames({
        "image-wrapper": true,
        [cycleName]: true,
    })

    const imgClassnames = classNames({
        image: true,
        "scale-down": scaleDown,
        "scale-up": scaleUp,
        [cycleName]: true,
    })

    return (
        <div className='cycle'>
            Cycle
            <div 
                className={imageWrapperClassnames}
            >
                <img 
                    src={image} alt='' 
                    className={imgClassnames}
                    onMouseEnter={()=>{setScaleUp(true); setScaleDown(false)}}
                    onMouseLeave={()=>{
                        setScaleUp(false)
                        setScaleDown(true)
                        setTimeout(()=>{
                            setScaleDown(false)
                    },500)}}
                />
            </div>
        </div>
    )
}

export default Cycle
