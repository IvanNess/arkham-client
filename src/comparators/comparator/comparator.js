import React from 'react'
import {connect} from 'react-redux'

import ComparatorChoices from './comparator-choices'
import AddSign from './add-sign'

import './comparator.scss'

const Comparator = ({name, stringCode, values, choices, chosen, add, open}) =>{

    return(
        <div className={`comparator`}>
            <div className='comparator-name'>
                {name}
            </div>
            <ComparatorChoices choices={choices[0]} chosen={chosen[0]} stringCode={stringCode} isMain={true} open={open[0]}/>
            {/* <ComparatorDisplay value={values[0]}/> */}
            <AddSign add={add} stringCode={stringCode}/>
            {add==='-' && (
                <div className='added'>
                    <ComparatorChoices choices={choices[1]} chosen={chosen[1]} stringCode={stringCode} isMain={false}  open={open[1]}/>
                    {/* <ComparatorDisplay value={values[0]}/> */}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) =>({

})

export default connect(mapStateToProps)(Comparator)