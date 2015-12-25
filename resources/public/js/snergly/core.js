// Compiled by ClojureScript 1.7.170 {}
goog.provide('snergly.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('snergly.algorithms');
goog.require('snergly.grid');
goog.require('snergly.util');
goog.require('snergly.image');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
snergly.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","algorithms","app/algorithms",1262597650),cljs.core.sort.call(null,snergly.algorithms.algorithms),new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"algorithm","algorithm",739262820),"",new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"columns","columns",1998437288),(10),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),(10),new cljs.core.Keyword(null,"grid","grid",402978600),null], null)], null);
snergly.core.run = (function snergly$core$run(algorithm_name,rows,columns){
var algorithm = snergly.algorithms.algorithm_functions.call(null,algorithm_name);
return algorithm.call(null,snergly.grid.make_grid.call(null,rows,columns));
});
if(typeof snergly.core.read !== 'undefined'){
} else {
snergly.core.read = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"snergly.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,snergly.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__20939,key,params){
var map__20940 = p__20939;
var map__20940__$1 = ((((!((map__20940 == null)))?((((map__20940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20940):map__20940);
var env = map__20940__$1;
var state = cljs.core.get.call(null,map__20940__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__20942 = temp__4423__auto__;
var _ = cljs.core.nth.call(null,vec__20942,(0),null);
var value = cljs.core.nth.call(null,vec__20942,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
if(typeof snergly.core.produce_maze_value !== 'undefined'){
} else {
snergly.core.produce_maze_value = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"snergly.core","produce-maze-value"),((function (method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__,hierarchy__17688__auto__){
return (function (k,v,s){
return k;
});})(method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__,hierarchy__17688__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
snergly.core.mutate = (function snergly$core$mutate(p__20943,key,p__20944){
var map__20949 = p__20943;
var map__20949__$1 = ((((!((map__20949 == null)))?((((map__20949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20949):map__20949);
var env = map__20949__$1;
var state = cljs.core.get.call(null,map__20949__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20950 = p__20944;
var map__20950__$1 = ((((!((map__20950 == null)))?((((map__20950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20950):map__20950);
var params = map__20950__$1;
var maze_key = cljs.core.get.call(null,map__20950__$1,new cljs.core.Keyword(null,"maze-key","maze-key",-1080425983));
var value = cljs.core.get.call(null,map__20950__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol("snergly.core","set-maze","snergly.core/set-maze",-926316869,null),key)){
var new_value = snergly.core.produce_maze_value.call(null,maze_key,value,cljs.core.deref.call(null,state));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maze_key], null)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (new_value,map__20949,map__20949__$1,env,state,map__20950,map__20950__$1,params,maze_key,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maze","maze",1753749814),maze_key], null),new_value);
});})(new_value,map__20949,map__20949__$1,env,state,map__20950,map__20950__$1,params,maze_key,value))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null);
}
});
cljs.core._add_method.call(null,snergly.core.produce_maze_value,new cljs.core.Keyword(null,"algorithm","algorithm",739262820),(function (_,form_value,___$1){
return form_value;
}));
cljs.core._add_method.call(null,snergly.core.produce_maze_value,new cljs.core.Keyword(null,"grid","grid",402978600),(function (_,form_value,p__20953){
var map__20954 = p__20953;
var map__20954__$1 = ((((!((map__20954 == null)))?((((map__20954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20954):map__20954);
var state = map__20954__$1;
var maze = cljs.core.get.call(null,map__20954__$1,new cljs.core.Keyword(null,"maze","maze",1753749814));
var map__20956 = maze;
var map__20956__$1 = ((((!((map__20956 == null)))?((((map__20956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20956):map__20956);
var algorithm = cljs.core.get.call(null,map__20956__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
var rows = cljs.core.get.call(null,map__20956__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__20956__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
return snergly.core.run.call(null,algorithm,rows,columns);
}));
cljs.core._add_method.call(null,snergly.core.produce_maze_value,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,form_value,___$1){
return parseInt(form_value);
}));
snergly.core.ready_to_go = (function snergly$core$ready_to_go(p__20958){
var map__20961 = p__20958;
var map__20961__$1 = ((((!((map__20961 == null)))?((((map__20961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20961):map__20961);
var maze = map__20961__$1;
var algorithm = cljs.core.get.call(null,map__20961__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
var rows = cljs.core.get.call(null,map__20961__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__20961__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var grid = cljs.core.get.call(null,map__20961__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
return (cljs.core.not_EQ_.call(null,"",algorithm)) && ((cljs.core.integer_QMARK_.call(null,rows)) && ((rows > (1))) && ((rows < (100)))) && ((cljs.core.integer_QMARK_.call(null,columns)) && ((columns > (1))) && ((columns < (100)))) && (((grid == null)) || (cljs.core.not_EQ_.call(null,algorithm,new cljs.core.Keyword(null,"algorithm-name","algorithm-name",135753667).cljs$core$IFn$_invoke$arity$1(grid))) || (cljs.core.not_EQ_.call(null,rows,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(grid))) || (cljs.core.not_EQ_.call(null,columns,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(grid))));
});
/**
 * @constructor
 */
snergly.core.MazeDisplay = (function snergly$core$MazeDisplay(){
var this__20757__auto__ = this;
React.Component.apply(this__20757__auto__,arguments);

if(!((this__20757__auto__.initLocalState == null))){
this__20757__auto__.state = this__20757__auto__.initLocalState();
} else {
this__20757__auto__.state = {};
}

return this__20757__auto__;
});

snergly.core.MazeDisplay.prototype = goog.object.clone(React.Component.prototype);

var x20968_20982 = snergly.core.MazeDisplay.prototype;
x20968_20982.componentWillUpdate = ((function (x20968_20982){
return (function (next_props__20698__auto__,next_state__20699__auto__){
var this__20697__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20697__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20697__auto__);
});})(x20968_20982))
;

x20968_20982.shouldComponentUpdate = ((function (x20968_20982){
return (function (next_props__20698__auto__,next_state__20699__auto__){
var this__20697__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20697__auto__),goog.object.get(next_props__20698__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__20697__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20697__auto__.state,"omcljs$state"),goog.object.get(next_state__20699__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x20968_20982))
;

x20968_20982.componentWillUnmount = ((function (x20968_20982){
return (function (){
var this__20697__auto__ = this;
var r__20703__auto__ = om.next.get_reconciler.call(null,this__20697__auto__);
var cfg__20704__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20703__auto__);
var st__20705__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20704__auto__);
var indexer__20702__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20704__auto__);
if((st__20705__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20705__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20697__auto__);
}

if((indexer__20702__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20702__auto__,this__20697__auto__);
}
});})(x20968_20982))
;

x20968_20982.isMounted = ((function (x20968_20982){
return (function (){
var this__20697__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20697__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20968_20982))
;

x20968_20982.componentWillMount = ((function (x20968_20982){
return (function (){
var this__20697__auto__ = this;
var indexer__20702__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20697__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20702__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20702__auto__,this__20697__auto__);
}
});})(x20968_20982))
;

x20968_20982.componentDidMount = ((function (x20968_20982){
return (function (){
var this$ = this;
var map__20969 = om.next.props.call(null,this$);
var map__20969__$1 = ((((!((map__20969 == null)))?((((map__20969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20969):map__20969);
var maze = map__20969__$1;
var grid = cljs.core.get.call(null,map__20969__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var cell_size = cljs.core.get.call(null,map__20969__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var c = this$._canvas;
var g = c.getContext("2d");
return snergly.image.image_grid.call(null,g,grid,cell_size);
});})(x20968_20982))
;

x20968_20982.componentDidUpdate = ((function (x20968_20982){
return (function (prev_props,prev_state){
var this$ = this;
var prev_props__$1 = om.next._prev_props.call(null,prev_props,this$);
var prev_state__$1 = goog.object.get(prev_state,"omcjls$previousState");
var map__20971_20983 = om.next.props.call(null,this$);
var map__20971_20984__$1 = ((((!((map__20971_20983 == null)))?((((map__20971_20983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20971_20983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20971_20983):map__20971_20983);
var maze_20985 = map__20971_20984__$1;
var grid_20986 = cljs.core.get.call(null,map__20971_20984__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var cell_size_20987 = cljs.core.get.call(null,map__20971_20984__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var c_20988 = this$._canvas;
var g_20989 = c_20988.getContext("2d");
snergly.image.image_grid.call(null,g_20989,grid_20986,cell_size_20987);

return om.next.clear_prev_props_BANG_.call(null,this$);
});})(x20968_20982))
;

x20968_20982.render = ((function (x20968_20982){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20973 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20974 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20975 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20976 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20977 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__20978 = om.next.props.call(null,this$);
var map__20978__$1 = ((((!((map__20978 == null)))?((((map__20978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20978):map__20978);
var maze = map__20978__$1;
var grid = cljs.core.get.call(null,map__20978__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var rows = cljs.core.get.call(null,map__20978__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__20978__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var algorithm = cljs.core.get.call(null,map__20978__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
var cell_size = cljs.core.get.call(null,map__20978__$1,new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287));
var height = ((cell_size * rows) + (1));
var width = ((cell_size * columns) + (1));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.canvas({"height": height, "width": width, "ref": ((function (height,width,map__20978,map__20978__$1,maze,grid,rows,columns,algorithm,cell_size,_STAR_reconciler_STAR_20973,_STAR_depth_STAR_20974,_STAR_shared_STAR_20975,_STAR_instrument_STAR_20976,_STAR_parent_STAR_20977,this$,x20968_20982){
return (function (p1__20963_SHARP_){
return (this$["_canvas"] = p1__20963_SHARP_);
});})(height,width,map__20978,map__20978__$1,maze,grid,rows,columns,algorithm,cell_size,_STAR_reconciler_STAR_20973,_STAR_depth_STAR_20974,_STAR_shared_STAR_20975,_STAR_instrument_STAR_20976,_STAR_parent_STAR_20977,this$,x20968_20982))
})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20977;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20976;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20975;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20974;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20973;
}});})(x20968_20982))
;


snergly.core.MazeDisplay.prototype.constructor = snergly.core.MazeDisplay;

snergly.core.MazeDisplay.prototype.om$isComponent = true;

var x20980_20990 = snergly.core.MazeDisplay;
x20980_20990.om$next$IQuery$ = true;

x20980_20990.om$next$IQuery$query$arity$1 = ((function (x20980_20990){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"algorithm","algorithm",739262820)], null)], null)], null);
});})(x20980_20990))
;


var x20981_20991 = snergly.core.MazeDisplay.prototype;
x20981_20991.om$next$IQuery$ = true;

x20981_20991.om$next$IQuery$query$arity$1 = ((function (x20981_20991){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"cell-size","cell-size",-1745492287),new cljs.core.Keyword(null,"algorithm","algorithm",739262820)], null)], null)], null);
});})(x20981_20991))
;


snergly.core.MazeDisplay.cljs$lang$type = true;

snergly.core.MazeDisplay.cljs$lang$ctorStr = "snergly.core/MazeDisplay";

snergly.core.MazeDisplay.cljs$lang$ctorPrWriter = (function (this__20759__auto__,writer__20760__auto__,opt__20761__auto__){
return cljs.core._write.call(null,writer__20760__auto__,"snergly.core/MazeDisplay");
});
snergly.core.maze_display = om.next.factory.call(null,snergly.core.MazeDisplay);
/**
 * @constructor
 */
snergly.core.MazeControlPanel = (function snergly$core$MazeControlPanel(){
var this__20757__auto__ = this;
React.Component.apply(this__20757__auto__,arguments);

if(!((this__20757__auto__.initLocalState == null))){
this__20757__auto__.state = this__20757__auto__.initLocalState();
} else {
this__20757__auto__.state = {};
}

return this__20757__auto__;
});

snergly.core.MazeControlPanel.prototype = goog.object.clone(React.Component.prototype);

var x20996_21008 = snergly.core.MazeControlPanel.prototype;
x20996_21008.componentWillUpdate = ((function (x20996_21008){
return (function (next_props__20698__auto__,next_state__20699__auto__){
var this__20697__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20697__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20697__auto__);
});})(x20996_21008))
;

x20996_21008.shouldComponentUpdate = ((function (x20996_21008){
return (function (next_props__20698__auto__,next_state__20699__auto__){
var this__20697__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20697__auto__),goog.object.get(next_props__20698__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__20697__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20697__auto__.state,"omcljs$state"),goog.object.get(next_state__20699__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x20996_21008))
;

x20996_21008.componentWillUnmount = ((function (x20996_21008){
return (function (){
var this__20697__auto__ = this;
var r__20703__auto__ = om.next.get_reconciler.call(null,this__20697__auto__);
var cfg__20704__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20703__auto__);
var st__20705__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20704__auto__);
var indexer__20702__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20704__auto__);
if((st__20705__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20705__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20697__auto__);
}

if((indexer__20702__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20702__auto__,this__20697__auto__);
}
});})(x20996_21008))
;

x20996_21008.componentDidUpdate = ((function (x20996_21008){
return (function (prev_props__20700__auto__,prev_state__20701__auto__){
var this__20697__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20697__auto__);
});})(x20996_21008))
;

x20996_21008.isMounted = ((function (x20996_21008){
return (function (){
var this__20697__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20697__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20996_21008))
;

x20996_21008.componentWillMount = ((function (x20996_21008){
return (function (){
var this__20697__auto__ = this;
var indexer__20702__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20697__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20702__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20702__auto__,this__20697__auto__);
}
});})(x20996_21008))
;

x20996_21008.render = ((function (x20996_21008){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20997 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20998 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20999 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21000 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21001 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21002 = om.next.props.call(null,this$);
var map__21002__$1 = ((((!((map__21002 == null)))?((((map__21002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21002):map__21002);
var algorithms = cljs.core.get.call(null,map__21002__$1,new cljs.core.Keyword("app","algorithms","app/algorithms",1262597650));
var maze = cljs.core.get.call(null,map__21002__$1,new cljs.core.Keyword(null,"maze","maze",1753749814));
var map__21003 = maze;
var map__21003__$1 = ((((!((map__21003 == null)))?((((map__21003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21003):map__21003);
var algorithm = cljs.core.get.call(null,map__21003__$1,new cljs.core.Keyword(null,"algorithm","algorithm",739262820));
var rows = cljs.core.get.call(null,map__21003__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var columns = cljs.core.get.call(null,map__21003__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var grid = cljs.core.get.call(null,map__21003__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var modify = ((function (map__21002,map__21002__$1,algorithms,maze,map__21003,map__21003__$1,algorithm,rows,columns,grid,_STAR_reconciler_STAR_20997,_STAR_depth_STAR_20998,_STAR_shared_STAR_20999,_STAR_instrument_STAR_21000,_STAR_parent_STAR_21001,this$,x20996_21008){
return (function (maze_key,e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("snergly.core","set-maze","snergly.core/set-maze",-926316869,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"maze-key","maze-key",-1080425983)),cljs.core._conj.call(null,cljs.core.List.EMPTY,maze_key),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(e["target"]["value"]))))))))))))))));
});})(map__21002,map__21002__$1,algorithms,maze,map__21003,map__21003__$1,algorithm,rows,columns,grid,_STAR_reconciler_STAR_20997,_STAR_depth_STAR_20998,_STAR_shared_STAR_20999,_STAR_instrument_STAR_21000,_STAR_parent_STAR_21001,this$,x20996_21008))
;
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.select({"value": algorithm, "onChange": cljs.core.partial.call(null,modify,new cljs.core.Keyword(null,"algorithm","algorithm",739262820))},om.util.force_children.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.dom.option.call(null,{"key": ""},"")], null),cljs.core.map.call(null,((function (map__21002,map__21002__$1,algorithms,maze,map__21003,map__21003__$1,algorithm,rows,columns,grid,modify,_STAR_reconciler_STAR_20997,_STAR_depth_STAR_20998,_STAR_shared_STAR_20999,_STAR_instrument_STAR_21000,_STAR_parent_STAR_21001,this$,x20996_21008){
return (function (name){
return om.dom.option.call(null,{"key": name},name);
});})(map__21002,map__21002__$1,algorithms,maze,map__21003,map__21003__$1,algorithm,rows,columns,grid,modify,_STAR_reconciler_STAR_20997,_STAR_depth_STAR_20998,_STAR_shared_STAR_20999,_STAR_instrument_STAR_21000,_STAR_parent_STAR_21001,this$,x20996_21008))
,algorithms))))))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Rows: "))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "number", "value": rows, "onInput": cljs.core.partial.call(null,modify,new cljs.core.Keyword(null,"rows","rows",850049680))})),om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,"Columns: "))),om.util.force_children.call(null,om.dom.input.call(null,{"type": "number", "value": columns, "onInput": cljs.core.partial.call(null,modify,new cljs.core.Keyword(null,"columns","columns",1998437288))})))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,React.DOM.button({"disabled": cljs.core.not.call(null,snergly.core.ready_to_go.call(null,maze)), "onClick": cljs.core.partial.call(null,modify,new cljs.core.Keyword(null,"grid","grid",402978600))},om.util.force_children.call(null,"Go!"))))),om.util.force_children.call(null,(cljs.core.truth_(grid)?React.DOM.div(null,om.util.force_children.call(null,snergly.core.maze_display.call(null,maze))):null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21001;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21000;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20999;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20998;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20997;
}});})(x20996_21008))
;


snergly.core.MazeControlPanel.prototype.constructor = snergly.core.MazeControlPanel;

snergly.core.MazeControlPanel.prototype.om$isComponent = true;

var x21006_21009 = snergly.core.MazeControlPanel;
x21006_21009.om$next$IQuery$ = true;

x21006_21009.om$next$IQuery$query$arity$1 = ((function (x21006_21009){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","algorithms","app/algorithms",1262597650),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algorithms","algorithms",1262235635),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"grid","grid",402978600)], null)], null)], null);
});})(x21006_21009))
;


var x21007_21010 = snergly.core.MazeControlPanel.prototype;
x21007_21010.om$next$IQuery$ = true;

x21007_21010.om$next$IQuery$query$arity$1 = ((function (x21007_21010){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","algorithms","app/algorithms",1262597650),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maze","maze",1753749814),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"algorithms","algorithms",1262235635),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"grid","grid",402978600)], null)], null)], null);
});})(x21007_21010))
;


