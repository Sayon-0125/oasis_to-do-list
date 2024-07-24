const inputBox=document.getElementById("input-box")
const listContainer=document.getElementById("list-group")

function addTask(){
    if(inputBox.value===''){
        alert("task cannot be empty")
        inputBox.value=""
    } 
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value=""
    saveData();
}

listContainer.addEventListener("click", (e) =>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove("checked");
        saveData();
    }
}, false);

inputBox.addEventListener("keypress", (e) =>{
    //if(e.key==="Enter") document.getElementById("btn").click();
    if(e.key==="Enter") addTask();
}, false);

function saveData(){
    localStorage.setItem("data2", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data2");
}
showTask();

