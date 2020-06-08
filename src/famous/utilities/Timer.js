/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","famous/core/Engine"],function(n,r,e){function t(n){return p.on(s,n),n}function o(n,r){var e=v(),o=function(){v()-e>=r&&(n.apply(this,arguments),p.removeListener(s,o))};return t(o)}function i(n,r){var e=v();return t(function(){v()-e>=r&&(n.apply(this,arguments),e=v())})}function u(n,r){if(void 0!==r){var e=function(){--r<=0&&(n.apply(this,arguments),c(e))};return t(e)}}function f(n,r){r=r||1;var e=r;return t(function(){--r<=0&&(n.apply(this,arguments),r=e)})}function c(n){p.removeListener(s,n)}function a(n,r){var e,t,i,u,f;return function(){t=this,f=arguments,i=v();var a=function(){var c=v-i;c<r?e=o(a,r-c):(e=null,u=n.apply(t,f))};return c(e),e=o(a,r),u}}var p=n("famous/core/Engine"),s="prerender",v=window.performance&&window.performance.now?function(){return window.performance.now()}:function(){return Date.now()};e.exports={setTimeout:o,setInterval:i,debounce:a,after:u,every:f,clear:c}});