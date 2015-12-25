// Compiled by ClojureScript 1.7.170 {}
goog.provide('schema.core');
goog.require('cljs.core');
goog.require('schema.spec.collection');
goog.require('schema.spec.core');
goog.require('schema.spec.variant');
goog.require('schema.spec.leaf');
goog.require('clojure.string');
goog.require('schema.utils');

/**
 * @interface
 */
schema.core.Schema = function(){};

/**
 * A spec is a record of some type that expresses the structure of this schema
 *   in a declarative and/or imperative way.  See schema.spec.* for examples.
 */
schema.core.spec = (function schema$core$spec(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$spec$arity$1 == null)))){
return this$.schema$core$Schema$spec$arity$1(this$);
} else {
var x__17426__auto__ = (((this$ == null))?null:this$);
var m__17427__auto__ = (schema.core.spec[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,this$);
} else {
var m__17427__auto____$1 = (schema.core.spec["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.spec",this$);
}
}
}
});

/**
 * Expand this schema to a human-readable format suitable for pprinting,
 *   also expanding class schematas at the leaves.  Example:
 * 
 *   user> (s/explain {:a s/Keyword :b [s/Int]} )
 *   {:a Keyword, :b [Int]}
 */
schema.core.explain = (function schema$core$explain(this$){
if((!((this$ == null))) && (!((this$.schema$core$Schema$explain$arity$1 == null)))){
return this$.schema$core$Schema$explain$arity$1(this$);
} else {
var x__17426__auto__ = (((this$ == null))?null:this$);
var m__17427__auto__ = (schema.core.explain[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,this$);
} else {
var m__17427__auto____$1 = (schema.core.explain["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Schema.explain",this$);
}
}
}
});

/**
 * Compile an efficient checker for schema, which returns nil for valid values and
 * error descriptions otherwise.
 */
schema.core.checker = (function schema$core$checker(schema__$1){
return cljs.core.comp.call(null,schema.utils.error_val,schema.spec.core.run_checker.call(null,(function (s,params){
return schema.spec.core.checker.call(null,schema.core.spec.call(null,s),params);
}),false,schema__$1));
});
/**
 * Return nil if x matches schema; otherwise, returns a value that looks like the
 * 'bad' parts of x with ValidationErrors at the leaves describing the failures.
 * 
 * If you will be checking many datums, it is much more efficient to create
 * a 'checker' once and call it on each of them.
 */
schema.core.check = (function schema$core$check(schema__$1,x){
return schema.core.checker.call(null,schema__$1).call(null,x);
});
/**
 * Compile an efficient validator for schema.
 */
schema.core.validator = (function schema$core$validator(schema__$1){
var c = schema.core.checker.call(null,schema__$1);
return ((function (c){
return (function (value){
var temp__4425__auto___19782 = c.call(null,value);
if(cljs.core.truth_(temp__4425__auto___19782)){
var error_19783 = temp__4425__auto___19782;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value does not match schema: %s",cljs.core.pr_str.call(null,error_19783)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_19783], null));
} else {
}

return value;
});
;})(c))
});
/**
 * Throw an exception if value does not satisfy schema; otherwise, return value.
 * If you will be validating many datums, it is much more efficient to create
 * a 'validator' once and call it on each of them.
 */
schema.core.validate = (function schema$core$validate(schema__$1,value){
return schema.core.validator.call(null,schema__$1).call(null,value);
});
schema.core.instance_precondition = (function schema$core$instance_precondition(s,klass){
return schema.spec.core.precondition.call(null,s,(function (p1__19784_SHARP_){
var and__16759__auto__ = !((p1__19784_SHARP_ == null));
if(and__16759__auto__){
var or__16771__auto__ = (klass === p1__19784_SHARP_.constructor);
if(or__16771__auto__){
return or__16771__auto__;
} else {
return p1__19784_SHARP_ instanceof klass;
}
} else {
return and__16759__auto__;
}
}),(function (p1__19785_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19785_SHARP_),klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
}));
});
(schema.core.Schema["function"] = true);

(schema.core.spec["function"] = (function (this$){
var pre = schema.core.instance_precondition.call(null,this$,this$);
var temp__4423__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4423__auto__)){
var class_schema = temp__4423__auto__;
return schema.spec.variant.variant_spec.call(null,pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),class_schema], null)], null));
} else {
return schema.spec.leaf.leaf_spec.call(null,pre);
}
}));

(schema.core.explain["function"] = (function (this$){
var temp__4423__auto__ = schema.utils.class_schema.call(null,this$);
if(cljs.core.truth_(temp__4423__auto__)){
var more_schema = temp__4423__auto__;
return schema.core.explain.call(null,more_schema);
} else {
var pred__19786 = cljs.core._EQ_;
var expr__19787 = this$;
if(cljs.core.truth_(pred__19786.call(null,null,expr__19787))){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
if(cljs.core.truth_(pred__19786.call(null,Boolean,expr__19787))){
return new cljs.core.Symbol(null,"Bool","Bool",195910502,null);
} else {
if(cljs.core.truth_(pred__19786.call(null,Number,expr__19787))){
return new cljs.core.Symbol(null,"Num","Num",-2044934708,null);
} else {
if(cljs.core.truth_(pred__19786.call(null,null,expr__19787))){
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
} else {
if(cljs.core.truth_(pred__19786.call(null,Date,expr__19787))){
return new cljs.core.Symbol(null,"Inst","Inst",292408622,null);
} else {
if(cljs.core.truth_(pred__19786.call(null,cljs.core.UUID,expr__19787))){
return new cljs.core.Symbol(null,"Uuid","Uuid",-1866694318,null);
} else {
return this$;
}
}
}
}
}
}
}
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.AnythingSchema = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.AnythingSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19790,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19792 = (((k19790 instanceof cljs.core.Keyword))?k19790.fqn:null);
switch (G__19792) {
case "_":
return self__._;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19790,else__17388__auto__);

}
});

schema.core.AnythingSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.AnythingSchema{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IIterable$ = true;

schema.core.AnythingSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19789){
var self__ = this;
var G__19789__$1 = this;
return (new cljs.core.RecordIter((0),G__19789__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.AnythingSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.AnythingSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.AnythingSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19789){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19793 = cljs.core.keyword_identical_QMARK_;
var expr__19794 = k__17393__auto__;
if(cljs.core.truth_(pred__19793.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__19794))){
return (new schema.core.AnythingSchema(G__19789,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.AnythingSchema(self__._,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19789),null));
}
});

schema.core.AnythingSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"_","_",1453416199),self__._],null))], null),self__.__extmap));
});

schema.core.AnythingSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19789){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.AnythingSchema(self__._,G__19789,self__.__extmap,self__.__hash));
});

schema.core.AnythingSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.AnythingSchema.prototype.schema$core$Schema$ = true;

schema.core.AnythingSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_);
});

schema.core.AnythingSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Any","Any",1277492269,null);
});

schema.core.AnythingSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
});

schema.core.AnythingSchema.cljs$lang$type = true;

schema.core.AnythingSchema.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/AnythingSchema");
});

schema.core.AnythingSchema.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/AnythingSchema");
});

schema.core.__GT_AnythingSchema = (function schema$core$__GT_AnythingSchema(_){
return (new schema.core.AnythingSchema(_,null,null,null));
});

schema.core.map__GT_AnythingSchema = (function schema$core$map__GT_AnythingSchema(G__19791){
return (new schema.core.AnythingSchema(new cljs.core.Keyword(null,"_","_",1453416199).cljs$core$IFn$_invoke$arity$1(G__19791),null,cljs.core.dissoc.call(null,G__19791,new cljs.core.Keyword(null,"_","_",1453416199)),null));
});

/**
 * Any value, including nil.
 */
schema.core.Any = (new schema.core.AnythingSchema(null,null,null,null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EqSchema = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.EqSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19800,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19802 = (((k19800 instanceof cljs.core.Keyword))?k19800.fqn:null);
switch (G__19802) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19800,else__17388__auto__);

}
});

schema.core.EqSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.EqSchema{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EqSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19799){
var self__ = this;
var G__19799__$1 = this;
return (new cljs.core.RecordIter((0),G__19799__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EqSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.EqSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.EqSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EqSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.EqSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19799){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19803 = cljs.core.keyword_identical_QMARK_;
var expr__19804 = k__17393__auto__;
if(cljs.core.truth_(pred__19803.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__19804))){
return (new schema.core.EqSchema(G__19799,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EqSchema(self__.v,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19799),null));
}
});

schema.core.EqSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
});

schema.core.EqSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19799){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.EqSchema(self__.v,G__19799,self__.__extmap,self__.__hash));
});

schema.core.EqSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.EqSchema.prototype.schema$core$Schema$ = true;

schema.core.EqSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__19797_SHARP_){
return cljs.core._EQ_.call(null,self__.v,p1__19797_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19798_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19798_SHARP_),self__.v),new cljs.core.Symbol(null,"=","=",-1501502141,null));
});})(this$__$1))
));
});

schema.core.EqSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.v),new cljs.core.Symbol(null,"eq","eq",1021992460,null));
});

schema.core.EqSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
});

schema.core.EqSchema.cljs$lang$type = true;

schema.core.EqSchema.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EqSchema");
});

schema.core.EqSchema.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/EqSchema");
});

schema.core.__GT_EqSchema = (function schema$core$__GT_EqSchema(v){
return (new schema.core.EqSchema(v,null,null,null));
});

schema.core.map__GT_EqSchema = (function schema$core$map__GT_EqSchema(G__19801){
return (new schema.core.EqSchema(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__19801),null,cljs.core.dissoc.call(null,G__19801,new cljs.core.Keyword(null,"v","v",21465059)),null));
});

/**
 * A value that must be (= v).
 */
schema.core.eq = (function schema$core$eq(v){
return (new schema.core.EqSchema(v,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Isa = (function (h,parent,__meta,__extmap,__hash){
this.h = h;
this.parent = parent;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.Isa.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19810,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19812 = (((k19810 instanceof cljs.core.Keyword))?k19810.fqn:null);
switch (G__19812) {
case "h":
return self__.h;

break;
case "parent":
return self__.parent;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19810,else__17388__auto__);

}
});

schema.core.Isa.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.Isa{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IIterable$ = true;

schema.core.Isa.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19809){
var self__ = this;
var G__19809__$1 = this;
return (new cljs.core.RecordIter((0),G__19809__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Isa.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.Isa.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.Isa.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Isa.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.Isa.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19809){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19813 = cljs.core.keyword_identical_QMARK_;
var expr__19814 = k__17393__auto__;
if(cljs.core.truth_(pred__19813.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__19814))){
return (new schema.core.Isa(G__19809,self__.parent,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19813.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__19814))){
return (new schema.core.Isa(self__.h,G__19809,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Isa(self__.h,self__.parent,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19809),null));
}
}
});

schema.core.Isa.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null))], null),self__.__extmap));
});

schema.core.Isa.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19809){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.Isa(self__.h,self__.parent,G__19809,self__.__extmap,self__.__hash));
});

schema.core.Isa.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.Isa.prototype.schema$core$Schema$ = true;

schema.core.Isa.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__19807_SHARP_){
return cljs.core.isa_QMARK_.call(null,self__.h,p1__19807_SHARP_,self__.parent);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19808_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),p1__19808_SHARP_),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});})(this$__$1))
));
});

schema.core.Isa.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.parent),new cljs.core.Symbol(null,"isa?","isa?",1358492324,null));
});

schema.core.Isa.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.Symbol(null,"parent","parent",761652748,null)], null);
});

schema.core.Isa.cljs$lang$type = true;

schema.core.Isa.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Isa");
});

schema.core.Isa.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/Isa");
});

schema.core.__GT_Isa = (function schema$core$__GT_Isa(h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.map__GT_Isa = (function schema$core$map__GT_Isa(G__19811){
return (new schema.core.Isa(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19811),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__19811),null,cljs.core.dissoc.call(null,G__19811,new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"parent","parent",-878878779)),null));
});

/**
 * A value that must be a child of parent.
 */
schema.core.isa = (function schema$core$isa(var_args){
var args19817 = [];
var len__17829__auto___19820 = arguments.length;
var i__17830__auto___19821 = (0);
while(true){
if((i__17830__auto___19821 < len__17829__auto___19820)){
args19817.push((arguments[i__17830__auto___19821]));

var G__19822 = (i__17830__auto___19821 + (1));
i__17830__auto___19821 = G__19822;
continue;
} else {
}
break;
}

var G__19819 = args19817.length;
switch (G__19819) {
case 1:
return schema.core.isa.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.isa.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19817.length)].join('')));

}
});

schema.core.isa.cljs$core$IFn$_invoke$arity$1 = (function (parent){
return (new schema.core.Isa(null,parent,null,null,null));
});

schema.core.isa.cljs$core$IFn$_invoke$arity$2 = (function (h,parent){
return (new schema.core.Isa(h,parent,null,null,null));
});

schema.core.isa.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.EnumSchema = (function (vs,__meta,__extmap,__hash){
this.vs = vs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.EnumSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19827,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19829 = (((k19827 instanceof cljs.core.Keyword))?k19827.fqn:null);
switch (G__19829) {
case "vs":
return self__.vs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19827,else__17388__auto__);

}
});

