var arrowDiv = document.getElementById('arrow'); // Select arrow div
var arrow = document.getElementById('scroll-a');
var arrowLink = document.querySelector('.arrow-link');
var asher = document.getElementById('front');
var alley = document.getElementById('after');
var textnode = document.createTextNode('ALLEY');
var frontText = document.createTextNode('ASHER');


if (screen.width >= 600) {
	window.addEventListener('scroll', function () {

		if ( this.pageYOffset >= 705) {

			arrowDiv.classList.add('sticky');
			arrowDiv.classList.remove('scroll-arrow');
			arrowLink.setAttribute('href', '#home');
			arrowLink.setAttribute('onclick', 'scrollToTop();return false');
			arrow.classList.add('pointer');
			asher.appendChild(frontText);
			alley.appendChild(textnode);
			

		} else {

			arrowDiv.classList.remove('sticky');
			arrowDiv.classList.add('scroll-arrow');
			arrowLink.setAttribute('href', '#');
			arrowLink.setAttribute('onclick', '#');
			arrow.classList.remove('pointer');
			alley.removeChild(textnode);
			asher.removeChild(frontText);

		}

		console.log(this.pageYOffset);

	});
} else {
	window.addEventListener('scroll', function () {

		if ( this.pageYOffset >= 404) {

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

}


var timeOut;
function scrollToTop() {
	if (document.body.scrollTop!==0 || document.documentElement.scrollTop!==0){
		window.scrollBy(0,-50);
		timeOut = setTimeout('scrollToTop()',20);
	}
	else clearTimeout(timeOut);
}






