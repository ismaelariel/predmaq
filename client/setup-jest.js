module.exports = {
    bail: 1,
    verbose: true,
    rootDir: '../',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
    transform: {
      '^.+\\.js?$': 'babel-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!axios)'
    ]
}
