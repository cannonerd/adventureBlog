module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_phantomjs: {
    options: {
      'reporter': 'xunit',
      'output': 'tests/results/result.xml',
      urls: [
          'http://localhost:8000/spec/runner.html',
          'http://localhost:8000/src/clicker.html'
        ]
    },
    all: ['spec/runner.html']
    

  },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.'
        }
      }
}
  });

//make sure that all the necessary tasks are also defined in
//the dependencies in package.json
grunt.loadNpmTasks('grunt-contrib-connect');
this.registerTask('test', ['connect', 'mocha_phantomjs']);
grunt.loadNpmTasks('grunt-mocha-phantomjs');


};




