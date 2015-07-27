module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    outDir: '_site',
    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      },
      jekyllServe: {
        command: 'jekyll serve'
      },
      jekyllServeLocalhost: {
        command: 'jekyll serve -H 0.0.0.0'
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