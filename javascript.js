let libraryDisplay = document.querySelector(".main");

let myLibrary = [];

function Book(title, author, pages, read)
{
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = -1;
  let readResult = "Not read yet";
  if (read === true){
    readResult = "Read";
  }
  this.readResult =readResult;

  this.info = function() {
  return title + "by " + author + ", " + pages + ", pages, " + readResult;
  }
}

function addBookToLibrary(book){
   myLibrary.push(book);

   let bookCard = document.createElement("div");
   bookCard.style.display = "flex";
   bookCard.style.flexDirection = "column";
   bookCard.style.margin = "10%";
   bookCard.style.padding = "5%";
   bookCard.style.fontSize = "1.25rem";
   bookCard.style.border = "1px solid black"


   let title = document.createElement("p");
   let author = document.createElement("p");

   let pages = document.createElement("p");

   let read = document.createElement("p");


   title.textContent = "Title: " + book.title;
   author.textContent = "Author: " + book.author;
   pages.textContent = "Pages: " + book.pages;
   read.textContent = "Read: " + book.readResult;

   bookCard.appendChild(title); 
   bookCard.appendChild(author);
   bookCard.appendChild(pages);
   bookCard.appendChild(read);
   libraryDisplay.appendChild(bookCard);
   book.index = myLibrary.length - 1;
   bookCard.setAttribute("class", book.index);
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
