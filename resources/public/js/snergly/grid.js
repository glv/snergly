// Compiled by ClojureScript 1.7.170 {}
goog.provide('snergly.grid');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('snergly.util');
/**
 * Schema for cell coordinates and sizes
 */
snergly.grid.NonNegativeInt = schema.core.constrained.call(null,schema.core.Int,cljs.core.comp.call(null,cljs.core.not,cljs.core.neg_QMARK_),"non-negative integer");
/**
 * Schema for cell [row col] coordinates
 */
snergly.grid.CellPosition = schema.core.pair.call(null,snergly.grid.NonNegativeInt,"row",snergly.grid.NonNegativeInt,"column");
/**
 * Schema for maze cells
 */
snergly.grid.Cell = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"Cell","Cell",53644787)),new cljs.core.Keyword(null,"coord","coord",-1453656639),snergly.grid.CellPosition,new cljs.core.Keyword(null,"north","north",651323902),schema.core.maybe.call(null,snergly.grid.CellPosition),new cljs.core.Keyword(null,"south","south",1586796293),schema.core.maybe.call(null,snergly.grid.CellPosition),new cljs.core.Keyword(null,"east","east",1189821678),schema.core.maybe.call(null,snergly.grid.CellPosition),new cljs.core.Keyword(null,"west","west",708776677),schema.core.maybe.call(null,snergly.grid.CellPosition),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.PersistentHashSet.fromArray([snergly.grid.CellPosition], true),schema.core.Keyword,schema.core.Any], true, false);
/**
 * Schema for maze grid
 */
snergly.grid.Grid = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"Grid","Grid",2061196277)),new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),schema.core.Str,new cljs.core.Keyword(null,"rows","rows",850049680),snergly.grid.NonNegativeInt,new cljs.core.Keyword(null,"columns","columns",1998437288),snergly.grid.NonNegativeInt,new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.Cell], null)], null);
/**
 * Schema for a distance map
 */
snergly.grid.Distances = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"origin","origin",1037372088),snergly.grid.CellPosition,new cljs.core.Keyword(null,"max-coord","max-coord",-881869431),snergly.grid.CellPosition,new cljs.core.Keyword(null,"max","max",61366548),snergly.grid.NonNegativeInt,snergly.grid.CellPosition,snergly.grid.NonNegativeInt], true, false);
var ufv___30392 = schema.utils.use_fn_validation;
var output_schema30384_30393 = snergly.grid.Cell;
var input_schema30385_30394 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"columns","columns",-655998481,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker30386_30395 = schema.core.checker.call(null,input_schema30385_30394);
var output_checker30387_30396 = schema.core.checker.call(null,output_schema30384_30393);
var ret__20514__auto___30397 = /**
 * Inputs: [row column rows columns]
 *   Returns: Cell
 */
snergly.grid.make_cell = ((function (ufv___30392,output_schema30384_30393,input_schema30385_30394,input_checker30386_30395,output_checker30387_30396){
return (function snergly$grid$make_cell(G__30388,G__30389,G__30390,G__30391){
var validate__19070__auto__ = ufv___30392.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30398 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30388,G__30389,G__30390,G__30391], null);
var temp__4425__auto___30399 = input_checker30386_30395.call(null,args__19071__auto___30398);
if(cljs.core.truth_(temp__4425__auto___30399)){
var error__19072__auto___30400 = temp__4425__auto___30399;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"make-cell","make-cell",983664608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30400)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30385_30394,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30398,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30400], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var row = G__30388;
var column = G__30389;
var rows = G__30390;
var columns = G__30391;
while(true){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Cell","Cell",53644787),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null),new cljs.core.Keyword(null,"north","north",651323902),(((row > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row - (1)),column], null):null),new cljs.core.Keyword(null,"south","south",1586796293),(((row < (rows - (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row + (1)),column], null):null),new cljs.core.Keyword(null,"east","east",1189821678),(((column < (columns - (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(column + (1))], null):null),new cljs.core.Keyword(null,"west","west",708776677),(((column > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(column - (1))], null):null),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.PersistentHashSet.EMPTY], null);
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30401 = output_checker30387_30396.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30401)){
var error__19072__auto___30402 = temp__4425__auto___30401;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"make-cell","make-cell",983664608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30402)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30384_30393,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30402], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30392,output_schema30384_30393,input_schema30385_30394,input_checker30386_30395,output_checker30387_30396))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.make_cell),schema.core.make_fn_schema.call(null,output_schema30384_30393,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30385_30394], null)));

var ufv___30416 = schema.utils.use_fn_validation;
var output_schema30403_30417 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.CellPosition], null);
var input_schema30404_30418 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema30408_30419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Cell,cljs.core.with_meta(new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.enum$.call(null,new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"west","west",708776677))], null),cljs.core.with_meta(new cljs.core.Symbol(null,"directions","directions",529983761,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","enum","s/enum",-975416934,null),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"west","west",708776677))], null)], null)))], null);
var input_checker30405_30420 = schema.core.checker.call(null,input_schema30404_30418);
var output_checker30406_30421 = schema.core.checker.call(null,output_schema30403_30417);
var input_checker30409_30422 = schema.core.checker.call(null,input_schema30408_30419);
var output_checker30410_30423 = schema.core.checker.call(null,output_schema30403_30417);
var ret__20514__auto___30424 = (function (){
/**
 * Inputs: ([cell] [cell :- Cell directions :- [(s/enum :north :south :east :west)]])
 *   Returns: [CellPosition]
 */
snergly.grid.cell_neighbors = ((function (ufv___30416,output_schema30403_30417,input_schema30404_30418,input_schema30408_30419,input_checker30405_30420,output_checker30406_30421,input_checker30409_30422,output_checker30410_30423){
return (function snergly$grid$cell_neighbors(var_args){
var args30413 = [];
var len__17829__auto___30425 = arguments.length;
var i__17830__auto___30426 = (0);
while(true){
if((i__17830__auto___30426 < len__17829__auto___30425)){
args30413.push((arguments[i__17830__auto___30426]));

var G__30427 = (i__17830__auto___30426 + (1));
i__17830__auto___30426 = G__30427;
continue;
} else {
}
break;
}

var G__30415 = args30413.length;
switch (G__30415) {
case 1:
return snergly.grid.cell_neighbors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return snergly.grid.cell_neighbors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30413.length)].join('')));

}
});})(ufv___30416,output_schema30403_30417,input_schema30404_30418,input_schema30408_30419,input_checker30405_30420,output_checker30406_30421,input_checker30409_30422,output_checker30410_30423))
;

snergly.grid.cell_neighbors.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___30416,output_schema30403_30417,input_schema30404_30418,input_schema30408_30419,input_checker30405_30420,output_checker30406_30421,input_checker30409_30422,output_checker30410_30423){
return (function (G__30407){
var validate__19070__auto__ = ufv___30416.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30429 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30407], null);
var temp__4425__auto___30430 = input_checker30405_30420.call(null,args__19071__auto___30429);
if(cljs.core.truth_(temp__4425__auto___30430)){
var error__19072__auto___30431 = temp__4425__auto___30430;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-neighbors","cell-neighbors",1931156445,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30431)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30404_30418,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30429,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30431], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var cell = G__30407;
while(true){
return snergly.grid.cell_neighbors.call(null,cell,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"west","west",708776677)], null));
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30432 = output_checker30406_30421.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30432)){
var error__19072__auto___30433 = temp__4425__auto___30432;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-neighbors","cell-neighbors",1931156445,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30433)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30403_30417,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30433], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30416,output_schema30403_30417,input_schema30404_30418,input_schema30408_30419,input_checker30405_30420,output_checker30406_30421,input_checker30409_30422,output_checker30410_30423))
;

snergly.grid.cell_neighbors.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___30416,output_schema30403_30417,input_schema30404_30418,input_schema30408_30419,input_checker30405_30420,output_checker30406_30421,input_checker30409_30422,output_checker30410_30423){
return (function (G__30411,G__30412){
var validate__19070__auto__ = ufv___30416.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30411,G__30412], null);
var temp__4425__auto___30435 = input_checker30409_30422.call(null,args__19071__auto___30434);
if(cljs.core.truth_(temp__4425__auto___30435)){
var error__19072__auto___30436 = temp__4425__auto___30435;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-neighbors","cell-neighbors",1931156445,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30436)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30408_30419,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30434,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30436], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var cell = G__30411;
var directions = G__30412;
while(true){
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cell,directions));
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30437 = output_checker30410_30423.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30437)){
var error__19072__auto___30438 = temp__4425__auto___30437;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-neighbors","cell-neighbors",1931156445,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30438)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30403_30417,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30438], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30416,output_schema30403_30417,input_schema30404_30418,input_schema30408_30419,input_checker30405_30420,output_checker30406_30421,input_checker30409_30422,output_checker30410_30423))
;

return snergly.grid.cell_neighbors.cljs$lang$maxFixedArity = 2;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.cell_neighbors),schema.core.make_fn_schema.call(null,output_schema30403_30417,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30404_30418,input_schema30408_30419], null)));

