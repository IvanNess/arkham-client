import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import Faction from '../faction'
import Investigators from '../investigators'

import './faction-bar.scss'

const FactionBar = ({ showed, factions }) => {

    let currentFaction = null
    for (const key in showed) {
        if (showed.hasOwnProperty(key)) {
            if (showed[key].show || showed[key].full || showed[key].hide){
                currentFaction = key
                break
            } else{
                currentFaction = currentFaction
            }
        }
    }

    return (
        <div className='faction-bar'>
            FactionBar

            <div className='faction-menu'>
                {factions.map(faction=>{
                    return(
                        <Faction 
                            faction={faction.stringCode}
                            name={faction.name}
                        />
                    )
                })}
            </div>

            <div className={`cutter ${currentFaction}`}>
                <Investigators faction='guardian'/>
                <Investigators faction='seeker'/>
                <Investigators faction='survivor' />
                <Investigators faction='mystic' />
                <Investigators faction='rogue' />
                <Investigators faction='all' />
            </div>

            <div className="ending-div">
                End
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    showed: state.showed,
    factions: state.factions
})

export default connect(mapStateToProps)(FactionBar)