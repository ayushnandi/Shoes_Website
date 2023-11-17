const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");
    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
      });
    });
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
      });
    });
    document.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 70,
        top: dets.y - 80,
      });
    });
  }

videoconAnimation()

function loadingpage(){
  gsap.from("#page1 .heading-1 h1",{
      y:300,
      opacity:0,
      delay: 0.4,
      duration:0.5,
      stagger: 0.3,
  })
  gsap.from("#page1 .heading-1 h6",{
    y:200,
    opacity:0,
    delay: 0.6,
    duration:0.5,
    stagger: 0.3,
})
  gsap.from("#page1 #video-container",{
    opacity:0,
    delay: 0.65,
    duration:0.6,
})
}
loadingpage()