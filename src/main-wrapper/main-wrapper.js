import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import './main-wrapper.scss'

const MainWrapper = ({children, investigators})=>{
    let factions =''
    
    investigators.forEach(investigator => {
        if(investigator.isSelected)
            factions += investigator.faction + " "
    });

    return(
        <div className={`main-wrapper ${factions}`}>
            {[...children]}
        </div>
    )
}

const mapStateToProps = state =>({
    investigators: state.investigators

})

export default connect(mapStateToProps)(MainWrapper)