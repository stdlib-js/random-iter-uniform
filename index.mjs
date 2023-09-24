// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.0-esm/index.mjs";import{factory as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function u(c,v,g){var b,x,w,y,N;if(!o(c)||d(c))throw new TypeError(f("0qX6v,NI",c));if(!o(v)||d(v))throw new TypeError(f("0qX6w,NJ",v));if(c>=v)throw new RangeError(f("0qXNK",c,v));if(arguments.length>2){if(!m(g))throw new TypeError(f("0qX2V,FD",g));if(b=i({},g),h(b,"iter")){if(!l(b.iter))throw new TypeError(f("0qX2t,G9","iter",b.iter))}else b.iter=j;w=a(c,v,b),void 0===b.prng&&!1!==b.copy&&(b.state=w.state)}else w=a(c,v),b={iter:j,state:w.state};return N=0,e(x={},"next",G),e(x,"return",L),b&&b.prng?(e(x,"seed",null),e(x,"seedLength",null),s(x,"state",n(null),r),e(x,"stateLength",null),e(x,"byteLength",null)):(t(x,"seed",R),t(x,"seedLength",q),s(x,"state",T,D),t(x,"stateLength",E),t(x,"byteLength",X)),e(x,"PRNG",w.PRNG),p&&e(x,p,P),x;function G(){return N+=1,y||N>b.iter?{done:!0}:{value:w(),done:!1}}function L(e){return y=!0,arguments.length?{value:e,done:!0}:{done:!0}}function P(){return u(c,v,b)}function R(){return w.PRNG.seed}function q(){return w.PRNG.seedLength}function E(){return w.PRNG.stateLength}function X(){return w.PRNG.byteLength}function T(){return w.PRNG.state}function D(e){w.PRNG.state=e}}export{u as default};
//# sourceMappingURL=index.mjs.map
