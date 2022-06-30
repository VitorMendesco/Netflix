const itemsObj = [
  {
    title: "Rocky",
    release: 1977,
    desc: "When world heavyweight boxing champion, Apollo Creed wants to give an unknown fighter a shot at the title as a publicity stunt, his handlers choose palooka Rocky Balboa, an uneducated collector for a Philadelphia loan shark. Rocky teams up with trainer Mickey Goldmill to make the most of this once in a lifetime break.",
  },
  {
    title: "Persona 5",
    release: 2018,
    desc: "Ren Amamiya is about to enter his second year after transferring to Shujin Academy in Tokyo. Following a particular incident, his Persona awakens, and together with his friends, they form the “Phantom Thieves of Hearts” to reform hearts of corrupt adults by stealing the source of their distorted desires. Meanwhile, bizarre and inexplicable crimes have been popping up one after another… Living an ordinary high school life in Tokyo during the day, the group maneuvers the metropolitan city as Phantom Thieves after hours. Let the curtain rise for this grand, picaresque story!",
  },
  {
    title: "Persona 4",
    release: 2011,
    desc: 'Persona 4: The Animation is a television anime series produced by AIC ASTA and directed by Seiji Kishi, based on the Shin Megami Tensei: Persona 4 video game by Atlus. The story revolves around the protagonist, Yu Narukami, who acquires a mysterious power called "Persona" and embarks on a journey with his new friends to uncover the truth behind a bizarre series of murders involving a distorted TV World. The series aired in Japan between October 2011 and March 2012, with a film adaptation released in June 2012 and an original video animation episode released in August 2012. The series is licensed in North America by Sentai Filmworks.',
  },
  {
    title: "Kuroko's Basketball",
    release: 2012,
    desc: "In the story, Kagami Taiga has just enrolled into Seirin High School when he meets Kuroko Tetsuya of the school's basketball team. Kuroko happens to be the shadowy sixth member of the legendary Generation of Miracles basketball team. Together, Kagami and Kuroko aim to take their team to the inter-high school championship - against Kuroko's former teammates.",
  },
  {
    title: "Attack on Titan",
    release: 2015,
    desc: "100 years ago, titans suddenly appeared on Earth. Soon, human civilization veered on collapse due to the titans. Humans then built a giant wall to defend themselves. Within the giant walls, humans lived in peace, but, 100 years later, the giant wall is broken.",
  },
  {
    title: "Sons of Anarchy",
    release: 2008,
    desc: "An adrenalized drama with darkly comedic undertones that explores a notorious outlaw motorcycle club’s (MC) desire to protect its livelihood while ensuring that their simple, sheltered town of Charming, California remains exactly that, charming. The MC must confront threats from drug dealers, corporate developers, and overzealous law officers. Behind the MC’s familial lifestyle and legally thriving automotive shop is a ruthless and illegal arms business driven by the seduction of money, power, and blood.",
  },
  {
    title: "The Boys",
    release: 2019,
    desc: "A group of vigilantes known informally as “The Boys” set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
  },
  {
    title: "Batman: Under the Red Hood",
    release: 2010,
    desc: "One part vigilante, one part criminal kingpin, Red Hood begins cleaning up Gotham with the efficiency of Batman, but without following the same ethical code.",
  },
  {
    title: "Indiana Jones: Lost Ark",
    release: 1981,
    desc: "When Dr. Indiana Jones – the tweed-suited professor who just happens to be a celebrated archaeologist – is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.",
  },
  {
    title: "Teen Titans",
    release: 2003,
    desc: "The Teen Titans are five heroes under one roof. Their names: Robin, Starfire, Raven, Cyborg, and Beast Boy They live in a large tower in the shape of a T that they call Titan Tower. No secret identities. No school. Just superheroes being superheroes. They must go up against their arch nemesis, Slade, and his evil minions. What he really plans to do is unknown but one thing's for sure... he's an evil madman.",
  },
];
const myListObj = [];
const owlMain = $("#catalogue");

function setupOwl() {
  owlMain.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    onDragged: callback,
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

function setupList() {
  owlList.owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    onDragged: callback,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
}
let dragging = false;
function callback() {
  dragging = true;
  setTimeout(() => {
    dragging = false;
  }, 100);
}

document.onkeydown = function (event) {
  switch (event.key) {
    case "ArrowLeft":
      owlMain.trigger("prev.owl");
      break;
    case "ArrowRight":
      owlMain.trigger("next.owl");
      break;
  }
};

const totalItems = 10;
const carouselPath = "assets/img/carousel/";
function includeItems() {
  const catalogue = document.querySelector("#catalogue");
  catalogue.innerHTML = "";
  for (let i = 0; i < totalItems; i++) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    div.classList.add("item");
    img.setAttribute("onclick", `setBanner(${i})`);
    img.classList.add("item-carousel");
    img.src = `${carouselPath}${i}.jpg`;
    div.appendChild(img);
    catalogue.appendChild(div);
  }  
  setupOwl();
}

const btnAddList = document.querySelector("#btnAddList");
function setBanner(param) {
  if (!dragging) {
    // setting mylist button parameter
    if (!searchItem(param)) {
      btnAddList.style.display = "none";
    } else {
      btnAddList.style.display = "flex";
      btnAddList.setAttribute("onclick", `addList(${param})`);
    }
    // setting background
    let titleObj = itemsObj[param].title;
    let releaseObj = itemsObj[param].release;
    let descObj = itemsObj[param].desc;
    title.innerHTML = `${titleObj}<span class="font-gray">(${releaseObj})</span>`;
    desc.innerHTML = descObj;
    // scrolling to banner
    const banner = document.querySelector(".main-movie");
    banner.style.background = `linear-gradient(to bottom, var(--NSblack), #00000080 50%, var(--NSblack) 90%), no-repeat center/100% url(assets/img/banner/${param}.jpg)`;
    banner.scrollIntoView({ behavior: "smooth" });
  }
}

const body = document.querySelector("body");
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const divNavs = document.querySelector(".div-navs");
const catalogue = document.querySelector(".catalogue");
document.addEventListener("scroll", () => {
  const catalogueWidth = catalogue.offsetWidth;
  let top = body.getBoundingClientRect().top;
  if (headerHeight + top < 0) {
    header.style.backgroundColor = "var(--NSblack)";
    header.style.height = `${headerHeight + catalogueWidth / 10}px`;
    header.style.backdropFilter = "blur(2em)";
    divNavs.style.width = "70%";
  } else if (headerHeight * 4 + top < 0) {
    header.style.backgroundColor = "var(--NSblack)";
    header.style.height = `${headerHeight + catalogueWidth / 10}px`;
    header.style.backdropFilter = "blur(2em)";
    divNavs.style.width = "70%";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.height = `${headerHeight}px`;
    header.style.backdropFilter = "blur(0.1em)";
    divNavs.style.width = "100%";
  }
});

function addList(param) {
  let add = searchItem(param);
  if (add) {
    myListObj.push(param);
    console.log("Item added to your list");
  }
}

function searchItem(param) {
  let result = true;
  for (let item of myListObj) {
    result = param == item ? false : true;
  }
  return result;
}
