const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

// function toggleDropdown(event) {
//     event.preventDefault();
//     var dropdown = event.target.nextElementSibling;
//     dropdown.classList.toggle('show-dropdown');
// }

// // Add event listeners to each dropdown trigger
// var dropdownTriggers = document.querySelectorAll('nav ul li > a');
// dropdownTriggers.forEach(function(trigger) {
//     trigger.addEventListener('click', toggleDropdown);
// });

// // Close dropdowns when clicking outside
// document.addEventListener('click', function(event) {
//     dropdownTriggers.forEach(function(trigger) {
//         var dropdown = trigger.nextElementSibling;
//         if (!dropdown.contains(event.target)) {
//             dropdown.classList.remove('show-dropdown');
//         }
//     });
// });

