module.exports = (api) => {
    const presets = [
        "react-app",
        '@babel/preset-env',
        ['@babel/preset-react', {runtime: 'automatic'}],
    ];
    
    const plugins = [
        "@babel/plugin-transform-modules-commonjs",
        "inline-react-svg"
    ];
    
    api.cache(false);
    
    return {
        presets,
        plugins
    };
};
