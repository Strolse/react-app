import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('.tx', '.tsx');
  config!.resolve!.alias = {
    ...config!.resolve!.alias,
    '@': paths.src,
  };

  const rules = config.module!.rules as RuleSetRule[];
  // eslint-disable-next-line no-param-reassign
  config.module!.rules = rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module!.rules.push(buildSvgLoader());
  config.module!.rules.push(buildCssLoader(true));
  config.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify('https://testapi.ru'),
    __PROJECT__: JSON.stringify('storybook'),
  }));

  config.resolve!.modules = [
    path.resolve(__dirname, '../../src'),
    'node_modules',
  ];

  return config;
};
