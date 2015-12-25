// Compiled by ClojureScript 1.7.170 {}
goog.provide('snergly.algorithms');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('snergly.grid');
goog.require('snergly.util');
snergly.algorithms.algorithms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["binary-tree",null,"sidewinder",null,"hunt-and-kill",null,"aldous-broder",null,"wilsons",null], null), null);
snergly.algorithms.cljs_index_of = (function snergly$algorithms$cljs_index_of(s,val){
var G__19563 = s;
var vec__19564 = G__19563;
var elem = cljs.core.nth.call(null,vec__19564,(0),null);
var s__$1 = cljs.core.nthnext.call(null,vec__19564,(1));
var val__$1 = val;
var i = (0);
var G__19563__$1 = G__19563;
var val__$2 = val__$1;
var i__$1 = i;
while(true){
var vec__19565 = G__19563__$1;
var elem__$1 = cljs.core.nth.call(null,vec__19565,(0),null);
var s__$2 = cljs.core.nthnext.call(null,vec__19565,(1));
var val__$3 = val__$2;
var i__$2 = i__$1;
if(cljs.core._EQ_.call(null,val__$3,elem__$1)){
return i__$2;
} else {
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return (-1);
} else {
var G__19566 = s__$2;
var G__19567 = val__$3;
var G__19568 = (i__$2 + (1));
G__19563__$1 = G__19566;
val__$2 = G__19567;
i__$1 = G__19568;
continue;

}
}
break;
}
});
snergly.algorithms.binary_tree_step = (function snergly$algorithms$binary_tree_step(grid,coord){
var cell = snergly.grid.grid_cell.call(null,grid,coord);
var neighbors = snergly.grid.cell_neighbors.call(null,cell,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"east","east",1189821678)], null));
if(cljs.core.empty_QMARK_.call(null,neighbors)){
return grid;
} else {
return snergly.grid.link_cells.call(null,grid,cell,cljs.core.rand_nth.call(null,neighbors));
}
});
var ufv___19574 = schema.utils.use_fn_validation;
var output_schema19569_19575 = snergly.grid.Grid;
var input_schema19570_19576 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)))], null);
var input_checker19571_19577 = schema.core.checker.call(null,input_schema19570_19576);
var output_checker19572_19578 = schema.core.checker.call(null,output_schema19569_19575);
var ret__19522__auto___19579 = /**
 * Inputs: [grid :- g/Grid]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_binary_tree = ((function (ufv___19574,output_schema19569_19575,input_schema19570_19576,input_checker19571_19577,output_checker19572_19578){
return (function snergly$algorithms$maze_binary_tree(G__19573){
var validate__18078__auto__ = ufv___19574.get_cell();
if(cljs.core.truth_(validate__18078__auto__)){
var args__18079__auto___19580 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19573], null);
var temp__4425__auto___19581 = input_checker19571_19577.call(null,args__18079__auto___19580);
if(cljs.core.truth_(temp__4425__auto___19581)){
var error__18080__auto___19582 = temp__4425__auto___19581;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-binary-tree","maze-binary-tree",164862777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19582)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19570_19576,new cljs.core.Keyword(null,"value","value",305978217),args__18079__auto___19580,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19582], null));
} else {
}
} else {
}

var o__18081__auto__ = (function (){var grid = G__19573;
while(true){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,snergly.algorithms.binary_tree_step,grid,snergly.grid.grid_coords.call(null,grid)),new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"binary-tree");
break;
}
})();
if(cljs.core.truth_(validate__18078__auto__)){
var temp__4425__auto___19583 = output_checker19572_19578.call(null,o__18081__auto__);
if(cljs.core.truth_(temp__4425__auto___19583)){
var error__18080__auto___19584 = temp__4425__auto___19583;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-binary-tree","maze-binary-tree",164862777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19584)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19569_19575,new cljs.core.Keyword(null,"value","value",305978217),o__18081__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19584], null));
} else {
}
} else {
}

return o__18081__auto__;
});})(ufv___19574,output_schema19569_19575,input_schema19570_19576,input_checker19571_19577,output_checker19572_19578))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_binary_tree),schema.core.make_fn_schema.call(null,output_schema19569_19575,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19570_19576], null)));

snergly.algorithms.sidewinder_end_run_QMARK_ = (function snergly$algorithms$sidewinder_end_run_QMARK_(cell){
var on_east_side_QMARK_ = cljs.core.not.call(null,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell));
var on_north_side_QMARK_ = cljs.core.not.call(null,new cljs.core.Keyword(null,"north","north",651323902).cljs$core$IFn$_invoke$arity$1(cell));
return (on_east_side_QMARK_) || ((!(on_north_side_QMARK_)) && (cljs.core._EQ_.call(null,(0),cljs.core.rand_int.call(null,(2)))));
});
snergly.algorithms.sidewinder_end_run = (function snergly$algorithms$sidewinder_end_run(grid,run){
var cell = snergly.grid.grid_cell.call(null,grid,cljs.core.rand_nth.call(null,run));
var north_neighbor = new cljs.core.Keyword(null,"north","north",651323902).cljs$core$IFn$_invoke$arity$1(cell);
if(cljs.core.truth_(north_neighbor)){
return snergly.grid.link_cells.call(null,grid,cell,north_neighbor);
} else {
return grid;
}
});
snergly.algorithms.sidewinder_step = (function snergly$algorithms$sidewinder_step(grid,coord,run){
var cell = snergly.grid.grid_cell.call(null,grid,coord);
var end_run_QMARK_ = snergly.algorithms.sidewinder_end_run_QMARK_.call(null,cell);
var new_grid = (cljs.core.truth_(end_run_QMARK_)?snergly.algorithms.sidewinder_end_run.call(null,grid,run):snergly.grid.link_cells.call(null,grid,cell,new cljs.core.Keyword(null,"east","east",1189821678).cljs$core$IFn$_invoke$arity$1(cell)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_grid,(cljs.core.truth_(end_run_QMARK_)?cljs.core.PersistentVector.EMPTY:run)], null);
});
var ufv___19600 = schema.utils.use_fn_validation;
var output_schema19585_19601 = snergly.grid.Grid;
var input_schema19586_19602 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)))], null);
var input_checker19587_19603 = schema.core.checker.call(null,input_schema19586_19602);
var output_checker19588_19604 = schema.core.checker.call(null,output_schema19585_19601);
var ret__19522__auto___19605 = /**
 * Inputs: [grid :- g/Grid]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_sidewinder = ((function (ufv___19600,output_schema19585_19601,input_schema19586_19602,input_checker19587_19603,output_checker19588_19604){
return (function snergly$algorithms$maze_sidewinder(G__19589){
var validate__18078__auto__ = ufv___19600.get_cell();
if(cljs.core.truth_(validate__18078__auto__)){
var args__18079__auto___19606 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19589], null);
var temp__4425__auto___19607 = input_checker19587_19603.call(null,args__18079__auto___19606);
if(cljs.core.truth_(temp__4425__auto___19607)){
var error__18080__auto___19608 = temp__4425__auto___19607;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-sidewinder","maze-sidewinder",-1531577113,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19608)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19586_19602,new cljs.core.Keyword(null,"value","value",305978217),args__18079__auto___19606,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19608], null));
} else {
}
} else {
}

var o__18081__auto__ = (function (){var grid = G__19589;
while(true){
var grid__$1 = grid;
var G__19596 = snergly.grid.grid_coords.call(null,grid__$1);
var vec__19597 = G__19596;
var coord = cljs.core.nth.call(null,vec__19597,(0),null);
var coords = cljs.core.nthnext.call(null,vec__19597,(1));
var current_run = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord], null);
var grid__$2 = grid__$1;
var G__19596__$1 = G__19596;
var current_run__$1 = current_run;
while(true){
var grid__$3 = grid__$2;
var vec__19598 = G__19596__$1;
var coord__$1 = cljs.core.nth.call(null,vec__19598,(0),null);
var coords__$1 = cljs.core.nthnext.call(null,vec__19598,(1));
var current_run__$2 = current_run__$1;
var vec__19599 = snergly.algorithms.sidewinder_step.call(null,grid__$3,coord__$1,current_run__$2);
var new_grid = cljs.core.nth.call(null,vec__19599,(0),null);
var processed_run = cljs.core.nth.call(null,vec__19599,(1),null);
if(cljs.core.empty_QMARK_.call(null,coords__$1)){
return cljs.core.assoc.call(null,new_grid,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"sidewinder");
} else {
var G__19609 = new_grid;
var G__19610 = coords__$1;
var G__19611 = cljs.core.conj.call(null,processed_run,cljs.core.first.call(null,coords__$1));
grid__$2 = G__19609;
G__19596__$1 = G__19610;
current_run__$1 = G__19611;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__18078__auto__)){
var temp__4425__auto___19612 = output_checker19588_19604.call(null,o__18081__auto__);
if(cljs.core.truth_(temp__4425__auto___19612)){
var error__18080__auto___19613 = temp__4425__auto___19612;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-sidewinder","maze-sidewinder",-1531577113,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19613)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19585_19601,new cljs.core.Keyword(null,"value","value",305978217),o__18081__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19613], null));
} else {
}
} else {
}

return o__18081__auto__;
});})(ufv___19600,output_schema19585_19601,input_schema19586_19602,input_checker19587_19603,output_checker19588_19604))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_sidewinder),schema.core.make_fn_schema.call(null,output_schema19585_19601,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19586_19602], null)));

var ufv___19619 = schema.utils.use_fn_validation;
var output_schema19614_19620 = snergly.grid.Grid;
var input_schema19615_19621 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)))], null);
var input_checker19616_19622 = schema.core.checker.call(null,input_schema19615_19621);
var output_checker19617_19623 = schema.core.checker.call(null,output_schema19614_19620);
var ret__19522__auto___19624 = /**
 * Inputs: [grid :- g/Grid]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_aldous_broder = ((function (ufv___19619,output_schema19614_19620,input_schema19615_19621,input_checker19616_19622,output_checker19617_19623){
return (function snergly$algorithms$maze_aldous_broder(G__19618){
var validate__18078__auto__ = ufv___19619.get_cell();
if(cljs.core.truth_(validate__18078__auto__)){
var args__18079__auto___19625 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19618], null);
var temp__4425__auto___19626 = input_checker19616_19622.call(null,args__18079__auto___19625);
if(cljs.core.truth_(temp__4425__auto___19626)){
var error__18080__auto___19627 = temp__4425__auto___19626;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-aldous-broder","maze-aldous-broder",-296877067,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19627)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19615_19621,new cljs.core.Keyword(null,"value","value",305978217),args__18079__auto___19625,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19627], null));
} else {
}
} else {
}

var o__18081__auto__ = (function (){var grid = G__19618;
while(true){
var grid__$1 = grid;
var current = snergly.grid.random_coord.call(null,grid__$1);
var unvisited = (snergly.grid.grid_size.call(null,grid__$1) - (1));
while(true){
var cell = snergly.grid.grid_cell.call(null,grid__$1,current);
var neighbor = cljs.core.rand_nth.call(null,snergly.grid.cell_neighbors.call(null,cell));
var neighbor_new_QMARK_ = cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(snergly.grid.grid_cell.call(null,grid__$1,neighbor)));
if(cljs.core._EQ_.call(null,unvisited,(0))){
return cljs.core.assoc.call(null,grid__$1,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"aldous-broder");
} else {
var G__19628 = ((neighbor_new_QMARK_)?snergly.grid.link_cells.call(null,grid__$1,cell,neighbor):grid__$1);
var G__19629 = neighbor;
var G__19630 = ((neighbor_new_QMARK_)?(unvisited - (1)):unvisited);
grid__$1 = G__19628;
current = G__19629;
unvisited = G__19630;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__18078__auto__)){
var temp__4425__auto___19631 = output_checker19617_19623.call(null,o__18081__auto__);
if(cljs.core.truth_(temp__4425__auto___19631)){
var error__18080__auto___19632 = temp__4425__auto___19631;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-aldous-broder","maze-aldous-broder",-296877067,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19632)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19614_19620,new cljs.core.Keyword(null,"value","value",305978217),o__18081__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19632], null));
} else {
}
} else {
}

return o__18081__auto__;
});})(ufv___19619,output_schema19614_19620,input_schema19615_19621,input_checker19616_19622,output_checker19617_19623))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_aldous_broder),schema.core.make_fn_schema.call(null,output_schema19614_19620,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19615_19621], null)));

snergly.algorithms.wilsons_loop_erased_walk = (function snergly$algorithms$wilsons_loop_erased_walk(grid,start_coord,unvisited){
var unvisited_set = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,unvisited);
var current_coord = start_coord;
var path = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_coord], null);
while(true){
if(!(cljs.core.contains_QMARK_.call(null,unvisited_set,current_coord))){
return path;
} else {
var next_coord = cljs.core.rand_nth.call(null,snergly.grid.cell_neighbors.call(null,snergly.grid.grid_cell.call(null,grid,current_coord)));
var position = snergly.algorithms.cljs_index_of.call(null,path,next_coord);
var G__19633 = next_coord;
var G__19634 = (((position < (0)))?cljs.core.conj.call(null,path,next_coord):cljs.core.subvec.call(null,path,(0),(position + (1))));
current_coord = G__19633;
path = G__19634;
continue;
}
break;
}
});
snergly.algorithms.wilsons_carve_passage = (function snergly$algorithms$wilsons_carve_passage(grid,path,unvisited){
var grid__$1 = grid;
var unvisited__$1 = unvisited;
var G__19644 = cljs.core.partition.call(null,(2),(1),path);
var vec__19645 = G__19644;
var vec__19646 = cljs.core.nth.call(null,vec__19645,(0),null);
var coord1 = cljs.core.nth.call(null,vec__19646,(0),null);
var coord2 = cljs.core.nth.call(null,vec__19646,(1),null);
var pairs = cljs.core.nthnext.call(null,vec__19645,(1));
var grid__$2 = grid__$1;
var unvisited__$2 = unvisited__$1;
var G__19644__$1 = G__19644;
while(true){
var grid__$3 = grid__$2;
var unvisited__$3 = unvisited__$2;
var vec__19647 = G__19644__$1;
var vec__19648 = cljs.core.nth.call(null,vec__19647,(0),null);
var coord1__$1 = cljs.core.nth.call(null,vec__19648,(0),null);
var coord2__$1 = cljs.core.nth.call(null,vec__19648,(1),null);
var pairs__$1 = cljs.core.nthnext.call(null,vec__19647,(1));
var new_grid = snergly.grid.link_cells.call(null,grid__$3,snergly.grid.grid_cell.call(null,grid__$3,coord1__$1),coord2__$1);
var new_unvisited = cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,coord1__$1),unvisited__$3);
if(cljs.core.empty_QMARK_.call(null,pairs__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_grid,new_unvisited], null);
} else {
var G__19649 = new_grid;
var G__19650 = new_unvisited;
var G__19651 = pairs__$1;
grid__$2 = G__19649;
unvisited__$2 = G__19650;
G__19644__$1 = G__19651;
continue;
}
break;
}
});
var ufv___19659 = schema.utils.use_fn_validation;
var output_schema19652_19660 = snergly.grid.Grid;
var input_schema19653_19661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)))], null);
var input_checker19654_19662 = schema.core.checker.call(null,input_schema19653_19661);
var output_checker19655_19663 = schema.core.checker.call(null,output_schema19652_19660);
var ret__19522__auto___19664 = /**
 * Inputs: [grid :- g/Grid]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_wilsons = ((function (ufv___19659,output_schema19652_19660,input_schema19653_19661,input_checker19654_19662,output_checker19655_19663){
return (function snergly$algorithms$maze_wilsons(G__19656){
var validate__18078__auto__ = ufv___19659.get_cell();
if(cljs.core.truth_(validate__18078__auto__)){
var args__18079__auto___19665 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19656], null);
var temp__4425__auto___19666 = input_checker19654_19662.call(null,args__18079__auto___19665);
if(cljs.core.truth_(temp__4425__auto___19666)){
var error__18080__auto___19667 = temp__4425__auto___19666;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-wilsons","maze-wilsons",-1740887941,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19667)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19653_19661,new cljs.core.Keyword(null,"value","value",305978217),args__18079__auto___19665,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19667], null));
} else {
}
} else {
}

var o__18081__auto__ = (function (){var grid = G__19656;
while(true){
var grid__$1 = grid;
var unvisited = cljs.core.rest.call(null,cljs.core.shuffle.call(null,snergly.grid.grid_coords.call(null,grid__$1)));
var coord = cljs.core.rand_nth.call(null,unvisited);
while(true){
var path = snergly.algorithms.wilsons_loop_erased_walk.call(null,grid__$1,coord,unvisited);
var vec__19658 = snergly.algorithms.wilsons_carve_passage.call(null,grid__$1,path,unvisited);
var new_grid = cljs.core.nth.call(null,vec__19658,(0),null);
var new_unvisited = cljs.core.nth.call(null,vec__19658,(1),null);
if(cljs.core.empty_QMARK_.call(null,new_unvisited)){
return cljs.core.assoc.call(null,new_grid,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"wilsons");
} else {
var G__19668 = new_grid;
var G__19669 = new_unvisited;
var G__19670 = cljs.core.rand_nth.call(null,new_unvisited);
grid__$1 = G__19668;
unvisited = G__19669;
coord = G__19670;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__18078__auto__)){
var temp__4425__auto___19671 = output_checker19655_19663.call(null,o__18081__auto__);
if(cljs.core.truth_(temp__4425__auto___19671)){
var error__18080__auto___19672 = temp__4425__auto___19671;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-wilsons","maze-wilsons",-1740887941,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19672)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19652_19660,new cljs.core.Keyword(null,"value","value",305978217),o__18081__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19672], null));
} else {
}
} else {
}

return o__18081__auto__;
});})(ufv___19659,output_schema19652_19660,input_schema19653_19661,input_checker19654_19662,output_checker19655_19663))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_wilsons),schema.core.make_fn_schema.call(null,output_schema19652_19660,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19653_19661], null)));

snergly.algorithms.hunt_and_kill_start_new_walk = (function snergly$algorithms$hunt_and_kill_start_new_walk(grid){
var G__19679 = snergly.grid.grid_coords.call(null,grid);
var vec__19680 = G__19679;
var current_coord = cljs.core.nth.call(null,vec__19680,(0),null);
var other_coords = cljs.core.nthnext.call(null,vec__19680,(1));
var G__19679__$1 = G__19679;
while(true){
var vec__19681 = G__19679__$1;
var current_coord__$1 = cljs.core.nth.call(null,vec__19681,(0),null);
var other_coords__$1 = cljs.core.nthnext.call(null,vec__19681,(1));
var current_cell = snergly.grid.grid_cell.call(null,grid,current_coord__$1);
var visited_neighbors = cljs.core.remove.call(null,((function (G__19679__$1,current_cell,vec__19681,current_coord__$1,other_coords__$1,G__19679,vec__19680,current_coord,other_coords){
return (function (p1__19673_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(snergly.grid.grid_cell.call(null,grid,p1__19673_SHARP_)));
});})(G__19679__$1,current_cell,vec__19681,current_coord__$1,other_coords__$1,G__19679,vec__19680,current_coord,other_coords))
,snergly.grid.cell_neighbors.call(null,current_cell));
if(cljs.core.truth_((function (){var and__16759__auto__ = cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(current_cell));
if(and__16759__auto__){
return cljs.core.not_empty.call(null,visited_neighbors);
} else {
return and__16759__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.link_cells.call(null,grid,current_cell,cljs.core.rand_nth.call(null,visited_neighbors)),current_coord__$1], null);
} else {
if(cljs.core.empty_QMARK_.call(null,other_coords__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid,null], null);
} else {
var G__19682 = other_coords__$1;
G__19679__$1 = G__19682;
continue;

}
}
break;
}
});
snergly.algorithms.hunt_and_kill_step = (function snergly$algorithms$hunt_and_kill_step(grid,current_coord){
var current_cell = snergly.grid.grid_cell.call(null,grid,current_coord);
var unvisited_neighbors = cljs.core.filter.call(null,((function (current_cell){
return (function (p1__19683_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(snergly.grid.grid_cell.call(null,grid,p1__19683_SHARP_)));
});})(current_cell))
,snergly.grid.cell_neighbors.call(null,current_cell));
if(cljs.core.empty_QMARK_.call(null,unvisited_neighbors)){
return snergly.algorithms.hunt_and_kill_start_new_walk.call(null,grid);
} else {
var neighbor = cljs.core.rand_nth.call(null,unvisited_neighbors);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.link_cells.call(null,grid,current_cell,neighbor),neighbor], null);
}
});
var ufv___19691 = schema.utils.use_fn_validation;
var output_schema19684_19692 = snergly.grid.Grid;
var input_schema19685_19693 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)))], null);
var input_checker19686_19694 = schema.core.checker.call(null,input_schema19685_19693);
var output_checker19687_19695 = schema.core.checker.call(null,output_schema19684_19692);
var ret__19522__auto___19696 = /**
 * Inputs: [grid :- g/Grid]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_hunt_and_kill = ((function (ufv___19691,output_schema19684_19692,input_schema19685_19693,input_checker19686_19694,output_checker19687_19695){
return (function snergly$algorithms$maze_hunt_and_kill(G__19688){
var validate__18078__auto__ = ufv___19691.get_cell();
if(cljs.core.truth_(validate__18078__auto__)){
var args__18079__auto___19697 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19688], null);
var temp__4425__auto___19698 = input_checker19686_19694.call(null,args__18079__auto___19697);
if(cljs.core.truth_(temp__4425__auto___19698)){
var error__18080__auto___19699 = temp__4425__auto___19698;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-hunt-and-kill","maze-hunt-and-kill",708667020,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19699)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19685_19693,new cljs.core.Keyword(null,"value","value",305978217),args__18079__auto___19697,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19699], null));
} else {
}
} else {
}

var o__18081__auto__ = (function (){var grid = G__19688;
while(true){
var grid__$1 = grid;
var current_coord = snergly.grid.random_coord.call(null,grid__$1);
while(true){
var vec__19690 = snergly.algorithms.hunt_and_kill_step.call(null,grid__$1,current_coord);
var new_grid = cljs.core.nth.call(null,vec__19690,(0),null);
var next_coord = cljs.core.nth.call(null,vec__19690,(1),null);
if(cljs.core.not.call(null,next_coord)){
return cljs.core.assoc.call(null,new_grid,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"hunt-and-kill");
} else {
var G__19700 = new_grid;
var G__19701 = next_coord;
grid__$1 = G__19700;
current_coord = G__19701;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__18078__auto__)){
var temp__4425__auto___19702 = output_checker19687_19695.call(null,o__18081__auto__);
if(cljs.core.truth_(temp__4425__auto___19702)){
var error__18080__auto___19703 = temp__4425__auto___19702;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-hunt-and-kill","maze-hunt-and-kill",708667020,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19703)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19684_19692,new cljs.core.Keyword(null,"value","value",305978217),o__18081__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19703], null));
} else {
}
} else {
}

return o__18081__auto__;
});})(ufv___19691,output_schema19684_19692,input_schema19685_19693,input_checker19686_19694,output_checker19687_19695))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_hunt_and_kill),schema.core.make_fn_schema.call(null,output_schema19684_19692,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19685_19693], null)));

var ufv___19709 = schema.utils.use_fn_validation;
var output_schema19704_19710 = snergly.grid.Grid;
var input_schema19705_19711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)))], null);
var input_checker19706_19712 = schema.core.checker.call(null,input_schema19705_19711);
var output_checker19707_19713 = schema.core.checker.call(null,output_schema19704_19710);
var ret__19522__auto___19714 = /**
 * Inputs: [grid :- g/Grid]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_recursive_backtrack = ((function (ufv___19709,output_schema19704_19710,input_schema19705_19711,input_checker19706_19712,output_checker19707_19713){
return (function snergly$algorithms$maze_recursive_backtrack(G__19708){
var validate__18078__auto__ = ufv___19709.get_cell();
if(cljs.core.truth_(validate__18078__auto__)){
var args__18079__auto___19715 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19708], null);
var temp__4425__auto___19716 = input_checker19706_19712.call(null,args__18079__auto___19715);
if(cljs.core.truth_(temp__4425__auto___19716)){
var error__18080__auto___19717 = temp__4425__auto___19716;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-recursive-backtrack","maze-recursive-backtrack",1894403496,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19717)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19705_19711,new cljs.core.Keyword(null,"value","value",305978217),args__18079__auto___19715,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19717], null));
} else {
}
} else {
}

var o__18081__auto__ = (function (){var grid = G__19708;
while(true){
return null;
break;
}
})();
if(cljs.core.truth_(validate__18078__auto__)){
var temp__4425__auto___19718 = output_checker19707_19713.call(null,o__18081__auto__);
if(cljs.core.truth_(temp__4425__auto___19718)){
var error__18080__auto___19719 = temp__4425__auto___19718;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-recursive-backtrack","maze-recursive-backtrack",1894403496,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19719)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19704_19710,new cljs.core.Keyword(null,"value","value",305978217),o__18081__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19719], null));
} else {
}
} else {
}

return o__18081__auto__;
});})(ufv___19709,output_schema19704_19710,input_schema19705_19711,input_checker19706_19712,output_checker19707_19713))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_recursive_backtrack),schema.core.make_fn_schema.call(null,output_schema19704_19710,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19705_19711], null)));

var ufv___19728 = schema.utils.use_fn_validation;
var output_schema19722_19729 = snergly.grid.Distances;
var input_schema19723_19730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null))),schema.core.one.call(null,snergly.grid.CellPosition,cljs.core.with_meta(new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","CellPosition","g/CellPosition",-1655973548,null)], null)))], null);
var input_checker19724_19731 = schema.core.checker.call(null,input_schema19723_19730);
var output_checker19725_19732 = schema.core.checker.call(null,output_schema19722_19729);
var ret__19522__auto___19733 = /**
 * Inputs: [grid :- g/Grid start :- g/CellPosition]
 *   Returns: g/Distances
 */
