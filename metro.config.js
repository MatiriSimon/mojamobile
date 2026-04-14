const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add .wasm to the list of assets that Metro can resolve.
// This allows expo-sqlite to find its WebAssembly binary when bundling for web.
config.resolver.assetExts.push('wasm');

module.exports = config;