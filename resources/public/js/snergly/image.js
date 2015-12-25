// Compiled by ClojureScript 1.7.170 {}
goog.provide('snergly.image');
goog.require('cljs.core');
goog.require('snergly.grid');
snergly.image.draw_cells = (function snergly$image$draw_cells(g,grid,cell_size,draw_fn){
var seq__31094 = cljs.core.seq.call(null,snergly.grid.grid_coords.call(null,grid));
var chunk__31095 = null;
var count__31096 = (0);
var i__31097 = (0);
while(true){
if((i__31097 < count__31096)){
var coord = cljs.core._nth.call(null,chunk__31095,i__31097);
var vec__31098_31102 = cljs.core.map.call(null,((function (seq__31094,chunk__31095,count__31096,i__31097,coord){
return (function (p1__31084_SHARP_){
return (p1__31084_SHARP_ * cell_size);
});})(seq__31094,chunk__31095,count__31096,i__31097,coord))
,coord);
var y1_31103 = cljs.core.nth.call(null,vec__31098_31102,(0),null);
var x1_31104 = cljs.core.nth.call(null,vec__31098_31102,(1),null);
var vec__31099_31105 = cljs.core.map.call(null,((function (seq__31094,chunk__31095,count__31096,i__31097,vec__31098_31102,y1_31103,x1_31104,coord){
return (function (p1__31085_SHARP_){
return (p1__31085_SHARP_ + cell_size);
});})(seq__31094,chunk__31095,count__31096,i__31097,vec__31098_31102,y1_31103,x1_31104,coord))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1_31103,x1_31104], null));
var y2_31106 = cljs.core.nth.call(null,vec__31099_31105,(0),null);
var x2_31107 = cljs.core.nth.call(null,vec__31099_31105,(1),null);
var cell_31108 = snergly.grid.grid_cell.call(null,grid,coord);
draw_fn.call(null,g,cell_31108,cell_size,x1_31104,y1_31103,x2_31107,y2_31106);

var G__31109 = seq__31094;
var G__31110 = chunk__31095;
var G__31111 = count__31096;
var G__31112 = (i__31097 + (1));
seq__31094 = G__31109;
chunk__31095 = G__31110;
count__31096 = G__31111;
i__31097 = G__31112;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31094);
if(temp__4425__auto__){
var seq__31094__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31094__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__31094__$1);
var G__31113 = cljs.core.chunk_rest.call(null,seq__31094__$1);
var G__31114 = c__17574__auto__;
var G__31115 = cljs.core.count.call(null,c__17574__auto__);
var G__31116 = (0);
seq__31094 = G__31113;
chunk__31095 = G__31114;
count__31096 = G__31115;
i__31097 = G__31116;
continue;
} else {
var coord = cljs.core.first.call(null,seq__31094__$1);
var vec__31100_31117 = cljs.core.map.call(null,((function (seq__31094,chunk__31095,count__31096,i__31097,coord,seq__31094__$1,temp__4425__auto__){
return (function (p1__31084_SHARP_){
return (p1__31084_SHARP_ * cell_size);
});})(seq__31094,chunk__31095,count__31096,i__31097,coord,seq__31094__$1,temp__4425__auto__))
,coord);
var y1_31118 = cljs.core.nth.call(null,vec__31100_31117,(0),null);
var x1_31119 = cljs.core.nth.call(null,vec__31100_31117,(1),null);
var vec__31101_31120 = cljs.core.map.call(null,((function (seq__31094,chunk__31095,count__31096,i__31097,vec__31100_31117,y1_31118,x1_31119,coord,seq__31094__$1,temp__4425__auto__){
return (function (p1__31085_SHARP_){
return (p1__31085_SHARP_ + cell_size);
});})(seq__31094,chunk__31095,count__31096,i__31097,vec__31100_31117,y1_31118,x1_31119,coord,seq__31094__$1,temp__4425__auto__))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1_31118,x1_31119], null));
var y2_31121 = cljs.core.nth.call(null,vec__31101_31120,(0),null);
var x2_31122 = cljs.core.nth.call(null,vec__31101_31120,(1),null);
var cell_31123 = snergly.grid.grid_cell.call(null,grid,coord);
draw_fn.call(null,g,cell_31123,cell_size,x1_31119,y1_31118,x2_31122,y2_31121);

var G__31124 = cljs.core.next.call(null,seq__31094__$1);
var G__31125 = null;
var G__31126 = (0);
var G__31127 = (0);
seq__31094 = G__31124;
chunk__31095 = G__31125;
count__31096 = G__31126;
i__31097 = G__31127;
continue;
}
} else {
return null;
}
}
break;
}
});
snergly.image.draw_cell_background = (function snergly$image$draw_cell_background(g,cell,cell_size,x1,y1,_,___$1){
var color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.truth_(color)){
(g["fillStyle"] = color);

return g.fillRect(x1,y1,cell_size,cell_size);
} else {
return null;
}
});
snergly.image.draw_line = (function snergly$image$draw_line(g,x1,y1,x2,y2){
g.beginPath();

g.moveTo(x1,y1);

g.lineTo(x2,y2);

return g.stroke();
});
snergly.image.draw_cell_walls = (function snergly$image$draw_cell_walls(g,cell,_,x1,y1,x2,y2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"north","north",651323902).cljs$core$IFn$_invoke$arity$1(cell))){
} else {
snergly.image.draw_line.call(null,g,x1,y1,x2,y1);
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"west","west",708776677).cljs$core$IFn$_invoke$arity$1(cell))){
} else {
snergly.image.draw_line.call(null,g,x1,y1,x1,y2);
}

if(cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell)))){
} else {
snergly.image.draw_line.call(null,g,x2,y1,x2,y2);
}

if(cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"south","south",1586796293).cljs$core$IFn$_invoke$arity$1(cell)))){
return null;
} else {
return snergly.image.draw_line.call(null,g,x1,y2,x2,y2);
}
});
snergly.image.image_grid = (function snergly$image$image_grid(g,p__31128,cell_size){
var map__31131 = p__31128;
var map__31131__$1 = ((((!((map__31131 == null)))?((((map__31131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31131):map__31131);
var grid = map__31131__$1;
var rows = cljs.core.get.call(null,map__31131__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__31131__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var img_width = ((cell_size * columns) + (1));
var img_height = ((cell_size * rows) + (1));
var background = "#fff";
var wall = "#000";
(g["fillStyle"] = background);

(g["strokeStyle"] = wall);

(g["lineWidth"] = 0.5);

g.fillRect((0),(0),img_width,img_height);

snergly.image.draw_cells.call(null,g,grid,cell_size,snergly.image.draw_cell_background);

return snergly.image.draw_cells.call(null,g,grid,cell_size,snergly.image.draw_cell_walls);
});

//# sourceMappingURL=image.js.map