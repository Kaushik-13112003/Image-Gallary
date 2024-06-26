const filterBtns = document.getElementsByClassName("filterBtns");

for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", () => {
    filterBtns[i].classList.toggle("active");

    for (let j = 0; j < filterBtns.length; j++) {
      if (j !== i) {
        filterBtns[j].classList.remove("active");
      }
    }
  });
}
