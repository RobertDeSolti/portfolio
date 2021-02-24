(function () {
 const header = document.querySelector('.section-header');
 window.onscroll = () => {
	 if (window.pageYOffset > 50) {
		 header.classList.add('section-header_active');
	 } else {
		 header.classList.remove('section-header_active');
	}
 };
}());