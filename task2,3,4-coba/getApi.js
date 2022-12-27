getAPI("https://63a3f9ae9704d18da09a463d.mockapi.io", "GET", "posts");

function getAPI(url, method, endpoint) {
  if (method === "GET") {
    fetch(`${url}/${endpoint}`, {
      method: method,
      headers: {
        "Content-type": "aplication/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("HTTP request successfull");
        } else {
          console.log("HTTP request unsuccessfull");
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) =>
        data.map((e) => {
          console.log(e);
          let table = document.getElementById("table");
          const getDataBtn = document.getElementById("getData");

          getDataBtn.addEventListener("click", () => {
            table.innerHTML += `
                                    <tr>
                                        <td>${e.id}</td>
                                        <td>${e.name}</td>
                                        <td>${e.post}</td>
                                    </tr>
                                    `;
          });
        })
      )
      .catch((error) => console.log(error));
  }
}