schema.core.EnumSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.EnumSchema{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IIterable$ = true;

schema.core.EnumSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19826){
var self__ = this;
var G__19826__$1 = this;
return (new cljs.core.RecordIter((0),G__19826__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vs","vs",-2022097090)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.EnumSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.EnumSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.EnumSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.EnumSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vs","vs",-2022097090),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19826){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19830 = cljs.core.keyword_identical_QMARK_;
var expr__19831 = k__17393__auto__;
if(cljs.core.truth_(pred__19830.call(null,new cljs.core.Keyword(null,"vs","vs",-2022097090),expr__19831))){
return (new schema.core.EnumSchema(G__19826,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.EnumSchema(self__.vs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19826),null));
}
});

schema.core.EnumSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vs","vs",-2022097090),self__.vs],null))], null),self__.__extmap));
});

schema.core.EnumSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19826){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.EnumSchema(self__.vs,G__19826,self__.__extmap,self__.__hash));
});

schema.core.EnumSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.EnumSchema.prototype.schema$core$Schema$ = true;

schema.core.EnumSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__19824_SHARP_){
return cljs.core.contains_QMARK_.call(null,self__.vs,p1__19824_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19825_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19825_SHARP_),self__.vs);
});})(this$__$1))
));
});

schema.core.EnumSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"enum","enum",-975417337,null),self__.vs);
});

schema.core.EnumSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vs","vs",-381565563,null)], null);
});

schema.core.EnumSchema.cljs$lang$type = true;

schema.core.EnumSchema.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/EnumSchema");
});

schema.core.EnumSchema.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/EnumSchema");
});

schema.core.__GT_EnumSchema = (function schema$core$__GT_EnumSchema(vs){
return (new schema.core.EnumSchema(vs,null,null,null));
});

schema.core.map__GT_EnumSchema = (function schema$core$map__GT_EnumSchema(G__19828){
return (new schema.core.EnumSchema(new cljs.core.Keyword(null,"vs","vs",-2022097090).cljs$core$IFn$_invoke$arity$1(G__19828),null,cljs.core.dissoc.call(null,G__19828,new cljs.core.Keyword(null,"vs","vs",-2022097090)),null));
});

/**
 * A value that must be = to some element of vs.
 */
schema.core.enum$ = (function schema$core$enum(var_args){
var args__17836__auto__ = [];
var len__17829__auto___19835 = arguments.length;
var i__17830__auto___19836 = (0);
while(true){
if((i__17830__auto___19836 < len__17829__auto___19835)){
args__17836__auto__.push((arguments[i__17830__auto___19836]));

var G__19837 = (i__17830__auto___19836 + (1));
i__17830__auto___19836 = G__19837;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic = (function (vs){
return (new schema.core.EnumSchema(cljs.core.set.call(null,vs),null,null,null));
});

schema.core.enum$.cljs$lang$maxFixedArity = (0);

schema.core.enum$.cljs$lang$applyTo = (function (seq19834){
return schema.core.enum$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19834));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Predicate = (function (p_QMARK_,pred_name,__meta,__extmap,__hash){
this.p_QMARK_ = p_QMARK_;
this.pred_name = pred_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19840,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19842 = (((k19840 instanceof cljs.core.Keyword))?k19840.fqn:null);
switch (G__19842) {
case "p?":
return self__.p_QMARK_;

break;
case "pred-name":
return self__.pred_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19840,else__17388__auto__);

}
});

schema.core.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.Predicate{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IIterable$ = true;

schema.core.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19839){
var self__ = this;
var G__19839__$1 = this;
return (new cljs.core.RecordIter((0),G__19839__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),null,new cljs.core.Keyword(null,"p?","p?",-1172161701),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19839){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19843 = cljs.core.keyword_identical_QMARK_;
var expr__19844 = k__17393__auto__;
if(cljs.core.truth_(pred__19843.call(null,new cljs.core.Keyword(null,"p?","p?",-1172161701),expr__19844))){
return (new schema.core.Predicate(G__19839,self__.pred_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19843.call(null,new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),expr__19844))){
return (new schema.core.Predicate(self__.p_QMARK_,G__19839,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19839),null));
}
}
});

schema.core.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p?","p?",-1172161701),self__.p_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred-name","pred-name",-3677451),self__.pred_name],null))], null),self__.__extmap));
});

schema.core.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19839){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.Predicate(self__.p_QMARK_,self__.pred_name,G__19839,self__.__extmap,self__.__hash));
});

schema.core.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.Predicate.prototype.schema$core$Schema$ = true;

schema.core.Predicate.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,self__.p_QMARK_,((function (this$__$1){
return (function (p1__19838_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19838_SHARP_),self__.pred_name);
});})(this$__$1))
));
});

schema.core.Predicate.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.integer_QMARK_)){
return new cljs.core.Symbol(null,"Int","Int",-2116888740,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.keyword_QMARK_)){
return new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.symbol_QMARK_)){
return new cljs.core.Symbol(null,"Symbol","Symbol",716452869,null);
} else {
if(cljs.core._EQ_.call(null,self__.p_QMARK_,cljs.core.string_QMARK_)){
return new cljs.core.Symbol(null,"Str","Str",907970895,null);
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.pred_name),new cljs.core.Symbol(null,"pred","pred",-727012372,null));

}
}
}
}
});

schema.core.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p?","p?",468369826,null),new cljs.core.Symbol(null,"pred-name","pred-name",1636854076,null)], null);
});

schema.core.Predicate.cljs$lang$type = true;

schema.core.Predicate.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Predicate");
});

schema.core.Predicate.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/Predicate");
});

schema.core.__GT_Predicate = (function schema$core$__GT_Predicate(p_QMARK_,pred_name){
return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.map__GT_Predicate = (function schema$core$map__GT_Predicate(G__19841){
return (new schema.core.Predicate(new cljs.core.Keyword(null,"p?","p?",-1172161701).cljs$core$IFn$_invoke$arity$1(G__19841),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451).cljs$core$IFn$_invoke$arity$1(G__19841),null,cljs.core.dissoc.call(null,G__19841,new cljs.core.Keyword(null,"p?","p?",-1172161701),new cljs.core.Keyword(null,"pred-name","pred-name",-3677451)),null));
});

/**
 * A value for which p? returns true (and does not throw).
 * Optional pred-name can be passed for nicer validation errors.
 */
schema.core.pred = (function schema$core$pred(var_args){
var args19847 = [];
var len__17829__auto___19850 = arguments.length;
var i__17830__auto___19851 = (0);
while(true){
if((i__17830__auto___19851 < len__17829__auto___19850)){
args19847.push((arguments[i__17830__auto___19851]));

var G__19852 = (i__17830__auto___19851 + (1));
i__17830__auto___19851 = G__19852;
continue;
} else {
}
break;
}

var G__19849 = args19847.length;
switch (G__19849) {
case 1:
return schema.core.pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schema.core.pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19847.length)].join('')));

}
});

schema.core.pred.cljs$core$IFn$_invoke$arity$1 = (function (p_QMARK_){
return schema.core.pred.call(null,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
});

schema.core.pred.cljs$core$IFn$_invoke$arity$2 = (function (p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Predicate(p_QMARK_,pred_name,null,null,null));
});

schema.core.pred.cljs$lang$maxFixedArity = 2;
schema.core.protocol_name = (function schema$core$protocol_name(protocol){
return new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,protocol));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Protocol = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.Protocol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19857,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19859 = (((k19857 instanceof cljs.core.Keyword))?k19857.fqn:null);
switch (G__19859) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19857,else__17388__auto__);

}
});

schema.core.Protocol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.Protocol{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IIterable$ = true;

schema.core.Protocol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19856){
var self__ = this;
var G__19856__$1 = this;
return (new cljs.core.RecordIter((0),G__19856__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Protocol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.Protocol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.Protocol(self__.p,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.Protocol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Protocol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.Protocol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19856){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19860 = cljs.core.keyword_identical_QMARK_;
var expr__19861 = k__17393__auto__;
if(cljs.core.truth_(pred__19860.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__19861))){
return (new schema.core.Protocol(G__19856,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Protocol(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19856),null));
}
});

schema.core.Protocol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
});

schema.core.Protocol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19856){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.Protocol(self__.p,G__19856,self__.__extmap,self__.__hash));
});

schema.core.Protocol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.Protocol.prototype.schema$core$Schema$ = true;

schema.core.Protocol.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__19854_SHARP_){
return new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)).call(null,p1__19854_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19855_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19855_SHARP_),schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null));
});})(this$__$1))
));
});

schema.core.Protocol.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.protocol_name.call(null,this$__$1)),new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null));
});

schema.core.Protocol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
});

schema.core.Protocol.cljs$lang$type = true;

schema.core.Protocol.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Protocol");
});

schema.core.Protocol.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/Protocol");
});

schema.core.__GT_Protocol = (function schema$core$__GT_Protocol(p){
return (new schema.core.Protocol(p,null,null,null));
});

schema.core.map__GT_Protocol = (function schema$core$map__GT_Protocol(G__19858){
return (new schema.core.Protocol(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__19858),null,cljs.core.dissoc.call(null,G__19858,new cljs.core.Keyword(null,"p","p",151049309)),null));
});

RegExp.prototype.schema$core$Schema$ = true;

RegExp.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,cljs.core.some_fn.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.string_QMARK_,((function (this$__$1){
return (function (p1__18426__18427__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__18426__18427__auto__),new cljs.core.Symbol(null,"string?","string?",-1129175764,null));
});})(this$__$1))
),schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__19864_SHARP_){
return cljs.core.re_find.call(null,this$__$1,p1__19864_SHARP_);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19865_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19865_SHARP_),schema.core.explain.call(null,this$__$1)),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null));
});})(this$__$1))
)));
});

RegExp.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.symbol.call(null,[cljs.core.str("#\""),cljs.core.str([cljs.core.str(this$__$1)].join('').slice((1),(-1))),cljs.core.str("\"")].join(''));
});
/**
 * Satisfied only by String.
 * Is (pred string?) and not js/String in cljs because of keywords.
 */
schema.core.Str = schema.core.pred.call(null,cljs.core.string_QMARK_);
/**
 * Boolean true or false
 */
schema.core.Bool = Boolean;
/**
 * Any number
 */
schema.core.Num = Number;
/**
 * Any integral number
 */
schema.core.Int = schema.core.pred.call(null,cljs.core.integer_QMARK_);
/**
 * A keyword
 */
schema.core.Keyword = schema.core.pred.call(null,cljs.core.keyword_QMARK_);
/**
 * A symbol
 */
schema.core.Symbol = schema.core.pred.call(null,cljs.core.symbol_QMARK_);
/**
 * A regular expression
 */
schema.core.Regex = (function (){
if(typeof schema.core.t_schema$core19868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {schema.core.Schema}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
schema.core.t_schema$core19868 = (function (meta19869){
this.meta19869 = meta19869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.core.t_schema$core19868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19870,meta19869__$1){
var self__ = this;
var _19870__$1 = this;
return (new schema.core.t_schema$core19868(meta19869__$1));
});

schema.core.t_schema$core19868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19870){
var self__ = this;
var _19870__$1 = this;
return self__.meta19869;
});

schema.core.t_schema$core19868.prototype.schema$core$Schema$ = true;

schema.core.t_schema$core19868.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__19866_SHARP_){
return (p1__19866_SHARP_ instanceof RegExp);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__19867_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19867_SHARP_),new cljs.core.Symbol("js","RegExp","js/RegExp",1778210562,null)),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
));
});

schema.core.t_schema$core19868.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Symbol(null,"Regex","Regex",205914413,null);
});

schema.core.t_schema$core19868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta19869","meta19869",-1012532448,null)], null);
});

schema.core.t_schema$core19868.cljs$lang$type = true;

schema.core.t_schema$core19868.cljs$lang$ctorStr = "schema.core/t_schema$core19868";

schema.core.t_schema$core19868.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"schema.core/t_schema$core19868");
});

schema.core.__GT_t_schema$core19868 = (function schema$core$__GT_t_schema$core19868(meta19869){
return (new schema.core.t_schema$core19868(meta19869));
});

}

return (new schema.core.t_schema$core19868(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * The local representation of #inst ...
 */
schema.core.Inst = Date;
/**
 * The local representation of #uuid ...
 */
schema.core.Uuid = cljs.core.UUID;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Maybe = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19872,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19874 = (((k19872 instanceof cljs.core.Keyword))?k19872.fqn:null);
switch (G__19874) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19872,else__17388__auto__);

}
});

schema.core.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.Maybe{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IIterable$ = true;

schema.core.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19871){
var self__ = this;
var G__19871__$1 = this;
return (new cljs.core.RecordIter((0),G__19871__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19871){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19875 = cljs.core.keyword_identical_QMARK_;
var expr__19876 = k__17393__auto__;
if(cljs.core.truth_(pred__19875.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__19876))){
return (new schema.core.Maybe(G__19871,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Maybe(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19871),null));
}
});

schema.core.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19871){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.Maybe(self__.schema,G__19871,self__.__extmap,self__.__hash));
});

schema.core.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.Maybe.prototype.schema$core$Schema$ = true;

