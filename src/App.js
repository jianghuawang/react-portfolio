import React, { Component } from 'react';
import TabList from './components/TabList.js';
import Body from './components/Body.js';
import ButtonToTop from './components/ButtonToTop.js'
import './App.css'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      activeTab:1
    }
    this.changeTab=(id)=>{
      this.setState({
          activeTab:id
        }
      )
    }
  }
  handleOverScroll(){
    var bttn=document.querySelector(".back");
    if(document.body.scrollTop>20|| document.documentElement.scrollTop>20){
        bttn.style.visibility="visible";
    }
    else{
        bttn.style.visibility="hidden";
    }
  }
  componentDidMount(){
    window.addEventListener('scroll',this.handleOverScroll)
  }
  render() {
    const tabs = [
      {
          id:1,
          title:'Home'
      },
      {
          id:2,
          title:'Images'
      },
      {
          id:3,
          title:'Videos'
      },
      {
        id:4,
        title:'Projects'
      }    
  ]
    return (
      <div className='body'>
          <div className="container">
            <div className='nav-bar'>
              <TabList tabs={tabs}
              changeTab={this.changeTab}
              activeTab={this.state.activeTab}/>
            </div>
          <div className="main-body">
            <Body activeTab={this.state.activeTab}/>
            <ButtonToTop/>
          </div>
        </div>
      </div>
    )
  }
}