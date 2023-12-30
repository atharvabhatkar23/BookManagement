 class BookService {
    constructor(){
        this.bookArray = [{id:1,name : "LifeOfDhundi",price:99, author:"Shweta" },
                          { id:2,name : "GOT",price:199, author:"Martin"},
                            {id:3,name:"CHampak",price:275, author: "Tyrion"}]                                    
    }

    getAllBook(){
        return this.bookArray
    }
    insertBook(book){
         this.bookArray.push(book)
    }
    editbook(book){
        let position = this.bookArray.findIndex((b)=>b.id===book.id)
        this.bookArray.splice(position,1,book)
    }
    deletebook(book){
        let position = this.bookArray.findIndex((b)=>b.id===book.id)
        this.bookArray.splice(position,1)
    }


 }

 export default new BookService ;