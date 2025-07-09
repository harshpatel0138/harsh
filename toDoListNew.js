const toDoSpace = document.getElementById('toDoSpace');
const saveBtn = document.getElementById('save');
const inputField = document.getElementById('input');

let toDoList = [
    "Wake up.",
    "Get ready.",
    "Work",
    "Dinner",
    "Sleep",
    "Watch TV",
    "Play Cricket"
];

// Function to render the to-do list
function renderList() {
    const listItems = toDoList.map((item, index) =>
        `<li class='list-group-item text-dark border-bottom'>${index + 1}. ${item}</li>`
    ).join("");
    toDoSpace.innerHTML = `<ul class='list-group'>${listItems}</ul>`;
}

// Initial rendering
renderList();

// Handle save button click
saveBtn.addEventListener("click", () => {
    const input = inputField.value.trim();

    if (input) {
        console.log(`${input} is received.`);
        toDoList.push(input);
        renderList();
        inputField.value = ""; // Optional: Clear the input after saving
    }
});
