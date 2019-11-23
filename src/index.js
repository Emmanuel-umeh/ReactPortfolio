import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Component} from 'react'
import Portfolio from './components/Portfolio';
import * as serviceWorker from './serviceWorker';
import PortfolioHeader from './components/Portfolio';
import PortfolioBody from './components/PortfolioBody';
import Slideshow from './components/slideshow.js'
import Sections from './components/sections.js'


class Website extends Component{


    render(){
        // display =()=>{
        //     RE
        //     setTimeout({
                
        //     })

        // }
        
        return(<div>
            <PortfolioHeader />
            <PortfolioBody/>
            <Slideshow/>
            <Sections/>
            </div>
           


        )
    }
}

ReactDOM.render(<Website />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
