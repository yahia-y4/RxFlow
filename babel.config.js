module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic', // لتفعيل JSX بدون استيراد React
      },
    ],
    '@babel/preset-env',
  ],
};