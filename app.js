/*=================
 Common Code
====================*/

gsap.registerPlugin(TextPlugin, ScrollTrigger);

/*=================
header area
====================*/

const texts = document.querySelectorAll("#header .navbar-collapse .nav-link");
const originalTexts = [];

texts.forEach((text, index) => {
  originalTexts[index] = text.innerText;

  text.addEventListener("mouseenter", () => {
    gsap.to(text, {
      duration: 0.5,
      text: {
        value: originalTexts[index],
        delimeter: " ",
        speed: 0.5,
        scrambleText: true,
        chars: "upperCase",
      },
    });
  });

  text.addEventListener("mouseleave", () => {
    gsap.to(text, {
      duration: 0.5,
      text: {
        value: originalTexts[index],
        delimeter: " ",
        speed: 0.5,
        scrambleText: true,
        chars: "upperCase",
      },
    });
  });
});

/*=================
Hero section
====================*/
const heroToFeature = document.querySelectorAll("#heroToFeature");
const hero = document.querySelectorAll("#hero .scrolling");
const ctaBtnGif = document.querySelector("#hero .cta_btn .rotate");
const heroTitleBlue = document.querySelectorAll("#hero h1 .blue");
const heroTitleDark = document.querySelectorAll("#hero h1 .dark");

let heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: heroToFeature,
    pin: true,
    scrub: 1,
    start: "top top",
    end: () => "+=" + heroToFeature.clientWidth,
    toggleActions: "restart pause resume pause",
    delay: 1,
    ease: "circ.Out",
  },
});
heroTl.fromTo(
  hero,
  { duration: 1, position: "absolute" },
  { x: 640, y: 640, duration: 5, width: 508, height: 666 }
);
gsap.from(hero, {
  x: -50,
  opacity: 0,
  delay: 1,
  duration: 1,
  ease: "power3.out",
});

heroTitleBlue.forEach((title) => {
  gsap.from(title, {
    y: "-10rem",
    opacity: 0,
    delay: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
  });
});

heroTitleDark.forEach((title) => {
  gsap.from(title, {
    y: "10rem",
    opacity: 0,
    delay: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.in",
  });
});

gsap
  .timeline({ repeat: -1, yoyo: true })
  .to(ctaBtnGif, { rotation: -90, duration: 3, ease: "power1.inOut" })
  .to(ctaBtnGif, { rotation: 90, duration: 3, ease: "power1.inOut" });

/*=================
quality services 
====================*/
const slides = document.querySelectorAll(
  "#quality_services .slider .slider_content div"
);
const prev = document.querySelector("#quality_services .navigation .prev");
const next = document.querySelector("#quality_services .navigation .next");

// adding css left style
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let slideCounter = 0;

next.addEventListener("click", function () {
  slideCounter++;
  slider();
});
prev.addEventListener("click", function () {
  slideCounter--;
  slider();
});

function slider() {
  // working with slides
  if (slideCounter === slides.length) {
    slideCounter = 0;
  }
  if (slideCounter < 0) {
    slideCounter = slides.length - 1;
  }

  // addding css transform style
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${slideCounter * 100}%)`;
  });
}

const qualitySlideDiv = document.querySelectorAll(
  "#quality_services .slider .slider_content > div"
);
qualitySlideDiv.forEach((div) => {
  const img = div.querySelector("img");
  const h3 = div.querySelector("h3");

  div.addEventListener("mouseenter", () => {
    if (img && h3) {
      img.style.height = "220px";
      h3.style.fontSize = "30px";
    }
  });

  div.addEventListener("mouseleave", () => {
    if (img && h3) {
      img.style.height = "190px";
      h3.style.fontSize = "24px";
    }
  });
});

/*=================
why area
====================*/
const card1 = document.querySelectorAll("#why .why_card:nth-child(1)");
const card2 = document.querySelectorAll("#why .why_card:nth-child(2)");
const card3 = document.querySelectorAll("#why .why_card:nth-child(3)");
const card4 = document.querySelectorAll("#why .why_card:nth-child(4)");
const card5 = document.querySelectorAll("#why .why_card:nth-child(5)");
const card6 = document.querySelectorAll("#why .why_card:nth-child(6)");

const timeline = gsap.timeline({
  scrollTrigger: "#why",
  pin: true,
  start: "top bottom",
  end: () => "+=" + "#why".offsetWidth,
  toggleActions: "restart pause resume pause",
  scrub: true,
  delay: 0.5,
  ease: "bounce.Out",
});

timeline.fromTo(
  card1,
  { y: "20rem", opacity: 0 },
  {
    y: "0rem",
    opacity: 1,
    duration: 0.5,
    delay: 1,
    ease: "sine.Out",
  }
);
timeline.fromTo(
  card2,
  { y: "0rem", opacity: 0 },
  {
    y: "-8.5rem",
    opacity: 1,
    duration: 0.5,
    delay: 1,
    ease: "sine.Out",
  }
);
timeline.fromTo(
  card3,
  { y: "0rem", opacity: 0 },
  {
    y: "-16.5rem",
    opacity: 1,
    duration: 0.5,
    delay: 1,
    ease: "sine.Out",
  }
);
timeline.fromTo(
  card4,
  { y: "0rem", opacity: 0 },
  {
    y: "-25.5rem",
    opacity: 1,
    duration: 0.5,
    delay: 1,
    ease: "sine.Out",
  }
);
timeline.fromTo(
  card5,
  { y: "0rem", opacity: 0 },
  {
    y: "-34.5rem",
    opacity: 1,
    duration: 0.5,
    delay: 1,
    ease: "sine.Out",
  }
);
timeline.fromTo(
  card6,
  { y: "0rem", opacity: 0 },
  {
    y: "-43.5rem",
    opacity: 1,
    duration: 0.5,
    delay: 2,
    ease: "sine.Out",
  }
);

/*=================
Feedback area
====================*/
const feedBack = new Swiper(".swiperFeedBack", {
  speed: 1000,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  width: null,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  },
});

/*=================
Video area
====================*/
const video = document.querySelector("#video video");
const play = document.querySelector("#video button");

play.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

/*=================
Before & After area
====================*/
const beforeAfter = new Swiper(".swiperBAF ", {
  speed: 1000,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletElement: "button",
    bulletClass: "nav_line",
    bulletActiveClass: "active",
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
/*=================
10% off area
====================*/

const discount = document.querySelector("#ten_percent_off");
const discountImg = document.querySelector("#ten_percent_off img");

const discountTl = gsap.timeline({
  scrollTrigger: discount,
  pin: true,
  start: "top bottom",
  end: () => "+=" + discount.offsetWidth,
  toggleActions: "restart pause resume pause",
  scrub: true,
  delay: 0.5,
  ease: "bounce.Out",
});

discountTl.fromTo(
  discountImg,
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, duration: 1 }
);

/*=================
 We serve area
====================*/
const serveBg = document.querySelector("#serve_area .inner_serve");

serveBg.addEventListener("mouseenter", () => {
  serveBg.style.background = `linear-gradient(rgb(0 204 248 / 60%), rgb(0 204 248 / 55%)),
    url("./Images/San Diego.jpg")`;
  serveBg.style.backgroundPosition = "center center";
  serveBg.style.backgroundSize = "cover";
});
serveBg.addEventListener("mouseleave", () => {
  serveBg.style.background = `#00ccf8`;
});
