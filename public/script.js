let taskCount = 0;

function updateCounter() {
document.getElementById("taskCount").innerText = taskCount;
}

function addTask() {

const taskInput =
document.getElementById("taskInput");

const priority =
document.getElementById("priority").value;

const dueDate =
document.getElementById("dueDate").value;

if(taskInput.value.trim()===""){
alert("Enter a task");
return;
}

const taskCard =
document.createElement("div");

taskCard.className = "task-card";

taskCard.innerHTML = `

<h4>${taskInput.value}</h4>

<p><strong>Priority:</strong> ${priority}</p>

<p><strong>Due Date:</strong> ${dueDate}</p>

<button onclick="moveToProgress(this)">
Start
</button>

<button onclick="moveToCompleted(this)">
Complete
</button>

<button onclick="deleteTask(this)">
Delete
</button>

<br><br>

<input
class="comment-box"
placeholder="Add comment">

<button onclick="addComment(this)">
Comment
</button>

<div class="comments"></div>

`;

document
.getElementById("todoBoard")
.appendChild(taskCard);

taskInput.value = "";

taskCount++;
updateCounter();
}

function moveToProgress(btn){

const card = btn.parentElement;

document
.getElementById("progressBoard")
.appendChild(card);
}

function moveToCompleted(btn){

const card = btn.parentElement;

document
.getElementById("completedBoard")
.appendChild(card);
}

function deleteTask(btn){

btn.parentElement.remove();

taskCount--;

updateCounter();
}

function addComment(btn){

const card =
btn.parentElement;

const input =
card.querySelector(".comment-box");

const comments =
card.querySelector(".comments");

if(input.value.trim()!==""){

const p =
document.createElement("p");

p.textContent =
"💬 " + input.value;

comments.appendChild(p);

input.value="";
}
}