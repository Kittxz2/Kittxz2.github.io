gsap.registerPlugin(ScrollTrigger);

let container_main = document.querySelectorAll('.img-con')

container_main.forEach((img) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: img,
            toggleActions: 'restart none none reset'
        }
    })

    tl.set(img, {autoAlpha: 1});
    tl.from(img, {
        xPercent: 300,
        duration: 1.5,
        ease: "expo.out",
        delay: 0.5
    })
})