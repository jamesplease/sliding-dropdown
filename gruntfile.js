module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      normal: {
        src: './source/less/menu.less',
        dest: './source/css/menu.css'
      },
      min: {
        options: {
          yuicompress: true
        },
        src: './source/less/menu.less',
        dest: './source/css/menu.min.css'
      }
    },
    csslint: {
      normal: {
        options: {
          "box-model": false
        },
        src: '<%= less.normal.dest %>'
      },
      min: {
        options: {
          "box-model": false
        },
        src: '<%= less.min.dest %>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('min', ['less:min', 'csslint:min']);
  grunt.registerTask('default', ['less:normal', 'csslint:normal']);

};