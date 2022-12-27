// DECLARE VARIABLE

const form = document.getElementById("form");
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");

// POST
const addPost = (url) => {
  addBtn.addEventListener("click", async (el) => {
    el.preventDefault();

    let name = document.getElementById("name").value;
    let post = document.getElementById("post").value;

    //   fetch
    await fetch(url, {
      method: "POST",
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
        // let results = document.querySelector(".results");

        //     results.innerHTML = `
        // <p>${json.name}</p>
        // <p>${json.post}</p>
        // `
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
const deletePost = (url) => {
  deleteBtn.addEventListener("click", async (el) => {
    el.preventDefault();
    await fetch(url, {
      method: "DELETE",
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
