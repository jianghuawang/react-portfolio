import React, { Component } from 'react'

export default class Message extends Component {
    addStyle=()=>{
        if(this.props.message.visibility==='false'){
            return{display:'none'}
        }
        else
            return{display:'block'}
    }
    render() {
        return (
            <div style={this.addStyle()}>
                <p className='message-time'>{this.props.message.time}</p>
                <p className='message-name'>{this.props.message.name}</p>
                <p className='message-description'>{this.props.message.description}</p>
                <p className='message-comment'>{this.props.message.comment}</p>
            </div>
        )
    }
}
