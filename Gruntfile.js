'use strict';

module.exports = function(grunt) {
    // Configuration.
    grunt.initConfig({
        jscs: {
            options: {
                config: '.jscsrc'
            },
            grunt: 'Gruntfile.js',
            tasks: 'tasks/**/*.js',
            test: 'test/**/*.js'
        },
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: 'Gruntfile.js',
            tasks: 'tasks/**/*.js',
            test: 'test/**/*.js'
        },
        jsonlint: {
            jscs: '.jscsrc',
            jshint: '.jshintrc',
            npm: 'package.json',
            test: 'test/**/*.json'
        },
        lintspaces: {
            options: {
                editorconfig: '.editorconfig',
                ignores: [
                    'js-comments'
                ]
            },
            all: [
                '**/*',
                '!node_modules/**'
            ]
        },
        nodeunit: {
            all: 'test/**/*.js'
        },
        'npm-validate': {
            options: {
                strict: true
            }
        }
    });

    // Load tasks.
    grunt.loadTasks('./tasks');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-jscs-checker');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-lintspaces');
    grunt.loadNpmTasks('grunt-release');

    // Register tasks.
    grunt.renameTask('release', 'bump');
    grunt.registerTask('lint', ['lintspaces', 'jsonlint', 'jshint', 'jscs']);
    grunt.registerTask('release', function() {
        // Pass targets to the `grunt-release` task.
        var bump = Array.prototype.concat.apply('bump', arguments).join(':');
        grunt.task.run('lint', 'test', 'validate', bump);
    });
    grunt.registerTask('test', ['nodeunit']);
    grunt.registerTask('validate', ['npm-validate']);
    grunt.registerTask('default', ['lint', 'test', 'validate']);
};
