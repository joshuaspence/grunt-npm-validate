'use strict';

module.exports = function(grunt) {
    // Configuration.
    grunt.initConfig({
        jscs: {
            options: {
                config: '.jscsrc'
            },
            grunt: 'Gruntfile.js',
            tasks: 'tasks/**/*.js'
        },
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: 'Gruntfile.js',
            tasks: 'tasks/**/*.js'
        },
        jsonlint: {
            jshint: ['.jshintrc'],
            npm: ['package.json']
        },
        nodeunit: {
            all: 'test/**/*.js'
        }
    });

    // Load tasks.
    grunt.loadTasks('./tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-jscs-checker');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-release');

    // Register tasks.
    grunt.renameTask('release', 'bump');
    grunt.registerTask('lint', ['jsonlint', 'jshint', 'jscs']);
    grunt.registerTask('release', function() {
        grunt.task.run('lint', Array.prototype.concat.apply('bump', arguments).join(':'));
    });
    grunt.registerTask('test', ['nodeunit']);
    grunt.registerTask('travis', ['lint', 'validate']);
    grunt.registerTask('validate', ['npm-validate']);
    grunt.registerTask('default', ['lint', 'test', 'validate']);
};
