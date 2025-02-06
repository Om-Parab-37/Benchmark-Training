const bookLibrary = {
    books:[
        { title: "The God of Small Things", author: "Arundhati Roy", yearPublished: 1997 },
        { title: "Gitanjali", author: "Rabindranath Tagore", yearPublished: 1910 },
        { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", yearPublished: 1999 }
    ],
    addBook:function(title,author,yearPublished){
        this.books.push({title,author,yearPublished})
        console.log(`${author}'s book ${title} is added to Library`)
    },
    getBooksByAuthor:function(author){
        return this.books.filter(book=>book.author==author)
    },
    removeBook:function(title){
        this.books.splice(this.books.indexOf(this.books.find(book=>{
            if(book.title===title) return true
        })),1
    )
    },
    getAllBooks:function(){
        return this.books.map(book=>book.title)
    }
}
console.log(bookLibrary.getAllBooks())
bookLibrary.addBook("My Book","Om Parab",2025)
console.log(bookLibrary.getBooksByAuthor("Om Parab"));
console.log(bookLibrary.getAllBooks())
bookLibrary.removeBook("Gitanjali")
console.log(bookLibrary.getAllBooks())

 