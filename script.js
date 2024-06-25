const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
document.addEventListener("DOMContentLoaded", function() {
    showTask();
});

function addTask(){
    if(inputBox.value===''){
        alert("You must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = '';
    

}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
        
    }
},false)

//For Storing in Local Storage
function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}
//For Getting Data from local Storage -> It will give all the content which stores in browser with name 'data'
function showTask() {
    if (localStorage.getItem("data")) {
        listContainer.innerHTML = localStorage.getItem("data");
    }
}
