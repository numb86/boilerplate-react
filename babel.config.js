const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: '11',
        safari: '7',
      },
      useBuiltIns: 'usage',
    },
  ],
  [
    '@babel/preset-react',
    {
      development: process.env.NODE_ENV === 'development',
    },
  ],
];

if (process.env.NODE_ENV === 'test') {
  presets.push(['power-assert']);
}

const config = {
  presets,
};

module.exports = config;
