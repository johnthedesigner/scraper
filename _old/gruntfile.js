module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            templates: {
                files: ['**/*.html','**/*.js','**/*.css'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
        },
		connect: {
			server: {
				options: {
					livereload:true,
					open: true,
					hostname:'localhost',
					base:'./'
				}
			}
		}
    });

    // Load handlebars template compiler
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Set up task(s).
    grunt.registerTask('serve', ['connect','watch']);

};