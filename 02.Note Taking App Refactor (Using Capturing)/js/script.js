let input = document.querySelector(".form-control");
let colors = document.querySelectorAll(".color-box");
let saveBtn = document.getElementById("btn-save");
let deleteBtn = document.getElementById("btn-delete");
let noteList = document.getElementById("listed");

function createNote() {
  if (input.value) {
    let noteP = document.createElement("p");
    noteP.className = "card-text p-3";
    noteP.innerHTML = input.value;

    let noteDiv = document.createElement("div");
    noteDiv.className = "card shadow-sm rounded";
    noteDiv.append(noteP);
    noteDiv.style.backgroundColor = input.style.backgroundColor;
    noteList.append(noteDiv);

    noteDiv.addEventListener("click", function () {
      noteDiv.remove();
    });

    input.value = "";
    input.style.backgroundColor = "#FFF";
  }
}

colors.forEach(function (color) {
  color.addEventListener("click", function () {
    input.style.backgroundColor = color.style.backgroundColor;
  });
});

function createNoteEnter(event) {
  if (event.key === "Enter") {
    createNote();
  }
}

function clearInput() {
  input.value = "";
  input.style.backgroundColor = "#FFF";
}

saveBtn.addEventListener("click", createNote);
window.addEventListener("keydown", createNoteEnter);
deleteBtn.addEventListener("click", clearInput);
