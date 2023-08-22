import gsap from "gsap";

// Declare a general timeline to use in all the animation functions.

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".texts-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".preloader img", {
      duration: 0,
      opacity: 1,
      delay: 1,
      ease: "Power3.easeOut",
    })
    .from(".texts-container span", {
      duration: 1.5,
      y: 70,
      skewY: 30,
      stagger: 0.5,
      ease: "Power3.easeOut",
    })

    .to(".texts-container span", {
      duration: 1,
      y: 70,
      skewY: -30,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .to(".preloader img", {
      height: "15em",
      duration: 1.5,
      opacity: 0,
      ease: "Power3.easeOut",
    })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .to(
      ".preloader",
      {
        duration: 1.5,
        css: { display: "none" },
        ease: "Power3.easeOut",
      },
      "-=2"
    );
};

export const fadeUp = (el, delay = 0) => {
  tl.from(el, {
    y: 150,
    duration: 1,
    delay,
    opacity: 0,
    ease: "power3.Out",
  });
};
