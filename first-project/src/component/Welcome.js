import React, {Component} from 'react';

class Welcome extends Component{
    constructor(){
        super();
        this.state = {
            count = 0
        }
    }
    render(){
        return(
            <div>
            <h1>Welcome {this.props.name}</h1>
            <p>Mon compteur : {this.state.count}</p>
            </div>
        );
    }
}

export default Welcome;