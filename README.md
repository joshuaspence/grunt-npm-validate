grunt-npm-validate
==================
[![Build Status](https://travis-ci.org/joshuaspence/grunt-npm-validate.png)](http://travis-ci.org/joshuaspence/grunt-npm-validate)
[![NPM version](https://badge.fury.io/js/grunt-npm-validate.png)](http://badge.fury.io/js/grunt-npm-validate)

Grunt task for validating NPM packages.

Getting Started
---------------
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-npm-validate --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-npm-validate');
```

npm-validate task
-----------------
*Run this task with the `grunt npm-validate` command.*

Task files and options may be specified according to the grunt
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options
The following options are available:

#### file
- Type: `String`
- Default value: `grunt.config('pkgFile') || 'package.json'`

If this filename is specified, the specified file will be validated.

#### force
- Type: `Boolean`
- Default value: `false`

Set force to true to report errors but not fail the task.

#### strict
- Type: `Boolean`
- Default value: `false`

Set strict to true to fail on warnings as well as errors.

### Usage Examples
```js
'npm-validate': {
    file: 'package.json'
}
```
