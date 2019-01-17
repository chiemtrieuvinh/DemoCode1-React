import React, { Component } from 'react';

class EditUser extends Component {
    render() {
       
        return (
            <div>
             <div className="card-header bg-secondary">
            <div className="card-header bg-secondary">Edit  Users</div>
            <div className="card-body text-secondary">
            <form onSubmit={this.props.functionedit}>
              <div className="form-group">
                <label >Ten:</label>
                <input className="form-control" value={this.props.info.name} onChange={this.props.functionchange }aria-describedby="helpId" placeholder="Ten" type="text"name="name" />
              </div>
              <div className="form-group">
                <label >Phone:</label>
                <input className="form-control"   value={this.props.info.phone} onChange={this.props.functionchange } aria-describedby="helpId" placeholder="PhoneNUmber" type="number"  name="phone" />
              </div>
              <div className="form-group">
                <div className="form-group">
                  <label >Chon quyen</label>
                  <select className="form-control" value={this.props.info.permission} onChange={this.props.functionchange } type="number"  name="permission" >
                    <option>Chon quyen</option>
                    <option value={1} >Admin</option>
                    <option value={2} >Moderator</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
               <button className="btn btn-info" >
                >submit</button>
              </div>
              </form>
            </div>
            </div>
          </div>
        );
    }
}

export default EditUser;