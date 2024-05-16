gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
        return gsap.from(targets, { duration: config.duration, opacity: 0 });
    },
    defaults: { duration: 2 }, //defaults get applied to any "config" object passed to the effect
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});

function sectionOne() {

    var tl = gsap.timeline();

    tl.from(".section1", {
        opacity: 0,
        duration: 0.1,
    })

    tl.from("nav h1, nav .part-2 h4, nav .part-2 button", {
        duration: 0.8,
        delay: 0.3,
        opacity: 0,
        scale: 0,
        transformOrigin: "0% 50% -50",
        ease: "back(1)",
        stagger: 0.01
    })

    tl.from(".hero .left h1", {
        scale: 1.1,
        opacity: 0,
        delay: 0.3,
        duration: 0.6,
        stagger: 0.2,
        x: -200,
    });

    tl.fade(".hero .left p", { duration: 1 });

    tl.from(".hero .left button", {
        scale: 1.2,
        opacity: 0,
        ease: "bounce.out",
    });

    tl.from(".hero .right img", {
        opacity: 0,
        duration: 0.5,
        scale: 1.2,
        filter: "blur(2vw)",
    }, "-=1");


    tl.from(".secbtm img", {
        scrollTrigger: {
            trigger: ".secbtm",
            scroller: "body",
            start: "top 50%",
            end: "top 0",
            scrub: 1,
        },
        opacity: 0,
        y: 30,
        stagger: 0.1,
        scale: 0,
        ease: "power4",
        duration: 0.6,
    });

}

function sectionTwo() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            start: "top 70%",
            end: "top -30%",
            scrub: 2,
        }
    });

    tl2.from(".section2", {
        y: 30,
        opacity: 0,
        duration: 2,
        delay: 0.5,
    });

    tl2.from(".serv h3", {
        width: 0,
        duration: 1.4,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".serv h3",
            scroller: "body",
            start: "top 50%",
        }
    });

    tl2.from(".serv p", {
        opacity: 0,
        y: 30,
        scale: 0,
        ease: "power4",
        duration: 1,
        delay: 1.2,
    });

    tl2.from(".cards", {
        filter: "blur(0.3vw)",
        opacity: 0,

    });

    tl2.from(".e1", {
        opacity: 0,
        y: -60,
        duration: 2,
        delay: 0.7,
    }, "a");

    tl2.from(".e2", {
        opacity: 0,
        x: 60,
        duration: 2,
        delay: 0.7,
    }, "b");

    tl2.from(".e3", {
        opacity: 0,
        x: -60,
        duration: 2,
        delay: 0.7,
    }, "b");

    tl2.from(".e4", {
        opacity: 0,
        y: 60,
        duration: 2,
        delay: 0.7,
    }, "a");

    tl2.from(".lmth", {
        scrollTrigger: {
            trigger: ".lmth",
            scroller: "body",
            start: "top 50%",
            end: "top 30%",
            scrub: 2,
        },
        filter: "blur(1vw)",
        backgroundColor: "white",
        opacity: 0,
    });
}

function btmAni() {

    var tl3 = gsap.timeline();

    tl3.from(".cs", {
        scrollTrigger: {
            trigger: ".cs",
            scroller: "body",
            start: "top 50%",
            end: "top 30%",
            scrub: 2,
        },
        opacity: 0,
        scale: 1.1,
    });

    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".lstdiv",
            scroller: "body",
            start: "top 100%",
            end: "top 50%",
            scrub: 2,
        },
    });

    tl4.from(".lstdiv", {
        filter: "blur(0.1vw)",
        backgroundColor: "white",
        duration: 1,
        delay: 0.5,
    });

    tl4.from(".line", {
        height: 0,
    })

    tl4.from(".wrap .ele p, .wrap .ele h3", {
        opacity: 0,
        scale: 1.1,
        stagger: 0.2,
    })
}

sectionOne();
sectionTwo();
btmAni();