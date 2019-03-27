"use strict";module.export({default:()=>assert});// Replacement for the external assert method to reduce bundle size
// Note: We don't use the second "message" argument in calling code,
// so no need to support it here
function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'deck.gl: assertion failed.');
  }
}