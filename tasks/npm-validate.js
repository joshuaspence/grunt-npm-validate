/**
 * grunt-npm-validate
 * https://github.com/joshuaspence/grunt-npm-validate
 *
 * Copyright (c) 2014 Joshua Spence
 * Licensed under the MIT license.
 */

'use strict';

var chalk = require('chalk'),
    PJV = require('package-json-validator').PJV;

function unary(fn) {
    return function(first) {
        return fn(first);
    };
}

module.exports = function(grunt) {
    grunt.registerTask('npm-validate', 'Opinionated package.json validator', function() {
        var options = this.options({
            file: grunt.config('pkgFile') || 'package.json',
            force: false,
            strict: false
        });

        grunt.log.write('Validating ' + options.file + '...');
        var pkg = grunt.file.read(options.file);

        var result = PJV.validate(pkg);
        if (result.errors || result.warnings) {
            grunt.log.error();
        } else {
            grunt.log.ok();
        }

        if (result.errors && result.errors.length) {
            grunt.log.subhead(chalk.bold(chalk.red('Errors:')));
            result.errors.forEach(unary(grunt.log.error));
        }

        if (result.warnings && result.warnings.length) {
            grunt.log.subhead(chalk.bold(chalk.yellow('Warnings:')));
            result.warnings.forEach(unary(grunt.log.warn));
        }

        if (result.recommendations && result.recommendations.length) {
            grunt.log.subhead(chalk.bold(chalk.yellow('Recommendations:')));
            result.recommendations.forEach(unary(grunt.log.warn));
        }

        return options.force || (!result.errors && (!options.strict || !result.warnings));
    });
};
