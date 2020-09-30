const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  fetch("http://3.134.106.234:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      a: 3,
    }),
  })
    .then((res) => res.text())
    .then((text) => console.log(text));
});
