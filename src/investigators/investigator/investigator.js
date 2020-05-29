import React, {useState} from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import image from '../../images/investigators.jpg'
import './investigator.scss'

const Investigator = ({name, isSelected, code, faction, onClick}) =>{

    console.log('isFactionShown', name)

    const [scaleDown, setScaleDown] = useState(false)
    const [scaleUp, setScaleUp] = useState(false)
    const [shakeVertical, setShakeVertical] = useState(false)

    const imageWrapperClassnames = classNames({
        'image-wrapper': true,
        'shake-vertical': shakeVertical,
        selected: isSelected,
        'all': name==='All'
    })

    const imgClassnames = classNames({
        'image': true, [code]: true, 'scale-down': scaleDown, 'scale-up': scaleUp
    })

    return(
        <div className='investigator'>
            {name}
            <div 
                className={imageWrapperClassnames}
                onClick={()=>{
                    onClick(code)
                    console.log('clicked', code)
                    setShakeVertical(true)
                    setTimeout(()=>{
                        setShakeVertical(false)
                    }, 800)
                }}
            >
                { name==='All'? 
                <div className='all'>
                    {
                        faction==='rogue' ? 'd' :
                        faction==='survivor' ? 'e' :
                        faction==='guardian' ? 'f' :
                        faction==='mystic' ? 'g' :
                        faction==='seeker' ? 'h' : 
                        faction==='all' ? 'u' : 'N'
                    }
                </div>
                :
                <img 
                    className={imgClassnames} src={image} alt={name}
                    onMouseEnter={()=>{setScaleUp(true); setScaleDown(false)}}
                    onMouseLeave={()=>{
                        setScaleUp(false)
                        setScaleDown(true)
                        setTimeout(()=>{
                            setScaleDown(false)
                        },500)
                    }}
                />}
            </div>
        </div>
    )
}

const mapDispatchToProps = ({
    onClick: (code)=>{
        return {type: 'INVESTIGATOR_CLICKED', payload: {code}}
    }
})

const mapStateToProps = ({showed}) =>({
    showed
})

export default connect(mapStateToProps, mapDispatchToProps)(Investigator) 