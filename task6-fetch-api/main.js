async function getData(id) {
  const getDataBtn = document.getElementById("getData");
  const result = document.getElementById("result");
  const fetchData = await fetch(id);
  const data = await fetchData.json();
  getDataBtn.addEventListener("click", function () {
    setTimeout(() => {
      try {
        const dataName = data.map((i) => {
          console.log(i.name);
          return i.name;
        });
        result.innerHTML = dataName.join(", ");
      } catch (error) {
        console.log(`Error : Sorry! Data Not Found`);
      }
    }, 1000);
  });
}
getData("https://jsonplaceholder.typicode.com/users");
