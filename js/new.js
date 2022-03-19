const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const bodyScroll = document.body;







navBtn.addEventListener('click', function (event) {
	event.stopPropagation('click');
	mobileNav.classList.toggle('mobile-nav-active');
	bodyScroll.classList.toggle('no-scroll');
});



window.addEventListener('click', function () {
	console.log("Clik on window");


	if (bodyScroll.classList.contains('no-scroll')) {
		mobileNav.classList.toggle('mobile-nav-active');
		bodyScroll.classList.toggle('no-scroll');
	}
});



mobileNav.addEventListener('click', function (event) {
	event.stopPropagation('click');
});