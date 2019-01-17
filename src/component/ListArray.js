import React, { Component } from 'react';

class ListArray extends Component {
    render() {
   
        const list = this.props.mang.map(function(item){
            return(
                <tr>
                    <td>{item}</td>
                </tr>
            )
        })
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default ListArray;