schema.core.Maybe.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema.core.eq.call(null,null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null));
});

schema.core.Maybe.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"maybe","maybe",1326133967,null));
});

schema.core.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Maybe.cljs$lang$type = true;

schema.core.Maybe.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Maybe");
});

schema.core.Maybe.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/Maybe");
});

schema.core.__GT_Maybe = (function schema$core$__GT_Maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

schema.core.map__GT_Maybe = (function schema$core$map__GT_Maybe(G__19873){
return (new schema.core.Maybe(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__19873),null,cljs.core.dissoc.call(null,G__19873,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * A value that must either be nil or satisfy schema
 */
schema.core.maybe = (function schema$core$maybe(schema__$1){
return (new schema.core.Maybe(schema__$1,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.NamedSchema = (function (schema,name,__meta,__extmap,__hash){
this.schema = schema;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.NamedSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19881,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19883 = (((k19881 instanceof cljs.core.Keyword))?k19881.fqn:null);
switch (G__19883) {
case "schema":
return self__.schema;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19881,else__17388__auto__);

}
});

schema.core.NamedSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.NamedSchema{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IIterable$ = true;

schema.core.NamedSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19880){
var self__ = this;
var G__19880__$1 = this;
return (new cljs.core.RecordIter((0),G__19880__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.NamedSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.NamedSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.NamedSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.NamedSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.NamedSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19880){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19884 = cljs.core.keyword_identical_QMARK_;
var expr__19885 = k__17393__auto__;
if(cljs.core.truth_(pred__19884.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__19885))){
return (new schema.core.NamedSchema(G__19880,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19884.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__19885))){
return (new schema.core.NamedSchema(self__.schema,G__19880,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.NamedSchema(self__.schema,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19880),null));
}
}
});

schema.core.NamedSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.NamedSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19880){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.NamedSchema(self__.schema,self__.name,G__19880,self__.__extmap,self__.__hash));
});

schema.core.NamedSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.NamedSchema.prototype.schema$core$Schema$ = true;

schema.core.NamedSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema,new cljs.core.Keyword(null,"wrap-error","wrap-error",536732809),((function (this$__$1){
return (function (p1__19879_SHARP_){
return schema.utils.__GT_NamedError.call(null,self__.name,p1__19879_SHARP_);
});})(this$__$1))
], null)], null));
});

schema.core.NamedSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

schema.core.NamedSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.NamedSchema.cljs$lang$type = true;

schema.core.NamedSchema.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/NamedSchema");
});

schema.core.NamedSchema.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/NamedSchema");
});

schema.core.__GT_NamedSchema = (function schema$core$__GT_NamedSchema(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

schema.core.map__GT_NamedSchema = (function schema$core$map__GT_NamedSchema(G__19882){
return (new schema.core.NamedSchema(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__19882),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__19882),null,cljs.core.dissoc.call(null,G__19882,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A value that must satisfy schema, and has a name for documentation purposes.
 */
schema.core.named = (function schema$core$named(schema__$1,name){
return (new schema.core.NamedSchema(schema__$1,name,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Either = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.Either.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19890,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19892 = (((k19890 instanceof cljs.core.Keyword))?k19890.fqn:null);
switch (G__19892) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19890,else__17388__auto__);

}
});

schema.core.Either.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.Either{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IIterable$ = true;

schema.core.Either.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19889){
var self__ = this;
var G__19889__$1 = this;
return (new cljs.core.RecordIter((0),G__19889__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Either.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.Either.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.Either(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.Either.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Either.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.Either.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19889){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19893 = cljs.core.keyword_identical_QMARK_;
var expr__19894 = k__17393__auto__;
if(cljs.core.truth_(pred__19893.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__19894))){
return (new schema.core.Either(G__19889,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Either(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19889),null));
}
});

schema.core.Either.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Either.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19889){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.Either(self__.schemas,G__19889,self__.__extmap,self__.__hash));
});

schema.core.Either.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.Either.prototype.schema$core$Schema$ = true;

schema.core.Either.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__17543__auto__ = ((function (this$__$1){
return (function schema$core$iter__19896(s__19897){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__19897__$1 = s__19897;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19897__$1);
if(temp__4425__auto__){
var s__19897__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19897__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__19897__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__19899 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__19898 = (0);
while(true){
if((i__19898 < size__17542__auto__)){
var s = cljs.core._nth.call(null,c__17541__auto__,i__19898);
cljs.core.chunk_append.call(null,b__19899,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__19901 = (i__19898 + (1));
i__19898 = G__19901;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19899),schema$core$iter__19896.call(null,cljs.core.chunk_rest.call(null,s__19897__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19899),null);
}
} else {
var s = cljs.core.first.call(null,s__19897__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),cljs.core.complement.call(null,schema.core.checker.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__19896.call(null,cljs.core.rest.call(null,s__19897__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__17543__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__19888_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19888_SHARP_),new cljs.core.Symbol(null,"some-matching-either-clause?","some-matching-either-clause?",-1443305015,null));
});})(this$__$1))
);
});

schema.core.Either.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"either","either",-2144373018,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Either.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Either.cljs$lang$type = true;

schema.core.Either.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Either");
});

schema.core.Either.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/Either");
});

schema.core.__GT_Either = (function schema$core$__GT_Either(schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.map__GT_Either = (function schema$core$map__GT_Either(G__19891){
return (new schema.core.Either(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__19891),null,cljs.core.dissoc.call(null,G__19891,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy at least one schema in schemas.
 * Note that `either` does not work properly with coercion
 * 
 * DEPRECATED: prefer `cond-pre`
 * 
 * WARNING: either does not work with coercion.  It is also slow and gives
 * bad error messages.  Please consider using `conditional` and friends
 * instead; they are more efficient, provide better error messages,
 * and work with coercion.
 */
schema.core.either = (function schema$core$either(var_args){
var args__17836__auto__ = [];
var len__17829__auto___19903 = arguments.length;
var i__17830__auto___19904 = (0);
while(true){
if((i__17830__auto___19904 < len__17829__auto___19903)){
args__17836__auto__.push((arguments[i__17830__auto___19904]));

var G__19905 = (i__17830__auto___19904 + (1));
i__17830__auto___19904 = G__19905;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

schema.core.either.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Either(schemas,null,null,null));
});

schema.core.either.cljs$lang$maxFixedArity = (0);

schema.core.either.cljs$lang$applyTo = (function (seq19902){
return schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19902));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.ConditionalSchema = (function (preds_and_schemas,error_symbol,__meta,__extmap,__hash){
this.preds_and_schemas = preds_and_schemas;
this.error_symbol = error_symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.ConditionalSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19908,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19910 = (((k19908 instanceof cljs.core.Keyword))?k19908.fqn:null);
switch (G__19910) {
case "preds-and-schemas":
return self__.preds_and_schemas;

break;
case "error-symbol":
return self__.error_symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19908,else__17388__auto__);

}
});

schema.core.ConditionalSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.ConditionalSchema{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$ = true;

schema.core.ConditionalSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19907){
var self__ = this;
var G__19907__$1 = this;
return (new cljs.core.RecordIter((0),G__19907__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.ConditionalSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.ConditionalSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.ConditionalSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19907){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19911 = cljs.core.keyword_identical_QMARK_;
var expr__19912 = k__17393__auto__;
if(cljs.core.truth_(pred__19911.call(null,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),expr__19912))){
return (new schema.core.ConditionalSchema(G__19907,self__.error_symbol,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19911.call(null,new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),expr__19912))){
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,G__19907,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19907),null));
}
}
});

schema.core.ConditionalSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),self__.preds_and_schemas],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428),self__.error_symbol],null))], null),self__.__extmap));
});

schema.core.ConditionalSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19907){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.ConditionalSchema(self__.preds_and_schemas,self__.error_symbol,G__19907,self__.__extmap,self__.__hash));
});

schema.core.ConditionalSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$ = true;

schema.core.ConditionalSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__17543__auto__ = ((function (this$__$1){
return (function schema$core$iter__19914(s__19915){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__19915__$1 = s__19915;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19915__$1);
if(temp__4425__auto__){
var s__19915__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19915__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__19915__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__19917 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__19916 = (0);
while(true){
if((i__19916 < size__17542__auto__)){
var vec__19920 = cljs.core._nth.call(null,c__17541__auto__,i__19916);
var p = cljs.core.nth.call(null,vec__19920,(0),null);
var s = cljs.core.nth.call(null,vec__19920,(1),null);
cljs.core.chunk_append.call(null,b__19917,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__19925 = (i__19916 + (1));
i__19916 = G__19925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19917),schema$core$iter__19914.call(null,cljs.core.chunk_rest.call(null,s__19915__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19917),null);
}
} else {
var vec__19921 = cljs.core.first.call(null,s__19915__$2);
var p = cljs.core.nth.call(null,vec__19921,(0),null);
var s = cljs.core.nth.call(null,vec__19921,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),p,new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__19914.call(null,cljs.core.rest.call(null,s__19915__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__17543__auto__.call(null,self__.preds_and_schemas);
})(),((function (this$__$1){
return (function (p1__19906_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19906_SHARP_),(function (){var or__16771__auto__ = self__.error_symbol;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,self__.preds_and_schemas))){
return cljs.core.symbol.call(null,schema.utils.fn_name.call(null,cljs.core.ffirst.call(null,self__.preds_and_schemas)));
} else {
return new cljs.core.Symbol(null,"some-matching-condition?","some-matching-condition?",1512398506,null);
}
}
})());
});})(this$__$1))
);
});

schema.core.ConditionalSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"conditional","conditional",-1212542970,null),cljs.core.concat.call(null,cljs.core.mapcat.call(null,((function (this$__$1){
return (function (p__19922){
var vec__19923 = p__19922;
var pred = cljs.core.nth.call(null,vec__19923,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__19923,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,schema.utils.fn_name.call(null,pred)),schema.core.explain.call(null,schema__$1)], null);
});})(this$__$1))
,self__.preds_and_schemas),(cljs.core.truth_(self__.error_symbol)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.error_symbol], null):null)));
});

schema.core.ConditionalSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"preds-and-schemas","preds-and-schemas",333765172,null),new cljs.core.Symbol(null,"error-symbol","error-symbol",817051099,null)], null);
});

schema.core.ConditionalSchema.cljs$lang$type = true;

schema.core.ConditionalSchema.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/ConditionalSchema");
});

schema.core.ConditionalSchema.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/ConditionalSchema");
});

schema.core.__GT_ConditionalSchema = (function schema$core$__GT_ConditionalSchema(preds_and_schemas,error_symbol){
return (new schema.core.ConditionalSchema(preds_and_schemas,error_symbol,null,null,null));
});

schema.core.map__GT_ConditionalSchema = (function schema$core$map__GT_ConditionalSchema(G__19909){
return (new schema.core.ConditionalSchema(new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355).cljs$core$IFn$_invoke$arity$1(G__19909),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428).cljs$core$IFn$_invoke$arity$1(G__19909),null,cljs.core.dissoc.call(null,G__19909,new cljs.core.Keyword(null,"preds-and-schemas","preds-and-schemas",-1306766355),new cljs.core.Keyword(null,"error-symbol","error-symbol",-823480428)),null));
});

/**
 * Define a conditional schema.  Takes args like cond,
 * (conditional pred1 schema1 pred2 schema2 ...),
 * and checks the first schema where pred is true on the value.
 * Unlike cond, throws if the value does not match any condition.
 * :else may be used as a final condition in the place of (constantly true).
 * More efficient than either, since only one schema must be checked.
 * An optional final argument can be passed, a symbol to appear in
 * error messages when none of the conditions match.
 */
