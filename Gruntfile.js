module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    outDir: '_site',
    htmlmin: {
      build: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          '<%= outDir %>/about/index.html' : '<%= outDir %>/about/index.html',
          '<%= outDir %>/projects/index.html' : '<%= outDir %>/projects/index.html',
          '<%= outDir %>/Up-and-Running-with-Jekyll/index.html' : '<%= outDir %>/Up-and-Running-with-Jekyll/index.html',
          '<%= outDir %>/index.html' : '<%= outDir %>/index.html',
        }
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



  // Default task(s).
  grunt.registerTask('default', ['uglify', 'htmlmin']);

  // Custom tasks(s).
  //grunt.registerTask('uglify', ['uglify']);
};