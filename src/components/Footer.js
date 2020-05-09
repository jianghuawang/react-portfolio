import React, { Component } from 'react'
import github from '../images/github-logo.png'
import linkedin from '../images/linkedin.png'
export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <img src={github} alt=""/>
                <img src={linkedin} alt=""/>
            </div>
        )
    }
}
