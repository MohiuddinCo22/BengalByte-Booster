

var tl = gsap.timeline()

 tl.from("#header .nav_logo",{
   y:-100,
   duration:1,
   delay:0.5,
     opacity:0,
 stagger:0.2
 })

 tl.from(".h-page-2 h1,.h-page-2 h2",{
   y:100,
   opacity:0,
   stagger:0.2
 })

 tl.from(".h-page-2 h5",{
   scale:0,
   opacity:0
 })
 tl.to("h5",{
   y:40,
   repeat:-1,
   duration:1
 })

 tl.from(".section-heading h4,.section-heading h2,.about-heading",{
   x:-500,
   opacity:0,
   duration:1,
   stagger:0.5,
   scrollTrigger:{
       trigger:".section-heading h4,.section-heading h2",
     scroller:"body",
     // markers:true,
     start:"top 50%",
     end:"top 20%",
     scrub:5
   }
 })

tl.from(".about-left .main-ab-para,.about-left .about-para,.about-left .Offer,.about-left .offer-para",{
  x:-500,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
    trigger:".about-left .main-ab-para,.about-left .about-para,.about-left .Offer,.about-left .offer-para",
    scroller:"Body",
    // markers:true,
    start:"top 50%",
    end:"top 20%",
    scrub:5
  }
})

tl.from(".about-left .choose-head,.about-left .choose",{
  x:-500,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
    trigger:".about-left .choose-head,.about-left .choose",
    scroller:"Body",
    // markers:"true",
    start:"top 70%",
    end:"top 20%",
    scrub:5
  }
})

tl.from(".about-left .read-more",{
  x:-500,
  opacity:0,
  duration:1,
  stagger:0.2,
  scrollTrigger:{
    trigger:".about-left .read-more",
    scroller:"Body",
    // markers:"true",
    start:"top 70%",
    end:"top 20%",
    scrub:5
  }
})

tl.from(".about-right .about-img",{
  x:500,
  opacity:0,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
    trigger:".about-right .about-img",
    scroller:"Body",
    start:"top 50%",
    end:"top 20%",
    scrub:5
  }
})

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    }

    else scrollProgress.style.display = "none";

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = `conic-gradient(
        #03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    
}


window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// var loader = document.getElementById("center");

// window.addEventListener("load", function(){
//     loader.style.display = "none";
// })
