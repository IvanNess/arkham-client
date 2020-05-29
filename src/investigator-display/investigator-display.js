import React from 'react'
import { connect } from 'react-redux'

import DisplayInvestigator from './display-investigator'
import './investigator-display.scss'

const InvestigatorDisplay = ({ investigators }) => {

    const filteredInvestigators = investigators.filter(investigator => investigator.isSelected)

    return (
        <div className='investigator-display'>
            <div className='investigator-display-main'>
                <div className='headline'>
                    Investigators:
                </div>
                <div className='flex-display-investigators'>
                    <div className='grid-display-investigators'>
                        {filteredInvestigators.map(investigator => {
                            return (
                                <DisplayInvestigator 
                                    key={investigator.code} 
                                    code={investigator.stringCode} 
                                    promptString={investigator.name}
                                />
                            )
                        })}
                    </div>

                </div>

            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    investigators: state.investigators
})

export default connect(mapStateToProps)(InvestigatorDisplay)

