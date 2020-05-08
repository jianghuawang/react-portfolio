import React, { Component } from 'react'

export default class Tab extends Component {
    addStyling=()=>{
        if(this.props.tab.id === this.props.activeTab){
            return {color:'#2451f2'}
        }
        else{
            return {color:'#000'}
        }
    }
    render() {
        return (
            // <div className='tab' style={this.addStyling()} onClick={this.props.changeTab.bind(this,this.props.tab.id)}>
            //     <h2>{this.props.tab.title}</h2>
            // </div>
            <h2 className="navbar-item" style={this.addStyling()} onClick={this.props.changeTab.bind(this,this.props.tab.id)}>{this.props.tab.title}</h2>
        )
    }
}
