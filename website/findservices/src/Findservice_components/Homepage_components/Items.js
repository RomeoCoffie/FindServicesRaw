import React, { Component } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

class Items extends Component {
    render() {
        return ( 
            <div className = "background items" >
                <Tab1 />
                <Tab2 />
                <Tab3 />
            </div>
        );
    }
}

export default Items;