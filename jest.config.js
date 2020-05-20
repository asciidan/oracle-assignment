module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/**/*.{js,ts,vue}',
    '!**/__tests__/**',
    '!**/__mocks__/**',
  ],
  transformIgnorePatterns: [`/node_modules/(?!lodash-es)`],
}
