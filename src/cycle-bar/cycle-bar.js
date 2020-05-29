import React from 'react'
import {connect} from 'react-redux'

import CycleChoice from './cycle-choice'
import CycleCutter from './cycle-cutter'

import './cycle-bar.scss'

const CycleBar = ({cycleChoices}) =>{

    return(
        <div className='cycle-bar'>
            Cycle Bar
            <div className={`choices`}>
                {cycleChoices.map(cycleChoice=>{
                    return(
                        <CycleChoice
                            key={cycleChoice.stringCode}
                            name={cycleChoice.name}
                            promptString= {cycleChoice.promptString}
                            stringCode={cycleChoice.stringCode}
                            clicked={cycleChoice.clicked}
                        />
                    )
                })}
                <CycleCutter/>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    cycleChoices: state.cycleChoices
})

export default connect(mapStateToProps)(CycleBar)