schema.core.conditional = (function schema$core$conditional(var_args){
var args__17836__auto__ = [];
var len__17829__auto___19935 = arguments.length;
var i__17830__auto___19936 = (0);
while(true){
if((i__17830__auto___19936 < len__17829__auto___19935)){
args__17836__auto__.push((arguments[i__17830__auto___19936]));

var G__19937 = (i__17830__auto___19936 + (1));
i__17830__auto___19936 = G__19937;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic = (function (preds_and_schemas){
if((cljs.core.seq.call(null,preds_and_schemas)) && ((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas))) || ((cljs.core.last.call(null,preds_and_schemas) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected even, nonzero number of args (with optional trailing symbol); got %s",cljs.core.count.call(null,preds_and_schemas))));
}

return (new schema.core.ConditionalSchema((function (){var iter__17543__auto__ = (function schema$core$iter__19927(s__19928){
return (new cljs.core.LazySeq(null,(function (){
var s__19928__$1 = s__19928;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19928__$1);
if(temp__4425__auto__){
var s__19928__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19928__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__19928__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__19930 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__19929 = (0);
while(true){
if((i__19929 < size__17542__auto__)){
var vec__19933 = cljs.core._nth.call(null,c__17541__auto__,i__19929);
var pred = cljs.core.nth.call(null,vec__19933,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__19933,(1),null);
cljs.core.chunk_append.call(null,b__19930,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null));

var G__19938 = (i__19929 + (1));
i__19929 = G__19938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19930),schema$core$iter__19927.call(null,cljs.core.chunk_rest.call(null,s__19928__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19930),null);
}
} else {
var vec__19934 = cljs.core.first.call(null,s__19928__$2);
var pred = cljs.core.nth.call(null,vec__19934,(0),null);
var schema__$1 = cljs.core.nth.call(null,vec__19934,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,pred,new cljs.core.Keyword(null,"else","else",-1508377146)))?cljs.core.constantly.call(null,true):pred),schema__$1], null),schema$core$iter__19927.call(null,cljs.core.rest.call(null,s__19928__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17543__auto__.call(null,cljs.core.partition.call(null,(2),preds_and_schemas));
})(),((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,preds_and_schemas)))?cljs.core.last.call(null,preds_and_schemas):null),null,null,null));
});

schema.core.conditional.cljs$lang$maxFixedArity = (0);

schema.core.conditional.cljs$lang$applyTo = (function (seq19926){
return schema.core.conditional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19926));
});

/**
 * @interface
 */
schema.core.HasPrecondition = function(){};

/**
 * Return a predicate representing the Precondition for this schema:
 *   the predicate returns true if the precondition is satisfied.
 *   (See spec.core for more details)
 */
schema.core.precondition = (function schema$core$precondition(this$){
if((!((this$ == null))) && (!((this$.schema$core$HasPrecondition$precondition$arity$1 == null)))){
return this$.schema$core$HasPrecondition$precondition$arity$1(this$);
} else {
var x__17426__auto__ = (((this$ == null))?null:this$);
var m__17427__auto__ = (schema.core.precondition[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,this$);
} else {
var m__17427__auto____$1 = (schema.core.precondition["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"HasPrecondition.precondition",this$);
}
}
}
});

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.leaf.LeafSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.variant.VariantSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.every_pred.call(null,cljs.core.complement.call(null,this$__$1.pre),cljs.core.apply.call(null,cljs.core.some_fn,(function (){var iter__17543__auto__ = ((function (this$__$1){
return (function schema$core$iter__19939(s__19940){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__19940__$1 = s__19940;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19940__$1);
if(temp__4425__auto__){
var s__19940__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19940__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__19940__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__19942 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__19941 = (0);
while(true){
if((i__19941 < size__17542__auto__)){
var map__19947 = cljs.core._nth.call(null,c__17541__auto__,i__19941);
var map__19947__$1 = ((((!((map__19947 == null)))?((((map__19947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19947):map__19947);
var guard = cljs.core.get.call(null,map__19947__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__19947__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
cljs.core.chunk_append.call(null,b__19942,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))));

var G__19951 = (i__19941 + (1));
i__19941 = G__19951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19942),schema$core$iter__19939.call(null,cljs.core.chunk_rest.call(null,s__19940__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19942),null);
}
} else {
var map__19949 = cljs.core.first.call(null,s__19940__$2);
var map__19949__$1 = ((((!((map__19949 == null)))?((((map__19949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19949):map__19949);
var guard = cljs.core.get.call(null,map__19949__$1,new cljs.core.Keyword(null,"guard","guard",-873147811));
var schema__$1 = cljs.core.get.call(null,map__19949__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return cljs.core.cons.call(null,(cljs.core.truth_(guard)?cljs.core.every_pred.call(null,guard,schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))):schema.core.precondition.call(null,schema.core.spec.call(null,schema__$1))),schema$core$iter__19939.call(null,cljs.core.rest.call(null,s__19940__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__17543__auto__.call(null,this$__$1.options);
})()));
});

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$ = true;

schema.spec.collection.CollectionSpec.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.complement.call(null,this$__$1.pre);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.CondPre = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.CondPre.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19954,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19956 = (((k19954 instanceof cljs.core.Keyword))?k19954.fqn:null);
switch (G__19956) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19954,else__17388__auto__);

}
});

schema.core.CondPre.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.CondPre{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IIterable$ = true;

schema.core.CondPre.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19953){
var self__ = this;
var G__19953__$1 = this;
return (new cljs.core.RecordIter((0),G__19953__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.CondPre.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.CondPre.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.CondPre.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.CondPre.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.CondPre.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19953){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19957 = cljs.core.keyword_identical_QMARK_;
var expr__19958 = k__17393__auto__;
if(cljs.core.truth_(pred__19957.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__19958))){
return (new schema.core.CondPre(G__19953,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.CondPre(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19953),null));
}
});

schema.core.CondPre.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.CondPre.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19953){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.CondPre(self__.schemas,G__19953,self__.__extmap,self__.__hash));
});

schema.core.CondPre.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.CondPre.prototype.schema$core$Schema$ = true;

schema.core.CondPre.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,(function (){var iter__17543__auto__ = ((function (this$__$1){
return (function schema$core$iter__19960(s__19961){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__19961__$1 = s__19961;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__19961__$1);
if(temp__4425__auto__){
var s__19961__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19961__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__19961__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__19963 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__19962 = (0);
while(true){
if((i__19962 < size__17542__auto__)){
var s = cljs.core._nth.call(null,c__17541__auto__,i__19962);
cljs.core.chunk_append.call(null,b__19963,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null));

var G__19965 = (i__19962 + (1));
i__19962 = G__19965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19963),schema$core$iter__19960.call(null,cljs.core.chunk_rest.call(null,s__19961__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19963),null);
}
} else {
var s = cljs.core.first.call(null,s__19961__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"guard","guard",-873147811),schema.core.precondition.call(null,schema.core.spec.call(null,s)),new cljs.core.Keyword(null,"schema","schema",-1582001791),s], null),schema$core$iter__19960.call(null,cljs.core.rest.call(null,s__19961__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__17543__auto__.call(null,self__.schemas);
})(),((function (this$__$1){
return (function (p1__19952_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19952_SHARP_),new cljs.core.Symbol(null,"matches-some-precondition?","matches-some-precondition?",2123072832,null));
});})(this$__$1))
);
});

schema.core.CondPre.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"cond-pre","cond-pre",-923707731,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.CondPre.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.CondPre.cljs$lang$type = true;

schema.core.CondPre.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/CondPre");
});

schema.core.CondPre.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/CondPre");
});

schema.core.__GT_CondPre = (function schema$core$__GT_CondPre(schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.map__GT_CondPre = (function schema$core$map__GT_CondPre(G__19955){
return (new schema.core.CondPre(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__19955),null,cljs.core.dissoc.call(null,G__19955,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A replacement for `either` that constructs a conditional schema
 * based on the schema spec preconditions of the component schemas.
 * 
 * EXPERIMENTAL
 */
schema.core.cond_pre = (function schema$core$cond_pre(var_args){
var args__17836__auto__ = [];
var len__17829__auto___19967 = arguments.length;
var i__17830__auto___19968 = (0);
while(true){
if((i__17830__auto___19968 < len__17829__auto___19967)){
args__17836__auto__.push((arguments[i__17830__auto___19968]));

var G__19969 = (i__17830__auto___19968 + (1));
i__17830__auto___19968 = G__19969;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.CondPre(schemas,null,null,null));
});

schema.core.cond_pre.cljs$lang$maxFixedArity = (0);

schema.core.cond_pre.cljs$lang$applyTo = (function (seq19966){
return schema.core.cond_pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19966));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Constrained = (function (schema,postcondition,post_name,__meta,__extmap,__hash){
this.schema = schema;
this.postcondition = postcondition;
this.post_name = post_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.Constrained.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19972,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19974 = (((k19972 instanceof cljs.core.Keyword))?k19972.fqn:null);
switch (G__19974) {
case "schema":
return self__.schema;

break;
case "postcondition":
return self__.postcondition;

break;
case "post-name":
return self__.post_name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19972,else__17388__auto__);

}
});

schema.core.Constrained.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.Constrained{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IIterable$ = true;

schema.core.Constrained.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19971){
var self__ = this;
var G__19971__$1 = this;
return (new cljs.core.RecordIter((0),G__19971__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Constrained.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.Constrained.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.Constrained.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Constrained.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"post-name","post-name",491455269),null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.Constrained.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19971){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19975 = cljs.core.keyword_identical_QMARK_;
var expr__19976 = k__17393__auto__;
if(cljs.core.truth_(pred__19975.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__19976))){
return (new schema.core.Constrained(G__19971,self__.postcondition,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19975.call(null,new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),expr__19976))){
return (new schema.core.Constrained(self__.schema,G__19971,self__.post_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19975.call(null,new cljs.core.Keyword(null,"post-name","post-name",491455269),expr__19976))){
return (new schema.core.Constrained(self__.schema,self__.postcondition,G__19971,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19971),null));
}
}
}
});

schema.core.Constrained.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),self__.postcondition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"post-name","post-name",491455269),self__.post_name],null))], null),self__.__extmap));
});

schema.core.Constrained.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19971){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.Constrained(self__.schema,self__.postcondition,self__.post_name,G__19971,self__.__extmap,self__.__hash));
});

schema.core.Constrained.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.Constrained.prototype.schema$core$Schema$ = true;

schema.core.Constrained.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema], null)], null),null,schema.spec.core.precondition.call(null,this$__$1,self__.postcondition,((function (this$__$1){
return (function (p1__19970_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__19970_SHARP_),self__.post_name);
});})(this$__$1))
));
});

schema.core.Constrained.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,self__.post_name),schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"constrained","constrained",-2057147788,null));
});

schema.core.Constrained.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"postcondition","postcondition",903430305,null),new cljs.core.Symbol(null,"post-name","post-name",2131986796,null)], null);
});

schema.core.Constrained.cljs$lang$type = true;

schema.core.Constrained.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Constrained");
});

schema.core.Constrained.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/Constrained");
});

schema.core.__GT_Constrained = (function schema$core$__GT_Constrained(schema__$1,postcondition,post_name){
return (new schema.core.Constrained(schema__$1,postcondition,post_name,null,null,null));
});

schema.core.map__GT_Constrained = (function schema$core$map__GT_Constrained(G__19973){
return (new schema.core.Constrained(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__19973),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222).cljs$core$IFn$_invoke$arity$1(G__19973),new cljs.core.Keyword(null,"post-name","post-name",491455269).cljs$core$IFn$_invoke$arity$1(G__19973),null,cljs.core.dissoc.call(null,G__19973,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"postcondition","postcondition",-737101222),new cljs.core.Keyword(null,"post-name","post-name",491455269)),null));
});

/**
 * A schema with an additional post-condition.  Differs from `conditional`
 * with a single schema, in that the predicate checked *after* the main
 * schema.  This can lead to better error messages, and is often better
 * suited for coercion.
 */
schema.core.constrained = (function schema$core$constrained(var_args){
var args19979 = [];
var len__17829__auto___19982 = arguments.length;
var i__17830__auto___19983 = (0);
while(true){
if((i__17830__auto___19983 < len__17829__auto___19982)){
args19979.push((arguments[i__17830__auto___19983]));

var G__19984 = (i__17830__auto___19983 + (1));
i__17830__auto___19983 = G__19984;
continue;
} else {
}
break;
}

var G__19981 = args19979.length;
switch (G__19981) {
case 2:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return schema.core.constrained.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19979.length)].join('')));

}
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$2 = (function (s,p_QMARK_){
return schema.core.constrained.call(null,s,p_QMARK_,cljs.core.symbol.call(null,schema.utils.fn_name.call(null,p_QMARK_)));
});

schema.core.constrained.cljs$core$IFn$_invoke$arity$3 = (function (s,p_QMARK_,pred_name){
if(cljs.core.ifn_QMARK_.call(null,p_QMARK_)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not a function: %s",p_QMARK_)));
}

return (new schema.core.Constrained(s,p_QMARK_,pred_name,null,null,null));
});

schema.core.constrained.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {schema.core.HasPrecondition}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {schema.spec.core.CoreSpec}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Both = (function (schemas,__meta,__extmap,__hash){
this.schemas = schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.Both.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k19988,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__19990 = (((k19988 instanceof cljs.core.Keyword))?k19988.fqn:null);
switch (G__19990) {
case "schemas":
return self__.schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19988,else__17388__auto__);

}
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$ = true;

schema.core.Both.prototype.schema$spec$core$CoreSpec$subschemas$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.schemas;
});

schema.core.Both.prototype.schema$spec$core$CoreSpec$checker$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce.call(null,((function (this$__$1){
return (function (f,t){
return ((function (this$__$1){
return (function (x){
var tx = t.call(null,x);
if(cljs.core.truth_(schema.utils.error_QMARK_.call(null,tx))){
return tx;
} else {
return f.call(null,(function (){var or__16771__auto__ = tx;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return x;
}
})());
}
});
;})(this$__$1))
});})(this$__$1))
,cljs.core.map.call(null,((function (this$__$1){
return (function (p1__19986_SHARP_){
return schema.spec.core.sub_checker.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),p1__19986_SHARP_], null),params);
});})(this$__$1))
,cljs.core.reverse.call(null,self__.schemas)));
});

