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
snergly.grid.Grid = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),schema.core.eq.call(null,new cljs.core.Keyword(null,"Grid","Grid",2061196277)),new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),schema.core.Str,new cljs.core.Keyword(null,"rows","rows",850049680),snergly.grid.NonNegativeInt,new cljs.core.Keyword(null,"columns","columns",1998437288),snergly.grid.NonNegativeInt,new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.Cell], null),new cljs.core.Keyword(null,"changed-cells","changed-cells",2102894501),schema.core.maybe.call(null,cljs.core.PersistentHashSet.fromArray([snergly.grid.CellPosition], true))], null);
/**
 * Schema for a distance map
 */
snergly.grid.Distances = cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"origin","origin",1037372088),snergly.grid.CellPosition,new cljs.core.Keyword(null,"max-coord","max-coord",-881869431),snergly.grid.CellPosition,new cljs.core.Keyword(null,"max","max",61366548),snergly.grid.NonNegativeInt,snergly.grid.CellPosition,snergly.grid.NonNegativeInt], true, false);
var ufv___220288 = schema.utils.use_fn_validation;
var output_schema220280_220289 = snergly.grid.Cell;
var input_schema220281_220290 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"columns","columns",-655998481,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker220282_220291 = schema.core.checker.call(null,input_schema220281_220290);
var output_checker220283_220292 = schema.core.checker.call(null,output_schema220280_220289);
var ret__20577__auto___220293 = /**
 * Inputs: [row column rows columns]
 *   Returns: Cell
 */
snergly.grid.make_cell = ((function (ufv___220288,output_schema220280_220289,input_schema220281_220290,input_checker220282_220291,output_checker220283_220292){
return (function snergly$grid$make_cell(G__220284,G__220285,G__220286,G__220287){
var validate__19133__auto__ = ufv___220288.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220294 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220284,G__220285,G__220286,G__220287], null);
var temp__4425__auto___220295 = input_checker220282_220291.call(null,args__19134__auto___220294);
if(cljs.core.truth_(temp__4425__auto___220295)){
var error__19135__auto___220296 = temp__4425__auto___220295;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"make-cell","make-cell",983664608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220296)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220281_220290,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220294,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220296], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var row = G__220284;
var column = G__220285;
var rows = G__220286;
var columns = G__220287;
while(true){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Cell","Cell",53644787),new cljs.core.Keyword(null,"coord","coord",-1453656639),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null),new cljs.core.Keyword(null,"north","north",651323902),(((row > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row - (1)),column], null):null),new cljs.core.Keyword(null,"south","south",1586796293),(((row < (rows - (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row + (1)),column], null):null),new cljs.core.Keyword(null,"east","east",1189821678),(((column < (columns - (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(column + (1))], null):null),new cljs.core.Keyword(null,"west","west",708776677),(((column > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(column - (1))], null):null),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.PersistentHashSet.EMPTY], null);
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220297 = output_checker220283_220292.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220297)){
var error__19135__auto___220298 = temp__4425__auto___220297;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"make-cell","make-cell",983664608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220298)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220280_220289,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220298], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220288,output_schema220280_220289,input_schema220281_220290,input_checker220282_220291,output_checker220283_220292))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.make_cell),schema.core.make_fn_schema.call(null,output_schema220280_220289,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220281_220290], null)));

var ufv___220312 = schema.utils.use_fn_validation;
var output_schema220299_220313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.CellPosition], null);
var input_schema220300_220314 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_schema220304_220315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Cell,cljs.core.with_meta(new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.enum$.call(null,new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"west","west",708776677))], null),cljs.core.with_meta(new cljs.core.Symbol(null,"directions","directions",529983761,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","enum","s/enum",-975416934,null),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"west","west",708776677))], null)], null)))], null);
var input_checker220301_220316 = schema.core.checker.call(null,input_schema220300_220314);
var output_checker220302_220317 = schema.core.checker.call(null,output_schema220299_220313);
var input_checker220305_220318 = schema.core.checker.call(null,input_schema220304_220315);
var output_checker220306_220319 = schema.core.checker.call(null,output_schema220299_220313);
var ret__20577__auto___220320 = (function (){
/**
 * Inputs: ([cell] [cell :- Cell directions :- [(s/enum :north :south :east :west)]])
 *   Returns: [CellPosition]
 */
snergly.grid.cell_neighbors = ((function (ufv___220312,output_schema220299_220313,input_schema220300_220314,input_schema220304_220315,input_checker220301_220316,output_checker220302_220317,input_checker220305_220318,output_checker220306_220319){
return (function snergly$grid$cell_neighbors(var_args){
var args220309 = [];
var len__17892__auto___220321 = arguments.length;
var i__17893__auto___220322 = (0);
while(true){
if((i__17893__auto___220322 < len__17892__auto___220321)){
args220309.push((arguments[i__17893__auto___220322]));

var G__220323 = (i__17893__auto___220322 + (1));
i__17893__auto___220322 = G__220323;
continue;
} else {
}
break;
}

var G__220311 = args220309.length;
switch (G__220311) {
case 1:
return snergly.grid.cell_neighbors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return snergly.grid.cell_neighbors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args220309.length)].join('')));

}
});})(ufv___220312,output_schema220299_220313,input_schema220300_220314,input_schema220304_220315,input_checker220301_220316,output_checker220302_220317,input_checker220305_220318,output_checker220306_220319))
;

snergly.grid.cell_neighbors.cljs$core$IFn$_invoke$arity$1 = ((function (ufv___220312,output_schema220299_220313,input_schema220300_220314,input_schema220304_220315,input_checker220301_220316,output_checker220302_220317,input_checker220305_220318,output_checker220306_220319){
return (function (G__220303){
var validate__19133__auto__ = ufv___220312.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220325 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220303], null);
var temp__4425__auto___220326 = input_checker220301_220316.call(null,args__19134__auto___220325);
if(cljs.core.truth_(temp__4425__auto___220326)){
var error__19135__auto___220327 = temp__4425__auto___220326;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-neighbors","cell-neighbors",1931156445,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220327)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220300_220314,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220325,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220327], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var cell = G__220303;
while(true){
return snergly.grid.cell_neighbors.call(null,cell,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"west","west",708776677)], null));
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220328 = output_checker220302_220317.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220328)){
var error__19135__auto___220329 = temp__4425__auto___220328;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-neighbors","cell-neighbors",1931156445,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220329)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220299_220313,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220329], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220312,output_schema220299_220313,input_schema220300_220314,input_schema220304_220315,input_checker220301_220316,output_checker220302_220317,input_checker220305_220318,output_checker220306_220319))
;

snergly.grid.cell_neighbors.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___220312,output_schema220299_220313,input_schema220300_220314,input_schema220304_220315,input_checker220301_220316,output_checker220302_220317,input_checker220305_220318,output_checker220306_220319){
return (function (G__220307,G__220308){
var validate__19133__auto__ = ufv___220312.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220307,G__220308], null);
var temp__4425__auto___220331 = input_checker220305_220318.call(null,args__19134__auto___220330);
if(cljs.core.truth_(temp__4425__auto___220331)){
var error__19135__auto___220332 = temp__4425__auto___220331;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-neighbors","cell-neighbors",1931156445,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220332)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220304_220315,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220330,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220332], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var cell = G__220307;
var directions = G__220308;
while(true){
return cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cell,directions));
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220333 = output_checker220306_220319.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220333)){
var error__19135__auto___220334 = temp__4425__auto___220333;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-neighbors","cell-neighbors",1931156445,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220334)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220299_220313,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220334], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220312,output_schema220299_220313,input_schema220300_220314,input_schema220304_220315,input_checker220301_220316,output_checker220302_220317,input_checker220305_220318,output_checker220306_220319))
;

return snergly.grid.cell_neighbors.cljs$lang$maxFixedArity = 2;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.cell_neighbors),schema.core.make_fn_schema.call(null,output_schema220299_220313,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220300_220314,input_schema220304_220315], null)));

var ufv___220353 = schema.utils.use_fn_validation;
var output_schema220335_220354 = snergly.grid.Grid;
var input_schema220336_220355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"columns","columns",-655998481,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker220337_220356 = schema.core.checker.call(null,input_schema220336_220355);
var output_checker220338_220357 = schema.core.checker.call(null,output_schema220335_220354);
var ret__20577__auto___220358 = /**
 * Inputs: [rows columns]
 *   Returns: Grid
 * 
 *   Creates and returns a new grid with the specified row and column sizes.
 */
