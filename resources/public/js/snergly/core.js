// Compiled by ClojureScript 1.7.170 {}
goog.provide('snergly.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('snergly.algorithms');
goog.require('cljs.core.async');
goog.require('snergly.grid');
goog.require('snergly.util');
goog.require('snergly.image');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
snergly.core.reconciler;
snergly.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","algorithms","app/algorithms",1262597650),cljs.core.sort.call(null,snergly.algorithms.algorithms),new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"algorithm","algorithm",739262820),"",new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"columns","columns",1998437288),(10),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(10),new cljs.core.Keyword(null,"grid","grid",402978600),null,new cljs.core.Keyword(null,"channel","channel",734187692),null], null)], null);
snergly.core.run = (function snergly$core$run(algorithm_name,rows,columns){
var algorithm = snergly.algorithms.synchronous_algorithm.call(null,algorithm_name);
return algorithm.call(null,snergly.grid.make_grid.call(null,rows,columns));
});
snergly.core.produce_maze_async = (function snergly$core$produce_maze_async(p__28183){
var map__28273 = p__28183;
var map__28273__$1 = ((((!((map__28273 == null)))?((((map__28273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28273):map__28273);
var maze_params = map__28273__$1;
var rows = cljs.core.get.call(null,map__28273__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__28273__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var algorithm = cljs.core.get.call(null,map__28273__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
var maze_chan = cljs.core.async.chan.call(null);
var _ = cljs.core.println.call(null,[cljs.core.str("algorithm: "),cljs.core.str(algorithm)].join(''));
var algorithm_fn = snergly.algorithms.algorithm_functions.call(null,algorithm);
om.next.transact_BANG_.call(null,snergly.core.reconciler,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("snergly.core","set-maze","snergly.core/set-maze",-926316869,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"maze-key","maze-key",-1080425983)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"channel","channel",734187692)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,maze_chan)))))))))))))));

