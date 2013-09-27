module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.initConfig({

		watch: {
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'htdocs/**/*.html',
					'htdocs/**/**/*.html',
					'htdocs/**/*.js',
					'htdocs/styles/**/*.scss'
				],
				tasks: ['sass:prod']
			}
		},

		sass: {
			prod: {
				files: {
					'htdocs/styles/main.css': ['htdocs/styles/**/*.scss']
				}
			}
		}

	});

};
