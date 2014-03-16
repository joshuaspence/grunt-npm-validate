'use strict';

module.exports = function(grunt) {
    // Configuration.
    grunt.initConfig({
        'npm-validate': {
            options: {
                file: grunt.option('pkgFile'),
                force: !!grunt.option('force'),
                strict: !!grunt.option('strict')
            }
        }
    });

    // Load tasks.
    grunt.loadTasks('../tasks');
};
