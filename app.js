const gallery = document.querySelector(".gallery");

const items = document.querySelectorAll(".item");
console.log(items);

gallery.addEventListener("click", (e) => {
  console.log(e);

  if (e.target.classList.contains("filter")) {
    gallery.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");

    const filterValue = e.target.getAttribute("data-filter");

    items.forEach(item => {
      if(item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.add("show");
        
        item.classList.remove("hide");
    }
    else{
        item.classList.add("hide");
        item.classList.remove("show");
      }
    });
  }
});




