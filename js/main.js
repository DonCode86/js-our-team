const posts = [{
    member: {
        name: "Wayne Barnett",
        image: "../img/wayne-barnett-founder-ceo.jpg",
        role: "Founder & CEO",
    }
}]

const cardContainer = document.querySelector(".team-container")

for (let i = 0; i < posts.length; i++) {
    // console.log(posts[i])
    const teamCard = `
    <div class="team-card">
                    <div class="card-image">
                        ${posts[i].member.image} />
                    </div>
                    <div class="card-text">
                        <h3>${posts[i].member.name}</h3>
                        <p>${posts[i].member.role}</p>
                    </div>
                </div>
    
`;

    cardContainer.innerHTML += teamCard;
}