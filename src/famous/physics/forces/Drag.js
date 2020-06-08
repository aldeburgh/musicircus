/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: david@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module","./Force"],function(t,o,r){function e(t){this.options=Object.create(this.constructor.DEFAULT_OPTIONS),t&&this.setOptions(t),n.call(this)}var n=t("./Force");e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.FORCE_FUNCTIONS={LINEAR:function(t){return t},QUADRATIC:function(t){return t.mult(t.norm())}},e.DEFAULT_OPTIONS={strength:.01,forceFunction:e.FORCE_FUNCTIONS.LINEAR},e.prototype.applyForce=function(t){for(var o=this.options.strength,r=this.options.forceFunction,e=this.force,n=0;n<t.length;n++){var i=t[n];r(i.velocity).mult(-o).put(e),i.applyForce(e)}},e.prototype.setOptions=function(t){for(var o in t)this.options[o]=t[o]},r.exports=e});