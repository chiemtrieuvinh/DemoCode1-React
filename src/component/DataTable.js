import React, { Component } from 'react';

class DataTable extends Component {
  constructor(props){
    super(props)
    this.state={
    }
    this.chuyendoiPermission = this.chuyendoiPermission.bind(this)
    // this.handleEditClickButton = this.handleEditClickButton.bind(this)

  }  

  chuyendoiPermission(id){
      if(id === 1){
        return "Admin"
      }
      else if (id === 2){
        return "Moderator"
      }
      else {
        return "Normal user"
      }
    }
  //   handleEditClickButton(id){
  //       const selectedUser = this.state.result.find((item)=>{
  //         return item.id === id
  //       })
  //      this.setState({
  //        selectedUser1: selectedUser
  //      })
  //      console.log(selectedUser)
  
  // }

    render() {
     
      const list = this.props.truyendata.map(function(value){
        return  (
        <tr key={value.id}>
        <td >{value.id}</td>
        <td>{value.name}</td>
        <td>{value.phone}</td>
        <td>{this.chuyendoiPermission(value.permission)}</td>
        <td>
        <div className="btn-group">
        <button className="btn btn-warning sua" onClick={()=>this.props.layidturow(value.id)}>Edit</button>
        <div className="btn btn-danger xoa" onClick={()=>this.props.deletebutton(value.id)}>delete</div>
        </div>
        </td>
      </tr>)
      }.bind(this))
        return (
            <div>
            
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>PhoneNumber</th>
              <th>Privillege</th>
              <th>Actions</th>
              <th />
            
            </tr>
            {list}
           
          </thead>
          <tbody>
           
       
          </tbody>
        </table>
      </div>
         
        );
    }
}

export default DataTable;