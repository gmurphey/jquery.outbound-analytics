/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('outbound-analytics.jquery.json'),

    meta: {
      banner: '/*\n' +
        '<%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage %> \n' +
        'Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n' +
        '*/\n\n'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },

      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
    },

    qunit: {
      files: ['test/**/*.html']
    },

    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },

      all: {
        files: {
          'dist/jquery.<%= pkg.name %>.js': ['src/jquery.<%= pkg.name %>.js']
        }
      }
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },

      all: {
        files: {
          'dist/jquery.<%= pkg.name %>.min.js': ['dist/jquery.<%= pkg.name %>.js']
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

};
