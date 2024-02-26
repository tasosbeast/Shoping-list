var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liElements = document.querySelectorAll("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.addEventListener("click", doneTask);
  createDeleteButton(li);

  input.value = "";
}

function createDeleteButton(liElements) {
  var buttonDelete = document.createElement("button");
  liElements.appendChild(buttonDelete);
  buttonDelete.appendChild(document.createTextNode("X"));
  buttonDelete.style.margin = "10px";
  buttonDelete.style.backgroundColor = "red";
  buttonDelete.style.color = "white";
  buttonDelete.style.borderRadius = "5px";
  buttonDelete.style.cursor = "pointer";
  buttonDelete.style.boxShadow = "0 0 5px 0 rgba(0, 0, 0, 0.5)";
  buttonDelete.style.fontSize = "10px";
  buttonDelete.style.fontWeight = "bold";
  buttonDelete.style.padding = "5px 10px";

  buttonDelete.addEventListener("click", function () {
    deleteTask(liElements);
  });
}

function doneTask() {
  this.classList.toggle("done");
}

function deleteTask(liElements) {
  ul.removeChild(liElements);
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener("click", doneTask);
  createDeleteButton(liElements[i]);
}
