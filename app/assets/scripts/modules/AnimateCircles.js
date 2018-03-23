import $ from 'jquery';

class AnimateCircles{
	constructor(){
		this.itemsToAnimate = $('.circles__circle');
		this.createWaypoints();
		this.hideInitially();
	}

	hideInitially() {
		this.itemsToAnimate.addClass("reveal-item");
	}

		createWaypoints() {
		var that = this;
		this.itemsToAnimate.each(function(){
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("animate--bounce-in");
				},
				offset: "80%"
			});
		});
	}
}

export default AnimateCircles;