var c__18859__auto___28361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18859__auto___28361,maze_chan,_,algorithm_fn,map__28273,map__28273__$1,maze_params,rows,columns,algorithm){
return (function (){
var f__18860__auto__ = (function (){var switch__18838__auto__ = ((function (c__18859__auto___28361,maze_chan,_,algorithm_fn,map__28273,map__28273__$1,maze_params,rows,columns,algorithm){
return (function (state_28343){
var state_val_28344 = (state_28343[(1)]);
if((state_val_28344 === (1))){
var state_28343__$1 = state_28343;
var statearr_28345_28362 = state_28343__$1;
(statearr_28345_28362[(2)] = null);

(statearr_28345_28362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (2))){
var state_28343__$1 = state_28343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28343__$1,(4),maze_chan);
} else {
if((state_val_28344 === (3))){
var inst_28341 = (state_28343[(2)]);
var state_28343__$1 = state_28343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28343__$1,inst_28341);
} else {
if((state_val_28344 === (4))){
var inst_28277 = (state_28343[(7)]);
var inst_28277__$1 = (state_28343[(2)]);
var state_28343__$1 = (function (){var statearr_28346 = state_28343;
(statearr_28346[(7)] = inst_28277__$1);

return statearr_28346;
})();
if(cljs.core.truth_(inst_28277__$1)){
var statearr_28347_28363 = state_28343__$1;
(statearr_28347_28363[(1)] = (5));

} else {
var statearr_28348_28364 = state_28343__$1;
(statearr_28348_28364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (5))){
var inst_28277 = (state_28343[(7)]);
var inst_28279 = cljs.core.List.EMPTY;
var inst_28280 = cljs.core.List.EMPTY;
var inst_28281 = new cljs.core.Symbol("snergly.core","set-maze","snergly.core/set-maze",-926316869,null);
var inst_28282 = cljs.core._conj.call(null,inst_28280,inst_28281);
var inst_28283 = cljs.core.List.EMPTY;
var inst_28284 = cljs.core.List.EMPTY;
var inst_28285 = cljs.core._conj.call(null,inst_28284,new cljs.core.Keyword(null,"maze-key","maze-key",-1080425983));
var inst_28286 = cljs.core.List.EMPTY;
var inst_28287 = cljs.core._conj.call(null,inst_28286,new cljs.core.Keyword(null,"grid","grid",402978600));
var inst_28288 = cljs.core.List.EMPTY;
var inst_28289 = cljs.core._conj.call(null,inst_28288,new cljs.core.Keyword(null,"value","value",305978217));
var inst_28290 = cljs.core.List.EMPTY;
var inst_28291 = cljs.core._conj.call(null,inst_28290,inst_28277);
var inst_28292 = cljs.core.concat.call(null,inst_28285,inst_28287,inst_28289,inst_28291);
var inst_28293 = cljs.core.seq.call(null,inst_28292);
var inst_28294 = cljs.core.sequence.call(null,inst_28293);
var inst_28295 = cljs.core.apply.call(null,cljs.core.array_map,inst_28294);
var inst_28296 = cljs.core._conj.call(null,inst_28283,inst_28295);
var inst_28297 = cljs.core.concat.call(null,inst_28282,inst_28296);
var inst_28298 = cljs.core.seq.call(null,inst_28297);
var inst_28299 = cljs.core.sequence.call(null,inst_28298);
var inst_28300 = cljs.core._conj.call(null,inst_28279,inst_28299);
var inst_28301 = cljs.core.concat.call(null,inst_28300);
var inst_28302 = cljs.core.seq.call(null,inst_28301);
var inst_28303 = cljs.core.sequence.call(null,inst_28302);
var inst_28304 = cljs.core.vec.call(null,inst_28303);
var inst_28305 = om.next.transact_BANG_.call(null,snergly.core.reconciler,inst_28304);
var inst_28306 = cljs.core.async.timeout.call(null,(1));
var state_28343__$1 = (function (){var statearr_28349 = state_28343;
(statearr_28349[(8)] = inst_28305);

return statearr_28349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28343__$1,(8),inst_28306);
} else {
if((state_val_28344 === (6))){
var inst_28311 = cljs.core.List.EMPTY;
var inst_28312 = cljs.core.List.EMPTY;
var inst_28313 = new cljs.core.Symbol("snergly.core","set-maze","snergly.core/set-maze",-926316869,null);
var inst_28314 = cljs.core._conj.call(null,inst_28312,inst_28313);
var inst_28315 = cljs.core.List.EMPTY;
var inst_28316 = cljs.core.List.EMPTY;
var inst_28317 = cljs.core._conj.call(null,inst_28316,new cljs.core.Keyword(null,"maze-key","maze-key",-1080425983));
var inst_28318 = cljs.core.List.EMPTY;
var inst_28319 = cljs.core._conj.call(null,inst_28318,new cljs.core.Keyword(null,"channel","channel",734187692));
var inst_28320 = cljs.core.List.EMPTY;
var inst_28321 = cljs.core._conj.call(null,inst_28320,new cljs.core.Keyword(null,"value","value",305978217));
var inst_28322 = cljs.core.List.EMPTY;
var inst_28323 = cljs.core._conj.call(null,inst_28322,null);
var inst_28324 = cljs.core.concat.call(null,inst_28317,inst_28319,inst_28321,inst_28323);
var inst_28325 = cljs.core.seq.call(null,inst_28324);
var inst_28326 = cljs.core.sequence.call(null,inst_28325);
var inst_28327 = cljs.core.apply.call(null,cljs.core.array_map,inst_28326);
var inst_28328 = cljs.core._conj.call(null,inst_28315,inst_28327);
var inst_28329 = cljs.core.concat.call(null,inst_28314,inst_28328);
var inst_28330 = cljs.core.seq.call(null,inst_28329);
var inst_28331 = cljs.core.sequence.call(null,inst_28330);
var inst_28332 = cljs.core._conj.call(null,inst_28311,inst_28331);
var inst_28333 = cljs.core.concat.call(null,inst_28332);
var inst_28334 = cljs.core.seq.call(null,inst_28333);
var inst_28335 = cljs.core.sequence.call(null,inst_28334);
var inst_28336 = cljs.core.vec.call(null,inst_28335);
var inst_28337 = om.next.transact_BANG_.call(null,snergly.core.reconciler,inst_28336);
var state_28343__$1 = state_28343;
var statearr_28350_28365 = state_28343__$1;
(statearr_28350_28365[(2)] = inst_28337);

(statearr_28350_28365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (7))){
var inst_28339 = (state_28343[(2)]);
var state_28343__$1 = state_28343;
var statearr_28351_28366 = state_28343__$1;
(statearr_28351_28366[(2)] = inst_28339);

(statearr_28351_28366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28344 === (8))){
var inst_28308 = (state_28343[(2)]);
var state_28343__$1 = (function (){var statearr_28352 = state_28343;
(statearr_28352[(9)] = inst_28308);

return statearr_28352;
})();
var statearr_28353_28367 = state_28343__$1;
(statearr_28353_28367[(2)] = null);

(statearr_28353_28367[(1)] = (2));


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
});})(c__18859__auto___28361,maze_chan,_,algorithm_fn,map__28273,map__28273__$1,maze_params,rows,columns,algorithm))
;
return ((function (switch__18838__auto__,c__18859__auto___28361,maze_chan,_,algorithm_fn,map__28273,map__28273__$1,maze_params,rows,columns,algorithm){
return (function() {
var snergly$core$produce_maze_async_$_state_machine__18839__auto__ = null;
var snergly$core$produce_maze_async_$_state_machine__18839__auto____0 = (function (){
var statearr_28357 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28357[(0)] = snergly$core$produce_maze_async_$_state_machine__18839__auto__);

(statearr_28357[(1)] = (1));

return statearr_28357;
});
var snergly$core$produce_maze_async_$_state_machine__18839__auto____1 = (function (state_28343){
while(true){
var ret_value__18840__auto__ = (function (){try{while(true){
var result__18841__auto__ = switch__18838__auto__.call(null,state_28343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18841__auto__;
}
break;
}
}catch (e28358){if((e28358 instanceof Object)){
var ex__18842__auto__ = e28358;
var statearr_28359_28368 = state_28343;
(statearr_28359_28368[(5)] = ex__18842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28369 = state_28343;
state_28343 = G__28369;
continue;
} else {
return ret_value__18840__auto__;
}
break;
}
});
snergly$core$produce_maze_async_$_state_machine__18839__auto__ = function(state_28343){
switch(arguments.length){
case 0:
return snergly$core$produce_maze_async_$_state_machine__18839__auto____0.call(this);
case 1:
return snergly$core$produce_maze_async_$_state_machine__18839__auto____1.call(this,state_28343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
snergly$core$produce_maze_async_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$0 = snergly$core$produce_maze_async_$_state_machine__18839__auto____0;
snergly$core$produce_maze_async_$_state_machine__18839__auto__.cljs$core$IFn$_invoke$arity$1 = snergly$core$produce_maze_async_$_state_machine__18839__auto____1;
return snergly$core$produce_maze_async_$_state_machine__18839__auto__;
})()
;})(switch__18838__auto__,c__18859__auto___28361,maze_chan,_,algorithm_fn,map__28273,map__28273__$1,maze_params,rows,columns,algorithm))
})();
var state__18861__auto__ = (function (){var statearr_28360 = f__18860__auto__.call(null);
(statearr_28360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18859__auto___28361);

return statearr_28360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18861__auto__);
});})(c__18859__auto___28361,maze_chan,_,algorithm_fn,map__28273,map__28273__$1,maze_params,rows,columns,algorithm))
);


return algorithm_fn.call(null,snergly.grid.make_grid.call(null,rows,columns),maze_chan,true);
});
if(typeof snergly.core.read !== 'undefined'){
} else {
snergly.core.read = (function (){var method_table__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"snergly.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17751__auto__,method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__));
})();
}
cljs.core._add_method.call(null,snergly.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__28370,key,params){
var map__28371 = p__28370;
var map__28371__$1 = ((((!((map__28371 == null)))?((((map__28371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28371):map__28371);
var env = map__28371__$1;
var state = cljs.core.get.call(null,map__28371__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__28373 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__28373,(0),null);
var value = cljs.core.nth.call(null,vec__28373,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
if(typeof snergly.core.produce_maze_value !== 'undefined'){
} else {
snergly.core.produce_maze_value = (function (){var method_table__17747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17750__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17751__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"snergly.core","produce-maze-value"),((function (method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__,hierarchy__17751__auto__){
return (function (k,v,s){
return k;
});})(method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__,hierarchy__17751__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17751__auto__,method_table__17747__auto__,prefer_table__17748__auto__,method_cache__17749__auto__,cached_hierarchy__17750__auto__));
})();
}
snergly.core.mutate = (function snergly$core$mutate(p__28374,key,p__28375){
var map__28380 = p__28374;
var map__28380__$1 = ((((!((map__28380 == null)))?((((map__28380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28380):map__28380);
var env = map__28380__$1;
var state = cljs.core.get.call(null,map__28380__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__28381 = p__28375;
var map__28381__$1 = ((((!((map__28381 == null)))?((((map__28381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28381):map__28381);
var params = map__28381__$1;
var maze_key = cljs.core.get.call(null,map__28381__$1,new cljs.core.Keyword(null,"maze-key","maze-key",-1080425983));
var value = cljs.core.get.call(null,map__28381__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("snergly.core","set-maze","snergly.core/set-maze",-926316869,null),key)){
var new_value = snergly.core.produce_maze_value.call(null,maze_key,value,cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_key], null)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (new_value,map__28380,map__28380__$1,env,state,map__28381,map__28381__$1,params,maze_key,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),maze_key], null),new_value);
});})(new_value,map__28380,map__28380__$1,env,state,map__28381,map__28381__$1,params,maze_key,value))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
});
cljs.core._add_method.call(null,snergly.core.produce_maze_value,new cljs.core.Keyword(null,"algorithm","algorithm",739262820),(function (_,form_value,___$1){
return form_value;
}));
cljs.core._add_method.call(null,snergly.core.produce_maze_value,new cljs.core.Keyword(null,"grid","grid",402978600),(function (_,new_value,p__28384){
var map__28385 = p__28384;
var map__28385__$1 = ((((!((map__28385 == null)))?((((map__28385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28385):map__28385);
var state = map__28385__$1;
var maze = cljs.core.get.call(null,map__28385__$1,new cljs.core.Keyword(null,"maze","maze",1753749814));
var map__28387 = maze;
var map__28387__$1 = ((((!((map__28387 == null)))?((((map__28387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28387):map__28387);
var algorithm = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
var rows = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var grid = cljs.core.get.call(null,map__28387__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
return new_value;
}));
cljs.core._add_method.call(null,snergly.core.produce_maze_value,new cljs.core.Keyword(null,"channel","channel",734187692),(function (_,value,___$1){
return value;
}));
cljs.core._add_method.call(null,snergly.core.produce_maze_value,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,form_value,___$1){
return parseInt(form_value);
}));
snergly.core.ready_to_go = (function snergly$core$ready_to_go(p__28389){
var map__28392 = p__28389;
var map__28392__$1 = ((((!((map__28392 == null)))?((((map__28392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28392):map__28392);
var maze = map__28392__$1;
var algorithm = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
var rows = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var grid = cljs.core.get.call(null,map__28392__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
return (cljs.core.not_EQ_.call(null,"",algorithm)) && ((cljs.core.integer_QMARK_.call(null,rows)) && ((rows > (1))) && ((rows < (100)))) && ((cljs.core.integer_QMARK_.call(null,columns)) && ((columns > (1))) && ((columns < (100)))) && (((grid == null)) || (cljs.core.not_EQ_.call(null,algorithm,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667).cljs$core$IFn$_invoke$arity$1(grid))) || (cljs.core.not_EQ_.call(null,rows,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(grid))) || (cljs.core.not_EQ_.call(null,columns,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(grid))));
});
/**
 * @constructor
 */
snergly.core.MazeDisplay = (function snergly$core$MazeDisplay(){
var this__21605__auto__ = this;
React.Component.apply(this__21605__auto__,arguments);

if(!((this__21605__auto__.initLocalState == null))){
this__21605__auto__.state = this__21605__auto__.initLocalState();
} else {
this__21605__auto__.state = {};
}

return this__21605__auto__;
});

snergly.core.MazeDisplay.prototype = goog.object.clone(React.Component.prototype);

var x28399_28413 = snergly.core.MazeDisplay.prototype;
x28399_28413.componentWillUpdate = ((function (x28399_28413){
return (function (next_props__21546__auto__,next_state__21547__auto__){
var this__21545__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21545__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21545__auto__);
});})(x28399_28413))
;

x28399_28413.shouldComponentUpdate = ((function (x28399_28413){
return (function (next_props__21546__auto__,next_state__21547__auto__){
var this__21545__auto__ = this;
var or__16834__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21545__auto__),goog.object.get(next_props__21546__auto__,"omcljs$value"));
if(or__16834__auto__){
return or__16834__auto__;
} else {
var and__16822__auto__ = this__21545__auto__.state;
if(cljs.core.truth_(and__16822__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21545__auto__.state,"omcljs$state"),goog.object.get(next_state__21547__auto__,"omcljs$state"));
} else {
return and__16822__auto__;
}
}
});})(x28399_28413))
;

x28399_28413.componentWillUnmount = ((function (x28399_28413){
return (function (){
var this__21545__auto__ = this;
var r__21551__auto__ = om.next.get_reconciler.call(null,this__21545__auto__);
var cfg__21552__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21551__auto__);
var st__21553__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21552__auto__);
var indexer__21550__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21552__auto__);
if((st__21553__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21553__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21545__auto__);
}

if((indexer__21550__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21550__auto__,this__21545__auto__);
}
});})(x28399_28413))
;

x28399_28413.isMounted = ((function (x28399_28413){
return (function (){
var this__21545__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21545__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28399_28413))
;

x28399_28413.componentWillMount = ((function (x28399_28413){
return (function (){
var this__21545__auto__ = this;
var indexer__21550__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21545__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21550__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21550__auto__,this__21545__auto__);
}
});})(x28399_28413))
;

x28399_28413.componentDidMount = ((function (x28399_28413){
return (function (){
var this$ = this;
var map__28400 = om.next.props.call(null,this$);
var map__28400__$1 = ((((!((map__28400 == null)))?((((map__28400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28400):map__28400);
var maze = map__28400__$1;
var grid = cljs.core.get.call(null,map__28400__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var cell_size = cljs.core.get.call(null,map__28400__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var c = this$._canvas;
var g = c.getContext("2d");
return snergly.image.image_grid.call(null,g,grid,cell_size);
});})(x28399_28413))
;

x28399_28413.componentDidUpdate = ((function (x28399_28413){
return (function (prev_props,prev_state){
var this$ = this;
var prev_props__$1 = om.next._prev_props.call(null,prev_props,this$);
var prev_state__$1 = goog.object.get(prev_state,"omcjls$previousState");
var map__28402_28414 = om.next.props.call(null,this$);
var map__28402_28415__$1 = ((((!((map__28402_28414 == null)))?((((map__28402_28414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28402_28414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28402_28414):map__28402_28414);
var maze_28416 = map__28402_28415__$1;
var grid_28417 = cljs.core.get.call(null,map__28402_28415__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var cell_size_28418 = cljs.core.get.call(null,map__28402_28415__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var c_28419 = this$._canvas;
var g_28420 = c_28419.getContext("2d");
snergly.image.image_grid.call(null,g_28420,grid_28417,cell_size_28418);

return om.next.clear_prev_props_BANG_.call(null,this$);
});})(x28399_28413))
;

x28399_28413.render = ((function (x28399_28413){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_28404 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28405 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28406 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28407 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28408 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__28409 = om.next.props.call(null,this$);
var map__28409__$1 = ((((!((map__28409 == null)))?((((map__28409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28409):map__28409);
var maze = map__28409__$1;
var grid = cljs.core.get.call(null,map__28409__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var rows = cljs.core.get.call(null,map__28409__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__28409__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var algorithm = cljs.core.get.call(null,map__28409__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
var cell_size = cljs.core.get.call(null,map__28409__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var height = ((cell_size * rows) + (1));
var width = ((cell_size * columns) + (1));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.canvas({"id": "c1", "height": height, "width": width, "ref": ((function (height,width,map__28409,map__28409__$1,maze,grid,rows,columns,algorithm,cell_size,_STAR_reconciler_STAR_28404,_STAR_depth_STAR_28405,_STAR_shared_STAR_28406,_STAR_instrument_STAR_28407,_STAR_parent_STAR_28408,this$,x28399_28413){
return (function (p1__28394_SHARP_){
return (this$["_canvas"] = p1__28394_SHARP_);
});})(height,width,map__28409,map__28409__$1,maze,grid,rows,columns,algorithm,cell_size,_STAR_reconciler_STAR_28404,_STAR_depth_STAR_28405,_STAR_shared_STAR_28406,_STAR_instrument_STAR_28407,_STAR_parent_STAR_28408,this$,x28399_28413))
})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28408;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28407;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28406;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28405;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28404;
}});})(x28399_28413))
;


snergly.core.MazeDisplay.prototype.constructor = snergly.core.MazeDisplay;

snergly.core.MazeDisplay.prototype.om$isComponent = true;

var x28411_28421 = snergly.core.MazeDisplay;
x28411_28421.om$next$IQuery$ = true;

x28411_28421.om$next$IQuery$query$arity$1 = ((function (x28411_28421){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"algorithm","algorithm",739262820)], null)], null)], null);
});})(x28411_28421))
;


var x28412_28422 = snergly.core.MazeDisplay.prototype;
x28412_28422.om$next$IQuery$ = true;

x28412_28422.om$next$IQuery$query$arity$1 = ((function (x28412_28422){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"algorithm","algorithm",739262820)], null)], null)], null);
});})(x28412_28422))
;


snergly.core.MazeDisplay.cljs$lang$type = true;

snergly.core.MazeDisplay.cljs$lang$ctorStr = "snergly.core/MazeDisplay";

snergly.core.MazeDisplay.cljs$lang$ctorPrWriter = (function (this__21607__auto__,writer__21608__auto__,opt__21609__auto__){
return cljs.core._write.call(null,writer__21608__auto__,"snergly.core/MazeDisplay");
});
snergly.core.maze_display = om.next.factory.call(null,snergly.core.MazeDisplay);
/**
 * @constructor
 */
snergly.core.MazeControlPanel = (function snergly$core$MazeControlPanel(){
var this__21605__auto__ = this;
React.Component.apply(this__21605__auto__,arguments);

if(!((this__21605__auto__.initLocalState == null))){
this__21605__auto__.state = this__21605__auto__.initLocalState();
} else {
this__21605__auto__.state = {};
}

return this__21605__auto__;
});

snergly.core.MazeControlPanel.prototype = goog.object.clone(React.Component.prototype);

var x28427_28439 = snergly.core.MazeControlPanel.prototype;
x28427_28439.componentWillUpdate = ((function (x28427_28439){
return (function (next_props__21546__auto__,next_state__21547__auto__){
var this__21545__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21545__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21545__auto__);
});})(x28427_28439))
;

x28427_28439.shouldComponentUpdate = ((function (x28427_28439){
return (function (next_props__21546__auto__,next_state__21547__auto__){
var this__21545__auto__ = this;
var or__16834__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21545__auto__),goog.object.get(next_props__21546__auto__,"omcljs$value"));
if(or__16834__auto__){
return or__16834__auto__;
} else {
var and__16822__auto__ = this__21545__auto__.state;
if(cljs.core.truth_(and__16822__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21545__auto__.state,"omcljs$state"),goog.object.get(next_state__21547__auto__,"omcljs$state"));
} else {
return and__16822__auto__;
}
}
});})(x28427_28439))
;

x28427_28439.componentWillUnmount = ((function (x28427_28439){
return (function (){
var this__21545__auto__ = this;
var r__21551__auto__ = om.next.get_reconciler.call(null,this__21545__auto__);
var cfg__21552__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21551__auto__);
var st__21553__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21552__auto__);
var indexer__21550__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21552__auto__);
if((st__21553__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21553__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21545__auto__);
}

if((indexer__21550__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21550__auto__,this__21545__auto__);
}
});})(x28427_28439))
;

x28427_28439.componentDidUpdate = ((function (x28427_28439){
return (function (prev_props__21548__auto__,prev_state__21549__auto__){
var this__21545__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21545__auto__);
});})(x28427_28439))
;

x28427_28439.isMounted = ((function (x28427_28439){
return (function (){
var this__21545__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21545__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28427_28439))
;

x28427_28439.componentWillMount = ((function (x28427_28439){
return (function (){
var this__21545__auto__ = this;
var indexer__21550__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21545__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21550__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21550__auto__,this__21545__auto__);
}
});})(x28427_28439))
;

x28427_28439.render = ((function (x28427_28439){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_28428 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28429 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28430 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28431 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28432 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__28433 = om.next.props.call(null,this$);
var map__28433__$1 = ((((!((map__28433 == null)))?((((map__28433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28433):map__28433);
var algorithms = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword("app","algorithms","app/algorithms",1262597650));
var maze = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"maze","maze",1753749814));
var map__28434 = maze;
var map__28434__$1 = ((((!((map__28434 == null)))?((((map__28434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28434):map__28434);
var algorithm = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
var rows = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var grid = cljs.core.get.call(null,map__28434__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var modify = ((function (map__28433,map__28433__$1,algorithms,maze,map__28434,map__28434__$1,algorithm,rows,columns,grid,_STAR_reconciler_STAR_28428,_STAR_depth_STAR_28429,_STAR_shared_STAR_28430,_STAR_instrument_STAR_28431,_STAR_parent_STAR_28432,this$,x28427_28439){
return (function (maze_key,e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("snergly.core","set-maze","snergly.core/set-maze",-926316869,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"maze-key","maze-key",-1080425983)),cljs.core._conj.call(null,cljs.core.List.EMPTY,maze_key),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(e["target"]["value"]))))))))))))))));
});})(map__28433,map__28433__$1,algorithms,maze,map__28434,map__28434__$1,algorithm,rows,columns,grid,_STAR_reconciler_STAR_28428,_STAR_depth_STAR_28429,_STAR_shared_STAR_28430,_STAR_instrument_STAR_28431,_STAR_parent_STAR_28432,this$,x28427_28439))
;
var go_async = ((function (map__28433,map__28433__$1,algorithms,maze,map__28434,map__28434__$1,algorithm,rows,columns,grid,modify,_STAR_reconciler_STAR_28428,_STAR_depth_STAR_28429,_STAR_shared_STAR_28430,_STAR_instrument_STAR_28431,_STAR_parent_STAR_28432,this$,x28427_28439){
return (function (maze__$1,e){
return snergly.core.produce_maze_async.call(null,maze__$1);
});})(map__28433,map__28433__$1,algorithms,maze,map__28434,map__28434__$1,algorithm,rows,columns,grid,modify,_STAR_reconciler_STAR_28428,_STAR_depth_STAR_28429,_STAR_shared_STAR_28430,_STAR_instrument_STAR_28431,_STAR_parent_STAR_28432,this$,x28427_28439))
;
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.select({"value": algorithm, "onChange": cljs.core.partial.call(null,modify,new cljs.core.Keyword(null,"algorithm","algorithm",739262820))},om.util.force_children.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.dom.option.call(null,{"key": ""},"")], null),cljs.core.map.call(null,((function (map__28433,map__28433__$1,algorithms,maze,map__28434,map__28434__$1,algorithm,rows,columns,grid,modify,go_async,_STAR_reconciler_STAR_28428,_STAR_depth_STAR_28429,_STAR_shared_STAR_28430,_STAR_instrument_STAR_28431,_STAR_parent_STAR_28432,this$,x28427_28439){
return (function (name){
return om.dom.option.call(null,{"key": name},name);
});})(map__28433,map__28433__$1,algorithms,maze,map__28434,map__28434__$1,algorithm,rows,columns,grid,modify,go_async,_STAR_reconciler_STAR_28428,_STAR_depth_STAR_28429,_STAR_shared_STAR_28430,_STAR_instrument_STAR_28431,_STAR_parent_STAR_28432,this$,x28427_28439))
,algorithms))))))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Rows: "))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "number", "value": rows, "onInput": cljs.core.partial.call(null,modify,new cljs.core.Keyword(null,"rows","rows",850049680))})),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Columns: "))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "number", "value": columns, "onInput": cljs.core.partial.call(null,modify,new cljs.core.Keyword(null,"columns","columns",1998437288))})))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.button({"disabled": cljs.core.not.call(null,snergly.core.ready_to_go.call(null,maze)), "onClick": cljs.core.partial.call(null,go_async,maze)},om.util.force_children.call(null,"Go!"))))),om.util.force_children.call(null,(cljs.core.truth_(grid)?React.DOM.div(null,om.util.force_children.call(null,snergly.core.maze_display.call(null,maze))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28432;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28431;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28430;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28429;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28428;
}});})(x28427_28439))
;


