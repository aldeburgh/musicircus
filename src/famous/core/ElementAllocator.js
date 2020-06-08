/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Owner: mark@famo.us
 * @license MPL 2.0
 * @copyright Famous Industries, Inc. 2014
 */

define(["require","exports","module"],function(e,t,o){function n(e){e||(e=document.createDocumentFragment()),this.container=e,this.detachedNodes={},this.nodeCount=0}n.prototype.migrate=function(e){var t=this.container;if(e!==t){if(t instanceof DocumentFragment)e.appendChild(t);else for(;t.hasChildNodes();)e.appendChild(t.removeChild(t.firstChild));this.container=e}},n.prototype.allocate=function(e){(e=e.toLowerCase())in this.detachedNodes||(this.detachedNodes[e]=[]);var t,o=this.detachedNodes[e];return o.length>0?t=o.pop():(t=document.createElement(e),this.container.appendChild(t)),this.nodeCount++,t},n.prototype.deallocate=function(e){var t=e.nodeName.toLowerCase();this.detachedNodes[t].push(e),this.nodeCount--},n.prototype.getNodeCount=function(){return this.nodeCount},o.exports=n});