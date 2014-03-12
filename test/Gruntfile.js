'use strict';

module.exports = function(grunt) {
    // Configuration.
    grunt.initConfig({
        'npm-validate': {
            options: {
                file: grunt.option('pkgFile') || grunt.config('pkgFile')
            }
        }
    });

    // Load tasks.
    grunt.loadTasks('../tasks');
};