snergly.grid.make_grid = ((function (ufv___220353,output_schema220335_220354,input_schema220336_220355,input_checker220337_220356,output_checker220338_220357){
return (function snergly$grid$make_grid(G__220339,G__220340){
var validate__19133__auto__ = ufv___220353.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220359 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220339,G__220340], null);
var temp__4425__auto___220360 = input_checker220337_220356.call(null,args__19134__auto___220359);
if(cljs.core.truth_(temp__4425__auto___220360)){
var error__19135__auto___220361 = temp__4425__auto___220360;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"make-grid","make-grid",1951018931,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a new grid with the specified row and column sizes."], null)),cljs.core.pr_str.call(null,error__19135__auto___220361)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220336_220355,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220359,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220361], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var rows = G__220339;
var columns = G__220340;
while(true){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"Grid","Grid",2061196277),new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"none",new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"columns","columns",1998437288),columns,new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__17606__auto__ = ((function (validate__19133__auto__,ufv___220353,output_schema220335_220354,input_schema220336_220355,input_checker220337_220356,output_checker220338_220357){
return (function snergly$grid$make_grid_$_iter__220347(s__220348){
return (new cljs.core.LazySeq(null,((function (validate__19133__auto__,ufv___220353,output_schema220335_220354,input_schema220336_220355,input_checker220337_220356,output_checker220338_220357){
return (function (){
var s__220348__$1 = s__220348;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__220348__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var row = cljs.core.first.call(null,xs__4977__auto__);
var iterys__17602__auto__ = ((function (s__220348__$1,row,xs__4977__auto__,temp__4425__auto__,validate__19133__auto__,ufv___220353,output_schema220335_220354,input_schema220336_220355,input_checker220337_220356,output_checker220338_220357){
return (function snergly$grid$make_grid_$_iter__220347_$_iter__220349(s__220350){
return (new cljs.core.LazySeq(null,((function (s__220348__$1,row,xs__4977__auto__,temp__4425__auto__,validate__19133__auto__,ufv___220353,output_schema220335_220354,input_schema220336_220355,input_checker220337_220356,output_checker220338_220357){
return (function (){
var s__220350__$1 = s__220350;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__220350__$1);
if(temp__4425__auto____$1){
var s__220350__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__220350__$2)){
var c__17604__auto__ = cljs.core.chunk_first.call(null,s__220350__$2);
var size__17605__auto__ = cljs.core.count.call(null,c__17604__auto__);
var b__220352 = cljs.core.chunk_buffer.call(null,size__17605__auto__);
if((function (){var i__220351 = (0);
while(true){
if((i__220351 < size__17605__auto__)){
var column = cljs.core._nth.call(null,c__17604__auto__,i__220351);
cljs.core.chunk_append.call(null,b__220352,snergly.grid.make_cell.call(null,row,column,rows,columns));

var G__220362 = (i__220351 + (1));
i__220351 = G__220362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220352),snergly$grid$make_grid_$_iter__220347_$_iter__220349.call(null,cljs.core.chunk_rest.call(null,s__220350__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220352),null);
}
} else {
var column = cljs.core.first.call(null,s__220350__$2);
return cljs.core.cons.call(null,snergly.grid.make_cell.call(null,row,column,rows,columns),snergly$grid$make_grid_$_iter__220347_$_iter__220349.call(null,cljs.core.rest.call(null,s__220350__$2)));
}
} else {
return null;
}
break;
}
});})(s__220348__$1,row,xs__4977__auto__,temp__4425__auto__,validate__19133__auto__,ufv___220353,output_schema220335_220354,input_schema220336_220355,input_checker220337_220356,output_checker220338_220357))
,null,null));
});})(s__220348__$1,row,xs__4977__auto__,temp__4425__auto__,validate__19133__auto__,ufv___220353,output_schema220335_220354,input_schema220336_220355,input_checker220337_220356,output_checker220338_220357))
;
var fs__17603__auto__ = cljs.core.seq.call(null,iterys__17602__auto__.call(null,cljs.core.range.call(null,columns)));
if(fs__17603__auto__){
return cljs.core.concat.call(null,fs__17603__auto__,snergly$grid$make_grid_$_iter__220347.call(null,cljs.core.rest.call(null,s__220348__$1)));
} else {
var G__220363 = cljs.core.rest.call(null,s__220348__$1);
s__220348__$1 = G__220363;
continue;
}
} else {
return null;
}
break;
}
});})(validate__19133__auto__,ufv___220353,output_schema220335_220354,input_schema220336_220355,input_checker220337_220356,output_checker220338_220357))
,null,null));
});})(validate__19133__auto__,ufv___220353,output_schema220335_220354,input_schema220336_220355,input_checker220337_220356,output_checker220338_220357))
;
return iter__17606__auto__.call(null,cljs.core.range.call(null,rows));
})()),new cljs.core.Keyword(null,"changed-cells","changed-cells",2102894501),null], null);
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220364 = output_checker220338_220357.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220364)){
var error__19135__auto___220365 = temp__4425__auto___220364;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"make-grid","make-grid",1951018931,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a new grid with the specified row and column sizes."], null)),cljs.core.pr_str.call(null,error__19135__auto___220365)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220335_220354,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220365], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220353,output_schema220335_220354,input_schema220336_220355,input_checker220337_220356,output_checker220338_220357))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.make_grid),schema.core.make_fn_schema.call(null,output_schema220335_220354,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220336_220355], null)));

var ufv___220385 = schema.utils.use_fn_validation;
var output_schema220366_220386 = snergly.grid.NonNegativeInt;
var input_schema220367_220387 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_schema220372_220388 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker220368_220389 = schema.core.checker.call(null,input_schema220367_220387);
var output_checker220369_220390 = schema.core.checker.call(null,output_schema220366_220386);
var input_checker220373_220391 = schema.core.checker.call(null,input_schema220372_220388);
var output_checker220374_220392 = schema.core.checker.call(null,output_schema220366_220386);
var ret__20577__auto___220393 = (function (){
/**
 * Inputs: ([grid [row column]] [grid row column])
 *   Returns: NonNegativeInt
 */
snergly.grid.cell_index = ((function (ufv___220385,output_schema220366_220386,input_schema220367_220387,input_schema220372_220388,input_checker220368_220389,output_checker220369_220390,input_checker220373_220391,output_checker220374_220392){
return (function snergly$grid$cell_index(var_args){
var args220378 = [];
var len__17892__auto___220394 = arguments.length;
var i__17893__auto___220395 = (0);
while(true){
if((i__17893__auto___220395 < len__17892__auto___220394)){
args220378.push((arguments[i__17893__auto___220395]));

var G__220396 = (i__17893__auto___220395 + (1));
i__17893__auto___220395 = G__220396;
continue;
} else {
}
break;
}

var G__220380 = args220378.length;
switch (G__220380) {
case 2:
return snergly.grid.cell_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return snergly.grid.cell_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args220378.length)].join('')));

}
});})(ufv___220385,output_schema220366_220386,input_schema220367_220387,input_schema220372_220388,input_checker220368_220389,output_checker220369_220390,input_checker220373_220391,output_checker220374_220392))
;

snergly.grid.cell_index.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___220385,output_schema220366_220386,input_schema220367_220387,input_schema220372_220388,input_checker220368_220389,output_checker220369_220390,input_checker220373_220391,output_checker220374_220392){
return (function (G__220370,G__220371){
var validate__19133__auto__ = ufv___220385.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220398 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220370,G__220371], null);
var temp__4425__auto___220399 = input_checker220368_220389.call(null,args__19134__auto___220398);
if(cljs.core.truth_(temp__4425__auto___220399)){
var error__19135__auto___220400 = temp__4425__auto___220399;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-index","cell-index",-1150930793,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220400)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220367_220387,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220398,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220400], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__220370;
var G__220382 = G__220371;
var vec__220383 = G__220382;
var row = cljs.core.nth.call(null,vec__220383,(0),null);
var column = cljs.core.nth.call(null,vec__220383,(1),null);
var grid__$1 = grid;
var G__220382__$1 = G__220382;
while(true){
var grid__$2 = grid__$1;
var vec__220384 = G__220382__$1;
var row__$1 = cljs.core.nth.call(null,vec__220384,(0),null);
var column__$1 = cljs.core.nth.call(null,vec__220384,(1),null);
return snergly.grid.cell_index.call(null,grid__$2,row__$1,column__$1);
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220401 = output_checker220369_220390.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220401)){
var error__19135__auto___220402 = temp__4425__auto___220401;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-index","cell-index",-1150930793,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220402)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220366_220386,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220402], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220385,output_schema220366_220386,input_schema220367_220387,input_schema220372_220388,input_checker220368_220389,output_checker220369_220390,input_checker220373_220391,output_checker220374_220392))
;

snergly.grid.cell_index.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___220385,output_schema220366_220386,input_schema220367_220387,input_schema220372_220388,input_checker220368_220389,output_checker220369_220390,input_checker220373_220391,output_checker220374_220392){
return (function (G__220375,G__220376,G__220377){
var validate__19133__auto__ = ufv___220385.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220403 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220375,G__220376,G__220377], null);
var temp__4425__auto___220404 = input_checker220373_220391.call(null,args__19134__auto___220403);
if(cljs.core.truth_(temp__4425__auto___220404)){
var error__19135__auto___220405 = temp__4425__auto___220404;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-index","cell-index",-1150930793,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220405)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220372_220388,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220403,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220405], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__220375;
var row = G__220376;
var column = G__220377;
while(true){
return ((row * new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(grid)) + column);
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220406 = output_checker220374_220392.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220406)){
var error__19135__auto___220407 = temp__4425__auto___220406;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"cell-index","cell-index",-1150930793,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220407)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220366_220386,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220407], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220385,output_schema220366_220386,input_schema220367_220387,input_schema220372_220388,input_checker220368_220389,output_checker220369_220390,input_checker220373_220391,output_checker220374_220392))
;

