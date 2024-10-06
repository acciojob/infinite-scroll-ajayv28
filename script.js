const list = document.getElementById('infi-list');

function listItems(val) {
    for (let i = 0; i < val; i++) {
        const items = document.createElement("li");
        items.innerText = `Item ${list.children.length + 1}`;
        list.appendChild(items);
    }
}

listItems(10);

function handleScroll() {
    if (list.clientHeight + list.scrollTop >= list.scrollHeight) {
        listItems(2);
    }
}

list.addEventListener("scroll", handleScroll);
