define(["require","exports","module","famous/core/View","famous/core/Surface","famous/surfaces/ContainerSurface","famous/core/Transform","famous/modifiers/StateModifier","famous/core/Modifier","views/ColumnView","views/TwoColumnMusicircusInterfaceView","views/ThreeColumnMusicircusInterfaceView","views/FourColumnMusicircusInterfaceView","data/DataArray"],function(t,i,o){function s(t){switch(c.apply(this,arguments),this.appViewRef=t,this.rootModifier=new m({size:[void 0,void 0],origin:[0,0],align:[0,0]}),this.mainNode=this.add(this.rootModifier),this.boardContainer=new l({size:[void 0,void 0],properties:{pointerEvents:"all",cursor:"pointer"}}),this.mainNode.add(this.boardContainer),this.columns=[],this.coloumnModifiers=[],this.autoScrollInactive=!0,WURFL.is_mobile&&(this.options.gutter=2*this.options.gutter),this.gutter=this.options.gutter,this.columnCount=this.options.columnCount,this.isMobile=this.options.isMobile,this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,WURFL.is_mobile?this.minimumColumnWidth=Math.floor(.2*window.innerWidth):this.minimumColumnWidth=Math.floor(.15*window.innerWidth),this.columnCount){case 1:this.maximumColumnWidth=Math.floor(1*window.innerWidth);break;case 2:this.maximumColumnWidth=Math.floor(.85*window.innerWidth);break;case 3:this.maximumColumnWidth=Math.floor(.7*window.innerWidth);break;case 4:this.maximumColumnWidth=Math.floor(.55*window.innerWidth)}switch(this.widthToHeightRatio=1,this.columnItemHeights=[],this.columnWidths=[],this.columnStartXPositions=[],2==this.columnCount?this.videoData=g.createNewNonSilentColumnDataArrays():this.videoData=g.createNewColumnDataArrays(),n.call(this),this.columnCount){case 1:break;case 2:this.musicircusInterface=new f(this,this.windowWidth,this.windowHeight),this.mainNode.add(this.musicircusInterface);break;case 3:this.musicircusInterface=new p(this,this.windowWidth,this.windowHeight),this.mainNode.add(this.musicircusInterface);break;case 4:this.musicircusInterface=new W(this,this.windowWidth,this.windowHeight),this.mainNode.add(this.musicircusInterface)}}function n(){if(4==this.columnCount){this.columnWidths=[];for(var t=0;t<this.columnCount;t++)this.windowHeight>this.windowWidth*this.options.columnWidths[t]*this.widthToHeightRatio?this.columnItemHeights[t]=this.windowWidth*this.options.columnWidths[t]*this.widthToHeightRatio:this.columnItemHeights[t]=this.windowHeight,this.columnItemHeights[t]<this.windowHeight/2&&(this.columnItemHeights[t]=this.windowHeight/2);this.columnWidths=[this.windowWidth*this.options.columnWidths[0]-this.options.gutter/2,this.windowWidth*this.options.columnWidths[1]-this.options.gutter,this.windowWidth*this.options.columnWidths[2]-this.options.gutter,this.windowWidth*this.options.columnWidths[3]-this.options.gutter/2],this.columnStartXPositions=[0,this.windowWidth*this.options.columnWidths[0]+this.options.gutter/2,this.windowWidth*(this.options.columnWidths[0]+this.options.columnWidths[1])+this.options.gutter/2,this.windowWidth*(this.options.columnWidths[0]+this.options.columnWidths[1]+this.options.columnWidths[2])+this.options.gutter/2]}if(3==this.columnCount){this.columnWidths=[];for(var t=0;t<this.columnCount;t++)this.windowHeight>this.windowWidth*this.options.columnWidths[t]*this.widthToHeightRatio?this.columnItemHeights[t]=this.windowWidth*this.options.columnWidths[t]*this.widthToHeightRatio:this.columnItemHeights[t]=this.windowHeight,this.columnItemHeights[t]<this.windowHeight/2&&(this.columnItemHeights[t]=this.windowHeight/2);this.columnWidths=[this.windowWidth*this.options.columnWidths[0]-this.options.gutter/2,this.windowWidth*this.options.columnWidths[1]-this.options.gutter,this.windowWidth*this.options.columnWidths[2]-this.options.gutter/2],this.columnStartXPositions=[0,this.windowWidth*this.options.columnWidths[0]+this.options.gutter/2,this.windowWidth*(this.options.columnWidths[0]+this.options.columnWidths[1])+this.options.gutter/2]}if(2==this.columnCount){this.columnWidths=[];for(var t=0;t<this.columnCount;t++)this.windowHeight>this.windowWidth*this.options.columnWidths[t]*this.widthToHeightRatio?this.columnItemHeights[t]=this.windowWidth*this.options.columnWidths[t]*this.widthToHeightRatio:this.columnItemHeights[t]=this.windowHeight,this.columnItemHeights[t]<this.windowHeight/2&&(this.columnItemHeights[t]=this.windowHeight/2);this.columnWidths=[this.windowWidth*this.options.columnWidths[0]-this.options.gutter/2,this.windowWidth*this.options.columnWidths[1]-this.options.gutter/2],this.columnStartXPositions=[0,this.windowWidth*this.options.columnWidths[0]+this.options.gutter/2]}1==this.columnCount&&(this.columnItemHeights=[.5*this.windowWidth*this.widthToHeightRatio],this.columnWidths=[window.innerWidth],this.columnStartXPositions=[0]);for(var t=0;t<this.columnCount;t++)this.columns[t]=new w({maxColumnWidth:this.maximumColumnWidth,columnItemHeight:this.columnItemHeights[t],columnWidth:this.columnWidths[t],columnData:this.videoData[t],isMobile:this.isMobile,windowWidth:this.windowWidth,boardContainer:this.boardContainer,boardViewRef:this,columnNumber:t,columnCount:this.columnCount}),this.coloumnModifiers[t]=new d({transform:a.translate(this.columnStartXPositions[t],0,0)}),this.coloumnModifiers[t].sizeFrom([this.columnWidths[t],void 0]),this.mainNode.add(this.coloumnModifiers[t]).add(this.columns[t]),this.columns[t].snapRandomPlay.call(this.columns[t])}function e(t){return this.musicircusInterface.getHandlePosition(t)}function h(t){return this.musicircusInterface.getHandleLeftLimit(t)}function r(t){return this.musicircusInterface.getHandleRightLimit(t)}function u(t,i){this.musicircusInterface.moveHandle(t,i)}var c=t("famous/core/View"),l=(t("famous/core/Surface"),t("famous/surfaces/ContainerSurface")),a=t("famous/core/Transform"),m=t("famous/modifiers/StateModifier"),d=t("famous/core/Modifier"),w=t("views/ColumnView"),f=t("views/TwoColumnMusicircusInterfaceView"),p=t("views/ThreeColumnMusicircusInterfaceView"),W=t("views/FourColumnMusicircusInterfaceView"),g=t("data/DataArray");s.prototype=Object.create(c.prototype),s.prototype.constructor=s,s.DEFAULT_OPTIONS={columnCount:3,gutter:18,columnWidths:[.2,.3,.5,.2],isMobile:!1},o.exports=s,s.prototype.disableScrollSurfaces=function(){for(var t=0;t<this.columnCount;t++)this.columns[t].scrollSurface.setProperties({pointerEvents:"none"}),this.columns[t].scrollSurface.draggable.deactivate(),this.columns[t].topScrollSurface.setProperties({pointerEvents:"none"}),this.columns[t].bottomScrollSurface.setProperties({pointerEvents:"none"});this.appViewRef.disableHUD()},s.prototype.enableScrollSurfaces=function(){for(var t=0;t<this.columnCount;t++)this.columns[t].scrollSurface.setProperties({pointerEvents:"all"}),this.columns[t].scrollSurface.draggable.activate(),this.columns[t].topScrollSurface.setProperties({pointerEvents:"all"}),this.columns[t].bottomScrollSurface.setProperties({pointerEvents:"all"});this.appViewRef.enableHUD()},s.prototype.autoResizeColumns=function(){var t=Math.floor(Math.random()*(this.columnCount-1)),i=(e.call(this,t),h.call(this,t)),o=r.call(this,t),s=i+Math.floor(Math.random()*(o-i));u.call(this,t,s)},s.prototype.disableHandles=function(){this.musicircusInterface&&this.musicircusInterface.disableHandleSurfaces()},s.prototype.enableHandles=function(){this.musicircusInterface&&this.musicircusInterface.enableHandleSurfaces()},s.prototype.disableOtherColumnSurfaces=function(t){for(var i=0;i<this.columnCount;i++)i!=t&&(this.columns[i].scrollSurface.setProperties({pointerEvents:"none"}),this.columns[i].scrollSurface.draggable.deactivate(),this.columns[i].topScrollSurface.setProperties({pointerEvents:"none"}),this.columns[i].bottomScrollSurface.setProperties({pointerEvents:"none"}))},s.prototype.enableAllColumnSurfaces=function(){for(var t=0;t<this.columnCount;t++)this.columns[t]&&(this.columns[t].scrollSurface.setProperties({pointerEvents:"all"}),this.columns[t].scrollSurface.draggable.activate(),this.columns[t].topScrollSurface.setProperties({pointerEvents:"all"}),this.columns[t].bottomScrollSurface.setProperties({pointerEvents:"all"}))}});