import posts from "./data.js"

const main = document.getElementById("main")

let html=""

for(let i = 0; i<posts.length; i++) {
    html += /*html*/`
    <div class="container">
        <div class="section-header">
            <img class="avatar" src="${posts[i].avatar}" alt="${posts[i].name}'s profile picture">
            <div>
                <p class="name">${posts[i].name}</p>
                <p class="location">${posts[i].location}</p>
            </div>
        </div>
        <img class="portrait" src="${posts[i].post}" alt="${posts[i].name}'s portrait">
        <div class="section-footer">
            <div>
                <img class="icon" src="images/icon-heart.png" alt="heart like icon">
                <img class="icon" src="images/icon-comment.png" alt="comment icon">
                <img class="icon" src="images/icon-dm.png" alt="direct message icon">
            </div>
            <p class="likes"><span>${posts[i].likes} likes</p></span><p>
            <p class="user-id"><span>${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </div>
    `
}

main.innerHTML = html;