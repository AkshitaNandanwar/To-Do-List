let input = document.querySelector(".todo-input"); // access input.
let btn = document.querySelector(".todo-button"); // access sumbit btn
let todoList =document.querySelector(".todo-list") //access list 

btn.addEventListener("click",function(e){
   e.preventDefault();
   console.log(input.value);

   let list = document.createElement("li"); //acreate li
   let complete = document.createElement("button")//create complete btn
   list.innerText=input.value; //list madhe value det aahe i/p ch
   complete.innerText ="complete";
   list.appendChild(complete);

    let dl = document.createElement("button"); //creat delete btn
    dl.innerText ="delete";
    list.appendChild(dl);
   todoList.appendChild(list);

   dl.addEventListener("click",function(){
      list.remove();
   })

   complete.addEventListener("click",function(){
      list.classList.toggle("drawline");
   })

   input.value="";
})
