'use strict';

var grunt = require('grunt');

module.exports = {
    empty: function(test) {
        test.expect(2);

        grunt.util.spawn({
            grunt: true,
            args: [
                '--gruntfile', 'test/Gruntfile.js',
                '--pkgFile', 'fixtures/empty.json',
                'npm-validate'
            ]
        }, function(error, result, code) {
            test.notEqual(error, null);
            test.notEqual(code, 0);
            test.done();
        });
    },
    minimal: function(test) {
        test.expect(2);

        grunt.util.spawn({
            grunt: true,
            args: [
                '--gruntfile', 'test/Gruntfile.js',
                '--pkgFile', 'fixtures/minimal.json',
                'npm-validate'
            ]
        }, function(error, result, code) {
            test.equal(error, null);
            test.equal(code, 0);
            test.done();
        });
    },
    package: function(test) {
        test.expect(2);

        grunt.util.spawn({
            grunt: true,
            args: [
                '--gruntfile', 'test/Gruntfile.js',
                '--pkgFile', '../package.json',
                'npm-validate'
            ]
        }, function(error, result, code) {
            test.equal(error, null);
            test.equal(code, 0);
            test.done();
        });
    }
};
