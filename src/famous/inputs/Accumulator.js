define(["require","exports","module","famous/core/EventHandler","famous/transitions/Transitionable"],function(t,e,n){function s(t,e){void 0===e&&(e="update"),this._state=t&&t.get&&t.set?t:new r(t||0),this._eventInput=new o,o.setInputHandler(this,this._eventInput),this._eventInput.on(e,i.bind(this))}function i(t){var e=t.delta,n=this.get();if(e.constructor===n.constructor){var s=e instanceof Array?[n[0]+e[0],n[1]+e[1]]:n+e;this.set(s)}}var o=t("famous/core/EventHandler"),r=t("famous/transitions/Transitionable");s.prototype.get=function(){return this._state.get()},s.prototype.set=function(t){this._state.set(t)},n.exports=s});