snergly.algorithms.find_distances = ((function (ufv___19728,output_schema19722_19729,input_schema19723_19730,input_checker19724_19731,output_checker19725_19732){
return (function snergly$algorithms$find_distances(G__19726,G__19727){
var validate__18078__auto__ = ufv___19728.get_cell();
if(cljs.core.truth_(validate__18078__auto__)){
var args__18079__auto___19734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19726,G__19727], null);
var temp__4425__auto___19735 = input_checker19724_19731.call(null,args__18079__auto___19734);
if(cljs.core.truth_(temp__4425__auto___19735)){
var error__18080__auto___19736 = temp__4425__auto___19735;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"find-distances","find-distances",1590317418,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Distances","g/Distances",-992108335,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19736)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19723_19730,new cljs.core.Keyword(null,"value","value",305978217),args__18079__auto___19734,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19736], null));
} else {
}
} else {
}

var o__18081__auto__ = (function (){var grid = G__19726;
var start = G__19727;
while(true){
var distances = cljs.core.PersistentArrayMap.fromArray([start,(0),new cljs.core.Keyword(null,"origin","origin",1037372088),start], true, false);
var current = start;
var frontier = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
while(true){
var cell = snergly.grid.grid_cell.call(null,grid,current);
var current_distance = distances.call(null,current);
var links = cljs.core.remove.call(null,((function (distances,current,frontier,cell,current_distance,validate__18078__auto__,ufv___19728,output_schema19722_19729,input_schema19723_19730,input_checker19724_19731,output_checker19725_19732){
return (function (p1__19720_SHARP_){
return cljs.core.contains_QMARK_.call(null,distances,p1__19720_SHARP_);
});})(distances,current,frontier,cell,current_distance,validate__18078__auto__,ufv___19728,output_schema19722_19729,input_schema19723_19730,input_checker19724_19731,output_checker19725_19732))
,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cell));
var next_frontier = cljs.core.apply.call(null,cljs.core.conj,frontier,links);
if(cljs.core.empty_QMARK_.call(null,next_frontier)){
return cljs.core.assoc.call(null,distances,new cljs.core.Keyword(null,"max","max",61366548),current_distance,new cljs.core.Keyword(null,"max-coord","max-coord",-881869431),current);
} else {
var G__19737 = ((cljs.core.empty_QMARK_.call(null,links))?distances:cljs.core.apply.call(null,cljs.core.assoc,distances,cljs.core.mapcat.call(null,((function (distances,current,frontier,cell,current_distance,links,next_frontier,validate__18078__auto__,ufv___19728,output_schema19722_19729,input_schema19723_19730,input_checker19724_19731,output_checker19725_19732){
return (function (p1__19721_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__19721_SHARP_,(current_distance + (1))],null));
});})(distances,current,frontier,cell,current_distance,links,next_frontier,validate__18078__auto__,ufv___19728,output_schema19722_19729,input_schema19723_19730,input_checker19724_19731,output_checker19725_19732))
,links)));
var G__19738 = cljs.core.peek.call(null,next_frontier);
var G__19739 = cljs.core.pop.call(null,next_frontier);
distances = G__19737;
current = G__19738;
frontier = G__19739;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__18078__auto__)){
var temp__4425__auto___19740 = output_checker19725_19732.call(null,o__18081__auto__);
if(cljs.core.truth_(temp__4425__auto___19740)){
var error__18080__auto___19741 = temp__4425__auto___19740;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"find-distances","find-distances",1590317418,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Distances","g/Distances",-992108335,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19741)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19722_19729,new cljs.core.Keyword(null,"value","value",305978217),o__18081__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19741], null));
} else {
}
} else {
}

return o__18081__auto__;
});})(ufv___19728,output_schema19722_19729,input_schema19723_19730,input_checker19724_19731,output_checker19725_19732))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.find_distances),schema.core.make_fn_schema.call(null,output_schema19722_19729,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19723_19730], null)));

