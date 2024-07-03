// script.js
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});





// Function to check if an element is in the viewport
function isGalleryElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function GalleryhandleScroll() {
    const listItems = document.querySelectorAll('.gallery-item');

    listItems.forEach(function (item) {
        if (isGalleryElementInViewport(item)) {
            item.classList.add('show-gallery');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', GalleryhandleScroll);

// Initial check on page load
GalleryhandleScroll();


window.addEventListener('scroll', function() {
    var filterOptions = document.querySelector('.filter-options');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Adjust 100 to the desired scroll threshold
        filterOptions.classList.add('show');
    } else {
        filterOptions.classList.remove('show');
    }
});
