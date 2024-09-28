import checkMenu from "./checkMenu"

function scrollHomeIcon(){
    const home = document.getElementById("home")
    home.scrollIntoView({behavior: "smooth"})
}

function scrollHome(){
    const home = document.getElementById("home")
    checkMenu()
    home.scrollIntoView({behavior: "smooth"})
}

function scrollAbout(){
    const about = document.getElementById("about")
    checkMenu()
    about.scrollIntoView({behavior: "smooth"})
}

function scrollProjects(){
    const projects = document.getElementById("projects")
    checkMenu()
    projects.scrollIntoView({behavior: "smooth"})
}

function scrollContact(){
    const contact = document.getElementById("contact")
    checkMenu()
    contact.scrollIntoView({behavior: "smooth"})
}

export {scrollAbout, scrollHome, scrollHomeIcon, scrollProjects, scrollContact}