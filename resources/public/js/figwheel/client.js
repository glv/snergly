// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28103 = cljs.core._EQ_;
var expr__28104 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28103.call(null,"true",expr__28104))){
return true;
} else {
if(cljs.core.truth_(pred__28103.call(null,"false",expr__28104))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28104)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28106__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28106 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28107__i = 0, G__28107__a = new Array(arguments.length -  0);
while (G__28107__i < G__28107__a.length) {G__28107__a[G__28107__i] = arguments[G__28107__i + 0]; ++G__28107__i;}
  args = new cljs.core.IndexedSeq(G__28107__a,0);
} 
return G__28106__delegate.call(this,args);};
G__28106.cljs$lang$maxFixedArity = 0;
G__28106.cljs$lang$applyTo = (function (arglist__28108){
var args = cljs.core.seq(arglist__28108);
return G__28106__delegate(args);
});
G__28106.cljs$core$IFn$_invoke$arity$variadic = G__28106__delegate;
return G__28106;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28109){
var map__28112 = p__28109;
var map__28112__$1 = ((((!((map__28112 == null)))?((((map__28112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28112):map__28112);
var message = cljs.core.get.call(null,map__28112__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28112__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16771__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16759__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16759__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16759__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23612__auto___28274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___28274,ch){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___28274,ch){
return (function (state_28243){
var state_val_28244 = (state_28243[(1)]);
if((state_val_28244 === (7))){
var inst_28239 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28245_28275 = state_28243__$1;
(statearr_28245_28275[(2)] = inst_28239);

(statearr_28245_28275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (1))){
var state_28243__$1 = state_28243;
var statearr_28246_28276 = state_28243__$1;
(statearr_28246_28276[(2)] = null);

(statearr_28246_28276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (4))){
var inst_28196 = (state_28243[(7)]);
var inst_28196__$1 = (state_28243[(2)]);
var state_28243__$1 = (function (){var statearr_28247 = state_28243;
(statearr_28247[(7)] = inst_28196__$1);

return statearr_28247;
})();
if(cljs.core.truth_(inst_28196__$1)){
var statearr_28248_28277 = state_28243__$1;
(statearr_28248_28277[(1)] = (5));

} else {
var statearr_28249_28278 = state_28243__$1;
(statearr_28249_28278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (15))){
var inst_28203 = (state_28243[(8)]);
var inst_28218 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28203);
var inst_28219 = cljs.core.first.call(null,inst_28218);
var inst_28220 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28219);
var inst_28221 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28220)].join('');
var inst_28222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28221);
var state_28243__$1 = state_28243;
var statearr_28250_28279 = state_28243__$1;
(statearr_28250_28279[(2)] = inst_28222);

(statearr_28250_28279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (13))){
var inst_28227 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28251_28280 = state_28243__$1;
(statearr_28251_28280[(2)] = inst_28227);

(statearr_28251_28280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (6))){
var state_28243__$1 = state_28243;
var statearr_28252_28281 = state_28243__$1;
(statearr_28252_28281[(2)] = null);

(statearr_28252_28281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (17))){
var inst_28225 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28253_28282 = state_28243__$1;
(statearr_28253_28282[(2)] = inst_28225);

(statearr_28253_28282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (3))){
var inst_28241 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28243__$1,inst_28241);
} else {
if((state_val_28244 === (12))){
var inst_28202 = (state_28243[(9)]);
var inst_28216 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28202,opts);
var state_28243__$1 = state_28243;
if(cljs.core.truth_(inst_28216)){
var statearr_28254_28283 = state_28243__$1;
(statearr_28254_28283[(1)] = (15));

} else {
var statearr_28255_28284 = state_28243__$1;
(statearr_28255_28284[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (2))){
var state_28243__$1 = state_28243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28243__$1,(4),ch);
} else {
if((state_val_28244 === (11))){
var inst_28203 = (state_28243[(8)]);
var inst_28208 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28209 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28203);
var inst_28210 = cljs.core.async.timeout.call(null,(1000));
var inst_28211 = [inst_28209,inst_28210];
var inst_28212 = (new cljs.core.PersistentVector(null,2,(5),inst_28208,inst_28211,null));
var state_28243__$1 = state_28243;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28243__$1,(14),inst_28212);
} else {
if((state_val_28244 === (9))){
var inst_28203 = (state_28243[(8)]);
var inst_28229 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28230 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28203);
var inst_28231 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28230);
var inst_28232 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28231)].join('');
var inst_28233 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28232);
var state_28243__$1 = (function (){var statearr_28256 = state_28243;
(statearr_28256[(10)] = inst_28229);

return statearr_28256;
})();
var statearr_28257_28285 = state_28243__$1;
(statearr_28257_28285[(2)] = inst_28233);

(statearr_28257_28285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (5))){
var inst_28196 = (state_28243[(7)]);
var inst_28198 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28199 = (new cljs.core.PersistentArrayMap(null,2,inst_28198,null));
var inst_28200 = (new cljs.core.PersistentHashSet(null,inst_28199,null));
var inst_28201 = figwheel.client.focus_msgs.call(null,inst_28200,inst_28196);
var inst_28202 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28201);
var inst_28203 = cljs.core.first.call(null,inst_28201);
var inst_28204 = figwheel.client.autoload_QMARK_.call(null);
var state_28243__$1 = (function (){var statearr_28258 = state_28243;
(statearr_28258[(9)] = inst_28202);

(statearr_28258[(8)] = inst_28203);

return statearr_28258;
})();
if(cljs.core.truth_(inst_28204)){
var statearr_28259_28286 = state_28243__$1;
(statearr_28259_28286[(1)] = (8));

} else {
var statearr_28260_28287 = state_28243__$1;
(statearr_28260_28287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (14))){
var inst_28214 = (state_28243[(2)]);
var state_28243__$1 = state_28243;
var statearr_28261_28288 = state_28243__$1;
(statearr_28261_28288[(2)] = inst_28214);

(statearr_28261_28288[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (16))){
var state_28243__$1 = state_28243;
var statearr_28262_28289 = state_28243__$1;
(statearr_28262_28289[(2)] = null);

(statearr_28262_28289[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (10))){
var inst_28235 = (state_28243[(2)]);
var state_28243__$1 = (function (){var statearr_28263 = state_28243;
(statearr_28263[(11)] = inst_28235);

return statearr_28263;
})();
var statearr_28264_28290 = state_28243__$1;
(statearr_28264_28290[(2)] = null);

(statearr_28264_28290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28244 === (8))){
var inst_28202 = (state_28243[(9)]);
var inst_28206 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28202,opts);
var state_28243__$1 = state_28243;
if(cljs.core.truth_(inst_28206)){
var statearr_28265_28291 = state_28243__$1;
(statearr_28265_28291[(1)] = (11));

} else {
var statearr_28266_28292 = state_28243__$1;
(statearr_28266_28292[(1)] = (12));

}

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
});})(c__23612__auto___28274,ch))
;
return ((function (switch__23500__auto__,c__23612__auto___28274,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23501__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23501__auto____0 = (function (){
var statearr_28270 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28270[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23501__auto__);

(statearr_28270[(1)] = (1));

return statearr_28270;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23501__auto____1 = (function (state_28243){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_28243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e28271){if((e28271 instanceof Object)){
var ex__23504__auto__ = e28271;
var statearr_28272_28293 = state_28243;
(statearr_28272_28293[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28294 = state_28243;
state_28243 = G__28294;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23501__auto__ = function(state_28243){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23501__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23501__auto____1.call(this,state_28243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23501__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23501__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___28274,ch))
})();
var state__23614__auto__ = (function (){var statearr_28273 = f__23613__auto__.call(null);
(statearr_28273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___28274);

return statearr_28273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___28274,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28295_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28295_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28302 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28302){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28300 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28301 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28300,_STAR_print_newline_STAR_28301,base_path_28302){
return (function() { 
var G__28303__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28303 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28304__i = 0, G__28304__a = new Array(arguments.length -  0);
while (G__28304__i < G__28304__a.length) {G__28304__a[G__28304__i] = arguments[G__28304__i + 0]; ++G__28304__i;}
  args = new cljs.core.IndexedSeq(G__28304__a,0);
} 
return G__28303__delegate.call(this,args);};
G__28303.cljs$lang$maxFixedArity = 0;
G__28303.cljs$lang$applyTo = (function (arglist__28305){
var args = cljs.core.seq(arglist__28305);
return G__28303__delegate(args);
});
G__28303.cljs$core$IFn$_invoke$arity$variadic = G__28303__delegate;
return G__28303;
})()
;})(_STAR_print_fn_STAR_28300,_STAR_print_newline_STAR_28301,base_path_28302))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28301;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28300;
}}catch (e28299){if((e28299 instanceof Error)){
var e = e28299;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28302], null));
} else {
var e = e28299;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28302))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28306){
var map__28313 = p__28306;
var map__28313__$1 = ((((!((map__28313 == null)))?((((map__28313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28313):map__28313);
var opts = map__28313__$1;
var build_id = cljs.core.get.call(null,map__28313__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28313,map__28313__$1,opts,build_id){
return (function (p__28315){
var vec__28316 = p__28315;
var map__28317 = cljs.core.nth.call(null,vec__28316,(0),null);
var map__28317__$1 = ((((!((map__28317 == null)))?((((map__28317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28317):map__28317);
var msg = map__28317__$1;
var msg_name = cljs.core.get.call(null,map__28317__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28316,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28316,map__28317,map__28317__$1,msg,msg_name,_,map__28313,map__28313__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28316,map__28317,map__28317__$1,msg,msg_name,_,map__28313,map__28313__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28313,map__28313__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28323){
var vec__28324 = p__28323;
var map__28325 = cljs.core.nth.call(null,vec__28324,(0),null);
var map__28325__$1 = ((((!((map__28325 == null)))?((((map__28325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28325):map__28325);
var msg = map__28325__$1;
var msg_name = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28324,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28327){
var map__28337 = p__28327;
var map__28337__$1 = ((((!((map__28337 == null)))?((((map__28337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28337):map__28337);
var on_compile_warning = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28337__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28337,map__28337__$1,on_compile_warning,on_compile_fail){
return (function (p__28339){
var vec__28340 = p__28339;
var map__28341 = cljs.core.nth.call(null,vec__28340,(0),null);
var map__28341__$1 = ((((!((map__28341 == null)))?((((map__28341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28341):map__28341);
var msg = map__28341__$1;
var msg_name = cljs.core.get.call(null,map__28341__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28340,(1));
var pred__28343 = cljs.core._EQ_;
var expr__28344 = msg_name;
if(cljs.core.truth_(pred__28343.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28344))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28343.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28344))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28337,map__28337__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto__,msg_hist,msg_names,msg){
return (function (state_28560){
var state_val_28561 = (state_28560[(1)]);
if((state_val_28561 === (7))){
var inst_28484 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
if(cljs.core.truth_(inst_28484)){
var statearr_28562_28608 = state_28560__$1;
(statearr_28562_28608[(1)] = (8));

} else {
var statearr_28563_28609 = state_28560__$1;
(statearr_28563_28609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (20))){
var inst_28554 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28564_28610 = state_28560__$1;
(statearr_28564_28610[(2)] = inst_28554);

(statearr_28564_28610[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (27))){
var inst_28550 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28565_28611 = state_28560__$1;
(statearr_28565_28611[(2)] = inst_28550);

(statearr_28565_28611[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (1))){
var inst_28477 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28560__$1 = state_28560;
if(cljs.core.truth_(inst_28477)){
var statearr_28566_28612 = state_28560__$1;
(statearr_28566_28612[(1)] = (2));

} else {
var statearr_28567_28613 = state_28560__$1;
(statearr_28567_28613[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (24))){
var inst_28552 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28568_28614 = state_28560__$1;
(statearr_28568_28614[(2)] = inst_28552);

(statearr_28568_28614[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (4))){
var inst_28558 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28560__$1,inst_28558);
} else {
if((state_val_28561 === (15))){
var inst_28556 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28569_28615 = state_28560__$1;
(statearr_28569_28615[(2)] = inst_28556);

(statearr_28569_28615[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (21))){
var inst_28515 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28570_28616 = state_28560__$1;
(statearr_28570_28616[(2)] = inst_28515);

(statearr_28570_28616[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (31))){
var inst_28539 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28560__$1 = state_28560;
if(cljs.core.truth_(inst_28539)){
var statearr_28571_28617 = state_28560__$1;
(statearr_28571_28617[(1)] = (34));

} else {
var statearr_28572_28618 = state_28560__$1;
(statearr_28572_28618[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (32))){
var inst_28548 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28573_28619 = state_28560__$1;
(statearr_28573_28619[(2)] = inst_28548);

(statearr_28573_28619[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (33))){
var inst_28537 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28574_28620 = state_28560__$1;
(statearr_28574_28620[(2)] = inst_28537);

(statearr_28574_28620[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (13))){
var inst_28498 = figwheel.client.heads_up.clear.call(null);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(16),inst_28498);
} else {
if((state_val_28561 === (22))){
var inst_28519 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28520 = figwheel.client.heads_up.append_message.call(null,inst_28519);
var state_28560__$1 = state_28560;
var statearr_28575_28621 = state_28560__$1;
(statearr_28575_28621[(2)] = inst_28520);

(statearr_28575_28621[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (36))){
var inst_28546 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28576_28622 = state_28560__$1;
(statearr_28576_28622[(2)] = inst_28546);

(statearr_28576_28622[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (29))){
var inst_28530 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28577_28623 = state_28560__$1;
(statearr_28577_28623[(2)] = inst_28530);

(statearr_28577_28623[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (6))){
var inst_28479 = (state_28560[(7)]);
var state_28560__$1 = state_28560;
var statearr_28578_28624 = state_28560__$1;
(statearr_28578_28624[(2)] = inst_28479);

(statearr_28578_28624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (28))){
var inst_28526 = (state_28560[(2)]);
var inst_28527 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28528 = figwheel.client.heads_up.display_warning.call(null,inst_28527);
var state_28560__$1 = (function (){var statearr_28579 = state_28560;
(statearr_28579[(8)] = inst_28526);

return statearr_28579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(29),inst_28528);
} else {
if((state_val_28561 === (25))){
var inst_28524 = figwheel.client.heads_up.clear.call(null);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(28),inst_28524);
} else {
if((state_val_28561 === (34))){
var inst_28541 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(37),inst_28541);
} else {
if((state_val_28561 === (17))){
var inst_28506 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28580_28625 = state_28560__$1;
(statearr_28580_28625[(2)] = inst_28506);

(statearr_28580_28625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (3))){
var inst_28496 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28560__$1 = state_28560;
if(cljs.core.truth_(inst_28496)){
var statearr_28581_28626 = state_28560__$1;
(statearr_28581_28626[(1)] = (13));

} else {
var statearr_28582_28627 = state_28560__$1;
(statearr_28582_28627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (12))){
var inst_28492 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28583_28628 = state_28560__$1;
(statearr_28583_28628[(2)] = inst_28492);

(statearr_28583_28628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (2))){
var inst_28479 = (state_28560[(7)]);
var inst_28479__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28560__$1 = (function (){var statearr_28584 = state_28560;
(statearr_28584[(7)] = inst_28479__$1);

return statearr_28584;
})();
if(cljs.core.truth_(inst_28479__$1)){
var statearr_28585_28629 = state_28560__$1;
(statearr_28585_28629[(1)] = (5));

} else {
var statearr_28586_28630 = state_28560__$1;
(statearr_28586_28630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (23))){
var inst_28522 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28560__$1 = state_28560;
if(cljs.core.truth_(inst_28522)){
var statearr_28587_28631 = state_28560__$1;
(statearr_28587_28631[(1)] = (25));

} else {
var statearr_28588_28632 = state_28560__$1;
(statearr_28588_28632[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (35))){
var state_28560__$1 = state_28560;
var statearr_28589_28633 = state_28560__$1;
(statearr_28589_28633[(2)] = null);

(statearr_28589_28633[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (19))){
var inst_28517 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28560__$1 = state_28560;
if(cljs.core.truth_(inst_28517)){
var statearr_28590_28634 = state_28560__$1;
(statearr_28590_28634[(1)] = (22));

} else {
var statearr_28591_28635 = state_28560__$1;
(statearr_28591_28635[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (11))){
var inst_28488 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28592_28636 = state_28560__$1;
(statearr_28592_28636[(2)] = inst_28488);

(statearr_28592_28636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (9))){
var inst_28490 = figwheel.client.heads_up.clear.call(null);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(12),inst_28490);
} else {
if((state_val_28561 === (5))){
var inst_28481 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28560__$1 = state_28560;
var statearr_28593_28637 = state_28560__$1;
(statearr_28593_28637[(2)] = inst_28481);

(statearr_28593_28637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (14))){
var inst_28508 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28560__$1 = state_28560;
if(cljs.core.truth_(inst_28508)){
var statearr_28594_28638 = state_28560__$1;
(statearr_28594_28638[(1)] = (18));

} else {
var statearr_28595_28639 = state_28560__$1;
(statearr_28595_28639[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (26))){
var inst_28532 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28560__$1 = state_28560;
if(cljs.core.truth_(inst_28532)){
var statearr_28596_28640 = state_28560__$1;
(statearr_28596_28640[(1)] = (30));

} else {
var statearr_28597_28641 = state_28560__$1;
(statearr_28597_28641[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (16))){
var inst_28500 = (state_28560[(2)]);
var inst_28501 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28502 = figwheel.client.format_messages.call(null,inst_28501);
var inst_28503 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28504 = figwheel.client.heads_up.display_error.call(null,inst_28502,inst_28503);
var state_28560__$1 = (function (){var statearr_28598 = state_28560;
(statearr_28598[(9)] = inst_28500);

return statearr_28598;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(17),inst_28504);
} else {
if((state_val_28561 === (30))){
var inst_28534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28535 = figwheel.client.heads_up.display_warning.call(null,inst_28534);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(33),inst_28535);
} else {
if((state_val_28561 === (10))){
var inst_28494 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28599_28642 = state_28560__$1;
(statearr_28599_28642[(2)] = inst_28494);

(statearr_28599_28642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (18))){
var inst_28510 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28511 = figwheel.client.format_messages.call(null,inst_28510);
var inst_28512 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28513 = figwheel.client.heads_up.display_error.call(null,inst_28511,inst_28512);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(21),inst_28513);
} else {
if((state_val_28561 === (37))){
var inst_28543 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28600_28643 = state_28560__$1;
(statearr_28600_28643[(2)] = inst_28543);

(statearr_28600_28643[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (8))){
var inst_28486 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(11),inst_28486);
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
});})(c__23612__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23500__auto__,c__23612__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto____0 = (function (){
var statearr_28604 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28604[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto__);

(statearr_28604[(1)] = (1));

return statearr_28604;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto____1 = (function (state_28560){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_28560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e28605){if((e28605 instanceof Object)){
var ex__23504__auto__ = e28605;
var statearr_28606_28644 = state_28560;
(statearr_28606_28644[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28645 = state_28560;
state_28560 = G__28645;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto__ = function(state_28560){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto____1.call(this,state_28560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto__,msg_hist,msg_names,msg))
})();
var state__23614__auto__ = (function (){var statearr_28607 = f__23613__auto__.call(null);
(statearr_28607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto__);

return statearr_28607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto__,msg_hist,msg_names,msg))
);

return c__23612__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23612__auto___28708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___28708,ch){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___28708,ch){
return (function (state_28691){
var state_val_28692 = (state_28691[(1)]);
if((state_val_28692 === (1))){
var state_28691__$1 = state_28691;
var statearr_28693_28709 = state_28691__$1;
(statearr_28693_28709[(2)] = null);

(statearr_28693_28709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (2))){
var state_28691__$1 = state_28691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28691__$1,(4),ch);
} else {
if((state_val_28692 === (3))){
var inst_28689 = (state_28691[(2)]);
var state_28691__$1 = state_28691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28691__$1,inst_28689);
} else {
if((state_val_28692 === (4))){
var inst_28679 = (state_28691[(7)]);
var inst_28679__$1 = (state_28691[(2)]);
var state_28691__$1 = (function (){var statearr_28694 = state_28691;
(statearr_28694[(7)] = inst_28679__$1);

return statearr_28694;
})();
if(cljs.core.truth_(inst_28679__$1)){
var statearr_28695_28710 = state_28691__$1;
(statearr_28695_28710[(1)] = (5));

} else {
var statearr_28696_28711 = state_28691__$1;
(statearr_28696_28711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (5))){
var inst_28679 = (state_28691[(7)]);
var inst_28681 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28679);
var state_28691__$1 = state_28691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28691__$1,(8),inst_28681);
} else {
if((state_val_28692 === (6))){
var state_28691__$1 = state_28691;
var statearr_28697_28712 = state_28691__$1;
(statearr_28697_28712[(2)] = null);

(statearr_28697_28712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (7))){
var inst_28687 = (state_28691[(2)]);
var state_28691__$1 = state_28691;
var statearr_28698_28713 = state_28691__$1;
(statearr_28698_28713[(2)] = inst_28687);

(statearr_28698_28713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28692 === (8))){
var inst_28683 = (state_28691[(2)]);
var state_28691__$1 = (function (){var statearr_28699 = state_28691;
(statearr_28699[(8)] = inst_28683);

return statearr_28699;
})();
var statearr_28700_28714 = state_28691__$1;
(statearr_28700_28714[(2)] = null);

(statearr_28700_28714[(1)] = (2));


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
});})(c__23612__auto___28708,ch))
;
return ((function (switch__23500__auto__,c__23612__auto___28708,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23501__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23501__auto____0 = (function (){
var statearr_28704 = [null,null,null,null,null,null,null,null,null];
(statearr_28704[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23501__auto__);

(statearr_28704[(1)] = (1));

return statearr_28704;
});
var figwheel$client$heads_up_plugin_$_state_machine__23501__auto____1 = (function (state_28691){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_28691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e28705){if((e28705 instanceof Object)){
var ex__23504__auto__ = e28705;
var statearr_28706_28715 = state_28691;
(statearr_28706_28715[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28716 = state_28691;
state_28691 = G__28716;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23501__auto__ = function(state_28691){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23501__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23501__auto____1.call(this,state_28691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23501__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23501__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___28708,ch))
})();
var state__23614__auto__ = (function (){var statearr_28707 = f__23613__auto__.call(null);
(statearr_28707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___28708);

return statearr_28707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___28708,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto__){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto__){
return (function (state_28737){
var state_val_28738 = (state_28737[(1)]);
if((state_val_28738 === (1))){
var inst_28732 = cljs.core.async.timeout.call(null,(3000));
var state_28737__$1 = state_28737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28737__$1,(2),inst_28732);
} else {
if((state_val_28738 === (2))){
var inst_28734 = (state_28737[(2)]);
var inst_28735 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28737__$1 = (function (){var statearr_28739 = state_28737;
(statearr_28739[(7)] = inst_28734);

return statearr_28739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28737__$1,inst_28735);
} else {
return null;
}
}
});})(c__23612__auto__))
;
return ((function (switch__23500__auto__,c__23612__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23501__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23501__auto____0 = (function (){
var statearr_28743 = [null,null,null,null,null,null,null,null];
(statearr_28743[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23501__auto__);

(statearr_28743[(1)] = (1));

return statearr_28743;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23501__auto____1 = (function (state_28737){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_28737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e28744){if((e28744 instanceof Object)){
var ex__23504__auto__ = e28744;
var statearr_28745_28747 = state_28737;
(statearr_28745_28747[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28748 = state_28737;
state_28737 = G__28748;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23501__auto__ = function(state_28737){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23501__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23501__auto____1.call(this,state_28737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23501__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23501__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto__))
})();
var state__23614__auto__ = (function (){var statearr_28746 = f__23613__auto__.call(null);
(statearr_28746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto__);

return statearr_28746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto__))
);

return c__23612__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28749){
var map__28756 = p__28749;
var map__28756__$1 = ((((!((map__28756 == null)))?((((map__28756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28756):map__28756);
var ed = map__28756__$1;
var formatted_exception = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28758_28762 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28759_28763 = null;
var count__28760_28764 = (0);
var i__28761_28765 = (0);
while(true){
if((i__28761_28765 < count__28760_28764)){
var msg_28766 = cljs.core._nth.call(null,chunk__28759_28763,i__28761_28765);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28766);

var G__28767 = seq__28758_28762;
var G__28768 = chunk__28759_28763;
var G__28769 = count__28760_28764;
var G__28770 = (i__28761_28765 + (1));
seq__28758_28762 = G__28767;
chunk__28759_28763 = G__28768;
count__28760_28764 = G__28769;
i__28761_28765 = G__28770;
continue;
} else {
var temp__4425__auto___28771 = cljs.core.seq.call(null,seq__28758_28762);
if(temp__4425__auto___28771){
var seq__28758_28772__$1 = temp__4425__auto___28771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28758_28772__$1)){
var c__17574__auto___28773 = cljs.core.chunk_first.call(null,seq__28758_28772__$1);
var G__28774 = cljs.core.chunk_rest.call(null,seq__28758_28772__$1);
var G__28775 = c__17574__auto___28773;
var G__28776 = cljs.core.count.call(null,c__17574__auto___28773);
var G__28777 = (0);
seq__28758_28762 = G__28774;
chunk__28759_28763 = G__28775;
count__28760_28764 = G__28776;
i__28761_28765 = G__28777;
continue;
} else {
var msg_28778 = cljs.core.first.call(null,seq__28758_28772__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28778);

var G__28779 = cljs.core.next.call(null,seq__28758_28772__$1);
var G__28780 = null;
var G__28781 = (0);
var G__28782 = (0);
seq__28758_28762 = G__28779;
chunk__28759_28763 = G__28780;
count__28760_28764 = G__28781;
i__28761_28765 = G__28782;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28783){
var map__28786 = p__28783;
var map__28786__$1 = ((((!((map__28786 == null)))?((((map__28786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28786):map__28786);
var w = map__28786__$1;
var message = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16759__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16759__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16759__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28794 = cljs.core.seq.call(null,plugins);
var chunk__28795 = null;
var count__28796 = (0);
var i__28797 = (0);
while(true){
if((i__28797 < count__28796)){
var vec__28798 = cljs.core._nth.call(null,chunk__28795,i__28797);
var k = cljs.core.nth.call(null,vec__28798,(0),null);
var plugin = cljs.core.nth.call(null,vec__28798,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28800 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28794,chunk__28795,count__28796,i__28797,pl_28800,vec__28798,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28800.call(null,msg_hist);
});})(seq__28794,chunk__28795,count__28796,i__28797,pl_28800,vec__28798,k,plugin))
);
} else {
}

var G__28801 = seq__28794;
var G__28802 = chunk__28795;
var G__28803 = count__28796;
var G__28804 = (i__28797 + (1));
seq__28794 = G__28801;
chunk__28795 = G__28802;
count__28796 = G__28803;
i__28797 = G__28804;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28794);
if(temp__4425__auto__){
var seq__28794__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28794__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__28794__$1);
var G__28805 = cljs.core.chunk_rest.call(null,seq__28794__$1);
var G__28806 = c__17574__auto__;
var G__28807 = cljs.core.count.call(null,c__17574__auto__);
var G__28808 = (0);
seq__28794 = G__28805;
chunk__28795 = G__28806;
count__28796 = G__28807;
i__28797 = G__28808;
continue;
} else {
var vec__28799 = cljs.core.first.call(null,seq__28794__$1);
var k = cljs.core.nth.call(null,vec__28799,(0),null);
var plugin = cljs.core.nth.call(null,vec__28799,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28809 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28794,chunk__28795,count__28796,i__28797,pl_28809,vec__28799,k,plugin,seq__28794__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28809.call(null,msg_hist);
});})(seq__28794,chunk__28795,count__28796,i__28797,pl_28809,vec__28799,k,plugin,seq__28794__$1,temp__4425__auto__))
);
} else {
}

var G__28810 = cljs.core.next.call(null,seq__28794__$1);
var G__28811 = null;
var G__28812 = (0);
var G__28813 = (0);
seq__28794 = G__28810;
chunk__28795 = G__28811;
count__28796 = G__28812;
i__28797 = G__28813;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28814 = [];
var len__17829__auto___28817 = arguments.length;
var i__17830__auto___28818 = (0);
while(true){
if((i__17830__auto___28818 < len__17829__auto___28817)){
args28814.push((arguments[i__17830__auto___28818]));

var G__28819 = (i__17830__auto___28818 + (1));
i__17830__auto___28818 = G__28819;
continue;
} else {
}
break;
}

var G__28816 = args28814.length;
switch (G__28816) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28814.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17836__auto__ = [];
var len__17829__auto___28825 = arguments.length;
var i__17830__auto___28826 = (0);
while(true){
if((i__17830__auto___28826 < len__17829__auto___28825)){
args__17836__auto__.push((arguments[i__17830__auto___28826]));

var G__28827 = (i__17830__auto___28826 + (1));
i__17830__auto___28826 = G__28827;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28822){
var map__28823 = p__28822;
var map__28823__$1 = ((((!((map__28823 == null)))?((((map__28823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var opts = map__28823__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28821){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28821));
});

//# sourceMappingURL=client.js.map