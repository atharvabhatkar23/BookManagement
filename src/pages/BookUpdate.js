import React, { useState,useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import BookService from '../service/BookService';


export default function BookUpdate() {


  const [formdetails,setformdetails] = useState({id:"",name:"",price:"",author:""})
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(()=>{
    setformdetails({...location.state.edbook})
  },[])

  const handlechange = (e)=>{
    let {name,value} = e.target;
    setformdetails({...formdetails,[name]:value})
  }
  const editbook = ()=>{
    BookService.editbook(formdetails)
    navigate("/table")
  }

  return (
    <div>
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
  
  <button type="button" className="btn btn-primary" onClick= {editbook}>Submit</button>
</form>


    </div>
  )
}
