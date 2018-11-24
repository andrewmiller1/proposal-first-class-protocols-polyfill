import implementation from './implementation.js';
import getPolyfill from './polyfill.js';
import shim from './shim.js';

Object.defineProperties(implementation, {
  implementation: { value: implementation, enumerable: false, configurable: true, writable: false },
  getPolyfill: { value: getPolyfill, enumerable: false, configurable: true, writable: false },
  shim: { value: shim, enumerable: false, configurable: true, writable: false },
});

export default implementation;
