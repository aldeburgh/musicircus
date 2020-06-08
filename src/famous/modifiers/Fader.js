define(["require","exports","module","famous/transitions/Transitionable","famous/core/OptionsManager"],function(t,i,n){function o(t,i){this.options=Object.create(o.DEFAULT_OPTIONS),this._optionsManager=new e(this.options),t&&this.setOptions(t),i||(i=0),this.transitionHelper=new s(i)}var s=t("famous/transitions/Transitionable"),e=t("famous/core/OptionsManager");o.DEFAULT_OPTIONS={cull:!1,transition:!0,pulseInTransition:!0,pulseOutTransition:!0},o.prototype.setOptions=function(t){return this._optionsManager.setOptions(t)},o.prototype.show=function(t,i){t=t||this.options.transition,this.set(1,t,i)},o.prototype.hide=function(t,i){t=t||this.options.transition,this.set(0,t,i)},o.prototype.set=function(t,i,n){this.halt(),this.transitionHelper.set(t,i,n)},o.prototype.halt=function(){this.transitionHelper.halt()},o.prototype.isVisible=function(){return this.transitionHelper.get()>0},o.prototype.modify=function(t){var i=this.transitionHelper.get();return this.options.cull&&!i?void 0:{opacity:i,target:t}},n.exports=o});