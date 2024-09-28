export default function emailClick(){
    let copied = document.getElementById("copiedAlert")
    navigator.clipboard.writeText("davijm_00@outlook.com")
    copied.style.visibility = "visible"
    copied.style.opacity = 1
    window.setTimeout(()=>{
        copied.style.visibility = "hidden"
        copied.style.opacity = 0
    } ,3000)
}