// Compiled by ClojureScript 1.7.170 {}
goog.provide('snergly.algorithms');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('schema.core');
goog.require('snergly.grid');
goog.require('snergly.util');
snergly.algorithms.algorithms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["binary-tree",null,"sidewinder",null,"hunt-and-kill",null,"aldous-broder",null,"wilsons",null], null), null);
snergly.algorithms.cljs_index_of = (function snergly$algorithms$cljs_index_of(s,val){
var G__27146 = s;
var vec__27147 = G__27146;
var elem = cljs.core.nth.call(null,vec__27147,(0),null);
var s__$1 = cljs.core.nthnext.call(null,vec__27147,(1));
var val__$1 = val;
var i = (0);
var G__27146__$1 = G__27146;
var val__$2 = val__$1;
var i__$1 = i;
while(true){
var vec__27148 = G__27146__$1;
var elem__$1 = cljs.core.nth.call(null,vec__27148,(0),null);
var s__$2 = cljs.core.nthnext.call(null,vec__27148,(1));
var val__$3 = val__$2;
var i__$2 = i__$1;
if(cljs.core._EQ_.call(null,val__$3,elem__$1)){
return i__$2;
} else {
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return (-1);
} else {
var G__27149 = s__$2;
var G__27150 = val__$3;
var G__27151 = (i__$2 + (1));
G__27146__$1 = G__27149;
val__$2 = G__27150;
i__$1 = G__27151;
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
var ufv___27157 = schema.utils.use_fn_validation;
var output_schema27152_27158 = snergly.grid.Grid;
var input_schema27153_27159 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)))], null);
var input_checker27154_27160 = schema.core.checker.call(null,input_schema27153_27159);
var output_checker27155_27161 = schema.core.checker.call(null,output_schema27152_27158);
var ret__20577__auto___27162 = /**
 * Inputs: [grid :- g/Grid]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_binary_tree_sync = ((function (ufv___27157,output_schema27152_27158,input_schema27153_27159,input_checker27154_27160,output_checker27155_27161){
return (function snergly$algorithms$maze_binary_tree_sync(G__27156){
var validate__19133__auto__ = ufv___27157.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___27163 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27156], null);
var temp__4425__auto___27164 = input_checker27154_27160.call(null,args__19134__auto___27163);
if(cljs.core.truth_(temp__4425__auto___27164)){
var error__19135__auto___27165 = temp__4425__auto___27164;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-binary-tree-sync","maze-binary-tree-sync",1704652732,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27165)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27153_27159,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___27163,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27165], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__27156;
while(true){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,snergly.algorithms.binary_tree_step,grid,snergly.grid.grid_coords.call(null,grid)),new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"binary-tree");
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___27166 = output_checker27155_27161.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___27166)){
var error__19135__auto___27167 = temp__4425__auto___27166;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-binary-tree-sync","maze-binary-tree-sync",1704652732,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27167)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27152_27158,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27167], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___27157,output_schema27152_27158,input_schema27153_27159,input_checker27154_27160,output_checker27155_27161))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_binary_tree_sync),schema.core.make_fn_schema.call(null,output_schema27152_27158,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27153_27159], null)));

var ufv___27231 = schema.utils.use_fn_validation;
var output_schema27168_27232 = schema.core.Any;
var input_schema27169_27233 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"report-partial-steps?","report-partial-steps?",-1887557950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker27170_27234 = schema.core.checker.call(null,input_schema27169_27233);
var output_checker27171_27235 = schema.core.checker.call(null,output_schema27168_27232);
var ret__20577__auto___27236 = /**
 * Inputs: [grid :- g/Grid result-chan report-partial-steps?]
 */