schema.core.Both.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.Both{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IIterable$ = true;

schema.core.Both.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19987){
var self__ = this;
var G__19987__$1 = this;
return (new cljs.core.RecordIter((0),G__19987__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schemas","schemas",575070579)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Both.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.Both.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.Both(self__.schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.Both.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Both.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.Both.prototype.schema$core$HasPrecondition$ = true;

schema.core.Both.prototype.schema$core$HasPrecondition$precondition$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.apply.call(null,cljs.core.every_pred,cljs.core.map.call(null,cljs.core.comp.call(null,schema.core.precondition,schema.core.spec),self__.schemas));
});

schema.core.Both.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__19987){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__19991 = cljs.core.keyword_identical_QMARK_;
var expr__19992 = k__17393__auto__;
if(cljs.core.truth_(pred__19991.call(null,new cljs.core.Keyword(null,"schemas","schemas",575070579),expr__19992))){
return (new schema.core.Both(G__19987,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Both(self__.schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__19987),null));
}
});

schema.core.Both.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schemas","schemas",575070579),self__.schemas],null))], null),self__.__extmap));
});

schema.core.Both.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__19987){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.Both(self__.schemas,G__19987,self__.__extmap,self__.__hash));
});

schema.core.Both.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.Both.prototype.schema$core$Schema$ = true;

schema.core.Both.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1;
});

schema.core.Both.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol(null,"both","both",1246882687,null),cljs.core.map.call(null,schema.core.explain,self__.schemas));
});

schema.core.Both.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null)], null);
});

schema.core.Both.cljs$lang$type = true;

schema.core.Both.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Both");
});

schema.core.Both.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/Both");
});

schema.core.__GT_Both = (function schema$core$__GT_Both(schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.map__GT_Both = (function schema$core$map__GT_Both(G__19989){
return (new schema.core.Both(new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(G__19989),null,cljs.core.dissoc.call(null,G__19989,new cljs.core.Keyword(null,"schemas","schemas",575070579)),null));
});

/**
 * A value that must satisfy every schema in schemas.
 * 
 * DEPRECATED: prefer 'conditional' with a single condition
 * instead, or `constrained`.
 * 
 * When used with coercion, coerces each schema in sequence.
 */
schema.core.both = (function schema$core$both(var_args){
var args__17836__auto__ = [];
var len__17829__auto___19996 = arguments.length;
var i__17830__auto___19997 = (0);
while(true){
if((i__17830__auto___19997 < len__17829__auto___19996)){
args__17836__auto__.push((arguments[i__17830__auto___19997]));

var G__19998 = (i__17830__auto___19997 + (1));
i__17830__auto___19997 = G__19998;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

schema.core.both.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
return (new schema.core.Both(schemas,null,null,null));
});

schema.core.both.cljs$lang$maxFixedArity = (0);

schema.core.both.cljs$lang$applyTo = (function (seq19995){
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19995));
});
/**
 * if the predicate returns truthy, use the if-schema, otherwise use the else-schema
 */
schema.core.if$ = (function schema$core$if(pred,if_schema,else_schema){
return schema.core.conditional.call(null,pred,if_schema,cljs.core.constantly.call(null,true),else_schema);
});
schema.core.var_name = (function schema$core$var_name(v){
var map__20001 = cljs.core.meta.call(null,v);
var map__20001__$1 = ((((!((map__20001 == null)))?((((map__20001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20001):map__20001);
var ns = cljs.core.get.call(null,map__20001__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__20001__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.symbol.call(null,[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Recursive = (function (derefable,__meta,__extmap,__hash){
this.derefable = derefable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.Recursive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k20004,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__20006 = (((k20004 instanceof cljs.core.Keyword))?k20004.fqn:null);
switch (G__20006) {
case "derefable":
return self__.derefable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20004,else__17388__auto__);

}
});

schema.core.Recursive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.Recursive{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IIterable$ = true;

schema.core.Recursive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20003){
var self__ = this;
var G__20003__$1 = this;
return (new cljs.core.RecordIter((0),G__20003__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"derefable","derefable",377265868)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Recursive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.Recursive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.Recursive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Recursive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"derefable","derefable",377265868),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.Recursive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__20003){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__20007 = cljs.core.keyword_identical_QMARK_;
var expr__20008 = k__17393__auto__;
if(cljs.core.truth_(pred__20007.call(null,new cljs.core.Keyword(null,"derefable","derefable",377265868),expr__20008))){
return (new schema.core.Recursive(G__20003,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Recursive(self__.derefable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__20003),null));
}
});

schema.core.Recursive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"derefable","derefable",377265868),self__.derefable],null))], null),self__.__extmap));
});

schema.core.Recursive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__20003){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.Recursive(self__.derefable,G__20003,self__.__extmap,self__.__hash));
});

schema.core.Recursive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.Recursive.prototype.schema$core$Schema$ = true;

schema.core.Recursive.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.variant.variant_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.deref.call(null,self__.derefable)], null)], null));
});

schema.core.Recursive.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(((self__.derefable instanceof cljs.core.Var))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.var_name.call(null,self__.derefable)),new cljs.core.Symbol(null,"var","var",870848730,null)):new cljs.core.Symbol(null,"...","...",-1926939749,null))),new cljs.core.Symbol(null,"recursive","recursive",-1935549897,null));
});

schema.core.Recursive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"derefable","derefable",2017797395,null)], null);
});

schema.core.Recursive.cljs$lang$type = true;

schema.core.Recursive.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Recursive");
});

schema.core.Recursive.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/Recursive");
});

schema.core.__GT_Recursive = (function schema$core$__GT_Recursive(derefable){
return (new schema.core.Recursive(derefable,null,null,null));
});

schema.core.map__GT_Recursive = (function schema$core$map__GT_Recursive(G__20005){
return (new schema.core.Recursive(new cljs.core.Keyword(null,"derefable","derefable",377265868).cljs$core$IFn$_invoke$arity$1(G__20005),null,cljs.core.dissoc.call(null,G__20005,new cljs.core.Keyword(null,"derefable","derefable",377265868)),null));
});

/**
 * Support for (mutually) recursive schemas by passing a var that points to a schema,
 * e.g (recursive #'ExampleRecursiveSchema).
 */
schema.core.recursive = (function schema$core$recursive(schema__$1){
if(((!((schema__$1 == null)))?((((schema__$1.cljs$lang$protocol_mask$partition0$ & (32768))) || (schema__$1.cljs$core$IDeref$))?true:(((!schema__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,schema__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Not an IDeref: %s",schema__$1)));
}

return (new schema.core.Recursive(schema__$1,null,null,null));
});
schema.core.atom_QMARK_ = (function schema$core$atom_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (16384))) || (x.cljs$core$IAtom$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Atomic = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.Atomic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k20016,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__20018 = (((k20016 instanceof cljs.core.Keyword))?k20016.fqn:null);
switch (G__20018) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20016,else__17388__auto__);

}
});

schema.core.Atomic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.Atomic{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IIterable$ = true;

schema.core.Atomic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20015){
var self__ = this;
var G__20015__$1 = this;
return (new cljs.core.RecordIter((0),G__20015__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Atomic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.Atomic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.Atomic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Atomic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.Atomic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__20015){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__20019 = cljs.core.keyword_identical_QMARK_;
var expr__20020 = k__17393__auto__;
if(cljs.core.truth_(pred__20019.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__20020))){
return (new schema.core.Atomic(G__20015,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Atomic(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__20015),null));
}
});

schema.core.Atomic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Atomic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__20015){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.Atomic(self__.schema,G__20015,self__.__extmap,self__.__hash));
});

schema.core.Atomic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.Atomic.prototype.schema$core$Schema$ = true;

schema.core.Atomic.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.atom_QMARK_,((function (this$__$1){
return (function (p1__18426__18427__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__18426__18427__auto__),new cljs.core.Symbol(null,"atom?","atom?",-1007535292,null));
});})(this$__$1))
),cljs.core.atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.schema,((function (this$__$1){
return (function (item_fn,coll){
item_fn.call(null,cljs.core.deref.call(null,coll));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.atom.call(null,cljs.core.first.call(null,xs));
});})(this$__$1))
);
});

schema.core.Atomic.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"atom","atom",1243487874,null));
});

schema.core.Atomic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Atomic.cljs$lang$type = true;

schema.core.Atomic.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Atomic");
});

schema.core.Atomic.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/Atomic");
});

schema.core.__GT_Atomic = (function schema$core$__GT_Atomic(schema__$1){
return (new schema.core.Atomic(schema__$1,null,null,null));
});

schema.core.map__GT_Atomic = (function schema$core$map__GT_Atomic(G__20017){
return (new schema.core.Atomic(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__20017),null,cljs.core.dissoc.call(null,G__20017,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * An atom containing a value matching 'schema'.
 */
schema.core.atom = (function schema$core$atom(schema__$1){
return schema.core.__GT_Atomic.call(null,schema__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k20024,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__20026 = (((k20024 instanceof cljs.core.Keyword))?k20024.fqn:null);
switch (G__20026) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20024,else__17388__auto__);

}
});

schema.core.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.RequiredKey{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IIterable$ = true;

schema.core.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20023){
var self__ = this;
var G__20023__$1 = this;
return (new cljs.core.RecordIter((0),G__20023__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__20023){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__20027 = cljs.core.keyword_identical_QMARK_;
var expr__20028 = k__17393__auto__;
if(cljs.core.truth_(pred__20027.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__20028))){
return (new schema.core.RequiredKey(G__20023,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__20023),null));
}
});

schema.core.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__20023){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.RequiredKey(self__.k,G__20023,self__.__extmap,self__.__hash));
});

schema.core.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.RequiredKey.cljs$lang$type = true;

schema.core.RequiredKey.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/RequiredKey");
});

schema.core.RequiredKey.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/RequiredKey");
});

schema.core.__GT_RequiredKey = (function schema$core$__GT_RequiredKey(k){
return (new schema.core.RequiredKey(k,null,null,null));
});

schema.core.map__GT_RequiredKey = (function schema$core$map__GT_RequiredKey(G__20025){
return (new schema.core.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__20025),null,cljs.core.dissoc.call(null,G__20025,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * A required key in a map
 */
schema.core.required_key = (function schema$core$required_key(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return (new schema.core.RequiredKey(k,null,null,null));
}
});
schema.core.required_key_QMARK_ = (function schema$core$required_key_QMARK_(ks){
return ((ks instanceof cljs.core.Keyword)) || ((ks instanceof schema.core.RequiredKey));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k20032,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__20034 = (((k20032 instanceof cljs.core.Keyword))?k20032.fqn:null);
switch (G__20034) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20032,else__17388__auto__);

}
});

schema.core.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.OptionalKey{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IIterable$ = true;

schema.core.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20031){
var self__ = this;
var G__20031__$1 = this;
return (new cljs.core.RecordIter((0),G__20031__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__20031){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__20035 = cljs.core.keyword_identical_QMARK_;
var expr__20036 = k__17393__auto__;
if(cljs.core.truth_(pred__20035.call(null,new cljs.core.Keyword(null,"k","k",-2146297393),expr__20036))){
return (new schema.core.OptionalKey(G__20031,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__20031),null));
}
});

schema.core.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
});

schema.core.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__20031){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.OptionalKey(self__.k,G__20031,self__.__extmap,self__.__hash));
});

schema.core.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
});

schema.core.OptionalKey.cljs$lang$type = true;

schema.core.OptionalKey.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/OptionalKey");
});

schema.core.OptionalKey.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/OptionalKey");
});

schema.core.__GT_OptionalKey = (function schema$core$__GT_OptionalKey(k){
return (new schema.core.OptionalKey(k,null,null,null));
});

schema.core.map__GT_OptionalKey = (function schema$core$map__GT_OptionalKey(G__20033){
return (new schema.core.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__20033),null,cljs.core.dissoc.call(null,G__20033,new cljs.core.Keyword(null,"k","k",-2146297393)),null));
});

/**
 * An optional key in a map
 */
schema.core.optional_key = (function schema$core$optional_key(k){
return (new schema.core.OptionalKey(k,null,null,null));
});
schema.core.optional_key_QMARK_ = (function schema$core$optional_key_QMARK_(ks){
return (ks instanceof schema.core.OptionalKey);
});
schema.core.explicit_schema_key = (function schema$core$explicit_schema_key(ks){
if((ks instanceof cljs.core.Keyword)){
return ks;
} else {
if((ks instanceof schema.core.RequiredKey)){
return ks.k;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,ks))){
return ks.k;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Bad explicit key: %s",ks)));

}
}
}
});
schema.core.specific_key_QMARK_ = (function schema$core$specific_key_QMARK_(ks){
var or__16771__auto__ = schema.core.required_key_QMARK_.call(null,ks);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return schema.core.optional_key_QMARK_.call(null,ks);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.MapEntry = (function (key_schema,val_schema,__meta,__extmap,__hash){
this.key_schema = key_schema;
this.val_schema = val_schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.MapEntry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k20040,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__20042 = (((k20040 instanceof cljs.core.Keyword))?k20040.fqn:null);
switch (G__20042) {
case "key-schema":
return self__.key_schema;

break;
case "val-schema":
return self__.val_schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20040,else__17388__auto__);

}
});

schema.core.MapEntry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.MapEntry{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IIterable$ = true;

schema.core.MapEntry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20039){
var self__ = this;
var G__20039__$1 = this;
return (new cljs.core.RecordIter((0),G__20039__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.MapEntry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.MapEntry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.MapEntry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.MapEntry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.MapEntry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__20039){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__20043 = cljs.core.keyword_identical_QMARK_;
var expr__20044 = k__17393__auto__;
if(cljs.core.truth_(pred__20043.call(null,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),expr__20044))){
return (new schema.core.MapEntry(G__20039,self__.val_schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20043.call(null,new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),expr__20044))){
return (new schema.core.MapEntry(self__.key_schema,G__20039,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__20039),null));
}
}
});

