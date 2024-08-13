module.exports = {
    env: {
      browser: true,
      es2020: true,
      node: true, // Add this line to recognize Node.js globals
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: 'detect' } }, // Use 'detect' to automatically pick the version
    plugins: ['react-refresh'], // Ensure this plugin is installed
    rules: {
      'react-refresh/only-export-components': 'warn',
      'react/prop-types': 'off', // Disable prop-types validation
    },
  };
  