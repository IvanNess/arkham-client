import React from 'react'
import {connect} from 'react-redux'

import './cycle-cutter.scss'

const CycleCutter = ({show, hide}) =>{
    return (
        <div className={`cycle-cutter ${show? 'show': ''} ${hide? 'hide': ''}`}>
            CycleCutter
        </div>
    )
}

const mapStateToProps = state =>({
    show: state.cycleCutter.show,
    hide: state.cycleCutter.hide
})

export default connect(mapStateToProps)(CycleCutter)

