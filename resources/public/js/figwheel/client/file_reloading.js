// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16771__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16771__auto__){
return or__16771__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16771__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26506_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26506_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26511 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26512 = null;
var count__26513 = (0);
var i__26514 = (0);
while(true){
if((i__26514 < count__26513)){
var n = cljs.core._nth.call(null,chunk__26512,i__26514);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26515 = seq__26511;
var G__26516 = chunk__26512;
var G__26517 = count__26513;
var G__26518 = (i__26514 + (1));
seq__26511 = G__26515;
chunk__26512 = G__26516;
count__26513 = G__26517;
i__26514 = G__26518;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26511);
if(temp__4425__auto__){
var seq__26511__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26511__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__26511__$1);
var G__26519 = cljs.core.chunk_rest.call(null,seq__26511__$1);
var G__26520 = c__17574__auto__;
var G__26521 = cljs.core.count.call(null,c__17574__auto__);
var G__26522 = (0);
seq__26511 = G__26519;
chunk__26512 = G__26520;
count__26513 = G__26521;
i__26514 = G__26522;
continue;
} else {
var n = cljs.core.first.call(null,seq__26511__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26523 = cljs.core.next.call(null,seq__26511__$1);
var G__26524 = null;
var G__26525 = (0);
var G__26526 = (0);
seq__26511 = G__26523;
chunk__26512 = G__26524;
count__26513 = G__26525;
i__26514 = G__26526;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26565_26572 = cljs.core.seq.call(null,deps);
var chunk__26566_26573 = null;
var count__26567_26574 = (0);
var i__26568_26575 = (0);
while(true){
if((i__26568_26575 < count__26567_26574)){
var dep_26576 = cljs.core._nth.call(null,chunk__26566_26573,i__26568_26575);
topo_sort_helper_STAR_.call(null,dep_26576,(depth + (1)),state);

var G__26577 = seq__26565_26572;
var G__26578 = chunk__26566_26573;
var G__26579 = count__26567_26574;
var G__26580 = (i__26568_26575 + (1));
seq__26565_26572 = G__26577;
chunk__26566_26573 = G__26578;
count__26567_26574 = G__26579;
i__26568_26575 = G__26580;
continue;
} else {
var temp__4425__auto___26581 = cljs.core.seq.call(null,seq__26565_26572);
if(temp__4425__auto___26581){
var seq__26565_26582__$1 = temp__4425__auto___26581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26565_26582__$1)){
var c__17574__auto___26583 = cljs.core.chunk_first.call(null,seq__26565_26582__$1);
var G__26584 = cljs.core.chunk_rest.call(null,seq__26565_26582__$1);
var G__26585 = c__17574__auto___26583;
var G__26586 = cljs.core.count.call(null,c__17574__auto___26583);
var G__26587 = (0);
seq__26565_26572 = G__26584;
chunk__26566_26573 = G__26585;
count__26567_26574 = G__26586;
i__26568_26575 = G__26587;
continue;
} else {
var dep_26588 = cljs.core.first.call(null,seq__26565_26582__$1);
topo_sort_helper_STAR_.call(null,dep_26588,(depth + (1)),state);

var G__26589 = cljs.core.next.call(null,seq__26565_26582__$1);
var G__26590 = null;
var G__26591 = (0);
var G__26592 = (0);
seq__26565_26572 = G__26589;
chunk__26566_26573 = G__26590;
count__26567_26574 = G__26591;
i__26568_26575 = G__26592;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26569){
var vec__26571 = p__26569;
var x = cljs.core.nth.call(null,vec__26571,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26571,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26571,x,xs,get_deps__$1){
return (function (p1__26527_SHARP_){
return clojure.set.difference.call(null,p1__26527_SHARP_,x);
});})(vec__26571,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26605 = cljs.core.seq.call(null,provides);
var chunk__26606 = null;
var count__26607 = (0);
var i__26608 = (0);
while(true){
if((i__26608 < count__26607)){
var prov = cljs.core._nth.call(null,chunk__26606,i__26608);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26609_26617 = cljs.core.seq.call(null,requires);
var chunk__26610_26618 = null;
var count__26611_26619 = (0);
var i__26612_26620 = (0);
while(true){
if((i__26612_26620 < count__26611_26619)){
var req_26621 = cljs.core._nth.call(null,chunk__26610_26618,i__26612_26620);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26621,prov);

var G__26622 = seq__26609_26617;
var G__26623 = chunk__26610_26618;
var G__26624 = count__26611_26619;
var G__26625 = (i__26612_26620 + (1));
seq__26609_26617 = G__26622;
chunk__26610_26618 = G__26623;
count__26611_26619 = G__26624;
i__26612_26620 = G__26625;
continue;
} else {
var temp__4425__auto___26626 = cljs.core.seq.call(null,seq__26609_26617);
if(temp__4425__auto___26626){
var seq__26609_26627__$1 = temp__4425__auto___26626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26609_26627__$1)){
var c__17574__auto___26628 = cljs.core.chunk_first.call(null,seq__26609_26627__$1);
var G__26629 = cljs.core.chunk_rest.call(null,seq__26609_26627__$1);
var G__26630 = c__17574__auto___26628;
var G__26631 = cljs.core.count.call(null,c__17574__auto___26628);
var G__26632 = (0);
seq__26609_26617 = G__26629;
chunk__26610_26618 = G__26630;
count__26611_26619 = G__26631;
i__26612_26620 = G__26632;
continue;
} else {
var req_26633 = cljs.core.first.call(null,seq__26609_26627__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26633,prov);

var G__26634 = cljs.core.next.call(null,seq__26609_26627__$1);
var G__26635 = null;
var G__26636 = (0);
var G__26637 = (0);
seq__26609_26617 = G__26634;
chunk__26610_26618 = G__26635;
count__26611_26619 = G__26636;
i__26612_26620 = G__26637;
continue;
}
} else {
}
}
break;
}

var G__26638 = seq__26605;
var G__26639 = chunk__26606;
var G__26640 = count__26607;
var G__26641 = (i__26608 + (1));
seq__26605 = G__26638;
chunk__26606 = G__26639;
count__26607 = G__26640;
i__26608 = G__26641;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26605);
if(temp__4425__auto__){
var seq__26605__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26605__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__26605__$1);
var G__26642 = cljs.core.chunk_rest.call(null,seq__26605__$1);
var G__26643 = c__17574__auto__;
var G__26644 = cljs.core.count.call(null,c__17574__auto__);
var G__26645 = (0);
seq__26605 = G__26642;
chunk__26606 = G__26643;
count__26607 = G__26644;
i__26608 = G__26645;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26605__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26613_26646 = cljs.core.seq.call(null,requires);
var chunk__26614_26647 = null;
var count__26615_26648 = (0);
var i__26616_26649 = (0);
while(true){
if((i__26616_26649 < count__26615_26648)){
var req_26650 = cljs.core._nth.call(null,chunk__26614_26647,i__26616_26649);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26650,prov);

var G__26651 = seq__26613_26646;
var G__26652 = chunk__26614_26647;
var G__26653 = count__26615_26648;
var G__26654 = (i__26616_26649 + (1));
seq__26613_26646 = G__26651;
chunk__26614_26647 = G__26652;
count__26615_26648 = G__26653;
i__26616_26649 = G__26654;
continue;
} else {
var temp__4425__auto___26655__$1 = cljs.core.seq.call(null,seq__26613_26646);
if(temp__4425__auto___26655__$1){
var seq__26613_26656__$1 = temp__4425__auto___26655__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26613_26656__$1)){
var c__17574__auto___26657 = cljs.core.chunk_first.call(null,seq__26613_26656__$1);
var G__26658 = cljs.core.chunk_rest.call(null,seq__26613_26656__$1);
var G__26659 = c__17574__auto___26657;
var G__26660 = cljs.core.count.call(null,c__17574__auto___26657);
var G__26661 = (0);
seq__26613_26646 = G__26658;
chunk__26614_26647 = G__26659;
count__26615_26648 = G__26660;
i__26616_26649 = G__26661;
continue;
} else {
var req_26662 = cljs.core.first.call(null,seq__26613_26656__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26662,prov);

var G__26663 = cljs.core.next.call(null,seq__26613_26656__$1);
var G__26664 = null;
var G__26665 = (0);
var G__26666 = (0);
seq__26613_26646 = G__26663;
chunk__26614_26647 = G__26664;
count__26615_26648 = G__26665;
i__26616_26649 = G__26666;
continue;
}
} else {
}
}
break;
}

