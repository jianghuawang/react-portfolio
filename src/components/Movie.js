import React, { Component } from 'react'

export default class Movie extends Component {
    render() {
        return (
            <div className='movie-image'>
                <img className='modal-custom' src={this.props.movie.Poster} alt='' onClick={this.props.enlarge.bind(this,this.props.movie)}/>
            </div>
        )
    }
}
