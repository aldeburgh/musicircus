define(["require","exports","module","famous/core/Engine","famous/core/View","famous/core/Surface","famous/core/Transform","famous/modifiers/StateModifier","famous/core/EventHandler","famous/utilities/KeyCodes","famous/core/Modifier","famous/utilities/Timer","famous/core/Modifier","views/BoardView"],function(o,e,i){function t(o,e,i,t){c.apply(this,arguments),this.columnCount=e,this.isMobile=i,this.mainContexRef=o,this.mainRef=t,this.fourColumnWidthArray=[],this.threeColumnWidthArray=[],this.twoColumnWidthArray=[];var r=this;WURFL.is_mobile||d.on("keypress",function(o){n.call(r,o)}),a.call(this,o),this.autoResizeOn=!1}function a(){function o(){t.boardView=new f(t,{columnCount:t.columnCount,columnWidths:t.columnWidths,isMobile:t.isMobile}),t.add(t.boardView)}var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(e,i);var t=this;switch(this.fourColumnWidthArray=[[.2,.3,.3,.2],[.2,.2,.3,.3],[.2,.3,.2,.3],[.3,.2,.3,.2],[.3,.2,.2,.3],[.3,.3,.2,.2],[.3,.2,.2,.3],[.4,.2,.2,.2],[.2,.4,.2,.2],[.2,.2,.4,.2],[.2,.2,.2,.4]],this.threeColumnWidthArray=[[.2,.4,.4],[.3,.4,.3],[.2,.2,.6],[.5,.2,.3],[.4,.35,.25],[.35,.45,.2],[.2,.25,.55],[.5,.25,.25],[.4,.35,.25],[.2,.5,.3],[.4,.3,.3]],this.twoColumnWidthArray=[[.2,.8],[.3,.7],[.4,.6],[.5,.5],[.6,.4],[.7,.3],[.8,.2]],this.columnWidths,this.columnCount){case 1:break;case 2:var a=Math.floor(Math.random()*this.twoColumnWidthArray.length);this.columnWidths=this.twoColumnWidthArray[a];break;case 3:var a=Math.floor(Math.random()*this.threeColumnWidthArray.length);this.columnWidths=this.threeColumnWidthArray[a];break;case 4:var a=Math.floor(Math.random()*this.fourColumnWidthArray.length);this.columnWidths=this.fourColumnWidthArray[a]}WURFL.is_mobile?o():window.onYouTubeIframeAPIReady=function(){o()}}function n(o){switch(self=this,o){case"Reload":switch(this.columnCount){case 1:window.location.href=window.location.pathname+"?nocols=1&hud=0";break;case 2:window.location.href=window.location.pathname+"?nocols=2&hud=0";break;case 3:window.location.href=window.location.pathname+"?nocols=3&hud=0";break;case 4:window.location.href=window.location.pathname+"?nocols=4&hud=0"}break;case"TwoColumns":window.location.href=window.location.pathname+"?nocols=2&hud=0";break;case"ThreeColumns":window.location.href=window.location.pathname+"?nocols=3&hud=0";break;case"FourColumns":window.location.href=window.location.pathname+"?nocols=4&hud=0"}}function r(){var o=this;o.autoResizeOn&&(m.clear(),m.setTimeout(function(){s.call(o)},5e3))}function s(){var o=this;o.boardView&&o.autoResizeOn&&!o.boardView.handlesActive&&o.boardView.autoScrollInactive&&o.boardView.autoResizeColumns(),o.autoResizeOn&&(m.clear(),m.setTimeout(function(){s.call(o)},5e3))}var u=o("famous/core/Engine"),c=o("famous/core/View"),l=(o("famous/core/Surface"),o("famous/core/Transform"),o("famous/modifiers/StateModifier"),o("famous/core/EventHandler")),h=o("famous/utilities/KeyCodes"),m=(o("famous/core/Modifier"),o("famous/utilities/Timer")),d=new l,f=(o("famous/core/Modifier"),o("views/BoardView"));t.prototype=Object.create(c.prototype),t.prototype.constructor=t,t.DEFAULT_OPTIONS={},u.on("keypress",function(o){o.charCode!=h.r&&o.charCode!=h.R||d.emit("keypress","Reload"),o.charCode==h[2]&&d.emit("keypress","TwoColumns"),o.charCode==h[3]&&d.emit("keypress","ThreeColumns"),o.charCode==h[4]&&d.emit("keypress","FourColumns")}),t.prototype.toggleAutomaticResize=function(o){console.log("toggle"),o?(this.autoResizeOn=!0,r.call(this)):this.autoResizeOn=!1},t.prototype.disableHUD=function(){window.disableHUD()},t.prototype.enableHUD=function(){window.enableHUD()},i.exports=t});