snergly.core.MazeControlPanel.cljs$lang$type = true;

snergly.core.MazeControlPanel.cljs$lang$ctorStr = "snergly.core/MazeControlPanel";

snergly.core.MazeControlPanel.cljs$lang$ctorPrWriter = (function (this__20759__auto__,writer__20760__auto__,opt__20761__auto__){
return cljs.core._write.call(null,writer__20760__auto__,"snergly.core/MazeControlPanel");
});
snergly.core.maze_control_panel = om.next.factory.call(null,snergly.core.MazeControlPanel);
snergly.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),snergly.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),snergly.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),snergly.core.mutate], null))], null));
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
var args21011 = [];
var len__17829__auto___21018 = arguments.length;
var i__17830__auto___21019 = (0);
while(true){
if((i__17830__auto___21019 < len__17829__auto___21018)){
args21011.push((arguments[i__17830__auto___21019]));

var G__21020 = (i__17830__auto___21019 + (1));
i__17830__auto___21019 = G__21020;
continue;
} else {
}
break;
}

var G__21013 = args21011.length;
switch (G__21013) {
case 0:
return snergly.core.h.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return snergly.core.h.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21011.length)].join('')));

}
});

snergly.core.h.cljs$core$IFn$_invoke$arity$0 = (function (){
var seq__21014_21022 = cljs.core.seq.call(null,snergly.core.h_STAR_.call(null));
var chunk__21015_21023 = null;
var count__21016_21024 = (0);
var i__21017_21025 = (0);
while(true){
if((i__21017_21025 < count__21016_21024)){
var uuid_21026 = cljs.core._nth.call(null,chunk__21015_21023,i__21017_21025);
cljs.core.println.call(null,[cljs.core.str("#uuid \""),cljs.core.str(uuid_21026),cljs.core.str("\"")].join(''));

var G__21027 = seq__21014_21022;
var G__21028 = chunk__21015_21023;
var G__21029 = count__21016_21024;
var G__21030 = (i__21017_21025 + (1));
seq__21014_21022 = G__21027;
chunk__21015_21023 = G__21028;
count__21016_21024 = G__21029;
i__21017_21025 = G__21030;
continue;
} else {
var temp__4425__auto___21031 = cljs.core.seq.call(null,seq__21014_21022);
if(temp__4425__auto___21031){
var seq__21014_21032__$1 = temp__4425__auto___21031;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21014_21032__$1)){
var c__17574__auto___21033 = cljs.core.chunk_first.call(null,seq__21014_21032__$1);
var G__21034 = cljs.core.chunk_rest.call(null,seq__21014_21032__$1);
var G__21035 = c__17574__auto___21033;
var G__21036 = cljs.core.count.call(null,c__17574__auto___21033);
var G__21037 = (0);
seq__21014_21022 = G__21034;
chunk__21015_21023 = G__21035;
count__21016_21024 = G__21036;
i__21017_21025 = G__21037;
continue;
} else {
var uuid_21038 = cljs.core.first.call(null,seq__21014_21032__$1);
cljs.core.println.call(null,[cljs.core.str("#uuid \""),cljs.core.str(uuid_21038),cljs.core.str("\"")].join(''));

var G__21039 = cljs.core.next.call(null,seq__21014_21032__$1);
var G__21040 = null;
var G__21041 = (0);
var G__21042 = (0);
seq__21014_21022 = G__21039;
chunk__21015_21023 = G__21040;
count__21016_21024 = G__21041;
i__21017_21025 = G__21042;
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