return snergly.grid.cell_index.cljs$lang$maxFixedArity = 3;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.cell_index),schema.core.make_fn_schema.call(null,output_schema220366_220386,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220367_220387,input_schema220372_220388], null)));

var ufv___220427 = schema.utils.use_fn_validation;
var output_schema220408_220428 = snergly.grid.Cell;
var input_schema220409_220429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_schema220414_220430 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"column","column",-576213674,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker220410_220431 = schema.core.checker.call(null,input_schema220409_220429);
var output_checker220411_220432 = schema.core.checker.call(null,output_schema220408_220428);
var input_checker220415_220433 = schema.core.checker.call(null,input_schema220414_220430);
var output_checker220416_220434 = schema.core.checker.call(null,output_schema220408_220428);
var ret__20577__auto___220435 = (function (){
/**
 * Inputs: ([grid [row column]] [grid row column])
 *   Returns: Cell
 */
snergly.grid.grid_cell = ((function (ufv___220427,output_schema220408_220428,input_schema220409_220429,input_schema220414_220430,input_checker220410_220431,output_checker220411_220432,input_checker220415_220433,output_checker220416_220434){
return (function snergly$grid$grid_cell(var_args){
var args220420 = [];
var len__17892__auto___220436 = arguments.length;
var i__17893__auto___220437 = (0);
while(true){
if((i__17893__auto___220437 < len__17892__auto___220436)){
args220420.push((arguments[i__17893__auto___220437]));

var G__220438 = (i__17893__auto___220437 + (1));
i__17893__auto___220437 = G__220438;
continue;
} else {
}
break;
}

var G__220422 = args220420.length;
switch (G__220422) {
case 2:
return snergly.grid.grid_cell.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return snergly.grid.grid_cell.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args220420.length)].join('')));

}
});})(ufv___220427,output_schema220408_220428,input_schema220409_220429,input_schema220414_220430,input_checker220410_220431,output_checker220411_220432,input_checker220415_220433,output_checker220416_220434))
;

