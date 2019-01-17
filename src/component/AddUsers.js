import React, { Component } from 'react';

class AddUsers extends Component {
    constructor(props){
      super(props);
      this.state={
        userForm : {
          id: 0,
          name: "",
          phone: "",
          permission: 0
        }
      }
      this.CurrentId = 0
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }
    handleChange(event){
      event.preventDefault();
      this.setState({
        userForm: Object.assign({},this.state.userForm,{
          [event.target.name] : event.target.value
        })
      })
    }
    
    handleSubmitForm(event){
     
      event.preventDefault()
      this.setState({
        userForm: {
          id:0,
          name: "",
          phone: "",
          permission: 0
        }
      })
     
    }
    render() {
     
        return (
            <div>
            <div className="card-header">ADD NEW USERS</div>
            <div className="card-body text-primary">
            <form onSubmit={this.handleSubmitForm}>
              <div className="form-group">
                <label >Ten:</label>
                <input className="form-control"   aria-describedby="helpId" placeholder="Ten" type="text" value={this.state.userForm.name} name="name" onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label >Phone:</label>
                <input className="form-control"   aria-describedby="helpId" placeholder="PhoneNUmber" type="number" value={this.state.userForm.phone} name="phone" onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <div className="form-group">
                  <label >Chon quyen</label>
                  <select className="form-control" type="number" value={this.state.userForm.permission} name="permission" onChange={this.handleChange}>
                    <option>Chon quyen</option>
                    <option value={1} >Admin</option>
                    <option value={2} >Moderator</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
               <button className="btn btn-info" onClick={(nguoidung)=>this.props.truyenuser(this.state.userForm)}>submit</button>
              </div>
              </form>
            </div>
          </div>
    
        );
    }
}

export default AddUsers;