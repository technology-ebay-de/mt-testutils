const path = require('path');

const packages = ['expect-snapshot', 'mock-store', 'mount-hoc', 'test-saga'];

module.exports = wallaby => {
    addPackagesToNodePath(wallaby);
    return {
        files: ['packages/**/*.js', '!**/*.test.js', '!**/node_modules/**'],

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

/* special setup for monorepos: need to add the node_modules directories from all packages to the path */
function addPackagesToNodePath(wallaby) {
    const paths = packages.map(pkg => path.join(wallaby.localProjectDir, `packages/${pkg}/node_modules`));
    if (process.env.NODE_PATH) {
        paths.unshift(process.env.NODE_PATH);
    }
    process.env.NODE_PATH = paths.join(path.delimiter);
}
