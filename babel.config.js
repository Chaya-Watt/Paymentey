module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@Components': './src/Components',
          '@Constants': './src/Constants',
          '@Helpers': './src/Helpers',
          '@Routers': './src/Routers',
          '@Screens': './src/Screens',
          '@Types': './src/Types',
        },
      },
    ],
  ],
};