var G__26667 = cljs.core.next.call(null,seq__26605__$1);
var G__26668 = null;
var G__26669 = (0);
var G__26670 = (0);
seq__26605 = G__26667;
chunk__26606 = G__26668;
count__26607 = G__26669;
i__26608 = G__26670;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26675_26679 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26676_26680 = null;
var count__26677_26681 = (0);
var i__26678_26682 = (0);
while(true){
if((i__26678_26682 < count__26677_26681)){
var ns_26683 = cljs.core._nth.call(null,chunk__26676_26680,i__26678_26682);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26683);

var G__26684 = seq__26675_26679;
var G__26685 = chunk__26676_26680;
var G__26686 = count__26677_26681;
var G__26687 = (i__26678_26682 + (1));
seq__26675_26679 = G__26684;
chunk__26676_26680 = G__26685;
count__26677_26681 = G__26686;
i__26678_26682 = G__26687;
continue;
} else {
var temp__4425__auto___26688 = cljs.core.seq.call(null,seq__26675_26679);
if(temp__4425__auto___26688){
var seq__26675_26689__$1 = temp__4425__auto___26688;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26675_26689__$1)){
var c__17574__auto___26690 = cljs.core.chunk_first.call(null,seq__26675_26689__$1);
var G__26691 = cljs.core.chunk_rest.call(null,seq__26675_26689__$1);
var G__26692 = c__17574__auto___26690;
var G__26693 = cljs.core.count.call(null,c__17574__auto___26690);
var G__26694 = (0);
seq__26675_26679 = G__26691;
chunk__26676_26680 = G__26692;
count__26677_26681 = G__26693;
i__26678_26682 = G__26694;
continue;
} else {
var ns_26695 = cljs.core.first.call(null,seq__26675_26689__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26695);

var G__26696 = cljs.core.next.call(null,seq__26675_26689__$1);
var G__26697 = null;
var G__26698 = (0);
var G__26699 = (0);
seq__26675_26679 = G__26696;
chunk__26676_26680 = G__26697;
count__26677_26681 = G__26698;
i__26678_26682 = G__26699;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16771__auto__ = goog.require__;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26700__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26700 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26701__i = 0, G__26701__a = new Array(arguments.length -  0);
while (G__26701__i < G__26701__a.length) {G__26701__a[G__26701__i] = arguments[G__26701__i + 0]; ++G__26701__i;}
  args = new cljs.core.IndexedSeq(G__26701__a,0);
} 
return G__26700__delegate.call(this,args);};
G__26700.cljs$lang$maxFixedArity = 0;
G__26700.cljs$lang$applyTo = (function (arglist__26702){
var args = cljs.core.seq(arglist__26702);
return G__26700__delegate(args);
});
G__26700.cljs$core$IFn$_invoke$arity$variadic = G__26700__delegate;
return G__26700;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26704 = cljs.core._EQ_;
var expr__26705 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26704.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26705))){
var path_parts = ((function (pred__26704,expr__26705){
return (function (p1__26703_SHARP_){
return clojure.string.split.call(null,p1__26703_SHARP_,/[\/\\]/);
});})(pred__26704,expr__26705))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26704,expr__26705){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26707){if((e26707 instanceof Error)){
var e = e26707;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26707;

}
}})());
});
;})(path_parts,sep,root,pred__26704,expr__26705))
} else {
if(cljs.core.truth_(pred__26704.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26705))){
return ((function (pred__26704,expr__26705){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26704,expr__26705){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26704,expr__26705))
);

return deferred.addErrback(((function (deferred,pred__26704,expr__26705){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26704,expr__26705))
);
});
;})(pred__26704,expr__26705))
} else {
return ((function (pred__26704,expr__26705){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26704,expr__26705))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26708,callback){
var map__26711 = p__26708;
var map__26711__$1 = ((((!((map__26711 == null)))?((((map__26711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26711):map__26711);
var file_msg = map__26711__$1;
var request_url = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26711,map__26711__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26711,map__26711__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto__){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto__){
return (function (state_26735){
var state_val_26736 = (state_26735[(1)]);
if((state_val_26736 === (7))){
var inst_26731 = (state_26735[(2)]);
var state_26735__$1 = state_26735;
var statearr_26737_26757 = state_26735__$1;
(statearr_26737_26757[(2)] = inst_26731);

(statearr_26737_26757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (1))){
var state_26735__$1 = state_26735;
var statearr_26738_26758 = state_26735__$1;
(statearr_26738_26758[(2)] = null);

(statearr_26738_26758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (4))){
var inst_26715 = (state_26735[(7)]);
var inst_26715__$1 = (state_26735[(2)]);
var state_26735__$1 = (function (){var statearr_26739 = state_26735;
(statearr_26739[(7)] = inst_26715__$1);

return statearr_26739;
})();
if(cljs.core.truth_(inst_26715__$1)){
var statearr_26740_26759 = state_26735__$1;
(statearr_26740_26759[(1)] = (5));

} else {
var statearr_26741_26760 = state_26735__$1;
(statearr_26741_26760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (6))){
var state_26735__$1 = state_26735;
var statearr_26742_26761 = state_26735__$1;
(statearr_26742_26761[(2)] = null);

(statearr_26742_26761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (3))){
var inst_26733 = (state_26735[(2)]);
var state_26735__$1 = state_26735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26735__$1,inst_26733);
} else {
if((state_val_26736 === (2))){
var state_26735__$1 = state_26735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26735__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26736 === (11))){
var inst_26727 = (state_26735[(2)]);
var state_26735__$1 = (function (){var statearr_26743 = state_26735;
(statearr_26743[(8)] = inst_26727);

return statearr_26743;
})();
var statearr_26744_26762 = state_26735__$1;
(statearr_26744_26762[(2)] = null);

(statearr_26744_26762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (9))){
var inst_26719 = (state_26735[(9)]);
var inst_26721 = (state_26735[(10)]);
var inst_26723 = inst_26721.call(null,inst_26719);
var state_26735__$1 = state_26735;
var statearr_26745_26763 = state_26735__$1;
(statearr_26745_26763[(2)] = inst_26723);

(statearr_26745_26763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (5))){
var inst_26715 = (state_26735[(7)]);
var inst_26717 = figwheel.client.file_reloading.blocking_load.call(null,inst_26715);
var state_26735__$1 = state_26735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26735__$1,(8),inst_26717);
} else {
if((state_val_26736 === (10))){
var inst_26719 = (state_26735[(9)]);
var inst_26725 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26719);
var state_26735__$1 = state_26735;
var statearr_26746_26764 = state_26735__$1;
(statearr_26746_26764[(2)] = inst_26725);

(statearr_26746_26764[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26736 === (8))){
var inst_26715 = (state_26735[(7)]);
var inst_26721 = (state_26735[(10)]);
var inst_26719 = (state_26735[(2)]);
var inst_26720 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26721__$1 = cljs.core.get.call(null,inst_26720,inst_26715);
var state_26735__$1 = (function (){var statearr_26747 = state_26735;
(statearr_26747[(9)] = inst_26719);

(statearr_26747[(10)] = inst_26721__$1);

return statearr_26747;
})();
if(cljs.core.truth_(inst_26721__$1)){
var statearr_26748_26765 = state_26735__$1;
(statearr_26748_26765[(1)] = (9));

} else {
var statearr_26749_26766 = state_26735__$1;
(statearr_26749_26766[(1)] = (10));

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
});})(c__23612__auto__))
;
return ((function (switch__23500__auto__,c__23612__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23501__auto__ = null;
var figwheel$client$file_reloading$state_machine__23501__auto____0 = (function (){
var statearr_26753 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26753[(0)] = figwheel$client$file_reloading$state_machine__23501__auto__);

(statearr_26753[(1)] = (1));

return statearr_26753;
});
var figwheel$client$file_reloading$state_machine__23501__auto____1 = (function (state_26735){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_26735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e26754){if((e26754 instanceof Object)){
var ex__23504__auto__ = e26754;
var statearr_26755_26767 = state_26735;
(statearr_26755_26767[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26768 = state_26735;
state_26735 = G__26768;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23501__auto__ = function(state_26735){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23501__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23501__auto____1.call(this,state_26735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23501__auto____0;
figwheel$client$file_reloading$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23501__auto____1;
return figwheel$client$file_reloading$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto__))
})();
var state__23614__auto__ = (function (){var statearr_26756 = f__23613__auto__.call(null);
(statearr_26756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto__);

return statearr_26756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto__))
);

return c__23612__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26769,callback){
var map__26772 = p__26769;
var map__26772__$1 = ((((!((map__26772 == null)))?((((map__26772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26772):map__26772);
var file_msg = map__26772__$1;
var namespace = cljs.core.get.call(null,map__26772__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26772,map__26772__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26772,map__26772__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26774){
var map__26777 = p__26774;
var map__26777__$1 = ((((!((map__26777 == null)))?((((map__26777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26777):map__26777);
var file_msg = map__26777__$1;
var namespace = cljs.core.get.call(null,map__26777__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16759__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16759__auto__){
var or__16771__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var or__16771__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto____$1)){
return or__16771__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16759__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26779,callback){
var map__26782 = p__26779;
var map__26782__$1 = ((((!((map__26782 == null)))?((((map__26782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26782):map__26782);
var file_msg = map__26782__$1;
var request_url = cljs.core.get.call(null,map__26782__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26782__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23612__auto___26870 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___26870,out){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___26870,out){
return (function (state_26852){
var state_val_26853 = (state_26852[(1)]);
if((state_val_26853 === (1))){
var inst_26830 = cljs.core.nth.call(null,files,(0),null);
var inst_26831 = cljs.core.nthnext.call(null,files,(1));
var inst_26832 = files;
var state_26852__$1 = (function (){var statearr_26854 = state_26852;
(statearr_26854[(7)] = inst_26832);

(statearr_26854[(8)] = inst_26831);

(statearr_26854[(9)] = inst_26830);

return statearr_26854;
})();
var statearr_26855_26871 = state_26852__$1;
(statearr_26855_26871[(2)] = null);

(statearr_26855_26871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (2))){
var inst_26832 = (state_26852[(7)]);
var inst_26835 = (state_26852[(10)]);
var inst_26835__$1 = cljs.core.nth.call(null,inst_26832,(0),null);
var inst_26836 = cljs.core.nthnext.call(null,inst_26832,(1));
var inst_26837 = (inst_26835__$1 == null);
var inst_26838 = cljs.core.not.call(null,inst_26837);
var state_26852__$1 = (function (){var statearr_26856 = state_26852;
(statearr_26856[(11)] = inst_26836);

(statearr_26856[(10)] = inst_26835__$1);

return statearr_26856;
})();
if(inst_26838){
var statearr_26857_26872 = state_26852__$1;
(statearr_26857_26872[(1)] = (4));

} else {
var statearr_26858_26873 = state_26852__$1;
(statearr_26858_26873[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (3))){
var inst_26850 = (state_26852[(2)]);
var state_26852__$1 = state_26852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26852__$1,inst_26850);
} else {
if((state_val_26853 === (4))){
var inst_26835 = (state_26852[(10)]);
var inst_26840 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26835);
var state_26852__$1 = state_26852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26852__$1,(7),inst_26840);
} else {
if((state_val_26853 === (5))){
var inst_26846 = cljs.core.async.close_BANG_.call(null,out);
var state_26852__$1 = state_26852;
var statearr_26859_26874 = state_26852__$1;
(statearr_26859_26874[(2)] = inst_26846);

(statearr_26859_26874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (6))){
var inst_26848 = (state_26852[(2)]);
var state_26852__$1 = state_26852;
var statearr_26860_26875 = state_26852__$1;
(statearr_26860_26875[(2)] = inst_26848);

(statearr_26860_26875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26853 === (7))){
var inst_26836 = (state_26852[(11)]);
var inst_26842 = (state_26852[(2)]);
var inst_26843 = cljs.core.async.put_BANG_.call(null,out,inst_26842);
var inst_26832 = inst_26836;
var state_26852__$1 = (function (){var statearr_26861 = state_26852;
(statearr_26861[(12)] = inst_26843);

(statearr_26861[(7)] = inst_26832);

return statearr_26861;
})();
var statearr_26862_26876 = state_26852__$1;
(statearr_26862_26876[(2)] = null);

(statearr_26862_26876[(1)] = (2));


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
});})(c__23612__auto___26870,out))
;
return ((function (switch__23500__auto__,c__23612__auto___26870,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto____0 = (function (){
var statearr_26866 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26866[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto__);

(statearr_26866[(1)] = (1));

return statearr_26866;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto____1 = (function (state_26852){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_26852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e26867){if((e26867 instanceof Object)){
var ex__23504__auto__ = e26867;
var statearr_26868_26877 = state_26852;
(statearr_26868_26877[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26878 = state_26852;
state_26852 = G__26878;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto__ = function(state_26852){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto____1.call(this,state_26852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___26870,out))
})();
var state__23614__auto__ = (function (){var statearr_26869 = f__23613__auto__.call(null);
(statearr_26869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___26870);

return statearr_26869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___26870,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26879,opts){
var map__26883 = p__26879;
var map__26883__$1 = ((((!((map__26883 == null)))?((((map__26883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26883):map__26883);
var eval_body__$1 = cljs.core.get.call(null,map__26883__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26883__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16759__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16759__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16759__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26885){var e = e26885;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26886_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26886_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26891){
var vec__26892 = p__26891;
var k = cljs.core.nth.call(null,vec__26892,(0),null);
var v = cljs.core.nth.call(null,vec__26892,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26893){
var vec__26894 = p__26893;
var k = cljs.core.nth.call(null,vec__26894,(0),null);
var v = cljs.core.nth.call(null,vec__26894,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26898,p__26899){
var map__27146 = p__26898;
var map__27146__$1 = ((((!((map__27146 == null)))?((((map__27146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27146):map__27146);
var opts = map__27146__$1;
var before_jsload = cljs.core.get.call(null,map__27146__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27146__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27146__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27147 = p__26899;
var map__27147__$1 = ((((!((map__27147 == null)))?((((map__27147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27147):map__27147);
var msg = map__27147__$1;
var files = cljs.core.get.call(null,map__27147__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27147__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27147__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27300){
var state_val_27301 = (state_27300[(1)]);
if((state_val_27301 === (7))){
var inst_27164 = (state_27300[(7)]);
var inst_27162 = (state_27300[(8)]);
var inst_27163 = (state_27300[(9)]);
var inst_27161 = (state_27300[(10)]);
var inst_27169 = cljs.core._nth.call(null,inst_27162,inst_27164);
var inst_27170 = figwheel.client.file_reloading.eval_body.call(null,inst_27169,opts);
var inst_27171 = (inst_27164 + (1));
var tmp27302 = inst_27162;
var tmp27303 = inst_27163;
var tmp27304 = inst_27161;
var inst_27161__$1 = tmp27304;
var inst_27162__$1 = tmp27302;
var inst_27163__$1 = tmp27303;
var inst_27164__$1 = inst_27171;
var state_27300__$1 = (function (){var statearr_27305 = state_27300;
(statearr_27305[(7)] = inst_27164__$1);

(statearr_27305[(8)] = inst_27162__$1);

(statearr_27305[(9)] = inst_27163__$1);

(statearr_27305[(10)] = inst_27161__$1);

(statearr_27305[(11)] = inst_27170);

return statearr_27305;
})();
var statearr_27306_27392 = state_27300__$1;
(statearr_27306_27392[(2)] = null);

(statearr_27306_27392[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (20))){
var inst_27204 = (state_27300[(12)]);
var inst_27212 = figwheel.client.file_reloading.sort_files.call(null,inst_27204);
var state_27300__$1 = state_27300;
var statearr_27307_27393 = state_27300__$1;
(statearr_27307_27393[(2)] = inst_27212);

(statearr_27307_27393[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (27))){
var state_27300__$1 = state_27300;
var statearr_27308_27394 = state_27300__$1;
(statearr_27308_27394[(2)] = null);

(statearr_27308_27394[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (1))){
var inst_27153 = (state_27300[(13)]);
var inst_27150 = before_jsload.call(null,files);
var inst_27151 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27152 = (function (){return ((function (inst_27153,inst_27150,inst_27151,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26895_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26895_SHARP_);
});
;})(inst_27153,inst_27150,inst_27151,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27153__$1 = cljs.core.filter.call(null,inst_27152,files);
var inst_27154 = cljs.core.not_empty.call(null,inst_27153__$1);
var state_27300__$1 = (function (){var statearr_27309 = state_27300;
(statearr_27309[(14)] = inst_27151);

(statearr_27309[(15)] = inst_27150);

(statearr_27309[(13)] = inst_27153__$1);

return statearr_27309;
})();
if(cljs.core.truth_(inst_27154)){
var statearr_27310_27395 = state_27300__$1;
(statearr_27310_27395[(1)] = (2));

} else {
var statearr_27311_27396 = state_27300__$1;
(statearr_27311_27396[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (24))){
var state_27300__$1 = state_27300;
var statearr_27312_27397 = state_27300__$1;
(statearr_27312_27397[(2)] = null);

(statearr_27312_27397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (39))){
var inst_27254 = (state_27300[(16)]);
var state_27300__$1 = state_27300;
var statearr_27313_27398 = state_27300__$1;
(statearr_27313_27398[(2)] = inst_27254);

(statearr_27313_27398[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (46))){
var inst_27295 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27314_27399 = state_27300__$1;
(statearr_27314_27399[(2)] = inst_27295);

(statearr_27314_27399[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (4))){
var inst_27198 = (state_27300[(2)]);
var inst_27199 = cljs.core.List.EMPTY;
var inst_27200 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27199);
var inst_27201 = (function (){return ((function (inst_27198,inst_27199,inst_27200,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26896_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26896_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26896_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_27198,inst_27199,inst_27200,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27202 = cljs.core.filter.call(null,inst_27201,files);
var inst_27203 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27204 = cljs.core.concat.call(null,inst_27202,inst_27203);
var state_27300__$1 = (function (){var statearr_27315 = state_27300;
(statearr_27315[(17)] = inst_27198);

(statearr_27315[(12)] = inst_27204);

(statearr_27315[(18)] = inst_27200);

return statearr_27315;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27316_27400 = state_27300__$1;
(statearr_27316_27400[(1)] = (16));

} else {
var statearr_27317_27401 = state_27300__$1;
(statearr_27317_27401[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (15))){
var inst_27188 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27318_27402 = state_27300__$1;
(statearr_27318_27402[(2)] = inst_27188);

(statearr_27318_27402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (21))){
var inst_27214 = (state_27300[(19)]);
var inst_27214__$1 = (state_27300[(2)]);
var inst_27215 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27214__$1);
var state_27300__$1 = (function (){var statearr_27319 = state_27300;
(statearr_27319[(19)] = inst_27214__$1);

return statearr_27319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27300__$1,(22),inst_27215);
} else {
if((state_val_27301 === (31))){
var inst_27298 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27300__$1,inst_27298);
} else {
if((state_val_27301 === (32))){
var inst_27254 = (state_27300[(16)]);
var inst_27259 = inst_27254.cljs$lang$protocol_mask$partition0$;
var inst_27260 = (inst_27259 & (64));
var inst_27261 = inst_27254.cljs$core$ISeq$;
var inst_27262 = (inst_27260) || (inst_27261);
var state_27300__$1 = state_27300;
if(cljs.core.truth_(inst_27262)){
var statearr_27320_27403 = state_27300__$1;
(statearr_27320_27403[(1)] = (35));

} else {
var statearr_27321_27404 = state_27300__$1;
(statearr_27321_27404[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (40))){
var inst_27275 = (state_27300[(20)]);
var inst_27274 = (state_27300[(2)]);
var inst_27275__$1 = cljs.core.get.call(null,inst_27274,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27276 = cljs.core.get.call(null,inst_27274,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27277 = cljs.core.not_empty.call(null,inst_27275__$1);
var state_27300__$1 = (function (){var statearr_27322 = state_27300;
(statearr_27322[(20)] = inst_27275__$1);

(statearr_27322[(21)] = inst_27276);

return statearr_27322;
})();
if(cljs.core.truth_(inst_27277)){
var statearr_27323_27405 = state_27300__$1;
(statearr_27323_27405[(1)] = (41));

} else {
var statearr_27324_27406 = state_27300__$1;
(statearr_27324_27406[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (33))){
var state_27300__$1 = state_27300;
var statearr_27325_27407 = state_27300__$1;
(statearr_27325_27407[(2)] = false);

(statearr_27325_27407[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (13))){
var inst_27174 = (state_27300[(22)]);
var inst_27178 = cljs.core.chunk_first.call(null,inst_27174);
var inst_27179 = cljs.core.chunk_rest.call(null,inst_27174);
var inst_27180 = cljs.core.count.call(null,inst_27178);
var inst_27161 = inst_27179;
var inst_27162 = inst_27178;
var inst_27163 = inst_27180;
var inst_27164 = (0);
var state_27300__$1 = (function (){var statearr_27326 = state_27300;
(statearr_27326[(7)] = inst_27164);

(statearr_27326[(8)] = inst_27162);

(statearr_27326[(9)] = inst_27163);

(statearr_27326[(10)] = inst_27161);

return statearr_27326;
})();
var statearr_27327_27408 = state_27300__$1;
(statearr_27327_27408[(2)] = null);

(statearr_27327_27408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (22))){
var inst_27217 = (state_27300[(23)]);
var inst_27218 = (state_27300[(24)]);
var inst_27222 = (state_27300[(25)]);
var inst_27214 = (state_27300[(19)]);
var inst_27217__$1 = (state_27300[(2)]);
var inst_27218__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27217__$1);
var inst_27219 = (function (){var all_files = inst_27214;
var res_SINGLEQUOTE_ = inst_27217__$1;
var res = inst_27218__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27217,inst_27218,inst_27222,inst_27214,inst_27217__$1,inst_27218__$1,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26897_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26897_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27217,inst_27218,inst_27222,inst_27214,inst_27217__$1,inst_27218__$1,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27220 = cljs.core.filter.call(null,inst_27219,inst_27217__$1);
var inst_27221 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27222__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27221);
var inst_27223 = cljs.core.not_empty.call(null,inst_27222__$1);
var state_27300__$1 = (function (){var statearr_27328 = state_27300;
(statearr_27328[(23)] = inst_27217__$1);

(statearr_27328[(24)] = inst_27218__$1);

(statearr_27328[(26)] = inst_27220);

(statearr_27328[(25)] = inst_27222__$1);

return statearr_27328;
})();
if(cljs.core.truth_(inst_27223)){
var statearr_27329_27409 = state_27300__$1;
(statearr_27329_27409[(1)] = (23));

} else {
var statearr_27330_27410 = state_27300__$1;
(statearr_27330_27410[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (36))){
var state_27300__$1 = state_27300;
var statearr_27331_27411 = state_27300__$1;
(statearr_27331_27411[(2)] = false);

(statearr_27331_27411[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (41))){
var inst_27275 = (state_27300[(20)]);
var inst_27279 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27280 = cljs.core.map.call(null,inst_27279,inst_27275);
var inst_27281 = cljs.core.pr_str.call(null,inst_27280);
var inst_27282 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27281)].join('');
var inst_27283 = figwheel.client.utils.log.call(null,inst_27282);
var state_27300__$1 = state_27300;
var statearr_27332_27412 = state_27300__$1;
(statearr_27332_27412[(2)] = inst_27283);

(statearr_27332_27412[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (43))){
var inst_27276 = (state_27300[(21)]);
var inst_27286 = (state_27300[(2)]);
var inst_27287 = cljs.core.not_empty.call(null,inst_27276);
var state_27300__$1 = (function (){var statearr_27333 = state_27300;
(statearr_27333[(27)] = inst_27286);

return statearr_27333;
})();
if(cljs.core.truth_(inst_27287)){
var statearr_27334_27413 = state_27300__$1;
(statearr_27334_27413[(1)] = (44));

} else {
var statearr_27335_27414 = state_27300__$1;
(statearr_27335_27414[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (29))){
var inst_27217 = (state_27300[(23)]);
var inst_27218 = (state_27300[(24)]);
var inst_27220 = (state_27300[(26)]);
var inst_27254 = (state_27300[(16)]);
var inst_27222 = (state_27300[(25)]);
var inst_27214 = (state_27300[(19)]);
var inst_27250 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27253 = (function (){var all_files = inst_27214;
var res_SINGLEQUOTE_ = inst_27217;
var res = inst_27218;
var files_not_loaded = inst_27220;
var dependencies_that_loaded = inst_27222;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27218,inst_27220,inst_27254,inst_27222,inst_27214,inst_27250,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27252){
var map__27336 = p__27252;
var map__27336__$1 = ((((!((map__27336 == null)))?((((map__27336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27336):map__27336);
var namespace = cljs.core.get.call(null,map__27336__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27218,inst_27220,inst_27254,inst_27222,inst_27214,inst_27250,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27254__$1 = cljs.core.group_by.call(null,inst_27253,inst_27220);
var inst_27256 = (inst_27254__$1 == null);
var inst_27257 = cljs.core.not.call(null,inst_27256);
var state_27300__$1 = (function (){var statearr_27338 = state_27300;
(statearr_27338[(16)] = inst_27254__$1);

(statearr_27338[(28)] = inst_27250);

return statearr_27338;
})();
if(inst_27257){
var statearr_27339_27415 = state_27300__$1;
(statearr_27339_27415[(1)] = (32));

} else {
var statearr_27340_27416 = state_27300__$1;
(statearr_27340_27416[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (44))){
var inst_27276 = (state_27300[(21)]);
var inst_27289 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27276);
var inst_27290 = cljs.core.pr_str.call(null,inst_27289);
var inst_27291 = [cljs.core.str("not required: "),cljs.core.str(inst_27290)].join('');
var inst_27292 = figwheel.client.utils.log.call(null,inst_27291);
var state_27300__$1 = state_27300;
var statearr_27341_27417 = state_27300__$1;
(statearr_27341_27417[(2)] = inst_27292);

(statearr_27341_27417[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (6))){
var inst_27195 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27342_27418 = state_27300__$1;
(statearr_27342_27418[(2)] = inst_27195);

(statearr_27342_27418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (28))){
var inst_27220 = (state_27300[(26)]);
var inst_27247 = (state_27300[(2)]);
var inst_27248 = cljs.core.not_empty.call(null,inst_27220);
var state_27300__$1 = (function (){var statearr_27343 = state_27300;
(statearr_27343[(29)] = inst_27247);

return statearr_27343;
})();
if(cljs.core.truth_(inst_27248)){
var statearr_27344_27419 = state_27300__$1;
(statearr_27344_27419[(1)] = (29));

} else {
var statearr_27345_27420 = state_27300__$1;
(statearr_27345_27420[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (25))){
var inst_27218 = (state_27300[(24)]);
var inst_27234 = (state_27300[(2)]);
var inst_27235 = cljs.core.not_empty.call(null,inst_27218);
var state_27300__$1 = (function (){var statearr_27346 = state_27300;
(statearr_27346[(30)] = inst_27234);

return statearr_27346;
})();
if(cljs.core.truth_(inst_27235)){
var statearr_27347_27421 = state_27300__$1;
(statearr_27347_27421[(1)] = (26));

} else {
var statearr_27348_27422 = state_27300__$1;
(statearr_27348_27422[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (34))){
var inst_27269 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
if(cljs.core.truth_(inst_27269)){
var statearr_27349_27423 = state_27300__$1;
(statearr_27349_27423[(1)] = (38));

} else {
var statearr_27350_27424 = state_27300__$1;
(statearr_27350_27424[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (17))){
var state_27300__$1 = state_27300;
var statearr_27351_27425 = state_27300__$1;
(statearr_27351_27425[(2)] = recompile_dependents);

(statearr_27351_27425[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (3))){
var state_27300__$1 = state_27300;
var statearr_27352_27426 = state_27300__$1;
(statearr_27352_27426[(2)] = null);

(statearr_27352_27426[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (12))){
var inst_27191 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27353_27427 = state_27300__$1;
(statearr_27353_27427[(2)] = inst_27191);

(statearr_27353_27427[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (2))){
var inst_27153 = (state_27300[(13)]);
var inst_27160 = cljs.core.seq.call(null,inst_27153);
var inst_27161 = inst_27160;
var inst_27162 = null;
var inst_27163 = (0);
var inst_27164 = (0);
var state_27300__$1 = (function (){var statearr_27354 = state_27300;
(statearr_27354[(7)] = inst_27164);

(statearr_27354[(8)] = inst_27162);

(statearr_27354[(9)] = inst_27163);

(statearr_27354[(10)] = inst_27161);

return statearr_27354;
})();
var statearr_27355_27428 = state_27300__$1;
(statearr_27355_27428[(2)] = null);

(statearr_27355_27428[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (23))){
var inst_27217 = (state_27300[(23)]);
var inst_27218 = (state_27300[(24)]);
var inst_27220 = (state_27300[(26)]);
var inst_27222 = (state_27300[(25)]);
var inst_27214 = (state_27300[(19)]);
var inst_27225 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27227 = (function (){var all_files = inst_27214;
var res_SINGLEQUOTE_ = inst_27217;
var res = inst_27218;
var files_not_loaded = inst_27220;
var dependencies_that_loaded = inst_27222;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27218,inst_27220,inst_27222,inst_27214,inst_27225,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27226){
var map__27356 = p__27226;
var map__27356__$1 = ((((!((map__27356 == null)))?((((map__27356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27356):map__27356);
var request_url = cljs.core.get.call(null,map__27356__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27218,inst_27220,inst_27222,inst_27214,inst_27225,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27228 = cljs.core.reverse.call(null,inst_27222);
var inst_27229 = cljs.core.map.call(null,inst_27227,inst_27228);
var inst_27230 = cljs.core.pr_str.call(null,inst_27229);
var inst_27231 = figwheel.client.utils.log.call(null,inst_27230);
var state_27300__$1 = (function (){var statearr_27358 = state_27300;
(statearr_27358[(31)] = inst_27225);

return statearr_27358;
})();
var statearr_27359_27429 = state_27300__$1;
(statearr_27359_27429[(2)] = inst_27231);

(statearr_27359_27429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (35))){
var state_27300__$1 = state_27300;
var statearr_27360_27430 = state_27300__$1;
(statearr_27360_27430[(2)] = true);

(statearr_27360_27430[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (19))){
var inst_27204 = (state_27300[(12)]);
var inst_27210 = figwheel.client.file_reloading.expand_files.call(null,inst_27204);
var state_27300__$1 = state_27300;
var statearr_27361_27431 = state_27300__$1;
(statearr_27361_27431[(2)] = inst_27210);

(statearr_27361_27431[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (11))){
var state_27300__$1 = state_27300;
var statearr_27362_27432 = state_27300__$1;
(statearr_27362_27432[(2)] = null);

(statearr_27362_27432[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (9))){
var inst_27193 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27363_27433 = state_27300__$1;
(statearr_27363_27433[(2)] = inst_27193);

(statearr_27363_27433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (5))){
var inst_27164 = (state_27300[(7)]);
var inst_27163 = (state_27300[(9)]);
var inst_27166 = (inst_27164 < inst_27163);
var inst_27167 = inst_27166;
var state_27300__$1 = state_27300;
if(cljs.core.truth_(inst_27167)){
var statearr_27364_27434 = state_27300__$1;
(statearr_27364_27434[(1)] = (7));

} else {
var statearr_27365_27435 = state_27300__$1;
(statearr_27365_27435[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (14))){
var inst_27174 = (state_27300[(22)]);
var inst_27183 = cljs.core.first.call(null,inst_27174);
var inst_27184 = figwheel.client.file_reloading.eval_body.call(null,inst_27183,opts);
var inst_27185 = cljs.core.next.call(null,inst_27174);
var inst_27161 = inst_27185;
var inst_27162 = null;
var inst_27163 = (0);
var inst_27164 = (0);
var state_27300__$1 = (function (){var statearr_27366 = state_27300;
(statearr_27366[(7)] = inst_27164);

(statearr_27366[(8)] = inst_27162);

(statearr_27366[(9)] = inst_27163);

(statearr_27366[(32)] = inst_27184);

(statearr_27366[(10)] = inst_27161);

return statearr_27366;
})();
var statearr_27367_27436 = state_27300__$1;
(statearr_27367_27436[(2)] = null);

(statearr_27367_27436[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (45))){
var state_27300__$1 = state_27300;
var statearr_27368_27437 = state_27300__$1;
(statearr_27368_27437[(2)] = null);

(statearr_27368_27437[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (26))){
var inst_27217 = (state_27300[(23)]);
var inst_27218 = (state_27300[(24)]);
var inst_27220 = (state_27300[(26)]);
var inst_27222 = (state_27300[(25)]);
var inst_27214 = (state_27300[(19)]);
var inst_27237 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27239 = (function (){var all_files = inst_27214;
var res_SINGLEQUOTE_ = inst_27217;
var res = inst_27218;
var files_not_loaded = inst_27220;
var dependencies_that_loaded = inst_27222;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27218,inst_27220,inst_27222,inst_27214,inst_27237,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27238){
var map__27369 = p__27238;
var map__27369__$1 = ((((!((map__27369 == null)))?((((map__27369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27369):map__27369);
var namespace = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27369__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27218,inst_27220,inst_27222,inst_27214,inst_27237,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27240 = cljs.core.map.call(null,inst_27239,inst_27218);
var inst_27241 = cljs.core.pr_str.call(null,inst_27240);
var inst_27242 = figwheel.client.utils.log.call(null,inst_27241);
var inst_27243 = (function (){var all_files = inst_27214;
var res_SINGLEQUOTE_ = inst_27217;
var res = inst_27218;
var files_not_loaded = inst_27220;
var dependencies_that_loaded = inst_27222;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27218,inst_27220,inst_27222,inst_27214,inst_27237,inst_27239,inst_27240,inst_27241,inst_27242,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27217,inst_27218,inst_27220,inst_27222,inst_27214,inst_27237,inst_27239,inst_27240,inst_27241,inst_27242,state_val_27301,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27244 = setTimeout(inst_27243,(10));
var state_27300__$1 = (function (){var statearr_27371 = state_27300;
(statearr_27371[(33)] = inst_27237);

(statearr_27371[(34)] = inst_27242);

return statearr_27371;
})();
var statearr_27372_27438 = state_27300__$1;
(statearr_27372_27438[(2)] = inst_27244);

(statearr_27372_27438[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (16))){
var state_27300__$1 = state_27300;
var statearr_27373_27439 = state_27300__$1;
(statearr_27373_27439[(2)] = reload_dependents);

(statearr_27373_27439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (38))){
var inst_27254 = (state_27300[(16)]);
var inst_27271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27254);
var state_27300__$1 = state_27300;
var statearr_27374_27440 = state_27300__$1;
(statearr_27374_27440[(2)] = inst_27271);

(statearr_27374_27440[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (30))){
var state_27300__$1 = state_27300;
var statearr_27375_27441 = state_27300__$1;
(statearr_27375_27441[(2)] = null);

(statearr_27375_27441[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (10))){
var inst_27174 = (state_27300[(22)]);
var inst_27176 = cljs.core.chunked_seq_QMARK_.call(null,inst_27174);
var state_27300__$1 = state_27300;
if(inst_27176){
var statearr_27376_27442 = state_27300__$1;
(statearr_27376_27442[(1)] = (13));

} else {
var statearr_27377_27443 = state_27300__$1;
(statearr_27377_27443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (18))){
var inst_27208 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
if(cljs.core.truth_(inst_27208)){
var statearr_27378_27444 = state_27300__$1;
(statearr_27378_27444[(1)] = (19));

} else {
var statearr_27379_27445 = state_27300__$1;
(statearr_27379_27445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (42))){
var state_27300__$1 = state_27300;
var statearr_27380_27446 = state_27300__$1;
(statearr_27380_27446[(2)] = null);

(statearr_27380_27446[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (37))){
var inst_27266 = (state_27300[(2)]);
var state_27300__$1 = state_27300;
var statearr_27381_27447 = state_27300__$1;
(statearr_27381_27447[(2)] = inst_27266);

(statearr_27381_27447[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27301 === (8))){
var inst_27174 = (state_27300[(22)]);
var inst_27161 = (state_27300[(10)]);
var inst_27174__$1 = cljs.core.seq.call(null,inst_27161);
var state_27300__$1 = (function (){var statearr_27382 = state_27300;
(statearr_27382[(22)] = inst_27174__$1);

return statearr_27382;
})();
if(inst_27174__$1){
var statearr_27383_27448 = state_27300__$1;
(statearr_27383_27448[(1)] = (10));

} else {
var statearr_27384_27449 = state_27300__$1;
(statearr_27384_27449[(1)] = (11));

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
});})(c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23500__auto__,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto____0 = (function (){
var statearr_27388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27388[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto__);

(statearr_27388[(1)] = (1));

return statearr_27388;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto____1 = (function (state_27300){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_27300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e27389){if((e27389 instanceof Object)){
var ex__23504__auto__ = e27389;
var statearr_27390_27450 = state_27300;
(statearr_27390_27450[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27451 = state_27300;
state_27300 = G__27451;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto__ = function(state_27300){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto____1.call(this,state_27300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23614__auto__ = (function (){var statearr_27391 = f__23613__auto__.call(null);
(statearr_27391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto__);

return statearr_27391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto__,map__27146,map__27146__$1,opts,before_jsload,on_jsload,reload_dependents,map__27147,map__27147__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23612__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27454,link){
var map__27457 = p__27454;
var map__27457__$1 = ((((!((map__27457 == null)))?((((map__27457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27457):map__27457);
var file = cljs.core.get.call(null,map__27457__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27457,map__27457__$1,file){
return (function (p1__27452_SHARP_,p2__27453_SHARP_){
if(cljs.core._EQ_.call(null,p1__27452_SHARP_,p2__27453_SHARP_)){
return p1__27452_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27457,map__27457__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27463){
var map__27464 = p__27463;
var map__27464__$1 = ((((!((map__27464 == null)))?((((map__27464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27464):map__27464);
var match_length = cljs.core.get.call(null,map__27464__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27464__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27459_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27459_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27466 = [];
var len__17829__auto___27469 = arguments.length;
var i__17830__auto___27470 = (0);
while(true){
if((i__17830__auto___27470 < len__17829__auto___27469)){
args27466.push((arguments[i__17830__auto___27470]));

var G__27471 = (i__17830__auto___27470 + (1));
i__17830__auto___27470 = G__27471;
continue;
} else {
}
break;
}

var G__27468 = args27466.length;
switch (G__27468) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27466.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27473_SHARP_,p2__27474_SHARP_){
return cljs.core.assoc.call(null,p1__27473_SHARP_,cljs.core.get.call(null,p2__27474_SHARP_,key),p2__27474_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27475){
var map__27478 = p__27475;
var map__27478__$1 = ((((!((map__27478 == null)))?((((map__27478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27478):map__27478);
var f_data = map__27478__$1;
var file = cljs.core.get.call(null,map__27478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27480,files_msg){
var map__27487 = p__27480;
var map__27487__$1 = ((((!((map__27487 == null)))?((((map__27487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27487):map__27487);
var opts = map__27487__$1;
var on_cssload = cljs.core.get.call(null,map__27487__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27489_27493 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27490_27494 = null;
var count__27491_27495 = (0);
var i__27492_27496 = (0);
while(true){
if((i__27492_27496 < count__27491_27495)){
var f_27497 = cljs.core._nth.call(null,chunk__27490_27494,i__27492_27496);
figwheel.client.file_reloading.reload_css_file.call(null,f_27497);

var G__27498 = seq__27489_27493;
var G__27499 = chunk__27490_27494;
var G__27500 = count__27491_27495;
var G__27501 = (i__27492_27496 + (1));
seq__27489_27493 = G__27498;
chunk__27490_27494 = G__27499;
count__27491_27495 = G__27500;
i__27492_27496 = G__27501;
continue;
} else {
var temp__4425__auto___27502 = cljs.core.seq.call(null,seq__27489_27493);
if(temp__4425__auto___27502){
var seq__27489_27503__$1 = temp__4425__auto___27502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27489_27503__$1)){
var c__17574__auto___27504 = cljs.core.chunk_first.call(null,seq__27489_27503__$1);
var G__27505 = cljs.core.chunk_rest.call(null,seq__27489_27503__$1);
var G__27506 = c__17574__auto___27504;
var G__27507 = cljs.core.count.call(null,c__17574__auto___27504);
var G__27508 = (0);
seq__27489_27493 = G__27505;
chunk__27490_27494 = G__27506;
count__27491_27495 = G__27507;
i__27492_27496 = G__27508;
continue;
} else {
var f_27509 = cljs.core.first.call(null,seq__27489_27503__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27509);

var G__27510 = cljs.core.next.call(null,seq__27489_27503__$1);
var G__27511 = null;
var G__27512 = (0);
var G__27513 = (0);
seq__27489_27493 = G__27510;
chunk__27490_27494 = G__27511;
count__27491_27495 = G__27512;
i__27492_27496 = G__27513;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27487,map__27487__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27487,map__27487__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map