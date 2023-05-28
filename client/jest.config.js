module.exports = {
    preset: '@shelf/jest-mongodb',
    testEnvironment: "jsdom",
    watchPathIgnorePatterns: ['globalConfig'],
    setupFilesAfterEnv: [
        '<rootDir>/__mocks__/setupJest.js',
    ],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest"
    },
    transformIgnorePatterns: [
        "node_modules/(?!axios)",
        "node_modules/(?!@shotgunjed)/"
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less)$': 'identity-obj-proxy',
        '^localStorage$': '<rootDir>/__mocks__/localStorage.js'
    },
};
