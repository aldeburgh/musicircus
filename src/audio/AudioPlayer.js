define(["require","exports","module","famous/core/View","famous/core/Surface","famous/utilities/Timer","famous/modifiers/StateModifier","famous/transitions/Transitionable","famous/core/Transform","famous/core/Modifier","famous/surfaces/ImageSurface","famous/views/RenderController","famous/surfaces/ContainerSurface","audio/BufferLoader"],function(t,e,o){function i(){u.apply(this,arguments),this.rootModifier=new h({size:this.options.size,align:[0,0],origin:[0,0]}),this.mainNode=this.add(this.rootModifier);this.playing=!1,this.context=window.audioContext,this.myAudioAnalyser=this.context.createAnalyser(),this.myAudioAnalyser.smoothingTimeConstant=.85,this.myAudioAnalyser.connect(this.context.destination),this.mySpectrum,this.bufferLoader,this.buffer,this.volume=.5,this.audioTimer,this.urls=[this.options.url],this.playable=!1,this.spectrumLength=16,this.spectrumWidth=1,this.loading=!1,this.loadSurface=new g({size:[void 0,!0],align:[0,.5],zIndex:1e3});var t=new d({origin:[.5,.5],align:[0,.5]});this.renderController=new p,this.add(t).add(this.renderController),s.call(this)}function r(t,e){e.buffer=t[0],e.play(),e.changeVolume(e.volume),e.renderController.hide(e.loadSurface),this.loading=!1}function s(){var t=this;this.spectrumArray=[];for(var e=0;e<this.spectrumLength;e++){var o=new c({properties:{backgroundColor:"#fff",zIndex:100,pointerEvents:"none"}}),i=.2+e/this.spectrumLength*.6,r=new d({size:[this.spectrumWidth,0],origin:[0,.5],align:[i,.5],transform:function(){return l.translate(-t.spectrumWidth/2,0,0)}});this.add(r).add(o),this.spectrumArray.push(r)}}function n(){f.clear(this.spectrumTimer),f.clear(this.clearSpectrumTimer),this.spectrumTimer=null,this.clearSpectrumTimer=null;for(var t=0;t<this.spectrumLength;t++)this.spectrumArray[t].setSize([this.spectrumWidth,0])}function a(){var t=new Uint8Array(this.myAudioAnalyser.frequencyBinCount);this.myAudioAnalyser.getByteFrequencyData(t);for(var e=0,o=0;o<128;o+=128/this.spectrumLength){var i=this.volume;if(i<.3)var i=.3;var r=t[o]*i,s=this.options.imageHieght*r/512;this.spectrumArray[e].setSize([this.spectrumWidth,s]),e++}}var u=t("famous/core/View"),c=t("famous/core/Surface"),f=t("famous/utilities/Timer"),h=t("famous/modifiers/StateModifier"),l=(t("famous/transitions/Transitionable"),t("famous/core/Transform")),d=t("famous/core/Modifier"),m=t("famous/surfaces/ImageSurface"),p=t("famous/views/RenderController"),g=t("famous/surfaces/ContainerSurface"),y=t("audio/BufferLoader");i.prototype=Object.create(u.prototype),i.prototype.constructor=i,i.prototype.loadBuffers=function(){if(!this.loading){this.loading=!0;var t=new m({origin:[.5,.5],size:[50,50],content:"images/loader.png",zIndex:1e3}),e=Date.now(),o=new d({origin:[.5,.5],transform:function(){return l.rotateZ(.005*(Date.now()-e))}});this.loadSurface.add(o).add(t),this.renderController.show(this.loadSurface)}this.stop();for(var i=!1,s=0;s<window.bufferStorage.length;s++)if(window.bufferStorage[s].urls[0]===this.urls[0]){i=!0;var n=s}i?r(window.bufferStorage[n].buffer,this):(this.bufferLoader=new y(this.context,this.urls,r,this),this.bufferLoader.load())},i.prototype.play=function(){var t=this;this.audioControl=function(e){var o=t.context.createBufferSource(),i=t.context.createGain?t.context.createGain():t.context.createGainNode();o.buffer=e,f.clear(t.audioTimer),t.audioTimer=null,t.audioTimer=f.setTimeout(function(){t.options.parent.audioEnded(),f.clear(t.audioTimer)},1e3*o.buffer.duration+4e3),console.log(o.buffer.duration),o.connect(i),i.connect(t.context.destination),i.connect(t.myAudioAnalyser);return{source:o,gainNode:i}}(this.buffer),this.audioControl.gainNode.gain.value=0,this.audioControl.source.start?this.audioControl.source.start(0):this.audioControl.source.noteOn(0),this.spectrumTimer=f.setInterval(function(){a.call(t)},60),this.playable||this.stop()},i.prototype.stop=function(){this.audioControl&&(this.audioControl.source.stop?this.audioControl.source.stop(0):this.audioControl.source.noteOff(0)),n.call(this),f.clear(this.audioTimer)},i.prototype.crossfade=function(t){this.audioControl.gainNode.gain.value=t},i.prototype.changeVolume=function(t){this.audioControl&&(this.audioControl.gainNode.gain.value=t,this.volume=t)},i.prototype.setVolume=function(t){this.volume=t},i.prototype.toggle=function(){this.playing?this.stop():this.play(),this.playing=!this.playing},i.DEFAULT_OPTIONS={size:"size",hud:"hud",context:"context",url:"url",parent:"parent"},o.exports=i});