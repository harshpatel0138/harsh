let toDoSpace = document.getElementById('toDoSpace');
let saveBtn = document.getElementById('save');
let result = "";

let toDoList = ["Wake up.", "Get ready.", "Work", "Dinner", "Sleep", "Watch TV", "play Cricket"];

result = "<ul class='list-group'>";

for (let i = 0; i < toDoList.length; i++) {
    result += "<li class='list-group-item text-dark border-bottom'>" + (i + 1) + ". " + toDoList[i] + "</li>";

}

result += "</ul>";
// console.log(result);
toDoSpace.innerHTML = result;


saveBtn.addEventListener("click", function () {
    let input = document.getElementById("input").value;
    console.log(input + " is received.");
    if (input != "") {
        toDoList.push(input);

    }
    result = "<ul class='list-group'>";

    for (let i = 0; i < toDoList.length; i++) {
        result += "<li class='list-group-item text-dark border-bottom'>" + (i + 1) + ". " + toDoList[i] + "</li>";

    }

    result += "</ul>";

    toDoSpace.innerHTML = result;

});

