// Compiled by ClojureScript 1.7.170 {}
goog.provide('snergly.image');
goog.require('cljs.core');
goog.require('snergly.grid');
snergly.image._STAR_optimize_drawing_STAR_ = false;
snergly.image.draw_cells_orig = (function snergly$image$draw_cells_orig(p__24516,cell_size,draw_fn){
var map__24527 = p__24516;
var map__24527__$1 = ((((!((map__24527 == null)))?((((map__24527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24527):map__24527);
var grid = map__24527__$1;
var changed_cells = cljs.core.get.call(null,map__24527__$1,new cljs.core.Keyword(null,"changed-cells","changed-cells",2102894501));
var seq__24529 = cljs.core.seq.call(null,snergly.grid.grid_coords.call(null,grid));
var chunk__24530 = null;
var count__24531 = (0);
var i__24532 = (0);
while(true){
if((i__24532 < count__24531)){
var coord = cljs.core._nth.call(null,chunk__24530,i__24532);
if(cljs.core.truth_((function (){var or__16834__auto__ = snergly.grid.new_QMARK_.call(null,grid);
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
return cljs.core.contains_QMARK_.call(null,changed_cells,coord);
}
})())){
var vec__24533_24537 = cljs.core.map.call(null,((function (seq__24529,chunk__24530,count__24531,i__24532,coord,map__24527,map__24527__$1,grid,changed_cells){
return (function (p1__24514_SHARP_){
return (p1__24514_SHARP_ * cell_size);
});})(seq__24529,chunk__24530,count__24531,i__24532,coord,map__24527,map__24527__$1,grid,changed_cells))
,coord);
var y1_24538 = cljs.core.nth.call(null,vec__24533_24537,(0),null);
var x1_24539 = cljs.core.nth.call(null,vec__24533_24537,(1),null);
var vec__24534_24540 = cljs.core.map.call(null,((function (seq__24529,chunk__24530,count__24531,i__24532,vec__24533_24537,y1_24538,x1_24539,coord,map__24527,map__24527__$1,grid,changed_cells){
return (function (p1__24515_SHARP_){
return (p1__24515_SHARP_ + cell_size);
});})(seq__24529,chunk__24530,count__24531,i__24532,vec__24533_24537,y1_24538,x1_24539,coord,map__24527,map__24527__$1,grid,changed_cells))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1_24538,x1_24539], null));
var y2_24541 = cljs.core.nth.call(null,vec__24534_24540,(0),null);
var x2_24542 = cljs.core.nth.call(null,vec__24534_24540,(1),null);
var cell_24543 = snergly.grid.grid_cell.call(null,grid,coord);
draw_fn.call(null,cell_24543,cell_size,x1_24539,y1_24538,x2_24542,y2_24541);
} else {
}

var G__24544 = seq__24529;
var G__24545 = chunk__24530;
var G__24546 = count__24531;
var G__24547 = (i__24532 + (1));
seq__24529 = G__24544;
chunk__24530 = G__24545;
count__24531 = G__24546;
i__24532 = G__24547;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24529);
if(temp__4425__auto__){
var seq__24529__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24529__$1)){
var c__17637__auto__ = cljs.core.chunk_first.call(null,seq__24529__$1);
var G__24548 = cljs.core.chunk_rest.call(null,seq__24529__$1);
var G__24549 = c__17637__auto__;
var G__24550 = cljs.core.count.call(null,c__17637__auto__);
var G__24551 = (0);
seq__24529 = G__24548;
chunk__24530 = G__24549;
count__24531 = G__24550;
i__24532 = G__24551;
continue;
} else {
var coord = cljs.core.first.call(null,seq__24529__$1);
if(cljs.core.truth_((function (){var or__16834__auto__ = snergly.grid.new_QMARK_.call(null,grid);
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
return cljs.core.contains_QMARK_.call(null,changed_cells,coord);
}
})())){
var vec__24535_24552 = cljs.core.map.call(null,((function (seq__24529,chunk__24530,count__24531,i__24532,coord,seq__24529__$1,temp__4425__auto__,map__24527,map__24527__$1,grid,changed_cells){
return (function (p1__24514_SHARP_){
return (p1__24514_SHARP_ * cell_size);
});})(seq__24529,chunk__24530,count__24531,i__24532,coord,seq__24529__$1,temp__4425__auto__,map__24527,map__24527__$1,grid,changed_cells))
,coord);
var y1_24553 = cljs.core.nth.call(null,vec__24535_24552,(0),null);
var x1_24554 = cljs.core.nth.call(null,vec__24535_24552,(1),null);
var vec__24536_24555 = cljs.core.map.call(null,((function (seq__24529,chunk__24530,count__24531,i__24532,vec__24535_24552,y1_24553,x1_24554,coord,seq__24529__$1,temp__4425__auto__,map__24527,map__24527__$1,grid,changed_cells){
return (function (p1__24515_SHARP_){
return (p1__24515_SHARP_ + cell_size);
});})(seq__24529,chunk__24530,count__24531,i__24532,vec__24535_24552,y1_24553,x1_24554,coord,seq__24529__$1,temp__4425__auto__,map__24527,map__24527__$1,grid,changed_cells))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1_24553,x1_24554], null));
var y2_24556 = cljs.core.nth.call(null,vec__24536_24555,(0),null);
var x2_24557 = cljs.core.nth.call(null,vec__24536_24555,(1),null);
var cell_24558 = snergly.grid.grid_cell.call(null,grid,coord);
draw_fn.call(null,cell_24558,cell_size,x1_24554,y1_24553,x2_24557,y2_24556);
} else {
}

var G__24559 = cljs.core.next.call(null,seq__24529__$1);
var G__24560 = null;
var G__24561 = (0);
var G__24562 = (0);
seq__24529 = G__24559;
chunk__24530 = G__24560;
count__24531 = G__24561;
i__24532 = G__24562;
continue;
}
} else {
return null;
}
}
break;
}
});
snergly.image.draw_cells = (function snergly$image$draw_cells(p__24565,cell_size,draw_fn){
var map__24576 = p__24565;
var map__24576__$1 = ((((!((map__24576 == null)))?((((map__24576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24576):map__24576);
var grid = map__24576__$1;
var changed_cells = cljs.core.get.call(null,map__24576__$1,new cljs.core.Keyword(null,"changed-cells","changed-cells",2102894501));
var seq__24578 = cljs.core.seq.call(null,(cljs.core.truth_(snergly.grid.new_QMARK_.call(null,grid))?snergly.grid.grid_coords.call(null,grid):changed_cells));
var chunk__24579 = null;
var count__24580 = (0);
var i__24581 = (0);
while(true){
if((i__24581 < count__24580)){
var coord = cljs.core._nth.call(null,chunk__24579,i__24581);
var vec__24582_24586 = cljs.core.map.call(null,((function (seq__24578,chunk__24579,count__24580,i__24581,coord,map__24576,map__24576__$1,grid,changed_cells){
return (function (p1__24563_SHARP_){
return (p1__24563_SHARP_ * cell_size);
});})(seq__24578,chunk__24579,count__24580,i__24581,coord,map__24576,map__24576__$1,grid,changed_cells))
,coord);
var y1_24587 = cljs.core.nth.call(null,vec__24582_24586,(0),null);
var x1_24588 = cljs.core.nth.call(null,vec__24582_24586,(1),null);
var vec__24583_24589 = cljs.core.map.call(null,((function (seq__24578,chunk__24579,count__24580,i__24581,vec__24582_24586,y1_24587,x1_24588,coord,map__24576,map__24576__$1,grid,changed_cells){
return (function (p1__24564_SHARP_){
return (p1__24564_SHARP_ + cell_size);
});})(seq__24578,chunk__24579,count__24580,i__24581,vec__24582_24586,y1_24587,x1_24588,coord,map__24576,map__24576__$1,grid,changed_cells))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1_24587,x1_24588], null));
var y2_24590 = cljs.core.nth.call(null,vec__24583_24589,(0),null);
var x2_24591 = cljs.core.nth.call(null,vec__24583_24589,(1),null);
var cell_24592 = snergly.grid.grid_cell.call(null,grid,coord);
draw_fn.call(null,cell_24592,cell_size,x1_24588,y1_24587,x2_24591,y2_24590);

var G__24593 = seq__24578;
var G__24594 = chunk__24579;
var G__24595 = count__24580;
var G__24596 = (i__24581 + (1));
seq__24578 = G__24593;
chunk__24579 = G__24594;
count__24580 = G__24595;
i__24581 = G__24596;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24578);
if(temp__4425__auto__){
var seq__24578__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24578__$1)){
var c__17637__auto__ = cljs.core.chunk_first.call(null,seq__24578__$1);
var G__24597 = cljs.core.chunk_rest.call(null,seq__24578__$1);
var G__24598 = c__17637__auto__;
var G__24599 = cljs.core.count.call(null,c__17637__auto__);
var G__24600 = (0);
seq__24578 = G__24597;
chunk__24579 = G__24598;
count__24580 = G__24599;
i__24581 = G__24600;
continue;
} else {
var coord = cljs.core.first.call(null,seq__24578__$1);
var vec__24584_24601 = cljs.core.map.call(null,((function (seq__24578,chunk__24579,count__24580,i__24581,coord,seq__24578__$1,temp__4425__auto__,map__24576,map__24576__$1,grid,changed_cells){
return (function (p1__24563_SHARP_){
return (p1__24563_SHARP_ * cell_size);
});})(seq__24578,chunk__24579,count__24580,i__24581,coord,seq__24578__$1,temp__4425__auto__,map__24576,map__24576__$1,grid,changed_cells))
,coord);
var y1_24602 = cljs.core.nth.call(null,vec__24584_24601,(0),null);
var x1_24603 = cljs.core.nth.call(null,vec__24584_24601,(1),null);
var vec__24585_24604 = cljs.core.map.call(null,((function (seq__24578,chunk__24579,count__24580,i__24581,vec__24584_24601,y1_24602,x1_24603,coord,seq__24578__$1,temp__4425__auto__,map__24576,map__24576__$1,grid,changed_cells){
return (function (p1__24564_SHARP_){
return (p1__24564_SHARP_ + cell_size);
});})(seq__24578,chunk__24579,count__24580,i__24581,vec__24584_24601,y1_24602,x1_24603,coord,seq__24578__$1,temp__4425__auto__,map__24576,map__24576__$1,grid,changed_cells))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1_24602,x1_24603], null));
var y2_24605 = cljs.core.nth.call(null,vec__24585_24604,(0),null);
var x2_24606 = cljs.core.nth.call(null,vec__24585_24604,(1),null);
var cell_24607 = snergly.grid.grid_cell.call(null,grid,coord);
draw_fn.call(null,cell_24607,cell_size,x1_24603,y1_24602,x2_24606,y2_24605);

var G__24608 = cljs.core.next.call(null,seq__24578__$1);
var G__24609 = null;
var G__24610 = (0);
var G__24611 = (0);
seq__24578 = G__24608;
chunk__24579 = G__24609;
count__24580 = G__24610;
i__24581 = G__24611;
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
snergly.image.draw_cell_walls = (function snergly$image$draw_cell_walls(g,background,wall,cell,_,x1,y1,x2,y2){
(g["strokeStyle"] = wall);

if(cljs.core.truth_(new cljs.core.Keyword(null,"north","north",651323902).cljs$core$IFn$_invoke$arity$1(cell))){
} else {
snergly.image.draw_line.call(null,g,x1,y1,x2,y1);
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"west","west",708776677).cljs$core$IFn$_invoke$arity$1(cell))){
} else {
snergly.image.draw_line.call(null,g,x1,y1,x1,y2);
}

(g["strokeStyle"] = (cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell)))?background:wall));

snergly.image.draw_line.call(null,g,x2,y1,x2,y2);

(g["strokeStyle"] = (cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"south","south",1586796293).cljs$core$IFn$_invoke$arity$1(cell)))?background:wall));

