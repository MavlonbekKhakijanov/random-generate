const API = "https://randomuser.me/api/?results=10";

// o'zgaruvchilar
const loaderEl = document.querySelector("#loader");
const navigationBar = document.querySelector("#navigation__bar");

const loadeTog = (toggel) => {
  if (toggel) {
    // navigationBar.classList.add("hidden");
    loaderEl.classList.remove("hidden");
  } else {
    navigationBar.classList.remove("hidden");
    loaderEl.classList.add("hidden");
  }
};

const getData = function (resurse) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        loadeTog(true);
      } else if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data.results);
        loadeTog(false);
      } else if (request.readyState === 4) {
        reject("error");
      }
    });

    request.open("GET", resurse);
    request.send();
  });
};

const loadRequest = () => {
  getData(API)
    .then((data) => {
      getDataForRequest(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
document.addEventListener("DOMContentLoaded", () => {
  loadRequest();
});
