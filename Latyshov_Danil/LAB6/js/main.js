const wow = new WOW({
  boxClass:     'wow',
  animateClass: 'animate__backInDown',
  offset:       30,
  mobile:       true,
  live:         true
})
wow.init();
function toggleMenu() {
                var burgerContainer = document.getElementById("burgerMenuContainer");
                var burgerIcon = document.querySelector('.burger-menu');
                burgerContainer.style.display = (burgerContainer.style.display === "block") ? "none" : "block";
                burgerIcon.classList.toggle('change');
            }