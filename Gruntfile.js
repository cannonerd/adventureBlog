module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: { all: ['src/*.js'] },
        mocha_phantomjs: {
            options: {
                'reporter': 'spec',
                'output': 'tests/results/result.xml',
                urls: [
                    'http://localhost:8000/spec/runner.html'
                ]
            },
            all:{
                options:{
                    urls: ['spec/runner.html']}}
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
    grunt.loadNpmTasks('grunt-contrib-jshint');
    this.registerTask('test', ['jshint','connect', 'mocha_phantomjs']);
    grunt.loadNpmTasks('grunt-mocha-phantomjs');



};




