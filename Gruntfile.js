module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_phantomjs: {
    options: {
      'reporter': 'xunit',
      'output': 'tests/results/result.xml'
    },
    all: ['runner.html']
  }
  });

//make sure that all the necessary tasks are also defined in
//the dependencies in package.json
grunt.loadNpmTasks('grunt-mocha-phantomjs');

};




