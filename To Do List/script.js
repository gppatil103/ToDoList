const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//to add li element (text)
function addTask(){
     if(inputBox.value == ''){
          alert("you must write something!!!");
     }
     else{
          let li = document.createElement("li");
          li.innerHTML = inputBox.value;
          listContainer.appendChild(li);

     // for cross sign
     let span = document.createElement("span");
     span.innerHTML = "\u00d7"; //code for cross icon
     li.appendChild(span);
     }

     //to clear the search box afetr adding text
     inputBox.value = "";
     //saveData fucntion calling to save data in browser
     saveData();
}

//javaScript for click function
listContainer.addEventListener("click", function(e){
     if(e.target.tagName === "LI"){
          e.target.classList.toggle("checked");
          saveData();
     }
     else if(e.target.tagName === "SPAN"){
          e.target.parentElement.remove(); //it deletes parent element which is li
          saveData();
     }
}, false); 


//to store the task on browser
function saveData(){
     localStorage.setItem("data", listContainer.innerHTML);
}

//to show list whenever we open browser
function showTask(){
     listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

