import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const leftSlide = () => {
    gsap.from(".marvelTop", {
        opacity: 0, 
        y: 1000, 
        x: 1000, 
        rotation: 360,
        scale: 3,
        duration: 1
    });
}

export const rightSlide = () => {
    gsap.from(".marvelBottom", {
        opacity: 0, 
        y: -1000, 
        x: -1000, 
        rotation: -360,
        scale: 3,
        duration: 1
    });
}

export const scroll = () => {
    gsap.to(".marvelTop, .marvelBottom, .container", {
        yPercent: 150,
        rotate: 2,
        ease: "slow",
        scrollTrigger: {
            trigger: "#spider",
            scrub: true
        }
    })
}

export const scrollFade = () => {
    gsap.to(".container", {
        opacity: 0,
        ease: "sine",
        scrollTrigger: {
            trigger: "#spider",
            scrub: true
        }
    })
}