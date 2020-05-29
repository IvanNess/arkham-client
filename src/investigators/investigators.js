import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Investigator from './investigator'

import './investigators.scss'

const Investigators = ({ faction, showed, investigators }) => {

    console.log(showed, faction)

    const [show, setShow] = useState(false)
    const [none, setNone] = useState(false)
    const [hide, setHide] = useState(false)
    const [full, setFull] = useState(false)


    useEffect(() => {
        console.log(showed, faction)

        setShow(showed[faction].show)
        setNone(showed[faction].none)
        setHide(showed[faction].hide)
        setFull(showed[faction].full)

    }, [showed])

    const investigatorsClassnames = classNames({ 'investigators': true, show, none, hide, full, [faction]: true })

    const filteredInvestigators = faction==='all'? investigators: investigators.filter(investigator=>investigator.faction===faction)

    console.log('filtered', filteredInvestigators)

    return (
        <div className={investigatorsClassnames}>
            Investigators
            <div className='nested '>
                {filteredInvestigators.map(investigator=>{
                    return(
                        <Investigator 
                            key={investigator.stringCode}
                            code={investigator.stringCode} 
                            name={investigator.name}
                            faction={investigator.faction}
                            isSelected={investigator.isSelected}
                        />
                    )
                })}
            </div>
            <div className="ending-div">
                End
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    showed: state.showed,
    investigators: state.investigators
})

const mapDispatchToProps = ({})

export default connect(mapStateToProps, mapDispatchToProps)(Investigators)