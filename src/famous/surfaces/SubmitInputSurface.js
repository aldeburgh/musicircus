define(["require","exports","module","./InputSurface"],function(t,o,e){function p(t){i.apply(this,arguments),this._type="submit",t&&t.onClick&&this.setOnClick(t.onClick)}var i=t("./InputSurface");p.prototype=Object.create(i.prototype),p.prototype.constructor=p,p.prototype.setOnClick=function(t){this.onClick=t},p.prototype.deploy=function(t){this.onclick&&(t.onClick=this.onClick),i.prototype.deploy.apply(this,arguments)},e.exports=p});