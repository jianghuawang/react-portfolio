import React, { Component } from 'react'
import Home from './Home.js'
import Images from './Images.js'
import Videos from './Videos.js'
import Projects from './Projects.js'
export default class Body extends Component {
    displayContent=()=>{
        var activeTab=this.props.activeTab
        if(activeTab === 1)
            return <Home/>
        else if(activeTab === 2)
            return <Images/>
        else if(activeTab === 3)
            return <Videos/>
        else
            return <Projects/>
    }
    render() {
        return (
            this.displayContent()
        );
    }
}