var ufv___30457 = schema.utils.use_fn_validation;
var output_schema30439_30458 = snergly.grid.Grid;
var input_schema30440_30459 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"columns","columns",-655998481,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker30441_30460 = schema.core.checker.call(null,input_schema30440_30459);
var output_checker30442_30461 = schema.core.checker.call(null,output_schema30439_30458);
var ret__20514__auto___30462 = /**
 * Inputs: [rows columns]
 *   Returns: Grid
 * 
 *   Creates and returns a new grid with the specified row and column sizes.
 */
snergly.grid.make_grid = ((function (ufv___30457,output_schema30439_30458,input_schema30440_30459,input_checker30441_30460,output_checker30442_30461){
return (function snergly$grid$make_grid(G__30443,G__30444){
var validate__19070__auto__ = ufv___30457.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30443,G__30444], null);
var temp__4425__auto___30464 = input_checker30441_30460.call(null,args__19071__auto___30463);
if(cljs.core.truth_(temp__4425__auto___30464)){
var error__19072__auto___30465 = temp__4425__auto___30464;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"make-grid","make-grid",1951018931,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a new grid with the specified row and column sizes."], null)),cljs.core.pr_str.call(null,error__19072__auto___30465)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30440_30459,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30463,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30465], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var rows = G__30443;
var columns = G__30444;
while(true){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Grid","Grid",2061196277),new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"none",new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__17543__auto__ = ((function (validate__19070__auto__,ufv___30457,output_schema30439_30458,input_schema30440_30459,input_checker30441_30460,output_checker30442_30461){
return (function snergly$grid$make_grid_$_iter__30451(s__30452){
return (new cljs.core.LazySeq(null,((function (validate__19070__auto__,ufv___30457,output_schema30439_30458,input_schema30440_30459,input_checker30441_30460,output_checker30442_30461){
return (function (){
var s__30452__$1 = s__30452;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30452__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var row = cljs.core.first.call(null,xs__4977__auto__);
var iterys__17539__auto__ = ((function (s__30452__$1,row,xs__4977__auto__,temp__4425__auto__,validate__19070__auto__,ufv___30457,output_schema30439_30458,input_schema30440_30459,input_checker30441_30460,output_checker30442_30461){
return (function snergly$grid$make_grid_$_iter__30451_$_iter__30453(s__30454){
return (new cljs.core.LazySeq(null,((function (s__30452__$1,row,xs__4977__auto__,temp__4425__auto__,validate__19070__auto__,ufv___30457,output_schema30439_30458,input_schema30440_30459,input_checker30441_30460,output_checker30442_30461){
return (function (){
var s__30454__$1 = s__30454;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__30454__$1);
if(temp__4425__auto____$1){
var s__30454__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30454__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__30454__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__30456 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__30455 = (0);
while(true){
if((i__30455 < size__17542__auto__)){
var column = cljs.core._nth.call(null,c__17541__auto__,i__30455);
cljs.core.chunk_append.call(null,b__30456,snergly.grid.make_cell.call(null,row,column,rows,columns));

var G__30466 = (i__30455 + (1));
i__30455 = G__30466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30456),snergly$grid$make_grid_$_iter__30451_$_iter__30453.call(null,cljs.core.chunk_rest.call(null,s__30454__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30456),null);
}
} else {
var column = cljs.core.first.call(null,s__30454__$2);
return cljs.core.cons.call(null,snergly.grid.make_cell.call(null,row,column,rows,columns),snergly$grid$make_grid_$_iter__30451_$_iter__30453.call(null,cljs.core.rest.call(null,s__30454__$2)));
}
} else {
return null;
}
break;
}
});})(s__30452__$1,row,xs__4977__auto__,temp__4425__auto__,validate__19070__auto__,ufv___30457,output_schema30439_30458,input_schema30440_30459,input_checker30441_30460,output_checker30442_30461))
,null,null));
});})(s__30452__$1,row,xs__4977__auto__,temp__4425__auto__,validate__19070__auto__,ufv___30457,output_schema30439_30458,input_schema30440_30459,input_checker30441_30460,output_checker30442_30461))
;
var fs__17540__auto__ = cljs.core.seq.call(null,iterys__17539__auto__.call(null,cljs.core.range.call(null,columns)));
if(fs__17540__auto__){
return cljs.core.concat.call(null,fs__17540__auto__,snergly$grid$make_grid_$_iter__30451.call(null,cljs.core.rest.call(null,s__30452__$1)));
} else {
var G__30467 = cljs.core.rest.call(null,s__30452__$1);
s__30452__$1 = G__30467;
continue;
}
} else {
return null;
}
break;
}
});})(validate__19070__auto__,ufv___30457,output_schema30439_30458,input_schema30440_30459,input_checker30441_30460,output_checker30442_30461))
,null,null));
});})(validate__19070__auto__,ufv___30457,output_schema30439_30458,input_schema30440_30459,input_checker30441_30460,output_checker30442_30461))
;
return iter__17543__auto__.call(null,cljs.core.range.call(null,rows));
})())], null);
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30468 = output_checker30442_30461.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30468)){
var error__19072__auto___30469 = temp__4425__auto___30468;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"make-grid","make-grid",1951018931,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a new grid with the specified row and column sizes."], null)),cljs.core.pr_str.call(null,error__19072__auto___30469)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30439_30458,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30469], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30457,output_schema30439_30458,input_schema30440_30459,input_checker30441_30460,output_checker30442_30461))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.make_grid),schema.core.make_fn_schema.call(null,output_schema30439_30458,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30440_30459], null)));

var ufv___30489 = schema.utils.use_fn_validation;
var output_schema30470_30490 = snergly.grid.NonNegativeInt;
var input_schema30471_30491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_schema30476_30492 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker30472_30493 = schema.core.checker.call(null,input_schema30471_30491);
var output_checker30473_30494 = schema.core.checker.call(null,output_schema30470_30490);
var input_checker30477_30495 = schema.core.checker.call(null,input_schema30476_30492);
var output_checker30478_30496 = schema.core.checker.call(null,output_schema30470_30490);
var ret__20514__auto___30497 = (function (){
/**
 * Inputs: ([grid [row column]] [grid row column])
 *   Returns: NonNegativeInt
 */
snergly.grid.cell_index = ((function (ufv___30489,output_schema30470_30490,input_schema30471_30491,input_schema30476_30492,input_checker30472_30493,output_checker30473_30494,input_checker30477_30495,output_checker30478_30496){
return (function snergly$grid$cell_index(var_args){
var args30482 = [];
var len__17829__auto___30498 = arguments.length;
var i__17830__auto___30499 = (0);
while(true){
if((i__17830__auto___30499 < len__17829__auto___30498)){
args30482.push((arguments[i__17830__auto___30499]));

var G__30500 = (i__17830__auto___30499 + (1));
i__17830__auto___30499 = G__30500;
continue;
} else {
}
break;
}

var G__30484 = args30482.length;
switch (G__30484) {
case 2:
return snergly.grid.cell_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return snergly.grid.cell_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30482.length)].join('')));

}
});})(ufv___30489,output_schema30470_30490,input_schema30471_30491,input_schema30476_30492,input_checker30472_30493,output_checker30473_30494,input_checker30477_30495,output_checker30478_30496))
;