snergly.grid.grid_cell.cljs$core$IFn$_invoke$arity$2 = ((function (ufv___220427,output_schema220408_220428,input_schema220409_220429,input_schema220414_220430,input_checker220410_220431,output_checker220411_220432,input_checker220415_220433,output_checker220416_220434){
return (function (G__220412,G__220413){
var validate__19133__auto__ = ufv___220427.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220412,G__220413], null);
var temp__4425__auto___220441 = input_checker220410_220431.call(null,args__19134__auto___220440);
if(cljs.core.truth_(temp__4425__auto___220441)){
var error__19135__auto___220442 = temp__4425__auto___220441;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-cell","grid-cell",-1304305086,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220442)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220409_220429,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220440,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220442], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__220412;
var G__220424 = G__220413;
var vec__220425 = G__220424;
var row = cljs.core.nth.call(null,vec__220425,(0),null);
var column = cljs.core.nth.call(null,vec__220425,(1),null);
var grid__$1 = grid;
var G__220424__$1 = G__220424;
while(true){
var grid__$2 = grid__$1;
var vec__220426 = G__220424__$1;
var row__$1 = cljs.core.nth.call(null,vec__220426,(0),null);
var column__$1 = cljs.core.nth.call(null,vec__220426,(1),null);
return snergly.grid.grid_cell.call(null,grid__$2,row__$1,column__$1);
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220443 = output_checker220411_220432.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220443)){
var error__19135__auto___220444 = temp__4425__auto___220443;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-cell","grid-cell",-1304305086,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220444)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220408_220428,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220444], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220427,output_schema220408_220428,input_schema220409_220429,input_schema220414_220430,input_checker220410_220431,output_checker220411_220432,input_checker220415_220433,output_checker220416_220434))
;

snergly.grid.grid_cell.cljs$core$IFn$_invoke$arity$3 = ((function (ufv___220427,output_schema220408_220428,input_schema220409_220429,input_schema220414_220430,input_checker220410_220431,output_checker220411_220432,input_checker220415_220433,output_checker220416_220434){
return (function (G__220417,G__220418,G__220419){
var validate__19133__auto__ = ufv___220427.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220445 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220417,G__220418,G__220419], null);
var temp__4425__auto___220446 = input_checker220415_220433.call(null,args__19134__auto___220445);
if(cljs.core.truth_(temp__4425__auto___220446)){
var error__19135__auto___220447 = temp__4425__auto___220446;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-cell","grid-cell",-1304305086,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220447)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220414_220430,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220445,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220447], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__220417;
var row = G__220418;
var column = G__220419;
while(true){
return new cljs.core.Keyword(null,"cells","cells",-985166822).cljs$core$IFn$_invoke$arity$1(grid).call(null,snergly.grid.cell_index.call(null,grid,row,column));
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220448 = output_checker220416_220434.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220448)){
var error__19135__auto___220449 = temp__4425__auto___220448;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-cell","grid-cell",-1304305086,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220449)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220408_220428,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220449], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220427,output_schema220408_220428,input_schema220409_220429,input_schema220414_220430,input_checker220410_220431,output_checker220411_220432,input_checker220415_220433,output_checker220416_220434))
;

return snergly.grid.grid_cell.cljs$lang$maxFixedArity = 3;
})()
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_cell),schema.core.make_fn_schema.call(null,output_schema220408_220428,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220409_220429,input_schema220414_220430], null)));

var ufv___220467 = schema.utils.use_fn_validation;
var output_schema220450_220468 = snergly.grid.CellPosition;
var input_schema220451_220469 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker220452_220470 = schema.core.checker.call(null,input_schema220451_220469);
var output_checker220453_220471 = schema.core.checker.call(null,output_schema220450_220468);
var ret__20577__auto___220472 = /**
 * Inputs: [{:keys [rows columns], :as grid}]
 *   Returns: CellPosition
 */
snergly.grid.random_coord = ((function (ufv___220467,output_schema220450_220468,input_schema220451_220469,input_checker220452_220470,output_checker220453_220471){
return (function snergly$grid$random_coord(G__220454){
var validate__19133__auto__ = ufv___220467.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220473 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220454], null);
var temp__4425__auto___220474 = input_checker220452_220470.call(null,args__19134__auto___220473);
if(cljs.core.truth_(temp__4425__auto___220474)){
var error__19135__auto___220475 = temp__4425__auto___220474;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"random-coord","random-coord",-980419436,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220475)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220451_220469,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220473,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220475], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var G__220462 = G__220454;
var map__220463 = G__220462;
var map__220463__$1 = ((((!((map__220463 == null)))?((((map__220463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220463):map__220463);
var grid = map__220463__$1;
var rows = cljs.core.get.call(null,map__220463__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__220463__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var G__220462__$1 = G__220462;
while(true){
var map__220465 = G__220462__$1;
var map__220465__$1 = ((((!((map__220465 == null)))?((((map__220465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220465):map__220465);
var grid__$1 = map__220465__$1;
var rows__$1 = cljs.core.get.call(null,map__220465__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns__$1 = cljs.core.get.call(null,map__220465__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var row = cljs.core.rand_int.call(null,rows__$1);
var column = cljs.core.rand_int.call(null,columns__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null);
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220476 = output_checker220453_220471.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220476)){
var error__19135__auto___220477 = temp__4425__auto___220476;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"random-coord","random-coord",-980419436,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220477)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220450_220468,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220477], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220467,output_schema220450_220468,input_schema220451_220469,input_checker220452_220470,output_checker220453_220471))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.random_coord),schema.core.make_fn_schema.call(null,output_schema220450_220468,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220451_220469], null)));

var ufv___220495 = schema.utils.use_fn_validation;
var output_schema220478_220496 = snergly.grid.NonNegativeInt;
var input_schema220479_220497 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker220480_220498 = schema.core.checker.call(null,input_schema220479_220497);
var output_checker220481_220499 = schema.core.checker.call(null,output_schema220478_220496);
var ret__20577__auto___220500 = /**
 * Inputs: [{:keys [rows columns]}]
 *   Returns: NonNegativeInt
 */
snergly.grid.grid_size = ((function (ufv___220495,output_schema220478_220496,input_schema220479_220497,input_checker220480_220498,output_checker220481_220499){
return (function snergly$grid$grid_size(G__220482){
var validate__19133__auto__ = ufv___220495.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220501 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220482], null);
var temp__4425__auto___220502 = input_checker220480_220498.call(null,args__19134__auto___220501);
if(cljs.core.truth_(temp__4425__auto___220502)){
var error__19135__auto___220503 = temp__4425__auto___220502;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-size","grid-size",-515955625,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220503)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220479_220497,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220501,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220503], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var G__220490 = G__220482;
var map__220491 = G__220490;
var map__220491__$1 = ((((!((map__220491 == null)))?((((map__220491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220491):map__220491);
var rows = cljs.core.get.call(null,map__220491__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__220491__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var G__220490__$1 = G__220490;
while(true){
var map__220493 = G__220490__$1;
var map__220493__$1 = ((((!((map__220493 == null)))?((((map__220493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220493):map__220493);
var rows__$1 = cljs.core.get.call(null,map__220493__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns__$1 = cljs.core.get.call(null,map__220493__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
return (rows__$1 * columns__$1);
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220504 = output_checker220481_220499.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220504)){
var error__19135__auto___220505 = temp__4425__auto___220504;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-size","grid-size",-515955625,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"NonNegativeInt","NonNegativeInt",193845872,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220505)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220478_220496,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220505], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220495,output_schema220478_220496,input_schema220479_220497,input_checker220480_220498,output_checker220481_220499))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_size),schema.core.make_fn_schema.call(null,output_schema220478_220496,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220479_220497], null)));

var ufv___220563 = schema.utils.use_fn_validation;
var output_schema220506_220564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.CellPosition], null)], null);
var input_schema220507_220565 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker220508_220566 = schema.core.checker.call(null,input_schema220507_220565);
var output_checker220509_220567 = schema.core.checker.call(null,output_schema220506_220564);
var ret__20577__auto___220568 = /**
 * Inputs: [{:keys [rows columns]}]
 *   Returns: [[CellPosition]]
 */
snergly.grid.grid_row_coords = ((function (ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567){
return (function snergly$grid$grid_row_coords(G__220510){
var validate__19133__auto__ = ufv___220563.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220569 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220510], null);
var temp__4425__auto___220570 = input_checker220508_220566.call(null,args__19134__auto___220569);
if(cljs.core.truth_(temp__4425__auto___220570)){
var error__19135__auto___220571 = temp__4425__auto___220570;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-row-coords","grid-row-coords",-1454155162,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220571)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220507_220565,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220569,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220571], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var G__220538 = G__220510;
var map__220539 = G__220538;
var map__220539__$1 = ((((!((map__220539 == null)))?((((map__220539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220539):map__220539);
var rows = cljs.core.get.call(null,map__220539__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__220539__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var G__220538__$1 = G__220538;
while(true){
var map__220541 = G__220538__$1;
var map__220541__$1 = ((((!((map__220541 == null)))?((((map__220541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220541):map__220541);
var rows__$1 = cljs.core.get.call(null,map__220541__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns__$1 = cljs.core.get.call(null,map__220541__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));

var iter__17606__auto__ = ((function (map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567){
return (function snergly$grid$grid_row_coords_$_iter__220543(s__220544){
return (new cljs.core.LazySeq(null,((function (map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567){
return (function (){
var s__220544__$1 = s__220544;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__220544__$1);
if(temp__4425__auto__){
var s__220544__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__220544__$2)){
var c__17604__auto__ = cljs.core.chunk_first.call(null,s__220544__$2);
var size__17605__auto__ = cljs.core.count.call(null,c__17604__auto__);
var b__220546 = cljs.core.chunk_buffer.call(null,size__17605__auto__);
if((function (){var i__220545 = (0);
while(true){
if((i__220545 < size__17605__auto__)){
var row = cljs.core._nth.call(null,c__17604__auto__,i__220545);
cljs.core.chunk_append.call(null,b__220546,(function (){var iter__17606__auto__ = ((function (i__220545,row,c__17604__auto__,size__17605__auto__,b__220546,s__220544__$2,temp__4425__auto__,map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567){
return (function snergly$grid$grid_row_coords_$_iter__220543_$_iter__220555(s__220556){
return (new cljs.core.LazySeq(null,((function (i__220545,row,c__17604__auto__,size__17605__auto__,b__220546,s__220544__$2,temp__4425__auto__,map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567){
return (function (){
var s__220556__$1 = s__220556;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__220556__$1);
if(temp__4425__auto____$1){
var s__220556__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__220556__$2)){
var c__17604__auto____$1 = cljs.core.chunk_first.call(null,s__220556__$2);
var size__17605__auto____$1 = cljs.core.count.call(null,c__17604__auto____$1);
var b__220558 = cljs.core.chunk_buffer.call(null,size__17605__auto____$1);
if((function (){var i__220557 = (0);
while(true){
if((i__220557 < size__17605__auto____$1)){
var column = cljs.core._nth.call(null,c__17604__auto____$1,i__220557);
cljs.core.chunk_append.call(null,b__220558,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null));

var G__220572 = (i__220557 + (1));
i__220557 = G__220572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220558),snergly$grid$grid_row_coords_$_iter__220543_$_iter__220555.call(null,cljs.core.chunk_rest.call(null,s__220556__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220558),null);
}
} else {
var column = cljs.core.first.call(null,s__220556__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null),snergly$grid$grid_row_coords_$_iter__220543_$_iter__220555.call(null,cljs.core.rest.call(null,s__220556__$2)));
}
} else {
return null;
}
break;
}
});})(i__220545,row,c__17604__auto__,size__17605__auto__,b__220546,s__220544__$2,temp__4425__auto__,map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567))
,null,null));
});})(i__220545,row,c__17604__auto__,size__17605__auto__,b__220546,s__220544__$2,temp__4425__auto__,map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567))
;
return iter__17606__auto__.call(null,cljs.core.range.call(null,columns__$1));
})());

var G__220573 = (i__220545 + (1));
i__220545 = G__220573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220546),snergly$grid$grid_row_coords_$_iter__220543.call(null,cljs.core.chunk_rest.call(null,s__220544__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220546),null);
}
} else {
var row = cljs.core.first.call(null,s__220544__$2);
return cljs.core.cons.call(null,(function (){var iter__17606__auto__ = ((function (row,s__220544__$2,temp__4425__auto__,map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567){
return (function snergly$grid$grid_row_coords_$_iter__220543_$_iter__220559(s__220560){
return (new cljs.core.LazySeq(null,((function (row,s__220544__$2,temp__4425__auto__,map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567){
return (function (){
var s__220560__$1 = s__220560;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__220560__$1);
if(temp__4425__auto____$1){
var s__220560__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__220560__$2)){
var c__17604__auto__ = cljs.core.chunk_first.call(null,s__220560__$2);
var size__17605__auto__ = cljs.core.count.call(null,c__17604__auto__);
var b__220562 = cljs.core.chunk_buffer.call(null,size__17605__auto__);
if((function (){var i__220561 = (0);
while(true){
if((i__220561 < size__17605__auto__)){
var column = cljs.core._nth.call(null,c__17604__auto__,i__220561);
cljs.core.chunk_append.call(null,b__220562,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null));

var G__220574 = (i__220561 + (1));
i__220561 = G__220574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220562),snergly$grid$grid_row_coords_$_iter__220543_$_iter__220559.call(null,cljs.core.chunk_rest.call(null,s__220560__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220562),null);
}
} else {
var column = cljs.core.first.call(null,s__220560__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null),snergly$grid$grid_row_coords_$_iter__220543_$_iter__220559.call(null,cljs.core.rest.call(null,s__220560__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__220544__$2,temp__4425__auto__,map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567))
,null,null));
});})(row,s__220544__$2,temp__4425__auto__,map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567))
;
return iter__17606__auto__.call(null,cljs.core.range.call(null,columns__$1));
})(),snergly$grid$grid_row_coords_$_iter__220543.call(null,cljs.core.rest.call(null,s__220544__$2)));
}
} else {
return null;
}
break;
}
});})(map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567))
,null,null));
});})(map__220541,map__220541__$1,rows__$1,columns__$1,G__220538,map__220539,map__220539__$1,rows,columns,validate__19133__auto__,ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567))
;
return iter__17606__auto__.call(null,cljs.core.range.call(null,rows__$1));
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220575 = output_checker220509_220567.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220575)){
var error__19135__auto___220576 = temp__4425__auto___220575;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-row-coords","grid-row-coords",-1454155162,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220576)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220506_220564,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220576], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220563,output_schema220506_220564,input_schema220507_220565,input_checker220508_220566,output_checker220509_220567))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_row_coords),schema.core.make_fn_schema.call(null,output_schema220506_220564,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220507_220565], null)));

var ufv___220606 = schema.utils.use_fn_validation;
var output_schema220577_220607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.CellPosition], null);
var input_schema220578_220608 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker220579_220609 = schema.core.checker.call(null,input_schema220578_220608);
var output_checker220580_220610 = schema.core.checker.call(null,output_schema220577_220607);
var ret__20577__auto___220611 = /**
 * Inputs: [{:keys [rows columns]}]
 *   Returns: [CellPosition]
 */
snergly.grid.grid_coords = ((function (ufv___220606,output_schema220577_220607,input_schema220578_220608,input_checker220579_220609,output_checker220580_220610){
return (function snergly$grid$grid_coords(G__220581){
var validate__19133__auto__ = ufv___220606.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220612 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220581], null);
var temp__4425__auto___220613 = input_checker220579_220609.call(null,args__19134__auto___220612);
if(cljs.core.truth_(temp__4425__auto___220613)){
var error__19135__auto___220614 = temp__4425__auto___220613;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-coords","grid-coords",2016734967,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220614)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220578_220608,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220612,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220614], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var G__220595 = G__220581;
var map__220596 = G__220595;
var map__220596__$1 = ((((!((map__220596 == null)))?((((map__220596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220596):map__220596);
var rows = cljs.core.get.call(null,map__220596__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__220596__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var G__220595__$1 = G__220595;
while(true){
var map__220598 = G__220595__$1;
var map__220598__$1 = ((((!((map__220598 == null)))?((((map__220598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220598):map__220598);
var rows__$1 = cljs.core.get.call(null,map__220598__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns__$1 = cljs.core.get.call(null,map__220598__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var iter__17606__auto__ = ((function (map__220598,map__220598__$1,rows__$1,columns__$1,G__220595,map__220596,map__220596__$1,rows,columns,validate__19133__auto__,ufv___220606,output_schema220577_220607,input_schema220578_220608,input_checker220579_220609,output_checker220580_220610){
return (function snergly$grid$grid_coords_$_iter__220600(s__220601){
return (new cljs.core.LazySeq(null,((function (map__220598,map__220598__$1,rows__$1,columns__$1,G__220595,map__220596,map__220596__$1,rows,columns,validate__19133__auto__,ufv___220606,output_schema220577_220607,input_schema220578_220608,input_checker220579_220609,output_checker220580_220610){
return (function (){
var s__220601__$1 = s__220601;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__220601__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var row = cljs.core.first.call(null,xs__4977__auto__);
var iterys__17602__auto__ = ((function (s__220601__$1,row,xs__4977__auto__,temp__4425__auto__,map__220598,map__220598__$1,rows__$1,columns__$1,G__220595,map__220596,map__220596__$1,rows,columns,validate__19133__auto__,ufv___220606,output_schema220577_220607,input_schema220578_220608,input_checker220579_220609,output_checker220580_220610){
return (function snergly$grid$grid_coords_$_iter__220600_$_iter__220602(s__220603){
return (new cljs.core.LazySeq(null,((function (s__220601__$1,row,xs__4977__auto__,temp__4425__auto__,map__220598,map__220598__$1,rows__$1,columns__$1,G__220595,map__220596,map__220596__$1,rows,columns,validate__19133__auto__,ufv___220606,output_schema220577_220607,input_schema220578_220608,input_checker220579_220609,output_checker220580_220610){
return (function (){
var s__220603__$1 = s__220603;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__220603__$1);
if(temp__4425__auto____$1){
var s__220603__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__220603__$2)){
var c__17604__auto__ = cljs.core.chunk_first.call(null,s__220603__$2);
var size__17605__auto__ = cljs.core.count.call(null,c__17604__auto__);
var b__220605 = cljs.core.chunk_buffer.call(null,size__17605__auto__);
if((function (){var i__220604 = (0);
while(true){
if((i__220604 < size__17605__auto__)){
var column = cljs.core._nth.call(null,c__17604__auto__,i__220604);
cljs.core.chunk_append.call(null,b__220605,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null));

var G__220615 = (i__220604 + (1));
i__220604 = G__220615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220605),snergly$grid$grid_coords_$_iter__220600_$_iter__220602.call(null,cljs.core.chunk_rest.call(null,s__220603__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220605),null);
}
} else {
var column = cljs.core.first.call(null,s__220603__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,column], null),snergly$grid$grid_coords_$_iter__220600_$_iter__220602.call(null,cljs.core.rest.call(null,s__220603__$2)));
}
} else {
return null;
}
break;
}
});})(s__220601__$1,row,xs__4977__auto__,temp__4425__auto__,map__220598,map__220598__$1,rows__$1,columns__$1,G__220595,map__220596,map__220596__$1,rows,columns,validate__19133__auto__,ufv___220606,output_schema220577_220607,input_schema220578_220608,input_checker220579_220609,output_checker220580_220610))
,null,null));
});})(s__220601__$1,row,xs__4977__auto__,temp__4425__auto__,map__220598,map__220598__$1,rows__$1,columns__$1,G__220595,map__220596,map__220596__$1,rows,columns,validate__19133__auto__,ufv___220606,output_schema220577_220607,input_schema220578_220608,input_checker220579_220609,output_checker220580_220610))
;
var fs__17603__auto__ = cljs.core.seq.call(null,iterys__17602__auto__.call(null,cljs.core.range.call(null,columns__$1)));
if(fs__17603__auto__){
return cljs.core.concat.call(null,fs__17603__auto__,snergly$grid$grid_coords_$_iter__220600.call(null,cljs.core.rest.call(null,s__220601__$1)));
} else {
var G__220616 = cljs.core.rest.call(null,s__220601__$1);
s__220601__$1 = G__220616;
continue;
}
} else {
return null;
}
break;
}
});})(map__220598,map__220598__$1,rows__$1,columns__$1,G__220595,map__220596,map__220596__$1,rows,columns,validate__19133__auto__,ufv___220606,output_schema220577_220607,input_schema220578_220608,input_checker220579_220609,output_checker220580_220610))
,null,null));
});})(map__220598,map__220598__$1,rows__$1,columns__$1,G__220595,map__220596,map__220596__$1,rows,columns,validate__19133__auto__,ufv___220606,output_schema220577_220607,input_schema220578_220608,input_checker220579_220609,output_checker220580_220610))
;
return iter__17606__auto__.call(null,cljs.core.range.call(null,rows__$1));
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220617 = output_checker220580_220610.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220617)){
var error__19135__auto___220618 = temp__4425__auto___220617;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-coords","grid-coords",2016734967,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220618)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220577_220607,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220618], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220606,output_schema220577_220607,input_schema220578_220608,input_checker220579_220609,output_checker220580_220610))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_coords),schema.core.make_fn_schema.call(null,output_schema220577_220607,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220578_220608], null)));

var ufv___220626 = schema.utils.use_fn_validation;
var output_schema220621_220627 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.Cell], null);
var input_schema220622_220628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker220623_220629 = schema.core.checker.call(null,input_schema220622_220628);
var output_checker220624_220630 = schema.core.checker.call(null,output_schema220621_220627);
var ret__20577__auto___220631 = /**
 * Inputs: [grid]
 *   Returns: [Cell]
 */
snergly.grid.grid_deadends = ((function (ufv___220626,output_schema220621_220627,input_schema220622_220628,input_checker220623_220629,output_checker220624_220630){
return (function snergly$grid$grid_deadends(G__220625){
var validate__19133__auto__ = ufv___220626.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220632 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220625], null);
var temp__4425__auto___220633 = input_checker220623_220629.call(null,args__19134__auto___220632);
if(cljs.core.truth_(temp__4425__auto___220633)){
var error__19135__auto___220634 = temp__4425__auto___220633;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-deadends","grid-deadends",-1972069924,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220634)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220622_220628,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220632,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220634], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__220625;
while(true){
return cljs.core.filter.call(null,((function (validate__19133__auto__,ufv___220626,output_schema220621_220627,input_schema220622_220628,input_checker220623_220629,output_checker220624_220630){
return (function (p1__220619_SHARP_){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(p1__220619_SHARP_)));
});})(validate__19133__auto__,ufv___220626,output_schema220621_220627,input_schema220622_220628,input_checker220623_220629,output_checker220624_220630))
,cljs.core.map.call(null,((function (validate__19133__auto__,ufv___220626,output_schema220621_220627,input_schema220622_220628,input_checker220623_220629,output_checker220624_220630){
return (function (p1__220620_SHARP_){
return snergly.grid.grid_cell.call(null,grid,p1__220620_SHARP_);
});})(validate__19133__auto__,ufv___220626,output_schema220621_220627,input_schema220622_220628,input_checker220623_220629,output_checker220624_220630))
,snergly.grid.grid_coords.call(null,grid)));
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220635 = output_checker220624_220630.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220635)){
var error__19135__auto___220636 = temp__4425__auto___220635;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-deadends","grid-deadends",-1972069924,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"Cell","Cell",1694176314,null)], null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220636)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220621_220627,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220636], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220626,output_schema220621_220627,input_schema220622_220628,input_checker220623_220629,output_checker220624_220630))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_deadends),schema.core.make_fn_schema.call(null,output_schema220621_220627,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220622_220628], null)));

var ufv___220642 = schema.utils.use_fn_validation;
var output_schema220637_220643 = snergly.grid.Grid;
var input_schema220638_220644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)))], null);
var input_checker220639_220645 = schema.core.checker.call(null,input_schema220638_220644);
var output_checker220640_220646 = schema.core.checker.call(null,output_schema220637_220643);
var ret__20577__auto___220647 = /**
 * Inputs: [grid :- Grid]
 *   Returns: Grid
 */
snergly.grid.begin_step = ((function (ufv___220642,output_schema220637_220643,input_schema220638_220644,input_checker220639_220645,output_checker220640_220646){
return (function snergly$grid$begin_step(G__220641){
var validate__19133__auto__ = ufv___220642.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220641], null);
var temp__4425__auto___220649 = input_checker220639_220645.call(null,args__19134__auto___220648);
if(cljs.core.truth_(temp__4425__auto___220649)){
var error__19135__auto___220650 = temp__4425__auto___220649;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"begin-step","begin-step",1347833413,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220650)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220638_220644,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220648,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220650], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__220641;
while(true){
return cljs.core.assoc.call(null,grid,new cljs.core.Keyword(null,"changed-cells","changed-cells",2102894501),cljs.core.PersistentHashSet.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220651 = output_checker220640_220646.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220651)){
var error__19135__auto___220652 = temp__4425__auto___220651;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"begin-step","begin-step",1347833413,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220652)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220637_220643,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220652], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220642,output_schema220637_220643,input_schema220638_220644,input_checker220639_220645,output_checker220640_220646))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.begin_step),schema.core.make_fn_schema.call(null,output_schema220637_220643,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220638_220644], null)));

var ufv___220658 = schema.utils.use_fn_validation;
var output_schema220653_220659 = schema.core.Any;
var input_schema220654_220660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)))], null);
var input_checker220655_220661 = schema.core.checker.call(null,input_schema220654_220660);
var output_checker220656_220662 = schema.core.checker.call(null,output_schema220653_220659);
var ret__20577__auto___220663 = /**
 * Inputs: [grid :- Grid]
 */
snergly.grid.new_QMARK_ = ((function (ufv___220658,output_schema220653_220659,input_schema220654_220660,input_checker220655_220661,output_checker220656_220662){
return (function snergly$grid$new_QMARK_(G__220657){
var validate__19133__auto__ = ufv___220658.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220664 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220657], null);
var temp__4425__auto___220665 = input_checker220655_220661.call(null,args__19134__auto___220664);
if(cljs.core.truth_(temp__4425__auto___220665)){
var error__19135__auto___220666 = temp__4425__auto___220665;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"new?","new?",-1876477212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220666)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220654_220660,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220664,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220666], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__220657;
while(true){
return (new cljs.core.Keyword(null,"changed-cells","changed-cells",2102894501).cljs$core$IFn$_invoke$arity$1(grid) == null);
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220667 = output_checker220656_220662.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220667)){
var error__19135__auto___220668 = temp__4425__auto___220667;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"new?","new?",-1876477212,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220668)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220653_220659,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220668], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220658,output_schema220653_220659,input_schema220654_220660,input_checker220655_220661,output_checker220656_220662))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.new_QMARK_),schema.core.make_fn_schema.call(null,output_schema220653_220659,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220654_220660], null)));

var ufv___220674 = schema.utils.use_fn_validation;
var output_schema220669_220675 = schema.core.Any;
var input_schema220670_220676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)))], null);
var input_checker220671_220677 = schema.core.checker.call(null,input_schema220670_220676);
var output_checker220672_220678 = schema.core.checker.call(null,output_schema220669_220675);
var ret__20577__auto___220679 = /**
 * Inputs: [grid :- Grid]
 */
snergly.grid.changed_QMARK_ = ((function (ufv___220674,output_schema220669_220675,input_schema220670_220676,input_checker220671_220677,output_checker220672_220678){
return (function snergly$grid$changed_QMARK_(G__220673){
var validate__19133__auto__ = ufv___220674.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220680 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220673], null);
var temp__4425__auto___220681 = input_checker220671_220677.call(null,args__19134__auto___220680);
if(cljs.core.truth_(temp__4425__auto___220681)){
var error__19135__auto___220682 = temp__4425__auto___220681;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"changed?","changed?",1202703197,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220682)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220670_220676,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220680,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220682], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__220673;
while(true){
var or__16834__auto__ = snergly.grid.new_QMARK_.call(null,grid);
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
return cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"changed-cells","changed-cells",2102894501).cljs$core$IFn$_invoke$arity$1(grid));
}
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220683 = output_checker220672_220678.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220683)){
var error__19135__auto___220684 = temp__4425__auto___220683;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"changed?","changed?",1202703197,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220684)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220669_220675,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220684], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220674,output_schema220669_220675,input_schema220670_220676,input_checker220671_220677,output_checker220672_220678))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.changed_QMARK_),schema.core.make_fn_schema.call(null,output_schema220669_220675,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220670_220676], null)));

var ufv___220716 = schema.utils.use_fn_validation;
var output_schema220685_220717 = snergly.grid.Grid;
var input_schema220686_220718 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,snergly.grid.Cell,new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)),schema.core.one.call(null,snergly.grid.CellPosition,cljs.core.with_meta(new cljs.core.Symbol(null,"neighbor-coord","neighbor-coord",-81881392,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CellPosition","CellPosition",-1655973427,null)], null)))], null);
var input_checker220687_220719 = schema.core.checker.call(null,input_schema220686_220718);
var output_checker220688_220720 = schema.core.checker.call(null,output_schema220685_220717);
var ret__20577__auto___220721 = /**
 * Inputs: [{:keys [cells changed-cells], :as grid} :- Grid {cell-coord :coord, cell-links :links, :as cell} :- Cell neighbor-coord :- CellPosition]
 *   Returns: Grid
 */
snergly.grid.link_cells = ((function (ufv___220716,output_schema220685_220717,input_schema220686_220718,input_checker220687_220719,output_checker220688_220720){
return (function snergly$grid$link_cells(G__220689,G__220690,G__220691){
var validate__19133__auto__ = ufv___220716.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220722 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220689,G__220690,G__220691], null);
var temp__4425__auto___220723 = input_checker220687_220719.call(null,args__19134__auto___220722);
if(cljs.core.truth_(temp__4425__auto___220723)){
var error__19135__auto___220724 = temp__4425__auto___220723;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"link-cells","link-cells",142773653,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220724)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220686_220718,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220722,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220724], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var G__220706 = G__220689;
var map__220708 = G__220706;
var map__220708__$1 = ((((!((map__220708 == null)))?((((map__220708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220708):map__220708);
var grid = map__220708__$1;
var cells = cljs.core.get.call(null,map__220708__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var changed_cells = cljs.core.get.call(null,map__220708__$1,new cljs.core.Keyword(null,"changed-cells","changed-cells",2102894501));
var G__220707 = G__220690;
var map__220709 = G__220707;
var map__220709__$1 = ((((!((map__220709 == null)))?((((map__220709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220709):map__220709);
var cell = map__220709__$1;
var cell_coord = cljs.core.get.call(null,map__220709__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var cell_links = cljs.core.get.call(null,map__220709__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var neighbor_coord = G__220691;
var G__220706__$1 = G__220706;
var G__220707__$1 = G__220707;
var neighbor_coord__$1 = neighbor_coord;
while(true){
var map__220712 = G__220706__$1;
var map__220712__$1 = ((((!((map__220712 == null)))?((((map__220712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220712):map__220712);
var grid__$1 = map__220712__$1;
var cells__$1 = cljs.core.get.call(null,map__220712__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var changed_cells__$1 = cljs.core.get.call(null,map__220712__$1,new cljs.core.Keyword(null,"changed-cells","changed-cells",2102894501));
var map__220713 = G__220707__$1;
var map__220713__$1 = ((((!((map__220713 == null)))?((((map__220713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220713):map__220713);
var cell__$1 = map__220713__$1;
var cell_coord__$1 = cljs.core.get.call(null,map__220713__$1,new cljs.core.Keyword(null,"coord","coord",-1453656639));
var cell_links__$1 = cljs.core.get.call(null,map__220713__$1,new cljs.core.Keyword(null,"links","links",-654507394));
var neighbor_coord__$2 = neighbor_coord__$1;
var neighbor = snergly.grid.grid_cell.call(null,grid__$1,neighbor_coord__$2);
var neighbor_links = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(neighbor);
return cljs.core.assoc.call(null,grid__$1,new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.assoc.call(null,cells__$1,snergly.grid.cell_index.call(null,grid__$1,cell_coord__$1),cljs.core.assoc.call(null,cell__$1,new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.conj.call(null,cell_links__$1,neighbor_coord__$2)),snergly.grid.cell_index.call(null,grid__$1,neighbor_coord__$2),cljs.core.assoc.call(null,neighbor,new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.conj.call(null,neighbor_links,cell_coord__$1))),new cljs.core.Keyword(null,"changed-cells","changed-cells",2102894501),cljs.core.conj.call(null,changed_cells__$1,cell_coord__$1,neighbor_coord__$2));
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220725 = output_checker220688_220720.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220725)){
var error__19135__auto___220726 = temp__4425__auto___220725;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"link-cells","link-cells",142773653,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220726)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220685_220717,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220726], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220716,output_schema220685_220717,input_schema220686_220718,input_checker220687_220719,output_checker220688_220720))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.link_cells),schema.core.make_fn_schema.call(null,output_schema220685_220717,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220686_220718], null)));

snergly.grid.linked_QMARK_ = (function snergly$grid$linked_QMARK_(cell,other_cell_coord){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cell),other_cell_coord);
});
var ufv___220733 = schema.utils.use_fn_validation;
var output_schema220727_220734 = snergly.grid.Distances;
var input_schema220728_220735 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"value-xform","value-xform",-1473624567,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,snergly.grid.Distances,cljs.core.with_meta(new cljs.core.Symbol(null,"value-map","value-map",-68641365,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Distances","Distances",-992107672,null)], null)))], null);
var input_checker220729_220736 = schema.core.checker.call(null,input_schema220728_220735);
var output_checker220730_220737 = schema.core.checker.call(null,output_schema220727_220734);
var ret__20577__auto___220738 = /**
 * Inputs: [value-xform value-map :- Distances]
 *   Returns: Distances
 */
snergly.grid.xform_values = ((function (ufv___220733,output_schema220727_220734,input_schema220728_220735,input_checker220729_220736,output_checker220730_220737){
return (function snergly$grid$xform_values(G__220731,G__220732){
var validate__19133__auto__ = ufv___220733.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220731,G__220732], null);
var temp__4425__auto___220740 = input_checker220729_220736.call(null,args__19134__auto___220739);
if(cljs.core.truth_(temp__4425__auto___220740)){
var error__19135__auto___220741 = temp__4425__auto___220740;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"xform-values","xform-values",-1389818983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Distances","Distances",-992107672,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220741)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220728_220735,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220739,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220741], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var value_xform = G__220731;
var value_map = G__220732;
while(true){

return cljs.core.reduce_kv.call(null,((function (validate__19133__auto__,ufv___220733,output_schema220727_220734,input_schema220728_220735,input_checker220729_220736,output_checker220730_220737){
return (function (m,k,v){
if(cljs.core.coll_QMARK_.call(null,k)){
return cljs.core.assoc.call(null,m,k,value_xform.call(null,v));
} else {
return m;
}
});})(validate__19133__auto__,ufv___220733,output_schema220727_220734,input_schema220728_220735,input_checker220729_220736,output_checker220730_220737))
,cljs.core.PersistentArrayMap.EMPTY,value_map);
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220742 = output_checker220730_220737.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220742)){
var error__19135__auto___220743 = temp__4425__auto___220742;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"xform-values","xform-values",-1389818983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Distances","Distances",-992107672,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220743)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220727_220734,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220743], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220733,output_schema220727_220734,input_schema220728_220735,input_checker220729_220736,output_checker220730_220737))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.xform_values),schema.core.make_fn_schema.call(null,output_schema220727_220734,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220728_220735], null)));

var ufv___220754 = schema.utils.use_fn_validation;
var output_schema220744_220755 = snergly.grid.Grid;
var input_schema220745_220756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null))),schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,snergly.grid.Distances], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"label-specs","label-specs",430934323,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol(null,"Distances","Distances",-992107672,null)], null)], null)))], null);
var input_checker220746_220757 = schema.core.checker.call(null,input_schema220745_220756);
var output_checker220747_220758 = schema.core.checker.call(null,output_schema220744_220755);
var ret__20577__auto___220759 = /**
 * Inputs: [grid :- Grid label-specs :- {s/Keyword Distances}]
 *   Returns: Grid
 */
snergly.grid.grid_annotate_cells = ((function (ufv___220754,output_schema220744_220755,input_schema220745_220756,input_checker220746_220757,output_checker220747_220758){
return (function snergly$grid$grid_annotate_cells(G__220748,G__220749){
var validate__19133__auto__ = ufv___220754.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___220760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__220748,G__220749], null);
var temp__4425__auto___220761 = input_checker220746_220757.call(null,args__19134__auto___220760);
if(cljs.core.truth_(temp__4425__auto___220761)){
var error__19135__auto___220762 = temp__4425__auto___220761;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-annotate-cells","grid-annotate-cells",1544958406,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220762)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema220745_220756,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___220760,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220762], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__220748;
var label_specs = G__220749;
while(true){
var specs = cljs.core.seq.call(null,label_specs);
var get_annotations = ((function (specs,validate__19133__auto__,ufv___220754,output_schema220744_220755,input_schema220745_220756,input_checker220746_220757,output_checker220747_220758){
return (function (cell_coord,p__220752){
var vec__220753 = p__220752;
var label = cljs.core.nth.call(null,vec__220753,(0),null);
var value_map = cljs.core.nth.call(null,vec__220753,(1),null);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[label,value_map.call(null,cell_coord)],null));
});})(specs,validate__19133__auto__,ufv___220754,output_schema220744_220755,input_schema220745_220756,input_checker220746_220757,output_checker220747_220758))
;
var assoc_cell = ((function (specs,get_annotations,validate__19133__auto__,ufv___220754,output_schema220744_220755,input_schema220745_220756,input_checker220746_220757,output_checker220747_220758){
return (function (cell,cell_coord){
return cljs.core.apply.call(null,cljs.core.assoc,cell,cljs.core.mapcat.call(null,cljs.core.partial.call(null,get_annotations,cell_coord),specs));
});})(specs,get_annotations,validate__19133__auto__,ufv___220754,output_schema220744_220755,input_schema220745_220756,input_checker220746_220757,output_checker220747_220758))
;
var annotate_cell = ((function (specs,get_annotations,assoc_cell,validate__19133__auto__,ufv___220754,output_schema220744_220755,input_schema220745_220756,input_checker220746_220757,output_checker220747_220758){
return (function (grid__$1,cell_coord){
return cljs.core.update_in.call(null,grid__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),snergly.grid.cell_index.call(null,grid__$1,cell_coord)], null),assoc_cell,cell_coord);
});})(specs,get_annotations,assoc_cell,validate__19133__auto__,ufv___220754,output_schema220744_220755,input_schema220745_220756,input_checker220746_220757,output_checker220747_220758))
;
return cljs.core.reduce.call(null,annotate_cell,grid,snergly.grid.grid_coords.call(null,grid));
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___220763 = output_checker220747_220758.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___220763)){
var error__19135__auto___220764 = temp__4425__auto___220763;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"grid-annotate-cells","grid-annotate-cells",1544958406,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Grid","Grid",-593239492,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___220764)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema220744_220755,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___220764], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___220754,output_schema220744_220755,input_schema220745_220756,input_checker220746_220757,output_checker220747_220758))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.grid.grid_annotate_cells),schema.core.make_fn_schema.call(null,output_schema220744_220755,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema220745_220756], null)));

snergly.grid.intlabel = (function snergly$grid$intlabel(val){
return snergly.util.pad.call(null,(2)," ",[cljs.core.str(val)].join(''));
});
snergly.grid.print_grid = (function snergly$grid$print_grid(var_args){
var args220766 = [];
var len__17892__auto___220792 = arguments.length;
var i__17893__auto___220793 = (0);
while(true){
if((i__17893__auto___220793 < len__17892__auto___220792)){
args220766.push((arguments[i__17893__auto___220793]));

var G__220794 = (i__17893__auto___220793 + (1));
i__17893__auto___220793 = G__220794;
continue;
} else {
}
break;
}

var G__220768 = args220766.length;
switch (G__220768) {
case 1:
return snergly.grid.print_grid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return snergly.grid.print_grid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args220766.length)].join('')));

}
});

snergly.grid.print_grid.cljs$core$IFn$_invoke$arity$1 = (function (grid){
return snergly.grid.print_grid.call(null,grid,false);
});

snergly.grid.print_grid.cljs$core$IFn$_invoke$arity$2 = (function (p__220769,print_coords_QMARK_){
var map__220770 = p__220769;
var map__220770__$1 = ((((!((map__220770 == null)))?((((map__220770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__220770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__220770):map__220770);
var grid = map__220770__$1;
var columns = cljs.core.get.call(null,map__220770__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var resolve = cljs.core.partial.call(null,snergly.grid.grid_cell,grid);
if(cljs.core.truth_(print_coords_QMARK_)){
cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"   ",cljs.core.map.call(null,((function (resolve,map__220770,map__220770__$1,grid,columns){
return (function (p1__220765_SHARP_){
return [cljs.core.str(snergly.grid.intlabel.call(null,p1__220765_SHARP_)),cljs.core.str("  ")].join('');
});})(resolve,map__220770,map__220770__$1,grid,columns))
),cljs.core.range.call(null,columns)));

cljs.core.print.call(null,"  ");
} else {
}

cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"+",cljs.core.repeat.call(null,columns,"---+")));

var seq__220772 = cljs.core.seq.call(null,snergly.grid.grid_row_coords.call(null,grid));
var chunk__220773 = null;
var count__220774 = (0);
var i__220775 = (0);
while(true){
if((i__220775 < count__220774)){
var row = cljs.core._nth.call(null,chunk__220773,i__220775);
if(cljs.core.truth_(print_coords_QMARK_)){
cljs.core.print.call(null,snergly.grid.intlabel.call(null,cljs.core.ffirst.call(null,row)));
} else {
}

cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"|",(function (){var iter__17606__auto__ = ((function (seq__220772,chunk__220773,count__220774,i__220775,row,resolve,map__220770,map__220770__$1,grid,columns){
return (function snergly$grid$iter__220776(s__220777){
return (new cljs.core.LazySeq(null,((function (seq__220772,chunk__220773,count__220774,i__220775,row,resolve,map__220770,map__220770__$1,grid,columns){
return (function (){
var s__220777__$1 = s__220777;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__220777__$1);
if(temp__4425__auto__){
var s__220777__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__220777__$2)){
var c__17604__auto__ = cljs.core.chunk_first.call(null,s__220777__$2);
var size__17605__auto__ = cljs.core.count.call(null,c__17604__auto__);
var b__220779 = cljs.core.chunk_buffer.call(null,size__17605__auto__);
if((function (){var i__220778 = (0);
while(true){
if((i__220778 < size__17605__auto__)){
var cell = cljs.core._nth.call(null,c__17604__auto__,i__220778);
cljs.core.chunk_append.call(null,b__220779,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell))?[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell)),cljs.core.str(" ")].join(''):"   ")),cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell)))?" ":"|"))].join(''));

var G__220796 = (i__220778 + (1));
i__220778 = G__220796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220779),snergly$grid$iter__220776.call(null,cljs.core.chunk_rest.call(null,s__220777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220779),null);
}
} else {
var cell = cljs.core.first.call(null,s__220777__$2);
return cljs.core.cons.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell))?[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell)),cljs.core.str(" ")].join(''):"   ")),cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell)))?" ":"|"))].join(''),snergly$grid$iter__220776.call(null,cljs.core.rest.call(null,s__220777__$2)));
}
} else {
return null;
}
break;
}
});})(seq__220772,chunk__220773,count__220774,i__220775,row,resolve,map__220770,map__220770__$1,grid,columns))
,null,null));
});})(seq__220772,chunk__220773,count__220774,i__220775,row,resolve,map__220770,map__220770__$1,grid,columns))
;
return iter__17606__auto__.call(null,cljs.core.map.call(null,resolve,row));
})()));

