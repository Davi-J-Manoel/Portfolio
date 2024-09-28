export default function checkMenu(){
    let open = document.getElementById("openMenu")
    let close = document.getElementById("closeMenu")
    let mobile = document.getElementById("mobileMenu")
    close.style.display = "none"
    open.style.display = "flex"
    mobile.style.display = "none"
}