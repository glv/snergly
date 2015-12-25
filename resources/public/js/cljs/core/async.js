// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23657 = [];
var len__17829__auto___23663 = arguments.length;
var i__17830__auto___23664 = (0);
while(true){
if((i__17830__auto___23664 < len__17829__auto___23663)){
args23657.push((arguments[i__17830__auto___23664]));

var G__23665 = (i__17830__auto___23664 + (1));
i__17830__auto___23664 = G__23665;
continue;
} else {
}
break;
}

var G__23659 = args23657.length;
switch (G__23659) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23657.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23660 = (function (f,blockable,meta23661){
this.f = f;
this.blockable = blockable;
this.meta23661 = meta23661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23662,meta23661__$1){
var self__ = this;
var _23662__$1 = this;
return (new cljs.core.async.t_cljs$core$async23660(self__.f,self__.blockable,meta23661__$1));
});

cljs.core.async.t_cljs$core$async23660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23662){
var self__ = this;
var _23662__$1 = this;
return self__.meta23661;
});

cljs.core.async.t_cljs$core$async23660.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23661","meta23661",834007060,null)], null);
});

cljs.core.async.t_cljs$core$async23660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23660";

cljs.core.async.t_cljs$core$async23660.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23660");
});

cljs.core.async.__GT_t_cljs$core$async23660 = (function cljs$core$async$__GT_t_cljs$core$async23660(f__$1,blockable__$1,meta23661){
return (new cljs.core.async.t_cljs$core$async23660(f__$1,blockable__$1,meta23661));
});

}

return (new cljs.core.async.t_cljs$core$async23660(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args23669 = [];
var len__17829__auto___23672 = arguments.length;
var i__17830__auto___23673 = (0);
while(true){
if((i__17830__auto___23673 < len__17829__auto___23672)){
args23669.push((arguments[i__17830__auto___23673]));

var G__23674 = (i__17830__auto___23673 + (1));
i__17830__auto___23673 = G__23674;
continue;
} else {
}
break;
}

var G__23671 = args23669.length;
switch (G__23671) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23669.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23676 = [];
var len__17829__auto___23679 = arguments.length;
var i__17830__auto___23680 = (0);
while(true){
if((i__17830__auto___23680 < len__17829__auto___23679)){
args23676.push((arguments[i__17830__auto___23680]));

var G__23681 = (i__17830__auto___23680 + (1));
i__17830__auto___23680 = G__23681;
continue;
} else {
}
break;
}

var G__23678 = args23676.length;
switch (G__23678) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23676.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23683 = [];
var len__17829__auto___23686 = arguments.length;
var i__17830__auto___23687 = (0);
while(true){
if((i__17830__auto___23687 < len__17829__auto___23686)){
args23683.push((arguments[i__17830__auto___23687]));

var G__23688 = (i__17830__auto___23687 + (1));
i__17830__auto___23687 = G__23688;
continue;
} else {
}
break;
}

var G__23685 = args23683.length;
switch (G__23685) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23683.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23690 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23690);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23690,ret){
return (function (){
return fn1.call(null,val_23690);
});})(val_23690,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23691 = [];
var len__17829__auto___23694 = arguments.length;
var i__17830__auto___23695 = (0);
while(true){
if((i__17830__auto___23695 < len__17829__auto___23694)){
args23691.push((arguments[i__17830__auto___23695]));

var G__23696 = (i__17830__auto___23695 + (1));
i__17830__auto___23695 = G__23696;
continue;
} else {
}
break;
}

var G__23693 = args23691.length;
switch (G__23693) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23691.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17674__auto___23698 = n;
var x_23699 = (0);
while(true){
if((x_23699 < n__17674__auto___23698)){
(a[x_23699] = (0));

var G__23700 = (x_23699 + (1));
x_23699 = G__23700;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23701 = (i + (1));
i = G__23701;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23705 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23705 = (function (alt_flag,flag,meta23706){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23706 = meta23706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23707,meta23706__$1){
var self__ = this;
var _23707__$1 = this;
return (new cljs.core.async.t_cljs$core$async23705(self__.alt_flag,self__.flag,meta23706__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23707){
var self__ = this;
var _23707__$1 = this;
return self__.meta23706;
});})(flag))
;

cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23705.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23706","meta23706",462669072,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23705";

cljs.core.async.t_cljs$core$async23705.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23705");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23705 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23705(alt_flag__$1,flag__$1,meta23706){
return (new cljs.core.async.t_cljs$core$async23705(alt_flag__$1,flag__$1,meta23706));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23705(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23711 = (function (alt_handler,flag,cb,meta23712){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23712 = meta23712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23713,meta23712__$1){
var self__ = this;
var _23713__$1 = this;
return (new cljs.core.async.t_cljs$core$async23711(self__.alt_handler,self__.flag,self__.cb,meta23712__$1));
});

cljs.core.async.t_cljs$core$async23711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23713){
var self__ = this;
var _23713__$1 = this;
return self__.meta23712;
});

cljs.core.async.t_cljs$core$async23711.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23711.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23712","meta23712",2038021183,null)], null);
});

cljs.core.async.t_cljs$core$async23711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23711";

cljs.core.async.t_cljs$core$async23711.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23711");
});

cljs.core.async.__GT_t_cljs$core$async23711 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23711(alt_handler__$1,flag__$1,cb__$1,meta23712){
return (new cljs.core.async.t_cljs$core$async23711(alt_handler__$1,flag__$1,cb__$1,meta23712));
});

}