if(cljs.core.truth_(print_coords_QMARK_)){
cljs.core.print.call(null,"  ");
} else {
}

cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"+",(function (){var iter__17606__auto__ = ((function (seq__220772,chunk__220773,count__220774,i__220775,row,resolve,map__220770,map__220770__$1,grid,columns){
return (function snergly$grid$iter__220780(s__220781){
return (new cljs.core.LazySeq(null,((function (seq__220772,chunk__220773,count__220774,i__220775,row,resolve,map__220770,map__220770__$1,grid,columns){
return (function (){
var s__220781__$1 = s__220781;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__220781__$1);
if(temp__4425__auto__){
var s__220781__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__220781__$2)){
var c__17604__auto__ = cljs.core.chunk_first.call(null,s__220781__$2);
var size__17605__auto__ = cljs.core.count.call(null,c__17604__auto__);
var b__220783 = cljs.core.chunk_buffer.call(null,size__17605__auto__);
if((function (){var i__220782 = (0);
while(true){
if((i__220782 < size__17605__auto__)){
var cell = cljs.core._nth.call(null,c__17604__auto__,i__220782);
cljs.core.chunk_append.call(null,b__220783,[cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"south","south",1586796293).cljs$core$IFn$_invoke$arity$1(cell)))?"   ":"---")),cljs.core.str("+")].join(''));

var G__220797 = (i__220782 + (1));
i__220782 = G__220797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220783),snergly$grid$iter__220780.call(null,cljs.core.chunk_rest.call(null,s__220781__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220783),null);
}
} else {
var cell = cljs.core.first.call(null,s__220781__$2);
return cljs.core.cons.call(null,[cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"south","south",1586796293).cljs$core$IFn$_invoke$arity$1(cell)))?"   ":"---")),cljs.core.str("+")].join(''),snergly$grid$iter__220780.call(null,cljs.core.rest.call(null,s__220781__$2)));
}
} else {
return null;
}
break;
}
});})(seq__220772,chunk__220773,count__220774,i__220775,row,resolve,map__220770,map__220770__$1,grid,columns))
,null,null));
});})(seq__220772,chunk__220773,count__220774,i__220775,row,resolve,map__220770,map__220770__$1,grid,columns))
;
return iter__17606__auto__.call(null,cljs.core.map.call(null,resolve,row));
})()));

