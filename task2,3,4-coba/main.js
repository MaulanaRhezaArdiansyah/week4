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
    // mendapatkan value dari input form
    let name = document.getElementById("name").value;
    let post = document.getElementById("post").value;

    fetch(`${url}/${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      //   menuliskan/menambahkan value yang didapat ke dalam API
      body: JSON.stringify({
        name: name,
        post: post,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        let result = document.getElementById("result");
        // menampilkan data dari value yang didapat ke halaman web
        result.innerHTML += `
        <div class="card">
          <div class="text">
              <p>${json.name}</p>
              <p>${json.post}</p>
          </div>
          <div>
              <button class="deleteCard">Delete</button>
          </div>
        </div>
        `;
      });
    getPost();
  });
};

// menghapus data dari API
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

// menghapus card
// let deleteCardBtn = document.querySelectorAll(".deleteCard");

// deleteCardBtn.addEventListener("click", () => {
//   console.log("ok");
// });
