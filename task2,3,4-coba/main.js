const getPost = () => {
  fetch("https://63a3f9ae9704d18da09a463d.mockapi.io/posts")
    .then((res) => res.json())
    .then((json) =>
      json.map((e) => {
        console.log(e);
      })
    );
};

const addPost = (url, endpoint, method) => {
  let addBtn = document.getElementById("add");

  addBtn.addEventListener("click", (el) => {
    el.preventDefault();
    let name = document.getElementById("name").value;
    let post = document.getElementById("post").value;

    fetch(`${url}/${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        post: post,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        let result = document.getElementById("result");
        result.innerHTML += `
        <div class="card">
            <p>${json.name}</p>
            <p>${json.post}</p>
        </div>
        `;
      });
    getPost();
  });
};

const deletePost = (url, endpoint, id, method) => {
  let deleteBtn = document.getElementById("delete");
  //   dibuat async await supaya yang ditampilkan di console lebih dulu adalah fetching data, baru getPost dijalankan
  deleteBtn.addEventListener("click", async (el) => {
    el.preventDefault();
    await fetch(`${url}/${endpoint}/${id}`, {
      method: method,
    }).then(() => console.log("delete success"));
    getPost();
  });
};
