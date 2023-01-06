

//In the js file, create an array called allBooks. This is an array of objects. 
//Each object is a book that has 4 keys (ie. 4 properties) :
//title,
//author,
//image : a url,
//alreadyRead : which is a boolean (true or false).

const allBooks = [
   {
      title : "HarryPotter",
      author: "JKRolling",
      image : "https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2022/11/harry-potter-logo-big__w1200.jpg",
      alreadyRead : true 
   },
   {
    title : "Lord of the ring",
    author: "Tolkien",
    image : "https://assets-prd.ignimgs.com/2022/05/16/lotrfellowship-1652740286087.jpg?width=300&crop=1%3A1%2Csmart&dpr=2",
    alreadyRead : false
   }
];
//to select the div 
const listBooksDiv = document.querySelector('.listBooks');


// Create the table element
const table = document.createElement('table');
table.setAttribute("style" , "margin-left: 30%")

// Add the table to the div
listBooksDiv.appendChild(table);


allBooks.forEach(book=> {
   // Create a row for the book
   const row = document.createElement('tr');

   // Add the title and author cells to the row
   row.innerHTML = book.title + " written by" + " " + book.author;

   // Create the image cell and add it to the row
   const imgCell = document.createElement('td');
   const img = document.createElement('img');
   img.src = book.image;
   img.style.width = '100px';
   imgCell.appendChild(img);
   row.appendChild(imgCell);

   // If the book has been already read, set the text color to red
   if (book.alreadyRead) {
       row.style.color = 'red';
   }

   // Add the row to the table
   table.appendChild(row);
});


 