return snergly.image.draw_line.call(null,g,x1,y2,x2,y2);
});
snergly.image.image_grid = (function snergly$image$image_grid(g,p__24612,cell_size){
var map__24615 = p__24612;
var map__24615__$1 = ((((!((map__24615 == null)))?((((map__24615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24615):map__24615);
var grid = map__24615__$1;
var rows = cljs.core.get.call(null,map__24615__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__24615__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var img_width = ((cell_size * columns) + (1));
var img_height = ((cell_size * rows) + (1));
var background = "rgba(255, 255, 255, 1)";
var wall = "rgba(0, 0, 0, 1)";
var grid__$1 = (cljs.core.truth_(snergly.image._STAR_optimize_drawing_STAR_)?grid:cljs.core.assoc.call(null,grid,new cljs.core.Keyword(null,"changed-cells","changed-cells",2102894501),null));
(g["imageSmoothingEnabled"] = false);

(g["fillStyle"] = background);

(g["lineWidth"] = 0.5);

if(cljs.core.truth_(snergly.grid.new_QMARK_.call(null,grid__$1))){
g.fillRect((0),(0),img_width,img_height);
} else {
}

snergly.image.draw_cells.call(null,grid__$1,cell_size,cljs.core.partial.call(null,snergly.image.draw_cell_background,g));

return snergly.image.draw_cells.call(null,grid__$1,cell_size,cljs.core.partial.call(null,snergly.image.draw_cell_walls,g,background,wall));
});

//# sourceMappingURL=image.js.map