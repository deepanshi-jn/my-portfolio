if (window.innerWidth >= 450) {
    Shery.mouseFollower();
}
Shery.makeMagnet(".magnet");
let hoverEffectApplied = false;

function handleHoverEffect() {
    if (window.innerWidth >= 450) {
        if (!hoverEffectApplied) {
            Shery.hoverWithMediaCircle(".heffect", {
                images: ["./Images/Pic-modified.JPG"]
            });
            hoverEffectApplied = true;
        }
    } else {
        document.querySelectorAll(".heffect").forEach(el => {
            el.style.transform = "none"; // Reset transformations
        });
        hoverEffectApplied = false;
    }
}

// Run on page load
handleHoverEffect();

// Run on window resize
window.addEventListener("resize", handleHoverEffect);


function valueset(){
    gsap.set("#nav .ani",{y:"-100%",opacity:0});
    gsap.set("#home_main .parent .child", {y:"100%"})
}

function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");

        spanParent.classList.add("parent");
        spanChild.classList.add("child");

        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);

        elem.innerHTML = "";
        elem.appendChild(spanParent);
    })
}
function loaderanimation(){
    var tl = gsap.timeline();

tl
.from("#loader .child span",{
    x:100,
    stagger: .2,
    duration:1.4,
    ease:Power3.easeInOut
})
.to("#loader .parent .child",{
    y:"-100%",
    duration:1,
    ease:Circ.easeInOut
})
.to("#loader",{
    height:0,
    duration:1,
    ease:Circ.easeInOut
})
.to("#black",{
    height:"100%",
    top:0,
    duration:1,
    delay: -.8,
    ease:Circ.easeInOut
})
.to("#black",{
    height:0,
    top:0,
    duration:1,
    delay:-.3,
    ease:Circ.easeInOut,
    onComplete: function(){
        animationHomepage();
    }
})
}
function animationHomepage(){

    var tl =gsap.timeline();
    tl
    .to("#nav .ani",{
        y:0,
        opacity:1,
        stagger: .05,
        ease: Expo.easeInOut
    })
    .to("#home_main .parent .child",{
        y:0,
        stagger: .1,
        duration: 1,
        ease: Expo.easeInOut
    })
}


revealToSpan();
valueset();
loaderanimation();

let subMenu = document.getElementById("subMenu");
let menuIcon = document.getElementById("menu-icon");

function toggleMenu() {
    subMenu.classList.toggle("open-menu");
}


gsap.to(".fleftlm",{
    scrollTrigger:{
        trigger: "#project_images",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub:1
    },
    y: "-300%",
    ease: Power1
})

let sections = document.querySelectorAll(".fleftlm");

Shery.imageEffect(".images", {
    style: 3,
    config: {onMouse:{value:1}},
    slideStyle: (setScroll) => {
      sections.forEach(function(section,index){
        ScrollTrigger.create({
            trigger: section,
            start:"top top",
            scrub: 1,
            onUpdate: function(prog){
                setScroll(prog.progress + index)
            },
        });
      });
    },
});

let subMenu1 = document.getElementById("subMenu1");
function toggleMenu1(){
    subMenu1.classList.toggle("open-menu1");
}

document.addEventListener("DOMContentLoaded", function () {
    function applyFadeEffect() {
        if (window.innerWidth <= 450) {
            const projectBoxes = document.querySelectorAll(".fleftlm");

            function fadeInOnScroll() {
                projectBoxes.forEach((box) => {
                    const boxTop = box.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;

                    if (boxTop < windowHeight - 50) {
                        box.classList.add("fade-in");
                    }
                });
            }

            window.addEventListener("scroll", fadeInOnScroll);
            fadeInOnScroll();
        }
    }

    applyFadeEffect();
    window.addEventListener("resize", applyFadeEffect);
});

function handleCursorEffect() {
    if (window.innerWidth < 450) {
        document.body.style.cursor = "default"; // Reset to default cursor
    } else {
        Shery.mouseFollower();
    }
}

// Run on page load
handleCursorEffect();

// Run on window resize
window.addEventListener("resize", handleCursorEffect);