snergly.algorithms.maze_binary_tree = ((function (ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235){
return (function snergly$algorithms$maze_binary_tree(G__27172,G__27173,G__27174){
var validate__19133__auto__ = ufv___27231.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___27237 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27172,G__27173,G__27174], null);
var temp__4425__auto___27238 = input_checker27170_27234.call(null,args__19134__auto___27237);
if(cljs.core.truth_(temp__4425__auto___27238)){
var error__19135__auto___27239 = temp__4425__auto___27238;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-binary-tree","maze-binary-tree",164862777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27239)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27169_27233,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___27237,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27239], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__27172;
var result_chan = G__27173;
var report_partial_steps_QMARK_ = G__27174;
while(true){
var c__18859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235){
return (function (){
var f__18860__auto__ = (function (){var switch__18838__auto__ = ((function (c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235){
return (function (state_27210){
var state_val_27211 = (state_27210[(1)]);
if((state_val_27211 === (1))){
var inst_27203 = (function (){return ((function (state_val_27211,c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235){
return (function (g,c){
if(cljs.core.truth_((function (){var and__16822__auto__ = report_partial_steps_QMARK_;
if(cljs.core.truth_(and__16822__auto__)){
return snergly.grid.changed_QMARK_.call(null,g);
} else {
return and__16822__auto__;
}
})())){
var c__18859__auto___27240__$1 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18859__auto___27240__$1,state_val_27211,c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235){
return (function (){
var f__18860__auto__ = (function (){var switch__18838__auto__ = ((function (c__18859__auto___27240__$1,state_val_27211,c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235){
return (function (state_27215){
var state_val_27216 = (state_27215[(1)]);
if((state_val_27216 === (1))){
var state_27215__$1 = state_27215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27215__$1,(2),result_chan,g);
} else {
if((state_val_27216 === (2))){
var inst_27213 = (state_27215[(2)]);
var state_27215__$1 = state_27215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27215__$1,inst_27213);
} else {
return null;
}
}
});})(c__18859__auto___27240__$1,state_val_27211,c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235))
;
return ((function (switch__18838__auto__,c__18859__auto___27240__$1,state_val_27211,c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235){
return (function() {
var snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__ = null;
var snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____0 = (function (){
var statearr_27220 = [null,null,null,null,null,null,null];
(statearr_27220[(0)] = snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__);

(statearr_27220[(1)] = (1));

return statearr_27220;
});
var snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____1 = (function (state_27215){
while(true){
var ret_value__18840__auto__ = (function (){try{while(true){
var result__18841__auto__ = switch__18838__auto__.call(null,state_27215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18841__auto__;
}
break;
}
}catch (e27221){if((e27221 instanceof Object)){
var ex__18842__auto__ = e27221;
var statearr_27222_27241 = state_27215;
(statearr_27222_27241[(5)] = ex__18842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27242 = state_27215;
state_27215 = G__27242;
continue;
} else {
return ret_value__18840__auto__;
}
break;
}
});
snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__ = function(state_27215){
switch(arguments.length){
case 0:
return snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____0.call(this);
case 1:
return snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____1.call(this,state_27215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$0 = snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____0;
snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$1 = snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____1;
return snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__;
})()
;})(switch__18838__auto__,c__18859__auto___27240__$1,state_val_27211,c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235))
})();
var state__18861__auto__ = (function (){var statearr_27223 = f__18860__auto__.call(null);
(statearr_27223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18859__auto___27240__$1);

return statearr_27223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18861__auto__);
});})(c__18859__auto___27240__$1,state_val_27211,c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235))
);

} else {
}

return snergly.algorithms.binary_tree_step.call(null,snergly.grid.begin_step.call(null,g),c);
});
;})(state_val_27211,c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235))
})();
var inst_27204 = cljs.core.assoc.call(null,grid,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"binary-tree");
var inst_27205 = snergly.grid.grid_coords.call(null,inst_27204);
var inst_27206 = cljs.core.reduce.call(null,inst_27203,inst_27204,inst_27205);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27210__$1,(2),result_chan,inst_27206);
} else {
if((state_val_27211 === (2))){
var inst_27208 = (state_27210[(2)]);
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27210__$1,inst_27208);
} else {
return null;
}
}
});})(c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235))
;
return ((function (switch__18838__auto__,c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235){
return (function() {
var snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__ = null;
var snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____0 = (function (){
var statearr_27227 = [null,null,null,null,null,null,null];
(statearr_27227[(0)] = snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__);

(statearr_27227[(1)] = (1));

return statearr_27227;
});
var snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____1 = (function (state_27210){
while(true){
var ret_value__18840__auto__ = (function (){try{while(true){
var result__18841__auto__ = switch__18838__auto__.call(null,state_27210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18841__auto__;
}
break;
}
}catch (e27228){if((e27228 instanceof Object)){
var ex__18842__auto__ = e27228;
var statearr_27229_27243 = state_27210;
(statearr_27229_27243[(5)] = ex__18842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27244 = state_27210;
state_27210 = G__27244;
continue;
} else {
return ret_value__18840__auto__;
}
break;
}
});
snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__ = function(state_27210){
switch(arguments.length){
case 0:
return snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____0.call(this);
case 1:
return snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____1.call(this,state_27210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$0 = snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____0;
snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$1 = snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto____1;
return snergly$algorithms$maze_binary_tree_$_state_machine__18839__auto__;
})()
;})(switch__18838__auto__,c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235))
})();
var state__18861__auto__ = (function (){var statearr_27230 = f__18860__auto__.call(null);
(statearr_27230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18859__auto__);

return statearr_27230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18861__auto__);
});})(c__18859__auto__,validate__19133__auto__,ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235))
);

return c__18859__auto__;
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___27245 = output_checker27171_27235.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___27245)){
var error__19135__auto___27246 = temp__4425__auto___27245;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-binary-tree","maze-binary-tree",164862777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27246)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27168_27232,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27246], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___27231,output_schema27168_27232,input_schema27169_27233,input_checker27170_27234,output_checker27171_27235))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_binary_tree),schema.core.make_fn_schema.call(null,output_schema27168_27232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27169_27233], null)));

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
var ufv___27262 = schema.utils.use_fn_validation;
var output_schema27247_27263 = snergly.grid.Grid;
var input_schema27248_27264 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)))], null);
var input_checker27249_27265 = schema.core.checker.call(null,input_schema27248_27264);
var output_checker27250_27266 = schema.core.checker.call(null,output_schema27247_27263);
var ret__20577__auto___27267 = /**
 * Inputs: [grid :- g/Grid]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_sidewinder_sync = ((function (ufv___27262,output_schema27247_27263,input_schema27248_27264,input_checker27249_27265,output_checker27250_27266){
return (function snergly$algorithms$maze_sidewinder_sync(G__27251){
var validate__19133__auto__ = ufv___27262.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___27268 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27251], null);
var temp__4425__auto___27269 = input_checker27249_27265.call(null,args__19134__auto___27268);
if(cljs.core.truth_(temp__4425__auto___27269)){
var error__19135__auto___27270 = temp__4425__auto___27269;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-sidewinder-sync","maze-sidewinder-sync",1522458110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27270)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27248_27264,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___27268,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27270], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__27251;
while(true){
var grid__$1 = grid;
var G__27258 = snergly.grid.grid_coords.call(null,grid__$1);
var vec__27259 = G__27258;
var coord = cljs.core.nth.call(null,vec__27259,(0),null);
var coords = cljs.core.nthnext.call(null,vec__27259,(1));
var current_run = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coord], null);
var grid__$2 = grid__$1;
var G__27258__$1 = G__27258;
var current_run__$1 = current_run;
while(true){
var grid__$3 = grid__$2;
var vec__27260 = G__27258__$1;
var coord__$1 = cljs.core.nth.call(null,vec__27260,(0),null);
var coords__$1 = cljs.core.nthnext.call(null,vec__27260,(1));
var current_run__$2 = current_run__$1;
var vec__27261 = snergly.algorithms.sidewinder_step.call(null,grid__$3,coord__$1,current_run__$2);
var new_grid = cljs.core.nth.call(null,vec__27261,(0),null);
var processed_run = cljs.core.nth.call(null,vec__27261,(1),null);
if(cljs.core.empty_QMARK_.call(null,coords__$1)){
return cljs.core.assoc.call(null,new_grid,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"sidewinder");
} else {
var G__27271 = new_grid;
var G__27272 = coords__$1;
var G__27273 = cljs.core.conj.call(null,processed_run,cljs.core.first.call(null,coords__$1));
grid__$2 = G__27271;
G__27258__$1 = G__27272;
current_run__$1 = G__27273;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___27274 = output_checker27250_27266.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___27274)){
var error__19135__auto___27275 = temp__4425__auto___27274;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-sidewinder-sync","maze-sidewinder-sync",1522458110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27275)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27247_27263,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27275], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___27262,output_schema27247_27263,input_schema27248_27264,input_checker27249_27265,output_checker27250_27266))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_sidewinder_sync),schema.core.make_fn_schema.call(null,output_schema27247_27263,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27248_27264], null)));

var ufv___27429 = schema.utils.use_fn_validation;
var output_schema27276_27430 = schema.core.Any;
var input_schema27277_27431 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"report-partial-steps?","report-partial-steps?",-1887557950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker27278_27432 = schema.core.checker.call(null,input_schema27277_27431);
var output_checker27279_27433 = schema.core.checker.call(null,output_schema27276_27430);
var ret__20577__auto___27434 = /**
 * Inputs: [grid :- g/Grid result-chan report-partial-steps?]
 */
snergly.algorithms.maze_sidewinder = ((function (ufv___27429,output_schema27276_27430,input_schema27277_27431,input_checker27278_27432,output_checker27279_27433){
return (function snergly$algorithms$maze_sidewinder(G__27280,G__27281,G__27282){
var validate__19133__auto__ = ufv___27429.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___27435 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27280,G__27281,G__27282], null);
var temp__4425__auto___27436 = input_checker27278_27432.call(null,args__19134__auto___27435);
if(cljs.core.truth_(temp__4425__auto___27436)){
var error__19135__auto___27437 = temp__4425__auto___27436;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-sidewinder","maze-sidewinder",-1531577113,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27437)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27277_27431,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___27435,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27437], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__27280;
var result_chan = G__27281;
var report_partial_steps_QMARK_ = G__27282;
while(true){
var c__18859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18859__auto__,validate__19133__auto__,ufv___27429,output_schema27276_27430,input_schema27277_27431,input_checker27278_27432,output_checker27279_27433){
return (function (){
var f__18860__auto__ = (function (){var switch__18838__auto__ = ((function (c__18859__auto__,validate__19133__auto__,ufv___27429,output_schema27276_27430,input_schema27277_27431,input_checker27278_27432,output_checker27279_27433){
return (function (state_27402){
var state_val_27403 = (state_27402[(1)]);
if((state_val_27403 === (7))){
var inst_27366 = (state_27402[(7)]);
var state_27402__$1 = state_27402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27402__$1,(10),result_chan,inst_27366);
} else {
if((state_val_27403 === (1))){
var inst_27359 = cljs.core.assoc.call(null,grid,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"sidewinder");
var inst_27360 = snergly.grid.grid_coords.call(null,inst_27359);
var inst_27361 = cljs.core.nth.call(null,inst_27360,(0),null);
var inst_27362 = cljs.core.nthnext.call(null,inst_27360,(1));
var inst_27363 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27364 = [inst_27361];
var inst_27365 = (new cljs.core.PersistentVector(null,1,(5),inst_27363,inst_27364,null));
var inst_27366 = inst_27359;
var inst_27367 = inst_27360;
var inst_27368 = inst_27365;
var state_27402__$1 = (function (){var statearr_27404 = state_27402;
(statearr_27404[(8)] = inst_27367);

(statearr_27404[(9)] = inst_27368);

(statearr_27404[(10)] = inst_27362);

(statearr_27404[(7)] = inst_27366);

return statearr_27404;
})();
var statearr_27405_27438 = state_27402__$1;
(statearr_27405_27438[(2)] = null);

(statearr_27405_27438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (4))){
var inst_27366 = (state_27402[(7)]);
var inst_27374 = snergly.grid.changed_QMARK_.call(null,inst_27366);
var state_27402__$1 = state_27402;
var statearr_27406_27439 = state_27402__$1;
(statearr_27406_27439[(2)] = inst_27374);

(statearr_27406_27439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (13))){
var inst_27398 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
var statearr_27407_27440 = state_27402__$1;
(statearr_27407_27440[(2)] = inst_27398);

(statearr_27407_27440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (6))){
var inst_27377 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
if(cljs.core.truth_(inst_27377)){
var statearr_27408_27441 = state_27402__$1;
(statearr_27408_27441[(1)] = (7));

} else {
var statearr_27409_27442 = state_27402__$1;
(statearr_27409_27442[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (3))){
var inst_27400 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27402__$1,inst_27400);
} else {
if((state_val_27403 === (12))){
var inst_27387 = (state_27402[(11)]);
var inst_27388 = (state_27402[(12)]);
var inst_27372 = (state_27402[(13)]);
var inst_27394 = cljs.core.first.call(null,inst_27372);
var inst_27395 = cljs.core.conj.call(null,inst_27388,inst_27394);
var inst_27366 = inst_27387;
var inst_27367 = inst_27372;
var inst_27368 = inst_27395;
var state_27402__$1 = (function (){var statearr_27410 = state_27402;
(statearr_27410[(8)] = inst_27367);

(statearr_27410[(9)] = inst_27368);

(statearr_27410[(7)] = inst_27366);

return statearr_27410;
})();
var statearr_27411_27443 = state_27402__$1;
(statearr_27411_27443[(2)] = null);

(statearr_27411_27443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (2))){
var inst_27367 = (state_27402[(8)]);
var inst_27371 = cljs.core.nth.call(null,inst_27367,(0),null);
var inst_27372 = cljs.core.nthnext.call(null,inst_27367,(1));
var state_27402__$1 = (function (){var statearr_27412 = state_27402;
(statearr_27412[(14)] = inst_27371);

(statearr_27412[(13)] = inst_27372);

return statearr_27412;
})();
if(cljs.core.truth_(report_partial_steps_QMARK_)){
var statearr_27413_27444 = state_27402__$1;
(statearr_27413_27444[(1)] = (4));

} else {
var statearr_27414_27445 = state_27402__$1;
(statearr_27414_27445[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (11))){
var inst_27387 = (state_27402[(11)]);
var state_27402__$1 = state_27402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27402__$1,(14),result_chan,inst_27387);
} else {
if((state_val_27403 === (9))){
var inst_27371 = (state_27402[(14)]);
var inst_27368 = (state_27402[(9)]);
var inst_27372 = (state_27402[(13)]);
var inst_27366 = (state_27402[(7)]);
var inst_27383 = (state_27402[(2)]);
var inst_27385 = snergly.grid.begin_step.call(null,inst_27366);
var inst_27386 = snergly.algorithms.sidewinder_step.call(null,inst_27385,inst_27371,inst_27368);
var inst_27387 = cljs.core.nth.call(null,inst_27386,(0),null);
var inst_27388 = cljs.core.nth.call(null,inst_27386,(1),null);
var inst_27389 = cljs.core.empty_QMARK_.call(null,inst_27372);
var state_27402__$1 = (function (){var statearr_27415 = state_27402;
(statearr_27415[(15)] = inst_27383);

(statearr_27415[(11)] = inst_27387);

(statearr_27415[(12)] = inst_27388);

return statearr_27415;
})();
if(inst_27389){
var statearr_27416_27446 = state_27402__$1;
(statearr_27416_27446[(1)] = (11));

} else {
var statearr_27417_27447 = state_27402__$1;
(statearr_27417_27447[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (5))){
var state_27402__$1 = state_27402;
var statearr_27418_27448 = state_27402__$1;
(statearr_27418_27448[(2)] = report_partial_steps_QMARK_);

(statearr_27418_27448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (14))){
var inst_27392 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
var statearr_27419_27449 = state_27402__$1;
(statearr_27419_27449[(2)] = inst_27392);

(statearr_27419_27449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (10))){
var inst_27380 = (state_27402[(2)]);
var state_27402__$1 = state_27402;
var statearr_27420_27450 = state_27402__$1;
(statearr_27420_27450[(2)] = inst_27380);

(statearr_27420_27450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27403 === (8))){
var state_27402__$1 = state_27402;
var statearr_27421_27451 = state_27402__$1;
(statearr_27421_27451[(2)] = null);

(statearr_27421_27451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18859__auto__,validate__19133__auto__,ufv___27429,output_schema27276_27430,input_schema27277_27431,input_checker27278_27432,output_checker27279_27433))
;
return ((function (switch__18838__auto__,c__18859__auto__,validate__19133__auto__,ufv___27429,output_schema27276_27430,input_schema27277_27431,input_checker27278_27432,output_checker27279_27433){
return (function() {
var snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto__ = null;
var snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto____0 = (function (){
var statearr_27425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27425[(0)] = snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto__);

(statearr_27425[(1)] = (1));

return statearr_27425;
});
var snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto____1 = (function (state_27402){
while(true){
var ret_value__18840__auto__ = (function (){try{while(true){
var result__18841__auto__ = switch__18838__auto__.call(null,state_27402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18841__auto__;
}
break;
}
}catch (e27426){if((e27426 instanceof Object)){
var ex__18842__auto__ = e27426;
var statearr_27427_27452 = state_27402;
(statearr_27427_27452[(5)] = ex__18842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27453 = state_27402;
state_27402 = G__27453;
continue;
} else {
return ret_value__18840__auto__;
}
break;
}
});
snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto__ = function(state_27402){
switch(arguments.length){
case 0:
return snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto____0.call(this);
case 1:
return snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto____1.call(this,state_27402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$0 = snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto____0;
snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$1 = snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto____1;
return snergly$algorithms$maze_sidewinder_$_state_machine__18839__auto__;
})()
;})(switch__18838__auto__,c__18859__auto__,validate__19133__auto__,ufv___27429,output_schema27276_27430,input_schema27277_27431,input_checker27278_27432,output_checker27279_27433))
})();
var state__18861__auto__ = (function (){var statearr_27428 = f__18860__auto__.call(null);
(statearr_27428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18859__auto__);

return statearr_27428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18861__auto__);
});})(c__18859__auto__,validate__19133__auto__,ufv___27429,output_schema27276_27430,input_schema27277_27431,input_checker27278_27432,output_checker27279_27433))
);

return c__18859__auto__;
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___27454 = output_checker27279_27433.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___27454)){
var error__19135__auto___27455 = temp__4425__auto___27454;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-sidewinder","maze-sidewinder",-1531577113,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27455)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27276_27430,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27455], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___27429,output_schema27276_27430,input_schema27277_27431,input_checker27278_27432,output_checker27279_27433))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_sidewinder),schema.core.make_fn_schema.call(null,output_schema27276_27430,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27277_27431], null)));

var ufv___27461 = schema.utils.use_fn_validation;
var output_schema27456_27462 = snergly.grid.Grid;
var input_schema27457_27463 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)))], null);
var input_checker27458_27464 = schema.core.checker.call(null,input_schema27457_27463);
var output_checker27459_27465 = schema.core.checker.call(null,output_schema27456_27462);
var ret__20577__auto___27466 = /**
 * Inputs: [grid :- g/Grid]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_aldous_broder_sync = ((function (ufv___27461,output_schema27456_27462,input_schema27457_27463,input_checker27458_27464,output_checker27459_27465){
return (function snergly$algorithms$maze_aldous_broder_sync(G__27460){
var validate__19133__auto__ = ufv___27461.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___27467 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27460], null);
var temp__4425__auto___27468 = input_checker27458_27464.call(null,args__19134__auto___27467);
if(cljs.core.truth_(temp__4425__auto___27468)){
var error__19135__auto___27469 = temp__4425__auto___27468;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-aldous-broder-sync","maze-aldous-broder-sync",-144672489,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27469)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27457_27463,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___27467,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27469], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__27460;
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
var G__27470 = ((neighbor_new_QMARK_)?snergly.grid.link_cells.call(null,snergly.grid.begin_step.call(null,grid__$1),cell,neighbor):grid__$1);
var G__27471 = neighbor;
var G__27472 = ((neighbor_new_QMARK_)?(unvisited - (1)):unvisited);
grid__$1 = G__27470;
current = G__27471;
unvisited = G__27472;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___27473 = output_checker27459_27465.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___27473)){
var error__19135__auto___27474 = temp__4425__auto___27473;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-aldous-broder-sync","maze-aldous-broder-sync",-144672489,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27474)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27456_27462,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27474], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___27461,output_schema27456_27462,input_schema27457_27463,input_checker27458_27464,output_checker27459_27465))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_aldous_broder_sync),schema.core.make_fn_schema.call(null,output_schema27456_27462,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27457_27463], null)));

var ufv___27652 = schema.utils.use_fn_validation;
var output_schema27475_27653 = schema.core.Any;
var input_schema27476_27654 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"report-partial-steps?","report-partial-steps?",-1887557950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker27477_27655 = schema.core.checker.call(null,input_schema27476_27654);
var output_checker27478_27656 = schema.core.checker.call(null,output_schema27475_27653);
var ret__20577__auto___27657 = /**
 * Inputs: [grid :- g/Grid result-chan report-partial-steps?]
 */
snergly.algorithms.maze_aldous_broder = ((function (ufv___27652,output_schema27475_27653,input_schema27476_27654,input_checker27477_27655,output_checker27478_27656){
return (function snergly$algorithms$maze_aldous_broder(G__27479,G__27480,G__27481){
var validate__19133__auto__ = ufv___27652.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___27658 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27479,G__27480,G__27481], null);
var temp__4425__auto___27659 = input_checker27477_27655.call(null,args__19134__auto___27658);
if(cljs.core.truth_(temp__4425__auto___27659)){
var error__19135__auto___27660 = temp__4425__auto___27659;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-aldous-broder","maze-aldous-broder",-296877067,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27660)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27476_27654,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___27658,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27660], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__27479;
var result_chan = G__27480;
var report_partial_steps_QMARK_ = G__27481;
while(true){
var c__18859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18859__auto__,validate__19133__auto__,ufv___27652,output_schema27475_27653,input_schema27476_27654,input_checker27477_27655,output_checker27478_27656){
return (function (){
var f__18860__auto__ = (function (){var switch__18838__auto__ = ((function (c__18859__auto__,validate__19133__auto__,ufv___27652,output_schema27475_27653,input_schema27476_27654,input_checker27477_27655,output_checker27478_27656){
return (function (state_27616){
var state_val_27617 = (state_27616[(1)]);
if((state_val_27617 === (7))){
var inst_27571 = (state_27616[(7)]);
var state_27616__$1 = state_27616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27616__$1,(10),result_chan,inst_27571);
} else {
if((state_val_27617 === (20))){
var inst_27588 = (state_27616[(8)]);
var inst_27604 = (state_27616[(9)]);
var inst_27609 = (state_27616[(2)]);
var inst_27571 = inst_27604;
var inst_27572 = inst_27588;
var inst_27573 = inst_27609;
var state_27616__$1 = (function (){var statearr_27618 = state_27616;
(statearr_27618[(10)] = inst_27572);

(statearr_27618[(7)] = inst_27571);

(statearr_27618[(11)] = inst_27573);

return statearr_27618;
})();
var statearr_27619_27661 = state_27616__$1;
(statearr_27619_27661[(2)] = null);

(statearr_27619_27661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (1))){
var inst_27567 = cljs.core.assoc.call(null,grid,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"aldous-broder");
var inst_27568 = snergly.grid.random_coord.call(null,inst_27567);
var inst_27569 = snergly.grid.grid_size.call(null,inst_27567);
var inst_27570 = (inst_27569 - (1));
var inst_27571 = inst_27567;
var inst_27572 = inst_27568;
var inst_27573 = inst_27570;
var state_27616__$1 = (function (){var statearr_27620 = state_27616;
(statearr_27620[(10)] = inst_27572);

(statearr_27620[(7)] = inst_27571);

(statearr_27620[(11)] = inst_27573);

return statearr_27620;
})();
var statearr_27621_27662 = state_27616__$1;
(statearr_27621_27662[(2)] = null);

(statearr_27621_27662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (4))){
var inst_27571 = (state_27616[(7)]);
var inst_27576 = snergly.grid.changed_QMARK_.call(null,inst_27571);
var state_27616__$1 = state_27616;
var statearr_27622_27663 = state_27616__$1;
(statearr_27622_27663[(2)] = inst_27576);

(statearr_27622_27663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (15))){
var inst_27588 = (state_27616[(8)]);
var inst_27586 = (state_27616[(12)]);
var inst_27571 = (state_27616[(7)]);
var inst_27599 = snergly.grid.begin_step.call(null,inst_27571);
var inst_27600 = snergly.grid.link_cells.call(null,inst_27599,inst_27586,inst_27588);
var state_27616__$1 = state_27616;
var statearr_27623_27664 = state_27616__$1;
(statearr_27623_27664[(2)] = inst_27600);

(statearr_27623_27664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (13))){
var inst_27612 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
var statearr_27624_27665 = state_27616__$1;
(statearr_27624_27665[(2)] = inst_27612);

(statearr_27624_27665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (6))){
var inst_27579 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
if(cljs.core.truth_(inst_27579)){
var statearr_27625_27666 = state_27616__$1;
(statearr_27625_27666[(1)] = (7));

} else {
var statearr_27626_27667 = state_27616__$1;
(statearr_27626_27667[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (17))){
var inst_27591 = (state_27616[(13)]);
var inst_27604 = (state_27616[(2)]);
var state_27616__$1 = (function (){var statearr_27627 = state_27616;
(statearr_27627[(9)] = inst_27604);

return statearr_27627;
})();
if(cljs.core.truth_(inst_27591)){
var statearr_27628_27668 = state_27616__$1;
(statearr_27628_27668[(1)] = (18));

} else {
var statearr_27629_27669 = state_27616__$1;
(statearr_27629_27669[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (3))){
var inst_27614 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27616__$1,inst_27614);
} else {
if((state_val_27617 === (12))){
var inst_27591 = (state_27616[(13)]);
var state_27616__$1 = state_27616;
if(cljs.core.truth_(inst_27591)){
var statearr_27630_27670 = state_27616__$1;
(statearr_27630_27670[(1)] = (15));

} else {
var statearr_27631_27671 = state_27616__$1;
(statearr_27631_27671[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (2))){
var state_27616__$1 = state_27616;
if(cljs.core.truth_(report_partial_steps_QMARK_)){
var statearr_27632_27672 = state_27616__$1;
(statearr_27632_27672[(1)] = (4));

} else {
var statearr_27633_27673 = state_27616__$1;
(statearr_27633_27673[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (19))){
var inst_27573 = (state_27616[(11)]);
var state_27616__$1 = state_27616;
var statearr_27634_27674 = state_27616__$1;
(statearr_27634_27674[(2)] = inst_27573);

(statearr_27634_27674[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (11))){
var inst_27571 = (state_27616[(7)]);
var state_27616__$1 = state_27616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27616__$1,(14),result_chan,inst_27571);
} else {
if((state_val_27617 === (9))){
var inst_27588 = (state_27616[(8)]);
var inst_27572 = (state_27616[(10)]);
var inst_27586 = (state_27616[(12)]);
var inst_27571 = (state_27616[(7)]);
var inst_27573 = (state_27616[(11)]);
var inst_27585 = (state_27616[(2)]);
var inst_27586__$1 = snergly.grid.grid_cell.call(null,inst_27571,inst_27572);
var inst_27587 = snergly.grid.cell_neighbors.call(null,inst_27586__$1);
var inst_27588__$1 = cljs.core.rand_nth.call(null,inst_27587);
var inst_27589 = snergly.grid.grid_cell.call(null,inst_27571,inst_27588__$1);
var inst_27590 = new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(inst_27589);
var inst_27591 = cljs.core.empty_QMARK_.call(null,inst_27590);
var inst_27592 = cljs.core._EQ_.call(null,inst_27573,(0));
var state_27616__$1 = (function (){var statearr_27635 = state_27616;
(statearr_27635[(8)] = inst_27588__$1);

(statearr_27635[(13)] = inst_27591);

(statearr_27635[(12)] = inst_27586__$1);

(statearr_27635[(14)] = inst_27585);

return statearr_27635;
})();
if(inst_27592){
var statearr_27636_27675 = state_27616__$1;
(statearr_27636_27675[(1)] = (11));

} else {
var statearr_27637_27676 = state_27616__$1;
(statearr_27637_27676[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (5))){
var state_27616__$1 = state_27616;
var statearr_27638_27677 = state_27616__$1;
(statearr_27638_27677[(2)] = report_partial_steps_QMARK_);

(statearr_27638_27677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (14))){
var inst_27595 = (state_27616[(2)]);
var inst_27596 = cljs.core.async.close_BANG_.call(null,result_chan);
var state_27616__$1 = (function (){var statearr_27639 = state_27616;
(statearr_27639[(15)] = inst_27595);

return statearr_27639;
})();
var statearr_27640_27678 = state_27616__$1;
(statearr_27640_27678[(2)] = inst_27596);

(statearr_27640_27678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (16))){
var inst_27571 = (state_27616[(7)]);
var inst_27602 = snergly.grid.begin_step.call(null,inst_27571);
var state_27616__$1 = state_27616;
var statearr_27641_27679 = state_27616__$1;
(statearr_27641_27679[(2)] = inst_27602);

(statearr_27641_27679[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (10))){
var inst_27582 = (state_27616[(2)]);
var state_27616__$1 = state_27616;
var statearr_27642_27680 = state_27616__$1;
(statearr_27642_27680[(2)] = inst_27582);

(statearr_27642_27680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (18))){
var inst_27573 = (state_27616[(11)]);
var inst_27606 = (inst_27573 - (1));
var state_27616__$1 = state_27616;
var statearr_27643_27681 = state_27616__$1;
(statearr_27643_27681[(2)] = inst_27606);

(statearr_27643_27681[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27617 === (8))){
var state_27616__$1 = state_27616;
var statearr_27644_27682 = state_27616__$1;
(statearr_27644_27682[(2)] = null);

(statearr_27644_27682[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18859__auto__,validate__19133__auto__,ufv___27652,output_schema27475_27653,input_schema27476_27654,input_checker27477_27655,output_checker27478_27656))
;
return ((function (switch__18838__auto__,c__18859__auto__,validate__19133__auto__,ufv___27652,output_schema27475_27653,input_schema27476_27654,input_checker27477_27655,output_checker27478_27656){
return (function() {
var snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto__ = null;
var snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto____0 = (function (){
var statearr_27648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27648[(0)] = snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto__);

(statearr_27648[(1)] = (1));

return statearr_27648;
});
var snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto____1 = (function (state_27616){
while(true){
var ret_value__18840__auto__ = (function (){try{while(true){
var result__18841__auto__ = switch__18838__auto__.call(null,state_27616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18841__auto__;
}
break;
}
}catch (e27649){if((e27649 instanceof Object)){
var ex__18842__auto__ = e27649;
var statearr_27650_27683 = state_27616;
(statearr_27650_27683[(5)] = ex__18842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27684 = state_27616;
state_27616 = G__27684;
continue;
} else {
return ret_value__18840__auto__;
}
break;
}
});
snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto__ = function(state_27616){
switch(arguments.length){
case 0:
return snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto____0.call(this);
case 1:
return snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto____1.call(this,state_27616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$0 = snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto____0;
snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$1 = snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto____1;
return snergly$algorithms$maze_aldous_broder_$_state_machine__18839__auto__;
})()
;})(switch__18838__auto__,c__18859__auto__,validate__19133__auto__,ufv___27652,output_schema27475_27653,input_schema27476_27654,input_checker27477_27655,output_checker27478_27656))
})();
var state__18861__auto__ = (function (){var statearr_27651 = f__18860__auto__.call(null);
(statearr_27651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18859__auto__);

return statearr_27651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18861__auto__);
});})(c__18859__auto__,validate__19133__auto__,ufv___27652,output_schema27475_27653,input_schema27476_27654,input_checker27477_27655,output_checker27478_27656))
);

return c__18859__auto__;
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___27685 = output_checker27478_27656.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___27685)){
var error__19135__auto___27686 = temp__4425__auto___27685;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-aldous-broder","maze-aldous-broder",-296877067,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27686)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27475_27653,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27686], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___27652,output_schema27475_27653,input_schema27476_27654,input_checker27477_27655,output_checker27478_27656))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_aldous_broder),schema.core.make_fn_schema.call(null,output_schema27475_27653,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27476_27654], null)));

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
var G__27687 = next_coord;
var G__27688 = (((position < (0)))?cljs.core.conj.call(null,path,next_coord):cljs.core.subvec.call(null,path,(0),(position + (1))));
current_coord = G__27687;
path = G__27688;
continue;
}
break;
}
});
snergly.algorithms.wilsons_carve_passage = (function snergly$algorithms$wilsons_carve_passage(grid,path,unvisited,result_chan,report_partial_steps_QMARK_){
var grid__$1 = grid;
var unvisited__$1 = unvisited;
var G__27727 = cljs.core.partition.call(null,(2),(1),path);
var vec__27728 = G__27727;
var vec__27729 = cljs.core.nth.call(null,vec__27728,(0),null);
var coord1 = cljs.core.nth.call(null,vec__27729,(0),null);
var coord2 = cljs.core.nth.call(null,vec__27729,(1),null);
var pairs = cljs.core.nthnext.call(null,vec__27728,(1));
var grid__$2 = grid__$1;
var unvisited__$2 = unvisited__$1;
var G__27727__$1 = G__27727;
while(true){
var grid__$3 = grid__$2;
var unvisited__$3 = unvisited__$2;
var vec__27730 = G__27727__$1;
var vec__27731 = cljs.core.nth.call(null,vec__27730,(0),null);
var coord1__$1 = cljs.core.nth.call(null,vec__27731,(0),null);
var coord2__$1 = cljs.core.nth.call(null,vec__27731,(1),null);
var pairs__$1 = cljs.core.nthnext.call(null,vec__27730,(1));
var c__18859__auto___27761 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (grid__$2,unvisited__$2,G__27727__$1,c__18859__auto___27761,grid__$3,unvisited__$3,vec__27730,vec__27731,coord1__$1,coord2__$1,pairs__$1,grid__$1,unvisited__$1,G__27727,vec__27728,vec__27729,coord1,coord2,pairs){
return (function (){
var f__18860__auto__ = (function (){var switch__18838__auto__ = ((function (grid__$2,unvisited__$2,G__27727__$1,c__18859__auto___27761,grid__$3,unvisited__$3,vec__27730,vec__27731,coord1__$1,coord2__$1,pairs__$1,grid__$1,unvisited__$1,G__27727,vec__27728,vec__27729,coord1,coord2,pairs){
return (function (state_27744){
var state_val_27745 = (state_27744[(1)]);
if((state_val_27745 === (1))){
var state_27744__$1 = state_27744;
if(cljs.core.truth_(report_partial_steps_QMARK_)){
var statearr_27746_27762 = state_27744__$1;
(statearr_27746_27762[(1)] = (2));

} else {
var statearr_27747_27763 = state_27744__$1;
(statearr_27747_27763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27745 === (2))){
var inst_27733 = snergly.grid.changed_QMARK_.call(null,grid__$3);
var state_27744__$1 = state_27744;
var statearr_27748_27764 = state_27744__$1;
(statearr_27748_27764[(2)] = inst_27733);

(statearr_27748_27764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27745 === (3))){
var state_27744__$1 = state_27744;
var statearr_27749_27765 = state_27744__$1;
(statearr_27749_27765[(2)] = report_partial_steps_QMARK_);

(statearr_27749_27765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27745 === (4))){
var inst_27736 = (state_27744[(2)]);
var state_27744__$1 = state_27744;
if(cljs.core.truth_(inst_27736)){
var statearr_27750_27766 = state_27744__$1;
(statearr_27750_27766[(1)] = (5));

} else {
var statearr_27751_27767 = state_27744__$1;
(statearr_27751_27767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27745 === (5))){
var state_27744__$1 = state_27744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27744__$1,(8),result_chan,grid__$3);
} else {
if((state_val_27745 === (6))){
var state_27744__$1 = state_27744;
var statearr_27752_27768 = state_27744__$1;
(statearr_27752_27768[(2)] = null);

(statearr_27752_27768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27745 === (7))){
var inst_27742 = (state_27744[(2)]);
var state_27744__$1 = state_27744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27744__$1,inst_27742);
} else {
if((state_val_27745 === (8))){
var inst_27739 = (state_27744[(2)]);
var state_27744__$1 = state_27744;
var statearr_27753_27769 = state_27744__$1;
(statearr_27753_27769[(2)] = inst_27739);

(statearr_27753_27769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(grid__$2,unvisited__$2,G__27727__$1,c__18859__auto___27761,grid__$3,unvisited__$3,vec__27730,vec__27731,coord1__$1,coord2__$1,pairs__$1,grid__$1,unvisited__$1,G__27727,vec__27728,vec__27729,coord1,coord2,pairs))
;
return ((function (grid__$2,unvisited__$2,G__27727__$1,switch__18838__auto__,c__18859__auto___27761,grid__$3,unvisited__$3,vec__27730,vec__27731,coord1__$1,coord2__$1,pairs__$1,grid__$1,unvisited__$1,G__27727,vec__27728,vec__27729,coord1,coord2,pairs){
return (function() {
var snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto__ = null;
var snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto____0 = (function (){
var statearr_27757 = [null,null,null,null,null,null,null];
(statearr_27757[(0)] = snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto__);

(statearr_27757[(1)] = (1));

return statearr_27757;
});
var snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto____1 = (function (state_27744){
while(true){
var ret_value__18840__auto__ = (function (){try{while(true){
var result__18841__auto__ = switch__18838__auto__.call(null,state_27744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18841__auto__;
}
break;
}
}catch (e27758){if((e27758 instanceof Object)){
var ex__18842__auto__ = e27758;
var statearr_27759_27770 = state_27744;
(statearr_27759_27770[(5)] = ex__18842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27771 = state_27744;
state_27744 = G__27771;
continue;
} else {
return ret_value__18840__auto__;
}
break;
}
});
snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto__ = function(state_27744){
switch(arguments.length){
case 0:
return snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto____0.call(this);
case 1:
return snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto____1.call(this,state_27744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$0 = snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto____0;
snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$1 = snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto____1;
return snergly$algorithms$wilsons_carve_passage_$_state_machine__18839__auto__;
})()
;})(grid__$2,unvisited__$2,G__27727__$1,switch__18838__auto__,c__18859__auto___27761,grid__$3,unvisited__$3,vec__27730,vec__27731,coord1__$1,coord2__$1,pairs__$1,grid__$1,unvisited__$1,G__27727,vec__27728,vec__27729,coord1,coord2,pairs))
})();
var state__18861__auto__ = (function (){var statearr_27760 = f__18860__auto__.call(null);
(statearr_27760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18859__auto___27761);

return statearr_27760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18861__auto__);
});})(grid__$2,unvisited__$2,G__27727__$1,c__18859__auto___27761,grid__$3,unvisited__$3,vec__27730,vec__27731,coord1__$1,coord2__$1,pairs__$1,grid__$1,unvisited__$1,G__27727,vec__27728,vec__27729,coord1,coord2,pairs))
);


var new_grid = snergly.grid.link_cells.call(null,snergly.grid.begin_step.call(null,grid__$3),snergly.grid.grid_cell.call(null,grid__$3,coord1__$1),coord2__$1);
var new_unvisited = cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,coord1__$1),unvisited__$3);
if(cljs.core.empty_QMARK_.call(null,pairs__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_grid,new_unvisited], null);
} else {
var G__27772 = new_grid;
var G__27773 = new_unvisited;
var G__27774 = pairs__$1;
grid__$2 = G__27772;
unvisited__$2 = G__27773;
G__27727__$1 = G__27774;
continue;
}
break;
}
});
var ufv___27782 = schema.utils.use_fn_validation;
var output_schema27775_27783 = snergly.grid.Grid;
var input_schema27776_27784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)))], null);
var input_checker27777_27785 = schema.core.checker.call(null,input_schema27776_27784);
var output_checker27778_27786 = schema.core.checker.call(null,output_schema27775_27783);
var ret__20577__auto___27787 = /**
 * Inputs: [grid :- g/Grid]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_wilsons_sync = ((function (ufv___27782,output_schema27775_27783,input_schema27776_27784,input_checker27777_27785,output_checker27778_27786){
return (function snergly$algorithms$maze_wilsons_sync(G__27779){
var validate__19133__auto__ = ufv___27782.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___27788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27779], null);
var temp__4425__auto___27789 = input_checker27777_27785.call(null,args__19134__auto___27788);
if(cljs.core.truth_(temp__4425__auto___27789)){
var error__19135__auto___27790 = temp__4425__auto___27789;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-wilsons-sync","maze-wilsons-sync",947725992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27790)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27776_27784,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___27788,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27790], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__27779;
while(true){
var grid__$1 = grid;
var unvisited = cljs.core.rest.call(null,cljs.core.shuffle.call(null,snergly.grid.grid_coords.call(null,grid__$1)));
var coord = cljs.core.rand_nth.call(null,unvisited);
while(true){
var path = snergly.algorithms.wilsons_loop_erased_walk.call(null,grid__$1,coord,unvisited);
var vec__27781 = snergly.algorithms.wilsons_carve_passage.call(null,grid__$1,path,unvisited,null,false);
var new_grid = cljs.core.nth.call(null,vec__27781,(0),null);
var new_unvisited = cljs.core.nth.call(null,vec__27781,(1),null);
if(cljs.core.empty_QMARK_.call(null,new_unvisited)){
return cljs.core.assoc.call(null,new_grid,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"wilsons");
} else {
var G__27791 = new_grid;
var G__27792 = new_unvisited;
var G__27793 = cljs.core.rand_nth.call(null,new_unvisited);
grid__$1 = G__27791;
unvisited = G__27792;
coord = G__27793;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___27794 = output_checker27778_27786.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___27794)){
var error__19135__auto___27795 = temp__4425__auto___27794;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-wilsons-sync","maze-wilsons-sync",947725992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27795)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27775_27783,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27795], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___27782,output_schema27775_27783,input_schema27776_27784,input_checker27777_27785,output_checker27778_27786))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_wilsons_sync),schema.core.make_fn_schema.call(null,output_schema27775_27783,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27776_27784], null)));

var ufv___27891 = schema.utils.use_fn_validation;
var output_schema27796_27892 = schema.core.Any;
var input_schema27797_27893 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"report-partial-steps?","report-partial-steps?",-1887557950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker27798_27894 = schema.core.checker.call(null,input_schema27797_27893);
var output_checker27799_27895 = schema.core.checker.call(null,output_schema27796_27892);
var ret__20577__auto___27896 = /**
 * Inputs: [grid :- g/Grid result-chan report-partial-steps?]
 */
snergly.algorithms.maze_wilsons = ((function (ufv___27891,output_schema27796_27892,input_schema27797_27893,input_checker27798_27894,output_checker27799_27895){
return (function snergly$algorithms$maze_wilsons(G__27800,G__27801,G__27802){
var validate__19133__auto__ = ufv___27891.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___27897 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27800,G__27801,G__27802], null);
var temp__4425__auto___27898 = input_checker27798_27894.call(null,args__19134__auto___27897);
if(cljs.core.truth_(temp__4425__auto___27898)){
var error__19135__auto___27899 = temp__4425__auto___27898;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-wilsons","maze-wilsons",-1740887941,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27899)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27797_27893,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___27897,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27899], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__27800;
var result_chan = G__27801;
var report_partial_steps_QMARK_ = G__27802;
while(true){
var c__18859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18859__auto__,validate__19133__auto__,ufv___27891,output_schema27796_27892,input_schema27797_27893,input_checker27798_27894,output_checker27799_27895){
return (function (){
var f__18860__auto__ = (function (){var switch__18838__auto__ = ((function (c__18859__auto__,validate__19133__auto__,ufv___27891,output_schema27796_27892,input_schema27797_27893,input_checker27798_27894,output_checker27799_27895){
return (function (state_27873){
var state_val_27874 = (state_27873[(1)]);
if((state_val_27874 === (1))){
var inst_27847 = cljs.core.assoc.call(null,grid,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"wilsons");
var inst_27848 = snergly.grid.grid_coords.call(null,inst_27847);
var inst_27849 = cljs.core.shuffle.call(null,inst_27848);
var inst_27850 = cljs.core.rest.call(null,inst_27849);
var inst_27851 = cljs.core.rand_nth.call(null,inst_27850);
var inst_27852 = inst_27847;
var inst_27853 = inst_27850;
var inst_27854 = inst_27851;
var state_27873__$1 = (function (){var statearr_27875 = state_27873;
(statearr_27875[(7)] = inst_27852);

(statearr_27875[(8)] = inst_27853);

(statearr_27875[(9)] = inst_27854);

return statearr_27875;
})();
var statearr_27876_27900 = state_27873__$1;
(statearr_27876_27900[(2)] = null);

(statearr_27876_27900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (2))){
var inst_27860 = (state_27873[(10)]);
var inst_27852 = (state_27873[(7)]);
var inst_27853 = (state_27873[(8)]);
var inst_27854 = (state_27873[(9)]);
var inst_27857 = snergly.algorithms.wilsons_loop_erased_walk.call(null,inst_27852,inst_27854,inst_27853);
var inst_27858 = snergly.algorithms.wilsons_carve_passage.call(null,inst_27852,inst_27857,inst_27853,result_chan,report_partial_steps_QMARK_);
var inst_27859 = cljs.core.nth.call(null,inst_27858,(0),null);
var inst_27860__$1 = cljs.core.nth.call(null,inst_27858,(1),null);
var inst_27861 = cljs.core.empty_QMARK_.call(null,inst_27860__$1);
var state_27873__$1 = (function (){var statearr_27877 = state_27873;
(statearr_27877[(10)] = inst_27860__$1);

(statearr_27877[(11)] = inst_27859);

return statearr_27877;
})();
if(inst_27861){
var statearr_27878_27901 = state_27873__$1;
(statearr_27878_27901[(1)] = (4));

} else {
var statearr_27879_27902 = state_27873__$1;
(statearr_27879_27902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (3))){
var inst_27871 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27873__$1,inst_27871);
} else {
if((state_val_27874 === (4))){
var inst_27859 = (state_27873[(11)]);
var state_27873__$1 = state_27873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27873__$1,(7),result_chan,inst_27859);
} else {
if((state_val_27874 === (5))){
var inst_27860 = (state_27873[(10)]);
var inst_27859 = (state_27873[(11)]);
var inst_27866 = cljs.core.rand_nth.call(null,inst_27860);
var inst_27852 = inst_27859;
var inst_27853 = inst_27860;
var inst_27854 = inst_27866;
var state_27873__$1 = (function (){var statearr_27880 = state_27873;
(statearr_27880[(7)] = inst_27852);

(statearr_27880[(8)] = inst_27853);

(statearr_27880[(9)] = inst_27854);

return statearr_27880;
})();
var statearr_27881_27903 = state_27873__$1;
(statearr_27881_27903[(2)] = null);

(statearr_27881_27903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (6))){
var inst_27869 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
var statearr_27882_27904 = state_27873__$1;
(statearr_27882_27904[(2)] = inst_27869);

(statearr_27882_27904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27874 === (7))){
var inst_27864 = (state_27873[(2)]);
var state_27873__$1 = state_27873;
var statearr_27883_27905 = state_27873__$1;
(statearr_27883_27905[(2)] = inst_27864);

(statearr_27883_27905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18859__auto__,validate__19133__auto__,ufv___27891,output_schema27796_27892,input_schema27797_27893,input_checker27798_27894,output_checker27799_27895))
;
return ((function (switch__18838__auto__,c__18859__auto__,validate__19133__auto__,ufv___27891,output_schema27796_27892,input_schema27797_27893,input_checker27798_27894,output_checker27799_27895){
return (function() {
var snergly$algorithms$maze_wilsons_$_state_machine__18839__auto__ = null;
var snergly$algorithms$maze_wilsons_$_state_machine__18839__auto____0 = (function (){
var statearr_27887 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27887[(0)] = snergly$algorithms$maze_wilsons_$_state_machine__18839__auto__);

(statearr_27887[(1)] = (1));

return statearr_27887;
});
var snergly$algorithms$maze_wilsons_$_state_machine__18839__auto____1 = (function (state_27873){
while(true){
var ret_value__18840__auto__ = (function (){try{while(true){
var result__18841__auto__ = switch__18838__auto__.call(null,state_27873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18841__auto__;
}
break;
}
}catch (e27888){if((e27888 instanceof Object)){
var ex__18842__auto__ = e27888;
var statearr_27889_27906 = state_27873;
(statearr_27889_27906[(5)] = ex__18842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27907 = state_27873;
state_27873 = G__27907;
continue;
} else {
return ret_value__18840__auto__;
}
break;
}
});
snergly$algorithms$maze_wilsons_$_state_machine__18839__auto__ = function(state_27873){
switch(arguments.length){
case 0:
return snergly$algorithms$maze_wilsons_$_state_machine__18839__auto____0.call(this);
case 1:
return snergly$algorithms$maze_wilsons_$_state_machine__18839__auto____1.call(this,state_27873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
snergly$algorithms$maze_wilsons_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$0 = snergly$algorithms$maze_wilsons_$_state_machine__18839__auto____0;
snergly$algorithms$maze_wilsons_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$1 = snergly$algorithms$maze_wilsons_$_state_machine__18839__auto____1;
return snergly$algorithms$maze_wilsons_$_state_machine__18839__auto__;
})()
;})(switch__18838__auto__,c__18859__auto__,validate__19133__auto__,ufv___27891,output_schema27796_27892,input_schema27797_27893,input_checker27798_27894,output_checker27799_27895))
})();
var state__18861__auto__ = (function (){var statearr_27890 = f__18860__auto__.call(null);
(statearr_27890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18859__auto__);

return statearr_27890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18861__auto__);
});})(c__18859__auto__,validate__19133__auto__,ufv___27891,output_schema27796_27892,input_schema27797_27893,input_checker27798_27894,output_checker27799_27895))
);

return c__18859__auto__;
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___27908 = output_checker27799_27895.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___27908)){
var error__19135__auto___27909 = temp__4425__auto___27908;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-wilsons","maze-wilsons",-1740887941,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27909)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27796_27892,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27909], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___27891,output_schema27796_27892,input_schema27797_27893,input_checker27798_27894,output_checker27799_27895))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_wilsons),schema.core.make_fn_schema.call(null,output_schema27796_27892,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27797_27893], null)));

snergly.algorithms.hunt_and_kill_start_new_walk = (function snergly$algorithms$hunt_and_kill_start_new_walk(grid){
var G__27916 = snergly.grid.grid_coords.call(null,grid);
var vec__27917 = G__27916;
var current_coord = cljs.core.nth.call(null,vec__27917,(0),null);
var other_coords = cljs.core.nthnext.call(null,vec__27917,(1));
var G__27916__$1 = G__27916;
while(true){
var vec__27918 = G__27916__$1;
var current_coord__$1 = cljs.core.nth.call(null,vec__27918,(0),null);
var other_coords__$1 = cljs.core.nthnext.call(null,vec__27918,(1));
var current_cell = snergly.grid.grid_cell.call(null,grid,current_coord__$1);
var visited_neighbors = cljs.core.remove.call(null,((function (G__27916__$1,current_cell,vec__27918,current_coord__$1,other_coords__$1,G__27916,vec__27917,current_coord,other_coords){
return (function (p1__27910_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(snergly.grid.grid_cell.call(null,grid,p1__27910_SHARP_)));
});})(G__27916__$1,current_cell,vec__27918,current_coord__$1,other_coords__$1,G__27916,vec__27917,current_coord,other_coords))
,snergly.grid.cell_neighbors.call(null,current_cell));
if(cljs.core.truth_((function (){var and__16822__auto__ = cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(current_cell));
if(and__16822__auto__){
return cljs.core.not_empty.call(null,visited_neighbors);
} else {
return and__16822__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.link_cells.call(null,grid,current_cell,cljs.core.rand_nth.call(null,visited_neighbors)),current_coord__$1], null);
} else {
if(cljs.core.empty_QMARK_.call(null,other_coords__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [grid,null], null);
} else {
var G__27919 = other_coords__$1;
G__27916__$1 = G__27919;
continue;

}
}
break;
}
});
snergly.algorithms.hunt_and_kill_step = (function snergly$algorithms$hunt_and_kill_step(grid,current_coord){
var current_cell = snergly.grid.grid_cell.call(null,grid,current_coord);
var unvisited_neighbors = cljs.core.filter.call(null,((function (current_cell){
return (function (p1__27920_SHARP_){
return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(snergly.grid.grid_cell.call(null,grid,p1__27920_SHARP_)));
});})(current_cell))
,snergly.grid.cell_neighbors.call(null,current_cell));
if(cljs.core.empty_QMARK_.call(null,unvisited_neighbors)){
return snergly.algorithms.hunt_and_kill_start_new_walk.call(null,grid);
} else {
var neighbor = cljs.core.rand_nth.call(null,unvisited_neighbors);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [snergly.grid.link_cells.call(null,grid,current_cell,neighbor),neighbor], null);
}
});
var ufv___27928 = schema.utils.use_fn_validation;
var output_schema27921_27929 = snergly.grid.Grid;
var input_schema27922_27930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)))], null);
var input_checker27923_27931 = schema.core.checker.call(null,input_schema27922_27930);
var output_checker27924_27932 = schema.core.checker.call(null,output_schema27921_27929);
var ret__20577__auto___27933 = /**
 * Inputs: [grid :- g/Grid]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_hunt_and_kill_sync = ((function (ufv___27928,output_schema27921_27929,input_schema27922_27930,input_checker27923_27931,output_checker27924_27932){
return (function snergly$algorithms$maze_hunt_and_kill_sync(G__27925){
var validate__19133__auto__ = ufv___27928.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___27934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27925], null);
var temp__4425__auto___27935 = input_checker27923_27931.call(null,args__19134__auto___27934);
if(cljs.core.truth_(temp__4425__auto___27935)){
var error__19135__auto___27936 = temp__4425__auto___27935;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-hunt-and-kill-sync","maze-hunt-and-kill-sync",1846029001,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27936)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27922_27930,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___27934,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27936], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__27925;
while(true){
var grid__$1 = grid;
var current_coord = snergly.grid.random_coord.call(null,grid__$1);
while(true){
var vec__27927 = snergly.algorithms.hunt_and_kill_step.call(null,grid__$1,current_coord);
var new_grid = cljs.core.nth.call(null,vec__27927,(0),null);
var next_coord = cljs.core.nth.call(null,vec__27927,(1),null);
if(cljs.core.not.call(null,next_coord)){
return cljs.core.assoc.call(null,new_grid,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"hunt-and-kill");
} else {
var G__27937 = new_grid;
var G__27938 = next_coord;
grid__$1 = G__27937;
current_coord = G__27938;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___27939 = output_checker27924_27932.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___27939)){
var error__19135__auto___27940 = temp__4425__auto___27939;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-hunt-and-kill-sync","maze-hunt-and-kill-sync",1846029001,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___27940)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27921_27929,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___27940], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___27928,output_schema27921_27929,input_schema27922_27930,input_checker27923_27931,output_checker27924_27932))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_hunt_and_kill_sync),schema.core.make_fn_schema.call(null,output_schema27921_27929,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27922_27930], null)));

var ufv___28090 = schema.utils.use_fn_validation;
var output_schema27941_28091 = schema.core.Any;
var input_schema27942_28092 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"report-partial-steps?","report-partial-steps?",-1887557950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker27943_28093 = schema.core.checker.call(null,input_schema27942_28092);
var output_checker27944_28094 = schema.core.checker.call(null,output_schema27941_28091);
var ret__20577__auto___28095 = /**
 * Inputs: [grid :- g/Grid result-chan report-partial-steps?]
 */
snergly.algorithms.maze_hunt_and_kill = ((function (ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094){
return (function snergly$algorithms$maze_hunt_and_kill(G__27945,G__27946,G__27947){
var validate__19133__auto__ = ufv___28090.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___28096 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27945,G__27946,G__27947], null);
var temp__4425__auto___28097 = input_checker27943_28093.call(null,args__19134__auto___28096);
if(cljs.core.truth_(temp__4425__auto___28097)){
var error__19135__auto___28098 = temp__4425__auto___28097;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-hunt-and-kill","maze-hunt-and-kill",708667020,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___28098)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27942_28092,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___28096,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___28098], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__27945;
var result_chan = G__27946;
var report_partial_steps_QMARK_ = G__27947;
while(true){
var c__18859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094){
return (function (){
var f__18860__auto__ = (function (){var switch__18838__auto__ = ((function (c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094){
return (function (state_28057){
var state_val_28058 = (state_28057[(1)]);
if((state_val_28058 === (1))){
var inst_28019 = cljs.core.assoc.call(null,grid,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667),"hunt-and-kill");
var inst_28020 = snergly.grid.random_coord.call(null,inst_28019);
var inst_28021 = inst_28019;
var inst_28022 = inst_28020;
var state_28057__$1 = (function (){var statearr_28059 = state_28057;
(statearr_28059[(7)] = inst_28022);

(statearr_28059[(8)] = inst_28021);

return statearr_28059;
})();
var statearr_28060_28099 = state_28057__$1;
(statearr_28060_28099[(2)] = null);

(statearr_28060_28099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (2))){
var inst_28022 = (state_28057[(7)]);
var inst_28045 = (state_28057[(9)]);
var inst_28021 = (state_28057[(8)]);
var inst_28038 = cljs.core.async.chan.call(null,(1));
var inst_28039 = (function (){var grid__$1 = inst_28021;
var current_coord = inst_28022;
var c__18859__auto____$1 = inst_28038;
return ((function (grid__$1,current_coord,c__18859__auto____$1,inst_28022,inst_28045,inst_28021,inst_28038,state_val_28058,c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094){
return (function (){
var f__18860__auto__ = (function (){var switch__18838__auto__ = ((function (grid__$1,current_coord,c__18859__auto____$1,inst_28022,inst_28045,inst_28021,inst_28038,state_val_28058,c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094){
return (function (state_28036){
var state_val_28037 = (state_28036[(1)]);
if((state_val_28037 === (1))){
var state_28036__$1 = state_28036;
if(cljs.core.truth_(report_partial_steps_QMARK_)){
var statearr_28061_28100 = state_28036__$1;
(statearr_28061_28100[(1)] = (2));

} else {
var statearr_28062_28101 = state_28036__$1;
(statearr_28062_28101[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (2))){
var inst_28025 = snergly.grid.changed_QMARK_.call(null,grid__$1);
var state_28036__$1 = state_28036;
var statearr_28063_28102 = state_28036__$1;
(statearr_28063_28102[(2)] = inst_28025);

(statearr_28063_28102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (3))){
var state_28036__$1 = state_28036;
var statearr_28064_28103 = state_28036__$1;
(statearr_28064_28103[(2)] = report_partial_steps_QMARK_);

(statearr_28064_28103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (4))){
var inst_28028 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
if(cljs.core.truth_(inst_28028)){
var statearr_28065_28104 = state_28036__$1;
(statearr_28065_28104[(1)] = (5));

} else {
var statearr_28066_28105 = state_28036__$1;
(statearr_28066_28105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (5))){
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28036__$1,(8),result_chan,grid__$1);
} else {
if((state_val_28037 === (6))){
var state_28036__$1 = state_28036;
var statearr_28067_28106 = state_28036__$1;
(statearr_28067_28106[(2)] = null);

(statearr_28067_28106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28037 === (7))){
var inst_28034 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28036__$1,inst_28034);
} else {
if((state_val_28037 === (8))){
var inst_28031 = (state_28036[(2)]);
var state_28036__$1 = state_28036;
var statearr_28068_28107 = state_28036__$1;
(statearr_28068_28107[(2)] = inst_28031);

(statearr_28068_28107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(grid__$1,current_coord,c__18859__auto____$1,inst_28022,inst_28045,inst_28021,inst_28038,state_val_28058,c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094))
;
return ((function (switch__18838__auto__,grid__$1,current_coord,c__18859__auto____$1,inst_28022,inst_28045,inst_28021,inst_28038,state_val_28058,c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094){
return (function() {
var snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__ = null;
var snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____0 = (function (){
var statearr_28072 = [null,null,null,null,null,null,null];
(statearr_28072[(0)] = snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__);

(statearr_28072[(1)] = (1));

return statearr_28072;
});
var snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____1 = (function (state_28036){
while(true){
var ret_value__18840__auto__ = (function (){try{while(true){
var result__18841__auto__ = switch__18838__auto__.call(null,state_28036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18841__auto__;
}
break;
}
}catch (e28073){if((e28073 instanceof Object)){
var ex__18842__auto__ = e28073;
var statearr_28074_28108 = state_28036;
(statearr_28074_28108[(5)] = ex__18842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28109 = state_28036;
state_28036 = G__28109;
continue;
} else {
return ret_value__18840__auto__;
}
break;
}
});
snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__ = function(state_28036){
switch(arguments.length){
case 0:
return snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____0.call(this);
case 1:
return snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____1.call(this,state_28036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$0 = snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____0;
snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$1 = snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____1;
return snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__;
})()
;})(switch__18838__auto__,grid__$1,current_coord,c__18859__auto____$1,inst_28022,inst_28045,inst_28021,inst_28038,state_val_28058,c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094))
})();
var state__18861__auto__ = (function (){var statearr_28075 = f__18860__auto__.call(null);
(statearr_28075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18859__auto____$1);

return statearr_28075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18861__auto__);
});
;})(grid__$1,current_coord,c__18859__auto____$1,inst_28022,inst_28045,inst_28021,inst_28038,state_val_28058,c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094))
})();
var inst_28040 = cljs.core.async.impl.dispatch.run.call(null,inst_28039);
var inst_28042 = snergly.grid.begin_step.call(null,inst_28021);
var inst_28043 = snergly.algorithms.hunt_and_kill_step.call(null,inst_28042,inst_28022);
var inst_28044 = cljs.core.nth.call(null,inst_28043,(0),null);
var inst_28045__$1 = cljs.core.nth.call(null,inst_28043,(1),null);
var inst_28046 = cljs.core.not.call(null,inst_28045__$1);
var state_28057__$1 = (function (){var statearr_28076 = state_28057;
(statearr_28076[(9)] = inst_28045__$1);

(statearr_28076[(10)] = inst_28040);

(statearr_28076[(11)] = inst_28044);

return statearr_28076;
})();
if(inst_28046){
var statearr_28077_28110 = state_28057__$1;
(statearr_28077_28110[(1)] = (4));

} else {
var statearr_28078_28111 = state_28057__$1;
(statearr_28078_28111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (3))){
var inst_28055 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28057__$1,inst_28055);
} else {
if((state_val_28058 === (4))){
var inst_28044 = (state_28057[(11)]);
var state_28057__$1 = state_28057;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28057__$1,(7),result_chan,inst_28044);
} else {
if((state_val_28058 === (5))){
var inst_28045 = (state_28057[(9)]);
var inst_28044 = (state_28057[(11)]);
var inst_28021 = inst_28044;
var inst_28022 = inst_28045;
var state_28057__$1 = (function (){var statearr_28079 = state_28057;
(statearr_28079[(7)] = inst_28022);

(statearr_28079[(8)] = inst_28021);

return statearr_28079;
})();
var statearr_28080_28112 = state_28057__$1;
(statearr_28080_28112[(2)] = null);

(statearr_28080_28112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (6))){
var inst_28053 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
var statearr_28081_28113 = state_28057__$1;
(statearr_28081_28113[(2)] = inst_28053);

(statearr_28081_28113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28058 === (7))){
var inst_28049 = (state_28057[(2)]);
var state_28057__$1 = state_28057;
var statearr_28082_28114 = state_28057__$1;
(statearr_28082_28114[(2)] = inst_28049);

(statearr_28082_28114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094))
;
return ((function (switch__18838__auto__,c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094){
return (function() {
var snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__ = null;
var snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____0 = (function (){
var statearr_28086 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28086[(0)] = snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__);

(statearr_28086[(1)] = (1));

return statearr_28086;
});
var snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____1 = (function (state_28057){
while(true){
var ret_value__18840__auto__ = (function (){try{while(true){
var result__18841__auto__ = switch__18838__auto__.call(null,state_28057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18841__auto__;
}
break;
}
}catch (e28087){if((e28087 instanceof Object)){
var ex__18842__auto__ = e28087;
var statearr_28088_28115 = state_28057;
(statearr_28088_28115[(5)] = ex__18842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28116 = state_28057;
state_28057 = G__28116;
continue;
} else {
return ret_value__18840__auto__;
}
break;
}
});
snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__ = function(state_28057){
switch(arguments.length){
case 0:
return snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____0.call(this);
case 1:
return snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____1.call(this,state_28057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$0 = snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____0;
snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$1 = snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto____1;
return snergly$algorithms$maze_hunt_and_kill_$_state_machine__18839__auto__;
})()
;})(switch__18838__auto__,c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094))
})();
var state__18861__auto__ = (function (){var statearr_28089 = f__18860__auto__.call(null);
(statearr_28089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18859__auto__);

return statearr_28089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18861__auto__);
});})(c__18859__auto__,validate__19133__auto__,ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094))
);

return c__18859__auto__;
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___28117 = output_checker27944_28094.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___28117)){
var error__19135__auto___28118 = temp__4425__auto___28117;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-hunt-and-kill","maze-hunt-and-kill",708667020,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___28118)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27941_28091,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___28118], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___28090,output_schema27941_28091,input_schema27942_28092,input_checker27943_28093,output_checker27944_28094))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_hunt_and_kill),schema.core.make_fn_schema.call(null,output_schema27941_28091,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27942_28092], null)));

var ufv___28126 = schema.utils.use_fn_validation;
var output_schema28119_28127 = snergly.grid.Grid;
var input_schema28120_28128 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"report-partial-steps?","report-partial-steps?",-1887557950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker28121_28129 = schema.core.checker.call(null,input_schema28120_28128);
var output_checker28122_28130 = schema.core.checker.call(null,output_schema28119_28127);
var ret__20577__auto___28131 = /**
 * Inputs: [grid :- g/Grid result-chan report-partial-steps?]
 *   Returns: g/Grid
 */
snergly.algorithms.maze_recursive_backtrack = ((function (ufv___28126,output_schema28119_28127,input_schema28120_28128,input_checker28121_28129,output_checker28122_28130){
return (function snergly$algorithms$maze_recursive_backtrack(G__28123,G__28124,G__28125){
var validate__19133__auto__ = ufv___28126.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___28132 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28123,G__28124,G__28125], null);
var temp__4425__auto___28133 = input_checker28121_28129.call(null,args__19134__auto___28132);
if(cljs.core.truth_(temp__4425__auto___28133)){
var error__19135__auto___28134 = temp__4425__auto___28133;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-recursive-backtrack","maze-recursive-backtrack",1894403496,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___28134)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28120_28128,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___28132,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___28134], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__28123;
var result_chan = G__28124;
var report_partial_steps_QMARK_ = G__28125;
while(true){
return null;
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___28135 = output_checker28122_28130.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___28135)){
var error__19135__auto___28136 = temp__4425__auto___28135;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"maze-recursive-backtrack","maze-recursive-backtrack",1894403496,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___28136)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28119_28127,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___28136], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___28126,output_schema28119_28127,input_schema28120_28128,input_checker28121_28129,output_checker28122_28130))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.maze_recursive_backtrack),schema.core.make_fn_schema.call(null,output_schema28119_28127,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28120_28128], null)));

var ufv___28145 = schema.utils.use_fn_validation;
var output_schema28139_28146 = snergly.grid.Distances;
var input_schema28140_28147 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null))),schema.core.one.call(null,snergly.grid.CellPosition,cljs.core.with_meta(new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","CellPosition","g/CellPosition",-1655973548,null)], null)))], null);
var input_checker28141_28148 = schema.core.checker.call(null,input_schema28140_28147);
var output_checker28142_28149 = schema.core.checker.call(null,output_schema28139_28146);
var ret__20577__auto___28150 = /**
 * Inputs: [grid :- g/Grid start :- g/CellPosition]
 *   Returns: g/Distances
 */
snergly.algorithms.find_distances = ((function (ufv___28145,output_schema28139_28146,input_schema28140_28147,input_checker28141_28148,output_checker28142_28149){
return (function snergly$algorithms$find_distances(G__28143,G__28144){
var validate__19133__auto__ = ufv___28145.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___28151 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28143,G__28144], null);
var temp__4425__auto___28152 = input_checker28141_28148.call(null,args__19134__auto___28151);
if(cljs.core.truth_(temp__4425__auto___28152)){
var error__19135__auto___28153 = temp__4425__auto___28152;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"find-distances","find-distances",1590317418,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Distances","g/Distances",-992108335,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___28153)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28140_28147,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___28151,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___28153], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__28143;
var start = G__28144;
while(true){
var distances = cljs.core.PersistentArrayMap.fromArray([start,(0),new cljs.core.Keyword(null,"origin","origin",1037372088),start], true, false);
var current = start;
var frontier = cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY);
while(true){
var cell = snergly.grid.grid_cell.call(null,grid,current);
var current_distance = distances.call(null,current);
var links = cljs.core.remove.call(null,((function (distances,current,frontier,cell,current_distance,validate__19133__auto__,ufv___28145,output_schema28139_28146,input_schema28140_28147,input_checker28141_28148,output_checker28142_28149){
return (function (p1__28137_SHARP_){
return cljs.core.contains_QMARK_.call(null,distances,p1__28137_SHARP_);
});})(distances,current,frontier,cell,current_distance,validate__19133__auto__,ufv___28145,output_schema28139_28146,input_schema28140_28147,input_checker28141_28148,output_checker28142_28149))
,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(cell));
var next_frontier = cljs.core.apply.call(null,cljs.core.conj,frontier,links);
if(cljs.core.empty_QMARK_.call(null,next_frontier)){
return cljs.core.assoc.call(null,distances,new cljs.core.Keyword(null,"max","max",61366548),current_distance,new cljs.core.Keyword(null,"max-coord","max-coord",-881869431),current);
} else {
var G__28154 = ((cljs.core.empty_QMARK_.call(null,links))?distances:cljs.core.apply.call(null,cljs.core.assoc,distances,cljs.core.mapcat.call(null,((function (distances,current,frontier,cell,current_distance,links,next_frontier,validate__19133__auto__,ufv___28145,output_schema28139_28146,input_schema28140_28147,input_checker28141_28148,output_checker28142_28149){
return (function (p1__28138_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__28138_SHARP_,(current_distance + (1))],null));
});})(distances,current,frontier,cell,current_distance,links,next_frontier,validate__19133__auto__,ufv___28145,output_schema28139_28146,input_schema28140_28147,input_checker28141_28148,output_checker28142_28149))
,links)));
var G__28155 = cljs.core.peek.call(null,next_frontier);
var G__28156 = cljs.core.pop.call(null,next_frontier);
distances = G__28154;
current = G__28155;
frontier = G__28156;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___28157 = output_checker28142_28149.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___28157)){
var error__19135__auto___28158 = temp__4425__auto___28157;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"find-distances","find-distances",1590317418,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Distances","g/Distances",-992108335,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___28158)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28139_28146,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___28158], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___28145,output_schema28139_28146,input_schema28140_28147,input_checker28141_28148,output_checker28142_28149))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.find_distances),schema.core.make_fn_schema.call(null,output_schema28139_28146,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28140_28147], null)));

var ufv___28167 = schema.utils.use_fn_validation;
var output_schema28160_28168 = snergly.grid.Distances;
var input_schema28161_28169 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,snergly.grid.Grid,cljs.core.with_meta(new cljs.core.Symbol(null,"grid","grid",2043510127,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Grid","g/Grid",-593239385,null)], null))),schema.core.one.call(null,snergly.grid.CellPosition,cljs.core.with_meta(new cljs.core.Symbol(null,"goal","goal",-432864974,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","CellPosition","g/CellPosition",-1655973548,null)], null))),schema.core.one.call(null,snergly.grid.Distances,cljs.core.with_meta(new cljs.core.Symbol(null,"distances","distances",614087259,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Distances","g/Distances",-992108335,null)], null)))], null);
var input_checker28162_28170 = schema.core.checker.call(null,input_schema28161_28169);
var output_checker28163_28171 = schema.core.checker.call(null,output_schema28160_28168);
var ret__20577__auto___28172 = /**
 * Inputs: [grid :- g/Grid goal :- g/CellPosition distances :- g/Distances]
 *   Returns: g/Distances
 */
snergly.algorithms.find_path = ((function (ufv___28167,output_schema28160_28168,input_schema28161_28169,input_checker28162_28170,output_checker28163_28171){
return (function snergly$algorithms$find_path(G__28164,G__28165,G__28166){
var validate__19133__auto__ = ufv___28167.get_cell();
if(cljs.core.truth_(validate__19133__auto__)){
var args__19134__auto___28173 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28164,G__28165,G__28166], null);
var temp__4425__auto___28174 = input_checker28162_28170.call(null,args__19134__auto___28173);
if(cljs.core.truth_(temp__4425__auto___28174)){
var error__19135__auto___28175 = temp__4425__auto___28174;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"find-path","find-path",-63940675,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Distances","g/Distances",-992108335,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___28175)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28161_28169,new cljs.core.Keyword(null,"value","value",305978217),args__19134__auto___28173,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___28175], null));
} else {
}
} else {
}

var o__19136__auto__ = (function (){var grid = G__28164;
var goal = G__28165;
var distances = G__28166;
while(true){
var origin = new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(distances);
var current = goal;
var breadcrumbs = cljs.core.PersistentArrayMap.fromArray([origin,(0),new cljs.core.Keyword(null,"origin","origin",1037372088),origin,goal,distances.call(null,goal),new cljs.core.Keyword(null,"max-coord","max-coord",-881869431),goal,new cljs.core.Keyword(null,"max","max",61366548),distances.call(null,goal)], true, false);
while(true){
if(cljs.core._EQ_.call(null,current,origin)){
return breadcrumbs;
} else {
var current_distance = distances.call(null,current);
var neighbor = cljs.core.first.call(null,cljs.core.filter.call(null,((function (current,breadcrumbs,current_distance,origin,validate__19133__auto__,ufv___28167,output_schema28160_28168,input_schema28161_28169,input_checker28162_28170,output_checker28163_28171){
return (function (p1__28159_SHARP_){
return (distances.call(null,p1__28159_SHARP_) < current_distance);
});})(current,breadcrumbs,current_distance,origin,validate__19133__auto__,ufv___28167,output_schema28160_28168,input_schema28161_28169,input_checker28162_28170,output_checker28163_28171))
,new cljs.core.Keyword(null,"links","links",-654507394).cljs$core$IFn$_invoke$arity$1(snergly.grid.grid_cell.call(null,grid,current))));
var G__28176 = neighbor;
var G__28177 = cljs.core.assoc.call(null,breadcrumbs,neighbor,distances.call(null,neighbor));
current = G__28176;
breadcrumbs = G__28177;
continue;
}
break;
}
break;
}
})();
if(cljs.core.truth_(validate__19133__auto__)){
var temp__4425__auto___28178 = output_checker28163_28171.call(null,o__19136__auto__);
if(cljs.core.truth_(temp__4425__auto___28178)){
var error__19135__auto___28179 = temp__4425__auto___28178;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"find-path","find-path",-63940675,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("g","Distances","g/Distances",-992108335,null)], null)),cljs.core.pr_str.call(null,error__19135__auto___28179)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28160_28168,new cljs.core.Keyword(null,"value","value",305978217),o__19136__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__19135__auto___28179], null));
} else {
}
} else {
}

return o__19136__auto__;
});})(ufv___28167,output_schema28160_28168,input_schema28161_28169,input_checker28162_28170,output_checker28163_28171))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,snergly.algorithms.find_path),schema.core.make_fn_schema.call(null,output_schema28160_28168,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28161_28169], null)));

snergly.algorithms.algorithm_functions = new cljs.core.PersistentArrayMap(null, 5, ["binary-tree",snergly.algorithms.maze_binary_tree,"sidewinder",snergly.algorithms.maze_sidewinder,"aldous-broder",snergly.algorithms.maze_aldous_broder,"wilsons",snergly.algorithms.maze_wilsons,"hunt-and-kill",snergly.algorithms.maze_hunt_and_kill], null);
snergly.algorithms.synchronous_algorithm = (function snergly$algorithms$synchronous_algorithm(alg_name){
return (function (grid){
var result_chan = cljs.core.async.chan.call(null);
snergly.algorithms.algorithm_functions.call(null,alg_name).call(null,grid,result_chan,false);

return cljs.core.async._LT__BANG__BANG_.call(null,result_chan);
});
});
snergly.algorithms.algorithm_fn = (function snergly$algorithms$algorithm_fn(name,options){
var algorithm = snergly.algorithms.synchronous_algorithm.call(null,name);
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
return (function (p1__28180_SHARP_){
return snergly.util.color_cell.call(null,new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(analysis),p1__28180_SHARP_);
});})(maze,analysis,algorithm,analyze_distances,analyze_path,analyze_longest_path,analyze))
,analysis)], null));
});
;})(algorithm,analyze_distances,analyze_path,analyze_longest_path,analyze))
});

//# sourceMappingURL=algorithms.js.map