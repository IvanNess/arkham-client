import React from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import './cycle-choice.scss'

const CycleChoice = ({name, stringCode, clicked, onClick})=>{
    const cycleChoiceClassnames = classNames({'cycle-choice': true, [stringCode]: true, clicked})

    return(
        <div 
            className={cycleChoiceClassnames}
            onClick={()=>onClick(stringCode)}
        >
            {name}
        </div>
    )
}

const mapDispatchToProps = {
    onClick: (stringCode)=>({type: 'CYCLE_CHOICE_CLICKED', payload: {stringCode}})
}

export default connect(null, mapDispatchToProps)(CycleChoice)