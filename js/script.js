const careersBox = document.querySelector('.careers');
const sliderBox = document.querySelector('.slider');
const projectsBox = document.querySelector('.projects-slider');
const navbarNav = document.querySelector('.navbar-nav');
const customNavbar = document.querySelector('.custom-navbar');

// const navbarData = [
//     {
//         id: 0,
//         navItem: "home",
//         navLink: "https://www.google.com/"
//     },
//     {
//         id: 1,
//         navItem: "about us",
//         navLink: "https://www.google.com/"
//     },
//     {
//         id: 2,
//         navItem: "activite",
//         navLink: "https://www.google.com/"
//     },
//     {
//         id: 3,
//         navItem: "careers",
//         navLink: "https://www.google.com/"
//     },
//     {
//         id: 4,
//         navItem: "news & media",
//         navLink: "https://www.google.com/"
//     },
//     {
//         id: 5,
//         navItem: "sustainability",
//         navLink: "https://www.google.com/"
//     },
//     {
//         id: 6,
//         navItem: "investor relations",
//         navLink: "https://www.google.com/"
//     }
// ]

// navbarData.map(index => navbarNav.innerHTML += `
//     <a class="nav-link text-black mx-2" href="`+ index.navLink + `">` + index.navItem + `</a>`
// )

const demoCareerData = [
    {
        id: 0,
        title: "Puplis and school leavers",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        buttonLink: "https://www.google.com/"
    },
    {
        id: 1,
        title: "students",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        buttonLink: "#"
    },
    {
        id: 2,
        title: "graduates",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        buttonLink: "#"
    },
    {
        id: 3,
        title: "professionals",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        buttonLink: "#"
    }
]

demoCareerData.map(el => careersBox.innerHTML += `
<div class="col-3 p-0 m-0 border borderlight border-3 d-flex align-items-end careers-card  cursor-pointer text-white text-capitalize">
<div class="w-100 p-3">
    <h3 class="m-0 p-0">`+ el.title + `</h3>
    <p>`+ el.content + `</p>
    <a href="`+ el.buttonLink + `" target="_self" class="btn btn-primary text-capitalize rounded-0">more info</a>
</div>
</div>
`)



const demoSliderData = [
    {
        id: 0,
        shortTitle: "we build",
        title: "Berlin",
        imageName: "berlin",
        buttonLink: "https://www.google.com/"
    },
    {
        id: 1,
        shortTitle: "we build",
        title: "new york",
        imageName: "new-york",
        buttonLink: "#"
    },
    {
        id: 2,
        shortTitle: "we build",
        title: "prague",
        imageName: "hamburg",
        buttonLink: "#"
    },
    {
        id: 3,
        shortTitle: "we build",
        title: "hamburg",
        imageName: "prague",
        buttonLink: "#"
    }
]

demoSliderData.map(index => sliderBox.innerHTML += `
<div class="col-3 p-0 m-0 border borderlight border-3 d-flex align-items-end slider-card cursor-pointer position-relative overflow-hidden text-white text-capitalize">
<img class="w-100 p-0 m-0 d-flex " src="images/`+ index.imageName + `.jpg"/>
<div class="w-100 p-3 position-absolute bottom-0">
<span class="m-0 p-0 text-capitalize">`+ index.shortTitle + `</span>
    <h3 class="m-0 p-0 mb-3">`+ index.title + `</h3>
    <a href="`+ index.buttonLink + `" target="_self" class="btn btn-primary rounded-0">more info</a>
</div>
</div>
`)

const projectsSlideData = [
    {
        id: 0,
        shortTitle: "Hamburg, Germany",
        title: " Elbe Philharmonic Hall",
        imageName: "berlin",
        buttonLink: "https://www.google.com/"
    },
    {
        id: 1,
        shortTitle: "Edinburgh, Scotland",
        title: " Queensferry Crossing",
        imageName: "new-york",
        buttonLink: "#"
    },
    {
        id: 2,
        shortTitle: " New York, USA",
        title: "The Spiral",
        imageName: "hamburg",
        buttonLink: "#"
    },
    {
        id: 3,
        shortTitle: "Sydney, Australia",
        title: " Sydney Metro",
        imageName: "prague",
        buttonLink: "#"
    }
]

projectsSlideData.map(index => projectsBox.innerHTML += `
<div class="col-3 p-0 m-0 border borderlight border-3 d-flex align-items-end slider-card cursor-pointer position-relative overflow-hidden text-white text-capitalize">
<img class="w-100 p-0 m-0 d-flex " src="images/`+ index.imageName + `.jpg"/>
<div class="w-100 p-3 position-absolute bottom-0">
<span class="m-0 p-0 text-capitalize">`+ index.shortTitle + `</span>
    <h3 class="m-0 p-0 mb-3">`+ index.title + `</h3>
    <a href="`+ index.buttonLink + `" target="_self" class="btn btn-primary text-capitalize rounded-0">look at project</a>
</div>
</div>
`)

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        customNavbar.classList.add('on-scroll');
    } else {
        customNavbar.classList.remove('on-scroll');
    }
})

