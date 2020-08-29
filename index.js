class Book{
    constructor(bookname,bookauthor,bookisbn){
        this.bookname=bookname;
        this.bookauthor=bookauthor;
        this.bookisbn=bookisbn;
    }
}
class user_interface{
    bookadd(book){
        const tabl=document.getElementById("booklist");
        const rows=document.createElement("tr");
        rows.innerHTML=`
        <td>${book.bookname}</td>
        <td>${book.bookauthor}</td>
        <td>${book.bookisbn}</td>
        <td><a href="#" class="delete">&times</a></td>
        `;
        tabl.appendChild(rows);
    }
    bookremove(){

    }
    bookcount(){

    }
    time_out(){

    }
    message_show(){

    }
    formclear(){

    }

}
document.getElementById("bookform").addEventListener("submit",function(e){
    const bookname=document.getElementById("txtbookname").value,
          bookauthor=document.getElementById("txtbookauthor").value,
          bookisbn=document.getElementById("txtbookisbn").value;
    const book=new Book(bookname,bookauthor,bookisbn);
    const u_interface=new user_interface();
    
    if(bookname!="" && bookauthor!="" && bookisbn!=""){
        u_interface.bookadd(book);
        document.getElementById("result").innerHTML="Successfully";
    }
    else{
        document.getElementById("result").innerHTML="Please do not leave blank fields!!!";
    }
    
    e.preventDefault();
});

document.getElementById("booklist").addEventListener("click",function(e){
e.preventDefault();
});