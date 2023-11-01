const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

module.exports = async () => {
  const baseConfig = await getDefaultConfig(__dirname);

  return mergeConfig(baseConfig, {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: baseConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...baseConfig.resolver.sourceExts, 'svg'],
    },
  });
};
