/**
 * DEPRECATED: This Gruntfile.js is kept for reference only.
 * 
 * Grunt has been deprecated from this project. All Grunt dependencies
 * have been removed from package.json. This file is maintained as a
 * reference for historical purposes and to document the previous build
 * configuration.
 * 
 * To serve the site locally, use:
 *   bundle exec jekyll serve
 * 
 * To build the site, use:
 *   bundle exec jekyll build
 */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    outDir: '_site',
    shell: {
      jekyllBuild: {
        command: 'bundle exec jekyll build'
      },
      jekyllServe: {
        command: 'bundle exec jekyll serve'
      },
      jekyllServeLocalhost: {
        command: 'bundle exec jekyll serve -H 0.0.0.0'
      }
    },
    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        expand: true,
        cwd: '<%= outDir %>/',
        src: ['**/*.html'],
        dest: '<%= outDir %>/'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          '<%= outDir %>/js/index.js': ['<%= outDir %>/js/index.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');



  // Default task(s).
  grunt.registerTask('default', ['uglify', 'htmlmin']);

  grunt.registerTask('jekyll', ['shell:jekyllServe']);

  grunt.registerTask('jekyllBuild', ['shell:jekyllBuild', 'uglify', 'htmlmin']);

  // Custom tasks(s).
  //grunt.registerTask('uglify', ['uglify']);
};