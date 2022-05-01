if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => {
      console.log(registration);
      console.log("SW Registered!");
    })
    .catch((error) => {
      console.log(error);
      console.log("Registration Failed!");
    });
}
