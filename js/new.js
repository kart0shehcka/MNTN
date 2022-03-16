const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');

navBtn.addEventListener('click', function () {
	mobileNav.classList.toggle('mobile-nav-active');
});