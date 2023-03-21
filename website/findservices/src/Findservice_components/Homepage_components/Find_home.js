/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import FindService_logo from './Logo';
import Login from './Login';
import Search from './Search';
import Items from './Items';
import Register_big from './Register_big';

class Homepage extends Component {
    render() {
        return ( 
            <div className = "mainpage" >
                <FindService_logo />
                <Login />
                <Search />
                <Items />
                <Register_big />
                <div className='copyright'>COPYRIGHT 2019. STRATEGY SOLUTIONS CONSULT</div>
            </div>
        );
    }
}

export default Homepage;