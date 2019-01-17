import React, { Component } from 'react';

class HienThiNut extends Component {
    constructor(props){
        super(props)
this.xulyNut = this.xulyNut.bind(this)
    }
    xulyNut(){
        if(this.props.truyen === true) {
            return <div className="btn btn-block btn-outline-info" onClick={this.props.ketnoi}>{this.props.truyen ? "Add" : "Close"}</div>
        }
        else{
            return <div className="btn btn-block btn-outline-secondary" onClick={this.props.ketnoi}>{this.props.truyen ? "Add" : "Close"}</div>
        }
        
    }
    render() {
        return (
            <div>
               {this.xulyNut()} 
               
            </div>
        );
    }
}

export default HienThiNut;