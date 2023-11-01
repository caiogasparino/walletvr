module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'], // Set the root directory to your source folder
        alias: {
          '@animations': 'animations',
          '@components': 'components',
          '@navigation': 'navigation',
          '@UIKit': './src/components/UIKit',
          '@routes': 'routes',
          '@screens': 'screens',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
  ],
};