var ufv___19750 = schema.utils.use_fn_validation;
var output_schema19743_19751 = snergly.grid.Distances;
var input_schema19744_19752 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null))),schema.core.one.call(null,snergly.grid.CellPosition,cljs.core.with_meta(new cljs.core.Symbol(null,"goal","goal",-432864974,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","CellPosition","g/CellPosition",-1655973548,null)], null))),schema.core.one.call(null,snergly.grid.Distances,cljs.core.with_meta(new cljs.core.Symbol(null,"distances","distances",614087259,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Distances","g/Distances",-992108335,null)], null)))], null);
var input_checker19745_19753 = schema.core.checker.call(null,input_schema19744_19752);
var output_checker19746_19754 = schema.core.checker.call(null,output_schema19743_19751);
var ret__19522__auto___19755 = /**
 * Inputs: [grid :- g/Grid goal :- g/CellPosition distances :- g/Distances]
 *   Returns: g/Distances
 */
snergly.algorithms.find_path = ((function (ufv___19750,output_schema19743_19751,input_schema19744_19752,input_checker19745_19753,output_checker19746_19754){
return (function snergly$algorithms$find_path(G__19747,G__19748,G__19749){
var validate__18078__auto__ = ufv___19750.get_cell();
if(cljs.core.truth_(validate__18078__auto__)){
var args__18079__auto___19756 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__19747,G__19748,G__19749], null);
var temp__4425__auto___19757 = input_checker19745_19753.call(null,args__18079__auto___19756);
if(cljs.core.truth_(temp__4425__auto___19757)){
var error__18080__auto___19758 = temp__4425__auto___19757;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"find-path","find-path",-63940675,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Distances","g/Distances",-992108335,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19758)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema19744_19752,new cljs.core.Keyword(null,"value","value",305978217),args__18079__auto___19756,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19758], null));
} else {
}
} else {
}

var o__18081__auto__ = (function (){var grid = G__19747;
var goal = G__19748;
var distances = G__19749;
while(true){
var origin = new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(distances);
var current = goal;
var breadcrumbs = cljs.core.PersistentArrayMap.fromArray([origin,(0),new cljs.core.Keyword(null,"origin","origin",1037372088),origin,goal,distances.call(null,goal),new cljs.core.Keyword(null,"max-coord","max-coord",-881869431),goal,new cljs.core.Keyword(null,"max","max",61366548),distances.call(null,goal)], true, false);
while(true){
if(cljs.core._EQ_.call(null,current,origin)){
return breadcrumbs;
} else {
var current_distance = distances.call(null,current);
var neighbor = cljs.core.first.call(null,cljs.core.filter.call(null,((function (current,breadcrumbs,current_distance,origin,validate__18078__auto__,ufv___19750,output_schema19743_19751,input_schema19744_19752,input_checker19745_19753,output_checker19746_19754){
return (function (p1__19742_SHARP_){
return (distances.call(null,p1__19742_SHARP_) < current_distance);
});})(current,breadcrumbs,current_distance,origin,validate__18078__auto__,ufv___19750,output_schema19743_19751,input_schema19744_19752,input_checker19745_19753,output_checker19746_19754))
,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(snergly.grid.grid_cell.call(null,grid,current))));
var G__19759 = neighbor;
var G__19760 = cljs.core.assoc.call(null,breadcrumbs,neighbor,distances.call(null,neighbor));
current = G__19759;
breadcrumbs = G__19760;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__18078__auto__)){
var temp__4425__auto___19761 = output_checker19746_19754.call(null,o__18081__auto__);
if(cljs.core.truth_(temp__4425__auto___19761)){
var error__18080__auto___19762 = temp__4425__auto___19761;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"find-path","find-path",-63940675,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Distances","g/Distances",-992108335,null)], null)),cljs.core.pr_str.call(null,error__18080__auto___19762)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema19743_19751,new cljs.core.Keyword(null,"value","value",305978217),o__18081__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18080__auto___19762], null));
} else {
}
} else {
}

return o__18081__auto__;
});})(ufv___19750,output_schema19743_19751,input_schema19744_19752,input_checker19745_19753,output_checker19746_19754))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.find_path),schema.core.make_fn_schema.call(null,output_schema19743_19751,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema19744_19752], null)));

