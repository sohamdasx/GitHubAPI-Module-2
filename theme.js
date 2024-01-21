const body = document.querySelector("body");
const btn = document.querySelector(".themebtn");
const username = document.querySelector(".username")

let currtheme = "dark";

btn.addEventListener("click", () => {
    if (currtheme === "dark") {
        currtheme = "light";
        btn.classList.add("dark");
        btn.classList.remove("light");
        body.classList.add("light");
        body.classList.remove("dark");
        username.classList.add("light");
        username.classList.remove("dark");
    }   
    else {
        currtheme = "dark";
        btn.classList.add("light");
        btn.classList.remove("dark");
        body.classList.add("dark");
        body.classList.remove("light");
        username.classList.remove("light");
    }
})