return (new cljs.core.async.t_cljs$core$async23711(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23714_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23714_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23715_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23715_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16771__auto__ = wport;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23716 = (i + (1));
i = G__23716;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16771__auto__ = ret;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16759__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16759__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___23722 = arguments.length;
var i__17830__auto___23723 = (0);
while(true){
if((i__17830__auto___23723 < len__17829__auto___23722)){
args__17836__auto__.push((arguments[i__17830__auto___23723]));

var G__23724 = (i__17830__auto___23723 + (1));
i__17830__auto___23723 = G__23724;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23719){
var map__23720 = p__23719;
var map__23720__$1 = ((((!((map__23720 == null)))?((((map__23720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23720):map__23720);
var opts = map__23720__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23717){
var G__23718 = cljs.core.first.call(null,seq23717);
var seq23717__$1 = cljs.core.next.call(null,seq23717);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23718,seq23717__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23725 = [];
var len__17829__auto___23775 = arguments.length;
var i__17830__auto___23776 = (0);
while(true){
if((i__17830__auto___23776 < len__17829__auto___23775)){
args23725.push((arguments[i__17830__auto___23776]));

var G__23777 = (i__17830__auto___23776 + (1));
i__17830__auto___23776 = G__23777;
continue;
} else {
}
break;
}

var G__23727 = args23725.length;
switch (G__23727) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23725.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23612__auto___23779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___23779){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___23779){
return (function (state_23751){
var state_val_23752 = (state_23751[(1)]);
if((state_val_23752 === (7))){
var inst_23747 = (state_23751[(2)]);
var state_23751__$1 = state_23751;
var statearr_23753_23780 = state_23751__$1;
(statearr_23753_23780[(2)] = inst_23747);

(statearr_23753_23780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23752 === (1))){
var state_23751__$1 = state_23751;
var statearr_23754_23781 = state_23751__$1;
(statearr_23754_23781[(2)] = null);

(statearr_23754_23781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23752 === (4))){
var inst_23730 = (state_23751[(7)]);
var inst_23730__$1 = (state_23751[(2)]);
var inst_23731 = (inst_23730__$1 == null);
var state_23751__$1 = (function (){var statearr_23755 = state_23751;
(statearr_23755[(7)] = inst_23730__$1);

return statearr_23755;
})();
if(cljs.core.truth_(inst_23731)){
var statearr_23756_23782 = state_23751__$1;
(statearr_23756_23782[(1)] = (5));

} else {
var statearr_23757_23783 = state_23751__$1;
(statearr_23757_23783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23752 === (13))){
var state_23751__$1 = state_23751;
var statearr_23758_23784 = state_23751__$1;
(statearr_23758_23784[(2)] = null);

(statearr_23758_23784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23752 === (6))){
var inst_23730 = (state_23751[(7)]);
var state_23751__$1 = state_23751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23751__$1,(11),to,inst_23730);
} else {
if((state_val_23752 === (3))){
var inst_23749 = (state_23751[(2)]);
var state_23751__$1 = state_23751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23751__$1,inst_23749);
} else {
if((state_val_23752 === (12))){
var state_23751__$1 = state_23751;
var statearr_23759_23785 = state_23751__$1;
(statearr_23759_23785[(2)] = null);

(statearr_23759_23785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23752 === (2))){
var state_23751__$1 = state_23751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23751__$1,(4),from);
} else {
if((state_val_23752 === (11))){
var inst_23740 = (state_23751[(2)]);
var state_23751__$1 = state_23751;
if(cljs.core.truth_(inst_23740)){
var statearr_23760_23786 = state_23751__$1;
(statearr_23760_23786[(1)] = (12));

} else {
var statearr_23761_23787 = state_23751__$1;
(statearr_23761_23787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23752 === (9))){
var state_23751__$1 = state_23751;
var statearr_23762_23788 = state_23751__$1;
(statearr_23762_23788[(2)] = null);

(statearr_23762_23788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23752 === (5))){
var state_23751__$1 = state_23751;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23763_23789 = state_23751__$1;
(statearr_23763_23789[(1)] = (8));

} else {
var statearr_23764_23790 = state_23751__$1;
(statearr_23764_23790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23752 === (14))){
var inst_23745 = (state_23751[(2)]);
var state_23751__$1 = state_23751;
var statearr_23765_23791 = state_23751__$1;
(statearr_23765_23791[(2)] = inst_23745);

(statearr_23765_23791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23752 === (10))){
var inst_23737 = (state_23751[(2)]);
var state_23751__$1 = state_23751;
var statearr_23766_23792 = state_23751__$1;
(statearr_23766_23792[(2)] = inst_23737);

(statearr_23766_23792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23752 === (8))){
var inst_23734 = cljs.core.async.close_BANG_.call(null,to);
var state_23751__$1 = state_23751;
var statearr_23767_23793 = state_23751__$1;
(statearr_23767_23793[(2)] = inst_23734);

(statearr_23767_23793[(1)] = (10));


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
});})(c__23612__auto___23779))
;
return ((function (switch__23500__auto__,c__23612__auto___23779){
return (function() {
var cljs$core$async$state_machine__23501__auto__ = null;
var cljs$core$async$state_machine__23501__auto____0 = (function (){
var statearr_23771 = [null,null,null,null,null,null,null,null];
(statearr_23771[(0)] = cljs$core$async$state_machine__23501__auto__);

(statearr_23771[(1)] = (1));

return statearr_23771;
});
var cljs$core$async$state_machine__23501__auto____1 = (function (state_23751){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_23751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e23772){if((e23772 instanceof Object)){
var ex__23504__auto__ = e23772;
var statearr_23773_23794 = state_23751;
(statearr_23773_23794[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23795 = state_23751;
state_23751 = G__23795;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$state_machine__23501__auto__ = function(state_23751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23501__auto____1.call(this,state_23751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23501__auto____0;
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23501__auto____1;
return cljs$core$async$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___23779))
})();
var state__23614__auto__ = (function (){var statearr_23774 = f__23613__auto__.call(null);
(statearr_23774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___23779);

return statearr_23774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___23779))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23979){
var vec__23980 = p__23979;
var v = cljs.core.nth.call(null,vec__23980,(0),null);
var p = cljs.core.nth.call(null,vec__23980,(1),null);
var job = vec__23980;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23612__auto___24162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___24162,res,vec__23980,v,p,job,jobs,results){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___24162,res,vec__23980,v,p,job,jobs,results){
return (function (state_23985){
var state_val_23986 = (state_23985[(1)]);
if((state_val_23986 === (1))){
var state_23985__$1 = state_23985;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23985__$1,(2),res,v);
} else {
if((state_val_23986 === (2))){
var inst_23982 = (state_23985[(2)]);
var inst_23983 = cljs.core.async.close_BANG_.call(null,res);
var state_23985__$1 = (function (){var statearr_23987 = state_23985;
(statearr_23987[(7)] = inst_23982);

return statearr_23987;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23985__$1,inst_23983);
} else {
return null;
}
}
});})(c__23612__auto___24162,res,vec__23980,v,p,job,jobs,results))
;
return ((function (switch__23500__auto__,c__23612__auto___24162,res,vec__23980,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0 = (function (){
var statearr_23991 = [null,null,null,null,null,null,null,null];
(statearr_23991[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__);

(statearr_23991[(1)] = (1));

return statearr_23991;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1 = (function (state_23985){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_23985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e23992){if((e23992 instanceof Object)){
var ex__23504__auto__ = e23992;
var statearr_23993_24163 = state_23985;
(statearr_23993_24163[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24164 = state_23985;
state_23985 = G__24164;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__ = function(state_23985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1.call(this,state_23985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___24162,res,vec__23980,v,p,job,jobs,results))
})();
var state__23614__auto__ = (function (){var statearr_23994 = f__23613__auto__.call(null);
(statearr_23994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___24162);

return statearr_23994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___24162,res,vec__23980,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23995){
var vec__23996 = p__23995;
var v = cljs.core.nth.call(null,vec__23996,(0),null);
var p = cljs.core.nth.call(null,vec__23996,(1),null);
var job = vec__23996;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17674__auto___24165 = n;
var __24166 = (0);
while(true){
if((__24166 < n__17674__auto___24165)){
var G__23997_24167 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23997_24167) {
case "compute":
var c__23612__auto___24169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24166,c__23612__auto___24169,G__23997_24167,n__17674__auto___24165,jobs,results,process,async){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (__24166,c__23612__auto___24169,G__23997_24167,n__17674__auto___24165,jobs,results,process,async){
return (function (state_24010){
var state_val_24011 = (state_24010[(1)]);
if((state_val_24011 === (1))){
var state_24010__$1 = state_24010;
var statearr_24012_24170 = state_24010__$1;
(statearr_24012_24170[(2)] = null);

(statearr_24012_24170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (2))){
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24010__$1,(4),jobs);
} else {
if((state_val_24011 === (3))){
var inst_24008 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24010__$1,inst_24008);
} else {
if((state_val_24011 === (4))){
var inst_24000 = (state_24010[(2)]);
var inst_24001 = process.call(null,inst_24000);
var state_24010__$1 = state_24010;
if(cljs.core.truth_(inst_24001)){
var statearr_24013_24171 = state_24010__$1;
(statearr_24013_24171[(1)] = (5));

} else {
var statearr_24014_24172 = state_24010__$1;
(statearr_24014_24172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (5))){
var state_24010__$1 = state_24010;
var statearr_24015_24173 = state_24010__$1;
(statearr_24015_24173[(2)] = null);

(statearr_24015_24173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (6))){
var state_24010__$1 = state_24010;
var statearr_24016_24174 = state_24010__$1;
(statearr_24016_24174[(2)] = null);

(statearr_24016_24174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24011 === (7))){
var inst_24006 = (state_24010[(2)]);
var state_24010__$1 = state_24010;
var statearr_24017_24175 = state_24010__$1;
(statearr_24017_24175[(2)] = inst_24006);

(statearr_24017_24175[(1)] = (3));


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
});})(__24166,c__23612__auto___24169,G__23997_24167,n__17674__auto___24165,jobs,results,process,async))
;
return ((function (__24166,switch__23500__auto__,c__23612__auto___24169,G__23997_24167,n__17674__auto___24165,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0 = (function (){
var statearr_24021 = [null,null,null,null,null,null,null];
(statearr_24021[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__);

(statearr_24021[(1)] = (1));

return statearr_24021;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1 = (function (state_24010){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_24010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e24022){if((e24022 instanceof Object)){
var ex__23504__auto__ = e24022;
var statearr_24023_24176 = state_24010;
(statearr_24023_24176[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24177 = state_24010;
state_24010 = G__24177;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__ = function(state_24010){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1.call(this,state_24010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__;
})()
;})(__24166,switch__23500__auto__,c__23612__auto___24169,G__23997_24167,n__17674__auto___24165,jobs,results,process,async))
})();
var state__23614__auto__ = (function (){var statearr_24024 = f__23613__auto__.call(null);
(statearr_24024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___24169);

return statearr_24024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(__24166,c__23612__auto___24169,G__23997_24167,n__17674__auto___24165,jobs,results,process,async))
);


break;
case "async":
var c__23612__auto___24178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24166,c__23612__auto___24178,G__23997_24167,n__17674__auto___24165,jobs,results,process,async){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (__24166,c__23612__auto___24178,G__23997_24167,n__17674__auto___24165,jobs,results,process,async){
return (function (state_24037){
var state_val_24038 = (state_24037[(1)]);
if((state_val_24038 === (1))){
var state_24037__$1 = state_24037;
var statearr_24039_24179 = state_24037__$1;
(statearr_24039_24179[(2)] = null);

(statearr_24039_24179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (2))){
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24037__$1,(4),jobs);
} else {
if((state_val_24038 === (3))){
var inst_24035 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24037__$1,inst_24035);
} else {
if((state_val_24038 === (4))){
var inst_24027 = (state_24037[(2)]);
var inst_24028 = async.call(null,inst_24027);
var state_24037__$1 = state_24037;
if(cljs.core.truth_(inst_24028)){
var statearr_24040_24180 = state_24037__$1;
(statearr_24040_24180[(1)] = (5));

} else {
var statearr_24041_24181 = state_24037__$1;
(statearr_24041_24181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (5))){
var state_24037__$1 = state_24037;
var statearr_24042_24182 = state_24037__$1;
(statearr_24042_24182[(2)] = null);

(statearr_24042_24182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (6))){
var state_24037__$1 = state_24037;
var statearr_24043_24183 = state_24037__$1;
(statearr_24043_24183[(2)] = null);

(statearr_24043_24183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (7))){
var inst_24033 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
var statearr_24044_24184 = state_24037__$1;
(statearr_24044_24184[(2)] = inst_24033);

(statearr_24044_24184[(1)] = (3));


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
});})(__24166,c__23612__auto___24178,G__23997_24167,n__17674__auto___24165,jobs,results,process,async))
;
return ((function (__24166,switch__23500__auto__,c__23612__auto___24178,G__23997_24167,n__17674__auto___24165,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0 = (function (){
var statearr_24048 = [null,null,null,null,null,null,null];
(statearr_24048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__);

(statearr_24048[(1)] = (1));

return statearr_24048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1 = (function (state_24037){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_24037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e24049){if((e24049 instanceof Object)){
var ex__23504__auto__ = e24049;
var statearr_24050_24185 = state_24037;
(statearr_24050_24185[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24186 = state_24037;
state_24037 = G__24186;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__ = function(state_24037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1.call(this,state_24037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__;
})()
;})(__24166,switch__23500__auto__,c__23612__auto___24178,G__23997_24167,n__17674__auto___24165,jobs,results,process,async))
})();
var state__23614__auto__ = (function (){var statearr_24051 = f__23613__auto__.call(null);
(statearr_24051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___24178);

return statearr_24051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(__24166,c__23612__auto___24178,G__23997_24167,n__17674__auto___24165,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24187 = (__24166 + (1));
__24166 = G__24187;
continue;
} else {
}
break;
}

var c__23612__auto___24188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___24188,jobs,results,process,async){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___24188,jobs,results,process,async){
return (function (state_24073){
var state_val_24074 = (state_24073[(1)]);
if((state_val_24074 === (1))){
var state_24073__$1 = state_24073;
var statearr_24075_24189 = state_24073__$1;
(statearr_24075_24189[(2)] = null);

(statearr_24075_24189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24074 === (2))){
var state_24073__$1 = state_24073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24073__$1,(4),from);
} else {
if((state_val_24074 === (3))){
var inst_24071 = (state_24073[(2)]);
var state_24073__$1 = state_24073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24073__$1,inst_24071);
} else {
if((state_val_24074 === (4))){
var inst_24054 = (state_24073[(7)]);
var inst_24054__$1 = (state_24073[(2)]);
var inst_24055 = (inst_24054__$1 == null);
var state_24073__$1 = (function (){var statearr_24076 = state_24073;
(statearr_24076[(7)] = inst_24054__$1);

return statearr_24076;
})();
if(cljs.core.truth_(inst_24055)){
var statearr_24077_24190 = state_24073__$1;
(statearr_24077_24190[(1)] = (5));

} else {
var statearr_24078_24191 = state_24073__$1;
(statearr_24078_24191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24074 === (5))){
var inst_24057 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24073__$1 = state_24073;
var statearr_24079_24192 = state_24073__$1;
(statearr_24079_24192[(2)] = inst_24057);

(statearr_24079_24192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24074 === (6))){
var inst_24059 = (state_24073[(8)]);
var inst_24054 = (state_24073[(7)]);
var inst_24059__$1 = cljs.core.async.chan.call(null,(1));
var inst_24060 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24061 = [inst_24054,inst_24059__$1];
var inst_24062 = (new cljs.core.PersistentVector(null,2,(5),inst_24060,inst_24061,null));
var state_24073__$1 = (function (){var statearr_24080 = state_24073;
(statearr_24080[(8)] = inst_24059__$1);

return statearr_24080;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24073__$1,(8),jobs,inst_24062);
} else {
if((state_val_24074 === (7))){
var inst_24069 = (state_24073[(2)]);
var state_24073__$1 = state_24073;
var statearr_24081_24193 = state_24073__$1;
(statearr_24081_24193[(2)] = inst_24069);

(statearr_24081_24193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24074 === (8))){
var inst_24059 = (state_24073[(8)]);
var inst_24064 = (state_24073[(2)]);
var state_24073__$1 = (function (){var statearr_24082 = state_24073;
(statearr_24082[(9)] = inst_24064);

return statearr_24082;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24073__$1,(9),results,inst_24059);
} else {
if((state_val_24074 === (9))){
var inst_24066 = (state_24073[(2)]);
var state_24073__$1 = (function (){var statearr_24083 = state_24073;
(statearr_24083[(10)] = inst_24066);

return statearr_24083;
})();
var statearr_24084_24194 = state_24073__$1;
(statearr_24084_24194[(2)] = null);

(statearr_24084_24194[(1)] = (2));


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
});})(c__23612__auto___24188,jobs,results,process,async))
;
return ((function (switch__23500__auto__,c__23612__auto___24188,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0 = (function (){
var statearr_24088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24088[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__);

(statearr_24088[(1)] = (1));

return statearr_24088;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1 = (function (state_24073){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_24073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e24089){if((e24089 instanceof Object)){
var ex__23504__auto__ = e24089;
var statearr_24090_24195 = state_24073;
(statearr_24090_24195[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24196 = state_24073;
state_24073 = G__24196;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__ = function(state_24073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1.call(this,state_24073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___24188,jobs,results,process,async))
})();
var state__23614__auto__ = (function (){var statearr_24091 = f__23613__auto__.call(null);
(statearr_24091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___24188);

return statearr_24091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___24188,jobs,results,process,async))
);


var c__23612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto__,jobs,results,process,async){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto__,jobs,results,process,async){
return (function (state_24129){
var state_val_24130 = (state_24129[(1)]);
if((state_val_24130 === (7))){
var inst_24125 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24131_24197 = state_24129__$1;
(statearr_24131_24197[(2)] = inst_24125);

(statearr_24131_24197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (20))){
var state_24129__$1 = state_24129;
var statearr_24132_24198 = state_24129__$1;
(statearr_24132_24198[(2)] = null);

(statearr_24132_24198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (1))){
var state_24129__$1 = state_24129;
var statearr_24133_24199 = state_24129__$1;
(statearr_24133_24199[(2)] = null);

(statearr_24133_24199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (4))){
var inst_24094 = (state_24129[(7)]);
var inst_24094__$1 = (state_24129[(2)]);
var inst_24095 = (inst_24094__$1 == null);
var state_24129__$1 = (function (){var statearr_24134 = state_24129;
(statearr_24134[(7)] = inst_24094__$1);

return statearr_24134;
})();
if(cljs.core.truth_(inst_24095)){
var statearr_24135_24200 = state_24129__$1;
(statearr_24135_24200[(1)] = (5));

} else {
var statearr_24136_24201 = state_24129__$1;
(statearr_24136_24201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (15))){
var inst_24107 = (state_24129[(8)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24129__$1,(18),to,inst_24107);
} else {
if((state_val_24130 === (21))){
var inst_24120 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24137_24202 = state_24129__$1;
(statearr_24137_24202[(2)] = inst_24120);

(statearr_24137_24202[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (13))){
var inst_24122 = (state_24129[(2)]);
var state_24129__$1 = (function (){var statearr_24138 = state_24129;
(statearr_24138[(9)] = inst_24122);

return statearr_24138;
})();
var statearr_24139_24203 = state_24129__$1;
(statearr_24139_24203[(2)] = null);

(statearr_24139_24203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (6))){
var inst_24094 = (state_24129[(7)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24129__$1,(11),inst_24094);
} else {
if((state_val_24130 === (17))){
var inst_24115 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
if(cljs.core.truth_(inst_24115)){
var statearr_24140_24204 = state_24129__$1;
(statearr_24140_24204[(1)] = (19));

} else {
var statearr_24141_24205 = state_24129__$1;
(statearr_24141_24205[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (3))){
var inst_24127 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24129__$1,inst_24127);
} else {
if((state_val_24130 === (12))){
var inst_24104 = (state_24129[(10)]);
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24129__$1,(14),inst_24104);
} else {
if((state_val_24130 === (2))){
var state_24129__$1 = state_24129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24129__$1,(4),results);
} else {
if((state_val_24130 === (19))){
var state_24129__$1 = state_24129;
var statearr_24142_24206 = state_24129__$1;
(statearr_24142_24206[(2)] = null);

(statearr_24142_24206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (11))){
var inst_24104 = (state_24129[(2)]);
var state_24129__$1 = (function (){var statearr_24143 = state_24129;
(statearr_24143[(10)] = inst_24104);

return statearr_24143;
})();
var statearr_24144_24207 = state_24129__$1;
(statearr_24144_24207[(2)] = null);

(statearr_24144_24207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (9))){
var state_24129__$1 = state_24129;
var statearr_24145_24208 = state_24129__$1;
(statearr_24145_24208[(2)] = null);

(statearr_24145_24208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (5))){
var state_24129__$1 = state_24129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24146_24209 = state_24129__$1;
(statearr_24146_24209[(1)] = (8));

} else {
var statearr_24147_24210 = state_24129__$1;
(statearr_24147_24210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (14))){
var inst_24109 = (state_24129[(11)]);
var inst_24107 = (state_24129[(8)]);
var inst_24107__$1 = (state_24129[(2)]);
var inst_24108 = (inst_24107__$1 == null);
var inst_24109__$1 = cljs.core.not.call(null,inst_24108);
var state_24129__$1 = (function (){var statearr_24148 = state_24129;
(statearr_24148[(11)] = inst_24109__$1);

(statearr_24148[(8)] = inst_24107__$1);

return statearr_24148;
})();
if(inst_24109__$1){
var statearr_24149_24211 = state_24129__$1;
(statearr_24149_24211[(1)] = (15));

} else {
var statearr_24150_24212 = state_24129__$1;
(statearr_24150_24212[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (16))){
var inst_24109 = (state_24129[(11)]);
var state_24129__$1 = state_24129;
var statearr_24151_24213 = state_24129__$1;
(statearr_24151_24213[(2)] = inst_24109);

(statearr_24151_24213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (10))){
var inst_24101 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24152_24214 = state_24129__$1;
(statearr_24152_24214[(2)] = inst_24101);

(statearr_24152_24214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (18))){
var inst_24112 = (state_24129[(2)]);
var state_24129__$1 = state_24129;
var statearr_24153_24215 = state_24129__$1;
(statearr_24153_24215[(2)] = inst_24112);

(statearr_24153_24215[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24130 === (8))){
var inst_24098 = cljs.core.async.close_BANG_.call(null,to);
var state_24129__$1 = state_24129;
var statearr_24154_24216 = state_24129__$1;
(statearr_24154_24216[(2)] = inst_24098);

(statearr_24154_24216[(1)] = (10));


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
});})(c__23612__auto__,jobs,results,process,async))
;
return ((function (switch__23500__auto__,c__23612__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0 = (function (){
var statearr_24158 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__);

(statearr_24158[(1)] = (1));

return statearr_24158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1 = (function (state_24129){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_24129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e24159){if((e24159 instanceof Object)){
var ex__23504__auto__ = e24159;
var statearr_24160_24217 = state_24129;
(statearr_24160_24217[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24218 = state_24129;
state_24129 = G__24218;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__ = function(state_24129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1.call(this,state_24129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23501__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto__,jobs,results,process,async))
})();
var state__23614__auto__ = (function (){var statearr_24161 = f__23613__auto__.call(null);
(statearr_24161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto__);

return statearr_24161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto__,jobs,results,process,async))
);

return c__23612__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args24219 = [];
var len__17829__auto___24222 = arguments.length;
var i__17830__auto___24223 = (0);
while(true){
if((i__17830__auto___24223 < len__17829__auto___24222)){
args24219.push((arguments[i__17830__auto___24223]));

var G__24224 = (i__17830__auto___24223 + (1));
i__17830__auto___24223 = G__24224;
continue;
} else {
}
break;
}

var G__24221 = args24219.length;
switch (G__24221) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24219.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args24226 = [];
var len__17829__auto___24229 = arguments.length;
var i__17830__auto___24230 = (0);
while(true){
if((i__17830__auto___24230 < len__17829__auto___24229)){
args24226.push((arguments[i__17830__auto___24230]));

var G__24231 = (i__17830__auto___24230 + (1));
i__17830__auto___24230 = G__24231;
continue;
} else {
}
break;
}

var G__24228 = args24226.length;
switch (G__24228) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24226.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args24233 = [];
var len__17829__auto___24286 = arguments.length;
var i__17830__auto___24287 = (0);
while(true){
if((i__17830__auto___24287 < len__17829__auto___24286)){
args24233.push((arguments[i__17830__auto___24287]));

var G__24288 = (i__17830__auto___24287 + (1));
i__17830__auto___24287 = G__24288;
continue;
} else {
}
break;
}

var G__24235 = args24233.length;
switch (G__24235) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24233.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23612__auto___24290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___24290,tc,fc){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___24290,tc,fc){
return (function (state_24261){
var state_val_24262 = (state_24261[(1)]);
if((state_val_24262 === (7))){
var inst_24257 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24263_24291 = state_24261__$1;
(statearr_24263_24291[(2)] = inst_24257);

(statearr_24263_24291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (1))){
var state_24261__$1 = state_24261;
var statearr_24264_24292 = state_24261__$1;
(statearr_24264_24292[(2)] = null);

(statearr_24264_24292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (4))){
var inst_24238 = (state_24261[(7)]);
var inst_24238__$1 = (state_24261[(2)]);
var inst_24239 = (inst_24238__$1 == null);
var state_24261__$1 = (function (){var statearr_24265 = state_24261;
(statearr_24265[(7)] = inst_24238__$1);

return statearr_24265;
})();
if(cljs.core.truth_(inst_24239)){
var statearr_24266_24293 = state_24261__$1;
(statearr_24266_24293[(1)] = (5));

} else {
var statearr_24267_24294 = state_24261__$1;
(statearr_24267_24294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (13))){
var state_24261__$1 = state_24261;
var statearr_24268_24295 = state_24261__$1;
(statearr_24268_24295[(2)] = null);

(statearr_24268_24295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (6))){
var inst_24238 = (state_24261[(7)]);
var inst_24244 = p.call(null,inst_24238);
var state_24261__$1 = state_24261;
if(cljs.core.truth_(inst_24244)){
var statearr_24269_24296 = state_24261__$1;
(statearr_24269_24296[(1)] = (9));

} else {
var statearr_24270_24297 = state_24261__$1;
(statearr_24270_24297[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (3))){
var inst_24259 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24261__$1,inst_24259);
} else {
if((state_val_24262 === (12))){
var state_24261__$1 = state_24261;
var statearr_24271_24298 = state_24261__$1;
(statearr_24271_24298[(2)] = null);

(statearr_24271_24298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (2))){
var state_24261__$1 = state_24261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24261__$1,(4),ch);
} else {
if((state_val_24262 === (11))){
var inst_24238 = (state_24261[(7)]);
var inst_24248 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24261__$1,(8),inst_24248,inst_24238);
} else {
if((state_val_24262 === (9))){
var state_24261__$1 = state_24261;
var statearr_24272_24299 = state_24261__$1;
(statearr_24272_24299[(2)] = tc);

(statearr_24272_24299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (5))){
var inst_24241 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24242 = cljs.core.async.close_BANG_.call(null,fc);
var state_24261__$1 = (function (){var statearr_24273 = state_24261;
(statearr_24273[(8)] = inst_24241);

return statearr_24273;
})();
var statearr_24274_24300 = state_24261__$1;
(statearr_24274_24300[(2)] = inst_24242);

(statearr_24274_24300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (14))){
var inst_24255 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
var statearr_24275_24301 = state_24261__$1;
(statearr_24275_24301[(2)] = inst_24255);

(statearr_24275_24301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (10))){
var state_24261__$1 = state_24261;
var statearr_24276_24302 = state_24261__$1;
(statearr_24276_24302[(2)] = fc);

(statearr_24276_24302[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24262 === (8))){
var inst_24250 = (state_24261[(2)]);
var state_24261__$1 = state_24261;
if(cljs.core.truth_(inst_24250)){
var statearr_24277_24303 = state_24261__$1;
(statearr_24277_24303[(1)] = (12));

} else {
var statearr_24278_24304 = state_24261__$1;
(statearr_24278_24304[(1)] = (13));

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
});})(c__23612__auto___24290,tc,fc))
;
return ((function (switch__23500__auto__,c__23612__auto___24290,tc,fc){
return (function() {
var cljs$core$async$state_machine__23501__auto__ = null;
var cljs$core$async$state_machine__23501__auto____0 = (function (){
var statearr_24282 = [null,null,null,null,null,null,null,null,null];
(statearr_24282[(0)] = cljs$core$async$state_machine__23501__auto__);

(statearr_24282[(1)] = (1));

return statearr_24282;
});
var cljs$core$async$state_machine__23501__auto____1 = (function (state_24261){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_24261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e24283){if((e24283 instanceof Object)){
var ex__23504__auto__ = e24283;
var statearr_24284_24305 = state_24261;
(statearr_24284_24305[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24306 = state_24261;
state_24261 = G__24306;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$state_machine__23501__auto__ = function(state_24261){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23501__auto____1.call(this,state_24261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23501__auto____0;
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23501__auto____1;
return cljs$core$async$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___24290,tc,fc))
})();
var state__23614__auto__ = (function (){var statearr_24285 = f__23613__auto__.call(null);
(statearr_24285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___24290);

return statearr_24285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___24290,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto__){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto__){
return (function (state_24370){
var state_val_24371 = (state_24370[(1)]);
if((state_val_24371 === (7))){
var inst_24366 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24372_24393 = state_24370__$1;
(statearr_24372_24393[(2)] = inst_24366);

(statearr_24372_24393[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (1))){
var inst_24350 = init;
var state_24370__$1 = (function (){var statearr_24373 = state_24370;
(statearr_24373[(7)] = inst_24350);

return statearr_24373;
})();
var statearr_24374_24394 = state_24370__$1;
(statearr_24374_24394[(2)] = null);

(statearr_24374_24394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (4))){
var inst_24353 = (state_24370[(8)]);
var inst_24353__$1 = (state_24370[(2)]);
var inst_24354 = (inst_24353__$1 == null);
var state_24370__$1 = (function (){var statearr_24375 = state_24370;
(statearr_24375[(8)] = inst_24353__$1);

return statearr_24375;
})();
if(cljs.core.truth_(inst_24354)){
var statearr_24376_24395 = state_24370__$1;
(statearr_24376_24395[(1)] = (5));

} else {
var statearr_24377_24396 = state_24370__$1;
(statearr_24377_24396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (6))){
var inst_24353 = (state_24370[(8)]);
var inst_24357 = (state_24370[(9)]);
var inst_24350 = (state_24370[(7)]);
var inst_24357__$1 = f.call(null,inst_24350,inst_24353);
var inst_24358 = cljs.core.reduced_QMARK_.call(null,inst_24357__$1);
var state_24370__$1 = (function (){var statearr_24378 = state_24370;
(statearr_24378[(9)] = inst_24357__$1);

return statearr_24378;
})();
if(inst_24358){
var statearr_24379_24397 = state_24370__$1;
(statearr_24379_24397[(1)] = (8));

} else {
var statearr_24380_24398 = state_24370__$1;
(statearr_24380_24398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (3))){
var inst_24368 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24370__$1,inst_24368);
} else {
if((state_val_24371 === (2))){
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24370__$1,(4),ch);
} else {
if((state_val_24371 === (9))){
var inst_24357 = (state_24370[(9)]);
var inst_24350 = inst_24357;
var state_24370__$1 = (function (){var statearr_24381 = state_24370;
(statearr_24381[(7)] = inst_24350);

return statearr_24381;
})();
var statearr_24382_24399 = state_24370__$1;
(statearr_24382_24399[(2)] = null);

(statearr_24382_24399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (5))){
var inst_24350 = (state_24370[(7)]);
var state_24370__$1 = state_24370;
var statearr_24383_24400 = state_24370__$1;
(statearr_24383_24400[(2)] = inst_24350);

(statearr_24383_24400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (10))){
var inst_24364 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24384_24401 = state_24370__$1;
(statearr_24384_24401[(2)] = inst_24364);

(statearr_24384_24401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (8))){
var inst_24357 = (state_24370[(9)]);
var inst_24360 = cljs.core.deref.call(null,inst_24357);
var state_24370__$1 = state_24370;
var statearr_24385_24402 = state_24370__$1;
(statearr_24385_24402[(2)] = inst_24360);

(statearr_24385_24402[(1)] = (10));


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
});})(c__23612__auto__))
;
return ((function (switch__23500__auto__,c__23612__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23501__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23501__auto____0 = (function (){
var statearr_24389 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24389[(0)] = cljs$core$async$reduce_$_state_machine__23501__auto__);

(statearr_24389[(1)] = (1));

return statearr_24389;
});
var cljs$core$async$reduce_$_state_machine__23501__auto____1 = (function (state_24370){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_24370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e24390){if((e24390 instanceof Object)){
var ex__23504__auto__ = e24390;
var statearr_24391_24403 = state_24370;
(statearr_24391_24403[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24404 = state_24370;
state_24370 = G__24404;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23501__auto__ = function(state_24370){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23501__auto____1.call(this,state_24370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23501__auto____0;
cljs$core$async$reduce_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23501__auto____1;
return cljs$core$async$reduce_$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto__))
})();
var state__23614__auto__ = (function (){var statearr_24392 = f__23613__auto__.call(null);
(statearr_24392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto__);

return statearr_24392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto__))
);

return c__23612__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args24405 = [];
var len__17829__auto___24457 = arguments.length;
var i__17830__auto___24458 = (0);
while(true){
if((i__17830__auto___24458 < len__17829__auto___24457)){
args24405.push((arguments[i__17830__auto___24458]));

var G__24459 = (i__17830__auto___24458 + (1));
i__17830__auto___24458 = G__24459;
continue;
} else {
}
break;
}

var G__24407 = args24405.length;
switch (G__24407) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24405.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto__){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto__){
return (function (state_24432){
var state_val_24433 = (state_24432[(1)]);
if((state_val_24433 === (7))){
var inst_24414 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24434_24461 = state_24432__$1;
(statearr_24434_24461[(2)] = inst_24414);

(statearr_24434_24461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (1))){
var inst_24408 = cljs.core.seq.call(null,coll);
var inst_24409 = inst_24408;
var state_24432__$1 = (function (){var statearr_24435 = state_24432;
(statearr_24435[(7)] = inst_24409);

return statearr_24435;
})();
var statearr_24436_24462 = state_24432__$1;
(statearr_24436_24462[(2)] = null);

(statearr_24436_24462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (4))){
var inst_24409 = (state_24432[(7)]);
var inst_24412 = cljs.core.first.call(null,inst_24409);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24432__$1,(7),ch,inst_24412);
} else {
if((state_val_24433 === (13))){
var inst_24426 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24437_24463 = state_24432__$1;
(statearr_24437_24463[(2)] = inst_24426);

(statearr_24437_24463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (6))){
var inst_24417 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24417)){
var statearr_24438_24464 = state_24432__$1;
(statearr_24438_24464[(1)] = (8));

} else {
var statearr_24439_24465 = state_24432__$1;
(statearr_24439_24465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (3))){
var inst_24430 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24432__$1,inst_24430);
} else {
if((state_val_24433 === (12))){
var state_24432__$1 = state_24432;
var statearr_24440_24466 = state_24432__$1;
(statearr_24440_24466[(2)] = null);

(statearr_24440_24466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (2))){
var inst_24409 = (state_24432[(7)]);
var state_24432__$1 = state_24432;
if(cljs.core.truth_(inst_24409)){
var statearr_24441_24467 = state_24432__$1;
(statearr_24441_24467[(1)] = (4));

} else {
var statearr_24442_24468 = state_24432__$1;
(statearr_24442_24468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (11))){
var inst_24423 = cljs.core.async.close_BANG_.call(null,ch);
var state_24432__$1 = state_24432;
var statearr_24443_24469 = state_24432__$1;
(statearr_24443_24469[(2)] = inst_24423);

(statearr_24443_24469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (9))){
var state_24432__$1 = state_24432;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24444_24470 = state_24432__$1;
(statearr_24444_24470[(1)] = (11));

} else {
var statearr_24445_24471 = state_24432__$1;
(statearr_24445_24471[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (5))){
var inst_24409 = (state_24432[(7)]);
var state_24432__$1 = state_24432;
var statearr_24446_24472 = state_24432__$1;
(statearr_24446_24472[(2)] = inst_24409);

(statearr_24446_24472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (10))){
var inst_24428 = (state_24432[(2)]);
var state_24432__$1 = state_24432;
var statearr_24447_24473 = state_24432__$1;
(statearr_24447_24473[(2)] = inst_24428);

(statearr_24447_24473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24433 === (8))){
var inst_24409 = (state_24432[(7)]);
var inst_24419 = cljs.core.next.call(null,inst_24409);
var inst_24409__$1 = inst_24419;
var state_24432__$1 = (function (){var statearr_24448 = state_24432;
(statearr_24448[(7)] = inst_24409__$1);

return statearr_24448;
})();
var statearr_24449_24474 = state_24432__$1;
(statearr_24449_24474[(2)] = null);

(statearr_24449_24474[(1)] = (2));


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
});})(c__23612__auto__))
;
return ((function (switch__23500__auto__,c__23612__auto__){
return (function() {
var cljs$core$async$state_machine__23501__auto__ = null;
var cljs$core$async$state_machine__23501__auto____0 = (function (){
var statearr_24453 = [null,null,null,null,null,null,null,null];
(statearr_24453[(0)] = cljs$core$async$state_machine__23501__auto__);

(statearr_24453[(1)] = (1));

return statearr_24453;
});
var cljs$core$async$state_machine__23501__auto____1 = (function (state_24432){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_24432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e24454){if((e24454 instanceof Object)){
var ex__23504__auto__ = e24454;
var statearr_24455_24475 = state_24432;
(statearr_24455_24475[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24476 = state_24432;
state_24432 = G__24476;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$state_machine__23501__auto__ = function(state_24432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23501__auto____1.call(this,state_24432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23501__auto____0;
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23501__auto____1;
return cljs$core$async$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto__))
})();
var state__23614__auto__ = (function (){var statearr_24456 = f__23613__auto__.call(null);
(statearr_24456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto__);

return statearr_24456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto__))
);

return c__23612__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17426__auto__ = (((_ == null))?null:_);
var m__17427__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,_);
} else {
var m__17427__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24698 = (function (mult,ch,cs,meta24699){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24699 = meta24699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24700,meta24699__$1){
var self__ = this;
var _24700__$1 = this;
return (new cljs.core.async.t_cljs$core$async24698(self__.mult,self__.ch,self__.cs,meta24699__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24700){
var self__ = this;
var _24700__$1 = this;
return self__.meta24699;
});})(cs))
;

cljs.core.async.t_cljs$core$async24698.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24698.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24698.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24698.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24698.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24698.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24699","meta24699",-684660883,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24698";

cljs.core.async.t_cljs$core$async24698.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24698");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24698 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24698(mult__$1,ch__$1,cs__$1,meta24699){
return (new cljs.core.async.t_cljs$core$async24698(mult__$1,ch__$1,cs__$1,meta24699));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24698(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23612__auto___24919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___24919,cs,m,dchan,dctr,done){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___24919,cs,m,dchan,dctr,done){
return (function (state_24831){
var state_val_24832 = (state_24831[(1)]);
if((state_val_24832 === (7))){
var inst_24827 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24833_24920 = state_24831__$1;
(statearr_24833_24920[(2)] = inst_24827);

(statearr_24833_24920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (20))){
var inst_24732 = (state_24831[(7)]);
var inst_24742 = cljs.core.first.call(null,inst_24732);
var inst_24743 = cljs.core.nth.call(null,inst_24742,(0),null);
var inst_24744 = cljs.core.nth.call(null,inst_24742,(1),null);
var state_24831__$1 = (function (){var statearr_24834 = state_24831;
(statearr_24834[(8)] = inst_24743);

return statearr_24834;
})();
if(cljs.core.truth_(inst_24744)){
var statearr_24835_24921 = state_24831__$1;
(statearr_24835_24921[(1)] = (22));

} else {
var statearr_24836_24922 = state_24831__$1;
(statearr_24836_24922[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (27))){
var inst_24703 = (state_24831[(9)]);
var inst_24779 = (state_24831[(10)]);
var inst_24774 = (state_24831[(11)]);
var inst_24772 = (state_24831[(12)]);
var inst_24779__$1 = cljs.core._nth.call(null,inst_24772,inst_24774);
var inst_24780 = cljs.core.async.put_BANG_.call(null,inst_24779__$1,inst_24703,done);
var state_24831__$1 = (function (){var statearr_24837 = state_24831;
(statearr_24837[(10)] = inst_24779__$1);

return statearr_24837;
})();
if(cljs.core.truth_(inst_24780)){
var statearr_24838_24923 = state_24831__$1;
(statearr_24838_24923[(1)] = (30));

} else {
var statearr_24839_24924 = state_24831__$1;
(statearr_24839_24924[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (1))){
var state_24831__$1 = state_24831;
var statearr_24840_24925 = state_24831__$1;
(statearr_24840_24925[(2)] = null);

(statearr_24840_24925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (24))){
var inst_24732 = (state_24831[(7)]);
var inst_24749 = (state_24831[(2)]);
var inst_24750 = cljs.core.next.call(null,inst_24732);
var inst_24712 = inst_24750;
var inst_24713 = null;
var inst_24714 = (0);
var inst_24715 = (0);
var state_24831__$1 = (function (){var statearr_24841 = state_24831;
(statearr_24841[(13)] = inst_24713);

(statearr_24841[(14)] = inst_24715);

(statearr_24841[(15)] = inst_24712);

(statearr_24841[(16)] = inst_24749);

(statearr_24841[(17)] = inst_24714);

return statearr_24841;
})();
var statearr_24842_24926 = state_24831__$1;
(statearr_24842_24926[(2)] = null);

(statearr_24842_24926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (39))){
var state_24831__$1 = state_24831;
var statearr_24846_24927 = state_24831__$1;
(statearr_24846_24927[(2)] = null);

(statearr_24846_24927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (4))){
var inst_24703 = (state_24831[(9)]);
var inst_24703__$1 = (state_24831[(2)]);
var inst_24704 = (inst_24703__$1 == null);
var state_24831__$1 = (function (){var statearr_24847 = state_24831;
(statearr_24847[(9)] = inst_24703__$1);

return statearr_24847;
})();
if(cljs.core.truth_(inst_24704)){
var statearr_24848_24928 = state_24831__$1;
(statearr_24848_24928[(1)] = (5));

} else {
var statearr_24849_24929 = state_24831__$1;
(statearr_24849_24929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (15))){
var inst_24713 = (state_24831[(13)]);
var inst_24715 = (state_24831[(14)]);
var inst_24712 = (state_24831[(15)]);
var inst_24714 = (state_24831[(17)]);
var inst_24728 = (state_24831[(2)]);
var inst_24729 = (inst_24715 + (1));
var tmp24843 = inst_24713;
var tmp24844 = inst_24712;
var tmp24845 = inst_24714;
var inst_24712__$1 = tmp24844;
var inst_24713__$1 = tmp24843;
var inst_24714__$1 = tmp24845;
var inst_24715__$1 = inst_24729;
var state_24831__$1 = (function (){var statearr_24850 = state_24831;
(statearr_24850[(13)] = inst_24713__$1);

(statearr_24850[(14)] = inst_24715__$1);

(statearr_24850[(15)] = inst_24712__$1);

(statearr_24850[(18)] = inst_24728);

(statearr_24850[(17)] = inst_24714__$1);

return statearr_24850;
})();
var statearr_24851_24930 = state_24831__$1;
(statearr_24851_24930[(2)] = null);

(statearr_24851_24930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (21))){
var inst_24753 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24855_24931 = state_24831__$1;
(statearr_24855_24931[(2)] = inst_24753);

(statearr_24855_24931[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (31))){
var inst_24779 = (state_24831[(10)]);
var inst_24783 = done.call(null,null);
var inst_24784 = cljs.core.async.untap_STAR_.call(null,m,inst_24779);
var state_24831__$1 = (function (){var statearr_24856 = state_24831;
(statearr_24856[(19)] = inst_24783);

return statearr_24856;
})();
var statearr_24857_24932 = state_24831__$1;
(statearr_24857_24932[(2)] = inst_24784);

(statearr_24857_24932[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (32))){
var inst_24771 = (state_24831[(20)]);
var inst_24774 = (state_24831[(11)]);
var inst_24773 = (state_24831[(21)]);
var inst_24772 = (state_24831[(12)]);
var inst_24786 = (state_24831[(2)]);
var inst_24787 = (inst_24774 + (1));
var tmp24852 = inst_24771;
var tmp24853 = inst_24773;
var tmp24854 = inst_24772;
var inst_24771__$1 = tmp24852;
var inst_24772__$1 = tmp24854;
var inst_24773__$1 = tmp24853;
var inst_24774__$1 = inst_24787;
var state_24831__$1 = (function (){var statearr_24858 = state_24831;
(statearr_24858[(22)] = inst_24786);

(statearr_24858[(20)] = inst_24771__$1);

(statearr_24858[(11)] = inst_24774__$1);

(statearr_24858[(21)] = inst_24773__$1);

(statearr_24858[(12)] = inst_24772__$1);

return statearr_24858;
})();
var statearr_24859_24933 = state_24831__$1;
(statearr_24859_24933[(2)] = null);

(statearr_24859_24933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (40))){
var inst_24799 = (state_24831[(23)]);
var inst_24803 = done.call(null,null);
var inst_24804 = cljs.core.async.untap_STAR_.call(null,m,inst_24799);
var state_24831__$1 = (function (){var statearr_24860 = state_24831;
(statearr_24860[(24)] = inst_24803);

return statearr_24860;
})();
var statearr_24861_24934 = state_24831__$1;
(statearr_24861_24934[(2)] = inst_24804);

(statearr_24861_24934[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (33))){
var inst_24790 = (state_24831[(25)]);
var inst_24792 = cljs.core.chunked_seq_QMARK_.call(null,inst_24790);
var state_24831__$1 = state_24831;
if(inst_24792){
var statearr_24862_24935 = state_24831__$1;
(statearr_24862_24935[(1)] = (36));

} else {
var statearr_24863_24936 = state_24831__$1;
(statearr_24863_24936[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (13))){
var inst_24722 = (state_24831[(26)]);
var inst_24725 = cljs.core.async.close_BANG_.call(null,inst_24722);
var state_24831__$1 = state_24831;
var statearr_24864_24937 = state_24831__$1;
(statearr_24864_24937[(2)] = inst_24725);

(statearr_24864_24937[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (22))){
var inst_24743 = (state_24831[(8)]);
var inst_24746 = cljs.core.async.close_BANG_.call(null,inst_24743);
var state_24831__$1 = state_24831;
var statearr_24865_24938 = state_24831__$1;
(statearr_24865_24938[(2)] = inst_24746);

(statearr_24865_24938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (36))){
var inst_24790 = (state_24831[(25)]);
var inst_24794 = cljs.core.chunk_first.call(null,inst_24790);
var inst_24795 = cljs.core.chunk_rest.call(null,inst_24790);
var inst_24796 = cljs.core.count.call(null,inst_24794);
var inst_24771 = inst_24795;
var inst_24772 = inst_24794;
var inst_24773 = inst_24796;
var inst_24774 = (0);
var state_24831__$1 = (function (){var statearr_24866 = state_24831;
(statearr_24866[(20)] = inst_24771);

(statearr_24866[(11)] = inst_24774);

(statearr_24866[(21)] = inst_24773);

(statearr_24866[(12)] = inst_24772);

return statearr_24866;
})();
var statearr_24867_24939 = state_24831__$1;
(statearr_24867_24939[(2)] = null);

(statearr_24867_24939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (41))){
var inst_24790 = (state_24831[(25)]);
var inst_24806 = (state_24831[(2)]);
var inst_24807 = cljs.core.next.call(null,inst_24790);
var inst_24771 = inst_24807;
var inst_24772 = null;
var inst_24773 = (0);
var inst_24774 = (0);
var state_24831__$1 = (function (){var statearr_24868 = state_24831;
(statearr_24868[(20)] = inst_24771);

(statearr_24868[(27)] = inst_24806);

(statearr_24868[(11)] = inst_24774);

(statearr_24868[(21)] = inst_24773);

(statearr_24868[(12)] = inst_24772);

return statearr_24868;
})();
var statearr_24869_24940 = state_24831__$1;
(statearr_24869_24940[(2)] = null);

(statearr_24869_24940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (43))){
var state_24831__$1 = state_24831;
var statearr_24870_24941 = state_24831__$1;
(statearr_24870_24941[(2)] = null);

(statearr_24870_24941[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (29))){
var inst_24815 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24871_24942 = state_24831__$1;
(statearr_24871_24942[(2)] = inst_24815);

(statearr_24871_24942[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (44))){
var inst_24824 = (state_24831[(2)]);
var state_24831__$1 = (function (){var statearr_24872 = state_24831;
(statearr_24872[(28)] = inst_24824);

return statearr_24872;
})();
var statearr_24873_24943 = state_24831__$1;
(statearr_24873_24943[(2)] = null);

(statearr_24873_24943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (6))){
var inst_24763 = (state_24831[(29)]);
var inst_24762 = cljs.core.deref.call(null,cs);
var inst_24763__$1 = cljs.core.keys.call(null,inst_24762);
var inst_24764 = cljs.core.count.call(null,inst_24763__$1);
var inst_24765 = cljs.core.reset_BANG_.call(null,dctr,inst_24764);
var inst_24770 = cljs.core.seq.call(null,inst_24763__$1);
var inst_24771 = inst_24770;
var inst_24772 = null;
var inst_24773 = (0);
var inst_24774 = (0);
var state_24831__$1 = (function (){var statearr_24874 = state_24831;
(statearr_24874[(29)] = inst_24763__$1);

(statearr_24874[(20)] = inst_24771);

(statearr_24874[(30)] = inst_24765);

(statearr_24874[(11)] = inst_24774);

(statearr_24874[(21)] = inst_24773);

(statearr_24874[(12)] = inst_24772);

return statearr_24874;
})();
var statearr_24875_24944 = state_24831__$1;
(statearr_24875_24944[(2)] = null);

(statearr_24875_24944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (28))){
var inst_24771 = (state_24831[(20)]);
var inst_24790 = (state_24831[(25)]);
var inst_24790__$1 = cljs.core.seq.call(null,inst_24771);
var state_24831__$1 = (function (){var statearr_24876 = state_24831;
(statearr_24876[(25)] = inst_24790__$1);

return statearr_24876;
})();
if(inst_24790__$1){
var statearr_24877_24945 = state_24831__$1;
(statearr_24877_24945[(1)] = (33));

} else {
var statearr_24878_24946 = state_24831__$1;
(statearr_24878_24946[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (25))){
var inst_24774 = (state_24831[(11)]);
var inst_24773 = (state_24831[(21)]);
var inst_24776 = (inst_24774 < inst_24773);
var inst_24777 = inst_24776;
var state_24831__$1 = state_24831;
if(cljs.core.truth_(inst_24777)){
var statearr_24879_24947 = state_24831__$1;
(statearr_24879_24947[(1)] = (27));

} else {
var statearr_24880_24948 = state_24831__$1;
(statearr_24880_24948[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (34))){
var state_24831__$1 = state_24831;
var statearr_24881_24949 = state_24831__$1;
(statearr_24881_24949[(2)] = null);

(statearr_24881_24949[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (17))){
var state_24831__$1 = state_24831;
var statearr_24882_24950 = state_24831__$1;
(statearr_24882_24950[(2)] = null);

(statearr_24882_24950[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (3))){
var inst_24829 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24831__$1,inst_24829);
} else {
if((state_val_24832 === (12))){
var inst_24758 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24883_24951 = state_24831__$1;
(statearr_24883_24951[(2)] = inst_24758);

(statearr_24883_24951[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (2))){
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24831__$1,(4),ch);
} else {
if((state_val_24832 === (23))){
var state_24831__$1 = state_24831;
var statearr_24884_24952 = state_24831__$1;
(statearr_24884_24952[(2)] = null);

(statearr_24884_24952[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (35))){
var inst_24813 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24885_24953 = state_24831__$1;
(statearr_24885_24953[(2)] = inst_24813);

(statearr_24885_24953[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (19))){
var inst_24732 = (state_24831[(7)]);
var inst_24736 = cljs.core.chunk_first.call(null,inst_24732);
var inst_24737 = cljs.core.chunk_rest.call(null,inst_24732);
var inst_24738 = cljs.core.count.call(null,inst_24736);
var inst_24712 = inst_24737;
var inst_24713 = inst_24736;
var inst_24714 = inst_24738;
var inst_24715 = (0);
var state_24831__$1 = (function (){var statearr_24886 = state_24831;
(statearr_24886[(13)] = inst_24713);

(statearr_24886[(14)] = inst_24715);

(statearr_24886[(15)] = inst_24712);

(statearr_24886[(17)] = inst_24714);

return statearr_24886;
})();
var statearr_24887_24954 = state_24831__$1;
(statearr_24887_24954[(2)] = null);

(statearr_24887_24954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (11))){
var inst_24712 = (state_24831[(15)]);
var inst_24732 = (state_24831[(7)]);
var inst_24732__$1 = cljs.core.seq.call(null,inst_24712);
var state_24831__$1 = (function (){var statearr_24888 = state_24831;
(statearr_24888[(7)] = inst_24732__$1);

return statearr_24888;
})();
if(inst_24732__$1){
var statearr_24889_24955 = state_24831__$1;
(statearr_24889_24955[(1)] = (16));

} else {
var statearr_24890_24956 = state_24831__$1;
(statearr_24890_24956[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (9))){
var inst_24760 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24891_24957 = state_24831__$1;
(statearr_24891_24957[(2)] = inst_24760);

(statearr_24891_24957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (5))){
var inst_24710 = cljs.core.deref.call(null,cs);
var inst_24711 = cljs.core.seq.call(null,inst_24710);
var inst_24712 = inst_24711;
var inst_24713 = null;
var inst_24714 = (0);
var inst_24715 = (0);
var state_24831__$1 = (function (){var statearr_24892 = state_24831;
(statearr_24892[(13)] = inst_24713);

(statearr_24892[(14)] = inst_24715);

(statearr_24892[(15)] = inst_24712);

(statearr_24892[(17)] = inst_24714);

return statearr_24892;
})();
var statearr_24893_24958 = state_24831__$1;
(statearr_24893_24958[(2)] = null);

(statearr_24893_24958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (14))){
var state_24831__$1 = state_24831;
var statearr_24894_24959 = state_24831__$1;
(statearr_24894_24959[(2)] = null);

(statearr_24894_24959[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (45))){
var inst_24821 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24895_24960 = state_24831__$1;
(statearr_24895_24960[(2)] = inst_24821);

(statearr_24895_24960[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (26))){
var inst_24763 = (state_24831[(29)]);
var inst_24817 = (state_24831[(2)]);
var inst_24818 = cljs.core.seq.call(null,inst_24763);
var state_24831__$1 = (function (){var statearr_24896 = state_24831;
(statearr_24896[(31)] = inst_24817);

return statearr_24896;
})();
if(inst_24818){
var statearr_24897_24961 = state_24831__$1;
(statearr_24897_24961[(1)] = (42));

} else {
var statearr_24898_24962 = state_24831__$1;
(statearr_24898_24962[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (16))){
var inst_24732 = (state_24831[(7)]);
var inst_24734 = cljs.core.chunked_seq_QMARK_.call(null,inst_24732);
var state_24831__$1 = state_24831;
if(inst_24734){
var statearr_24899_24963 = state_24831__$1;
(statearr_24899_24963[(1)] = (19));

} else {
var statearr_24900_24964 = state_24831__$1;
(statearr_24900_24964[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (38))){
var inst_24810 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24901_24965 = state_24831__$1;
(statearr_24901_24965[(2)] = inst_24810);

(statearr_24901_24965[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (30))){
var state_24831__$1 = state_24831;
var statearr_24902_24966 = state_24831__$1;
(statearr_24902_24966[(2)] = null);

(statearr_24902_24966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (10))){
var inst_24713 = (state_24831[(13)]);
var inst_24715 = (state_24831[(14)]);
var inst_24721 = cljs.core._nth.call(null,inst_24713,inst_24715);
var inst_24722 = cljs.core.nth.call(null,inst_24721,(0),null);
var inst_24723 = cljs.core.nth.call(null,inst_24721,(1),null);
var state_24831__$1 = (function (){var statearr_24903 = state_24831;
(statearr_24903[(26)] = inst_24722);

return statearr_24903;
})();
if(cljs.core.truth_(inst_24723)){
var statearr_24904_24967 = state_24831__$1;
(statearr_24904_24967[(1)] = (13));

} else {
var statearr_24905_24968 = state_24831__$1;
(statearr_24905_24968[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (18))){
var inst_24756 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24906_24969 = state_24831__$1;
(statearr_24906_24969[(2)] = inst_24756);

(statearr_24906_24969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (42))){
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24831__$1,(45),dchan);
} else {
if((state_val_24832 === (37))){
var inst_24703 = (state_24831[(9)]);
var inst_24799 = (state_24831[(23)]);
var inst_24790 = (state_24831[(25)]);
var inst_24799__$1 = cljs.core.first.call(null,inst_24790);
var inst_24800 = cljs.core.async.put_BANG_.call(null,inst_24799__$1,inst_24703,done);
var state_24831__$1 = (function (){var statearr_24907 = state_24831;
(statearr_24907[(23)] = inst_24799__$1);

return statearr_24907;
})();
if(cljs.core.truth_(inst_24800)){
var statearr_24908_24970 = state_24831__$1;
(statearr_24908_24970[(1)] = (39));

} else {
var statearr_24909_24971 = state_24831__$1;
(statearr_24909_24971[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (8))){
var inst_24715 = (state_24831[(14)]);
var inst_24714 = (state_24831[(17)]);
var inst_24717 = (inst_24715 < inst_24714);
var inst_24718 = inst_24717;
var state_24831__$1 = state_24831;
if(cljs.core.truth_(inst_24718)){
var statearr_24910_24972 = state_24831__$1;
(statearr_24910_24972[(1)] = (10));

} else {
var statearr_24911_24973 = state_24831__$1;
(statearr_24911_24973[(1)] = (11));

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
});})(c__23612__auto___24919,cs,m,dchan,dctr,done))
;
return ((function (switch__23500__auto__,c__23612__auto___24919,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23501__auto__ = null;
var cljs$core$async$mult_$_state_machine__23501__auto____0 = (function (){
var statearr_24915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24915[(0)] = cljs$core$async$mult_$_state_machine__23501__auto__);

(statearr_24915[(1)] = (1));

return statearr_24915;
});
var cljs$core$async$mult_$_state_machine__23501__auto____1 = (function (state_24831){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_24831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e24916){if((e24916 instanceof Object)){
var ex__23504__auto__ = e24916;
var statearr_24917_24974 = state_24831;
(statearr_24917_24974[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24975 = state_24831;
state_24831 = G__24975;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23501__auto__ = function(state_24831){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23501__auto____1.call(this,state_24831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23501__auto____0;
cljs$core$async$mult_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23501__auto____1;
return cljs$core$async$mult_$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___24919,cs,m,dchan,dctr,done))
})();
var state__23614__auto__ = (function (){var statearr_24918 = f__23613__auto__.call(null);
(statearr_24918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___24919);

return statearr_24918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___24919,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24976 = [];
var len__17829__auto___24979 = arguments.length;
var i__17830__auto___24980 = (0);
while(true){
if((i__17830__auto___24980 < len__17829__auto___24979)){
args24976.push((arguments[i__17830__auto___24980]));

var G__24981 = (i__17830__auto___24980 + (1));
i__17830__auto___24980 = G__24981;
continue;
} else {
}
break;
}

var G__24978 = args24976.length;
switch (G__24978) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24976.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,state_map);
} else {
var m__17427__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,mode);
} else {
var m__17427__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___24993 = arguments.length;
var i__17830__auto___24994 = (0);
while(true){
if((i__17830__auto___24994 < len__17829__auto___24993)){
args__17836__auto__.push((arguments[i__17830__auto___24994]));

var G__24995 = (i__17830__auto___24994 + (1));
i__17830__auto___24994 = G__24995;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((3) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17837__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24987){
var map__24988 = p__24987;
var map__24988__$1 = ((((!((map__24988 == null)))?((((map__24988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24988):map__24988);
var opts = map__24988__$1;
var statearr_24990_24996 = state;
(statearr_24990_24996[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__24988,map__24988__$1,opts){
return (function (val){
var statearr_24991_24997 = state;
(statearr_24991_24997[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24988,map__24988__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_24992_24998 = state;
(statearr_24992_24998[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24983){
var G__24984 = cljs.core.first.call(null,seq24983);
var seq24983__$1 = cljs.core.next.call(null,seq24983);
var G__24985 = cljs.core.first.call(null,seq24983__$1);
var seq24983__$2 = cljs.core.next.call(null,seq24983__$1);
var G__24986 = cljs.core.first.call(null,seq24983__$2);
var seq24983__$3 = cljs.core.next.call(null,seq24983__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24984,G__24985,G__24986,seq24983__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25162 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25163){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta25163 = meta25163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25164,meta25163__$1){
var self__ = this;
var _25164__$1 = this;
return (new cljs.core.async.t_cljs$core$async25162(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25163__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25164){
var self__ = this;
var _25164__$1 = this;
return self__.meta25163;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25162.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25163","meta25163",-1264184818,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25162";

cljs.core.async.t_cljs$core$async25162.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async25162");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25162 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25162(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25163){
return (new cljs.core.async.t_cljs$core$async25162(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25163));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25162(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23612__auto___25325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___25325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___25325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25262){
var state_val_25263 = (state_25262[(1)]);
if((state_val_25263 === (7))){
var inst_25180 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25264_25326 = state_25262__$1;
(statearr_25264_25326[(2)] = inst_25180);

(statearr_25264_25326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (20))){
var inst_25192 = (state_25262[(7)]);
var state_25262__$1 = state_25262;
var statearr_25265_25327 = state_25262__$1;
(statearr_25265_25327[(2)] = inst_25192);

(statearr_25265_25327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (27))){
var state_25262__$1 = state_25262;
var statearr_25266_25328 = state_25262__$1;
(statearr_25266_25328[(2)] = null);

(statearr_25266_25328[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (1))){
var inst_25168 = (state_25262[(8)]);
var inst_25168__$1 = calc_state.call(null);
var inst_25170 = (inst_25168__$1 == null);
var inst_25171 = cljs.core.not.call(null,inst_25170);
var state_25262__$1 = (function (){var statearr_25267 = state_25262;
(statearr_25267[(8)] = inst_25168__$1);

return statearr_25267;
})();
if(inst_25171){
var statearr_25268_25329 = state_25262__$1;
(statearr_25268_25329[(1)] = (2));

} else {
var statearr_25269_25330 = state_25262__$1;
(statearr_25269_25330[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (24))){
var inst_25236 = (state_25262[(9)]);
var inst_25215 = (state_25262[(10)]);
var inst_25222 = (state_25262[(11)]);
var inst_25236__$1 = inst_25215.call(null,inst_25222);
var state_25262__$1 = (function (){var statearr_25270 = state_25262;
(statearr_25270[(9)] = inst_25236__$1);

return statearr_25270;
})();
if(cljs.core.truth_(inst_25236__$1)){
var statearr_25271_25331 = state_25262__$1;
(statearr_25271_25331[(1)] = (29));

} else {
var statearr_25272_25332 = state_25262__$1;
(statearr_25272_25332[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (4))){
var inst_25183 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
if(cljs.core.truth_(inst_25183)){
var statearr_25273_25333 = state_25262__$1;
(statearr_25273_25333[(1)] = (8));

} else {
var statearr_25274_25334 = state_25262__$1;
(statearr_25274_25334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (15))){
var inst_25209 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
if(cljs.core.truth_(inst_25209)){
var statearr_25275_25335 = state_25262__$1;
(statearr_25275_25335[(1)] = (19));

} else {
var statearr_25276_25336 = state_25262__$1;
(statearr_25276_25336[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (21))){
var inst_25214 = (state_25262[(12)]);
var inst_25214__$1 = (state_25262[(2)]);
var inst_25215 = cljs.core.get.call(null,inst_25214__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25216 = cljs.core.get.call(null,inst_25214__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25217 = cljs.core.get.call(null,inst_25214__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25262__$1 = (function (){var statearr_25277 = state_25262;
(statearr_25277[(13)] = inst_25216);

(statearr_25277[(12)] = inst_25214__$1);

(statearr_25277[(10)] = inst_25215);

return statearr_25277;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25262__$1,(22),inst_25217);
} else {
if((state_val_25263 === (31))){
var inst_25244 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
if(cljs.core.truth_(inst_25244)){
var statearr_25278_25337 = state_25262__$1;
(statearr_25278_25337[(1)] = (32));

} else {
var statearr_25279_25338 = state_25262__$1;
(statearr_25279_25338[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (32))){
var inst_25221 = (state_25262[(14)]);
var state_25262__$1 = state_25262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25262__$1,(35),out,inst_25221);
} else {
if((state_val_25263 === (33))){
var inst_25214 = (state_25262[(12)]);
var inst_25192 = inst_25214;
var state_25262__$1 = (function (){var statearr_25280 = state_25262;
(statearr_25280[(7)] = inst_25192);

return statearr_25280;
})();
var statearr_25281_25339 = state_25262__$1;
(statearr_25281_25339[(2)] = null);

(statearr_25281_25339[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (13))){
var inst_25192 = (state_25262[(7)]);
var inst_25199 = inst_25192.cljs$lang$protocol_mask$partition0$;
var inst_25200 = (inst_25199 & (64));
var inst_25201 = inst_25192.cljs$core$ISeq$;
var inst_25202 = (inst_25200) || (inst_25201);
var state_25262__$1 = state_25262;
if(cljs.core.truth_(inst_25202)){
var statearr_25282_25340 = state_25262__$1;
(statearr_25282_25340[(1)] = (16));

} else {
var statearr_25283_25341 = state_25262__$1;
(statearr_25283_25341[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (22))){
var inst_25221 = (state_25262[(14)]);
var inst_25222 = (state_25262[(11)]);
var inst_25220 = (state_25262[(2)]);
var inst_25221__$1 = cljs.core.nth.call(null,inst_25220,(0),null);
var inst_25222__$1 = cljs.core.nth.call(null,inst_25220,(1),null);
var inst_25223 = (inst_25221__$1 == null);
var inst_25224 = cljs.core._EQ_.call(null,inst_25222__$1,change);
var inst_25225 = (inst_25223) || (inst_25224);
var state_25262__$1 = (function (){var statearr_25284 = state_25262;
(statearr_25284[(14)] = inst_25221__$1);

(statearr_25284[(11)] = inst_25222__$1);

return statearr_25284;
})();
if(cljs.core.truth_(inst_25225)){
var statearr_25285_25342 = state_25262__$1;
(statearr_25285_25342[(1)] = (23));

} else {
var statearr_25286_25343 = state_25262__$1;
(statearr_25286_25343[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (36))){
var inst_25214 = (state_25262[(12)]);
var inst_25192 = inst_25214;
var state_25262__$1 = (function (){var statearr_25287 = state_25262;
(statearr_25287[(7)] = inst_25192);

return statearr_25287;
})();
var statearr_25288_25344 = state_25262__$1;
(statearr_25288_25344[(2)] = null);

(statearr_25288_25344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (29))){
var inst_25236 = (state_25262[(9)]);
var state_25262__$1 = state_25262;
var statearr_25289_25345 = state_25262__$1;
(statearr_25289_25345[(2)] = inst_25236);

(statearr_25289_25345[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (6))){
var state_25262__$1 = state_25262;
var statearr_25290_25346 = state_25262__$1;
(statearr_25290_25346[(2)] = false);

(statearr_25290_25346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (28))){
var inst_25232 = (state_25262[(2)]);
var inst_25233 = calc_state.call(null);
var inst_25192 = inst_25233;
var state_25262__$1 = (function (){var statearr_25291 = state_25262;
(statearr_25291[(7)] = inst_25192);

(statearr_25291[(15)] = inst_25232);

return statearr_25291;
})();
var statearr_25292_25347 = state_25262__$1;
(statearr_25292_25347[(2)] = null);

(statearr_25292_25347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (25))){
var inst_25258 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25293_25348 = state_25262__$1;
(statearr_25293_25348[(2)] = inst_25258);

(statearr_25293_25348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (34))){
var inst_25256 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25294_25349 = state_25262__$1;
(statearr_25294_25349[(2)] = inst_25256);

(statearr_25294_25349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (17))){
var state_25262__$1 = state_25262;
var statearr_25295_25350 = state_25262__$1;
(statearr_25295_25350[(2)] = false);

(statearr_25295_25350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (3))){
var state_25262__$1 = state_25262;
var statearr_25296_25351 = state_25262__$1;
(statearr_25296_25351[(2)] = false);

(statearr_25296_25351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (12))){
var inst_25260 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25262__$1,inst_25260);
} else {
if((state_val_25263 === (2))){
var inst_25168 = (state_25262[(8)]);
var inst_25173 = inst_25168.cljs$lang$protocol_mask$partition0$;
var inst_25174 = (inst_25173 & (64));
var inst_25175 = inst_25168.cljs$core$ISeq$;
var inst_25176 = (inst_25174) || (inst_25175);
var state_25262__$1 = state_25262;
if(cljs.core.truth_(inst_25176)){
var statearr_25297_25352 = state_25262__$1;
(statearr_25297_25352[(1)] = (5));

} else {
var statearr_25298_25353 = state_25262__$1;
(statearr_25298_25353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (23))){
var inst_25221 = (state_25262[(14)]);
var inst_25227 = (inst_25221 == null);
var state_25262__$1 = state_25262;
if(cljs.core.truth_(inst_25227)){
var statearr_25299_25354 = state_25262__$1;
(statearr_25299_25354[(1)] = (26));

} else {
var statearr_25300_25355 = state_25262__$1;
(statearr_25300_25355[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (35))){
var inst_25247 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
if(cljs.core.truth_(inst_25247)){
var statearr_25301_25356 = state_25262__$1;
(statearr_25301_25356[(1)] = (36));

} else {
var statearr_25302_25357 = state_25262__$1;
(statearr_25302_25357[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (19))){
var inst_25192 = (state_25262[(7)]);
var inst_25211 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25192);
var state_25262__$1 = state_25262;
var statearr_25303_25358 = state_25262__$1;
(statearr_25303_25358[(2)] = inst_25211);

(statearr_25303_25358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (11))){
var inst_25192 = (state_25262[(7)]);
var inst_25196 = (inst_25192 == null);
var inst_25197 = cljs.core.not.call(null,inst_25196);
var state_25262__$1 = state_25262;
if(inst_25197){
var statearr_25304_25359 = state_25262__$1;
(statearr_25304_25359[(1)] = (13));

} else {
var statearr_25305_25360 = state_25262__$1;
(statearr_25305_25360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (9))){
var inst_25168 = (state_25262[(8)]);
var state_25262__$1 = state_25262;
var statearr_25306_25361 = state_25262__$1;
(statearr_25306_25361[(2)] = inst_25168);

(statearr_25306_25361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (5))){
var state_25262__$1 = state_25262;
var statearr_25307_25362 = state_25262__$1;
(statearr_25307_25362[(2)] = true);

(statearr_25307_25362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (14))){
var state_25262__$1 = state_25262;
var statearr_25308_25363 = state_25262__$1;
(statearr_25308_25363[(2)] = false);

(statearr_25308_25363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (26))){
var inst_25222 = (state_25262[(11)]);
var inst_25229 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25222);
var state_25262__$1 = state_25262;
var statearr_25309_25364 = state_25262__$1;
(statearr_25309_25364[(2)] = inst_25229);

(statearr_25309_25364[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (16))){
var state_25262__$1 = state_25262;
var statearr_25310_25365 = state_25262__$1;
(statearr_25310_25365[(2)] = true);

(statearr_25310_25365[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (38))){
var inst_25252 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25311_25366 = state_25262__$1;
(statearr_25311_25366[(2)] = inst_25252);

(statearr_25311_25366[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (30))){
var inst_25216 = (state_25262[(13)]);
var inst_25215 = (state_25262[(10)]);
var inst_25222 = (state_25262[(11)]);
var inst_25239 = cljs.core.empty_QMARK_.call(null,inst_25215);
var inst_25240 = inst_25216.call(null,inst_25222);
var inst_25241 = cljs.core.not.call(null,inst_25240);
var inst_25242 = (inst_25239) && (inst_25241);
var state_25262__$1 = state_25262;
var statearr_25312_25367 = state_25262__$1;
(statearr_25312_25367[(2)] = inst_25242);

(statearr_25312_25367[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (10))){
var inst_25168 = (state_25262[(8)]);
var inst_25188 = (state_25262[(2)]);
var inst_25189 = cljs.core.get.call(null,inst_25188,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25190 = cljs.core.get.call(null,inst_25188,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25191 = cljs.core.get.call(null,inst_25188,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25192 = inst_25168;
var state_25262__$1 = (function (){var statearr_25313 = state_25262;
(statearr_25313[(16)] = inst_25190);

(statearr_25313[(7)] = inst_25192);

(statearr_25313[(17)] = inst_25189);

(statearr_25313[(18)] = inst_25191);

return statearr_25313;
})();
var statearr_25314_25368 = state_25262__$1;
(statearr_25314_25368[(2)] = null);

(statearr_25314_25368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (18))){
var inst_25206 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25315_25369 = state_25262__$1;
(statearr_25315_25369[(2)] = inst_25206);

(statearr_25315_25369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (37))){
var state_25262__$1 = state_25262;
var statearr_25316_25370 = state_25262__$1;
(statearr_25316_25370[(2)] = null);

(statearr_25316_25370[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (8))){
var inst_25168 = (state_25262[(8)]);
var inst_25185 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25168);
var state_25262__$1 = state_25262;
var statearr_25317_25371 = state_25262__$1;
(statearr_25317_25371[(2)] = inst_25185);

(statearr_25317_25371[(1)] = (10));


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
});})(c__23612__auto___25325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23500__auto__,c__23612__auto___25325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23501__auto__ = null;
var cljs$core$async$mix_$_state_machine__23501__auto____0 = (function (){
var statearr_25321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25321[(0)] = cljs$core$async$mix_$_state_machine__23501__auto__);

(statearr_25321[(1)] = (1));

return statearr_25321;
});
var cljs$core$async$mix_$_state_machine__23501__auto____1 = (function (state_25262){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_25262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e25322){if((e25322 instanceof Object)){
var ex__23504__auto__ = e25322;
var statearr_25323_25372 = state_25262;
(statearr_25323_25372[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25373 = state_25262;
state_25262 = G__25373;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23501__auto__ = function(state_25262){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23501__auto____1.call(this,state_25262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23501__auto____0;
cljs$core$async$mix_$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23501__auto____1;
return cljs$core$async$mix_$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___25325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23614__auto__ = (function (){var statearr_25324 = f__23613__auto__.call(null);
(statearr_25324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___25325);

return statearr_25324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___25325,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25374 = [];
var len__17829__auto___25377 = arguments.length;
var i__17830__auto___25378 = (0);
while(true){
if((i__17830__auto___25378 < len__17829__auto___25377)){
args25374.push((arguments[i__17830__auto___25378]));

var G__25379 = (i__17830__auto___25378 + (1));
i__17830__auto___25378 = G__25379;
continue;
} else {
}
break;
}

var G__25376 = args25374.length;
switch (G__25376) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25374.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args25382 = [];
var len__17829__auto___25507 = arguments.length;
var i__17830__auto___25508 = (0);
while(true){
if((i__17830__auto___25508 < len__17829__auto___25507)){
args25382.push((arguments[i__17830__auto___25508]));

var G__25509 = (i__17830__auto___25508 + (1));
i__17830__auto___25508 = G__25509;
continue;
} else {
}
break;
}

var G__25384 = args25382.length;
switch (G__25384) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25382.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16771__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16771__auto__,mults){
return (function (p1__25381_SHARP_){
if(cljs.core.truth_(p1__25381_SHARP_.call(null,topic))){
return p1__25381_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25381_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25385 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25386){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25386 = meta25386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25387,meta25386__$1){
var self__ = this;
var _25387__$1 = this;
return (new cljs.core.async.t_cljs$core$async25385(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25386__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25387){
var self__ = this;
var _25387__$1 = this;
return self__.meta25386;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25385.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25385.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25386","meta25386",1025092462,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25385";

cljs.core.async.t_cljs$core$async25385.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async25385");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25385 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25385(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25386){
return (new cljs.core.async.t_cljs$core$async25385(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25386));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25385(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23612__auto___25511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___25511,mults,ensure_mult,p){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___25511,mults,ensure_mult,p){
return (function (state_25459){
var state_val_25460 = (state_25459[(1)]);
if((state_val_25460 === (7))){
var inst_25455 = (state_25459[(2)]);
var state_25459__$1 = state_25459;
var statearr_25461_25512 = state_25459__$1;
(statearr_25461_25512[(2)] = inst_25455);

(statearr_25461_25512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (20))){
var state_25459__$1 = state_25459;
var statearr_25462_25513 = state_25459__$1;
(statearr_25462_25513[(2)] = null);

(statearr_25462_25513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (1))){
var state_25459__$1 = state_25459;
var statearr_25463_25514 = state_25459__$1;
(statearr_25463_25514[(2)] = null);

(statearr_25463_25514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (24))){
var inst_25438 = (state_25459[(7)]);
var inst_25447 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25438);
var state_25459__$1 = state_25459;
var statearr_25464_25515 = state_25459__$1;
(statearr_25464_25515[(2)] = inst_25447);

(statearr_25464_25515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (4))){
var inst_25390 = (state_25459[(8)]);
var inst_25390__$1 = (state_25459[(2)]);
var inst_25391 = (inst_25390__$1 == null);
var state_25459__$1 = (function (){var statearr_25465 = state_25459;
(statearr_25465[(8)] = inst_25390__$1);

return statearr_25465;
})();
if(cljs.core.truth_(inst_25391)){
var statearr_25466_25516 = state_25459__$1;
(statearr_25466_25516[(1)] = (5));

} else {
var statearr_25467_25517 = state_25459__$1;
(statearr_25467_25517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (15))){
var inst_25432 = (state_25459[(2)]);
var state_25459__$1 = state_25459;
var statearr_25468_25518 = state_25459__$1;
(statearr_25468_25518[(2)] = inst_25432);

(statearr_25468_25518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (21))){
var inst_25452 = (state_25459[(2)]);
var state_25459__$1 = (function (){var statearr_25469 = state_25459;
(statearr_25469[(9)] = inst_25452);

return statearr_25469;
})();
var statearr_25470_25519 = state_25459__$1;
(statearr_25470_25519[(2)] = null);

(statearr_25470_25519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (13))){
var inst_25414 = (state_25459[(10)]);
var inst_25416 = cljs.core.chunked_seq_QMARK_.call(null,inst_25414);
var state_25459__$1 = state_25459;
if(inst_25416){
var statearr_25471_25520 = state_25459__$1;
(statearr_25471_25520[(1)] = (16));

} else {
var statearr_25472_25521 = state_25459__$1;
(statearr_25472_25521[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (22))){
var inst_25444 = (state_25459[(2)]);
var state_25459__$1 = state_25459;
if(cljs.core.truth_(inst_25444)){
var statearr_25473_25522 = state_25459__$1;
(statearr_25473_25522[(1)] = (23));

} else {
var statearr_25474_25523 = state_25459__$1;
(statearr_25474_25523[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (6))){
var inst_25440 = (state_25459[(11)]);
var inst_25390 = (state_25459[(8)]);
var inst_25438 = (state_25459[(7)]);
var inst_25438__$1 = topic_fn.call(null,inst_25390);
var inst_25439 = cljs.core.deref.call(null,mults);
var inst_25440__$1 = cljs.core.get.call(null,inst_25439,inst_25438__$1);
var state_25459__$1 = (function (){var statearr_25475 = state_25459;
(statearr_25475[(11)] = inst_25440__$1);

(statearr_25475[(7)] = inst_25438__$1);

return statearr_25475;
})();
if(cljs.core.truth_(inst_25440__$1)){
var statearr_25476_25524 = state_25459__$1;
(statearr_25476_25524[(1)] = (19));

} else {
var statearr_25477_25525 = state_25459__$1;
(statearr_25477_25525[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (25))){
var inst_25449 = (state_25459[(2)]);
var state_25459__$1 = state_25459;
var statearr_25478_25526 = state_25459__$1;
(statearr_25478_25526[(2)] = inst_25449);

(statearr_25478_25526[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (17))){
var inst_25414 = (state_25459[(10)]);
var inst_25423 = cljs.core.first.call(null,inst_25414);
var inst_25424 = cljs.core.async.muxch_STAR_.call(null,inst_25423);
var inst_25425 = cljs.core.async.close_BANG_.call(null,inst_25424);
var inst_25426 = cljs.core.next.call(null,inst_25414);
var inst_25400 = inst_25426;
var inst_25401 = null;
var inst_25402 = (0);
var inst_25403 = (0);
var state_25459__$1 = (function (){var statearr_25479 = state_25459;
(statearr_25479[(12)] = inst_25425);

(statearr_25479[(13)] = inst_25402);

(statearr_25479[(14)] = inst_25400);

(statearr_25479[(15)] = inst_25403);

(statearr_25479[(16)] = inst_25401);

return statearr_25479;
})();
var statearr_25480_25527 = state_25459__$1;
(statearr_25480_25527[(2)] = null);

(statearr_25480_25527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (3))){
var inst_25457 = (state_25459[(2)]);
var state_25459__$1 = state_25459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25459__$1,inst_25457);
} else {
if((state_val_25460 === (12))){
var inst_25434 = (state_25459[(2)]);
var state_25459__$1 = state_25459;
var statearr_25481_25528 = state_25459__$1;
(statearr_25481_25528[(2)] = inst_25434);

(statearr_25481_25528[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (2))){
var state_25459__$1 = state_25459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25459__$1,(4),ch);
} else {
if((state_val_25460 === (23))){
var state_25459__$1 = state_25459;
var statearr_25482_25529 = state_25459__$1;
(statearr_25482_25529[(2)] = null);

(statearr_25482_25529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (19))){
var inst_25440 = (state_25459[(11)]);
var inst_25390 = (state_25459[(8)]);
var inst_25442 = cljs.core.async.muxch_STAR_.call(null,inst_25440);
var state_25459__$1 = state_25459;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25459__$1,(22),inst_25442,inst_25390);
} else {
if((state_val_25460 === (11))){
var inst_25400 = (state_25459[(14)]);
var inst_25414 = (state_25459[(10)]);
var inst_25414__$1 = cljs.core.seq.call(null,inst_25400);
var state_25459__$1 = (function (){var statearr_25483 = state_25459;
(statearr_25483[(10)] = inst_25414__$1);

return statearr_25483;
})();
if(inst_25414__$1){
var statearr_25484_25530 = state_25459__$1;
(statearr_25484_25530[(1)] = (13));

} else {
var statearr_25485_25531 = state_25459__$1;
(statearr_25485_25531[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (9))){
var inst_25436 = (state_25459[(2)]);
var state_25459__$1 = state_25459;
var statearr_25486_25532 = state_25459__$1;
(statearr_25486_25532[(2)] = inst_25436);

(statearr_25486_25532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (5))){
var inst_25397 = cljs.core.deref.call(null,mults);
var inst_25398 = cljs.core.vals.call(null,inst_25397);
var inst_25399 = cljs.core.seq.call(null,inst_25398);
var inst_25400 = inst_25399;
var inst_25401 = null;
var inst_25402 = (0);
var inst_25403 = (0);
var state_25459__$1 = (function (){var statearr_25487 = state_25459;
(statearr_25487[(13)] = inst_25402);

(statearr_25487[(14)] = inst_25400);

(statearr_25487[(15)] = inst_25403);

(statearr_25487[(16)] = inst_25401);

return statearr_25487;
})();
var statearr_25488_25533 = state_25459__$1;
(statearr_25488_25533[(2)] = null);

(statearr_25488_25533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (14))){
var state_25459__$1 = state_25459;
var statearr_25492_25534 = state_25459__$1;
(statearr_25492_25534[(2)] = null);

(statearr_25492_25534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (16))){
var inst_25414 = (state_25459[(10)]);
var inst_25418 = cljs.core.chunk_first.call(null,inst_25414);
var inst_25419 = cljs.core.chunk_rest.call(null,inst_25414);
var inst_25420 = cljs.core.count.call(null,inst_25418);
var inst_25400 = inst_25419;
var inst_25401 = inst_25418;
var inst_25402 = inst_25420;
var inst_25403 = (0);
var state_25459__$1 = (function (){var statearr_25493 = state_25459;
(statearr_25493[(13)] = inst_25402);

(statearr_25493[(14)] = inst_25400);

(statearr_25493[(15)] = inst_25403);

(statearr_25493[(16)] = inst_25401);

return statearr_25493;
})();
var statearr_25494_25535 = state_25459__$1;
(statearr_25494_25535[(2)] = null);

(statearr_25494_25535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (10))){
var inst_25402 = (state_25459[(13)]);
var inst_25400 = (state_25459[(14)]);
var inst_25403 = (state_25459[(15)]);
var inst_25401 = (state_25459[(16)]);
var inst_25408 = cljs.core._nth.call(null,inst_25401,inst_25403);
var inst_25409 = cljs.core.async.muxch_STAR_.call(null,inst_25408);
var inst_25410 = cljs.core.async.close_BANG_.call(null,inst_25409);
var inst_25411 = (inst_25403 + (1));
var tmp25489 = inst_25402;
var tmp25490 = inst_25400;
var tmp25491 = inst_25401;
var inst_25400__$1 = tmp25490;
var inst_25401__$1 = tmp25491;
var inst_25402__$1 = tmp25489;
var inst_25403__$1 = inst_25411;
var state_25459__$1 = (function (){var statearr_25495 = state_25459;
(statearr_25495[(13)] = inst_25402__$1);

(statearr_25495[(14)] = inst_25400__$1);

(statearr_25495[(17)] = inst_25410);

(statearr_25495[(15)] = inst_25403__$1);

(statearr_25495[(16)] = inst_25401__$1);

return statearr_25495;
})();
var statearr_25496_25536 = state_25459__$1;
(statearr_25496_25536[(2)] = null);

(statearr_25496_25536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (18))){
var inst_25429 = (state_25459[(2)]);
var state_25459__$1 = state_25459;
var statearr_25497_25537 = state_25459__$1;
(statearr_25497_25537[(2)] = inst_25429);

(statearr_25497_25537[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25460 === (8))){
var inst_25402 = (state_25459[(13)]);
var inst_25403 = (state_25459[(15)]);
var inst_25405 = (inst_25403 < inst_25402);
var inst_25406 = inst_25405;
var state_25459__$1 = state_25459;
if(cljs.core.truth_(inst_25406)){
var statearr_25498_25538 = state_25459__$1;
(statearr_25498_25538[(1)] = (10));

} else {
var statearr_25499_25539 = state_25459__$1;
(statearr_25499_25539[(1)] = (11));

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
});})(c__23612__auto___25511,mults,ensure_mult,p))
;
return ((function (switch__23500__auto__,c__23612__auto___25511,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23501__auto__ = null;
var cljs$core$async$state_machine__23501__auto____0 = (function (){
var statearr_25503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25503[(0)] = cljs$core$async$state_machine__23501__auto__);

(statearr_25503[(1)] = (1));

return statearr_25503;
});
var cljs$core$async$state_machine__23501__auto____1 = (function (state_25459){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_25459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e25504){if((e25504 instanceof Object)){
var ex__23504__auto__ = e25504;
var statearr_25505_25540 = state_25459;
(statearr_25505_25540[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25541 = state_25459;
state_25459 = G__25541;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$state_machine__23501__auto__ = function(state_25459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23501__auto____1.call(this,state_25459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23501__auto____0;
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23501__auto____1;
return cljs$core$async$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___25511,mults,ensure_mult,p))
})();
var state__23614__auto__ = (function (){var statearr_25506 = f__23613__auto__.call(null);
(statearr_25506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___25511);

return statearr_25506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___25511,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args25542 = [];
var len__17829__auto___25545 = arguments.length;
var i__17830__auto___25546 = (0);
while(true){
if((i__17830__auto___25546 < len__17829__auto___25545)){
args25542.push((arguments[i__17830__auto___25546]));

var G__25547 = (i__17830__auto___25546 + (1));
i__17830__auto___25546 = G__25547;
continue;
} else {
}
break;
}

var G__25544 = args25542.length;
switch (G__25544) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25542.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args25549 = [];
var len__17829__auto___25552 = arguments.length;
var i__17830__auto___25553 = (0);
while(true){
if((i__17830__auto___25553 < len__17829__auto___25552)){
args25549.push((arguments[i__17830__auto___25553]));

var G__25554 = (i__17830__auto___25553 + (1));
i__17830__auto___25553 = G__25554;
continue;
} else {
}
break;
}

var G__25551 = args25549.length;
switch (G__25551) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25549.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args25556 = [];
var len__17829__auto___25627 = arguments.length;
var i__17830__auto___25628 = (0);
while(true){
if((i__17830__auto___25628 < len__17829__auto___25627)){
args25556.push((arguments[i__17830__auto___25628]));

var G__25629 = (i__17830__auto___25628 + (1));
i__17830__auto___25628 = G__25629;
continue;
} else {
}
break;
}

var G__25558 = args25556.length;
switch (G__25558) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25556.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23612__auto___25631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___25631,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___25631,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25597){
var state_val_25598 = (state_25597[(1)]);
if((state_val_25598 === (7))){
var state_25597__$1 = state_25597;
var statearr_25599_25632 = state_25597__$1;
(statearr_25599_25632[(2)] = null);

(statearr_25599_25632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (1))){
var state_25597__$1 = state_25597;
var statearr_25600_25633 = state_25597__$1;
(statearr_25600_25633[(2)] = null);

(statearr_25600_25633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (4))){
var inst_25561 = (state_25597[(7)]);
var inst_25563 = (inst_25561 < cnt);
var state_25597__$1 = state_25597;
if(cljs.core.truth_(inst_25563)){
var statearr_25601_25634 = state_25597__$1;
(statearr_25601_25634[(1)] = (6));

} else {
var statearr_25602_25635 = state_25597__$1;
(statearr_25602_25635[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (15))){
var inst_25593 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
var statearr_25603_25636 = state_25597__$1;
(statearr_25603_25636[(2)] = inst_25593);

(statearr_25603_25636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (13))){
var inst_25586 = cljs.core.async.close_BANG_.call(null,out);
var state_25597__$1 = state_25597;
var statearr_25604_25637 = state_25597__$1;
(statearr_25604_25637[(2)] = inst_25586);

(statearr_25604_25637[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (6))){
var state_25597__$1 = state_25597;
var statearr_25605_25638 = state_25597__$1;
(statearr_25605_25638[(2)] = null);

(statearr_25605_25638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (3))){
var inst_25595 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25597__$1,inst_25595);
} else {
if((state_val_25598 === (12))){
var inst_25583 = (state_25597[(8)]);
var inst_25583__$1 = (state_25597[(2)]);
var inst_25584 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25583__$1);
var state_25597__$1 = (function (){var statearr_25606 = state_25597;
(statearr_25606[(8)] = inst_25583__$1);

return statearr_25606;
})();
if(cljs.core.truth_(inst_25584)){
var statearr_25607_25639 = state_25597__$1;
(statearr_25607_25639[(1)] = (13));

} else {
var statearr_25608_25640 = state_25597__$1;
(statearr_25608_25640[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (2))){
var inst_25560 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25561 = (0);
var state_25597__$1 = (function (){var statearr_25609 = state_25597;
(statearr_25609[(7)] = inst_25561);

(statearr_25609[(9)] = inst_25560);

return statearr_25609;
})();
var statearr_25610_25641 = state_25597__$1;
(statearr_25610_25641[(2)] = null);

(statearr_25610_25641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (11))){
var inst_25561 = (state_25597[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25597,(10),Object,null,(9));
var inst_25570 = chs__$1.call(null,inst_25561);
var inst_25571 = done.call(null,inst_25561);
var inst_25572 = cljs.core.async.take_BANG_.call(null,inst_25570,inst_25571);
var state_25597__$1 = state_25597;
var statearr_25611_25642 = state_25597__$1;
(statearr_25611_25642[(2)] = inst_25572);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25597__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (9))){
var inst_25561 = (state_25597[(7)]);
var inst_25574 = (state_25597[(2)]);
var inst_25575 = (inst_25561 + (1));
var inst_25561__$1 = inst_25575;
var state_25597__$1 = (function (){var statearr_25612 = state_25597;
(statearr_25612[(10)] = inst_25574);

(statearr_25612[(7)] = inst_25561__$1);

return statearr_25612;
})();
var statearr_25613_25643 = state_25597__$1;
(statearr_25613_25643[(2)] = null);

(statearr_25613_25643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (5))){
var inst_25581 = (state_25597[(2)]);
var state_25597__$1 = (function (){var statearr_25614 = state_25597;
(statearr_25614[(11)] = inst_25581);

return statearr_25614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25597__$1,(12),dchan);
} else {
if((state_val_25598 === (14))){
var inst_25583 = (state_25597[(8)]);
var inst_25588 = cljs.core.apply.call(null,f,inst_25583);
var state_25597__$1 = state_25597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25597__$1,(16),out,inst_25588);
} else {
if((state_val_25598 === (16))){
var inst_25590 = (state_25597[(2)]);
var state_25597__$1 = (function (){var statearr_25615 = state_25597;
(statearr_25615[(12)] = inst_25590);

return statearr_25615;
})();
var statearr_25616_25644 = state_25597__$1;
(statearr_25616_25644[(2)] = null);

(statearr_25616_25644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (10))){
var inst_25565 = (state_25597[(2)]);
var inst_25566 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25597__$1 = (function (){var statearr_25617 = state_25597;
(statearr_25617[(13)] = inst_25565);

return statearr_25617;
})();
var statearr_25618_25645 = state_25597__$1;
(statearr_25618_25645[(2)] = inst_25566);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25597__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25598 === (8))){
var inst_25579 = (state_25597[(2)]);
var state_25597__$1 = state_25597;
var statearr_25619_25646 = state_25597__$1;
(statearr_25619_25646[(2)] = inst_25579);

(statearr_25619_25646[(1)] = (5));


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
});})(c__23612__auto___25631,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23500__auto__,c__23612__auto___25631,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23501__auto__ = null;
var cljs$core$async$state_machine__23501__auto____0 = (function (){
var statearr_25623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25623[(0)] = cljs$core$async$state_machine__23501__auto__);

(statearr_25623[(1)] = (1));

return statearr_25623;
});
var cljs$core$async$state_machine__23501__auto____1 = (function (state_25597){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_25597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e25624){if((e25624 instanceof Object)){
var ex__23504__auto__ = e25624;
var statearr_25625_25647 = state_25597;
(statearr_25625_25647[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25648 = state_25597;
state_25597 = G__25648;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$state_machine__23501__auto__ = function(state_25597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23501__auto____1.call(this,state_25597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23501__auto____0;
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23501__auto____1;
return cljs$core$async$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___25631,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23614__auto__ = (function (){var statearr_25626 = f__23613__auto__.call(null);
(statearr_25626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___25631);

return statearr_25626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___25631,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args25650 = [];
var len__17829__auto___25706 = arguments.length;
var i__17830__auto___25707 = (0);
while(true){
if((i__17830__auto___25707 < len__17829__auto___25706)){
args25650.push((arguments[i__17830__auto___25707]));

var G__25708 = (i__17830__auto___25707 + (1));
i__17830__auto___25707 = G__25708;
continue;
} else {
}
break;
}

var G__25652 = args25650.length;
switch (G__25652) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25650.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23612__auto___25710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___25710,out){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___25710,out){
return (function (state_25682){
var state_val_25683 = (state_25682[(1)]);
if((state_val_25683 === (7))){
var inst_25662 = (state_25682[(7)]);
var inst_25661 = (state_25682[(8)]);
var inst_25661__$1 = (state_25682[(2)]);
var inst_25662__$1 = cljs.core.nth.call(null,inst_25661__$1,(0),null);
var inst_25663 = cljs.core.nth.call(null,inst_25661__$1,(1),null);
var inst_25664 = (inst_25662__$1 == null);
var state_25682__$1 = (function (){var statearr_25684 = state_25682;
(statearr_25684[(7)] = inst_25662__$1);

(statearr_25684[(9)] = inst_25663);

(statearr_25684[(8)] = inst_25661__$1);

return statearr_25684;
})();
if(cljs.core.truth_(inst_25664)){
var statearr_25685_25711 = state_25682__$1;
(statearr_25685_25711[(1)] = (8));

} else {
var statearr_25686_25712 = state_25682__$1;
(statearr_25686_25712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (1))){
var inst_25653 = cljs.core.vec.call(null,chs);
var inst_25654 = inst_25653;
var state_25682__$1 = (function (){var statearr_25687 = state_25682;
(statearr_25687[(10)] = inst_25654);

return statearr_25687;
})();
var statearr_25688_25713 = state_25682__$1;
(statearr_25688_25713[(2)] = null);

(statearr_25688_25713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (4))){
var inst_25654 = (state_25682[(10)]);
var state_25682__$1 = state_25682;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25682__$1,(7),inst_25654);
} else {
if((state_val_25683 === (6))){
var inst_25678 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
var statearr_25689_25714 = state_25682__$1;
(statearr_25689_25714[(2)] = inst_25678);

(statearr_25689_25714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (3))){
var inst_25680 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25682__$1,inst_25680);
} else {
if((state_val_25683 === (2))){
var inst_25654 = (state_25682[(10)]);
var inst_25656 = cljs.core.count.call(null,inst_25654);
var inst_25657 = (inst_25656 > (0));
var state_25682__$1 = state_25682;
if(cljs.core.truth_(inst_25657)){
var statearr_25691_25715 = state_25682__$1;
(statearr_25691_25715[(1)] = (4));

} else {
var statearr_25692_25716 = state_25682__$1;
(statearr_25692_25716[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (11))){
var inst_25654 = (state_25682[(10)]);
var inst_25671 = (state_25682[(2)]);
var tmp25690 = inst_25654;
var inst_25654__$1 = tmp25690;
var state_25682__$1 = (function (){var statearr_25693 = state_25682;
(statearr_25693[(10)] = inst_25654__$1);

(statearr_25693[(11)] = inst_25671);

return statearr_25693;
})();
var statearr_25694_25717 = state_25682__$1;
(statearr_25694_25717[(2)] = null);

(statearr_25694_25717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (9))){
var inst_25662 = (state_25682[(7)]);
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25682__$1,(11),out,inst_25662);
} else {
if((state_val_25683 === (5))){
var inst_25676 = cljs.core.async.close_BANG_.call(null,out);
var state_25682__$1 = state_25682;
var statearr_25695_25718 = state_25682__$1;
(statearr_25695_25718[(2)] = inst_25676);

(statearr_25695_25718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (10))){
var inst_25674 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
var statearr_25696_25719 = state_25682__$1;
(statearr_25696_25719[(2)] = inst_25674);

(statearr_25696_25719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (8))){
var inst_25662 = (state_25682[(7)]);
var inst_25663 = (state_25682[(9)]);
var inst_25661 = (state_25682[(8)]);
var inst_25654 = (state_25682[(10)]);
var inst_25666 = (function (){var cs = inst_25654;
var vec__25659 = inst_25661;
var v = inst_25662;
var c = inst_25663;
return ((function (cs,vec__25659,v,c,inst_25662,inst_25663,inst_25661,inst_25654,state_val_25683,c__23612__auto___25710,out){
return (function (p1__25649_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25649_SHARP_);
});
;})(cs,vec__25659,v,c,inst_25662,inst_25663,inst_25661,inst_25654,state_val_25683,c__23612__auto___25710,out))
})();
var inst_25667 = cljs.core.filterv.call(null,inst_25666,inst_25654);
var inst_25654__$1 = inst_25667;
var state_25682__$1 = (function (){var statearr_25697 = state_25682;
(statearr_25697[(10)] = inst_25654__$1);

return statearr_25697;
})();
var statearr_25698_25720 = state_25682__$1;
(statearr_25698_25720[(2)] = null);

(statearr_25698_25720[(1)] = (2));


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
});})(c__23612__auto___25710,out))
;
return ((function (switch__23500__auto__,c__23612__auto___25710,out){
return (function() {
var cljs$core$async$state_machine__23501__auto__ = null;
var cljs$core$async$state_machine__23501__auto____0 = (function (){
var statearr_25702 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25702[(0)] = cljs$core$async$state_machine__23501__auto__);

(statearr_25702[(1)] = (1));

return statearr_25702;
});
var cljs$core$async$state_machine__23501__auto____1 = (function (state_25682){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_25682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e25703){if((e25703 instanceof Object)){
var ex__23504__auto__ = e25703;
var statearr_25704_25721 = state_25682;
(statearr_25704_25721[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25722 = state_25682;
state_25682 = G__25722;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$state_machine__23501__auto__ = function(state_25682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23501__auto____1.call(this,state_25682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23501__auto____0;
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23501__auto____1;
return cljs$core$async$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___25710,out))
})();
var state__23614__auto__ = (function (){var statearr_25705 = f__23613__auto__.call(null);
(statearr_25705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___25710);

return statearr_25705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___25710,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25723 = [];
var len__17829__auto___25772 = arguments.length;
var i__17830__auto___25773 = (0);
while(true){
if((i__17830__auto___25773 < len__17829__auto___25772)){
args25723.push((arguments[i__17830__auto___25773]));

var G__25774 = (i__17830__auto___25773 + (1));
i__17830__auto___25773 = G__25774;
continue;
} else {
}
break;
}

var G__25725 = args25723.length;
switch (G__25725) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25723.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23612__auto___25776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___25776,out){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___25776,out){
return (function (state_25749){
var state_val_25750 = (state_25749[(1)]);
if((state_val_25750 === (7))){
var inst_25731 = (state_25749[(7)]);
var inst_25731__$1 = (state_25749[(2)]);
var inst_25732 = (inst_25731__$1 == null);
var inst_25733 = cljs.core.not.call(null,inst_25732);
var state_25749__$1 = (function (){var statearr_25751 = state_25749;
(statearr_25751[(7)] = inst_25731__$1);

return statearr_25751;
})();
if(inst_25733){
var statearr_25752_25777 = state_25749__$1;
(statearr_25752_25777[(1)] = (8));

} else {
var statearr_25753_25778 = state_25749__$1;
(statearr_25753_25778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (1))){
var inst_25726 = (0);
var state_25749__$1 = (function (){var statearr_25754 = state_25749;
(statearr_25754[(8)] = inst_25726);

return statearr_25754;
})();
var statearr_25755_25779 = state_25749__$1;
(statearr_25755_25779[(2)] = null);

(statearr_25755_25779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (4))){
var state_25749__$1 = state_25749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25749__$1,(7),ch);
} else {
if((state_val_25750 === (6))){
var inst_25744 = (state_25749[(2)]);
var state_25749__$1 = state_25749;
var statearr_25756_25780 = state_25749__$1;
(statearr_25756_25780[(2)] = inst_25744);

(statearr_25756_25780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (3))){
var inst_25746 = (state_25749[(2)]);
var inst_25747 = cljs.core.async.close_BANG_.call(null,out);
var state_25749__$1 = (function (){var statearr_25757 = state_25749;
(statearr_25757[(9)] = inst_25746);

return statearr_25757;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25749__$1,inst_25747);
} else {
if((state_val_25750 === (2))){
var inst_25726 = (state_25749[(8)]);
var inst_25728 = (inst_25726 < n);
var state_25749__$1 = state_25749;
if(cljs.core.truth_(inst_25728)){
var statearr_25758_25781 = state_25749__$1;
(statearr_25758_25781[(1)] = (4));

} else {
var statearr_25759_25782 = state_25749__$1;
(statearr_25759_25782[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (11))){
var inst_25726 = (state_25749[(8)]);
var inst_25736 = (state_25749[(2)]);
var inst_25737 = (inst_25726 + (1));
var inst_25726__$1 = inst_25737;
var state_25749__$1 = (function (){var statearr_25760 = state_25749;
(statearr_25760[(10)] = inst_25736);

(statearr_25760[(8)] = inst_25726__$1);

return statearr_25760;
})();
var statearr_25761_25783 = state_25749__$1;
(statearr_25761_25783[(2)] = null);

(statearr_25761_25783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (9))){
var state_25749__$1 = state_25749;
var statearr_25762_25784 = state_25749__$1;
(statearr_25762_25784[(2)] = null);

(statearr_25762_25784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (5))){
var state_25749__$1 = state_25749;
var statearr_25763_25785 = state_25749__$1;
(statearr_25763_25785[(2)] = null);

(statearr_25763_25785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (10))){
var inst_25741 = (state_25749[(2)]);
var state_25749__$1 = state_25749;
var statearr_25764_25786 = state_25749__$1;
(statearr_25764_25786[(2)] = inst_25741);

(statearr_25764_25786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25750 === (8))){
var inst_25731 = (state_25749[(7)]);
var state_25749__$1 = state_25749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25749__$1,(11),out,inst_25731);
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
});})(c__23612__auto___25776,out))
;
return ((function (switch__23500__auto__,c__23612__auto___25776,out){
return (function() {
var cljs$core$async$state_machine__23501__auto__ = null;
var cljs$core$async$state_machine__23501__auto____0 = (function (){
var statearr_25768 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25768[(0)] = cljs$core$async$state_machine__23501__auto__);

(statearr_25768[(1)] = (1));

return statearr_25768;
});
var cljs$core$async$state_machine__23501__auto____1 = (function (state_25749){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_25749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e25769){if((e25769 instanceof Object)){
var ex__23504__auto__ = e25769;
var statearr_25770_25787 = state_25749;
(statearr_25770_25787[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25788 = state_25749;
state_25749 = G__25788;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$state_machine__23501__auto__ = function(state_25749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23501__auto____1.call(this,state_25749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23501__auto____0;
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23501__auto____1;
return cljs$core$async$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___25776,out))
})();
var state__23614__auto__ = (function (){var statearr_25771 = f__23613__auto__.call(null);
(statearr_25771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___25776);

return statearr_25771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___25776,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25796 = (function (map_LT_,f,ch,meta25797){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25797 = meta25797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25798,meta25797__$1){
var self__ = this;
var _25798__$1 = this;
return (new cljs.core.async.t_cljs$core$async25796(self__.map_LT_,self__.f,self__.ch,meta25797__$1));
});

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25798){
var self__ = this;
var _25798__$1 = this;
return self__.meta25797;
});

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25799 = (function (map_LT_,f,ch,meta25797,_,fn1,meta25800){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25797 = meta25797;
this._ = _;
this.fn1 = fn1;
this.meta25800 = meta25800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25801,meta25800__$1){
var self__ = this;
var _25801__$1 = this;
return (new cljs.core.async.t_cljs$core$async25799(self__.map_LT_,self__.f,self__.ch,self__.meta25797,self__._,self__.fn1,meta25800__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25799.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25801){
var self__ = this;
var _25801__$1 = this;
return self__.meta25800;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25799.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25789_SHARP_){
return f1.call(null,(((p1__25789_SHARP_ == null))?null:self__.f.call(null,p1__25789_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25799.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25797","meta25797",-1758247446,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25796","cljs.core.async/t_cljs$core$async25796",1901897267,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25800","meta25800",2055788915,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25799";

cljs.core.async.t_cljs$core$async25799.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async25799");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25799 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25799(map_LT___$1,f__$1,ch__$1,meta25797__$1,___$2,fn1__$1,meta25800){
return (new cljs.core.async.t_cljs$core$async25799(map_LT___$1,f__$1,ch__$1,meta25797__$1,___$2,fn1__$1,meta25800));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25799(self__.map_LT_,self__.f,self__.ch,self__.meta25797,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16759__auto__ = ret;
if(cljs.core.truth_(and__16759__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16759__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25797","meta25797",-1758247446,null)], null);
});

cljs.core.async.t_cljs$core$async25796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25796";

cljs.core.async.t_cljs$core$async25796.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async25796");
});

cljs.core.async.__GT_t_cljs$core$async25796 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25796(map_LT___$1,f__$1,ch__$1,meta25797){
return (new cljs.core.async.t_cljs$core$async25796(map_LT___$1,f__$1,ch__$1,meta25797));
});

}

return (new cljs.core.async.t_cljs$core$async25796(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25805 = (function (map_GT_,f,ch,meta25806){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25806 = meta25806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25807,meta25806__$1){
var self__ = this;
var _25807__$1 = this;
return (new cljs.core.async.t_cljs$core$async25805(self__.map_GT_,self__.f,self__.ch,meta25806__$1));
});

cljs.core.async.t_cljs$core$async25805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25807){
var self__ = this;
var _25807__$1 = this;
return self__.meta25806;
});

cljs.core.async.t_cljs$core$async25805.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25805.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25805.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25805.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25805.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25805.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25806","meta25806",254417222,null)], null);
});

cljs.core.async.t_cljs$core$async25805.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25805.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25805";

cljs.core.async.t_cljs$core$async25805.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async25805");
});

cljs.core.async.__GT_t_cljs$core$async25805 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25805(map_GT___$1,f__$1,ch__$1,meta25806){
return (new cljs.core.async.t_cljs$core$async25805(map_GT___$1,f__$1,ch__$1,meta25806));
});

}

return (new cljs.core.async.t_cljs$core$async25805(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25811 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25811 = (function (filter_GT_,p,ch,meta25812){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25812 = meta25812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25813,meta25812__$1){
var self__ = this;
var _25813__$1 = this;
return (new cljs.core.async.t_cljs$core$async25811(self__.filter_GT_,self__.p,self__.ch,meta25812__$1));
});

cljs.core.async.t_cljs$core$async25811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25813){
var self__ = this;
var _25813__$1 = this;
return self__.meta25812;
});

cljs.core.async.t_cljs$core$async25811.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25811.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25811.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25811.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25811.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25811.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25811.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25812","meta25812",1490700369,null)], null);
});

cljs.core.async.t_cljs$core$async25811.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25811";

cljs.core.async.t_cljs$core$async25811.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async25811");
});

cljs.core.async.__GT_t_cljs$core$async25811 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25811(filter_GT___$1,p__$1,ch__$1,meta25812){
return (new cljs.core.async.t_cljs$core$async25811(filter_GT___$1,p__$1,ch__$1,meta25812));
});

}

return (new cljs.core.async.t_cljs$core$async25811(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25814 = [];
var len__17829__auto___25858 = arguments.length;
var i__17830__auto___25859 = (0);
while(true){
if((i__17830__auto___25859 < len__17829__auto___25858)){
args25814.push((arguments[i__17830__auto___25859]));

var G__25860 = (i__17830__auto___25859 + (1));
i__17830__auto___25859 = G__25860;
continue;
} else {
}
break;
}

var G__25816 = args25814.length;
switch (G__25816) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25814.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23612__auto___25862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___25862,out){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___25862,out){
return (function (state_25837){
var state_val_25838 = (state_25837[(1)]);
if((state_val_25838 === (7))){
var inst_25833 = (state_25837[(2)]);
var state_25837__$1 = state_25837;
var statearr_25839_25863 = state_25837__$1;
(statearr_25839_25863[(2)] = inst_25833);

(statearr_25839_25863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25838 === (1))){
var state_25837__$1 = state_25837;
var statearr_25840_25864 = state_25837__$1;
(statearr_25840_25864[(2)] = null);

(statearr_25840_25864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25838 === (4))){
var inst_25819 = (state_25837[(7)]);
var inst_25819__$1 = (state_25837[(2)]);
var inst_25820 = (inst_25819__$1 == null);
var state_25837__$1 = (function (){var statearr_25841 = state_25837;
(statearr_25841[(7)] = inst_25819__$1);

return statearr_25841;
})();
if(cljs.core.truth_(inst_25820)){
var statearr_25842_25865 = state_25837__$1;
(statearr_25842_25865[(1)] = (5));

} else {
var statearr_25843_25866 = state_25837__$1;
(statearr_25843_25866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25838 === (6))){
var inst_25819 = (state_25837[(7)]);
var inst_25824 = p.call(null,inst_25819);
var state_25837__$1 = state_25837;
if(cljs.core.truth_(inst_25824)){
var statearr_25844_25867 = state_25837__$1;
(statearr_25844_25867[(1)] = (8));

} else {
var statearr_25845_25868 = state_25837__$1;
(statearr_25845_25868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25838 === (3))){
var inst_25835 = (state_25837[(2)]);
var state_25837__$1 = state_25837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25837__$1,inst_25835);
} else {
if((state_val_25838 === (2))){
var state_25837__$1 = state_25837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25837__$1,(4),ch);
} else {
if((state_val_25838 === (11))){
var inst_25827 = (state_25837[(2)]);
var state_25837__$1 = state_25837;
var statearr_25846_25869 = state_25837__$1;
(statearr_25846_25869[(2)] = inst_25827);

(statearr_25846_25869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25838 === (9))){
var state_25837__$1 = state_25837;
var statearr_25847_25870 = state_25837__$1;
(statearr_25847_25870[(2)] = null);

(statearr_25847_25870[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25838 === (5))){
var inst_25822 = cljs.core.async.close_BANG_.call(null,out);
var state_25837__$1 = state_25837;
var statearr_25848_25871 = state_25837__$1;
(statearr_25848_25871[(2)] = inst_25822);

(statearr_25848_25871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25838 === (10))){
var inst_25830 = (state_25837[(2)]);
var state_25837__$1 = (function (){var statearr_25849 = state_25837;
(statearr_25849[(8)] = inst_25830);

return statearr_25849;
})();
var statearr_25850_25872 = state_25837__$1;
(statearr_25850_25872[(2)] = null);

(statearr_25850_25872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25838 === (8))){
var inst_25819 = (state_25837[(7)]);
var state_25837__$1 = state_25837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25837__$1,(11),out,inst_25819);
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
});})(c__23612__auto___25862,out))
;
return ((function (switch__23500__auto__,c__23612__auto___25862,out){
return (function() {
var cljs$core$async$state_machine__23501__auto__ = null;
var cljs$core$async$state_machine__23501__auto____0 = (function (){
var statearr_25854 = [null,null,null,null,null,null,null,null,null];
(statearr_25854[(0)] = cljs$core$async$state_machine__23501__auto__);

(statearr_25854[(1)] = (1));

return statearr_25854;
});
var cljs$core$async$state_machine__23501__auto____1 = (function (state_25837){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_25837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e25855){if((e25855 instanceof Object)){
var ex__23504__auto__ = e25855;
var statearr_25856_25873 = state_25837;
(statearr_25856_25873[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25874 = state_25837;
state_25837 = G__25874;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$state_machine__23501__auto__ = function(state_25837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23501__auto____1.call(this,state_25837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23501__auto____0;
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23501__auto____1;
return cljs$core$async$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___25862,out))
})();
var state__23614__auto__ = (function (){var statearr_25857 = f__23613__auto__.call(null);
(statearr_25857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___25862);

return statearr_25857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___25862,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25875 = [];
var len__17829__auto___25878 = arguments.length;
var i__17830__auto___25879 = (0);
while(true){
if((i__17830__auto___25879 < len__17829__auto___25878)){
args25875.push((arguments[i__17830__auto___25879]));

var G__25880 = (i__17830__auto___25879 + (1));
i__17830__auto___25879 = G__25880;
continue;
} else {
}
break;
}

var G__25877 = args25875.length;
switch (G__25877) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25875.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23612__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto__){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto__){
return (function (state_26047){
var state_val_26048 = (state_26047[(1)]);
if((state_val_26048 === (7))){
var inst_26043 = (state_26047[(2)]);
var state_26047__$1 = state_26047;
var statearr_26049_26090 = state_26047__$1;
(statearr_26049_26090[(2)] = inst_26043);

(statearr_26049_26090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (20))){
var inst_26013 = (state_26047[(7)]);
var inst_26024 = (state_26047[(2)]);
var inst_26025 = cljs.core.next.call(null,inst_26013);
var inst_25999 = inst_26025;
var inst_26000 = null;
var inst_26001 = (0);
var inst_26002 = (0);
var state_26047__$1 = (function (){var statearr_26050 = state_26047;
(statearr_26050[(8)] = inst_25999);

(statearr_26050[(9)] = inst_26001);

(statearr_26050[(10)] = inst_26024);

(statearr_26050[(11)] = inst_26002);

(statearr_26050[(12)] = inst_26000);

return statearr_26050;
})();
var statearr_26051_26091 = state_26047__$1;
(statearr_26051_26091[(2)] = null);

(statearr_26051_26091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (1))){
var state_26047__$1 = state_26047;
var statearr_26052_26092 = state_26047__$1;
(statearr_26052_26092[(2)] = null);

(statearr_26052_26092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (4))){
var inst_25988 = (state_26047[(13)]);
var inst_25988__$1 = (state_26047[(2)]);
var inst_25989 = (inst_25988__$1 == null);
var state_26047__$1 = (function (){var statearr_26053 = state_26047;
(statearr_26053[(13)] = inst_25988__$1);

return statearr_26053;
})();
if(cljs.core.truth_(inst_25989)){
var statearr_26054_26093 = state_26047__$1;
(statearr_26054_26093[(1)] = (5));

} else {
var statearr_26055_26094 = state_26047__$1;
(statearr_26055_26094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (15))){
var state_26047__$1 = state_26047;
var statearr_26059_26095 = state_26047__$1;
(statearr_26059_26095[(2)] = null);

(statearr_26059_26095[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (21))){
var state_26047__$1 = state_26047;
var statearr_26060_26096 = state_26047__$1;
(statearr_26060_26096[(2)] = null);

(statearr_26060_26096[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (13))){
var inst_25999 = (state_26047[(8)]);
var inst_26001 = (state_26047[(9)]);
var inst_26002 = (state_26047[(11)]);
var inst_26000 = (state_26047[(12)]);
var inst_26009 = (state_26047[(2)]);
var inst_26010 = (inst_26002 + (1));
var tmp26056 = inst_25999;
var tmp26057 = inst_26001;
var tmp26058 = inst_26000;
var inst_25999__$1 = tmp26056;
var inst_26000__$1 = tmp26058;
var inst_26001__$1 = tmp26057;
var inst_26002__$1 = inst_26010;
var state_26047__$1 = (function (){var statearr_26061 = state_26047;
(statearr_26061[(8)] = inst_25999__$1);

(statearr_26061[(9)] = inst_26001__$1);

(statearr_26061[(11)] = inst_26002__$1);

(statearr_26061[(12)] = inst_26000__$1);

(statearr_26061[(14)] = inst_26009);

return statearr_26061;
})();
var statearr_26062_26097 = state_26047__$1;
(statearr_26062_26097[(2)] = null);

(statearr_26062_26097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (22))){
var state_26047__$1 = state_26047;
var statearr_26063_26098 = state_26047__$1;
(statearr_26063_26098[(2)] = null);

(statearr_26063_26098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (6))){
var inst_25988 = (state_26047[(13)]);
var inst_25997 = f.call(null,inst_25988);
var inst_25998 = cljs.core.seq.call(null,inst_25997);
var inst_25999 = inst_25998;
var inst_26000 = null;
var inst_26001 = (0);
var inst_26002 = (0);
var state_26047__$1 = (function (){var statearr_26064 = state_26047;
(statearr_26064[(8)] = inst_25999);

(statearr_26064[(9)] = inst_26001);

(statearr_26064[(11)] = inst_26002);

(statearr_26064[(12)] = inst_26000);

return statearr_26064;
})();
var statearr_26065_26099 = state_26047__$1;
(statearr_26065_26099[(2)] = null);

(statearr_26065_26099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (17))){
var inst_26013 = (state_26047[(7)]);
var inst_26017 = cljs.core.chunk_first.call(null,inst_26013);
var inst_26018 = cljs.core.chunk_rest.call(null,inst_26013);
var inst_26019 = cljs.core.count.call(null,inst_26017);
var inst_25999 = inst_26018;
var inst_26000 = inst_26017;
var inst_26001 = inst_26019;
var inst_26002 = (0);
var state_26047__$1 = (function (){var statearr_26066 = state_26047;
(statearr_26066[(8)] = inst_25999);

(statearr_26066[(9)] = inst_26001);

(statearr_26066[(11)] = inst_26002);

(statearr_26066[(12)] = inst_26000);

return statearr_26066;
})();
var statearr_26067_26100 = state_26047__$1;
(statearr_26067_26100[(2)] = null);

(statearr_26067_26100[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (3))){
var inst_26045 = (state_26047[(2)]);
var state_26047__$1 = state_26047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26047__$1,inst_26045);
} else {
if((state_val_26048 === (12))){
var inst_26033 = (state_26047[(2)]);
var state_26047__$1 = state_26047;
var statearr_26068_26101 = state_26047__$1;
(statearr_26068_26101[(2)] = inst_26033);

(statearr_26068_26101[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (2))){
var state_26047__$1 = state_26047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26047__$1,(4),in$);
} else {
if((state_val_26048 === (23))){
var inst_26041 = (state_26047[(2)]);
var state_26047__$1 = state_26047;
var statearr_26069_26102 = state_26047__$1;
(statearr_26069_26102[(2)] = inst_26041);

(statearr_26069_26102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (19))){
var inst_26028 = (state_26047[(2)]);
var state_26047__$1 = state_26047;
var statearr_26070_26103 = state_26047__$1;
(statearr_26070_26103[(2)] = inst_26028);

(statearr_26070_26103[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (11))){
var inst_25999 = (state_26047[(8)]);
var inst_26013 = (state_26047[(7)]);
var inst_26013__$1 = cljs.core.seq.call(null,inst_25999);
var state_26047__$1 = (function (){var statearr_26071 = state_26047;
(statearr_26071[(7)] = inst_26013__$1);

return statearr_26071;
})();
if(inst_26013__$1){
var statearr_26072_26104 = state_26047__$1;
(statearr_26072_26104[(1)] = (14));

} else {
var statearr_26073_26105 = state_26047__$1;
(statearr_26073_26105[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (9))){
var inst_26035 = (state_26047[(2)]);
var inst_26036 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26047__$1 = (function (){var statearr_26074 = state_26047;
(statearr_26074[(15)] = inst_26035);

return statearr_26074;
})();
if(cljs.core.truth_(inst_26036)){
var statearr_26075_26106 = state_26047__$1;
(statearr_26075_26106[(1)] = (21));

} else {
var statearr_26076_26107 = state_26047__$1;
(statearr_26076_26107[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (5))){
var inst_25991 = cljs.core.async.close_BANG_.call(null,out);
var state_26047__$1 = state_26047;
var statearr_26077_26108 = state_26047__$1;
(statearr_26077_26108[(2)] = inst_25991);

(statearr_26077_26108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (14))){
var inst_26013 = (state_26047[(7)]);
var inst_26015 = cljs.core.chunked_seq_QMARK_.call(null,inst_26013);
var state_26047__$1 = state_26047;
if(inst_26015){
var statearr_26078_26109 = state_26047__$1;
(statearr_26078_26109[(1)] = (17));

} else {
var statearr_26079_26110 = state_26047__$1;
(statearr_26079_26110[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (16))){
var inst_26031 = (state_26047[(2)]);
var state_26047__$1 = state_26047;
var statearr_26080_26111 = state_26047__$1;
(statearr_26080_26111[(2)] = inst_26031);

(statearr_26080_26111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26048 === (10))){
var inst_26002 = (state_26047[(11)]);
var inst_26000 = (state_26047[(12)]);
var inst_26007 = cljs.core._nth.call(null,inst_26000,inst_26002);
var state_26047__$1 = state_26047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26047__$1,(13),out,inst_26007);
} else {
if((state_val_26048 === (18))){
var inst_26013 = (state_26047[(7)]);
var inst_26022 = cljs.core.first.call(null,inst_26013);
var state_26047__$1 = state_26047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26047__$1,(20),out,inst_26022);
} else {
if((state_val_26048 === (8))){
var inst_26001 = (state_26047[(9)]);
var inst_26002 = (state_26047[(11)]);
var inst_26004 = (inst_26002 < inst_26001);
var inst_26005 = inst_26004;
var state_26047__$1 = state_26047;
if(cljs.core.truth_(inst_26005)){
var statearr_26081_26112 = state_26047__$1;
(statearr_26081_26112[(1)] = (10));

} else {
var statearr_26082_26113 = state_26047__$1;
(statearr_26082_26113[(1)] = (11));

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
});})(c__23612__auto__))
;
return ((function (switch__23500__auto__,c__23612__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23501__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23501__auto____0 = (function (){
var statearr_26086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26086[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23501__auto__);

(statearr_26086[(1)] = (1));

return statearr_26086;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23501__auto____1 = (function (state_26047){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_26047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e26087){if((e26087 instanceof Object)){
var ex__23504__auto__ = e26087;
var statearr_26088_26114 = state_26047;
(statearr_26088_26114[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26115 = state_26047;
state_26047 = G__26115;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23501__auto__ = function(state_26047){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23501__auto____1.call(this,state_26047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23501__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23501__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto__))
})();
var state__23614__auto__ = (function (){var statearr_26089 = f__23613__auto__.call(null);
(statearr_26089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto__);

return statearr_26089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto__))
);

return c__23612__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26116 = [];
var len__17829__auto___26119 = arguments.length;
var i__17830__auto___26120 = (0);
while(true){
if((i__17830__auto___26120 < len__17829__auto___26119)){
args26116.push((arguments[i__17830__auto___26120]));

var G__26121 = (i__17830__auto___26120 + (1));
i__17830__auto___26120 = G__26121;
continue;
} else {
}
break;
}

var G__26118 = args26116.length;
switch (G__26118) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26116.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args26123 = [];
var len__17829__auto___26126 = arguments.length;
var i__17830__auto___26127 = (0);
while(true){
if((i__17830__auto___26127 < len__17829__auto___26126)){
args26123.push((arguments[i__17830__auto___26127]));

var G__26128 = (i__17830__auto___26127 + (1));
i__17830__auto___26127 = G__26128;
continue;
} else {
}
break;
}

var G__26125 = args26123.length;
switch (G__26125) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26123.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args26130 = [];
var len__17829__auto___26181 = arguments.length;
var i__17830__auto___26182 = (0);
while(true){
if((i__17830__auto___26182 < len__17829__auto___26181)){
args26130.push((arguments[i__17830__auto___26182]));

var G__26183 = (i__17830__auto___26182 + (1));
i__17830__auto___26182 = G__26183;
continue;
} else {
}
break;
}

var G__26132 = args26130.length;
switch (G__26132) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26130.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23612__auto___26185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___26185,out){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___26185,out){
return (function (state_26156){
var state_val_26157 = (state_26156[(1)]);
if((state_val_26157 === (7))){
var inst_26151 = (state_26156[(2)]);
var state_26156__$1 = state_26156;
var statearr_26158_26186 = state_26156__$1;
(statearr_26158_26186[(2)] = inst_26151);

(statearr_26158_26186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (1))){
var inst_26133 = null;
var state_26156__$1 = (function (){var statearr_26159 = state_26156;
(statearr_26159[(7)] = inst_26133);

return statearr_26159;
})();
var statearr_26160_26187 = state_26156__$1;
(statearr_26160_26187[(2)] = null);

(statearr_26160_26187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (4))){
var inst_26136 = (state_26156[(8)]);
var inst_26136__$1 = (state_26156[(2)]);
var inst_26137 = (inst_26136__$1 == null);
var inst_26138 = cljs.core.not.call(null,inst_26137);
var state_26156__$1 = (function (){var statearr_26161 = state_26156;
(statearr_26161[(8)] = inst_26136__$1);

return statearr_26161;
})();
if(inst_26138){
var statearr_26162_26188 = state_26156__$1;
(statearr_26162_26188[(1)] = (5));

} else {
var statearr_26163_26189 = state_26156__$1;
(statearr_26163_26189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (6))){
var state_26156__$1 = state_26156;
var statearr_26164_26190 = state_26156__$1;
(statearr_26164_26190[(2)] = null);

(statearr_26164_26190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (3))){
var inst_26153 = (state_26156[(2)]);
var inst_26154 = cljs.core.async.close_BANG_.call(null,out);
var state_26156__$1 = (function (){var statearr_26165 = state_26156;
(statearr_26165[(9)] = inst_26153);

return statearr_26165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26156__$1,inst_26154);
} else {
if((state_val_26157 === (2))){
var state_26156__$1 = state_26156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26156__$1,(4),ch);
} else {
if((state_val_26157 === (11))){
var inst_26136 = (state_26156[(8)]);
var inst_26145 = (state_26156[(2)]);
var inst_26133 = inst_26136;
var state_26156__$1 = (function (){var statearr_26166 = state_26156;
(statearr_26166[(7)] = inst_26133);

(statearr_26166[(10)] = inst_26145);

return statearr_26166;
})();
var statearr_26167_26191 = state_26156__$1;
(statearr_26167_26191[(2)] = null);

(statearr_26167_26191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (9))){
var inst_26136 = (state_26156[(8)]);
var state_26156__$1 = state_26156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26156__$1,(11),out,inst_26136);
} else {
if((state_val_26157 === (5))){
var inst_26133 = (state_26156[(7)]);
var inst_26136 = (state_26156[(8)]);
var inst_26140 = cljs.core._EQ_.call(null,inst_26136,inst_26133);
var state_26156__$1 = state_26156;
if(inst_26140){
var statearr_26169_26192 = state_26156__$1;
(statearr_26169_26192[(1)] = (8));

} else {
var statearr_26170_26193 = state_26156__$1;
(statearr_26170_26193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (10))){
var inst_26148 = (state_26156[(2)]);
var state_26156__$1 = state_26156;
var statearr_26171_26194 = state_26156__$1;
(statearr_26171_26194[(2)] = inst_26148);

(statearr_26171_26194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26157 === (8))){
var inst_26133 = (state_26156[(7)]);
var tmp26168 = inst_26133;
var inst_26133__$1 = tmp26168;
var state_26156__$1 = (function (){var statearr_26172 = state_26156;
(statearr_26172[(7)] = inst_26133__$1);

return statearr_26172;
})();
var statearr_26173_26195 = state_26156__$1;
(statearr_26173_26195[(2)] = null);

(statearr_26173_26195[(1)] = (2));


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
});})(c__23612__auto___26185,out))
;
return ((function (switch__23500__auto__,c__23612__auto___26185,out){
return (function() {
var cljs$core$async$state_machine__23501__auto__ = null;
var cljs$core$async$state_machine__23501__auto____0 = (function (){
var statearr_26177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26177[(0)] = cljs$core$async$state_machine__23501__auto__);

(statearr_26177[(1)] = (1));

return statearr_26177;
});
var cljs$core$async$state_machine__23501__auto____1 = (function (state_26156){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_26156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e26178){if((e26178 instanceof Object)){
var ex__23504__auto__ = e26178;
var statearr_26179_26196 = state_26156;
(statearr_26179_26196[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26197 = state_26156;
state_26156 = G__26197;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$state_machine__23501__auto__ = function(state_26156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23501__auto____1.call(this,state_26156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23501__auto____0;
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23501__auto____1;
return cljs$core$async$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___26185,out))
})();
var state__23614__auto__ = (function (){var statearr_26180 = f__23613__auto__.call(null);
(statearr_26180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___26185);

return statearr_26180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___26185,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26198 = [];
var len__17829__auto___26268 = arguments.length;
var i__17830__auto___26269 = (0);
while(true){
if((i__17830__auto___26269 < len__17829__auto___26268)){
args26198.push((arguments[i__17830__auto___26269]));

var G__26270 = (i__17830__auto___26269 + (1));
i__17830__auto___26269 = G__26270;
continue;
} else {
}
break;
}

var G__26200 = args26198.length;
switch (G__26200) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26198.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23612__auto___26272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___26272,out){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___26272,out){
return (function (state_26238){
var state_val_26239 = (state_26238[(1)]);
if((state_val_26239 === (7))){
var inst_26234 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26240_26273 = state_26238__$1;
(statearr_26240_26273[(2)] = inst_26234);

(statearr_26240_26273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (1))){
var inst_26201 = (new Array(n));
var inst_26202 = inst_26201;
var inst_26203 = (0);
var state_26238__$1 = (function (){var statearr_26241 = state_26238;
(statearr_26241[(7)] = inst_26202);

(statearr_26241[(8)] = inst_26203);

return statearr_26241;
})();
var statearr_26242_26274 = state_26238__$1;
(statearr_26242_26274[(2)] = null);

(statearr_26242_26274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (4))){
var inst_26206 = (state_26238[(9)]);
var inst_26206__$1 = (state_26238[(2)]);
var inst_26207 = (inst_26206__$1 == null);
var inst_26208 = cljs.core.not.call(null,inst_26207);
var state_26238__$1 = (function (){var statearr_26243 = state_26238;
(statearr_26243[(9)] = inst_26206__$1);

return statearr_26243;
})();
if(inst_26208){
var statearr_26244_26275 = state_26238__$1;
(statearr_26244_26275[(1)] = (5));

} else {
var statearr_26245_26276 = state_26238__$1;
(statearr_26245_26276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (15))){
var inst_26228 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26246_26277 = state_26238__$1;
(statearr_26246_26277[(2)] = inst_26228);

(statearr_26246_26277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (13))){
var state_26238__$1 = state_26238;
var statearr_26247_26278 = state_26238__$1;
(statearr_26247_26278[(2)] = null);

(statearr_26247_26278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (6))){
var inst_26203 = (state_26238[(8)]);
var inst_26224 = (inst_26203 > (0));
var state_26238__$1 = state_26238;
if(cljs.core.truth_(inst_26224)){
var statearr_26248_26279 = state_26238__$1;
(statearr_26248_26279[(1)] = (12));

} else {
var statearr_26249_26280 = state_26238__$1;
(statearr_26249_26280[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (3))){
var inst_26236 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26238__$1,inst_26236);
} else {
if((state_val_26239 === (12))){
var inst_26202 = (state_26238[(7)]);
var inst_26226 = cljs.core.vec.call(null,inst_26202);
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26238__$1,(15),out,inst_26226);
} else {
if((state_val_26239 === (2))){
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26238__$1,(4),ch);
} else {
if((state_val_26239 === (11))){
var inst_26218 = (state_26238[(2)]);
var inst_26219 = (new Array(n));
var inst_26202 = inst_26219;
var inst_26203 = (0);
var state_26238__$1 = (function (){var statearr_26250 = state_26238;
(statearr_26250[(10)] = inst_26218);

(statearr_26250[(7)] = inst_26202);

(statearr_26250[(8)] = inst_26203);

return statearr_26250;
})();
var statearr_26251_26281 = state_26238__$1;
(statearr_26251_26281[(2)] = null);

(statearr_26251_26281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (9))){
var inst_26202 = (state_26238[(7)]);
var inst_26216 = cljs.core.vec.call(null,inst_26202);
var state_26238__$1 = state_26238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26238__$1,(11),out,inst_26216);
} else {
if((state_val_26239 === (5))){
var inst_26202 = (state_26238[(7)]);
var inst_26211 = (state_26238[(11)]);
var inst_26206 = (state_26238[(9)]);
var inst_26203 = (state_26238[(8)]);
var inst_26210 = (inst_26202[inst_26203] = inst_26206);
var inst_26211__$1 = (inst_26203 + (1));
var inst_26212 = (inst_26211__$1 < n);
var state_26238__$1 = (function (){var statearr_26252 = state_26238;
(statearr_26252[(11)] = inst_26211__$1);

(statearr_26252[(12)] = inst_26210);

return statearr_26252;
})();
if(cljs.core.truth_(inst_26212)){
var statearr_26253_26282 = state_26238__$1;
(statearr_26253_26282[(1)] = (8));

} else {
var statearr_26254_26283 = state_26238__$1;
(statearr_26254_26283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (14))){
var inst_26231 = (state_26238[(2)]);
var inst_26232 = cljs.core.async.close_BANG_.call(null,out);
var state_26238__$1 = (function (){var statearr_26256 = state_26238;
(statearr_26256[(13)] = inst_26231);

return statearr_26256;
})();
var statearr_26257_26284 = state_26238__$1;
(statearr_26257_26284[(2)] = inst_26232);

(statearr_26257_26284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (10))){
var inst_26222 = (state_26238[(2)]);
var state_26238__$1 = state_26238;
var statearr_26258_26285 = state_26238__$1;
(statearr_26258_26285[(2)] = inst_26222);

(statearr_26258_26285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26239 === (8))){
var inst_26202 = (state_26238[(7)]);
var inst_26211 = (state_26238[(11)]);
var tmp26255 = inst_26202;
var inst_26202__$1 = tmp26255;
var inst_26203 = inst_26211;
var state_26238__$1 = (function (){var statearr_26259 = state_26238;
(statearr_26259[(7)] = inst_26202__$1);

(statearr_26259[(8)] = inst_26203);

return statearr_26259;
})();
var statearr_26260_26286 = state_26238__$1;
(statearr_26260_26286[(2)] = null);

(statearr_26260_26286[(1)] = (2));


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
});})(c__23612__auto___26272,out))
;
return ((function (switch__23500__auto__,c__23612__auto___26272,out){
return (function() {
var cljs$core$async$state_machine__23501__auto__ = null;
var cljs$core$async$state_machine__23501__auto____0 = (function (){
var statearr_26264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26264[(0)] = cljs$core$async$state_machine__23501__auto__);

(statearr_26264[(1)] = (1));

return statearr_26264;
});
var cljs$core$async$state_machine__23501__auto____1 = (function (state_26238){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_26238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e26265){if((e26265 instanceof Object)){
var ex__23504__auto__ = e26265;
var statearr_26266_26287 = state_26238;
(statearr_26266_26287[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26288 = state_26238;
state_26238 = G__26288;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$state_machine__23501__auto__ = function(state_26238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23501__auto____1.call(this,state_26238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23501__auto____0;
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23501__auto____1;
return cljs$core$async$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___26272,out))
})();
var state__23614__auto__ = (function (){var statearr_26267 = f__23613__auto__.call(null);
(statearr_26267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___26272);

return statearr_26267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___26272,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26289 = [];
var len__17829__auto___26363 = arguments.length;
var i__17830__auto___26364 = (0);
while(true){
if((i__17830__auto___26364 < len__17829__auto___26363)){
args26289.push((arguments[i__17830__auto___26364]));

var G__26365 = (i__17830__auto___26364 + (1));
i__17830__auto___26364 = G__26365;
continue;
} else {
}
break;
}

var G__26291 = args26289.length;
switch (G__26291) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26289.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23612__auto___26367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23612__auto___26367,out){
return (function (){
var f__23613__auto__ = (function (){var switch__23500__auto__ = ((function (c__23612__auto___26367,out){
return (function (state_26333){
var state_val_26334 = (state_26333[(1)]);
if((state_val_26334 === (7))){
var inst_26329 = (state_26333[(2)]);
var state_26333__$1 = state_26333;
var statearr_26335_26368 = state_26333__$1;
(statearr_26335_26368[(2)] = inst_26329);

(statearr_26335_26368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26334 === (1))){
var inst_26292 = [];
var inst_26293 = inst_26292;
var inst_26294 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26333__$1 = (function (){var statearr_26336 = state_26333;
(statearr_26336[(7)] = inst_26293);

(statearr_26336[(8)] = inst_26294);

return statearr_26336;
})();
var statearr_26337_26369 = state_26333__$1;
(statearr_26337_26369[(2)] = null);

(statearr_26337_26369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26334 === (4))){
var inst_26297 = (state_26333[(9)]);
var inst_26297__$1 = (state_26333[(2)]);
var inst_26298 = (inst_26297__$1 == null);
var inst_26299 = cljs.core.not.call(null,inst_26298);
var state_26333__$1 = (function (){var statearr_26338 = state_26333;
(statearr_26338[(9)] = inst_26297__$1);

return statearr_26338;
})();
if(inst_26299){
var statearr_26339_26370 = state_26333__$1;
(statearr_26339_26370[(1)] = (5));

} else {
var statearr_26340_26371 = state_26333__$1;
(statearr_26340_26371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26334 === (15))){
var inst_26323 = (state_26333[(2)]);
var state_26333__$1 = state_26333;
var statearr_26341_26372 = state_26333__$1;
(statearr_26341_26372[(2)] = inst_26323);

(statearr_26341_26372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26334 === (13))){
var state_26333__$1 = state_26333;
var statearr_26342_26373 = state_26333__$1;
(statearr_26342_26373[(2)] = null);

(statearr_26342_26373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26334 === (6))){
var inst_26293 = (state_26333[(7)]);
var inst_26318 = inst_26293.length;
var inst_26319 = (inst_26318 > (0));
var state_26333__$1 = state_26333;
if(cljs.core.truth_(inst_26319)){
var statearr_26343_26374 = state_26333__$1;
(statearr_26343_26374[(1)] = (12));

} else {
var statearr_26344_26375 = state_26333__$1;
(statearr_26344_26375[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26334 === (3))){
var inst_26331 = (state_26333[(2)]);
var state_26333__$1 = state_26333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26333__$1,inst_26331);
} else {
if((state_val_26334 === (12))){
var inst_26293 = (state_26333[(7)]);
var inst_26321 = cljs.core.vec.call(null,inst_26293);
var state_26333__$1 = state_26333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26333__$1,(15),out,inst_26321);
} else {
if((state_val_26334 === (2))){
var state_26333__$1 = state_26333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26333__$1,(4),ch);
} else {
if((state_val_26334 === (11))){
var inst_26301 = (state_26333[(10)]);
var inst_26297 = (state_26333[(9)]);
var inst_26311 = (state_26333[(2)]);
var inst_26312 = [];
var inst_26313 = inst_26312.push(inst_26297);
var inst_26293 = inst_26312;
var inst_26294 = inst_26301;
var state_26333__$1 = (function (){var statearr_26345 = state_26333;
(statearr_26345[(11)] = inst_26313);

(statearr_26345[(12)] = inst_26311);

(statearr_26345[(7)] = inst_26293);

(statearr_26345[(8)] = inst_26294);

return statearr_26345;
})();
var statearr_26346_26376 = state_26333__$1;
(statearr_26346_26376[(2)] = null);

(statearr_26346_26376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26334 === (9))){
var inst_26293 = (state_26333[(7)]);
var inst_26309 = cljs.core.vec.call(null,inst_26293);
var state_26333__$1 = state_26333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26333__$1,(11),out,inst_26309);
} else {
if((state_val_26334 === (5))){
var inst_26301 = (state_26333[(10)]);
var inst_26294 = (state_26333[(8)]);
var inst_26297 = (state_26333[(9)]);
var inst_26301__$1 = f.call(null,inst_26297);
var inst_26302 = cljs.core._EQ_.call(null,inst_26301__$1,inst_26294);
var inst_26303 = cljs.core.keyword_identical_QMARK_.call(null,inst_26294,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26304 = (inst_26302) || (inst_26303);
var state_26333__$1 = (function (){var statearr_26347 = state_26333;
(statearr_26347[(10)] = inst_26301__$1);

return statearr_26347;
})();
if(cljs.core.truth_(inst_26304)){
var statearr_26348_26377 = state_26333__$1;
(statearr_26348_26377[(1)] = (8));

} else {
var statearr_26349_26378 = state_26333__$1;
(statearr_26349_26378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26334 === (14))){
var inst_26326 = (state_26333[(2)]);
var inst_26327 = cljs.core.async.close_BANG_.call(null,out);
var state_26333__$1 = (function (){var statearr_26351 = state_26333;
(statearr_26351[(13)] = inst_26326);

return statearr_26351;
})();
var statearr_26352_26379 = state_26333__$1;
(statearr_26352_26379[(2)] = inst_26327);

(statearr_26352_26379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26334 === (10))){
var inst_26316 = (state_26333[(2)]);
var state_26333__$1 = state_26333;
var statearr_26353_26380 = state_26333__$1;
(statearr_26353_26380[(2)] = inst_26316);

(statearr_26353_26380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26334 === (8))){
var inst_26301 = (state_26333[(10)]);
var inst_26293 = (state_26333[(7)]);
var inst_26297 = (state_26333[(9)]);
var inst_26306 = inst_26293.push(inst_26297);
var tmp26350 = inst_26293;
var inst_26293__$1 = tmp26350;
var inst_26294 = inst_26301;
var state_26333__$1 = (function (){var statearr_26354 = state_26333;
(statearr_26354[(14)] = inst_26306);

(statearr_26354[(7)] = inst_26293__$1);

(statearr_26354[(8)] = inst_26294);

return statearr_26354;
})();
var statearr_26355_26381 = state_26333__$1;
(statearr_26355_26381[(2)] = null);

(statearr_26355_26381[(1)] = (2));


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
});})(c__23612__auto___26367,out))
;
return ((function (switch__23500__auto__,c__23612__auto___26367,out){
return (function() {
var cljs$core$async$state_machine__23501__auto__ = null;
var cljs$core$async$state_machine__23501__auto____0 = (function (){
var statearr_26359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26359[(0)] = cljs$core$async$state_machine__23501__auto__);

(statearr_26359[(1)] = (1));

return statearr_26359;
});
var cljs$core$async$state_machine__23501__auto____1 = (function (state_26333){
while(true){
var ret_value__23502__auto__ = (function (){try{while(true){
var result__23503__auto__ = switch__23500__auto__.call(null,state_26333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23503__auto__;
}
break;
}
}catch (e26360){if((e26360 instanceof Object)){
var ex__23504__auto__ = e26360;
var statearr_26361_26382 = state_26333;
(statearr_26361_26382[(5)] = ex__23504__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23502__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26383 = state_26333;
state_26333 = G__26383;
continue;
} else {
return ret_value__23502__auto__;
}
break;
}
});
cljs$core$async$state_machine__23501__auto__ = function(state_26333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23501__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23501__auto____1.call(this,state_26333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23501__auto____0;
cljs$core$async$state_machine__23501__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23501__auto____1;
return cljs$core$async$state_machine__23501__auto__;
})()
;})(switch__23500__auto__,c__23612__auto___26367,out))
})();
var state__23614__auto__ = (function (){var statearr_26362 = f__23613__auto__.call(null);
(statearr_26362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23612__auto___26367);

return statearr_26362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23614__auto__);
});})(c__23612__auto___26367,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map