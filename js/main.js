const owl = $(".owl-carousel");
function setupOwl() {
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
}
document.onkeydown = function (event) {
  switch (event.key) {
    case "ArrowLeft":
      owl.trigger("prev.owl");
      break;
    case "ArrowRight":
      owl.trigger("next.owl");
      break;
  }
};

const totalItems = 10;
(function includeItems() {
  const carousel = document.querySelector(".owl-carousel");
  const carouselPath = "assets/img/carousel/";
  for (let i = 0; i < totalItems; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    div.classList.add("item");
    div.setAttribute("onclick", `setBanner(${i})`);
    img.classList.add("item-carousel");
    img.src = `${carouselPath}${i}.jpg`;
    div.appendChild(img);
    carousel.appendChild(div);
  }
  setupOwl();
})();

function setBanner(param) {
  const banner = document.querySelector(".main-movie");
  banner.style.background = `linear-gradient(to bottom, var(--NSblack), #00000080, var(--NSblack) 90%), no-repeat center/100% url(assets/img/banner/${param}.jpg)`;
  banner.scrollIntoView({ behavior: "smooth" });
}

const body = document.querySelector("body");
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const catalogue = document.querySelector(".catalogue");
document.addEventListener("scroll", () => {
  const catalogueWidth = catalogue.offsetWidth;
  let top = body.getBoundingClientRect().top;  
  if (headerHeight + top < 0) {
    header.style.backgroundColor = "var(--NSblack)";
    header.style.height = `${headerHeight + catalogueWidth / 10}px`;
    header.style.backdropFilter = "blur(2em)";
} else if (headerHeight * 4 + top < 0) {
    header.style.backgroundColor = "var(--NSblack)";
    header.style.height = `${headerHeight + catalogueWidth / 10}px`;
    header.style.backdropFilter = "blur(2em)";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.height = `${headerHeight}px`;
    header.style.backdropFilter = "blur(0.1em)";
  }
});