snergly.grid.cell_index.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___30489,output_schema30470_30490,input_schema30471_30491,input_schema30476_30492,input_checker30472_30493,output_checker30473_30494,input_checker30477_30495,output_checker30478_30496){
return (function (G__30474,G__30475){
var validate__19070__auto__ = ufv___30489.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30474,G__30475], null);
var temp__4425__auto___30503 = input_checker30472_30493.call(null,args__19071__auto___30502);
if(cljs.core.truth_(temp__4425__auto___30503)){
var error__19072__auto___30504 = temp__4425__auto___30503;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-index","cell-index",-1150930793,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30504)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30471_30491,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30502,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30504], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var grid = G__30474;
var G__30486 = G__30475;
var vec__30487 = G__30486;
var row = cljs.core.nth.call(null,vec__30487,(0),null);
var column = cljs.core.nth.call(null,vec__30487,(1),null);
var grid__$1 = grid;
var G__30486__$1 = G__30486;
while(true){
var grid__$2 = grid__$1;
var vec__30488 = G__30486__$1;
var row__$1 = cljs.core.nth.call(null,vec__30488,(0),null);
var column__$1 = cljs.core.nth.call(null,vec__30488,(1),null);
return snergly.grid.cell_index.call(null,grid__$2,row__$1,column__$1);
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30505 = output_checker30473_30494.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30505)){
var error__19072__auto___30506 = temp__4425__auto___30505;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-index","cell-index",-1150930793,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30506)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30470_30490,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30506], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30489,output_schema30470_30490,input_schema30471_30491,input_schema30476_30492,input_checker30472_30493,output_checker30473_30494,input_checker30477_30495,output_checker30478_30496))
;

snergly.grid.cell_index.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___30489,output_schema30470_30490,input_schema30471_30491,input_schema30476_30492,input_checker30472_30493,output_checker30473_30494,input_checker30477_30495,output_checker30478_30496){
return (function (G__30479,G__30480,G__30481){
var validate__19070__auto__ = ufv___30489.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30507 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30479,G__30480,G__30481], null);
var temp__4425__auto___30508 = input_checker30477_30495.call(null,args__19071__auto___30507);
if(cljs.core.truth_(temp__4425__auto___30508)){
var error__19072__auto___30509 = temp__4425__auto___30508;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-index","cell-index",-1150930793,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30509)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30476_30492,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30507,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30509], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var grid = G__30479;
var row = G__30480;
var column = G__30481;
while(true){
return ((row * new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(grid)) + column);
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30510 = output_checker30478_30496.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30510)){
var error__19072__auto___30511 = temp__4425__auto___30510;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-index","cell-index",-1150930793,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30511)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30470_30490,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30511], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30489,output_schema30470_30490,input_schema30471_30491,input_schema30476_30492,input_checker30472_30493,output_checker30473_30494,input_checker30477_30495,output_checker30478_30496))
;

return snergly.grid.cell_index.cljs$lang$maxFixedArity = 3;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.cell_index),schema.core.make_fn_schema.call(null,output_schema30470_30490,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30471_30491,input_schema30476_30492], null)));

var ufv___30531 = schema.utils.use_fn_validation;
var output_schema30512_30532 = snergly.grid.Cell;
var input_schema30513_30533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_schema30518_30534 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker30514_30535 = schema.core.checker.call(null,input_schema30513_30533);
var output_checker30515_30536 = schema.core.checker.call(null,output_schema30512_30532);
var input_checker30519_30537 = schema.core.checker.call(null,input_schema30518_30534);
var output_checker30520_30538 = schema.core.checker.call(null,output_schema30512_30532);
var ret__20514__auto___30539 = (function (){
/**
 * Inputs: ([grid [row column]] [grid row column])
 *   Returns: Cell
 */
snergly.grid.grid_cell = ((function (ufv___30531,output_schema30512_30532,input_schema30513_30533,input_schema30518_30534,input_checker30514_30535,output_checker30515_30536,input_checker30519_30537,output_checker30520_30538){
return (function snergly$grid$grid_cell(var_args){
var args30524 = [];
var len__17829__auto___30540 = arguments.length;
var i__17830__auto___30541 = (0);
while(true){
if((i__17830__auto___30541 < len__17829__auto___30540)){
args30524.push((arguments[i__17830__auto___30541]));

var G__30542 = (i__17830__auto___30541 + (1));
i__17830__auto___30541 = G__30542;
continue;
} else {
}
break;
}

var G__30526 = args30524.length;
switch (G__30526) {
case 2:
return snergly.grid.grid_cell.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return snergly.grid.grid_cell.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30524.length)].join('')));

}
});})(ufv___30531,output_schema30512_30532,input_schema30513_30533,input_schema30518_30534,input_checker30514_30535,output_checker30515_30536,input_checker30519_30537,output_checker30520_30538))
;

snergly.grid.grid_cell.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___30531,output_schema30512_30532,input_schema30513_30533,input_schema30518_30534,input_checker30514_30535,output_checker30515_30536,input_checker30519_30537,output_checker30520_30538){
return (function (G__30516,G__30517){
var validate__19070__auto__ = ufv___30531.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30544 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30516,G__30517], null);
var temp__4425__auto___30545 = input_checker30514_30535.call(null,args__19071__auto___30544);
if(cljs.core.truth_(temp__4425__auto___30545)){
var error__19072__auto___30546 = temp__4425__auto___30545;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-cell","grid-cell",-1304305086,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30546)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30513_30533,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30544,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30546], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var grid = G__30516;
var G__30528 = G__30517;
var vec__30529 = G__30528;
var row = cljs.core.nth.call(null,vec__30529,(0),null);
var column = cljs.core.nth.call(null,vec__30529,(1),null);
var grid__$1 = grid;
var G__30528__$1 = G__30528;
while(true){
var grid__$2 = grid__$1;
var vec__30530 = G__30528__$1;
var row__$1 = cljs.core.nth.call(null,vec__30530,(0),null);
var column__$1 = cljs.core.nth.call(null,vec__30530,(1),null);
return snergly.grid.grid_cell.call(null,grid__$2,row__$1,column__$1);
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30547 = output_checker30515_30536.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30547)){
var error__19072__auto___30548 = temp__4425__auto___30547;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-cell","grid-cell",-1304305086,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30548)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30512_30532,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30548], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30531,output_schema30512_30532,input_schema30513_30533,input_schema30518_30534,input_checker30514_30535,output_checker30515_30536,input_checker30519_30537,output_checker30520_30538))
;

snergly.grid.grid_cell.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___30531,output_schema30512_30532,input_schema30513_30533,input_schema30518_30534,input_checker30514_30535,output_checker30515_30536,input_checker30519_30537,output_checker30520_30538){
return (function (G__30521,G__30522,G__30523){
var validate__19070__auto__ = ufv___30531.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30549 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30521,G__30522,G__30523], null);
var temp__4425__auto___30550 = input_checker30519_30537.call(null,args__19071__auto___30549);
if(cljs.core.truth_(temp__4425__auto___30550)){
var error__19072__auto___30551 = temp__4425__auto___30550;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-cell","grid-cell",-1304305086,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30551)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30518_30534,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30549,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30551], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var grid = G__30521;
var row = G__30522;
var column = G__30523;
while(true){
return new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(grid).call(null,snergly.grid.cell_index.call(null,grid,row,column));
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30552 = output_checker30520_30538.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30552)){
var error__19072__auto___30553 = temp__4425__auto___30552;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-cell","grid-cell",-1304305086,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30553)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30512_30532,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30553], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30531,output_schema30512_30532,input_schema30513_30533,input_schema30518_30534,input_checker30514_30535,output_checker30515_30536,input_checker30519_30537,output_checker30520_30538))
;

return snergly.grid.grid_cell.cljs$lang$maxFixedArity = 3;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_cell),schema.core.make_fn_schema.call(null,output_schema30512_30532,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30513_30533,input_schema30518_30534], null)));

var ufv___30571 = schema.utils.use_fn_validation;
var output_schema30554_30572 = snergly.grid.CellPosition;
var input_schema30555_30573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker30556_30574 = schema.core.checker.call(null,input_schema30555_30573);
var output_checker30557_30575 = schema.core.checker.call(null,output_schema30554_30572);
var ret__20514__auto___30576 = /**
 * Inputs: [{:keys [rows columns], :as grid}]
 *   Returns: CellPosition
 */
