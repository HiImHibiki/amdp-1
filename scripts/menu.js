let menuId = new URL(window.location.href).searchParams.get("id");
let menu = document.querySelectorAll(".menu");

// console.log(menu);

menu.forEach(i => {
    i.classList.remove("menu-active");
});

if (menuId == 1) {
    console.log(menu[0]);
    menu[0].classList.add("menu-active");
}
if (menuId == 2) {
    menu[1].classList.add("menu-active");
}
if (menuId == 3) {
    menu[2].classList.add("menu-active");
}