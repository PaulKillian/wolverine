import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const leftSlide = () => {
    gsap.from(".slideBottom", {
        x: 2000, 
        scale: 3,
        rotate: 90,
        duration: 1
    });
}

export const rightSlide = () => {
    gsap.from(".marvelBottom", {
        x: -2000,  
        scale: 3,
        rotate: 180,
        duration: 1
    });
}

export const topSlide = () => {
    gsap.from(".slideTop", {
        y: -2000,  
        scale: 3,
        rotate: 90,
        duration: 1
    });
}

export const bottomSlide = () => {
    gsap.from(".marvelTop", {
        y: 2000,  
        scale: 3,
        rotate: 180,
        duration: 1
    });
}

export const scroll = () => {
    gsap.to(".container", {
        yPercent: 100,
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