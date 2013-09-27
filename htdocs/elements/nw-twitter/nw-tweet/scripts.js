/*
 * Functionality for the <nw-tweet>-element.
**/
Polymer('nw-tweet', {

	/*
	 * CSS-class for showing the tweet.
	 * Initially empty => tweet hidden
	**/
	show: '',

	/*
	 * On tweet-change the elapsed time gets computed
	 * and the show-class is set to `show`.
	**/
	tweetChanged: function () {
		this.tweet.elapsed_time = this.elapsedTime(this.tweet.created_at);
		this.asyncMethod(function () {
			this.show = 'show';
		}, null, this.tweet.index * 70);
	},

	/*
	 * Function for generating the elapsed time of the tweet's post date.
	 *
	 * @url https://twitter.com/javascripts/blogger.js
	**/
	elapsedTime: function (dateStr) {

		var values = dateStr.split(' '),
			parsed_date,
			relative_to,
			delta;

		dateStr = values[1] + ' ' + values[2] + ', ' + values[5] + ' ' + values[3];
		parsed_date = Date.parse(dateStr);
		relative_to = new Date();
		delta = parseInt((relative_to.getTime() - parsed_date) / 1000, 10);
		delta = delta + (relative_to.getTimezoneOffset() * 60);

		if ( delta < 60 ) {
			return 'less than a minute ago';
		}
		if ( delta < 120 ) {
			return 'about a minute ago';
		}
		if ( delta < (60*60) ) {
			return (parseInt(delta / 60, 10)).toString() + ' minutes ago';
		}
		if ( delta < (120*60) ) {
			return 'about an hour ago';
		}
		if ( delta < (24*60*60) ) {
			return 'about ' + (parseInt(delta / 3600, 10)).toString() + ' hours ago';
		}
		if ( delta < (48*60*60) ) {
			return '1 day ago';
		}
		return (parseInt(delta / 86400, 10)).toString() + ' days ago';
	}

});