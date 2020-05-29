import React, { useState } from 'react'
import classNames from 'classnames'
import {connect} from 'react-redux'

import './investigator.scss'

//to do: 1. make shadow animation.

const Investigator = (props) => {
    const {
        onClick = () => { console.log('there is a plug.') },
        imageUrl = 'https://arkhamdb.com/bundles/cards/04005.png',
        wrapperClassnames = ''
    } = props

    const [scaleDown, setScaleDown] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [shakeVertical, setShakeVertical] = useState(false)

    let imgClassnames = classNames({
        "scale-up": true,
        "scale-down": scaleDown,
    })
    let imageWrapperClassnames = classNames({
        clicked,
        "image-wrapper": true,
        "shake-vertical": shakeVertical
    })

    let investigatorClassnames = classNames({
        'investigator':true,
    })

    return (
        <div className={investigatorClassnames}>
            Investigator
            <div className={wrapperClassnames}>
                <div
                    className={imageWrapperClassnames}
                    onClick={() => {
                        onClick()
                        setShakeVertical(true)
                        setTimeout(() => {
                            setClicked(clicked => !clicked)
                        }, 100)
                        setTimeout(() => {
                            setShakeVertical(false)
                        }, 800)
                    }}
                >
                    <img
                        onMouseLeave={() => {
                            setScaleDown(true)
                        }}
                        className={imgClassnames}
                        src={imageUrl}
                        alt=""
                    />
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state =>({
})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Investigator)