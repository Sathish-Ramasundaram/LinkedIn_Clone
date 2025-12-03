// Array of posts
const posts = [
  {
    title: "Eterna Labs",
    followers: "5,846 followers",
    time: "2 h",
    content: "We're #hiring a new Back End Developer in Bengaluru, Karnataka. Apply today or share this post with your network.",
    image: "/static/img/img1.png", // replace with your image path
    actions: ["Like (100) ", "Comment (5)", "Repost", "Send"]
  },

  {
    title: "Vignesh Subramanian",
    followers: "Senior Test Lead",
    time: "1d",
    content: "I’m happy to share that I’m starting a new position as Senior Test Lead at EY!",
    image: "/static/img/img2.png",
    actions: ["Like (50)", "Comment (10)", "Repost", "Send"]
  }
];

// Render posts dynamically
const bodyContainer = document.getElementById("feed");

function renderPosts() {
  bodyContainer.innerHTML = ""; // clear existing

posts.forEach(post => {
  const postDiv = document.createElement("div");
  postDiv.className = "post";

  // Title + followers + time
  const header = document.createElement("h3");
  header.textContent = post.title;
  const followers = document.createElement("p");
  followers.className = "post-followers"
  followers.textContent = post.followers;
  const time = document.createElement("span");
  time.className = "post-time"
  time.textContent = post.time;

  // Content
  const content = document.createElement("p");
  content.className = "post-content"
  content.textContent = post.content;

  // Image
  const img = document.createElement("img");
  img.src = post.image;
  img.alt = "Post image";

  // Actions
  const actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";
  post.actions.forEach(action => {
    const btn = document.createElement("button");
    btn.textContent = action;
    actionsDiv.appendChild(btn);
  });

  // Append all
  postDiv.appendChild(header);
  postDiv.appendChild(followers);
  postDiv.appendChild(time);
  postDiv.appendChild(content);
  postDiv.appendChild(img);
  postDiv.appendChild(actionsDiv);

  bodyContainer.appendChild(postDiv);
});

}

// Initial render
renderPosts();


// Array of sidebar boxes
const sidebarBoxes = [
  { className: "box1", image: "../static/img/H01.png" },
  { className: "box23", image: "../static/img/H02.png" },
  { className: "box23", image: "../static/img/H03.png" },
  { className: "box4", image: "../static/img/H04.png" }
];

// Grab the sidebar container
const sidebar = document.querySelector(".sidebar");

// Loop through array and create elements
sidebarBoxes.forEach(box => {
  const div = document.createElement("div");
  div.className = box.className;

  const img = document.createElement("img");
  img.src = box.image;
  img.className = box.className;

  div.appendChild(img);
  sidebar.appendChild(div);
});

// API

fetch('/api/posts')
  .then(res => res.json())
  .then(posts => {
    const feed = document.getElementById("feed_api");
    posts.forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.className = "post";

      postDiv.innerHTML = `
        <h3>${post.company}</h3>
        <p class="post-followers">${post.followers}</p>
        <span class="post-time">${post.type}</span>
        <p class="post-content">${post.headline}</p>
        <p class="post-content">${post.content}</p>
        <img src="${post.image}" alt="Post image" />
        <div class="actions">
          <button class="like-btn"> Like (${post.likes})</button>
          <button class="comment-btn"> Comment (${post.comments})</button>
          <button> Repost</button>
          <button> Share</button>
        </div>
        <div class="comment-box" style="display:none;">
          <input type="text" placeholder="Write a comment..." />
          <button class="submit-comment">Post</button>
        </div>
      `;

      // Like button logic
      const likeBtn = postDiv.querySelector(".like-btn");
      likeBtn.addEventListener("click", () => {
        post.likes++;
        likeBtn.textContent = ` Like (${post.likes})`;
      });

      feed.appendChild(postDiv);
    });
  });