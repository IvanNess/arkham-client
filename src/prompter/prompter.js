import React, { Component } from 'react'

import classNames from 'classnames'

import './prompter.scss'

const Prompter = () => (Wrapped) => {


    return class extends Component {
        state = {
            isShown: false,
            top: 0,
            left: 0
        }

        render() {

            const promptClassnames = classNames({
                prompt: true,
                isShown: this.state.isShown
            })

            const promptString = this.props.promptString

            return (
                <span
                    onMouseEnter={() => { this.setState({ isShown: true }) }}
                    onMouseLeave={() => { this.setState({ isShown: false }) }}
                    onMouseMove = {(e)=>{ 
                        this.setState({top: e.pageY+20, left: e.pageX-80})
                    }}
                >
                    <div 
                        className={promptClassnames}
                        style={{top: this.state.top, left: this.state.left}}
                    >
                        {promptString}
                    </div>
                    <Wrapped {...this.props} />
                </span>
            )
        }
    }
}

export default Prompter