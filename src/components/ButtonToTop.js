import React, { Component } from 'react'
import icon from '../images/backtotop.png'
export default class ButtonToTop extends Component {
    backtoTop=()=>{
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }
    render() {
        return (
            <div>
                <button className="back" onclick={this.backtoTop}><img src={icon} alt=""/></button>
            </div>
        )
    }
}