snergly.algorithms.algorithm_functions = new cljs.core.PersistentArrayMap(null, 5, ["binary-tree",snergly.algorithms.maze_binary_tree,"sidewinder",snergly.algorithms.maze_sidewinder,"aldous-broder",snergly.algorithms.maze_aldous_broder,"wilsons",snergly.algorithms.maze_wilsons,"hunt-and-kill",snergly.algorithms.maze_hunt_and_kill], null);
snergly.algorithms.algorithm_fn = (function snergly$algorithms$algorithm_fn(name,options){
var algorithm = snergly.algorithms.algorithm_functions.call(null,name);
var analyze_distances = ((function (algorithm){
return (function (maze){
return snergly.algorithms.find_distances.call(null,maze,new cljs.core.Keyword(null,"distances","distances",-1026444268).cljs$core$IFn$_invoke$arity$1(options));
});})(algorithm))
;
var analyze_path = ((function (algorithm,analyze_distances){
return (function (maze){
return snergly.algorithms.find_path.call(null,maze,new cljs.core.Keyword(null,"path-to","path-to",-1324619333).cljs$core$IFn$_invoke$arity$1(options),analyze_distances.call(null,maze));
});})(algorithm,analyze_distances))
;
var analyze_longest_path = ((function (algorithm,analyze_distances,analyze_path){
return (function (maze){
var distances = snergly.algorithms.find_distances.call(null,maze,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
var distances_from_farthest = snergly.algorithms.find_distances.call(null,maze,new cljs.core.Keyword(null,"max-coord","max-coord",-881869431).cljs$core$IFn$_invoke$arity$1(distances));
return snergly.algorithms.find_path.call(null,maze,new cljs.core.Keyword(null,"max-coord","max-coord",-881869431).cljs$core$IFn$_invoke$arity$1(distances_from_farthest),distances_from_farthest);
});})(algorithm,analyze_distances,analyze_path))
;
var analyze = (cljs.core.truth_(new cljs.core.Keyword(null,"longest","longest",-227374605).cljs$core$IFn$_invoke$arity$1(options))?analyze_longest_path:(cljs.core.truth_(new cljs.core.Keyword(null,"path-to","path-to",-1324619333).cljs$core$IFn$_invoke$arity$1(options))?analyze_path:(cljs.core.truth_(new cljs.core.Keyword(null,"distances","distances",-1026444268).cljs$core$IFn$_invoke$arity$1(options))?analyze_distances:((function (algorithm,analyze_distances,analyze_path,analyze_longest_path){
return (function (_){
return cljs.core.PersistentArrayMap.EMPTY;
});})(algorithm,analyze_distances,analyze_path,analyze_longest_path))

)));
return ((function (algorithm,analyze_distances,analyze_path,analyze_longest_path,analyze){
return (function (grid){
var maze = algorithm.call(null,grid);
var analysis = analyze.call(null,maze);
return snergly.grid.grid_annotate_cells.call(null,maze,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),snergly.grid.xform_values.call(null,snergly.util.base36,analysis),new cljs.core.Keyword(null,"color","color",1011675173),snergly.grid.xform_values.call(null,((function (maze,analysis,algorithm,analyze_distances,analyze_path,analyze_longest_path,analyze){
return (function (p1__19763_SHARP_){
return snergly.util.color_cell.call(null,new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(analysis),p1__19763_SHARP_);
});})(maze,analysis,algorithm,analyze_distances,analyze_path,analyze_longest_path,analyze))
,analysis)], null));
});
;})(algorithm,analyze_distances,analyze_path,analyze_longest_path,analyze))
});

//# sourceMappingURL=algorithms.js.map