'use strict';

var grunt = require('grunt');

/**
 * Constructs a test case.
 *
 * @param  {string}           file   The `package.json` file to be tested.
 * @param  {boolean}          valid  Flag indicating whether the test is
 *                                   expected to pass.
 * @param  {Array.<string>}   [args] Additional arguments to pass to `grunt`.
 * @return {function(Object)}        Testing function for `nodeunit`.
 */
function test(file, valid, args) {
    return function(test) {
        test.expect(2);

        grunt.util.spawn({
            grunt: true,
            args: [
                '--gruntfile', 'test/Gruntfile.js',
                '--pkgFile', file
            ].concat(args || []).concat('npm-validate')
        }, function(error, result, code) {
            if (valid) {
                test.equal(error, null);
                test.equal(code, 0);
            } else {
                test.notEqual(error, null);
                test.notEqual(code, 0);
            }
            test.done();
        });
    };
}

module.exports = {
    empty: test('fixtures/empty.json', false),
    force: test('fixtures/empty.json', true, ['--force', 'true']),
    minimal: test('fixtures/minimal.json', true),
    package: test('../package.json', true),
    strict: test('fixtures/minimal.json', false, ['--strict', 'true'])
};
