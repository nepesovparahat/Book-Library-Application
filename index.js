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
        <td><a href="#" class="delete">X</a></td>
        `;
        tabl.appendChild(rows);
    }
    bookremove(target){
if(target.className==="delete"){
    target.parentNode.parentNode.remove();
}
    }
    bookcount(){
    const tabl=document.getElementById("booklist");
    var bookcount=document.getElementsByTagName("tr").length-1;
    document.getElementById("result").innerHTML="Ther is "+bookcount+ " book";

    }
    time_out(){

    }
    message_show(message,className){
        const message_box=document.createElement("div");
        message_box.className=`alert ${className}`;
        message_box.appendChild(document.createTextNode(message));
        const container=document.querySelector(".container");
        const form=document.querySelector("#bookform");
        container.insertBefore(message_box,form);
        setTimeout(()=>{
            document.querySelector(".alert").remove();
        },2000);

    }
    formclear(){
        document.getElementById("txtbookname").value="";
        document.getElementById("txtbookauthor").value="";
        document.getElementById("txtbookisbn").value="";

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
        u_interface.bookcount();
        u_interface.message_show('Book successfully added','success');
     
        u_interface.formclear();
    }
    else{
        

            
        u_interface.message_show('Please fill in all fields!','error');
        
        
    }
    
    e.preventDefault();
});

document.getElementById("booklist").addEventListener("click",function(e){
    const u_interface=new user_interface();
    u_interface.bookremove(e.target);
    u_interface.bookcount();
    u_interface.message_show('Book deleted successfully','success');
e.preventDefault();
});