const button = document.getElementById("openCamera");
button.onclick = () => {
  location.hash = "home";
  button.style.visibility = "hidden";
};

const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "images/coffee1.jpg",
    caption: "Lorem Ipsum ",
  },
  { name: "Voluptatem", image: "images/coffee2.jpg", caption: "Lorem Ipsum 2" },
  { name: "Explicabo", image: "images/coffee3.jpg", caption: "Lorem Ipsum 3" },
  { name: "Rchitecto", image: "images/coffee4.jpg", caption: "Lorem Ipsum 4" },
  { name: " Beatae", image: "images/coffee5.jpg", caption: "Lorem Ipsum 5" },
  { name: " Vitae", image: "images/coffee6.jpg", caption: "Lorem Ipsum 6" },
  { name: "Inventore", image: "images/coffee7.jpg", caption: "Lorem Ipsum 7" },
  { name: "Veritatis", image: "images/coffee8.jpg", caption: "Lorem Ipsum 8" },
  {
    name: "Accusantium",
    image: "images/coffee9.jpg",
    caption: "Lorem Ipsum 9",
  },
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, caption }) =>
      (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>        
                  <h2 class="card--caption">${caption}</h2>    
                  <a class="card--link" href="#">Edit caption</a>
                </div>
                `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
