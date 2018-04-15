var draggables = document.querySelectorAll('.left .outer .card');
console.log(draggables);
var droppables = document.querySelectorAll('.right .outer');


for (var draggable of draggables) {
    draggable.ondragstart = function (e) {
        console.log(e.target);
        e.target.classList.add("dragging");
    };
    draggable.ondragend = dragEnd;
}


for (var droppable of droppables) {
    droppable.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
}

for (var droppable of droppables) {
    droppable.addEventListener("drop", function (e) {
        var dragged = document.querySelector(".dragging");
        e.target.appendChild(dragged);

    })
}
function dragEnd(e) {
    e.target.classList.remove("dragging");
}
