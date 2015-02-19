module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    obfuscator: {
      files: [
        'Lesson2/*/*.js'
      ],
      entry: 'app.js',
      out: 'obfuscated.js',
      strings: true,
      root: __dirname
    },
    inline: {
      dist: {
        src: 'Lesson2/viewport/viewport.html',
        dest: 'Lesson2/viewport/viewport.inlined.html'
      },
      dist2: {
        src: 'Lesson3/flexbox/flex-container.html',
        dest: 'Lesson3/flexbox/flex-container.inlined.html'
      },
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-vulcanize');
  grunt.loadNpmTasks('grunt-obfuscator');
  grunt.loadNpmTasks('grunt-inline');

  grunt.registerTask('default', ['obfuscator', 'inline']);

};