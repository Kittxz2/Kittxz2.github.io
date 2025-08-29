gsap.registerPlugin(ScrollTrigger);

let content = document.querySelectorAll('.content')
content.forEach((img) => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: img,
            toggleActions: 'restart none none reset'
        }
    })

    tl.set(img, {autoAlpha: 1});
    tl.from(img, ({
        duration: 1.5,
        ease: "expo.out",
        xPercent: -300
    }))
})