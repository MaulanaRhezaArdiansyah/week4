// fetchAPI("https://jsonplaceholder.typicode.com/users", "POST", {
//   name: "Rheza",
// });
// fetchAPI("https://reqres.in/api/users", "GET");
// fetchAPI("https://jsonplaceholder.typicode.com/users", "GET");
fetchAPI("https://jsonplaceholder.typicode.com/users", "GET");

function fetchAPI(url, type, data) {
  if (type === "GET") {
    fetch(url, {
      method: type,
      headers: {
        "Content-type": "apllication/json",
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
      //   .then((data) => console.log(data))
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
                                        <td>${e.email}</td>
                                        <td>${e.phone}</td>
                                        <td>${e.website}</td>
                                    </tr>
                                    `;
          });
        })
      )
      .catch((error) => console.log(error));
  }
  //   if (type === "POST") {
  //     fetch(url, {
  //       method: type,
  //       headers: {
  //         "Content-type": "apllication/json",
  //       },
  //       body: JSON.stringify({ data }),
  //     })
  //       .then((res) => {
  //         if (res.ok) {
  //           console.log("HTTP request successfull");
  //         } else {
  //           console.log("HTTP request unsuccessfull");
  //         }
  //         return res;
  //       })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.log(error));
  //   }
}
