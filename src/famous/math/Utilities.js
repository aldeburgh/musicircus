/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module"],function(t,n,r){var e={};e.clamp=function(t,n){return Math.max(Math.min(t,n[1]),n[0])},e.length=function(t){for(var n=0,r=0;r<t.length;r++)n+=t[r]*t[r];return Math.sqrt(n)},r.exports=e});