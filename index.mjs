// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.0.14-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.0.8-esm/index.mjs";import{factory as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function f(g,c,b){var v,x,y,w,N;if(!o(g)||m(g))throw new TypeError(j("invalid argument. First argument must be a number and not NaN. Value: `%s`.",g));if(!o(c)||m(c))throw new TypeError(j("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",c));if(g>=c)throw new RangeError(j("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",g,c));if(arguments.length>2){if(!d(b))throw new TypeError(j("0QA2h",b));if(v=i(b,1),a(v,"iter")){if(!l(v.iter))throw new TypeError(j("0QA35","iter",v.iter))}else v.iter=u;y=h(g,c,v),void 0===v.prng&&!1!==v.copy&&(v.state=y.state)}else y=h(g,c),v={iter:u,state:y.state};return N=0,e(x={},"next",L),e(x,"return",P),v&&v.prng?(e(x,"seed",null),e(x,"seedLength",null),s(x,"state",n(null),r),e(x,"stateLength",null),e(x,"byteLength",null)):(t(x,"seed",G),t(x,"seedLength",E),s(x,"state",A,Q),t(x,"stateLength",T),t(x,"byteLength",V)),e(x,"PRNG",y.PRNG),p&&e(x,p,R),x;function L(){return N+=1,w||N>v.iter?{done:!0}:{value:y(),done:!1}}function P(e){return w=!0,arguments.length?{value:e,done:!0}:{done:!0}}function R(){return f(g,c,v)}function G(){return y.PRNG.seed}function E(){return y.PRNG.seedLength}function T(){return y.PRNG.stateLength}function V(){return y.PRNG.byteLength}function A(){return y.PRNG.state}function Q(e){y.PRNG.state=e}}export{f as default};
//# sourceMappingURL=index.mjs.map