snergly.grid.random_coord = ((function (ufv___30571,output_schema30554_30572,input_schema30555_30573,input_checker30556_30574,output_checker30557_30575){
return (function snergly$grid$random_coord(G__30558){
var validate__19070__auto__ = ufv___30571.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30577 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30558], null);
var temp__4425__auto___30578 = input_checker30556_30574.call(null,args__19071__auto___30577);
if(cljs.core.truth_(temp__4425__auto___30578)){
var error__19072__auto___30579 = temp__4425__auto___30578;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"random-coord","random-coord",-980419436,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30579)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30555_30573,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30577,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30579], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var G__30566 = G__30558;
var map__30567 = G__30566;
var map__30567__$1 = ((((!((map__30567 == null)))?((((map__30567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30567):map__30567);
var grid = map__30567__$1;
var rows = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__30567__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var G__30566__$1 = G__30566;
while(true){
var map__30569 = G__30566__$1;
var map__30569__$1 = ((((!((map__30569 == null)))?((((map__30569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30569):map__30569);
var grid__$1 = map__30569__$1;
var rows__$1 = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns__$1 = cljs.core.get.call(null,map__30569__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var row = cljs.core.rand_int.call(null,rows__$1);
var column = cljs.core.rand_int.call(null,columns__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null);
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30580 = output_checker30557_30575.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30580)){
var error__19072__auto___30581 = temp__4425__auto___30580;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"random-coord","random-coord",-980419436,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30581)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30554_30572,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30581], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30571,output_schema30554_30572,input_schema30555_30573,input_checker30556_30574,output_checker30557_30575))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.random_coord),schema.core.make_fn_schema.call(null,output_schema30554_30572,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30555_30573], null)));

var ufv___30599 = schema.utils.use_fn_validation;
var output_schema30582_30600 = snergly.grid.NonNegativeInt;
var input_schema30583_30601 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker30584_30602 = schema.core.checker.call(null,input_schema30583_30601);
var output_checker30585_30603 = schema.core.checker.call(null,output_schema30582_30600);
var ret__20514__auto___30604 = /**
 * Inputs: [{:keys [rows columns]}]
 *   Returns: NonNegativeInt
 */
snergly.grid.grid_size = ((function (ufv___30599,output_schema30582_30600,input_schema30583_30601,input_checker30584_30602,output_checker30585_30603){
return (function snergly$grid$grid_size(G__30586){
var validate__19070__auto__ = ufv___30599.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30605 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30586], null);
var temp__4425__auto___30606 = input_checker30584_30602.call(null,args__19071__auto___30605);
if(cljs.core.truth_(temp__4425__auto___30606)){
var error__19072__auto___30607 = temp__4425__auto___30606;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-size","grid-size",-515955625,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30607)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30583_30601,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30605,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30607], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var G__30594 = G__30586;
var map__30595 = G__30594;
var map__30595__$1 = ((((!((map__30595 == null)))?((((map__30595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30595):map__30595);
var rows = cljs.core.get.call(null,map__30595__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__30595__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var G__30594__$1 = G__30594;
while(true){
var map__30597 = G__30594__$1;
var map__30597__$1 = ((((!((map__30597 == null)))?((((map__30597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30597):map__30597);
var rows__$1 = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns__$1 = cljs.core.get.call(null,map__30597__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
return (rows__$1 * columns__$1);
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30608 = output_checker30585_30603.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30608)){
var error__19072__auto___30609 = temp__4425__auto___30608;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-size","grid-size",-515955625,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30609)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30582_30600,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30609], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30599,output_schema30582_30600,input_schema30583_30601,input_checker30584_30602,output_checker30585_30603))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_size),schema.core.make_fn_schema.call(null,output_schema30582_30600,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30583_30601], null)));

var ufv___30667 = schema.utils.use_fn_validation;
var output_schema30610_30668 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.CellPosition], null)], null);
var input_schema30611_30669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker30612_30670 = schema.core.checker.call(null,input_schema30611_30669);
var output_checker30613_30671 = schema.core.checker.call(null,output_schema30610_30668);
var ret__20514__auto___30672 = /**
 * Inputs: [{:keys [rows columns]}]
 *   Returns: [[CellPosition]]
 */
snergly.grid.grid_row_coords = ((function (ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671){
return (function snergly$grid$grid_row_coords(G__30614){
var validate__19070__auto__ = ufv___30667.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30673 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30614], null);
var temp__4425__auto___30674 = input_checker30612_30670.call(null,args__19071__auto___30673);
if(cljs.core.truth_(temp__4425__auto___30674)){
var error__19072__auto___30675 = temp__4425__auto___30674;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-row-coords","grid-row-coords",-1454155162,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30675)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30611_30669,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30673,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30675], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var G__30642 = G__30614;
var map__30643 = G__30642;
var map__30643__$1 = ((((!((map__30643 == null)))?((((map__30643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30643):map__30643);
var rows = cljs.core.get.call(null,map__30643__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__30643__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var G__30642__$1 = G__30642;
while(true){
var map__30645 = G__30642__$1;
var map__30645__$1 = ((((!((map__30645 == null)))?((((map__30645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30645):map__30645);
var rows__$1 = cljs.core.get.call(null,map__30645__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns__$1 = cljs.core.get.call(null,map__30645__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));

var iter__17543__auto__ = ((function (map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671){
return (function snergly$grid$grid_row_coords_$_iter__30647(s__30648){
return (new cljs.core.LazySeq(null,((function (map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671){
return (function (){
var s__30648__$1 = s__30648;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30648__$1);
if(temp__4425__auto__){
var s__30648__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30648__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__30648__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__30650 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__30649 = (0);
while(true){
if((i__30649 < size__17542__auto__)){
var row = cljs.core._nth.call(null,c__17541__auto__,i__30649);
cljs.core.chunk_append.call(null,b__30650,(function (){var iter__17543__auto__ = ((function (i__30649,row,c__17541__auto__,size__17542__auto__,b__30650,s__30648__$2,temp__4425__auto__,map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671){
return (function snergly$grid$grid_row_coords_$_iter__30647_$_iter__30659(s__30660){
return (new cljs.core.LazySeq(null,((function (i__30649,row,c__17541__auto__,size__17542__auto__,b__30650,s__30648__$2,temp__4425__auto__,map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671){
return (function (){
var s__30660__$1 = s__30660;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__30660__$1);
if(temp__4425__auto____$1){
var s__30660__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30660__$2)){
var c__17541__auto____$1 = cljs.core.chunk_first.call(null,s__30660__$2);
var size__17542__auto____$1 = cljs.core.count.call(null,c__17541__auto____$1);
var b__30662 = cljs.core.chunk_buffer.call(null,size__17542__auto____$1);
if((function (){var i__30661 = (0);
while(true){
if((i__30661 < size__17542__auto____$1)){
var column = cljs.core._nth.call(null,c__17541__auto____$1,i__30661);
cljs.core.chunk_append.call(null,b__30662,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null));

var G__30676 = (i__30661 + (1));
i__30661 = G__30676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30662),snergly$grid$grid_row_coords_$_iter__30647_$_iter__30659.call(null,cljs.core.chunk_rest.call(null,s__30660__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30662),null);
}
} else {
var column = cljs.core.first.call(null,s__30660__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null),snergly$grid$grid_row_coords_$_iter__30647_$_iter__30659.call(null,cljs.core.rest.call(null,s__30660__$2)));
}
} else {
return null;
}
break;
}
});})(i__30649,row,c__17541__auto__,size__17542__auto__,b__30650,s__30648__$2,temp__4425__auto__,map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671))
,null,null));
});})(i__30649,row,c__17541__auto__,size__17542__auto__,b__30650,s__30648__$2,temp__4425__auto__,map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671))
;
return iter__17543__auto__.call(null,cljs.core.range.call(null,columns__$1));
})());

var G__30677 = (i__30649 + (1));
i__30649 = G__30677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30650),snergly$grid$grid_row_coords_$_iter__30647.call(null,cljs.core.chunk_rest.call(null,s__30648__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30650),null);
}
} else {
var row = cljs.core.first.call(null,s__30648__$2);
return cljs.core.cons.call(null,(function (){var iter__17543__auto__ = ((function (row,s__30648__$2,temp__4425__auto__,map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671){
return (function snergly$grid$grid_row_coords_$_iter__30647_$_iter__30663(s__30664){
return (new cljs.core.LazySeq(null,((function (row,s__30648__$2,temp__4425__auto__,map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671){
return (function (){
var s__30664__$1 = s__30664;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__30664__$1);
if(temp__4425__auto____$1){
var s__30664__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30664__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__30664__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__30666 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__30665 = (0);
while(true){
if((i__30665 < size__17542__auto__)){
var column = cljs.core._nth.call(null,c__17541__auto__,i__30665);
cljs.core.chunk_append.call(null,b__30666,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null));

var G__30678 = (i__30665 + (1));
i__30665 = G__30678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30666),snergly$grid$grid_row_coords_$_iter__30647_$_iter__30663.call(null,cljs.core.chunk_rest.call(null,s__30664__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30666),null);
}
} else {
var column = cljs.core.first.call(null,s__30664__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null),snergly$grid$grid_row_coords_$_iter__30647_$_iter__30663.call(null,cljs.core.rest.call(null,s__30664__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__30648__$2,temp__4425__auto__,map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671))
,null,null));
});})(row,s__30648__$2,temp__4425__auto__,map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671))
;
return iter__17543__auto__.call(null,cljs.core.range.call(null,columns__$1));
})(),snergly$grid$grid_row_coords_$_iter__30647.call(null,cljs.core.rest.call(null,s__30648__$2)));
}
} else {
return null;
}
break;
}
});})(map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671))
,null,null));
});})(map__30645,map__30645__$1,rows__$1,columns__$1,G__30642,map__30643,map__30643__$1,rows,columns,validate__19070__auto__,ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671))
;
return iter__17543__auto__.call(null,cljs.core.range.call(null,rows__$1));
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30679 = output_checker30613_30671.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30679)){
var error__19072__auto___30680 = temp__4425__auto___30679;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-row-coords","grid-row-coords",-1454155162,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30680)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30610_30668,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30680], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30667,output_schema30610_30668,input_schema30611_30669,input_checker30612_30670,output_checker30613_30671))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_row_coords),schema.core.make_fn_schema.call(null,output_schema30610_30668,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30611_30669], null)));

var ufv___30710 = schema.utils.use_fn_validation;
var output_schema30681_30711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.CellPosition], null);
var input_schema30682_30712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker30683_30713 = schema.core.checker.call(null,input_schema30682_30712);
var output_checker30684_30714 = schema.core.checker.call(null,output_schema30681_30711);
var ret__20514__auto___30715 = /**
 * Inputs: [{:keys [rows columns]}]
 *   Returns: [CellPosition]
 */
snergly.grid.grid_coords = ((function (ufv___30710,output_schema30681_30711,input_schema30682_30712,input_checker30683_30713,output_checker30684_30714){
return (function snergly$grid$grid_coords(G__30685){
var validate__19070__auto__ = ufv___30710.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30716 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30685], null);
var temp__4425__auto___30717 = input_checker30683_30713.call(null,args__19071__auto___30716);
if(cljs.core.truth_(temp__4425__auto___30717)){
var error__19072__auto___30718 = temp__4425__auto___30717;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-coords","grid-coords",2016734967,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30718)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30682_30712,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30716,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30718], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var G__30699 = G__30685;
var map__30700 = G__30699;
var map__30700__$1 = ((((!((map__30700 == null)))?((((map__30700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30700):map__30700);
var rows = cljs.core.get.call(null,map__30700__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__30700__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var G__30699__$1 = G__30699;
while(true){
var map__30702 = G__30699__$1;
var map__30702__$1 = ((((!((map__30702 == null)))?((((map__30702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30702):map__30702);
var rows__$1 = cljs.core.get.call(null,map__30702__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns__$1 = cljs.core.get.call(null,map__30702__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var iter__17543__auto__ = ((function (map__30702,map__30702__$1,rows__$1,columns__$1,G__30699,map__30700,map__30700__$1,rows,columns,validate__19070__auto__,ufv___30710,output_schema30681_30711,input_schema30682_30712,input_checker30683_30713,output_checker30684_30714){
return (function snergly$grid$grid_coords_$_iter__30704(s__30705){
return (new cljs.core.LazySeq(null,((function (map__30702,map__30702__$1,rows__$1,columns__$1,G__30699,map__30700,map__30700__$1,rows,columns,validate__19070__auto__,ufv___30710,output_schema30681_30711,input_schema30682_30712,input_checker30683_30713,output_checker30684_30714){
return (function (){
var s__30705__$1 = s__30705;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30705__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var row = cljs.core.first.call(null,xs__4977__auto__);
var iterys__17539__auto__ = ((function (s__30705__$1,row,xs__4977__auto__,temp__4425__auto__,map__30702,map__30702__$1,rows__$1,columns__$1,G__30699,map__30700,map__30700__$1,rows,columns,validate__19070__auto__,ufv___30710,output_schema30681_30711,input_schema30682_30712,input_checker30683_30713,output_checker30684_30714){
return (function snergly$grid$grid_coords_$_iter__30704_$_iter__30706(s__30707){
return (new cljs.core.LazySeq(null,((function (s__30705__$1,row,xs__4977__auto__,temp__4425__auto__,map__30702,map__30702__$1,rows__$1,columns__$1,G__30699,map__30700,map__30700__$1,rows,columns,validate__19070__auto__,ufv___30710,output_schema30681_30711,input_schema30682_30712,input_checker30683_30713,output_checker30684_30714){
return (function (){
var s__30707__$1 = s__30707;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__30707__$1);
if(temp__4425__auto____$1){
var s__30707__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30707__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__30707__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__30709 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__30708 = (0);
while(true){
if((i__30708 < size__17542__auto__)){
var column = cljs.core._nth.call(null,c__17541__auto__,i__30708);
cljs.core.chunk_append.call(null,b__30709,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null));

var G__30719 = (i__30708 + (1));
i__30708 = G__30719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30709),snergly$grid$grid_coords_$_iter__30704_$_iter__30706.call(null,cljs.core.chunk_rest.call(null,s__30707__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30709),null);
}
} else {
var column = cljs.core.first.call(null,s__30707__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null),snergly$grid$grid_coords_$_iter__30704_$_iter__30706.call(null,cljs.core.rest.call(null,s__30707__$2)));
}
} else {
return null;
}
break;
}
});})(s__30705__$1,row,xs__4977__auto__,temp__4425__auto__,map__30702,map__30702__$1,rows__$1,columns__$1,G__30699,map__30700,map__30700__$1,rows,columns,validate__19070__auto__,ufv___30710,output_schema30681_30711,input_schema30682_30712,input_checker30683_30713,output_checker30684_30714))
,null,null));
});})(s__30705__$1,row,xs__4977__auto__,temp__4425__auto__,map__30702,map__30702__$1,rows__$1,columns__$1,G__30699,map__30700,map__30700__$1,rows,columns,validate__19070__auto__,ufv___30710,output_schema30681_30711,input_schema30682_30712,input_checker30683_30713,output_checker30684_30714))
;
var fs__17540__auto__ = cljs.core.seq.call(null,iterys__17539__auto__.call(null,cljs.core.range.call(null,columns__$1)));
if(fs__17540__auto__){
return cljs.core.concat.call(null,fs__17540__auto__,snergly$grid$grid_coords_$_iter__30704.call(null,cljs.core.rest.call(null,s__30705__$1)));
} else {
var G__30720 = cljs.core.rest.call(null,s__30705__$1);
s__30705__$1 = G__30720;
continue;
}
} else {
return null;
}
break;
}
});})(map__30702,map__30702__$1,rows__$1,columns__$1,G__30699,map__30700,map__30700__$1,rows,columns,validate__19070__auto__,ufv___30710,output_schema30681_30711,input_schema30682_30712,input_checker30683_30713,output_checker30684_30714))
,null,null));
});})(map__30702,map__30702__$1,rows__$1,columns__$1,G__30699,map__30700,map__30700__$1,rows,columns,validate__19070__auto__,ufv___30710,output_schema30681_30711,input_schema30682_30712,input_checker30683_30713,output_checker30684_30714))
;
return iter__17543__auto__.call(null,cljs.core.range.call(null,rows__$1));
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30721 = output_checker30684_30714.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30721)){
var error__19072__auto___30722 = temp__4425__auto___30721;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-coords","grid-coords",2016734967,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30722)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30681_30711,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30722], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30710,output_schema30681_30711,input_schema30682_30712,input_checker30683_30713,output_checker30684_30714))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_coords),schema.core.make_fn_schema.call(null,output_schema30681_30711,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30682_30712], null)));

var ufv___30730 = schema.utils.use_fn_validation;
var output_schema30725_30731 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.Cell], null);
var input_schema30726_30732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker30727_30733 = schema.core.checker.call(null,input_schema30726_30732);
var output_checker30728_30734 = schema.core.checker.call(null,output_schema30725_30731);
var ret__20514__auto___30735 = /**
 * Inputs: [grid]
 *   Returns: [Cell]
 */
snergly.grid.grid_deadends = ((function (ufv___30730,output_schema30725_30731,input_schema30726_30732,input_checker30727_30733,output_checker30728_30734){
return (function snergly$grid$grid_deadends(G__30729){
var validate__19070__auto__ = ufv___30730.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30736 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30729], null);
var temp__4425__auto___30737 = input_checker30727_30733.call(null,args__19071__auto___30736);
if(cljs.core.truth_(temp__4425__auto___30737)){
var error__19072__auto___30738 = temp__4425__auto___30737;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-deadends","grid-deadends",-1972069924,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30738)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30726_30732,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30736,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30738], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var grid = G__30729;
while(true){
return cljs.core.filter.call(null,((function (validate__19070__auto__,ufv___30730,output_schema30725_30731,input_schema30726_30732,input_checker30727_30733,output_checker30728_30734){
return (function (p1__30723_SHARP_){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(p1__30723_SHARP_)));
});})(validate__19070__auto__,ufv___30730,output_schema30725_30731,input_schema30726_30732,input_checker30727_30733,output_checker30728_30734))
,cljs.core.map.call(null,((function (validate__19070__auto__,ufv___30730,output_schema30725_30731,input_schema30726_30732,input_checker30727_30733,output_checker30728_30734){
return (function (p1__30724_SHARP_){
return snergly.grid.grid_cell.call(null,grid,p1__30724_SHARP_);
});})(validate__19070__auto__,ufv___30730,output_schema30725_30731,input_schema30726_30732,input_checker30727_30733,output_checker30728_30734))
,snergly.grid.grid_coords.call(null,grid)));
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30739 = output_checker30728_30734.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30739)){
var error__19072__auto___30740 = temp__4425__auto___30739;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-deadends","grid-deadends",-1972069924,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30740)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30725_30731,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30740], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30730,output_schema30725_30731,input_schema30726_30732,input_checker30727_30733,output_checker30728_30734))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_deadends),schema.core.make_fn_schema.call(null,output_schema30725_30731,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30726_30732], null)));

var ufv___30772 = schema.utils.use_fn_validation;
var output_schema30741_30773 = snergly.grid.Grid;
var input_schema30742_30774 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,snergly.grid.Cell,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)),schema.core.one.call(null,snergly.grid.CellPosition,cljs.core.with_meta(new cljs.core.Symbol(null,"neighbor-coord","neighbor-coord",-81881392,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)))], null);
var input_checker30743_30775 = schema.core.checker.call(null,input_schema30742_30774);
var output_checker30744_30776 = schema.core.checker.call(null,output_schema30741_30773);
var ret__20514__auto___30777 = /**
 * Inputs: [{cells :cells, :as grid} :- Grid {cell-coord :coord, cell-links :links, :as cell} :- Cell neighbor-coord :- CellPosition]
 *   Returns: Grid
 */
snergly.grid.link_cells = ((function (ufv___30772,output_schema30741_30773,input_schema30742_30774,input_checker30743_30775,output_checker30744_30776){
return (function snergly$grid$link_cells(G__30745,G__30746,G__30747){
var validate__19070__auto__ = ufv___30772.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30778 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30745,G__30746,G__30747], null);
var temp__4425__auto___30779 = input_checker30743_30775.call(null,args__19071__auto___30778);
if(cljs.core.truth_(temp__4425__auto___30779)){
var error__19072__auto___30780 = temp__4425__auto___30779;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"link-cells","link-cells",142773653,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30780)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30742_30774,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30778,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30780], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var G__30762 = G__30745;
var map__30764 = G__30762;
var map__30764__$1 = ((((!((map__30764 == null)))?((((map__30764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30764):map__30764);
var grid = map__30764__$1;
var cells = cljs.core.get.call(null,map__30764__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var G__30763 = G__30746;
var map__30765 = G__30763;
var map__30765__$1 = ((((!((map__30765 == null)))?((((map__30765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30765):map__30765);
var cell = map__30765__$1;
var cell_coord = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var cell_links = cljs.core.get.call(null,map__30765__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var neighbor_coord = G__30747;
var G__30762__$1 = G__30762;
var G__30763__$1 = G__30763;
var neighbor_coord__$1 = neighbor_coord;
while(true){
var map__30768 = G__30762__$1;
var map__30768__$1 = ((((!((map__30768 == null)))?((((map__30768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30768):map__30768);
var grid__$1 = map__30768__$1;
var cells__$1 = cljs.core.get.call(null,map__30768__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var map__30769 = G__30763__$1;
var map__30769__$1 = ((((!((map__30769 == null)))?((((map__30769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30769):map__30769);
var cell__$1 = map__30769__$1;
var cell_coord__$1 = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var cell_links__$1 = cljs.core.get.call(null,map__30769__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var neighbor_coord__$2 = neighbor_coord__$1;
var neighbor = snergly.grid.grid_cell.call(null,grid__$1,neighbor_coord__$2);
var neighbor_links = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(neighbor);
return cljs.core.assoc.call(null,grid__$1,new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.assoc.call(null,cells__$1,snergly.grid.cell_index.call(null,grid__$1,cell_coord__$1),cljs.core.assoc.call(null,cell__$1,new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.conj.call(null,cell_links__$1,neighbor_coord__$2)),snergly.grid.cell_index.call(null,grid__$1,neighbor_coord__$2),cljs.core.assoc.call(null,neighbor,new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.conj.call(null,neighbor_links,cell_coord__$1))));
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30781 = output_checker30744_30776.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30781)){
var error__19072__auto___30782 = temp__4425__auto___30781;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"link-cells","link-cells",142773653,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30782)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30741_30773,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30782], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30772,output_schema30741_30773,input_schema30742_30774,input_checker30743_30775,output_checker30744_30776))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.link_cells),schema.core.make_fn_schema.call(null,output_schema30741_30773,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30742_30774], null)));

snergly.grid.linked_QMARK_ = (function snergly$grid$linked_QMARK_(cell,other_cell_coord){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cell),other_cell_coord);
});
var ufv___30789 = schema.utils.use_fn_validation;
var output_schema30783_30790 = snergly.grid.Distances;
var input_schema30784_30791 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"value-xform","value-xform",-1473624567,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,snergly.grid.Distances,cljs.core.with_meta(new cljs.core.Symbol(null,"value-map","value-map",-68641365,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Distances","Distances",-992107672,null)], null)))], null);
var input_checker30785_30792 = schema.core.checker.call(null,input_schema30784_30791);
var output_checker30786_30793 = schema.core.checker.call(null,output_schema30783_30790);
var ret__20514__auto___30794 = /**
 * Inputs: [value-xform value-map :- Distances]
 *   Returns: Distances
 */
snergly.grid.xform_values = ((function (ufv___30789,output_schema30783_30790,input_schema30784_30791,input_checker30785_30792,output_checker30786_30793){
return (function snergly$grid$xform_values(G__30787,G__30788){
var validate__19070__auto__ = ufv___30789.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30787,G__30788], null);
var temp__4425__auto___30796 = input_checker30785_30792.call(null,args__19071__auto___30795);
if(cljs.core.truth_(temp__4425__auto___30796)){
var error__19072__auto___30797 = temp__4425__auto___30796;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"xform-values","xform-values",-1389818983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Distances","Distances",-992107672,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30797)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30784_30791,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30795,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30797], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var value_xform = G__30787;
var value_map = G__30788;
while(true){

return cljs.core.reduce_kv.call(null,((function (validate__19070__auto__,ufv___30789,output_schema30783_30790,input_schema30784_30791,input_checker30785_30792,output_checker30786_30793){
return (function (m,k,v){
if(cljs.core.coll_QMARK_.call(null,k)){
return cljs.core.assoc.call(null,m,k,value_xform.call(null,v));
} else {
return m;
}
});})(validate__19070__auto__,ufv___30789,output_schema30783_30790,input_schema30784_30791,input_checker30785_30792,output_checker30786_30793))
,cljs.core.PersistentArrayMap.EMPTY,value_map);
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30798 = output_checker30786_30793.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30798)){
var error__19072__auto___30799 = temp__4425__auto___30798;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"xform-values","xform-values",-1389818983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Distances","Distances",-992107672,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30799)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30783_30790,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30799], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30789,output_schema30783_30790,input_schema30784_30791,input_checker30785_30792,output_checker30786_30793))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.xform_values),schema.core.make_fn_schema.call(null,output_schema30783_30790,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30784_30791], null)));

var ufv___30810 = schema.utils.use_fn_validation;
var output_schema30800_30811 = snergly.grid.Grid;
var input_schema30801_30812 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,snergly.grid.Distances], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"label-specs","label-specs",430934323,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol(null,"Distances","Distances",-992107672,null)], null)], null)))], null);
var input_checker30802_30813 = schema.core.checker.call(null,input_schema30801_30812);
var output_checker30803_30814 = schema.core.checker.call(null,output_schema30800_30811);
var ret__20514__auto___30815 = /**
 * Inputs: [grid :- Grid label-specs :- {s/Keyword Distances}]
 *   Returns: Grid
 */
snergly.grid.grid_annotate_cells = ((function (ufv___30810,output_schema30800_30811,input_schema30801_30812,input_checker30802_30813,output_checker30803_30814){
return (function snergly$grid$grid_annotate_cells(G__30804,G__30805){
var validate__19070__auto__ = ufv___30810.get_cell();
if(cljs.core.truth_(validate__19070__auto__)){
var args__19071__auto___30816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__30804,G__30805], null);
var temp__4425__auto___30817 = input_checker30802_30813.call(null,args__19071__auto___30816);
if(cljs.core.truth_(temp__4425__auto___30817)){
var error__19072__auto___30818 = temp__4425__auto___30817;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-annotate-cells","grid-annotate-cells",1544958406,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30818)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema30801_30812,new cljs.core.Keyword(null,"value","value",305978217),args__19071__auto___30816,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30818], null));
} else {
}
} else {
}

var o__19073__auto__ = (function (){var grid = G__30804;
var label_specs = G__30805;
while(true){
var specs = cljs.core.seq.call(null,label_specs);
var get_annotations = ((function (specs,validate__19070__auto__,ufv___30810,output_schema30800_30811,input_schema30801_30812,input_checker30802_30813,output_checker30803_30814){
return (function (cell_coord,p__30808){
var vec__30809 = p__30808;
var label = cljs.core.nth.call(null,vec__30809,(0),null);
var value_map = cljs.core.nth.call(null,vec__30809,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[label,value_map.call(null,cell_coord)],null));
});})(specs,validate__19070__auto__,ufv___30810,output_schema30800_30811,input_schema30801_30812,input_checker30802_30813,output_checker30803_30814))
;
var assoc_cell = ((function (specs,get_annotations,validate__19070__auto__,ufv___30810,output_schema30800_30811,input_schema30801_30812,input_checker30802_30813,output_checker30803_30814){
return (function (cell,cell_coord){
return cljs.core.apply.call(null,cljs.core.assoc,cell,cljs.core.mapcat.call(null,cljs.core.partial.call(null,get_annotations,cell_coord),specs));
});})(specs,get_annotations,validate__19070__auto__,ufv___30810,output_schema30800_30811,input_schema30801_30812,input_checker30802_30813,output_checker30803_30814))
;
var annotate_cell = ((function (specs,get_annotations,assoc_cell,validate__19070__auto__,ufv___30810,output_schema30800_30811,input_schema30801_30812,input_checker30802_30813,output_checker30803_30814){
return (function (grid__$1,cell_coord){
return cljs.core.update_in.call(null,grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),snergly.grid.cell_index.call(null,grid__$1,cell_coord)], null),assoc_cell,cell_coord);
});})(specs,get_annotations,assoc_cell,validate__19070__auto__,ufv___30810,output_schema30800_30811,input_schema30801_30812,input_checker30802_30813,output_checker30803_30814))
;
return cljs.core.reduce.call(null,annotate_cell,grid,snergly.grid.grid_coords.call(null,grid));
break;
}
})();
if(cljs.core.truth_(validate__19070__auto__)){
var temp__4425__auto___30819 = output_checker30803_30814.call(null,o__19073__auto__);
if(cljs.core.truth_(temp__4425__auto___30819)){
var error__19072__auto___30820 = temp__4425__auto___30819;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-annotate-cells","grid-annotate-cells",1544958406,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)),cljs.core.pr_str.call(null,error__19072__auto___30820)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema30800_30811,new cljs.core.Keyword(null,"value","value",305978217),o__19073__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19072__auto___30820], null));
} else {
}
} else {
}

return o__19073__auto__;
});})(ufv___30810,output_schema30800_30811,input_schema30801_30812,input_checker30802_30813,output_checker30803_30814))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_annotate_cells),schema.core.make_fn_schema.call(null,output_schema30800_30811,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema30801_30812], null)));

snergly.grid.intlabel = (function snergly$grid$intlabel(val){
return snergly.util.pad.call(null,(2)," ",[cljs.core.str(val)].join(''));
});
snergly.grid.print_grid = (function snergly$grid$print_grid(var_args){
var args30822 = [];
var len__17829__auto___30848 = arguments.length;
var i__17830__auto___30849 = (0);
while(true){
if((i__17830__auto___30849 < len__17829__auto___30848)){
args30822.push((arguments[i__17830__auto___30849]));

var G__30850 = (i__17830__auto___30849 + (1));
i__17830__auto___30849 = G__30850;
continue;
} else {
}
break;
}

var G__30824 = args30822.length;
switch (G__30824) {
case 1:
return snergly.grid.print_grid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return snergly.grid.print_grid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30822.length)].join('')));

}
});

snergly.grid.print_grid.cljs$core$IFn$_invoke$arity$1 = (function (grid){
return snergly.grid.print_grid.call(null,grid,false);
});

snergly.grid.print_grid.cljs$core$IFn$_invoke$arity$2 = (function (p__30825,print_coords_QMARK_){
var map__30826 = p__30825;
var map__30826__$1 = ((((!((map__30826 == null)))?((((map__30826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30826):map__30826);
var grid = map__30826__$1;
var columns = cljs.core.get.call(null,map__30826__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var resolve = cljs.core.partial.call(null,snergly.grid.grid_cell,grid);
if(cljs.core.truth_(print_coords_QMARK_)){
cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"   ",cljs.core.map.call(null,((function (resolve,map__30826,map__30826__$1,grid,columns){
return (function (p1__30821_SHARP_){
return [cljs.core.str(snergly.grid.intlabel.call(null,p1__30821_SHARP_)),cljs.core.str("  ")].join('');
});})(resolve,map__30826,map__30826__$1,grid,columns))
),cljs.core.range.call(null,columns)));

cljs.core.print.call(null,"  ");
} else {
}

cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"+",cljs.core.repeat.call(null,columns,"---+")));

var seq__30828 = cljs.core.seq.call(null,snergly.grid.grid_row_coords.call(null,grid));
var chunk__30829 = null;
var count__30830 = (0);
var i__30831 = (0);
while(true){
if((i__30831 < count__30830)){
var row = cljs.core._nth.call(null,chunk__30829,i__30831);
if(cljs.core.truth_(print_coords_QMARK_)){
cljs.core.print.call(null,snergly.grid.intlabel.call(null,cljs.core.ffirst.call(null,row)));
} else {
}

cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"|",(function (){var iter__17543__auto__ = ((function (seq__30828,chunk__30829,count__30830,i__30831,row,resolve,map__30826,map__30826__$1,grid,columns){
return (function snergly$grid$iter__30832(s__30833){
return (new cljs.core.LazySeq(null,((function (seq__30828,chunk__30829,count__30830,i__30831,row,resolve,map__30826,map__30826__$1,grid,columns){
return (function (){
var s__30833__$1 = s__30833;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30833__$1);
if(temp__4425__auto__){
var s__30833__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30833__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__30833__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__30835 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__30834 = (0);
while(true){
if((i__30834 < size__17542__auto__)){
var cell = cljs.core._nth.call(null,c__17541__auto__,i__30834);
cljs.core.chunk_append.call(null,b__30835,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell))?[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell)),cljs.core.str(" ")].join(''):"   ")),cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell)))?" ":"|"))].join(''));

var G__30852 = (i__30834 + (1));
i__30834 = G__30852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30835),snergly$grid$iter__30832.call(null,cljs.core.chunk_rest.call(null,s__30833__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30835),null);
}
} else {
var cell = cljs.core.first.call(null,s__30833__$2);
return cljs.core.cons.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell))?[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell)),cljs.core.str(" ")].join(''):"   ")),cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell)))?" ":"|"))].join(''),snergly$grid$iter__30832.call(null,cljs.core.rest.call(null,s__30833__$2)));
}
} else {
return null;
}
break;
}
});})(seq__30828,chunk__30829,count__30830,i__30831,row,resolve,map__30826,map__30826__$1,grid,columns))
,null,null));
});})(seq__30828,chunk__30829,count__30830,i__30831,row,resolve,map__30826,map__30826__$1,grid,columns))
;
return iter__17543__auto__.call(null,cljs.core.map.call(null,resolve,row));
})()));

if(cljs.core.truth_(print_coords_QMARK_)){
cljs.core.print.call(null,"  ");
} else {
}

cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"+",(function (){var iter__17543__auto__ = ((function (seq__30828,chunk__30829,count__30830,i__30831,row,resolve,map__30826,map__30826__$1,grid,columns){
return (function snergly$grid$iter__30836(s__30837){
return (new cljs.core.LazySeq(null,((function (seq__30828,chunk__30829,count__30830,i__30831,row,resolve,map__30826,map__30826__$1,grid,columns){
return (function (){
var s__30837__$1 = s__30837;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30837__$1);
if(temp__4425__auto__){
var s__30837__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30837__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__30837__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__30839 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__30838 = (0);
while(true){
if((i__30838 < size__17542__auto__)){
var cell = cljs.core._nth.call(null,c__17541__auto__,i__30838);
cljs.core.chunk_append.call(null,b__30839,[cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"south","south",1586796293).cljs$core$IFn$_invoke$arity$1(cell)))?"   ":"---")),cljs.core.str("+")].join(''));

var G__30853 = (i__30838 + (1));
i__30838 = G__30853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30839),snergly$grid$iter__30836.call(null,cljs.core.chunk_rest.call(null,s__30837__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30839),null);
}
} else {
var cell = cljs.core.first.call(null,s__30837__$2);
return cljs.core.cons.call(null,[cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"south","south",1586796293).cljs$core$IFn$_invoke$arity$1(cell)))?"   ":"---")),cljs.core.str("+")].join(''),snergly$grid$iter__30836.call(null,cljs.core.rest.call(null,s__30837__$2)));
}
} else {
return null;
}
break;
}
});})(seq__30828,chunk__30829,count__30830,i__30831,row,resolve,map__30826,map__30826__$1,grid,columns))
,null,null));
});})(seq__30828,chunk__30829,count__30830,i__30831,row,resolve,map__30826,map__30826__$1,grid,columns))
;
return iter__17543__auto__.call(null,cljs.core.map.call(null,resolve,row));
})()));

