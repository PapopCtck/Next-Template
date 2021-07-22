module.exports = {
  'presets': [
    [
      'next/babel',
      {
        'preset-react': {
          'runtime': 'automatic',
          'importSource': '@emotion/react',
        },
      },
    ],
  ],
  'plugins': [
    '@emotion/babel-plugin',
  ],
  'env': {
    'test': {
      'presets': [
        [
          'next/babel',{
            'preset-env': {
              'modules': 'commonjs',
            },
          },
        ],
      ],
      'plugins': [
        'babel-plugin-dynamic-import-node',
      ],
    },
  },
};
