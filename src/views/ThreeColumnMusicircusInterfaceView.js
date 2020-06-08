define(["require","exports","module","famous/core/View","famous/core/Surface","famous/core/Transform","famous/modifiers/StateModifier","famous/transitions/Easing","famous/surfaces/ContainerSurface","famous/surfaces/ImageSurface","famous/modifiers/Draggable","famous/utilities/Timer","famous/transitions/Transitionable","famous/core/Modifier"],function(e,i,t){function o(e,i,t){f.apply(this,arguments),this.boardViewRef=e,this.minimumColumnWidth=this.boardViewRef.minimumColumnWidth,this.windowWidth=i,this.windowHeight=t,this.isDragging=!1,this.rootModifier=new c({size:this.options.size,origin:[0,0],align:[0,0]}),this.myTimer,this.handleSize=[this.boardViewRef.options.gutter+2,window.innerHeight],this.handleSizeLarge=[this.boardViewRef.options.gutter+20,window.innerHeight],this.mainNode=this.add(this.rootModifier),n.call(this)}function n(){var e=this;this.leftHandleStartPosition=this.boardViewRef.options.columnWidths[0]*this.windowWidth,this.leftHandleAbsolutePosition=this.boardViewRef.options.columnWidths[0]*this.windowWidth,this.rightHandleStartPosition=(this.boardViewRef.options.columnWidths[0]+this.boardViewRef.options.columnWidths[1])*this.windowWidth,this.rightHandleAbsolutePosition=(this.boardViewRef.options.columnWidths[0]+this.boardViewRef.options.columnWidths[1])*this.windowWidth,this.verticalPosition=0,this.leftHandle=u.call(this),this.leftHandleModifier=new c({align:[0,0],origin:[.5,0],transform:m.translate(this.leftHandleStartPosition,0,0)});var i=0-this.leftHandleStartPosition+this.minimumColumnWidth,t=this.rightHandleAbsolutePosition-this.leftHandleAbsolutePosition-this.minimumColumnWidth;this.leftHandleDraggable=new R({snapX:5,xRange:[i,t],yRange:[0,0]}),this.leftHandleDraggable.subscribe(this.leftHandle),this.mainNode.add(this.leftHandleDraggable).add(this.leftHandleModifier).add(this.leftHandle),this.rightHandle=u.call(this),this.rightHandleModifier=new c({align:[0,0],origin:[.5,0],transform:m.translate(this.rightHandleStartPosition,0,0)}),this.rightHandleDraggable=new R({snapX:5,xRange:[this.leftHandleAbsolutePosition-this.rightHandleStartPosition+this.minimumColumnWidth,this.windowWidth-this.rightHandleStartPosition-this.minimumColumnWidth],yRange:[0,0]}),this.rightHandleDraggable.subscribe(this.rightHandle),this.mainNode.add(this.rightHandleDraggable).add(this.rightHandleModifier).add(this.rightHandle),this.leftHandleDraggable.on("start",function(){a(e,e.rightHandle)}),this.leftHandleDraggable.on("end",function(){r(e,"left")}),this.leftHandleDraggable.on("update",function(){s(e)}),this.rightHandleDraggable.on("start",function(){a(e,e.leftHandle)}),this.rightHandleDraggable.on("end",function(){r(e,"right")}),this.rightHandleDraggable.on("update",function(){l(e)}),window.handles=[this.rightHandle,this.leftHandle]}function a(e,i){i.setProperties({pointerEvents:"none"}),e.boardViewRef.handlesActive=!0,e.boardViewRef.disableScrollSurfaces()}function r(e,i){switch(i){case"left":e.leftHandle.removeHandle();var t=e.leftHandleDraggable.getPosition();e.leftHandleAbsolutePosition=e.leftHandleStartPosition+t[0],e.rightHandle.setProperties({pointerEvents:"all"}),e.rightHandleDraggable.setOptions({xRange:[e.leftHandleAbsolutePosition-e.rightHandleStartPosition+e.minimumColumnWidth,e.windowWidth-e.rightHandleStartPosition-e.minimumColumnWidth],yRange:[0,0]}),d(e,e.leftHandleStartPosition+t[0]);break;case"right":e.rightHandle.removeHandle();var t=e.rightHandleDraggable.getPosition();e.rightHandleAbsolutePosition=e.rightHandleStartPosition+t[0],e.leftHandle.setProperties({pointerEvents:"all"}),e.leftHandleDraggable.setOptions({xRange:[0-e.leftHandleStartPosition+e.minimumColumnWidth,e.rightHandleAbsolutePosition-e.leftHandleStartPosition-e.minimumColumnWidth],yRange:[0,0]}),h(e,e.rightHandleStartPosition+t[0])}e.boardViewRef.enableScrollSurfaces();for(var o=0;o<e.boardViewRef.columnCount;o++)e.boardViewRef.columns[o].snap();e.boardViewRef.handlesActive=!1}function s(e){var i=e.leftHandleDraggable.getPosition();e.leftHandleAbsolutePosition=e.leftHandleStartPosition+i[0],d(e,e.leftHandleStartPosition+i[0]),e.rightHandleDraggable.setOptions({xRange:[e.leftHandleAbsolutePosition-e.rightHandleStartPosition+e.minimumColumnWidth,e.windowWidth-e.rightHandleStartPosition-e.minimumColumnWidth],yRange:[0,0]})}function d(e,i){e.rightHandleDraggable.setOptions({xRange:[e.leftHandleAbsolutePosition-e.rightHandleStartPosition+e.minimumColumnWidth,e.windowWidth-e.rightHandleStartPosition-e.minimumColumnWidth],yRange:[0,0]}),e.boardViewRef.coloumnModifiers[0].sizeFrom([i,void 0]);var t;t=e.boardViewRef.windowHeight>i*e.boardViewRef.widthToHeightRatio?i*e.boardViewRef.widthToHeightRatio:e.boardViewRef.windowHeight,i*e.boardViewRef.widthToHeightRatio<e.boardViewRef.windowHeight/2&&(t=e.boardViewRef.windowHeight/2),e.boardViewRef.columns[0].resizeItems([i,t],e.boardViewRef.widthToHeightRatio);var o,n=e.rightHandleAbsolutePosition-i;o=e.boardViewRef.windowHeight>n*e.boardViewRef.widthToHeightRatio?n*e.boardViewRef.widthToHeightRatio:e.boardViewRef.windowHeight,n*e.boardViewRef.widthToHeightRatio<e.boardViewRef.windowHeight/2&&(o=e.boardViewRef.windowHeight/2),e.boardViewRef.coloumnModifiers[1].sizeFrom([n,void 0]),e.boardViewRef.coloumnModifiers[1].setTransform(m.translate(i,0,0)),e.boardViewRef.columns[1].resizeItems([n,o],e.boardViewRef.widthToHeightRatio)}function l(e){var i=e.rightHandleDraggable.getPosition();e.rightHandleAbsolutePosition=e.rightHandleStartPosition+i[0],h(e,e.rightHandleStartPosition+i[0]),e.leftHandleDraggable.setOptions({xRange:[0-e.leftHandleStartPosition+e.minimumColumnWidth,e.rightHandleAbsolutePosition-e.leftHandleStartPosition-e.minimumColumnWidth],yRange:[0,0]})}function h(e,i){e.leftHandleDraggable.setOptions({xRange:[0-e.leftHandleStartPosition+e.minimumColumnWidth,e.rightHandleAbsolutePosition-e.leftHandleStartPosition-e.minimumColumnWidth],yRange:[0,0]});var t,o=i-e.leftHandleAbsolutePosition;t=e.boardViewRef.windowHeight>o*e.boardViewRef.widthToHeightRatio?o*e.boardViewRef.widthToHeightRatio:e.boardViewRef.windowHeight,o*e.boardViewRef.widthToHeightRatio<e.boardViewRef.windowHeight/2&&(t=e.boardViewRef.windowHeight/2),e.boardViewRef.coloumnModifiers[1].sizeFrom([o,void 0]),e.boardViewRef.columns[1].resizeItems([o,t],e.boardViewRef.widthToHeightRatio);var n,a=e.boardViewRef.windowWidth-i;n=e.boardViewRef.windowHeight>a*e.boardViewRef.widthToHeightRatio?a*e.boardViewRef.widthToHeightRatio:e.boardViewRef.windowHeight,a*e.boardViewRef.widthToHeightRatio<e.boardViewRef.windowHeight/2&&(n=e.boardViewRef.windowHeight/2),e.boardViewRef.coloumnModifiers[2].sizeFrom([a,void 0]),e.boardViewRef.coloumnModifiers[2].setTransform(m.translate(i,0,0)),e.boardViewRef.columns[2].resizeItems([a,n],e.boardViewRef.widthToHeightRatio)}function u(){var e,i=this,t=new P(0);e=window.hudStart&&!WURFL.is_mobile?["scroll-surface-blur"]:["scroll-surface"];var o,n=new H({classes:e,size:i.handleSize,properties:{color:"#fff",cursor:"col-resize",zIndex:0}}),a=new g({size:i.handleSize,origin:[.5,0],properties:{backgroundColor:"#333",zIndex:0,pointerEvents:"none"}}),r=new V({origin:[.5,.5],align:[.5,.5],transform:function(){return m.translate(0,0,1)}}),s=new g({size:i.handleSize,origin:[.5,0],opacity:0,properties:{backgroundColor:"#666",zIndex:0,pointerEvents:"none"}}),d=new V({origin:[.5,.5],align:[.5,.5],transform:function(){return m.translate(0,0,1)},opacity:function(){return t.get()}}),l=[];if(WURFL.is_mobile){var o="images/left_right_wide.png";l=[86,34]}else{var o="images/left_right.png";l=[72,34]}var h=new b({content:o,size:[l[0],l[1]],properties:{pointerEvents:"all",zIndex:0}}),u=new V({align:[.5,.45],origin:[.5,.5],transform:function(){var e=t.get();return m.scale(e,e,1)}});n.add(r).add(a),n.add(d).add(s),n.add(u).add(h);var f,c=!1;return n.removeHandle=function(){a.setProperties({backgroundColor:"#333"}),p.clear(f),c=!1,f=p.setTimeout(function(){t.set(0,{duration:500,curve:w.outBounce})},300)},n.makeHandleSurfaceGreen=function(){a.setProperties({backgroundColor:"#666"})},n.makeHandleSurfaceGrey=function(){a.setProperties({backgroundColor:"#333333"})},window.debug?(n.on("mouseenter",function(e){p.clear(f),t.set(1,{duration:500,curve:w.outBounce})}),n.on("mouseleave",function(e){p.clear(f),f=p.setTimeout(function(){t.set(0,{duration:500,curve:w.outBounce})},300)})):WURFL.is_mobile?(n.on("touchstart",function(e){p.clear(f),t.set(1,{duration:500,curve:w.outBounce})}),n.on("touchend",function(e){p.clear(f),f=p.setTimeout(function(){t.set(0,{duration:500,curve:w.outBounce})},300)})):(n.on("mousedown",function(e){t.set(1),c=!0}),n.on("mouseover",function(e){0==c&&(p.clear(f),t.set(1,{duration:500,curve:w.outBounce}))}),n.on("mouseout",function(e){p.clear(f),0==c&&(p.clear(f),f=p.setTimeout(function(){t.set(0,{duration:500,curve:w.outBounce})},300))})),n}var f=e("famous/core/View"),g=e("famous/core/Surface"),m=e("famous/core/Transform"),c=e("famous/modifiers/StateModifier"),w=e("famous/transitions/Easing"),H=e("famous/surfaces/ContainerSurface"),b=e("famous/surfaces/ImageSurface"),R=e("famous/modifiers/Draggable"),p=e("famous/utilities/Timer"),P=e("famous/transitions/Transitionable"),V=e("famous/core/Modifier");o.prototype=Object.create(f.prototype),o.prototype.constructor=o,o.DEFAULT_OPTIONS={},t.exports=o,o.prototype.getHandlePosition=function(e){var i;switch(e){case 0:i=this.leftHandleAbsolutePosition;break;case 1:i=this.rightHandleAbsolutePosition}return i},o.prototype.getHandleLeftLimit=function(e){var i;switch(e){case 0:i=0+this.minimumColumnWidth;break;case 1:i=this.leftHandleAbsolutePosition+this.minimumColumnWidth}return i},o.prototype.getHandleRightLimit=function(e){var i;switch(e){case 0:i=this.rightHandleAbsolutePosition-this.minimumColumnWidth;break;case 1:i=this.boardViewRef.windowWidth-this.minimumColumnWidth}return i},o.prototype.moveHandle=function(e,i){var t,o=this,n=function(){var e=o.leftHandleDraggable.getPosition(),i=o.leftHandleStartPosition+e[0];d(o,i)},a=function(){var e=o.rightHandleDraggable.getPosition(),i=o.rightHandleStartPosition+e[0];h(o,i)},r=function(){o.boardViewRef.columns[0].snap(),o.boardViewRef.columns[1].snap()},s=function(){o.boardViewRef.columns[1].snap(),o.boardViewRef.columns[2].snap()};switch(e){case 0:this.leftHandle.removeHandle(),this.leftHandle.makeHandleSurfaceGreen(),t=i-this.leftHandleStartPosition,this.leftHandleAbsolutePosition=i,this.myTimer=p.setInterval(n,20),this.leftHandleDraggable.setPosition([t,0,0],{curve:w.outCirc,duration:1e3},function(){o.leftHandle.makeHandleSurfaceGrey(),d(o,i),p.clear(o.myTimer),p.setTimeout(r,100)});break;case 1:this.rightHandle.removeHandle(),this.rightHandle.makeHandleSurfaceGreen(),t=i-this.rightHandleStartPosition,this.rightHandleAbsolutePosition=i,this.myTimer=p.setInterval(a,20),this.rightHandleDraggable.setPosition([t,0,0],{curve:w.outCirc,duration:1e3},function(){o.rightHandle.makeHandleSurfaceGrey(),h(o,i),p.clear(o.myTimer),p.setTimeout(s,100)})}},o.prototype.disableHandleSurfaces=function(){this.leftHandle.setProperties({pointerEvents:"none"}),this.rightHandle.setProperties({pointerEvents:"none"})},o.prototype.enableHandleSurfaces=function(){this.leftHandle.setProperties({pointerEvents:"all"}),this.rightHandle.setProperties({pointerEvents:"all"})}});