snergly.core.MazeControlPanel.prototype.constructor = snergly.core.MazeControlPanel;

snergly.core.MazeControlPanel.prototype.om$isComponent = true;

var x28437_28440 = snergly.core.MazeControlPanel;
x28437_28440.om$next$IQuery$ = true;

x28437_28440.om$next$IQuery$query$arity$1 = ((function (x28437_28440){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","algorithms","app/algorithms",1262597650),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algorithms","algorithms",1262235635),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"grid","grid",402978600)], null)], null)], null);
});})(x28437_28440))
;


var x28438_28441 = snergly.core.MazeControlPanel.prototype;
x28438_28441.om$next$IQuery$ = true;

x28438_28441.om$next$IQuery$query$arity$1 = ((function (x28438_28441){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","algorithms","app/algorithms",1262597650),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algorithms","algorithms",1262235635),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"grid","grid",402978600)], null)], null)], null);
});})(x28438_28441))
;


snergly.core.MazeControlPanel.cljs$lang$type = true;

snergly.core.MazeControlPanel.cljs$lang$ctorStr = "snergly.core/MazeControlPanel";

snergly.core.MazeControlPanel.cljs$lang$ctorPrWriter = (function (this__21607__auto__,writer__21608__auto__,opt__21609__auto__){
return cljs.core._write.call(null,writer__21608__auto__,"snergly.core/MazeControlPanel");
});
snergly.core.maze_control_panel = om.next.factory.call(null,snergly.core.MazeControlPanel);
snergly.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),snergly.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),snergly.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),snergly.core.mutate], null)),new cljs.core.Keyword(null,"logger","logger",-220675947),null], null));
om.next.add_root_BANG_.call(null,snergly.core.reconciler,snergly.core.MazeControlPanel,goog.dom.getElement("app"));
snergly.core.q = (function snergly$core$q(query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(snergly.core.reconciler);
var parser = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(config);
return parser.call(null,config,query);
});
snergly.core.t_BANG_ = (function snergly$core$t_BANG_(update){
return om.next.transact_BANG_.call(null,snergly.core.reconciler,update);
});
snergly.core.h_STAR_ = (function snergly$core$h_STAR_(){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(snergly.core.reconciler)).arr;
});
snergly.core._huuid = (function snergly$core$_huuid(uuid_or_index){
if(cljs.core.integer_QMARK_.call(null,uuid_or_index)){
return cljs.core.get.call(null,snergly.core.h_STAR_.call(null),uuid_or_index);
} else {
return uuid_or_index;
}
});
snergly.core.h = (function snergly$core$h(var_args){
var args28442 = [];
var len__17892__auto___28449 = arguments.length;
var i__17893__auto___28450 = (0);
while(true){
if((i__17893__auto___28450 < len__17892__auto___28449)){
args28442.push((arguments[i__17893__auto___28450]));

var G__28451 = (i__17893__auto___28450 + (1));
i__17893__auto___28450 = G__28451;
continue;
} else {
}
break;
}

var G__28444 = args28442.length;
switch (G__28444) {
case 0:
return snergly.core.h.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return snergly.core.h.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28442.length)].join('')));

}
});

