import $ from 'jquery';

class Preloader {
	constructor() {
		this.siteBody = $('body');
		this.preloaderContainer = $('.preloader');
		this.preloaderIcon = $('.preloader__icon'); 
		this.events();
		
	}

	events() {
		$(window).on('load', this.loadWindow.bind(this));
	}

	loadWindow(){
		this.preloaderIcon.fadeOut();
		this.preloaderContainer.delay(350).fadeOut('slow');
		this.siteBody.delay(350).css({'overflow': 'visible'});
	}
}

export default Preloader;
