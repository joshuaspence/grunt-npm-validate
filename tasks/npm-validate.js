/**
 * grunt-npm-validate
 * https://github.com/joshuaspence/grunt-npm-validate
 *
 * Copyright (c) 2014 Joshua Spence
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {
    'use strict';

    var chalk = require('chalk'),
        PJV = require('package-json-validator').PJV;

    grunt.registerTask('npm-validate', 'Opinionated package.json validator.', function() {
        var options = this.options({
            file: grunt.config('pkgFile') || 'package.json',
            force: false,
            strict: false
        });

        grunt.log.write('Validating ' + options.file + '...');

        var results = PJV.validate(grunt.file.read(options.file));
        var fail = results.errors || options.strict && results.warnings;

        if (fail) {
            grunt.log.error();
        } else {
            grunt.log.ok();
        }

        if ((results.errors || []).length) {
            grunt.log.subhead(chalk.bold(chalk.red('Errors:')));
            results.errors.forEach(function(error) {
                grunt.log.error(error);
            });
        }

        if ((results.warnings || []).length) {
            grunt.log.subhead(chalk.bold(chalk.yellow('Warnings:')));
            results.warnings.forEach(function(warning) {
                grunt.log.warn(warning);
            });
        }

        if ((results.recommendations || []).length) {
            grunt.log.subhead(chalk.bold(chalk.green('Recommendations:')));
            results.recommendations.forEach(function(recommendation) {
                grunt.log.warn(recommendation);
            });
        }

        return options.force || !fail;
    });
};