schema.core.MapEntry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),self__.key_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619),self__.val_schema],null))], null),self__.__extmap));
});

schema.core.MapEntry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__20039){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.MapEntry(self__.key_schema,self__.val_schema,G__20039,self__.__extmap,self__.__hash));
});

schema.core.MapEntry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.MapEntry.prototype.schema$core$Schema$ = true;

schema.core.MapEntry.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core._PLUS_no_precondition_PLUS_,cljs.core.vec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.one_element.call(null,true,self__.key_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.key.call(null,e));

return e;
});})(this$__$1))
),schema.spec.collection.one_element.call(null,true,self__.val_schema,((function (this$__$1){
return (function (item_fn,e){
item_fn.call(null,cljs.core.val.call(null,e));

return null;
});})(this$__$1))
)], null),((function (this$__$1){
return (function (p__20046,p__20047,_){
var vec__20048 = p__20046;
var k = cljs.core.nth.call(null,vec__20048,(0),null);
var vec__20049 = p__20047;
var xk = cljs.core.nth.call(null,vec__20049,(0),null);
var xv = cljs.core.nth.call(null,vec__20049,(1),null);
var temp__4423__auto__ = schema.utils.error_val.call(null,xk);
if(cljs.core.truth_(temp__4423__auto__)){
var k_err = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_err,new cljs.core.Symbol(null,"invalid-key","invalid-key",-1461682245,null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema.utils.error_val.call(null,xv)], null);
}
});})(this$__$1))
);
});

schema.core.MapEntry.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.val_schema)),schema.core.explain.call(null,self__.key_schema)),new cljs.core.Symbol(null,"map-entry","map-entry",329617471,null));
});

schema.core.MapEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key-schema","key-schema",543870801,null),new cljs.core.Symbol(null,"val-schema","val-schema",-374242092,null)], null);
});

schema.core.MapEntry.cljs$lang$type = true;

schema.core.MapEntry.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/MapEntry");
});

schema.core.MapEntry.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/MapEntry");
});

schema.core.__GT_MapEntry = (function schema$core$__GT_MapEntry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});

schema.core.map__GT_MapEntry = (function schema$core$map__GT_MapEntry(G__20041){
return (new schema.core.MapEntry(new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726).cljs$core$IFn$_invoke$arity$1(G__20041),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619).cljs$core$IFn$_invoke$arity$1(G__20041),null,cljs.core.dissoc.call(null,G__20041,new cljs.core.Keyword(null,"key-schema","key-schema",-1096660726),new cljs.core.Keyword(null,"val-schema","val-schema",-2014773619)),null));
});

schema.core.map_entry = (function schema$core$map_entry(key_schema,val_schema){
return (new schema.core.MapEntry(key_schema,val_schema,null,null,null));
});
schema.core.find_extra_keys_schema = (function schema$core$find_extra_keys_schema(map_schema){
var key_schemata = cljs.core.remove.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,map_schema));
if((cljs.core.count.call(null,key_schemata) < (2))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"More than one non-optional/required key schemata: %s",cljs.core.vec.call(null,key_schemata))));
}

return cljs.core.first.call(null,key_schemata);
});
schema.core.explain_kspec = (function schema$core$explain_kspec(kspec){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,kspec))){
if((kspec instanceof cljs.core.Keyword)){
return kspec;
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explicit_schema_key.call(null,kspec)),(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"required-key","required-key",1624616412,null):(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,kspec))?new cljs.core.Symbol(null,"optional-key","optional-key",988406145,null):null)));
}
} else {
return schema.core.explain.call(null,kspec);
}
});
schema.core.map_elements = (function schema$core$map_elements(this$){
var extra_keys_schema = schema.core.find_extra_keys_schema.call(null,this$);
var duplicate_keys_20068 = cljs.core.mapv.call(null,schema.core.explain_kspec,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,((function (extra_keys_schema){
return (function (p1__20051_SHARP_){
return (cljs.core.count.call(null,p1__20051_SHARP_) > (1));
});})(extra_keys_schema))
,cljs.core.vals.call(null,cljs.core.group_by.call(null,schema.core.explicit_schema_key,cljs.core.keys.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema)))))));
if(cljs.core.empty_QMARK_.call(null,duplicate_keys_20068)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Schema has multiple variants of the same explicit key: %s",duplicate_keys_20068)));
}

return cljs.core.concat.call(null,(function (){var iter__17543__auto__ = ((function (extra_keys_schema){
return (function schema$core$map_elements_$_iter__20060(s__20061){
return (new cljs.core.LazySeq(null,((function (extra_keys_schema){
return (function (){
var s__20061__$1 = s__20061;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20061__$1);
if(temp__4425__auto__){
var s__20061__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20061__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__20061__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__20063 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__20062 = (0);
while(true){
if((i__20062 < size__17542__auto__)){
var vec__20066 = cljs.core._nth.call(null,c__17541__auto__,i__20062);
var k = cljs.core.nth.call(null,vec__20066,(0),null);
var v = cljs.core.nth.call(null,vec__20066,(1),null);
cljs.core.chunk_append.call(null,b__20063,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (i__20062,rk,required_QMARK_,vec__20066,k,v,c__17541__auto__,size__17542__auto__,b__20063,s__20061__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(i__20062,rk,required_QMARK_,vec__20066,k,v,c__17541__auto__,size__17542__auto__,b__20063,s__20061__$2,temp__4425__auto__,extra_keys_schema))
);
})());

var G__20069 = (i__20062 + (1));
i__20062 = G__20069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20063),schema$core$map_elements_$_iter__20060.call(null,cljs.core.chunk_rest.call(null,s__20061__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20063),null);
}
} else {
var vec__20067 = cljs.core.first.call(null,s__20061__$2);
var k = cljs.core.nth.call(null,vec__20067,(0),null);
var v = cljs.core.nth.call(null,vec__20067,(1),null);
return cljs.core.cons.call(null,(function (){var rk = schema.core.explicit_schema_key.call(null,k);
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.map_entry.call(null,schema.core.eq.call(null,rk),v),((function (rk,required_QMARK_,vec__20067,k,v,s__20061__$2,temp__4425__auto__,extra_keys_schema){
return (function (item_fn,m){
var e = cljs.core.find.call(null,m,rk);
if(cljs.core.truth_(e)){
item_fn.call(null,e);
} else {
if(cljs.core.truth_(required_QMARK_)){
item_fn.call(null,schema.utils.error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null)], null)));
} else {
}
}

if(cljs.core.truth_(e)){
return cljs.core.dissoc.call(null,m,rk);
} else {
return m;
}
});})(rk,required_QMARK_,vec__20067,k,v,s__20061__$2,temp__4425__auto__,extra_keys_schema))
);
})(),schema$core$map_elements_$_iter__20060.call(null,cljs.core.rest.call(null,s__20061__$2)));
}
} else {
return null;
}
break;
}
});})(extra_keys_schema))
,null,null));
});})(extra_keys_schema))
;
return iter__17543__auto__.call(null,cljs.core.dissoc.call(null,this$,extra_keys_schema));
})(),(cljs.core.truth_(extra_keys_schema)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.apply.call(null,schema.core.map_entry,cljs.core.find.call(null,this$,extra_keys_schema)))], null):null));
});
schema.core.map_error = (function schema$core$map_error(){
return (function (_,elts,extra){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.concat.call(null,cljs.core.keep.call(null,schema.utils.error_val,elts),(function (){var iter__17543__auto__ = (function schema$core$map_error_$_iter__20078(s__20079){
return (new cljs.core.LazySeq(null,(function (){
var s__20079__$1 = s__20079;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20079__$1);
if(temp__4425__auto__){
var s__20079__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20079__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__20079__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__20081 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__20080 = (0);
while(true){
if((i__20080 < size__17542__auto__)){
var vec__20084 = cljs.core._nth.call(null,c__17541__auto__,i__20080);
var k = cljs.core.nth.call(null,vec__20084,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20084,(1),null);
cljs.core.chunk_append.call(null,b__20081,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null));

var G__20086 = (i__20080 + (1));
i__20080 = G__20086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20081),schema$core$map_error_$_iter__20078.call(null,cljs.core.chunk_rest.call(null,s__20079__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20081),null);
}
} else {
var vec__20085 = cljs.core.first.call(null,s__20079__$2);
var k = cljs.core.nth.call(null,vec__20085,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__20085,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Symbol(null,"disallowed-key","disallowed-key",-1877785633,null)], null),schema$core$map_error_$_iter__20078.call(null,cljs.core.rest.call(null,s__20079__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17543__auto__.call(null,extra);
})()));
});
});
schema.core.map_spec = (function schema$core$map_spec(this$){
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$,cljs.core.map_QMARK_,(function (p1__18426__18427__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__18426__18427__auto__),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
})),(function (p1__20087_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__20087_SHARP_);
}),schema.core.map_elements.call(null,this$),schema.core.map_error.call(null));
});
schema.core.map_explain = (function schema$core$map_explain(this$){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17543__auto__ = (function schema$core$map_explain_$_iter__20096(s__20097){
return (new cljs.core.LazySeq(null,(function (){
var s__20097__$1 = s__20097;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20097__$1);
if(temp__4425__auto__){
var s__20097__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20097__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__20097__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__20099 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__20098 = (0);
while(true){
if((i__20098 < size__17542__auto__)){
var vec__20102 = cljs.core._nth.call(null,c__17541__auto__,i__20098);
var k = cljs.core.nth.call(null,vec__20102,(0),null);
var v = cljs.core.nth.call(null,vec__20102,(1),null);
cljs.core.chunk_append.call(null,b__20099,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null));

var G__20104 = (i__20098 + (1));
i__20098 = G__20104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20099),schema$core$map_explain_$_iter__20096.call(null,cljs.core.chunk_rest.call(null,s__20097__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20099),null);
}
} else {
var vec__20103 = cljs.core.first.call(null,s__20097__$2);
var k = cljs.core.nth.call(null,vec__20103,(0),null);
var v = cljs.core.nth.call(null,vec__20103,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain_kspec.call(null,k),schema.core.explain.call(null,v)], null),schema$core$map_explain_$_iter__20096.call(null,cljs.core.rest.call(null,s__20097__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17543__auto__.call(null,this$);
})());
});
cljs.core.PersistentArrayMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashMap.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_spec.call(null,this$__$1);
});

cljs.core.PersistentHashMap.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return schema.core.map_explain.call(null,this$__$1);
});
cljs.core.PersistentHashSet.prototype.schema$core$Schema$ = true;

cljs.core.PersistentHashSet.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,this$__$1),(1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Set schema must have exactly one element")));
}

return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.set_QMARK_,((function (this$__$1){
return (function (p1__18426__18427__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__18426__18427__auto__),new cljs.core.Symbol(null,"set?","set?",1636014792,null));
});})(this$__$1))
),cljs.core.set,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,cljs.core.first.call(null,this$__$1))], null),((function (this$__$1){
return (function (_,xs,___$1){
return cljs.core.set.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

cljs.core.PersistentHashSet.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,cljs.core.first.call(null,this$__$1))], null));
});
schema.core.queue_QMARK_ = (function schema$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
schema.core.as_queue = (function schema$core$as_queue(col){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentQueue.EMPTY,col);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Queue = (function (schema,__meta,__extmap,__hash){
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.Queue.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k20106,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__20108 = (((k20106 instanceof cljs.core.Keyword))?k20106.fqn:null);
switch (G__20108) {
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20106,else__17388__auto__);

}
});

schema.core.Queue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.Queue{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IIterable$ = true;

schema.core.Queue.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20105){
var self__ = this;
var G__20105__$1 = this;
return (new cljs.core.RecordIter((0),G__20105__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Queue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.Queue.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.Queue(self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.Queue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Queue.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.Queue.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__20105){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__20109 = cljs.core.keyword_identical_QMARK_;
var expr__20110 = k__17393__auto__;
if(cljs.core.truth_(pred__20109.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__20110))){
return (new schema.core.Queue(G__20105,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Queue(self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__20105),null));
}
});

schema.core.Queue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Queue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__20105){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.Queue(self__.schema,G__20105,self__.__extmap,self__.__hash));
});

schema.core.Queue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.Queue.prototype.schema$core$Schema$ = true;

schema.core.Queue.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,schema.core.queue_QMARK_,((function (this$__$1){
return (function (p1__18426__18427__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__18426__18427__auto__),new cljs.core.Symbol(null,"queue?","queue?",-880510795,null));
});})(this$__$1))
),schema.core.as_queue,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,self__.schema)], null),((function (this$__$1){
return (function (_,xs,___$1){
return schema.core.as_queue.call(null,cljs.core.keep.call(null,schema.utils.error_val,xs));
});})(this$__$1))
);
});

