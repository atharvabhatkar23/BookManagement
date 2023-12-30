import React from "react";
import BookService from '../service/BookService.js'
export default function BookList() {
  let bookList = BookService.getAllBook();
  return (
    <div>
      <ul  className="list-group">

        {bookList.map(book=>  <li className="list-group-item">{book.id} - {book.name} -   {book.author}</li>  )}
    
      </ul>
    </div>
  );
}
