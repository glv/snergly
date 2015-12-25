// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27684_27698 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27685_27699 = null;
var count__27686_27700 = (0);
var i__27687_27701 = (0);
while(true){
if((i__27687_27701 < count__27686_27700)){
var f_27702 = cljs.core._nth.call(null,chunk__27685_27699,i__27687_27701);
cljs.core.println.call(null,"  ",f_27702);

var G__27703 = seq__27684_27698;
var G__27704 = chunk__27685_27699;
var G__27705 = count__27686_27700;
var G__27706 = (i__27687_27701 + (1));
seq__27684_27698 = G__27703;
chunk__27685_27699 = G__27704;
count__27686_27700 = G__27705;
i__27687_27701 = G__27706;
continue;
} else {
var temp__4425__auto___27707 = cljs.core.seq.call(null,seq__27684_27698);
if(temp__4425__auto___27707){
var seq__27684_27708__$1 = temp__4425__auto___27707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27684_27708__$1)){
var c__17574__auto___27709 = cljs.core.chunk_first.call(null,seq__27684_27708__$1);
var G__27710 = cljs.core.chunk_rest.call(null,seq__27684_27708__$1);
var G__27711 = c__17574__auto___27709;
var G__27712 = cljs.core.count.call(null,c__17574__auto___27709);
var G__27713 = (0);
seq__27684_27698 = G__27710;
chunk__27685_27699 = G__27711;
count__27686_27700 = G__27712;
i__27687_27701 = G__27713;
continue;
} else {
var f_27714 = cljs.core.first.call(null,seq__27684_27708__$1);
cljs.core.println.call(null,"  ",f_27714);

var G__27715 = cljs.core.next.call(null,seq__27684_27708__$1);
var G__27716 = null;
var G__27717 = (0);
var G__27718 = (0);
seq__27684_27698 = G__27715;
chunk__27685_27699 = G__27716;
count__27686_27700 = G__27717;
i__27687_27701 = G__27718;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27719 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27719);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27719)))?cljs.core.second.call(null,arglists_27719):arglists_27719));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27688 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27689 = null;
var count__27690 = (0);
var i__27691 = (0);
while(true){
if((i__27691 < count__27690)){
var vec__27692 = cljs.core._nth.call(null,chunk__27689,i__27691);
var name = cljs.core.nth.call(null,vec__27692,(0),null);
var map__27693 = cljs.core.nth.call(null,vec__27692,(1),null);
var map__27693__$1 = ((((!((map__27693 == null)))?((((map__27693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27693):map__27693);
var doc = cljs.core.get.call(null,map__27693__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27693__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27720 = seq__27688;
var G__27721 = chunk__27689;
var G__27722 = count__27690;
var G__27723 = (i__27691 + (1));
seq__27688 = G__27720;
chunk__27689 = G__27721;
count__27690 = G__27722;
i__27691 = G__27723;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27688);
if(temp__4425__auto__){
var seq__27688__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27688__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__27688__$1);
var G__27724 = cljs.core.chunk_rest.call(null,seq__27688__$1);
var G__27725 = c__17574__auto__;
var G__27726 = cljs.core.count.call(null,c__17574__auto__);
var G__27727 = (0);
seq__27688 = G__27724;
chunk__27689 = G__27725;
count__27690 = G__27726;
i__27691 = G__27727;
continue;
} else {
var vec__27695 = cljs.core.first.call(null,seq__27688__$1);
var name = cljs.core.nth.call(null,vec__27695,(0),null);
var map__27696 = cljs.core.nth.call(null,vec__27695,(1),null);
var map__27696__$1 = ((((!((map__27696 == null)))?((((map__27696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27696):map__27696);
var doc = cljs.core.get.call(null,map__27696__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__27696__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__27728 = cljs.core.next.call(null,seq__27688__$1);
var G__27729 = null;
var G__27730 = (0);
var G__27731 = (0);
seq__27688 = G__27728;
chunk__27689 = G__27729;
count__27690 = G__27730;
i__27691 = G__27731;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map