gsap.registerPlugin(ScrollTrigger);

let container_img = document.querySelectorAll('.container-content');
console.log(container_img)
container_img.forEach((img) => {
    console.log(img)
    let image = img.querySelector('img');
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger : img,
            toggleActions: 'restart none none reset'
        }
    })

    tl.set(img, {autoAlpha: 1});
    tl.from(img, {
        duration: 1.5,
        xPercent: -200,
        ease: 'Power2.out',
        ease: Bounce.easeOut,
    });
})