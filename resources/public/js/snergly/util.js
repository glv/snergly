// Compiled by ClojureScript 1.7.170 {}
goog.provide('snergly.util');
goog.require('cljs.core');
snergly.util.pad = (function snergly$util$pad(size,char$,s){
var needed = (size - cljs.core.count.call(null,s));
if((needed <= (0))){
return s;
} else {
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,needed,char$))),cljs.core.str(s)].join('');
}
});
snergly.util.color_cell = (function snergly$util$color_cell(max_distance,distance){
var intensity = ((max_distance - distance) / max_distance);
var dark = Math.round(((255) * intensity));
var bright = Math.round(((128) + ((127) * intensity)));
var hex2 = ((function (intensity,dark,bright){
return (function (p1__25813_SHARP_){
return snergly.util.pad.call(null,(2),"0",p1__25813_SHARP_.toString((16)));
});})(intensity,dark,bright))
;
return [cljs.core.str("#"),cljs.core.str(hex2.call(null,dark)),cljs.core.str(hex2.call(null,bright)),cljs.core.str(hex2.call(null,dark))].join('');
});
snergly.util.base36 = (function snergly$util$base36(num){
return num.toString((36));
});

//# sourceMappingURL=util.js.map