import React from 'react'
import {connect} from 'react-redux'

const AddSign = ({stringCode, add, addSignOnClick})=>{
    return(
        <div 
            className='add-sign'
            onClick={()=>addSignOnClick({add, stringCode})}
        >
            {add}
        </div>
    )
}

const mapStateToProps = state =>({

})

const mapDispatchToProps = {
    addSignOnClick: (props)=>({type: 'SIGN_CLICKED', payload: props})
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSign)