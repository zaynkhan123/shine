function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
init()

var circle = document.querySelector(".circle")
var sec = document.querySelector(".circle h6")
var bot = document.querySelector("#bottom")
var bt1 = document.querySelector(".p1 p")
var bt2 = document.querySelector(".p2 p")

circle.addEventListener("mouseenter",function(){
    circle.style.border = `2px solid #22180F`
    sec.style.color = `#22180f`
    bot.style.backgroundColor = `white`
    bt1.style.color = `black`
    bt2.style.color = `black`
})
circle.addEventListener("mouseout",function(){
    circle.style.border = `2px solid #f7f7f7`
    sec.style.color = `#f7f7f7`
    bot.style.backgroundColor = `#22180F`
    bt1.style.color = `#f7f7f7`
    bt2.style.color = `#f7f7f7`
})

var umrahh = gsap.timeline()
umrahh.to("#nav",{
    top : `4vh`,
    opacity : 1,
    duration : 1
})
.to("#page1 .text",{
    left : `8vh`,
    opacity : 1,
})
.to("#right",{
    left : `55vw`,
    opacity : 1,
    duration: 0.1,
})
.to(".elem h5",{
    left : `23vw`,
    opacity : 1,
    duration: 0.1,
})

var a = gsap.timeline({
    repeat: -1
});

a.to("#center .one",{ 
    width : "100%",
    ease: Expo.easeInOut,
    duration : 2,
    stagger : 1.5,
})

gsap.to("#page2 #center",{
    scale: 1,
    ease: Expo.easeInOut,
    transition: 0.6,
    scrollTrigger:{
        scroller: "#main",
        Trigger: "#center",
        start: "40%",
        top:"50%",
        end: "50%",
        // markers: true,
    }
})
var overlay = document.querySelector("#overlay")
var iscroll = document.querySelector("#scroll")

overlay.addEventListener("mouseenter",function(){
    iscroll.style.scale = 1
})

overlay.addEventListener("mouseleave",function(){
    iscroll.style.scale = 0
})
 
overlay.addEventListener("mousemove",function(dets){
    iscroll.style.left = `${dets.x - +50}px`
    iscroll.style.top = `${dets.y - 50}px`
})

// text hover first div
var txt = document.querySelector(".one1 h3")
var k1 = document.querySelector(".k1 img")
var k2 = document.querySelector(".k2 img")
var k3 = document.querySelector(".k3 img")

txt.addEventListener("mouseenter",function(){
    txt.style.transform = `capitalize`
    k1.style.opacity = 1
    k2.style.opacity = 1
    k3.style.opacity = 1
    var t1 = gsap.timeline({
        repeat: -1
    });
    t1.to(".k1 img",{
        top: "-3%",
        left: "5%",
    })
    .to(".k2 img",{
        bottom: "5%",
    })
    .to(".k3 img",{
        bottom: "2%",
    })
})
txt.addEventListener("mouseleave",function(){
    txt.style.transform = `capitalize`
    k1.style.opacity = 0
    k2.style.opacity = 0
    k3.style.opacity = 0
})

// text hover second div
var txt2 = document.querySelector(".two h3")
var a1 = document.querySelector(".a1 img")
var a2 = document.querySelector(".a2 img")
var a3 = document.querySelector(".a3 img")

txt2.addEventListener("mouseenter",function(){
    txt.style.transform = `capitalize`
    a1.style.opacity = 1
    a2.style.opacity = 1
    a3.style.opacity = 1
    var t2 = gsap.timeline({
        repeat: -1
    });
    t2.to(".a1 img",{
        top: "12%",
    })
    .to(".a2 img",{
        bottom: "5%",
    })
    .to(".a3 img",{
        bottom: "-8%",
    })
})
txt2.addEventListener("mouseleave",function(){
    txt.style.transform = `capitalize`
    a1.style.opacity = 0
    a2.style.opacity = 0
    a3.style.opacity = 0
})

// text hover three div
var txt3 = document.querySelector(".three h3")
var m1 = document.querySelector(".m1 img")
var m2 = document.querySelector(".m2 img")

txt3.addEventListener("mouseenter",function(){
txt.style.transform = `capitalize`
    m1.style.opacity = 1
    m2.style.opacity = 1
    var t3 = gsap.timeline({
        repeat: -1
    });
    t3.to(".m1 img",{
        bottom: "6%",
    })
    .to(".m2 img",{
        top: "-6%",
    })
})
txt3.addEventListener("mouseleave",function(){
    txt.style.transform = `capitalize`
    m1.style.opacity = 0
    m2.style.opacity = 0
})

// text hover four div
var txt4 = document.querySelector(".four h3")
var r1 = document.querySelector(".r1 img")
var r2 = document.querySelector(".r2 img")
var r3 = document.querySelector(".r3 img")

txt4.addEventListener("mouseenter",function(){
    txt.style.transform = `capitalize`
    r1.style.opacity = 1
    r2.style.opacity = 1
    r3.style.opacity = 1
    var t4 = gsap.timeline({
        repeat: -1
    });
    t4.to(".r1 img",{
        top: "10%",
    })
    .to(".r2 img",{
        top: "10%",
    })
    .to(".r3 img",{
        bottom: "7%",
    })
})
txt4.addEventListener("mouseleave",function(){
    txt.style.transform = `capitalize`
    r1.style.opacity = 0
    r2.style.opacity = 0
    r3.style.opacity = 0
})

