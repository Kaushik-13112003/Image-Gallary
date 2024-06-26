const tabs = document.querySelector(".tabs");
const images = document.querySelectorAll(".images");
console.log(images);
console.log(tabs);

tabs.addEventListener("click", (event) => {
  console.log(event.target.dataset.category);

  filterImages(event.target.dataset.category);
});

const filterImages = (category) => {
  if (category === "All") {
    return images.forEach((ele, idx) => {
      ele.style.display = "block";
    });
  }
  images.forEach((ele, idx) => {
    if (ele.dataset.category === category) {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });
};
