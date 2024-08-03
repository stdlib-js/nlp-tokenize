// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(e){return"number"==typeof e}function r(e){var t,n="";for(t=0;t<e;t++)n+="0";return n}function o(e,t,n){var o=!1,a=t-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=n?e+r(a):r(a)+e,o&&(e="-"+e)),e}var a=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function l(e){var t,r,l;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(r=e.arg,l=parseInt(r,10),!isFinite(l)){if(!n(r))throw new Error("invalid integer. Value: "+r);l=0}return l<0&&("u"===e.specifier||10!==t)&&(l=4294967295+l+1),l<0?(r=(-l).toString(t),e.precision&&(r=o(r,e.precision,e.padRight)),r="-"+r):(r=l.toString(t),l||e.precision?e.precision&&(r=o(r,e.precision,e.padRight)):r="",e.sign&&(r=e.sign+r)),16===t&&(e.alternate&&(r="0x"+r),r=e.specifier===i.call(e.specifier)?i.call(r):a.call(r)),8===t&&e.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}var s=Math.abs,h=String.prototype.toLowerCase,c=String.prototype.toUpperCase,d=String.prototype.replace,u=/e\+(\d)$/,v=/e-(\d)$/,p=/^(\d+)$/,f=/^(\d+)e/,w=/\.0$/,g=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var t,r,o=parseFloat(e.arg);if(!isFinite(o)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+r);o=e.arg}switch(e.specifier){case"e":case"E":r=o.toExponential(e.precision);break;case"f":case"F":r=o.toFixed(e.precision);break;case"g":case"G":s(o)<1e-4?((t=e.precision)>0&&(t-=1),r=o.toExponential(t)):r=o.toPrecision(e.precision),e.alternate||(r=d.call(r,y,"$1e"),r=d.call(r,g,"e"),r=d.call(r,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return r=d.call(r,u,"e+0$1"),r=d.call(r,v,"e-0$1"),e.alternate&&(r=d.call(r,p,"$1."),r=d.call(r,f,"$1.e")),o>=0&&e.sign&&(r=e.sign+r),r=e.specifier===c.call(e.specifier)?c.call(r):h.call(r)}function b(e){var t,n="";for(t=0;t<e;t++)n+=" ";return n}var _=String.fromCharCode,S=Array.isArray;function I(e){return e!=e}function C(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function D(e){var t,n,r,a,i,s,h,c,d,u,v,p,f;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",h=1,c=0;c<e.length;c++)if("string"==typeof(r=e[c]))s+=r;else{if(t=void 0!==r.precision,!(r=C(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+r+"`.");for(r.mapping&&(h=r.mapping),n=r.flags,d=0;d<n.length;d++)switch(a=n.charAt(d)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===r.width){if(r.width=parseInt(arguments[h],10),h+=1,I(r.width))throw new TypeError("the argument for * width at position "+h+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(t&&"*"===r.precision){if(r.precision=parseInt(arguments[h],10),h+=1,I(r.precision))throw new TypeError("the argument for * precision at position "+h+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,t=!1)}switch(r.arg=arguments[h],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(r.padZeros=!1),r.arg=l(r);break;case"s":r.maxWidth=t?r.precision:-1,r.arg=String(r.arg);break;case"c":if(!I(r.arg)){if((i=parseInt(r.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=I(i)?String(r.arg):_(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(r.precision=6),r.arg=m(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=o(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=(u=r.arg,v=r.width,p=r.padRight,f=void 0,(f=v-u.length)<0?u:u=p?u+b(f):b(f)+u)),s+=r.arg||"",h+=1}return s}var M=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function E(e){var t,n,r,o;for(n=[],o=0,r=M.exec(e);r;)(t=e.slice(o,M.lastIndex-r[0].length)).length&&n.push(t),n.push(A(r)),o=M.lastIndex,r=M.exec(e);return(t=e.slice(o)).length&&n.push(t),n}function T(e){var t,n;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=[E(e)],n=1;n<arguments.length;n++)t.push(arguments[n]);return D.apply(null,t)}var k=Object.prototype,O=k.toString,x=k.__defineGetter__,P=k.__defineSetter__,N=k.__lookupGetter__,Y=k.__lookupSetter__,j=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,n){var r,o,a,i;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===O.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(N.call(e,t)||Y.call(e,t)?(r=e.__proto__,e.__proto__=k,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),a="get"in n,i="set"in n,o&&(a||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&x&&x.call(e,t,n.get),i&&P&&P.call(e,t,n.set),e};function V(e,t,n){j(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(e){return"boolean"==typeof e}var F="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return F&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,G=Object.prototype.hasOwnProperty;function J(e,t){return null!=e&&G.call(e,t)}var $="function"==typeof Symbol?Symbol:void 0,L="function"==typeof $?$.toStringTag:"",K=B()?function(e){var t,n,r;if(null==e)return R.call(e);n=e[L],t=J(e,L);try{e[L]=void 0}catch(t){return R.call(e)}return r=R.call(e),t?e[L]=n:delete e[L],r}:function(e){return R.call(e)},Z=Boolean,z=Boolean.prototype.toString,H=B();function U(e){return"object"==typeof e&&(e instanceof Z||(H?function(e){try{return z.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function X(e){return W(e)||U(e)}function q(e){return"string"==typeof e}V(X,"isPrimitive",W),V(X,"isObject",U);var Q=String.prototype.valueOf,ee=B();function te(e){return"object"==typeof e&&(e instanceof String||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function ne(e){return q(e)||te(e)}function re(){var e,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}V(ne,"isPrimitive",q),V(ne,"isObject",te);var oe={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},ae={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},ie={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},le=/^([,([{*<"“'`‘]|\.{1,3})/gi,se=/([,.!?%*>:;"'”`)\]}]|\.\.\.)$/gi;function he(e,t){var n;for(n=0;n<t.length;n++)e.push(t[n]);return e}function ce(e){var t,n,r,o=[],a=[];do{ae[e]||oe[e]||ie[e]?n=!0:(t=e.split(le)).length>1?(o.push(t[1]),e=t[2]):(t=e.split(se)).length>1?(e=t[0],a.unshift(t[1])):n=!0}while(!n);return r=o,e&&r.push(e),"..."===a[a.length-1]&&(a.pop(),a.unshift("...")),he(r,a),r}return function(e,t){var n,r,o,a,i,l;if(!q(e))throw new TypeError(re("0kd3F",e));if(arguments.length>1&&!W(t))throw new TypeError(re("0kd55",t));if(!e)return[];for(r=t?e.split(/(\s+)/):e.split(/\s+/),i={},o=[],l=0;l<r.length;l++)J(i,a=r[l])?he(o,i[a]):(he(o,n=ce(a)),i[a]=n);return o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).tokenize=t();
//# sourceMappingURL=browser.js.map
