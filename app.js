const URL = `https://api.github.com/users/`;
const fetchbtn = document.querySelector("#fetchbtn");
const userinfo = document.querySelector("#userinfo");
const input = document.querySelector(".username")

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        fetchUserData();
    }
})

fetchbtn.addEventListener("click", fetchUserData);

async function fetchUserData() {
    const username = document.querySelector(".username").value;

    if (username == "") {
        userinfo.innerHTML = `<p>Enter an account before fetching!</p>`;
    }
    else {
        let response = await fetch(`https://api.github.com/users/${username}`);
        let data = await response.json();

        if (data.message == "Not Found") {
            userinfo.innerHTML = `User not found.`;
        } else {
            userinfo.innerHTML =
            `<div>
            <h2 id="accUser">@${data.login}</h2>
            <img id="pfp" src=${data.avatar_url} alt="pfp.png">
            </div>
            <div>
            <h3 id="name">${data.name}</h3>
            <p id="flws">Followers: ${data.followers}</p>
            <p id="flwg">Following: ${data.following}</p>
            <p id="repo">Repositories: ${data.public_repos}</p>
            </div>`;
        }
    }
}