const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
        {
        name: "Joseph McConnell",
        username: "jm19??",
        location: "Somewhere in the U.S.A",
        avatar: "images/user.jpg",
        post: "images/user.jpg",
        comment: "Just me",
        likes: 1
    }
]

const main = document.getElementById("main")

let html=""

for(let i = 0; i<posts.length; i++) {
    html += `
    <section>
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
    </section>
    `
}

main.innerHTML = html;