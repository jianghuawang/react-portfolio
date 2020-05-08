import React, { Component } from 'react'
import selfie from '../images/selfie.jpg'
export default class home extends Component {
    render() {
        return (
            <div className='home-content'>
                <img className="selfie" src={selfie} alt=""/>
                <p className='intro'>
                    Hi, I am Jianghua, a Machine Learning enthusiast, self-motivated engineering undergraduate.
                    I am currently pursuing my bacholar degree of Computer Science in the University Of California, Santa Barbara, and I am a Research Assistant under Professor Manjunath. My interests lie on Machine Learning, Cybersecurity and Computer Graphics.
                </p>        
            </div>
        )   
    }
}
