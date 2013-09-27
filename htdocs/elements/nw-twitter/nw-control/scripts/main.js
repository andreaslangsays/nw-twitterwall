/*
 * Functionality for the <nw-control>-element.
**/
Polymer('nw-control', {

	/*
	 * Populating the <select>-element after creation.
	 * For demo purposes there are only three available
	 * hashtags. In real-life-usage the <select>-element
	 * would be a text-unput.
	**/
	created: function () {
		this.asyncMethod(function () {
			this.options = this.createOpts();
		});
	},

	/*
	 * Publishing the updated values through
	 * the `fire`-method and toggling the
	 * control-element.
	**/
	update: function (evnt, detail, sender) {
		this.fire('nw-control-changed', {
			q: this.$.q.value,
			count: this.$.count.value,
			interval: this.$.interval.value | 0
		});
		this.toggleControl(null, null, {
			dataset: {
				open: 'toggle',
				close: 'form'
			}
		});
	},

	/*
	 * Creating the demo-fake-hashtag-options.
	**/
	createOpts: function () {
		return [{
			val: 'webcomponents',
			cur: 'webcomponents' === this.q,
			caption: '#webcomponents'
		}, {
			val: 'html5',
			cur: 'html5' === this.q,
			caption: '#html5'
		}, {
			val: 'javascript',
			cur: 'javascript' === this.q,
			caption: '#javascript'
		}];
	},

	/*
	 * Toggling the control-element.
	**/
	toggleControl: function (evnt, detail, sender) {

		var data = sender.dataset,
			toClose = this.$[data.close],
			toOpen = this.$[data.open];

		toClose.classList.remove('in');
		this.asyncMethod(function () {
			toClose.classList.remove('slide');
			toOpen.classList.add('slide');
			toOpen.offsetTop;
			toOpen.classList.add('in');
		}, null, 300);

	}

});