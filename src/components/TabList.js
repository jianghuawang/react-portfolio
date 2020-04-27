import React, { Component } from 'react'
import Tab from './Tab'
export default class TabList extends Component {
    render() {
        return this.props.tabs.map((tab) =>(
            <Tab tab={tab} key={tab.id} changeTab={this.props.changeTab} activeTab={this.props.activeTab}/>
        ));
    }
}
