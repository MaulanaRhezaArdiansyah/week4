const result = document.getElementById("result");
const submitBtn = document.getElementById("submit");
const inputName = document.getElementById("name");
const deleteBtn = document.getElementById("delete");

submitBtn.addEventListener("click", function () {
  event.preventDefault();
  result.innerHTML = `Hi, ${inputName.value}`;
});

deleteBtn.addEventListener("click", function () {
  result.innerHTML = "";
});
