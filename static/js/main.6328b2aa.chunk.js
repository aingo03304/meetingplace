(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,n,t){e.exports=t(49)},47:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var i,o=t(22),a=t.n(o),r=t(19),c=t(36),s=t.n(c),d=(t(47),function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,50)).then(function(n){var t=n.getCLS,i=n.getFID,o=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),i(e),o(e),a(e),r(e)})}),u=t(37),f=function(e){var n=e.antialias,t=e.engineOptions,i=e.adaptToDeviceRatio,c=e.sceneOptions,s=e.onRender,d=e.onSceneReady,f=Object(u.a)(e,["antialias","engineOptions","adaptToDeviceRatio","sceneOptions","onRender","onSceneReady"]),g=Object(o.useRef)(null);return Object(o.useEffect)(function(){var e=g.current;if(e){var o=new r.a(e,n,t,i),a=new r.e(o,c);a.isReady()?d(a):a.onReadyObservable.addOnce(function(e){return d(e)}),o.runRenderLoop(function(){"function"===typeof s&&s(a),a.render()});var u=function(){a.getEngine().resize()};return window&&window.addEventListener("resize",u),function(){a.getEngine.dispose(),window&&window.removeEventListener("resize",u)}}},[n,t,i,c,s,d]),a.a.createElement("canvas",Object.assign({ref:g},f))};s.a.createRoot(document.getElementById("root")).render(a.a.createElement(f,{id:"scene-component",antialias:!0,adaptToDeviceRatio:!0,onRender:function(e){if(void 0!==i){var n=e.getEngine().getDeltaTime();i.rotation.y+=10/60*Math.PI*2*(n/1e3)}},onSceneReady:function(e){var n=new r.b("camera1",new r.f(0,5,-10),e);n.setTarget(r.f.Zero());var t=e.getEngine().getRenderingCanvas();n.attachControl(t,!0),new r.c("light",new r.f(0,1,0),e).intensity=.7,(i=r.d.CreateBox("box",{size:2},e)).position.y=1,r.d.CreateGround("ground",{width:6,height:6},e)},engineOptions:void 0,sceneOptions:void 0})),d()}},[[38,3,2]]]);
//# sourceMappingURL=main.6328b2aa.chunk.js.map