var G__30854 = seq__30828;
var G__30855 = chunk__30829;
var G__30856 = count__30830;
var G__30857 = (i__30831 + (1));
seq__30828 = G__30854;
chunk__30829 = G__30855;
count__30830 = G__30856;
i__30831 = G__30857;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30828);
if(temp__4425__auto__){
var seq__30828__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30828__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__30828__$1);
var G__30858 = cljs.core.chunk_rest.call(null,seq__30828__$1);
var G__30859 = c__17574__auto__;
var G__30860 = cljs.core.count.call(null,c__17574__auto__);
var G__30861 = (0);
seq__30828 = G__30858;
chunk__30829 = G__30859;
count__30830 = G__30860;
i__30831 = G__30861;
continue;
} else {
var row = cljs.core.first.call(null,seq__30828__$1);
if(cljs.core.truth_(print_coords_QMARK_)){
cljs.core.print.call(null,snergly.grid.intlabel.call(null,cljs.core.ffirst.call(null,row)));
} else {
}

cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"|",(function (){var iter__17543__auto__ = ((function (seq__30828,chunk__30829,count__30830,i__30831,row,seq__30828__$1,temp__4425__auto__,resolve,map__30826,map__30826__$1,grid,columns){
return (function snergly$grid$iter__30840(s__30841){
return (new cljs.core.LazySeq(null,((function (seq__30828,chunk__30829,count__30830,i__30831,row,seq__30828__$1,temp__4425__auto__,resolve,map__30826,map__30826__$1,grid,columns){
return (function (){
var s__30841__$1 = s__30841;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__30841__$1);
if(temp__4425__auto____$1){
var s__30841__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30841__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__30841__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__30843 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__30842 = (0);
while(true){
if((i__30842 < size__17542__auto__)){
var cell = cljs.core._nth.call(null,c__17541__auto__,i__30842);
cljs.core.chunk_append.call(null,b__30843,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell))?[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell)),cljs.core.str(" ")].join(''):"   ")),cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell)))?" ":"|"))].join(''));

var G__30862 = (i__30842 + (1));
i__30842 = G__30862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30843),snergly$grid$iter__30840.call(null,cljs.core.chunk_rest.call(null,s__30841__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30843),null);
}
} else {
var cell = cljs.core.first.call(null,s__30841__$2);
return cljs.core.cons.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell))?[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell)),cljs.core.str(" ")].join(''):"   ")),cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell)))?" ":"|"))].join(''),snergly$grid$iter__30840.call(null,cljs.core.rest.call(null,s__30841__$2)));
}
} else {
return null;
}
break;
}
});})(seq__30828,chunk__30829,count__30830,i__30831,row,seq__30828__$1,temp__4425__auto__,resolve,map__30826,map__30826__$1,grid,columns))
,null,null));
});})(seq__30828,chunk__30829,count__30830,i__30831,row,seq__30828__$1,temp__4425__auto__,resolve,map__30826,map__30826__$1,grid,columns))
;
return iter__17543__auto__.call(null,cljs.core.map.call(null,resolve,row));
})()));

