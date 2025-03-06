//your code here!
const listElement = document.getElementById("list");

// Add 10 list items by default
for (let i = 0; i < 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${i + 1}`;
    listElement.appendChild(listItem);
}

// Function to add more list items
function addMoreItems() {
    for (let i = 0; i < 2; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Item ${listElement.children.length + 1}`;
        listElement.appendChild(listItem);
    }
}

// Event listener to detect when user reaches the end of the list
listElement.addEventListener("scroll", function() {
    if (listElement.scrollTop + listElement.offsetHeight >= listElement.scrollHeight) {
        addMoreItems();
    }
});


