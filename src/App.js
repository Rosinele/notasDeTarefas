import React, { Component } from 'react';
import Topo from './Topo'
import Taskboard from './Taskboard'
import Footer from './Footer'


class App extends Component{
    render(){
        return(
            <div>   
                <Topo/>
                <Taskboard/>
                <Footer/>
            </div>
        );
    }
}

export default App;