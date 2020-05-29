import React, { useState } from 'react'
import classNames from 'classnames'
import {connect} from 'react-redux'

import image from '../images/factions.png'

import './faction.scss'

const Faction = (props) => {
    const [slideOn, setSlideOn] = useState(false)
    const [vibrate, setVibrate] = useState(false)

    const {
        setShowed,
        faction,
        name,
        showed
    } = props

    const imageWrapperClassnames = classNames({
        "image-wrapper": true,
        "slide-on": slideOn,
        vibrate,
        [faction]: true
    })

    const mainClassnames = classNames({faction, [faction]: true})

    return (
        <div className={mainClassnames}>
            {name}
            <div 
                className={imageWrapperClassnames}
                onMouseEnter={()=>{setVibrate(true)}}
                onMouseLeave={()=>{setVibrate(false)}}
                onClick={()=>{
                    setShowed({faction, on: !showed[faction].on})
                    setSlideOn(true)
                    setTimeout(()=>{
                        setSlideOn(false)
                        setVibrate(false)
                    }, 600)
                }}
            >
                <img
                    className={`image ${faction}`}
                    src={image}
                    alt=''
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    showed: state.showed
})

const mapDispatchToProps = (dispatch)=>({
    setShowed: ({faction, on})=>{
        dispatch({type: 'SET_SHOWED', payload: {faction, on}})
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Faction)