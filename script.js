
/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        },800);

    },900);

});


/* =========================================================
   NAVBAR SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:.12
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});


/* =========================================================
   MODEL SWITCHER
========================================================= */

const models = {

    m3:{
        name:"VYRON M3",
        category:"M PERFORMANCE",
        description:
        "A high-performance sports sedan combining everyday practicality with extraordinary dynamics and unmistakable M character.",
        image:
        "src/m3.png",
        power:"503 HP",
        zero:"3.8 SEC",
        speed:"290 KM/H",
        drive:"AWD"
    },

    m4:{
        name:"VYRON M4",
        category:"M PERFORMANCE",
        description:
        "A dramatic performance coupe built around aggressive design, precise handling and exhilarating acceleration.",
        image:
        "src/m4.png",
        power:"503 HP",
        zero:"3.9 SEC",
        speed:"290 KM/H",
        drive:"RWD"
    },

    i7:{
        name:"VYRON i7",
        category:"LUXURY ELECTRIC",
        description:
        "A new expression of luxury combining silent electric performance with advanced digital technology.",
        image:
        "src/i7.png",
        power:"536 HP",
        zero:"4.7 SEC",
        speed:"240 KM/H",
        drive:"AWD"
    },

    x5:{
        name:"VYRON X5",
        category:"LUXURY SUV",
        description:
        "Commanding presence, spacious luxury and confident performance engineered for every adventure.",
        image:
        "src/X5.png",
        power:"523 HP",
        zero:"4.3 SEC",
        speed:"250 KM/H",
        drive:"AWD"
    }

};


const tabs = document.querySelectorAll(".model-tab");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));

        tab.classList.add("active");

        const model = models[tab.dataset.model];

        document.getElementById("modelImage").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("modelImage").src = model.image;

            document.getElementById("modelName").textContent = model.name;

            document.getElementById("modelCategory").textContent = model.category;

            document.getElementById("modelDescription").textContent = model.description;

            document.getElementById("power").textContent = model.power;

            document.getElementById("zero").textContent = model.zero;

            document.getElementById("speed").textContent = model.speed;

            document.getElementById("drive").textContent = model.drive;

            document.getElementById("modelImage").style.opacity = "1";

        },250);

    });

});


/* =========================================================
   3D CAR MOUSE INTERACTION
========================================================= */

const car = document.getElementById("car3d");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 35;

    const y = (window.innerHeight / 2 - e.clientY) / 45;

    car.style.transform =
        `translateY(-50%) rotateY(${x}deg) rotateX(${y}deg)`;

});


/* =========================================================
   MOBILE TOUCH EFFECT
========================================================= */

document.addEventListener("touchmove",(e)=>{

    if(!e.touches[0]) return;

    const touchX = e.touches[0].clientX;

    const center = window.innerWidth / 2;

    const rotate = (center - touchX) / 30;

    car.style.transform =
        `translateY(-50%) rotateY(${rotate}deg)`;

});


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


/* =========================================================
   PARALLAX HERO
========================================================= */

window.addEventListener("scroll",()=>{

    const hero = document.querySelector(".hero");

    if(window.scrollY < window.innerHeight){

        hero.style.backgroundPosition =
            `center ${window.scrollY * .25}px`;

    }

});


document.addEventListener("DOMContentLoaded", () => {

  const revealItems = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }

      });

    },
    {
      threshold: 0.15
    }
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });


  /* CARD INTERACTION */

  const cards = document.querySelectorAll(".model-card");

  cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX =
        ((y / rect.height) - 0.5) * -3;

      const rotateY =
        ((x / rect.width) - 0.5) * 3;

      card.style.transform =
        `translateY(-12px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

      card.style.transform =
        "translateY(0) rotateX(0) rotateY(0)";

    });

  });

});


/* =========================================================
   RESPONSIVE MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if(menuToggle && mobileNav){

    menuToggle.addEventListener("click", () => {

        const isOpen = mobileNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    mobileNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
            menuToggle.textContent = "☰";

        });

    });

    window.addEventListener("resize", () => {

        if(window.innerWidth > 900){

            mobileNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
            menuToggle.textContent = "☰";

        }

    });

}