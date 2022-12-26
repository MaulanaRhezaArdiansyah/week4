// form.addEventListener("submit", function (el) {
//   el.preventDefault();

//   let name = document.getElementById("name").value;
//   let post = document.getElementById("post").value;

//   //   fetch
//   fetch("https://63a3f9ae9704d18da09a463d.mockapi.io/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       name: name,
//       post: post,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => {
//       console.log(json);
//       let results = document.getElementById("results");

//       results.innerHTML = `
//         <p>${json.name}</p>
//         <p>${json.post}</p>
//         `;
//     });
// });

// DECLARE VARIABLE

const form = document.getElementById("form");
const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");

// POST
const addPost = () => {
  addBtn.addEventListener("click", async (el) => {
    el.preventDefault();

    let name = document.getElementById("name").value;
    let post = document.getElementById("post").value;

    //   fetch
    await fetch("https://63a3f9ae9704d18da09a463d.mockapi.io/posts", {
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
        let results = document.getElementById("results");

        results.innerHTML = `
    <p>${json.name}</p>
    <p>${json.post}</p>
    `;
      });
    getPost();
  });
};

// DELETE
const deletePost = (id) => {
  deleteBtn.addEventListener("click", async (el) => {
    el.preventDefault();
    await fetch(`https://63a3f9ae9704d18da09a463d.mockapi.io/posts/1`, {
      method: "DELETE",
    }).then(() => console.log("Delete post successfull"));
    getPost();
  });
};

// GET
const getPost = () => {
  fetch("https://63a3f9ae9704d18da09a463d.mockapi.io/posts/")
    .then((res) => res.json())
    .then((json) => console.log(json));
};

// DISPLAY DATA

const displayData = () => {
  addPost();
  deletePost();
  getPost();
};

displayData();
