Polymer-Element `<nw-twitterwall>`
=================================

This is a twitterwall-widget I built for a [blog article about *Web Components* and the Polymer Project](http://neuwaerts.de/emerge/articles/2013/web-components-die-zukunft-des-internets-mit-polymer.js/). You can see a Live-demo of the widget here: [`<nw-twitterwall>`-widget](http://www.neuwaerts.de/emerge/demo/web-components-polymer/nw-twitterwall.html).

## Installation

Donwload or clone this repository and put it in an environment, where PHP-scripts are running. Inside the `/nw-twitterwall/`-folder enter the following in your terminal to download the dependencies and compile the SASS:

	$ npm install
	$ bower install
	$ grunt sass

You'll need to have Node.js, Bower and Grunt-CLI installed on your computer in order to successfully do this.

## Usage

Open the `/htdocs/index.html` in your browser to see the widget. Open the control-panel of the widget to adjust the parameters.

The widget doesn't actually fetch data via the twitter-API. For demo purposes I built a fake-API. That's why the environment has to be PHP-capable. If you want to fetch real data, you can remove the `/api`-folder and replace the `<select>`-element by a real `input[type="text"]`-element. Also you'll have to adjust the API-path in the `nw-twitter.html`.

## Options

Attribute         | Options                   | Default                | Description
---               | ---                       | ---                    | ---
`q`               | *string*                  | 'polymer'              | The relevant hashtag (without hash!)
`count`           | *int* 	                  | 10                     | The amount of tweets to display
`interval`        | *int*                     | 0                      | The polling-interval (in seconds)
`caption`         | *string*                  | &lt;nw-twitterwall&gt; | The widget's caption

**There are no required options!**

## License

[MIT License](http://opensource.org/licenses/MIT)