const form = document.querySelector('form');
const input = document.querySelector('.form-control');
const msg = document.querySelector('.msg')
const ul = document.querySelector('ul');
const clear = document.querySelector('.btn-dark');


load();
function load(){
    form.addEventListener("submit", addTask);
    clear.addEventListener("click", clearTask);
    ul.addEventListener("click", deleteTask);
   
}

function addTask(e){
    if(input.value === " "){
        msg.innerHTML = "Please add a Task";
        msg.classList.add("error");

       setTimeout(function(){
        msg.innerHTML = ""
        msg.classList.remove("error");
       }, 1000)
    }
    else{
        msg.innerHTML = "Task Added Successfully";
        msg.classList.add("success");

       setTimeout(function(){
        msg.innerHTML = ""
        msg.classList.remove("success");
       }, 1000)
       
       const lists = document.createElement("li")
       lists.className = "list-group-item pe-3 me-0 mt-2  border-1 border-bottom border-black"
       lists.appendChild(document.createTextNode (input.value))

       const link = document.createElement('a')
       link.className = "float-end "
       link.innerHTML = '<i class="bi bi-trash-fill"></i>'

       lists.appendChild(link)
       ul.appendChild(lists)   
       
       input.value = " "
       e.preventDefault();

    }  
}

function clearTask(e){
    e.preventDefault();
    ul.innerText = " "

    msg.innerHTML = "Tasks Cleared Successfully";
        msg.classList.add("success");

       setTimeout(function(){
        msg.innerHTML = ""
        msg.classList.remove("success");
       }, 1000)
}

function deleteTask(e){
    if(e.target.parentElement.classList.contains ('float-end')){
        e.target.parentElement.parentElement.remove()

        msg.innerHTML = "Task Deleted Successfully";
        msg.classList.add("success");

       setTimeout(function(){
        msg.innerHTML = ""
        msg.classList.remove("success");
       }, 1000)

    }
}



