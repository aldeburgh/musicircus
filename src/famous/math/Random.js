/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module"],function(r,n,o){function i(r,n){return r+u()*(n-r)}function t(r,n){return r+u()*(n-r+1)>>0}var u=Math.random,e={};e.integer=function(r,n,o){if(r=void 0!==r?r:0,n=void 0!==n?n:1,void 0!==o){for(var i=[],u=0;u<o;u++)i.push(t(r,n));return i}return t(r,n)},e.range=function(r,n,o){if(r=void 0!==r?r:0,n=void 0!==n?n:1,void 0!==o){for(var t=[],u=0;u<o;u++)t.push(i(r,n));return t}return i(r,n)},e.sign=function(r){return r=void 0!==r?r:.5,u()<r?1:-1},e.bool=function(r){return r=void 0!==r?r:.5,u()<r},o.exports=e});