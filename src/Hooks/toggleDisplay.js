export default function toggleDisplay(){
    let open = document.getElementById("openMenu")
    let close = document.getElementById("closeMenu")
    let mobile = document.getElementById("mobileMenu")
    if(open.style.display == "none"){
        open.style.display = "flex"
        close.style.display = "none"
        mobile.style.display = "none"
    } else if(close.style.display == "none"){
        close.style.display = "flex"
        open.style.display = "none"
        mobile.style.display = "flex"
    }
}