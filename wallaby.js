const path = require('path');

const packages = ['expect-snapshot', 'mock-store', 'mount-hoc', 'test-saga'];

module.exports = wallaby => {
    addPackagesToNodePath(wallaby);
    return {
        files: ['**/*.js', '!**/*.test.js', '!**/node_modules/**'],

        tests: ['**/*.test.js', '!**/node_modules/**'],

        env: {
            type: 'node',
            runner: 'node'
        },

        compilers: {
            '**/*.js': wallaby.compilers.babel()
        },

        testFramework: 'jest'
    };
};

function addPackagesToNodePath(wallaby) {
    const paths = packages.map(pkg => path.join(wallaby.localProjectDir, `packages/${pkg}/node_modules`));
    if (process.env.NODE_PATH) {
        paths.unshift(process.env.NODE_PATH);
    }
    process.env.NODE_PATH = paths.join(path.delimiter);
}
