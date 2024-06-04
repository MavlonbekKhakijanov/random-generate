const deleteBtn = document.querySelector("#clear__btn");
const refreshBtn = document.querySelector("#refresh__btn");
const temlateEl = document.querySelector("template");
const userEl = document.querySelector("#user");

refreshBtn.addEventListener("click", () => {
  loadRequest();
  deleteBtn.classList.remove("hidden");
});

deleteBtn.addEventListener("click", () => {
  userEl.innerHTML = "";
  deleteBtn.classList.add("hidden");
});
const getDataForRequest = (data) => {
  userEl.innerHTML = "";

  data.forEach((element) => {
    const { picture, name, location, gender, dob } = element;

    const clone = temlateEl.content.cloneNode(true);
    const imgEl = clone.querySelector("#img");
    const nameEl = clone.querySelector("#name");
    const locationEl = clone.querySelector("#location");
    const genderEl = clone.querySelector("#gender");
    const ageEl = clone.querySelector("#age");
    imgEl.setAttribute("src", `${picture.large}`);
    nameEl.textContent = `${name.title}.${name.first} ${name.last} `;
    locationEl.textContent = ` - ${location.country} - ${location.city} `;
    genderEl.textContent = `${gender}`;
    ageEl.textContent = ` - ${dob.age} yosh`;
    userEl.appendChild(clone);

    inputEl.addEventListener("input", () => {
      let inputVal = inputEl.value.toLowerCase();
      const nameTitle = document.querySelectorAll(".user__name");
      nameTitle.forEach((item) => {
        if (item.textContent.toLowerCase().includes(inputVal)) {
          item.parentElement.classList.remove("hidden");
        } else {
          item.parentElement.parentElement.parentElement.classList.add(
            "hidden"
          );
        }
      });
    });
  });
};

// refresh btn;
