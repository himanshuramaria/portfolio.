

function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
    var parent = document.createElement("span");
    var child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML = "";
    elem.appendChild(parent);
})
}
revealToSpan();

var t1 = gsap.timeline();

t1
.from(".child span",{
    x:100,
    stagger: .2,
    duration:1.4,
    ease: Power3.easeInOut
})
t1
.to(".parent .child",{
    y:"-100%",
    duration: 1,
    ease: Expo.easeInOut
})

.to("#loader", {
    height:0,
    duration:1,
    delay: -0.5,
    ease: Circ.easeInOut
})

.to("#green", {
    height:"100%",
    top:0,
    duration:1,
    delay: -1,
    ease: Expo.easeInOut
})

.to("#green", {
    height:0,
    duration: 1,
    delay:-0.4,
    ease : Expo.easeInOut
})


.to("#web",{
    height: "100%",
    duration:1,
    delay:-0.5,
    ease: Circ.easeInOut
})
.to("#head",{
    // position: "relative",
    // top:0,
    height:"auto",
    width: "100%",
    duration:0.3,
    delay:-0.4,
    ease: Expo.easeInOut
})



var header = document.querySelector("header")

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 0);
    
});


var typed = new Typed(".typing", {
    strings: ["Full Stack Web Developer", "Coder,"],
    typeSpeed : 100,
    backSpeed : 60,
    loop: true
})

// function show(){
//     document.getElementById("stat").classList.add("fullHeight");
// }