var G__220798 = seq__220772;
var G__220799 = chunk__220773;
var G__220800 = count__220774;
var G__220801 = (i__220775 + (1));
seq__220772 = G__220798;
chunk__220773 = G__220799;
count__220774 = G__220800;
i__220775 = G__220801;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__220772);
if(temp__4425__auto__){
var seq__220772__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__220772__$1)){
var c__17637__auto__ = cljs.core.chunk_first.call(null,seq__220772__$1);
var G__220802 = cljs.core.chunk_rest.call(null,seq__220772__$1);
var G__220803 = c__17637__auto__;
var G__220804 = cljs.core.count.call(null,c__17637__auto__);
var G__220805 = (0);
seq__220772 = G__220802;
chunk__220773 = G__220803;
count__220774 = G__220804;
i__220775 = G__220805;
continue;
} else {
var row = cljs.core.first.call(null,seq__220772__$1);
if(cljs.core.truth_(print_coords_QMARK_)){
cljs.core.print.call(null,snergly.grid.intlabel.call(null,cljs.core.ffirst.call(null,row)));
} else {
}

cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"|",(function (){var iter__17606__auto__ = ((function (seq__220772,chunk__220773,count__220774,i__220775,row,seq__220772__$1,temp__4425__auto__,resolve,map__220770,map__220770__$1,grid,columns){
return (function snergly$grid$iter__220784(s__220785){
return (new cljs.core.LazySeq(null,((function (seq__220772,chunk__220773,count__220774,i__220775,row,seq__220772__$1,temp__4425__auto__,resolve,map__220770,map__220770__$1,grid,columns){
return (function (){
var s__220785__$1 = s__220785;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__220785__$1);
if(temp__4425__auto____$1){
var s__220785__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__220785__$2)){
var c__17604__auto__ = cljs.core.chunk_first.call(null,s__220785__$2);
var size__17605__auto__ = cljs.core.count.call(null,c__17604__auto__);
var b__220787 = cljs.core.chunk_buffer.call(null,size__17605__auto__);
if((function (){var i__220786 = (0);
while(true){
if((i__220786 < size__17605__auto__)){
var cell = cljs.core._nth.call(null,c__17604__auto__,i__220786);
cljs.core.chunk_append.call(null,b__220787,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell))?[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell)),cljs.core.str(" ")].join(''):"   ")),cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell)))?" ":"|"))].join(''));

var G__220806 = (i__220786 + (1));
i__220786 = G__220806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220787),snergly$grid$iter__220784.call(null,cljs.core.chunk_rest.call(null,s__220785__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220787),null);
}
} else {
var cell = cljs.core.first.call(null,s__220785__$2);
return cljs.core.cons.call(null,[cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell))?[cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cell)),cljs.core.str(" ")].join(''):"   ")),cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell)))?" ":"|"))].join(''),snergly$grid$iter__220784.call(null,cljs.core.rest.call(null,s__220785__$2)));
}
} else {
return null;
}
break;
}
});})(seq__220772,chunk__220773,count__220774,i__220775,row,seq__220772__$1,temp__4425__auto__,resolve,map__220770,map__220770__$1,grid,columns))
,null,null));
});})(seq__220772,chunk__220773,count__220774,i__220775,row,seq__220772__$1,temp__4425__auto__,resolve,map__220770,map__220770__$1,grid,columns))
;
return iter__17606__auto__.call(null,cljs.core.map.call(null,resolve,row));
})()));

