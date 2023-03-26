let doc = document.querySelector("body");
let libraryDisplay = document.querySelector(".main");
let addButton = document.querySelector(".add");
let popUp = document.querySelector(".popup-module");
let exitBtn = document.querySelector(".btn-close")
let submitBtn = document.querySelector(".btn-submit");
let formTitle = document.querySelector(".title-input");
let formAuthor = document.querySelector(".author-input");
let formPages = document.querySelector(".pages-input");
let formRead = document.querySelector("#read");
let myLibrary = [];
let bookCards = [];

function selectAdd(){
  popUp.style.display = "flex";

}
function exitForm(){
  popUp.style.display ="none";
  formTitle.value = "";
  formAuthor.value = "";
  formPages.value = "";
  formRead.checked = false;
}

  addButton.addEventListener('click',selectAdd);
  exitBtn.addEventListener('click', exitForm);
  submitBtn.addEventListener('click', addBookToLibrary);



function Book(title, author, pages, read)
{
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = -1;
  let readResult;
  if (read === true){
    readResult = "yes";
  }
  else{
    readResult = "no"
  }
  this.readResult =readResult;

  this.info = function() {
  return title + "by " + author + ", " + pages + ", pages, " + readResult;
  }
}
 

  function addBookToLibrary(event){
    event.preventDefault();
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookPages = document.getElementById("pages").value;
    let bookRead = document.getElementById("read").checked;
    let book = new Book(bookTitle, bookAuthor, bookPages, bookRead);



    myLibrary.push(book);
 
    let bookCard = document.createElement("div");
    bookCard.style.display = "flex";
    bookCard.style.backgroundColor = "#2DA675"
    bookCard.style.flexDirection = "column";
    bookCard.style.margin = "10%";
    bookCard.style.padding = "5%";
    bookCard.style.fontSize = "1.25rem";
    bookCard.style.border = "1px solid black";
    
 
    let closeBtn = document.createElement("button");
    closeBtn.className = "close-card"
    closeBtn.textContent = "+";
    closeBtn.style.transform = "rotate(45deg)";
    closeBtn.style.flex = "none";
    closeBtn.style.border= "none";
    closeBtn.style.alignSelf = "flex-end"
    closeBtn.style.background = "rgba(255, 255, 255, 0)";


    let editBtn = document.createElement("button");
    editBtn.className = "edit-Read"
    editBtn.setAttribute("read", book.readResult);
    editBtn.textContent = "Change Read Status";
    editBtn.style.alignSelf = "flex-end"


    let title = document.createElement("p");
    let author = document.createElement("p");
 
    let pages = document.createElement("p");
 
    let read = document.createElement("p");
    read.className = "read-status";
 
    title.textContent = "Title: " + book.title;
    author.textContent = "Author: " + book.author;
    pages.textContent = "Pages: " + book.pages;
    read.textContent = "Read: " + book.readResult;

    bookCard.appendChild(closeBtn);
    bookCard.appendChild(title); 
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(editBtn);

    libraryDisplay.appendChild(bookCard);
    book.index = myLibrary.length - 1;
    editBtn.setAttribute("index", book.index);
    closeBtn.value = book.index;
    bookCards.push(bookCard);


    closeBtn.addEventListener('click', removeBook)
    editBtn.addEventListener('click', changeReadStat);
    exitForm();

    function removeBook(e){
    console.log(e.target.value);
    let bookSelected = bookCards.at(e.target.value);
    bookSelected.remove();
    myLibrary.splice(e.target.value, 1);
    bookCards.splice(e.target.value, 1);
    for(let i = 0; i< bookCards.length; i++){
      if (myLibrary.at(i).index != i)
      {
        myLibrary.at(i).index = i;
        console.log(myLibrary.at(i).index);
        bookCards.at(i).querySelector(".close-card").value = i;
      } 
  

    console.log(myLibrary);
    console.log(bookCards);
    }

  }
  
  function changeReadStat(e){
    let index = e.target.getAttribute("index");
    if(e.target.getAttribute("read") == "no"){
      e.target.setAttribute("read", "yes");
    }
    else{
    e.target.setAttribute("read", "no");
    }
    let newRead = e.target.getAttribute("read");
    myLibrary.at(index).read = newRead;
    bookCards.at(index).querySelector(".read-status").textContent = "Read: " + newRead;

  }

  }







const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);