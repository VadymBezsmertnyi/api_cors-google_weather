/* 
    moduleNameMapper: {
      components: ['<rootDir>/src/components'],
      'constants/cities': ['<rootDir>/src/constants/cities/'],
      hooks: ['<rootDir>/src/hooks'],
      interface: ['<rootDir>/src/interface'],
      pages: ['<rootDir>/src/pages'],
      reducers: ['<rootDir>/src/reducers'],
      store: ['<rootDir>/src/store'],
      theme: ['<rootDir>/src/theme'],

      '^d3-(.*)$': `d3-$1/dist/d3-$1`,
    },
     */

module.exports = {
  rootDir: './src',
  testMatch: ['<rootDir>/components/**/*.test.tsx'],
  preset: 'ts-jest',
  moduleNameMapper: {
    components: ['<rootDir>/components'],
    'constants/cities': ['<rootDir>/constants/cities/'],
    hooks: ['<rootDir>/hooks'],
    interface: ['<rootDir>/interface'],
    pages: ['<rootDir>/pages'],
    reducers: ['<rootDir>/reducers'],
    store: ['<rootDir>/store'],
    theme: ['<rootDir>/theme/theme'],
    testUtils: ['<rootDir>/testUtils'],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!d3|d3-array|internmap|delaunator|robust-predicates|d3-shape)',
  ],
};
