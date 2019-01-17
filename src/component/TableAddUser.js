import React, { Component } from 'react';
import AddUsers from './AddUsers.js'
class TableAddUser extends Component {
    constructor(props){
        super(props)
        this.HienThiTable = this.HienThiTable.bind(this)
    }
    HienThiTable(){
        if(this.props.truyenstate === true){
            return <AddUsers truyenuser={(nguoidung) => this.props.layuser(nguoidung)} truyencholopcon={this.props.truyenuserstate}/>
        }
    }
    
    render() {
       
        return (
            
            <div className="col">
            <div className="card border-primary mb-3 mt-3" style={{maxWidth: '18rem'}}>
                {this.HienThiTable()}
            </div>
            </div>
          
        );
    }
}

export default TableAddUser;