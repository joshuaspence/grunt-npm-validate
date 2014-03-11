grunt-npm-validate
==================
[![Build Status](https://travis-ci.org/joshuaspence/grunt-npm-validate.png)](http://travis-ci.org/joshuaspence/grunt-npm-validate)
[![NPM version](https://badge.fury.io/js/grunt-npm-validate.png)](http://badge.fury.io/js/grunt-npm-validate)

Grunt task for validating NPM packages.

Install
-------
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

    npm install grunt-npm-validate --save-dev

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

    grunt.loadNpmTasks('grunt-npm-validate');

Usage
-----
    grunt npm-validate

Options
-------
    'npm-validate': {
        file: 'package.json'
    }
