const open = document.getElementById("menu-button")
const navbar = document.getElementById("sidebar-menu")
const overlay = document.getElementById("overlay")

let navOpen = false

function openNav() {
    navOpen = true
    navbar.style.width = "50%"
}

function closeNav() {
    navOpen = false
    navbar.style.width = "0px"
}

open.addEventListener("click", function() {
    if (!navOpen) {
        openNav()
    }
})

overlay.addEventListener("click", function() {
    if (navOpen) {
        closeNav()
    }
})