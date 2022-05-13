const posts = [{
        member: {
            name: "Wayne Barnett",
            image: "img/wayne-barnett-founder-ceo.jpg",
            role: "Founder & CEO",
        }
    },
    {
        member: {
            name: "Angela Caroll",
            image: "img/angela-caroll-chief-editor.jpg",
            role: "Chief Editor",
        }
    },
    {
        member: {
            name: "Walter Gordon",
            image: "img/walter-gordon-office-manager.jpg",
            role: "Office Manager",
        }
    }, {
        member: {
            name: "Angela Lopez",
            image: "img/angela-lopez-social-media-manager.jpg",
            role: "Social Media Manager",
        }
    }, {
        member: {
            name: "Scott Estrada",
            image: "img/scott-estrada-developer.jpg",
            role: "Developer",
        }
    }, {
        member: {
            name: "Barbara Ramos",
            image: "img/barbara-ramos-graphic-designer.jpg",
            role: "Graphic Designer",
        }
    }
]

const cardContainer = document.querySelector(".team-container")

for (let i = 0; i < posts.length; i++) {
    // console.log(posts[i])
    const teamCard = `
    <div class="team-card">
                    <div class="card-image">
                        <img src="${posts[i].member.image}"/>
                    </div>
                    <div class="card-text">
                        <h3>${posts[i].member.name}</h3>
                        <p>${posts[i].member.role}</p>
                    </div>
                </div>
    
`;

    cardContainer.innerHTML += teamCard;
}