if(cljs.core.truth_(print_coords_QMARK_)){
cljs.core.print.call(null,"  ");
} else {
}

cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"+",(function (){var iter__17543__auto__ = ((function (seq__30828,chunk__30829,count__30830,i__30831,row,seq__30828__$1,temp__4425__auto__,resolve,map__30826,map__30826__$1,grid,columns){
return (function snergly$grid$iter__30844(s__30845){
return (new cljs.core.LazySeq(null,((function (seq__30828,chunk__30829,count__30830,i__30831,row,seq__30828__$1,temp__4425__auto__,resolve,map__30826,map__30826__$1,grid,columns){
return (function (){
var s__30845__$1 = s__30845;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__30845__$1);
if(temp__4425__auto____$1){
var s__30845__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30845__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__30845__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__30847 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__30846 = (0);
while(true){
if((i__30846 < size__17542__auto__)){
var cell = cljs.core._nth.call(null,c__17541__auto__,i__30846);
cljs.core.chunk_append.call(null,b__30847,[cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"south","south",1586796293).cljs$core$IFn$_invoke$arity$1(cell)))?"   ":"---")),cljs.core.str("+")].join(''));

var G__30863 = (i__30846 + (1));
i__30846 = G__30863;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30847),snergly$grid$iter__30844.call(null,cljs.core.chunk_rest.call(null,s__30845__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30847),null);
}
} else {
var cell = cljs.core.first.call(null,s__30845__$2);
return cljs.core.cons.call(null,[cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"south","south",1586796293).cljs$core$IFn$_invoke$arity$1(cell)))?"   ":"---")),cljs.core.str("+")].join(''),snergly$grid$iter__30844.call(null,cljs.core.rest.call(null,s__30845__$2)));
}
} else {
return null;
}
break;
}
});})(seq__30828,chunk__30829,count__30830,i__30831,row,seq__30828__$1,temp__4425__auto__,resolve,map__30826,map__30826__$1,grid,columns))
,null,null));
});})(seq__30828,chunk__30829,count__30830,i__30831,row,seq__30828__$1,temp__4425__auto__,resolve,map__30826,map__30826__$1,grid,columns))
;
return iter__17543__auto__.call(null,cljs.core.map.call(null,resolve,row));
})()));

var G__30864 = cljs.core.next.call(null,seq__30828__$1);
var G__30865 = null;
var G__30866 = (0);
var G__30867 = (0);
seq__30828 = G__30864;
chunk__30829 = G__30865;
count__30830 = G__30866;
i__30831 = G__30867;
continue;
}
} else {
return null;
}
}
break;
}
});

snergly.grid.print_grid.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=grid.js.map