snergly.core.h.cljs$core$IFn$_invoke$arity$0 = (function (){
var seq__28445_28453 = cljs.core.seq.call(null,snergly.core.h_STAR_.call(null));
var chunk__28446_28454 = null;
var count__28447_28455 = (0);
var i__28448_28456 = (0);
while(true){
if((i__28448_28456 < count__28447_28455)){
var uuid_28457 = cljs.core._nth.call(null,chunk__28446_28454,i__28448_28456);
cljs.core.println.call(null,[cljs.core.str("#uuid \""),cljs.core.str(uuid_28457),cljs.core.str("\"")].join(''));

var G__28458 = seq__28445_28453;
var G__28459 = chunk__28446_28454;
var G__28460 = count__28447_28455;
var G__28461 = (i__28448_28456 + (1));
seq__28445_28453 = G__28458;
chunk__28446_28454 = G__28459;
count__28447_28455 = G__28460;
i__28448_28456 = G__28461;
continue;
} else {
var temp__4425__auto___28462 = cljs.core.seq.call(null,seq__28445_28453);
if(temp__4425__auto___28462){
var seq__28445_28463__$1 = temp__4425__auto___28462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28445_28463__$1)){
var c__17637__auto___28464 = cljs.core.chunk_first.call(null,seq__28445_28463__$1);
var G__28465 = cljs.core.chunk_rest.call(null,seq__28445_28463__$1);
var G__28466 = c__17637__auto___28464;
var G__28467 = cljs.core.count.call(null,c__17637__auto___28464);
var G__28468 = (0);
seq__28445_28453 = G__28465;
chunk__28446_28454 = G__28466;
count__28447_28455 = G__28467;
i__28448_28456 = G__28468;
continue;
} else {
var uuid_28469 = cljs.core.first.call(null,seq__28445_28463__$1);
cljs.core.println.call(null,[cljs.core.str("#uuid \""),cljs.core.str(uuid_28469),cljs.core.str("\"")].join(''));

var G__28470 = cljs.core.next.call(null,seq__28445_28463__$1);
var G__28471 = null;
var G__28472 = (0);
var G__28473 = (0);
seq__28445_28453 = G__28470;
chunk__28446_28454 = G__28471;
count__28447_28455 = G__28472;
i__28448_28456 = G__28473;
continue;
}
} else {
}
}
break;
}

return null;
});

snergly.core.h.cljs$core$IFn$_invoke$arity$1 = (function (uuid_or_index){
var uuid = snergly.core._huuid.call(null,uuid_or_index);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uuid,cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(snergly.core.reconciler)).index),uuid)], null);
});

snergly.core.h.cljs$lang$maxFixedArity = 1;
snergly.core.h_BANG_ = (function snergly$core$h_BANG_(uuid_or_index){
return om.next.from_history.call(null,snergly.core.reconciler,snergly.core._huuid.call(null,uuid_or_index));
});
snergly.core.p = (function snergly$core$p(jsobj){
return goog.object.forEach(jsobj,(function (val,key,obj){
return cljs.core.println.call(null,[cljs.core.str("Key: "),cljs.core.str(key)].join(''));
}));
});

//# sourceMappingURL=core.js.map