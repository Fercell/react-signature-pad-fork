!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("prop-types"),require("react"),require("trim-canvas")):"function"==typeof define&&define.amd?define(["prop-types","react","trim-canvas"],e):"object"==typeof exports?exports.SignatureCanvas=e(require("prop-types"),require("react"),require("trim-canvas")):t.SignatureCanvas=e(t["prop-types"],t.react,t["trim-canvas"])}(this,function(t,e,n){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},c=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(3),l=o(u),d=n(4),f=o(d),h=n(5),p=o(h),v=n(1),_=o(v),y=n(2),m=o(y),x=function(t){function e(){var t,n,o,i;r(this,e);for(var s=arguments.length,c=Array(s),u=0;u<s;u++)c[u]=arguments[u];return n=o=a(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(c))),o.clear=function(){var t=o._ctx,e=o._canvas;t.fillStyle=o.props.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),o._reset()},o.fromDataURL=function(t){var e=new Image,n=o.props.ratio,r=o._canvas.width/n,a=o._canvas.height/n;o._reset(),e.onload=function(){return o._ctx.drawImage(e,0,0,r,a)},e.src=t,o._isEmpty=!1},o.getCanvas=function(){return o._canvas},o.getTrimmedCanvas=function(){var t=document.createElement("canvas");return t.width=o._canvas.width,t.height=o._canvas.height,t.getContext("2d").drawImage(o._canvas,0,0),(0,p.default)(t)},o.isEmpty=function(){return o._isEmpty},o._checkClearOnResize=function(){o.props.clearOnResize&&o._resizeCanvas()},o._resizeCanvas=function(){var t=o.props.canvasProps||{},e=t.width,n=t.height,r=o._ctx,a=o._canvas,i=Math.max(o.props.ratio,1);e||(a.width=a.offsetWidth*i),n||(a.height=a.offsetHeight*i),e&&n||r.scale(i,i)},o._reset=function(){o.points=[],o._lastVelocity=0,o._lastWidth=(o.props.minWidth+o.props.maxWidth)/2,o._isEmpty=!0,o._ctx.fillStyle=o.props.penColor},o._handleMouseEvents=function(){o._mouseButtonDown=!1,o._canvas.addEventListener("mousedown",o._handleMouseDown),o._canvas.addEventListener("mousemove",o._handleMouseMove),document.addEventListener("mouseup",o._handleMouseUp),window.addEventListener("resize",o._checkClearOnResize)},o._handleTouchEvents=function(){o._canvas.style.msTouchAction="none",o._canvas.addEventListener("touchstart",o._handleTouchStart),o._canvas.addEventListener("touchmove",o._handleTouchMove),document.addEventListener("touchend",o._handleTouchEnd)},o.off=function(){o._canvas.removeEventListener("mousedown",o._handleMouseDown),o._canvas.removeEventListener("mousemove",o._handleMouseMove),document.removeEventListener("mouseup",o._handleMouseUp),o._canvas.removeEventListener("touchstart",o._handleTouchStart),o._canvas.removeEventListener("touchmove",o._handleTouchMove),document.removeEventListener("touchend",o._handleTouchEnd),window.removeEventListener("resize",o._checkClearOnResize)},o._handleMouseDown=function(t){1===t.which&&(o._mouseButtonDown=!0,o._strokeBegin(t))},o._handleMouseMove=function(t){o._mouseButtonDown&&o._strokeUpdate(t)},o._handleMouseUp=function(t){1===t.which&&o._mouseButtonDown&&(o._mouseButtonDown=!1,o._strokeEnd(t))},o._handleTouchStart=function(t){var e=t.changedTouches[0];o._strokeBegin(e)},o._handleTouchMove=function(t){t.preventDefault();var e=t.changedTouches[0];o._strokeUpdate(e)},o._handleTouchEnd=function(t){var e=t.target===o._canvas;e&&o._strokeEnd(t)},o._strokeUpdate=function(t){var e=o._createPoint(t);o._addPoint(e)},o._strokeBegin=function(t){o._reset(),o._strokeUpdate(t),o.props.onBegin(t)},o._strokeDraw=function(t){var e=o._ctx,n="function"==typeof o.props.dotSize?o.props.dotSize(o.props.minWidth,o.props.maxWidth):o.props.dotSize;e.beginPath(),o._drawPoint(t.x,t.y,n),e.closePath(),e.fill()},o._strokeEnd=function(t){var e=o.points.length>2,n=o.points[0];!e&&n&&o._strokeDraw(n),o.props.onEnd(t)},o._createPoint=function(t){var e=o._canvas.getBoundingClientRect();return new m.default(t.clientX-e.left,t.clientY-e.top)},o._addPoint=function(t){var e,n,r,a,i=o.points;i.push(t),i.length>2&&(3===i.length&&i.unshift(i[0]),a=o._calculateCurveControlPoints(i[0],i[1],i[2]),e=a.c2,a=o._calculateCurveControlPoints(i[1],i[2],i[3]),n=a.c1,r=new _.default(i[1],e,n,i[2]),o._addCurve(r),i.shift())},o._addCurve=function(t){var e,n,r=t.startPoint,a=t.endPoint;e=a.velocityFrom(r),e=o.props.velocityFilterWeight*e+(1-o.props.velocityFilterWeight)*o._lastVelocity,n=o._strokeWidth(e),o._drawCurve(t,o._lastWidth,n),o._lastVelocity=e,o._lastWidth=n},o._drawPoint=function(t,e,n){var r=o._ctx;r.moveTo(t,e),r.arc(t,e,n,0,2*Math.PI,!1),o._isEmpty=!1},o._drawCurve=function(t,e,n){var r,a,i,s,c,u,l,d,f,h,p,v=o._ctx,_=n-e;for(r=Math.floor(t.length()),v.beginPath(),i=0;i<r;i++)s=i/r,c=s*s,u=c*s,l=1-s,d=l*l,f=d*l,h=f*t.startPoint.x,h+=3*d*s*t.control1.x,h+=3*l*c*t.control2.x,h+=u*t.endPoint.x,p=f*t.startPoint.y,p+=3*d*s*t.control1.y,p+=3*l*c*t.control2.y,p+=u*t.endPoint.y,a=e+u*_,o._drawPoint(h,p,a);v.closePath(),v.fill()},o._strokeWidth=function(t){return Math.max(o.props.maxWidth/(t+1),o.props.minWidth)},i=n,a(o,i)}return i(e,t),c(e,[{key:"componentDidMount",value:function(){this._ctx=this._canvas.getContext("2d"),this._handleMouseEvents(),this._handleTouchEvents(),this._resizeCanvas(),this.clear()}},{key:"componentWillUnmount",value:function(){this.off()}},{key:"_calculateCurveControlPoints",value:function(t,e,n){var o=t.x-e.x,r=t.y-e.y,a=e.x-n.x,i=e.y-n.y,s={x:(t.x+e.x)/2,y:(t.y+e.y)/2},c={x:(e.x+n.x)/2,y:(e.y+n.y)/2},u=Math.sqrt(o*o+r*r),l=Math.sqrt(a*a+i*i),d=s.x-c.x,f=s.y-c.y,h=l/(u+l),p={x:c.x+d*h,y:c.y+f*h},v=e.x-p.x,_=e.y-p.y;return{c1:new m.default(s.x+v,s.y+_),c2:new m.default(c.x+v,c.y+_)}}},{key:"render",value:function(){var t=this,e=this.props.canvasProps;return f.default.createElement("canvas",s({ref:function(e){t._canvas=e}},e))}}]),e}(d.Component);x.propTypes={velocityFilterWeight:l.default.number,minWidth:l.default.number,maxWidth:l.default.number,dotSize:l.default.oneOfType([l.default.number,l.default.func]),penColor:l.default.string,onEnd:l.default.func,onBegin:l.default.func,canvasProps:l.default.object,clearOnResize:l.default.bool,ratio:l.default.number},x.defaultProps={velocityFilterWeight:.7,minWidth:.5,maxWidth:2.5,dotSize:function(t,e){return(t+e)/2},penColor:"black",onEnd:function(){},onBegin:function(){},backgroundColor:"rgba(0,0,0,0)",clearOnResize:!0,ratio:window.devicePixelRatio||1},e.default=x},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(){function t(e,o,r,a){n(this,t),this.startPoint=e,this.control1=o,this.control2=r,this.endPoint=a}return o(t,[{key:"length",value:function t(){var e,n,o,r,a,i,s,c,u=10,t=0;for(e=0;e<=u;e++)n=e/u,o=this._point(n,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),r=this._point(n,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y),e>0&&(s=o-a,c=r-i,t+=Math.sqrt(s*s+c*c)),a=o,i=r;return t}},{key:"_point",value:function(t,e,n,o,r){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*o*(1-t)*t*t+r*t*t*t}}]),t}();e.default=r},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function(){function t(e,o,r){n(this,t),this.x=e,this.y=o,this.time=r||(new Date).getTime()}return o(t,[{key:"velocityFrom",value:function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1}},{key:"distanceTo",value:function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}}]),t}();e.default=r},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e){t.exports=n}])});