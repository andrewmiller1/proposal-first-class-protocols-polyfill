let global = Function('return this')();
import implementation from './implementation.js';

export default function() {
  let p = global.Protocol;
  return typeof p === 'function' ? p : implementation;
}
