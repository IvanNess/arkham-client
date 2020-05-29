import React from 'react'
import { connect } from 'react-redux'

import Cycle from '../cycle'

import './cycles.scss'

const Cycles = ({ cycles }) => {


    console.log(cycles)
    return (
        <div className='cycles'>
            Cycles
            <div className='cutter'>
                {cycles.map(cycle => {
                    return (
                        <Cycle
                            key={cycle.stringCode}
                            cycleName={cycle.stringCode}
                            promptString={cycle.name}
                        />)
                })}
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    cycles: state.cycles
})

//export default Cycles
export default connect(mapStateToProps)(Cycles)