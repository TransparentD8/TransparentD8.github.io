module.exports = function  (grunt) {

	grunt.initConfig({
  	connect: {
    server: {
      options: {
        port: 9001,
        base: '',
        keepalive: true
      }
    }
  },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '/css',
          src: ['*.css', '!*.min.css'],
          dest: '/css/',
          ext: '.min.css'
        }]
      }
    }

  });





  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default',['connect'])
	
};