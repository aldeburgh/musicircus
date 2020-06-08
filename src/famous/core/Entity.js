/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module"],function(e,n,r){function t(e){return f[e]}function u(e,n){f[e]=n}function i(e){var n=f.length;return u(n,e),n}function o(e){u(e,null)}var f=[];r.exports={register:i,unregister:o,get:t,set:u}});