if(cljs.core.truth_(print_coords_QMARK_)){
cljs.core.print.call(null,"  ");
} else {
}

cljs.core.println.call(null,cljs.core.apply.call(null,cljs.core.str,"+",(function (){var iter__17606__auto__ = ((function (seq__220772,chunk__220773,count__220774,i__220775,row,seq__220772__$1,temp__4425__auto__,resolve,map__220770,map__220770__$1,grid,columns){
return (function snergly$grid$iter__220788(s__220789){
return (new cljs.core.LazySeq(null,((function (seq__220772,chunk__220773,count__220774,i__220775,row,seq__220772__$1,temp__4425__auto__,resolve,map__220770,map__220770__$1,grid,columns){
return (function (){
var s__220789__$1 = s__220789;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__220789__$1);
if(temp__4425__auto____$1){
var s__220789__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__220789__$2)){
var c__17604__auto__ = cljs.core.chunk_first.call(null,s__220789__$2);
var size__17605__auto__ = cljs.core.count.call(null,c__17604__auto__);
var b__220791 = cljs.core.chunk_buffer.call(null,size__17605__auto__);
if((function (){var i__220790 = (0);
while(true){
if((i__220790 < size__17605__auto__)){
var cell = cljs.core._nth.call(null,c__17604__auto__,i__220790);
cljs.core.chunk_append.call(null,b__220791,[cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"south","south",1586796293).cljs$core$IFn$_invoke$arity$1(cell)))?"   ":"---")),cljs.core.str("+")].join(''));

var G__220807 = (i__220790 + (1));
i__220790 = G__220807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220791),snergly$grid$iter__220788.call(null,cljs.core.chunk_rest.call(null,s__220789__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__220791),null);
}
} else {
var cell = cljs.core.first.call(null,s__220789__$2);
return cljs.core.cons.call(null,[cljs.core.str((cljs.core.truth_(snergly.grid.linked_QMARK_.call(null,cell,new cljs.core.Keyword(null,"south","south",1586796293).cljs$core$IFn$_invoke$arity$1(cell)))?"   ":"---")),cljs.core.str("+")].join(''),snergly$grid$iter__220788.call(null,cljs.core.rest.call(null,s__220789__$2)));
}
} else {
return null;
}
break;
}
});})(seq__220772,chunk__220773,count__220774,i__220775,row,seq__220772__$1,temp__4425__auto__,resolve,map__220770,map__220770__$1,grid,columns))
,null,null));
});})(seq__220772,chunk__220773,count__220774,i__220775,row,seq__220772__$1,temp__4425__auto__,resolve,map__220770,map__220770__$1,grid,columns))
;
return iter__17606__auto__.call(null,cljs.core.map.call(null,resolve,row));
})()));

var G__220808 = cljs.core.next.call(null,seq__220772__$1);
var G__220809 = null;
var G__220810 = (0);
var G__220811 = (0);
seq__220772 = G__220808;
chunk__220773 = G__220809;
count__220774 = G__220810;
i__220775 = G__220811;
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