/* Author: 

*/

/* Author: 

*/
const types = document.querySelectorAll(".types");
const images = document.querySelectorAll(".images");

types.forEach(function (type) {
  type.addEventListener("click", function () {
    types.forEach(function (type) {
      type.classList.remove("active");
    })
    this.classList.add("active");

    const dataFilter = this.getAttribute("data-filter");

    images.forEach(function (image) {
      image.classList.remove("active");
      image.classList.add("hide");

      if (
        image.getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        image.classList.remove("hide");
        image.classList.add("active");
      }
    })
  });
})
