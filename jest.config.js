/* import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      components: ['<rootDir>/src/components'],
      constants: ['<rootDir>/src/constants'],
      hooks: ['<rootDir>/src/hooks'],
      interface: ['<rootDir>/src/interface'],
      pages: ['<rootDir>/src/pages'],
      reducers: ['<rootDir>/src/reducers'],
      store: ['<rootDir>/src/store'],
      theme: ['<rootDir>/src/theme'],
    },
    modulePaths: ['<rootdir>/src', '&<rootdir>/node_modules'],
  };
};
 */
module.exports = async () => {
  return {
    preset: 'ts-jest',
    transform: {
      '^.+.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      components: ['<rootDir>/src/components'],
      'constants/cities': ['<rootDir>/src/constants/cities'],
      hooks: ['<rootDir>/src/hooks'],
      interface: ['<rootDir>/src/interface'],
      pages: ['<rootDir>/src/pages'],
      reducers: ['<rootDir>/src/reducers'],
      store: ['<rootDir>/src/store'],
      theme: ['<rootDir>/src/theme'],
    },
  };
};
