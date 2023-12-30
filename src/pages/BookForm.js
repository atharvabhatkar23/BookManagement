import React, { useState } from 'react'
import './Form.css'
import BookService from '../service/BookService';
import {  useNavigate } from 'react-router-dom';
export default function BookForm() {
    const [formdetails,setformdetails] = useState({id:"",name:"",price:"",author:""})
    const navigate = useNavigate();
    const handlechange = (e)=>{
      let {name,value} = e.target;
      setformdetails({...formdetails,[name]:value})
    }

    const  addbook =  ()=>{
        if(formdetails.id==="" || formdetails.name==="" || formdetails.price==="" || formdetails.author==="" )
      {
        alert("Please add valid value")
        return;
      }
      else{
        BookService.insertBook(formdetails)
        setformdetails({id:"",name:"",price:"",author:""})
        navigate("/list")
      }
    }
  return (
    <div >
      <form >
  <div className="mb-3">
    <label htmlFor="id" className="form-label">Id</label>
    <input type="text" className="form-control" id="id" name="id" value={formdetails.id} onChange={handlechange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Book Name</label>
    <input type="text" className="form-control" id="name" name="name"  value={formdetails.name} onChange={handlechange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="price" className="form-label">Price</label>
    <input type="text" className="form-control" id="price" name="price" value={formdetails.price} onChange={handlechange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="author" className="form-label">Author</label>
    <input type="text" className="form-control" id="author" name="author" value={formdetails.author} onChange={handlechange}/>
    
  </div>
  
  <button type="button" className="btn btn-primary" onClick= {addbook}>Submit</button>
</form>

  </div>
  )
}
