const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



// window.addEventListener('scroll', function() {
//     const logo = document.getElementById('scroll-logo');
//     if (window.scrollY > 100) { // Adjust the scroll position as needed
//       logo.style.display = 'block';
//     } else {
//       logo.style.display = 'none';
//     }
//   });





// Get the button
let mybutton = document.getElementById("myBtn");
let whatsappBtn = document.getElementById("whtsp-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.classList.add('showbtn');
        whatsappBtn.classList.add('showwhtsp');
    } else {
        mybutton.classList.remove('showbtn');
        whatsappBtn.classList.remove('showwhtsp');
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




// Function to check if an element is in viewport
function isElementInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    var listItems = document.querySelectorAll('.list-item');

    listItems.forEach(function (item) {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();





// for mission and vision page values


// Function to check if an element is in the viewport
function isMsElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function MshandleScroll() {
    const listItems = document.querySelectorAll('.value-item');

    listItems.forEach(function (item) {
        if (isMsElementInViewport(item)) {
            item.classList.add('visible-values');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', MshandleScroll);

// Initial check on page load
MshandleScroll();



document.getElementById('booking-btn').addEventListener('click', function () {
    const phoneNumber = '+917510102069'; // Replace with the target phone number
    const message = 'Hello! I am interested in booking a slot for FootBee turf. Please provide the available slots and details.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    alert('You are being redirected to WhatsApp to book your slot. Please confirm your booking there.');
    window.location.href = whatsappUrl;
});



document.getElementById('whtsp-btn').addEventListener('click', function () {
    const phoneNumber = '+917510102069'; // Replace with the target phone number
    const message = 'Hello! I am interested in your construction services and would like to discuss my project with you.';
    // Basic message for a construction company
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
});