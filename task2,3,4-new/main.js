// DECLARE VARIABLE

const form = document.getElementById("form");
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");

// POST
const addPost = (url, endpoint, method) => {
  addBtn.addEventListener("click", async (el) => {
    el.preventDefault();

    let name = document.getElementById("name").value;
    let post = document.getElementById("post").value;

    //   fetch
    await fetch(`${url}/${endpoint}`, {
      method: method,
      body: JSON.stringify({
        name: name,
        post: post,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let conResult = document.getElementById("container-results");
        conResult.innerHTML += `<div class="results">
          <p>${json.name}</p>
          <p>${json.post}</p>
        </div>`;
      });
    getPost();
  });
};

// DELETE
const deletePost = (url, endpoint, method, id) => {
  deleteBtn.addEventListener("click", async (el) => {
    el.preventDefault();
    await fetch(`${url}/${endpoint}/${id}`, {
      method: method,
    }).then(() => console.log("Delete post successfull"));
    getPost();
  });
};

// GET
const getPost = () => {
  fetch("https://63a3f9ae9704d18da09a463d.mockapi.io/posts")
    .then((res) => res.json())
    .then((json) => console.log(json));
};
