/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 */

module.exports = {
  parser: 'hermes-eslint',
  extends: ['eslint:recommended'],
  plugins: ['react', '@stylexjs'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    '@stylexjs/valid-styles': 'error',
  },
  ignorePatterns: ['**/dist/*'],
};
