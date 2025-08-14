const users = [
  {
    name: "Sophie Bennett",
    profileImage:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    verified: true,
    description: "Product Designer who focuses on simplicity & usability.",
    followers: "8K+",
    posts: 48,
    istatus: "Follow",
  },

  {
    name: "Liam Carter",
    profileImage:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60",
    verified: false,
    description: "Front-end Developer with a love for clean UI.",
    followers: "3K+",
    posts: 73,
    istatus: "Follow",
  },
  {
    name: "Ava Thompson",
    profileImage:
      "https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.jpg?s=612x612&w=0&k=20&c=P2toTbaknymA7vf28IQNa-3xrlUjPXLFqvN2Zra8_nw=",
    verified: true,
    description: "UX Researcher making products user-friendly.",
    followers: "1K+",
    posts: 110,
    istatus: "Follow",
  },
  {
    name: "Ethan Walker",
    profileImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60",
    verified: false,
    description: "Mobile app developer & tech enthusiast.",
    followers: "17K+",
    posts: 65,
    istatus: "Follow",
  },
  {
    name: "Ava Mitchell",
    profileImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60",
    verified: true,
    description: "Travel blogger & content creator.",
    followers: "25K+",
    posts: 102,
    istatus: "Follow",
  },
  {
    name: "Liam Carter",
    profileImage:
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/tk05npo0s1dgr1onichu5kd4pr.jpg",
    verified: false,
    description: "Fitness trainer & healthy lifestyle coach.",
    followers: "9K+",
    posts: 88,
    istatus: "Follow",
  },

  {
    name: "Isabella Brooks",
    profileImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60",
    verified: true,
    description: "Creative Director specializing in branding.",
    followers: "26K+",
    posts: 150,
    istatus: "Follow",
  },
  {
    name: "Noah Smith",
    profileImage:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60",
    verified: false,
    description: "Full Stack Developer passionate about AI.",
    followers: "12K+",
    posts: 90,
    istatus: "Follow",
  },
  {
    name: "Olivia Harris",
    profileImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60",
    verified: true,
    description: "Marketing strategist with a creative edge.",
    followers: "38K+",
    posts: 84,
    istatus: "Follow",
  },
  {
    name: "James Parker",
    profileImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60",
    verified: false,
    description: "Backend Engineer focused on scalable systems.",
    followers: "18K+",
    posts: 99,
    istatus: "Follow",
  },
  {
    name: "Mia Johnson",
    profileImage:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60",
    verified: true,
    description: "Photographer capturing real moments.",
    followers: "4K+",
    posts: 200,
    istatus: "Follow",
  },
  {
    name: "Benjamin Lee",
    profileImage:
      "https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=60",
    verified: false,
    description: "Entrepreneur building sustainable businesses.",
    followers: "7K+",
    posts: 58,
    istatus: "Follow",
  },
];

let container = document.querySelector(".container");
let btn = document.querySelector("button");

function isFollow() {
  let sum = "";

  users.forEach(function (element, idx) {
    sum =
      sum +
      `
    <div class="card">
      <img
        src="${element.profileImage}"
        alt="Profile Image"
      />
      <div class="content">
        <div class="name">
           ${element.name}
          <img
            class="verified"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg"
            alt="Verified"
          />
        </div>
        <div class="desc">
            ${element.description}
        </div>
        <div class="stats">
            <span>Followers: ${element.followers}</span>
        <span>Posts: ${element.posts}</span>
          <button id="${idx}" class="follow-btn">${element.istatus}</button>
        </div>
      </div>
    </div>`;

    container.innerHTML = sum;
  });
}

isFollow();

container.addEventListener("click", function (dets) {
  let gold = users[dets.target.id];

  if (gold.istatus === "Follow") {
    gold.istatus = "Unfollow";
  } else {
    gold.istatus = "Follow";
  }
  isFollow();
});
