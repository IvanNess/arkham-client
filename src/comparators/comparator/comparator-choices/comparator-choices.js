import React from 'react'
import {connect} from 'react-redux'
import classNames from 'classnames'

import './comparator-choices.scss'

const ComparatorChoices = ({choices, chosen, stringCode, isMain, open, onChoicesClick, onChosenClick}) =>{
    const comparatorChoicesClassnames = classNames({
        'comparator-choices': true,
        open
    })

    return(
        <div className={comparatorChoicesClassnames}>
            <div 
                className={`chosen`}
                onClick={()=>onChosenClick({stringCode, isMain})}
            >
                {chosen}
            </div>
            {open && <div className={`choices`}>
                {choices.map(choice=>{
                    return(
                        <div 
                            className={`choise`}
                            key={choice}
                            onClick={()=>{onChoicesClick({stringCode, isMain, choice })}}
                            >
                            {choice}
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

const mapDispatchToProps = ({
    onChoicesClick: (props) => ({type: 'SET_COMPARATOR_CHOICES', payload: props}),
    onChosenClick: (props) => ({type: 'COMPARATOR_CHOSEN_CLICKED', payload: props})
})

export default connect(null, mapDispatchToProps)(ComparatorChoices)