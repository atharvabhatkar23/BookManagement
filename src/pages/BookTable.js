import React, { useEffect, useState } from "react";
import BookService from "../service/BookService";
import { Link, useNavigate, useParams } from "react-router-dom";
import './search.css'
export default function BookTable() {
  const [bookarray, setbookarray] = useState([]);
  const [searcharray, setsearcharray] = useState([]);
  const [searchbook, setsearchbook] = useState("");
  const navigate = useNavigate();
  const param = useParams();
  // const [searcharray,setsearcharray] = useState([]);
  const fetchdata = () => {
    let newarr = BookService.getAllBook();
    setbookarray([...newarr]);
    setsearcharray([...newarr]);
  };
  useEffect(() => {
    console.log("in useeffect");
    fetchdata();
    // console.log(searcharray)
  }, []);
  useEffect(() => {
    if (searchbook !== "") {
      let newarr = bookarray.filter((b) => b.name.includes(searchbook));
      setsearcharray(newarr);
    } else {
      if (bookarray.length > 0) setsearcharray([...bookarray]);
    }
  }, [searchbook]);

  const deletebook = (b) => {
    if(window.confirm(`You are deleting a book!!\nDetails are as follows:\nBook Name:${b.name}\nAuthor:${b.author}\nARE YOU SURE`)){
      console.log("in if..............")
      BookService.deletebook(b)
      console.log("...........")
      fetchdata();

    }
  }

  return (
    <div>
      <input
        name="searchbook"
        id="searchbook"
        value={searchbook}
        onChange={(e) => setsearchbook(e.target.value)}
        placeholder="search a book"
      ></input> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    </svg>

      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col" colSpan={3}>Action</th>
          </tr>
        </thead>
        <tbody>
          {searcharray.map((book) => (
            <tr key={book.id}>
              <th scope="row">{book.id}</th>
              <td>{book.name}</td>
              <td>{book.price}</td>
              <td>{book.author}</td>
              <td> 
                <Link to={`/edit/${book.id}`} state={{edbook : book}}><button className="btn btn-warning"> Edit </button></Link> 
               
              </td>
              <td>
              <button className="btn btn-danger" onClick={()=>{deletebook(book)}}> Delete </button>
               
              </td>
              <td>
              <Link to={`/view/${book.id}`} state={{book}}><button className="btn btn-info"> View </button></Link> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/form">
        <button type="button" className="btn btn-primary">
          {" "}ADD NEW BOOK{" "}
        </button>
      </Link>
    </div>
  );
}
