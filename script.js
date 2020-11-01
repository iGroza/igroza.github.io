function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    const X = (Math.random() * 100) //* (Math.round(Math.random()) ? 1 : -1);
    const Y = (Math.random() * 100) //* (Math.round(Math.random()) ? 1 : -1);

    star.style.transform = `translateX(${X}vw) translateY(${Y}vh)`;

    const depth = Math.round(Math.random() * 10) / 10 + 0.1

    const starWrapper = document.createElement('div')
    starWrapper.classList.add('star__wrapper')
    starWrapper.setAttribute('data-depth', depth)
    starWrapper.appendChild(star);
    return starWrapper
}

function generateStars(count) {
    const startContainer = document.querySelector('.star__container');
    for (i = 0; i < count; i++) {
        startContainer.appendChild(createStar())
    }

    let stars = document.querySelectorAll('.star')
    let animationDuration = 5000;

    for (let i = 0; i < stars.length; i++) {
        let randomDuration = Math.floor(Math.random() * animationDuration);
        stars[i].style.animationDelay = randomDuration + 'ms';
    }

    new Parallax($('.space')[0])
    let parallaxInstance = new Parallax($('.star__container')[0], {
        relativeInput: false,
        calibrateX: true,
        calibrateY: true
    });

    window.parallaxInstance = parallaxInstance

    let $html = $('html'),
			$container = $('.star__container');

	// Hide browser menu.
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

	// Setup FastClick.
	FastClick.attach(document.body);

	// Add touch functionality.
	if (Hammer.HAS_TOUCHEVENTS) {
		$container.hammer({drag_lock_to_axis: true});
		_.tap($html, 'a,button,[data-tap]');
	}

	// Add touch or mouse class to html element.
	$html.addClass(Hammer.HAS_TOUCHEVENTS ? 'touch' : 'mouse');


}

document.addEventListener('DOMContentLoaded', () => {
    generateStars(200)

    new fullpage('#fullpage', {
        navigation: true,
        // responsiveWidth: 700,
        anchors: ['title', 'about'],
        parallax: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: false,
        verticalCentered: true,


        onLeave: function (origin, destination, direction) {
            if (destination.anchor == "about") {
                let i = -1;
                const slidersCount = document.querySelectorAll('.slide').length
                if(this.interval) return
                this.interval = setInterval(() => {
                    i = i < slidersCount ? ++i : 0;
                    location.hash =  location.hash.match('about') ?  `#about/${i}` : location.hash
                }, 10000)
            } else {
                clearInterval(this.interval || 0)
                this.interval = 0
            }
        }
    });

})