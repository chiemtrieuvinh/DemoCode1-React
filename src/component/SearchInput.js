import React, { Component } from 'react'

class SearchInput extends Component {
    constructor(props){
        super(props)
        this.state={
            tempValue: ''
        }
    this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        event.preventDefault();
        this.setState({
            tempValue : event.target.value

        })
        this.props.change(this.state.tempValue)
    }
    render() {
        console.log(this.state.tempValue)
        return (
            <div className="form-group">
          
            <div className="btn-group">
            <form onSubmit={this.props.nut}>
              <input  className="form-control" onChange={this.handleChange} name="tempValue" value={this.tempValue}  aria-describedby="helpId" style={{width:500}} type="text" />
             <button className="btn btn-info" onClick={(dl)=>this.props.change(this.state.tempValue)}>Search</button>
              </form>
            </div>
          </div> 
        );
    }
}

export default SearchInput;