// text hover five div
var txt5 = document.querySelector(".five h3")
var n1 = document.querySelector(".n1 img")
var n2 = document.querySelector(".n2 img")
var n3 = document.querySelector(".n3 img")

txt5.addEventListener("mouseenter",function(){
    txt.style.transform = `capitalize`
    n1.style.opacity = 1
    n2.style.opacity = 1
    n3.style.opacity = 1
    var t5 = gsap.timeline({
        repeat: -1
    });
    t5.to(".n1 img",{
        bottom: "10%",
    })
    .to(".n2 img",{
        bottom: "5%",
    })
    .to(".n3 img",{
        bottom: "2%",
    })
})
txt5.addEventListener("mouseleave",function(){
    txt.style.transform = `capitalize`
    n1.style.opacity = 0
    n2.style.opacity = 0
    n3.style.opacity = 0
})


// 4-page ke liye krna hai --->
var first = document.querySelector("#left-pics .first img")
var second = document.querySelector("#left-pics .second img")
var third = document.querySelector("#left-pics .third img")

var btn1 = document.querySelector("#rght .button1 button")
var no = document.querySelector("#rght .no")
var btn2 = document.querySelector("#rght .button2 button")

var f1 = document.querySelector(".first1 img")
var s2 = document.querySelector(".second2 img")
var s3 = document.querySelector(".third3 img")

var begin = document.querySelector(".begin h2")
var inter = document.querySelector(".inter h2")
var high = document.querySelector(".high h2")

btn2.addEventListener("click",function(){
    second.style.opacity = 1
    s2.style.opacity = 1
    begin.style.opacity = 0
    inter.style.opacity = 1
    no.innerHTML = `02/02`
})  

btn1.addEventListener("click",function(){
    second.style.opacity = 0
    s2.style.opacity = 0
    begin.style.opacity = 1
    inter.style.opacity = 0 
    no.innerHTML = `01/02`
})

var frst = document.querySelector(".frst .dow")
var dow = document.querySelector(".frst .dow h3")

dow.addEventListener("mouseenter",function(){
    frst.style.backgroundColor = `white`
    dow.style.color = `#000`
})
dow.addEventListener("mouseleave",function(){
    frst.style.backgroundColor = `#22180F`
    dow.style.color = `#fff`
})

//forth4 pages ke lliye 
var frst1 = document.querySelector(".dowm")
var dow1 = document.querySelector(".dowm h3")

dow1.addEventListener("mouseenter",function(){
    frst1.style.backgroundColor = `white`
    dow1.style.color = `#000`
})
dow1.addEventListener("mouseleave",function(){
    frst1.style.backgroundColor = `#22180F`
    dow1.style.color = `#fff`
})

var khan = gsap.timeline()

khan.to("#one .one1 h3",{
    left: `0%`,
    scrollTrigger : {
        scroller: "#main",
        Trigger: "#page3",
        start: "150%",
        top:"170%",
        end: "180%",
    
    }
})
.to("#one .two h3",{
    left: `0%`,
    scrollTrigger : {
        scroller: "#main",
        Trigger: "#page3",
        start: "160%",
        top:"170%",
        end: "180%",
    
    }
})
.to("#one .three h3",{
    left: `0%`,
    scrollTrigger : {
        scroller: "#main",
        Trigger: "#page3",
        start: "170%",
        top:"180%",
        end: "190%",
        // markers : true,
    }
})
.to("#one .four h3",{
    left: `0%`,
    scrollTrigger : {
        scroller: "#main",
        Trigger: "#page3",
        start: "180%",
        top:"190%",
        end: "200%",
        // markers : true,
    }
})
.to("#one .five h3",{
    left: `0%`,
    scrollTrigger : {
        scroller: "#main",
        Trigger: "#page3",
        start: "180%",
        top:"190%",
        end: "200%",
        // markers : true,
    }
})
.to("#lft",{
    left: `0%`,
    scrollTrigger : {
        scroller: "#main",
        Trigger: "#page4",
        start: "240%",
        // top:"350%",
        end: "240%",
        // markers : true,
    }
})
.to("#rght",{
    left: `0%`,
    scrollTrigger : {
        scroller: "#main",
        Trigger: "#page4",
        start: "240%",
        // top:"350%",
        end: "240%",
        // markers : true,
    }
})
.to(".frst",{
    left: `13vw`,
    scrollTrigger : {
        scroller: "#main",
        Trigger: "#page5",
        start: "320%",
        end: "320%",
    }
})
.to(".thiry",{
    right: `4.5vw`,
    scrollTrigger : {
        scroller: "#main",
        Trigger: "#page5",
        start: "320%",
        end: "320%",
    }
})

.to("#page5 .text",{
    left: `81vw`,
    scrollTrigger : {
        scroller: "#main",
        Trigger: "#page5",
        start: "320%",
        end: "320%",
    }
})