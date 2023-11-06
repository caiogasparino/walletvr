module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@animations': './src/animations',
          '@assets': './src/assets',
          '@components': 'components',
          '@navigation': 'navigation',
          '@UIKit': './src/components/UIKit',
          '@Utils': './src/components/UIKit/Utils',
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
