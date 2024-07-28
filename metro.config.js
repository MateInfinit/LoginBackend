/*
// metro.config.js
const exclusionList = require("metro-config/src/defaults/exclusionList");

module.exports = {
  resolver: {
    blacklistRE: exclusionList([/aws-sdk/, /@mapbox\/node-pre-gyp/]),
  },
};
*/
"use strict";

const { getDefaultConfig } = require("@react-native/metro-config");
const { mergeConfig } = require("metro-config");
const path = require("path");

/**
 * This cli config is needed for development purposes, e.g. for running
 * integration tests during local development or on CI services.
 */
const config = {
  // Make Metro able to resolve required packages that might be imported from /packages/react-native
  watchFolders: [
    path.resolve(__dirname, "../loginbackend/node_modules"),
    path.resolve(__dirname, "../loginbackend/assets") /*,
    path.resolve(__dirname, "../normalize-color"),
    path.resolve(__dirname, "../polyfills"),
    path.resolve(__dirname, "../virtualized-lists"),*/,
  ],
  resolver: {
    blockList: [/buck-out/, /sdks\/hermes/],
    extraNodeModules: {
      "react-native": __dirname,
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
