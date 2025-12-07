// MENU OPEN/CLOSE
let menu = document.getElementById("sideMenu");
let hamburger = document.getElementById("hamburger");
let closeMenu = document.getElementById("closeMenu");

hamburger.onclick = () => {
    menu.style.left = "0";
};

closeMenu.onclick = () => {
    menu.style.left = "-300px";
};

// ORDER SYSTEM
let orderList = document.getElementById("orderList");

function addOrder(item) {
    let li = document.createElement("li");
    li.textContent = item;
    orderList.appendChild(li);
}
