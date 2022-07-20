/* Author: 

*/

/* Author: 

*/
const types = document.querySelectorAll(".types");
const images = document.querySelectorAll(".images");
const imgSrc = document.querySelectorAll(".images img");
const modalBg = document.querySelector('.modal-background');
const modalImg = document.querySelector('.modal img');

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

imgSrc.forEach((item) => {
  item.addEventListener('click',() => { 
    modalBg.classList.add('show');
    const source = item.getAttribute('src');
    console.log(source);
    modalImg.setAttribute('src',source)
  })
})