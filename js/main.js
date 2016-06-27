var arrowDiv = document.getElementById('arrow'); // Select arrow div
var arrow = document.getElementById('scroll-a');
var arrowLink = document.querySelector('.arrow-link');


window.addEventListener('scroll', function () {

	if ( this.pageYOffset >= 750) {

		arrowDiv.classList.add('sticky');
		arrowDiv.classList.remove('scroll-arrow');
		arrowLink.setAttribute('href', '#home');
		arrowLink.setAttribute('onclick', 'scrollToTop();return false');
		arrow.classList.add('pointer');
		

	} else {

		arrowDiv.classList.remove('sticky');
		arrowDiv.classList.add('scroll-arrow');
		arrowLink.setAttribute('href', '#');
		arrowLink.setAttribute('onclick', '#');
		arrow.classList.remove('pointer');
	}

	console.log(this.pageYOffset);

});


var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
		window.scrollBy(0,-50);
		timeOut=setTimeout('scrollToTop()',20);
	}
	else clearTimeout(timeOut);
}


