import React from 'react'
import {connect} from 'react-redux'

import Comparator from './comparator'

import './comparators.scss'

const Comparators = ({comparators}) =>{
    return(
        <div className={`comparators`}>
            <div className={`comparators-wrapper`}>
                {comparators.map(comparator=>{
                    return(
                        <Comparator {...comparator} />
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    comparators: state.comparators
})

export default connect(mapStateToProps)(Comparators)