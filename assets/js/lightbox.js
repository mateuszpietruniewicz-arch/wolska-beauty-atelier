/*
	Galeria — lightbox oraz płynne pojawianie się zdjęć po załadowaniu,
	czysty vanilla JS, bez zewnętrznych bibliotek.
*/

// Fade-in dla zdjęć galerii — dodaje klasę .loaded gdy <img> się załaduje
// (patrz #work .image.fit img w custom.css), żeby uniknąć "wyskoczenia"
// niedoładowanego jpega zamiast płynnego pojawienia się.
(function () {
	'use strict';

	document.querySelectorAll('#work .image.fit img').forEach(function (img) {
		if (img.complete) {
			img.classList.add('loaded');
		} else {
			img.addEventListener('load', function () {
				img.classList.add('loaded');
			});
		}
	});

})();

(function () {
	'use strict';

	var lightbox = document.getElementById('lightbox');
	if (!lightbox) return;

	var lightboxImg = lightbox.querySelector('img');
	var closeBtn = lightbox.querySelector('.lightbox-close');
	var triggers = document.querySelectorAll('.lightbox-trigger');

	function openLightbox(src, alt) {
		lightboxImg.setAttribute('src', src);
		lightboxImg.setAttribute('alt', alt || '');
		lightbox.classList.add('active');
		lightbox.setAttribute('aria-hidden', 'false');
	}

	function closeLightbox() {
		lightbox.classList.remove('active');
		lightbox.setAttribute('aria-hidden', 'true');
		lightboxImg.setAttribute('src', '');
	}

	triggers.forEach(function (trigger) {
		trigger.addEventListener('click', function (event) {
			event.preventDefault();
			var img = trigger.querySelector('img');
			openLightbox(trigger.getAttribute('href'), img ? img.getAttribute('alt') : '');
		});
	});

	closeBtn.addEventListener('click', closeLightbox);

	lightbox.addEventListener('click', function (event) {
		if (event.target === lightbox) closeLightbox();
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && lightbox.classList.contains('active'))
			closeLightbox();
	});

})();
