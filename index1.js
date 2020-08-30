const todos=[
    {title:'Table 1',description:'Call back test1'},
    {title:'Table 2',description:'Call back test2'},
    {title:'Table 3',description:'Call back test3'},
    
]
let todoListel=document.getElementById("todolist");

function todolist(){
    setTimeout(()=>{
        let todoitems= "";
        
        todos.forEach(item=>{
todoitems+=`
<li>
<b>${item.title}</b>
<p>${item.description}</p> 
</li>
`;
        })
        todoListel.innerHTML=todoitems;
    },1000)
    
}
function newtodo(todo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            todos.push(todo);
            const e = false;
            if(!e){
                resolve();
            }
            else{
                reject('hata var..');
            }
                },2000)
        
    })
    
}
newtodo({
    title:'Table 4',description:'callback test 4'
})
.then(response=>{
    console.log('yeni liste...',response);
    todolist();
})
.catch(e =>{
    console.log(e);
});
todolist();
