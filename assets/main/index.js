System.register("chunks:///_virtual/DeviceOrientation.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,i,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,i=t._decorator,r=t.Component}],execute:function(){var o;n._RF.push({},"dd027BjVS9NC4474brg8CLj","DeviceOrientation",void 0);var c=i.ccclass;i.property,t("DeviceOrientation",c("DeviceOrientation")(o=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var i=n.prototype;return i.start=function(){},i.update=function(t){},n}(r))||o);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./DeviceOrientation.ts"],(function(){"use strict";return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});