schema.core.Queue.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),new cljs.core.Symbol(null,"queue","queue",-1198599890,null));
});

schema.core.Queue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Queue.cljs$lang$type = true;

schema.core.Queue.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Queue");
});

schema.core.Queue.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/Queue");
});

schema.core.__GT_Queue = (function schema$core$__GT_Queue(schema__$1){
return (new schema.core.Queue(schema__$1,null,null,null));
});

schema.core.map__GT_Queue = (function schema$core$map__GT_Queue(G__20107){
return (new schema.core.Queue(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__20107),null,cljs.core.dissoc.call(null,G__20107,new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

/**
 * Defines a schema satisfied by instances of clojure.lang.PersistentQueue
 *   (clj.core/PersistentQueue in ClojureScript) whose values satisfy x.
 */
schema.core.queue = (function schema$core$queue(x){
return (new schema.core.Queue(x,null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.One = (function (schema,optional_QMARK_,name,__meta,__extmap,__hash){
this.schema = schema;
this.optional_QMARK_ = optional_QMARK_;
this.name = name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.One.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k20114,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__20116 = (((k20114 instanceof cljs.core.Keyword))?k20114.fqn:null);
switch (G__20116) {
case "schema":
return self__.schema;

break;
case "optional?":
return self__.optional_QMARK_;

break;
case "name":
return self__.name;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20114,else__17388__auto__);

}
});

schema.core.One.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.One{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IIterable$ = true;

schema.core.One.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20113){
var self__ = this;
var G__20113__$1 = this;
return (new cljs.core.RecordIter((0),G__20113__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.One.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.One.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.One.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.One.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.One.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.One.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__20113){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__20117 = cljs.core.keyword_identical_QMARK_;
var expr__20118 = k__17393__auto__;
if(cljs.core.truth_(pred__20117.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__20118))){
return (new schema.core.One(G__20113,self__.optional_QMARK_,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20117.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129),expr__20118))){
return (new schema.core.One(self__.schema,G__20113,self__.name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20117.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__20118))){
return (new schema.core.One(self__.schema,self__.optional_QMARK_,G__20113,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__20113),null));
}
}
}
});

schema.core.One.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"optional?","optional?",1184638129),self__.optional_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null))], null),self__.__extmap));
});

schema.core.One.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__20113){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.One(self__.schema,self__.optional_QMARK_,self__.name,G__20113,self__.__extmap,self__.__hash));
});

schema.core.One.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.One.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"optional?","optional?",-1469797640,null),new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

schema.core.One.cljs$lang$type = true;

schema.core.One.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/One");
});

schema.core.One.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/One");
});

schema.core.__GT_One = (function schema$core$__GT_One(schema__$1,optional_QMARK_,name){
return (new schema.core.One(schema__$1,optional_QMARK_,name,null,null,null));
});

schema.core.map__GT_One = (function schema$core$map__GT_One(G__20115){
return (new schema.core.One(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__20115),new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(G__20115),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__20115),null,cljs.core.dissoc.call(null,G__20115,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"optional?","optional?",1184638129),new cljs.core.Keyword(null,"name","name",1843675177)),null));
});

/**
 * A single required element of a sequence (not repeated, the implicit default)
 */
schema.core.one = (function schema$core$one(schema__$1,name){
return (new schema.core.One(schema__$1,false,name,null,null,null));
});
/**
 * A single optional element of a sequence (not repeated, the implicit default)
 */
schema.core.optional = (function schema$core$optional(schema__$1,name){
return (new schema.core.One(schema__$1,true,name,null,null,null));
});
schema.core.parse_sequence_schema = (function schema$core$parse_sequence_schema(s){

var vec__20126 = cljs.core.split_with.call(null,(function (p1__20121_SHARP_){
return ((p1__20121_SHARP_ instanceof schema.core.One)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__20121_SHARP_)));
}),s);
var required = cljs.core.nth.call(null,vec__20126,(0),null);
var more = cljs.core.nth.call(null,vec__20126,(1),null);
var vec__20127 = cljs.core.split_with.call(null,((function (vec__20126,required,more){
return (function (p1__20122_SHARP_){
var and__16759__auto__ = (p1__20122_SHARP_ instanceof schema.core.One);
if(and__16759__auto__){
return new cljs.core.Keyword(null,"optional?","optional?",1184638129).cljs$core$IFn$_invoke$arity$1(p1__20122_SHARP_);
} else {
return and__16759__auto__;
}
});})(vec__20126,required,more))
,more);
var optional = cljs.core.nth.call(null,vec__20127,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__20127,(1),null);
if(((cljs.core.count.call(null,more__$1) <= (1))) && (cljs.core.every_QMARK_.call(null,((function (vec__20126,required,more,vec__20127,optional,more__$1){
return (function (p1__20123_SHARP_){
return !((p1__20123_SHARP_ instanceof schema.core.One));
});})(vec__20126,required,more,vec__20127,optional,more__$1))
,more__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Sequence schema %s does not match [one* optional* rest-schema?]",s)));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,required,optional),cljs.core.first.call(null,more__$1)], null);
});
cljs.core.PersistentVector.prototype.schema$core$Schema$ = true;

cljs.core.PersistentVector.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (x){
return ((x == null)) || (cljs.core.sequential_QMARK_.call(null,x));
});})(this$__$1))
,((function (this$__$1){
return (function (p1__20128_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20128_SHARP_),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null));
});})(this$__$1))
),cljs.core.vec,(function (){var vec__20129 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__20129,(0),null);
var multi = cljs.core.nth.call(null,vec__20129,(1),null);
return cljs.core.concat.call(null,(function (){var iter__17543__auto__ = ((function (vec__20129,singles,multi,this$__$1){
return (function schema$core$iter__20130(s__20131){
return (new cljs.core.LazySeq(null,((function (vec__20129,singles,multi,this$__$1){
return (function (){
var s__20131__$1 = s__20131;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20131__$1);
if(temp__4425__auto__){
var s__20131__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20131__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__20131__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__20133 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__20132 = (0);
while(true){
if((i__20132 < size__17542__auto__)){
var s = cljs.core._nth.call(null,c__17541__auto__,i__20132);
cljs.core.chunk_append.call(null,b__20133,(function (){var required_QMARK_ = cljs.core.not.call(null,s.optional_QMARK_);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.named.call(null,s.schema,s.name),((function (i__20132,required_QMARK_,s,c__17541__auto__,size__17542__auto__,b__20133,s__20131__$2,temp__4425__auto__,vec__20129,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq.call(null,x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay(((function (i__20132,temp__4423__auto__,required_QMARK_,s,c__17541__auto__,size__17542__auto__,b__20133,s__20131__$2,temp__4425__auto__,vec__20129,singles,multi,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,s.name),new cljs.core.Symbol(null,"present?","present?",-1810613791,null));
});})(i__20132,temp__4423__auto__,required_QMARK_,s,c__17541__auto__,size__17542__auto__,b__20133,s__20131__$2,temp__4425__auto__,vec__20129,singles,multi,this$__$1))
,null)),null)));
} else {
}

return null;
}
});})(i__20132,required_QMARK_,s,c__17541__auto__,size__17542__auto__,b__20133,s__20131__$2,temp__4425__auto__,vec__20129,singles,multi,this$__$1))
);
})());

var G__20139 = (i__20132 + (1));
i__20132 = G__20139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20133),schema$core$iter__20130.call(null,cljs.core.chunk_rest.call(null,s__20131__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20133),null);
}
} else {
var s = cljs.core.first.call(null,s__20131__$2);
return cljs.core.cons.call(null,(function (){var required_QMARK_ = cljs.core.not.call(null,s.optional_QMARK_);
return schema.spec.collection.one_element.call(null,required_QMARK_,schema.core.named.call(null,s.schema,s.name),((function (required_QMARK_,s,s__20131__$2,temp__4425__auto__,vec__20129,singles,multi,this$__$1){
return (function (item_fn,x){
var temp__4423__auto__ = cljs.core.seq.call(null,x);
if(temp__4423__auto__){
var x__$1 = temp__4423__auto__;
item_fn.call(null,cljs.core.first.call(null,x__$1));

return cljs.core.rest.call(null,x__$1);
} else {
if(required_QMARK_){
item_fn.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s.schema,new cljs.core.Keyword("schema.core","missing","schema.core/missing",1420181325),(new cljs.core.Delay(((function (temp__4423__auto__,required_QMARK_,s,s__20131__$2,temp__4425__auto__,vec__20129,singles,multi,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,s.name),new cljs.core.Symbol(null,"present?","present?",-1810613791,null));
});})(temp__4423__auto__,required_QMARK_,s,s__20131__$2,temp__4425__auto__,vec__20129,singles,multi,this$__$1))
,null)),null)));
} else {
}

return null;
}
});})(required_QMARK_,s,s__20131__$2,temp__4425__auto__,vec__20129,singles,multi,this$__$1))
);
})(),schema$core$iter__20130.call(null,cljs.core.rest.call(null,s__20131__$2)));
}
} else {
return null;
}
break;
}
});})(vec__20129,singles,multi,this$__$1))
,null,null));
});})(vec__20129,singles,multi,this$__$1))
;
return iter__17543__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.spec.collection.all_elements.call(null,multi)], null):null));
})(),((function (this$__$1){
return (function (_,elts,extra){
var head = cljs.core.mapv.call(null,schema.utils.error_val,elts);
if(cljs.core.seq.call(null,extra)){
return cljs.core.conj.call(null,head,schema.utils.error_val.call(null,schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,null,extra,(new cljs.core.Delay(((function (head,this$__$1){
return (function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.count.call(null,extra)),new cljs.core.Symbol(null,"has-extra-elts?","has-extra-elts?",-1376562869,null));
});})(head,this$__$1))
,null)),null))));
} else {
return head;
}
});})(this$__$1))
);
});

cljs.core.PersistentVector.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var this$__$1 = this;
var vec__20134 = schema.core.parse_sequence_schema.call(null,this$__$1);
var singles = cljs.core.nth.call(null,vec__20134,(0),null);
var multi = cljs.core.nth.call(null,vec__20134,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,(function (){var iter__17543__auto__ = ((function (vec__20134,singles,multi,this$__$1){
return (function schema$core$iter__20135(s__20136){
return (new cljs.core.LazySeq(null,((function (vec__20134,singles,multi,this$__$1){
return (function (){
var s__20136__$1 = s__20136;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20136__$1);
if(temp__4425__auto__){
var s__20136__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20136__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__20136__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__20138 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__20137 = (0);
while(true){
if((i__20137 < size__17542__auto__)){
var s = cljs.core._nth.call(null,c__17541__auto__,i__20137);
cljs.core.chunk_append.call(null,b__20138,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))));

var G__20140 = (i__20137 + (1));
i__20137 = G__20140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20138),schema$core$iter__20135.call(null,cljs.core.chunk_rest.call(null,s__20136__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20138),null);
}
} else {
var s = cljs.core.first.call(null,s__20136__$2);
return cljs.core.cons.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),schema.core.explain.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s))),(cljs.core.truth_(s.optional_QMARK_)?new cljs.core.Symbol(null,"optional","optional",-600484260,null):new cljs.core.Symbol(null,"one","one",-1719427865,null))),schema$core$iter__20135.call(null,cljs.core.rest.call(null,s__20136__$2)));
}
} else {
return null;
}
break;
}
});})(vec__20134,singles,multi,this$__$1))
,null,null));
});})(vec__20134,singles,multi,this$__$1))
;
return iter__17543__auto__.call(null,singles);
})(),(cljs.core.truth_(multi)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explain.call(null,multi)], null):null)));
});
/**
 * A schema for a pair of schemas and their names
 */
schema.core.pair = (function schema$core$pair(first_schema,first_name,second_schema,second_name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,first_schema,first_name),schema.core.one.call(null,second_schema,second_name)], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.Record = (function (klass,schema,__meta,__extmap,__hash){
this.klass = klass;
this.schema = schema;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.Record.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k20145,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__20147 = (((k20145 instanceof cljs.core.Keyword))?k20145.fqn:null);
switch (G__20147) {
case "klass":
return self__.klass;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20145,else__17388__auto__);

}
});

schema.core.Record.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.Record{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IIterable$ = true;

schema.core.Record.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20144){
var self__ = this;
var G__20144__$1 = this;
return (new cljs.core.RecordIter((0),G__20144__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.Record.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.Record.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.Record.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.Record.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"klass","klass",-1386752349),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.Record.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__20144){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__20148 = cljs.core.keyword_identical_QMARK_;
var expr__20149 = k__17393__auto__;
if(cljs.core.truth_(pred__20148.call(null,new cljs.core.Keyword(null,"klass","klass",-1386752349),expr__20149))){
return (new schema.core.Record(G__20144,self__.schema,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20148.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__20149))){
return (new schema.core.Record(self__.klass,G__20144,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.Record(self__.klass,self__.schema,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__20144),null));
}
}
});

schema.core.Record.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"klass","klass",-1386752349),self__.klass],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null))], null),self__.__extmap));
});

schema.core.Record.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__20144){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.Record(self__.klass,self__.schema,G__20144,self__.__extmap,self__.__hash));
});

schema.core.Record.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.Record.prototype.schema$core$Schema$ = true;

