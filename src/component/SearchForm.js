import React, { Component } from 'react';
import DataTable from './DataTable.js'
import HienThiNut from './HienThiNut.js';
import TableAddUser from './TableAddUser.js'
import db from './dulieu.json'
import SearchInput from './SearchInput.js';
import EditUser from './EditUser.js'
let uuidv1 = require("uuid/v1");
// import ListArray from './ListArray.js'
// let uuidv1 = require("uuid/v1");
class SearchForm extends Component {
    constructor(props){
        super(props)
        this.state={
            hienthinut: true,
            name: '',
            data : db,
            array: [],
            searchText: '',
            users: '',
            row:'',
           useredit:'',
            userinfo: '',
            hienthiedit: false
        }
        // this.handleClickChangeButton = this.handleClickChangeButton.bind(this)
        this.handleButton = this.handleButton.bind(this)
        // this.renderAddtable = this.renderAddtable.bind(this)
        this.TestNut = this.TestNut.bind(this)
        this.getSearch = this.getSearch.bind(this)
        this.HandleSubmitButton = this.HandleSubmitButton.bind(this)
        this.getUser = this.getUser.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleGetId = this.handleGetId.bind(this)
        this.handleEditClickButton = this.handleEditClickButton.bind(this)
        this.handleShowEdit = this.handleShowEdit.bind(this)
        this.handleChangeEdit = this.handleChangeEdit.bind(this)
        this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleChange(event){
       
        this.setState({
            userinfo : Object.assign({},this.state.userinfo,{
                [event.target.name] : event.target.value
            })
        })
    }
    handleSubmitUpdate(event){
        event.preventDefault();
        this.setState({      
           
            data : this.state.data.map(function(item){
                if(item.id !== this.state.userinfo.id){
                   
                    return item
                }
                else{
                   return{
                            id: this.state.userinfo.id,
                            name: this.state.userinfo.name,
                            phone: this.state.userinfo.phone,
                            permission: parseInt(this.state.userinfo.permission,20)
                        }
                }
            }.bind(this))
        })
        console.log(typeof(this.state.userinfo.permission))
        
    }
    handleDelete(id){
        const iddelete = this.state.data.filter((item)=>
            item.id !== id
        )
        this.setState({
            data : iddelete
        })
    }
    handleChangeEdit(){
       
        this.setState({
            hienthiedit : !this.state.hienthiedit
        })
       
       }
    
     handleEdit(edituserdata){
       
       
       }
    handleShowEdit() {
     
        if(this.state.hienthiedit === true){
          return <EditUser info = { this.state.userinfo} list1={this.state.data} functionedit={this.handleSubmitUpdate} functionchange={this.handleChange}/>
       
        }
     
    }


    handleEditClickButton(id){
        const selectedUser = this.state.data.find((item)=>{
          return item.id === id
        })
        this.setState({
       userinfo : selectedUser,
        hienthiedit : !this.state.hienthiedit,
       
        
      })
      
  
  }    
    handleGetId(layid){
       console.log('da lay dc' + layid)
    }
   
 
    handleButton(event){
        event.preventDefault();
        this.setState({
            hienthinut:!this.state.hienthinut
        })
    }
    TestNut(){
        alert('da nhan duoc du lieu !')
    }
    getSearch(dl){
        this.setState({
            searchText : dl
        })
    }
    HandleSubmitButton(event){
        event.preventDefault();
        this.setState({
           name: this.state.name
        })
       
    }
    getUser(nguoidung){
       
    var item = nguoidung
        item.id = parseInt(uuidv1(),20)
       item.permission = parseInt(nguoidung.permission,20)
    var items = this.state.data
        
        items.push(item)
        
       this.setState({
           data : items,
           
       })

    
   
    }

    // handleClickChangeButton()
    // {
    //     if(this.hienthinut === true){
    //         return <div className="btn btn-block btn-outline-secondary" onClick={this.handleButton}>{this.state.hienthinut ? "Add" : "Close"}</div>
    //     }
    //     else{
    //         return <div className="btn btn-block btn-outline-info" onClick={this.handleButton}>{this.state.hienthinut ? "Add" : "Close"}</div>
    //     }
        
    // }
    render() {
       
        var ketqua=[]
        this.state.data.forEach((item)=>{
            if(item.name.indexOf(this.state.searchText) !== -1){
                ketqua.push(item)
            }
       
        })
    //    console.log(ketqua)
    //    console.log(this.state.data)
        return (
            <div>
        <div className="searchForm">
            <div className="container">
           
             <div className="row">

                 <div className="col-12">
                 <div className="row">
                 <div className="col">
                   {this.handleShowEdit()}
                   
                     </div>
            </div>
            <SearchInput change={(dl)=> this.getSearch(dl)} ten={this.state.name} nut={this.HandleSubmitButton}/>
        {' '}<HienThiNut ketnoi={this.handleButton} truyen={this.state.hienthinut} />
             </div>
            
      <div className="col-12"><br /></div>
      <div className="col">
          <DataTable truyendata={ketqua} layidturow={this.handleEditClickButton} deletebutton={this.handleDelete} dataid={this.state.data} changeedit={this.handleChangeEdit}/>
        </div>
 {/* het col 9 */}
    
    
           
        
      {/* <button className="btn btn-block btn-outline-info" onClick={this.handleButton}>{this.state.hienthinut ? "Close" : "Add"}</button> */}

      {/* {this.handleClickChangeButton()} */}
      {/* cho nay de goi ham nut */}
      
     
        <div className="cacard-img-top" src="holder.js/100px180/" >
  
         <TableAddUser truyenstate={this.state.hienthinut} layuser={(nguoidung) => this.getUser(nguoidung)} truyenuserstate={this.state.userstate}/>   
          </div>
      </div>
      {/* <ListArray mang={this.state.array}/> */}
    
     
    </div>
    {/* het col 3 */}
  
  </div>  
</div>

          
        );
    }
}

export default SearchForm;