schema.core.Record.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.collection.collection_spec.call(null,(function (){var p = schema.spec.core.precondition.call(null,this$__$1,((function (this$__$1){
return (function (p1__20141_SHARP_){
return (p1__20141_SHARP_ instanceof self__.klass);
});})(this$__$1))
,((function (this$__$1){
return (function (p1__20142_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20142_SHARP_),self__.klass),new cljs.core.Symbol(null,"instance?","instance?",1075939923,null));
});})(this$__$1))
);
var temp__4423__auto__ = new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var evf = temp__4423__auto__;
return cljs.core.some_fn.call(null,p,schema.spec.core.precondition.call(null,this$__$1,evf,((function (evf,temp__4423__auto__,p,this$__$1){
return (function (p1__20143_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__20143_SHARP_),new cljs.core.Symbol(null,"passes-extra-validation?","passes-extra-validation?",-1964809231,null));
});})(evf,temp__4423__auto__,p,this$__$1))
));
} else {
return p;
}
})(),new cljs.core.Keyword(null,"constructor","constructor",-1953928811).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,this$__$1)),schema.core.map_elements.call(null,self__.schema),schema.core.map_error.call(null));
});

schema.core.Record.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,self__.schema)),cljs.core.symbol.call(null,cljs.core.pr_str.call(null,self__.klass))),new cljs.core.Symbol(null,"record","record",861424668,null));
});

schema.core.Record.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"klass","klass",253779178,null),new cljs.core.Symbol(null,"schema","schema",58529736,null)], null);
});

schema.core.Record.cljs$lang$type = true;

schema.core.Record.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/Record");
});

schema.core.Record.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/Record");
});

schema.core.__GT_Record = (function schema$core$__GT_Record(klass,schema__$1){
return (new schema.core.Record(klass,schema__$1,null,null,null));
});

schema.core.map__GT_Record = (function schema$core$map__GT_Record(G__20146){
return (new schema.core.Record(new cljs.core.Keyword(null,"klass","klass",-1386752349).cljs$core$IFn$_invoke$arity$1(G__20146),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__20146),null,cljs.core.dissoc.call(null,G__20146,new cljs.core.Keyword(null,"klass","klass",-1386752349),new cljs.core.Keyword(null,"schema","schema",-1582001791)),null));
});

schema.core.record_STAR_ = (function schema$core$record_STAR_(klass,schema__$1,map_constructor){
if(cljs.core.map_QMARK_.call(null,schema__$1)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected map, got %s",schema.utils.type_of.call(null,schema__$1))));
}

return cljs.core.with_meta.call(null,(new schema.core.Record(klass,schema__$1,null,null,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constructor","constructor",-1953928811),map_constructor], null));
});
schema.core.explain_input_schema = (function schema$core$explain_input_schema(input_schema){
var vec__20155 = cljs.core.split_with.call(null,(function (p1__20152_SHARP_){
return (p1__20152_SHARP_ instanceof schema.core.One);
}),input_schema);
var required = cljs.core.nth.call(null,vec__20155,(0),null);
var more = cljs.core.nth.call(null,vec__20155,(1),null);
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__20155,required,more){
return (function (p1__20153_SHARP_){
return schema.core.explain.call(null,p1__20153_SHARP_.schema);
});})(vec__20155,required,more))
,required),((cljs.core.seq.call(null,more))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.mapv.call(null,schema.core.explain,more)], null):null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {schema.core.Schema}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.core.FnSchema = (function (output_schema,input_schemas,__meta,__extmap,__hash){
this.output_schema = output_schema;
this.input_schemas = input_schemas;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17385__auto__,k__17386__auto__){
var self__ = this;
var this__17385__auto____$1 = this;
return cljs.core._lookup.call(null,this__17385__auto____$1,k__17386__auto__,null);
});

schema.core.FnSchema.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17387__auto__,k20157,else__17388__auto__){
var self__ = this;
var this__17387__auto____$1 = this;
var G__20159 = (((k20157 instanceof cljs.core.Keyword))?k20157.fqn:null);
switch (G__20159) {
case "output-schema":
return self__.output_schema;

break;
case "input-schemas":
return self__.input_schemas;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20157,else__17388__auto__);

}
});

schema.core.FnSchema.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17399__auto__,writer__17400__auto__,opts__17401__auto__){
var self__ = this;
var this__17399__auto____$1 = this;
var pr_pair__17402__auto__ = ((function (this__17399__auto____$1){
return (function (keyval__17403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,cljs.core.pr_writer,""," ","",opts__17401__auto__,keyval__17403__auto__);
});})(this__17399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17400__auto__,pr_pair__17402__auto__,"#schema.core.FnSchema{",", ","}",opts__17401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IIterable$ = true;

schema.core.FnSchema.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20156){
var self__ = this;
var G__20156__$1 = this;
return (new cljs.core.RecordIter((0),G__20156__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

schema.core.FnSchema.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17383__auto__){
var self__ = this;
var this__17383__auto____$1 = this;
return self__.__meta;
});

schema.core.FnSchema.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17379__auto__){
var self__ = this;
var this__17379__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17389__auto__){
var self__ = this;
var this__17389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17380__auto__){
var self__ = this;
var this__17380__auto____$1 = this;
var h__17206__auto__ = self__.__hash;
if(!((h__17206__auto__ == null))){
return h__17206__auto__;
} else {
var h__17206__auto____$1 = cljs.core.hash_imap.call(null,this__17380__auto____$1);
self__.__hash = h__17206__auto____$1;

return h__17206__auto____$1;
}
});

schema.core.FnSchema.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17381__auto__,other__17382__auto__){
var self__ = this;
var this__17381__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16759__auto__ = other__17382__auto__;
if(cljs.core.truth_(and__16759__auto__)){
var and__16759__auto____$1 = (this__17381__auto____$1.constructor === other__17382__auto__.constructor);
if(and__16759__auto____$1){
return cljs.core.equiv_map.call(null,this__17381__auto____$1,other__17382__auto__);
} else {
return and__16759__auto____$1;
}
} else {
return and__16759__auto__;
}
})())){
return true;
} else {
return false;
}
});

schema.core.FnSchema.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17394__auto__,k__17395__auto__){
var self__ = this;
var this__17394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"output-schema","output-schema",272504137),null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),null], null), null),k__17395__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17394__auto____$1),self__.__meta),k__17395__auto__);
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17395__auto__)),null));
}
});

schema.core.FnSchema.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17392__auto__,k__17393__auto__,G__20156){
var self__ = this;
var this__17392__auto____$1 = this;
var pred__20160 = cljs.core.keyword_identical_QMARK_;
var expr__20161 = k__17393__auto__;
if(cljs.core.truth_(pred__20160.call(null,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),expr__20161))){
return (new schema.core.FnSchema(G__20156,self__.input_schemas,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20160.call(null,new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),expr__20161))){
return (new schema.core.FnSchema(self__.output_schema,G__20156,self__.__meta,self__.__extmap,null));
} else {
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17393__auto__,G__20156),null));
}
}
});

schema.core.FnSchema.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17397__auto__){
var self__ = this;
var this__17397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"output-schema","output-schema",272504137),self__.output_schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805),self__.input_schemas],null))], null),self__.__extmap));
});

schema.core.FnSchema.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17384__auto__,G__20156){
var self__ = this;
var this__17384__auto____$1 = this;
return (new schema.core.FnSchema(self__.output_schema,self__.input_schemas,G__20156,self__.__extmap,self__.__hash));
});

schema.core.FnSchema.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17390__auto__,entry__17391__auto__){
var self__ = this;
var this__17390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17391__auto__)){
return cljs.core._assoc.call(null,this__17390__auto____$1,cljs.core._nth.call(null,entry__17391__auto__,(0)),cljs.core._nth.call(null,entry__17391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17390__auto____$1,entry__17391__auto__);
}
});

schema.core.FnSchema.prototype.schema$core$Schema$ = true;

schema.core.FnSchema.prototype.schema$core$Schema$spec$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return schema.spec.leaf.leaf_spec.call(null,schema.spec.core.precondition.call(null,this$__$1,cljs.core.ifn_QMARK_,((function (this$__$1){
return (function (p1__18426__18427__auto__){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,p1__18426__18427__auto__),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null));
});})(this$__$1))
));
});

schema.core.FnSchema.prototype.schema$core$Schema$explain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.input_schemas) > (1))){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>*","=>*",1909690043,null),schema.core.explain.call(null,self__.output_schema),cljs.core.map.call(null,schema.core.explain_input_schema,self__.input_schemas));
} else {
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"=>","=>",-813269641,null),schema.core.explain.call(null,self__.output_schema),schema.core.explain_input_schema.call(null,cljs.core.first.call(null,self__.input_schemas)));
}
});

schema.core.FnSchema.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema","output-schema",1913035664,null),new cljs.core.Symbol(null,"input-schemas","input-schemas",658376722,null)], null);
});

schema.core.FnSchema.cljs$lang$type = true;

schema.core.FnSchema.cljs$lang$ctorPrSeq = (function (this__17419__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.core/FnSchema");
});

schema.core.FnSchema.cljs$lang$ctorPrWriter = (function (this__17419__auto__,writer__17420__auto__){
return cljs.core._write.call(null,writer__17420__auto__,"schema.core/FnSchema");
});

schema.core.__GT_FnSchema = (function schema$core$__GT_FnSchema(output_schema,input_schemas){
return (new schema.core.FnSchema(output_schema,input_schemas,null,null,null));
});

schema.core.map__GT_FnSchema = (function schema$core$map__GT_FnSchema(G__20158){
return (new schema.core.FnSchema(new cljs.core.Keyword(null,"output-schema","output-schema",272504137).cljs$core$IFn$_invoke$arity$1(G__20158),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805).cljs$core$IFn$_invoke$arity$1(G__20158),null,cljs.core.dissoc.call(null,G__20158,new cljs.core.Keyword(null,"output-schema","output-schema",272504137),new cljs.core.Keyword(null,"input-schemas","input-schemas",-982154805)),null));
});

schema.core.arity = (function schema$core$arity(input_schema){
if(cljs.core.seq.call(null,input_schema)){
if((cljs.core.last.call(null,input_schema) instanceof schema.core.One)){
return cljs.core.count.call(null,input_schema);
} else {
return Number.MAX_VALUE;
}
} else {
return (0);
}
});
/**
 * A function outputting a value in output schema, whose argument vector must match one of
 * input-schemas, each of which should be a sequence schema.
 * Currently function schemas are purely descriptive; they validate against any function,
 * regardless of actual input and output types.
 */
schema.core.make_fn_schema = (function schema$core$make_fn_schema(output_schema,input_schemas){
if(cljs.core.seq.call(null,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Function must have at least one input schema")));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,input_schemas)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Each arity must be a vector.")));
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.map.call(null,schema.core.arity,input_schemas)))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Arities must be distinct")));
}

return (new schema.core.FnSchema(output_schema,cljs.core.sort_by.call(null,schema.core.arity,input_schemas),null,null,null));
});
/**
 * Records name in schema's metadata.
 */
schema.core.schema_with_name = (function schema$core$schema_with_name(schema__$1,name){
return cljs.core.vary_meta.call(null,schema__$1,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
/**
 * Returns the name of a schema attached via schema-with-name (or defschema).
 */
schema.core.schema_name = (function schema$core$schema_name(schema__$1){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Returns the namespace of a schema attached via defschema.
 */
schema.core.schema_ns = (function schema$core$schema_ns(schema__$1){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,schema__$1));
});
/**
 * Get the current global schema validation setting.
 */
schema.core.fn_validation_QMARK_ = (function schema$core$fn_validation_QMARK_(){
return schema.utils.use_fn_validation.get_cell();
});
/**
 * Globally turn on (or off) schema validation for all s/fn and s/defn instances.
 */
schema.core.set_fn_validation_BANG_ = (function schema$core$set_fn_validation_BANG_(on_QMARK_){
return schema.utils.use_fn_validation.set_cell(on_QMARK_);
});
/**
 * Attach the schema to fn f at runtime, extractable by fn-schema.
 */
schema.core.schematize_fn = (function schema$core$schematize_fn(f,schema__$1){
return cljs.core.vary_meta.call(null,f,cljs.core.assoc,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1);
});
/**
 * Produce the schema for a function defined with s/fn or s/defn.
 */
schema.core.fn_schema = (function schema$core$fn_schema(f){
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Non-function %s",schema.utils.type_of.call(null,f))));
}

var or__16771__auto__ = schema.utils.class_schema.call(null,schema.utils.fn_schema_bearer.call(null,f));
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var m__18151__auto__ = cljs.core.meta.call(null,f);
var k__18152__auto__ = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var temp__4423__auto__ = cljs.core.find.call(null,m__18151__auto__,k__18152__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__18153__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__18153__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__18152__auto__,m__18151__auto__)));
}
}
});
/**
 * Sets the maximum length of value to be output before it is contracted to a prettier name.
 */
schema.core.set_max_value_length_BANG_ = (function schema$core$set_max_value_length_BANG_(max_length){
return cljs.core.reset_BANG_.call(null,schema.utils.max_value_length,max_length);
});

//# sourceMappingURL=core.js.map