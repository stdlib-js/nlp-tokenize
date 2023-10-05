// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(e){return"number"==typeof e}function r(e){var t,n="";for(t=0;t<e;t++)n+="0";return n}function o(e,t,n){var o=!1,a=t-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(o=!0,e=e.substr(1)),e=n?e+r(a):r(a)+e,o&&(e="-"+e)),e}var a=String.prototype.toLowerCase,i=String.prototype.toUpperCase;function l(e){var t,r,l;switch(e.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(r=e.arg,l=parseInt(r,10),!isFinite(l)){if(!n(r))throw new Error("invalid integer. Value: "+r);l=0}return l<0&&("u"===e.specifier||10!==t)&&(l=4294967295+l+1),l<0?(r=(-l).toString(t),e.precision&&(r=o(r,e.precision,e.padRight)),r="-"+r):(r=l.toString(t),l||e.precision?e.precision&&(r=o(r,e.precision,e.padRight)):r="",e.sign&&(r=e.sign+r)),16===t&&(e.alternate&&(r="0x"+r),r=e.specifier===i.call(e.specifier)?i.call(r):a.call(r)),8===t&&e.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function s(e){return"string"==typeof e}var h=Math.abs,c=String.prototype.toLowerCase,d=String.prototype.toUpperCase,u=String.prototype.replace,v=/e\+(\d)$/,p=/e-(\d)$/,w=/^(\d+)$/,f=/^(\d+)e/,g=/\.0$/,y=/\.0*e/,m=/(\..*[^0])0*e/;function b(e){var t,r,o=parseFloat(e.arg);if(!isFinite(o)){if(!n(e.arg))throw new Error("invalid floating-point number. Value: "+r);o=e.arg}switch(e.specifier){case"e":case"E":r=o.toExponential(e.precision);break;case"f":case"F":r=o.toFixed(e.precision);break;case"g":case"G":h(o)<1e-4?((t=e.precision)>0&&(t-=1),r=o.toExponential(t)):r=o.toPrecision(e.precision),e.alternate||(r=u.call(r,m,"$1e"),r=u.call(r,y,"e"),r=u.call(r,g,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return r=u.call(r,v,"e+0$1"),r=u.call(r,p,"e-0$1"),e.alternate&&(r=u.call(r,w,"$1."),r=u.call(r,f,"$1.e")),o>=0&&e.sign&&(r=e.sign+r),r=e.specifier===d.call(e.specifier)?d.call(r):c.call(r)}function _(e){var t,n="";for(t=0;t<e;t++)n+=" ";return n}function S(e,t,n){var r=t-e.length;return r<0?e:e=n?e+_(r):_(r)+e}var I=String.fromCharCode,C=isNaN,D=Array.isArray;function M(e){var t={};return t.specifier=e.specifier,t.precision=void 0===e.precision?1:e.precision,t.width=e.width,t.flags=e.flags||"",t.mapping=e.mapping,t}function A(e){var t,n,r,a,i,h,c,d,u;if(!D(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(h="",c=1,d=0;d<e.length;d++)if(s(r=e[d]))h+=r;else{if(t=void 0!==r.precision,!(r=M(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+d+"`. Value: `"+r+"`.");for(r.mapping&&(c=r.mapping),n=r.flags,u=0;u<n.length;u++)switch(a=n.charAt(u)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=n.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===r.width){if(r.width=parseInt(arguments[c],10),c+=1,C(r.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(t&&"*"===r.precision){if(r.precision=parseInt(arguments[c],10),c+=1,C(r.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,t=!1)}switch(r.arg=arguments[c],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(r.padZeros=!1),r.arg=l(r);break;case"s":r.maxWidth=t?r.precision:-1;break;case"c":if(!C(r.arg)){if((i=parseInt(r.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=C(i)?String(r.arg):I(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(r.precision=6),r.arg=b(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=o(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=S(r.arg,r.width,r.padRight)),h+=r.arg||"",c+=1}return h}var E=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var t={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(t.precision="1"),t}function k(e){var t,n,r,o;for(n=[],o=0,r=E.exec(e);r;)(t=e.slice(o,E.lastIndex-r[0].length)).length&&n.push(t),n.push(T(r)),o=E.lastIndex,r=E.exec(e);return(t=e.slice(o)).length&&n.push(t),n}function O(e){return"string"==typeof e}function x(e){var t,n,r;if(!O(e))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",e));for(t=k(e),(n=new Array(arguments.length))[0]=t,r=1;r<n.length;r++)n[r]=arguments[r];return A.apply(null,n)}var N=Object.prototype,P=N.toString,Y=N.__defineGetter__,V=N.__defineSetter__,j=N.__lookupGetter__,W=N.__lookupSetter__;var F=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,n){var r,o,a,i;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof n||null===n||"[object Array]"===P.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(j.call(e,t)||W.call(e,t)?(r=e.__proto__,e.__proto__=N,delete e[t],e[t]=n.value,e.__proto__=r):e[t]=n.value),a="get"in n,i="set"in n,o&&(a||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Y&&Y.call(e,t,n.get),i&&V&&V.call(e,t,n.set),e};function B(e,t,n){F(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function R(e){return"boolean"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return G&&"symbol"==typeof Symbol.toStringTag}var $=Object.prototype.toString;var L=Object.prototype.hasOwnProperty;function K(e,t){return null!=e&&L.call(e,t)}var Z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof Z?Z.toStringTag:"";var z=J()?function(e){var t,n,r;if(null==e)return $.call(e);n=e[H],t=K(e,H);try{e[H]=void 0}catch(t){return $.call(e)}return r=$.call(e),t?e[H]=n:delete e[H],r}:function(e){return $.call(e)},U=Boolean,X=Boolean.prototype.toString;var q=J();function Q(e){return"object"==typeof e&&(e instanceof U||(q?function(e){try{return X.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===z(e)))}function ee(e){return R(e)||Q(e)}function te(e){return"string"==typeof e}B(ee,"isPrimitive",R),B(ee,"isObject",Q);var ne=String.prototype.valueOf;var re=J();function oe(e){return"object"==typeof e&&(e instanceof String||(re?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object String]"===z(e)))}function ae(e){return te(e)||oe(e)}function ie(){var e,t=arguments,n=t[0],r="https://stdlib.io/e/"+n+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}B(ae,"isPrimitive",te),B(ae,"isObject",oe);var le={"i.e.":["i.e."],"I.e.":["I.e."],"I.E.":["I.E."],"e.g.":["e.g."],"E.g.":["E.g."],"E.G.":["E.G."],"et al.":["et al."],"etc.":["etc."],"vs.":["vs."],"A.S.A.P":["A.S.A.P"],"E.T.A.":["E.T.A."],"D.I.Y":["D.I.Y"],"R.S.V.P":["R.S.V.P"],"P.S.":["P.S."],"B.Y.O.B":["B.Y.O.B"],"Ms.":["Ms."],"Mr.":["Mr."],"Dr.":["Dr."],"Prof.":["Prof."],"Mrs.":["Mrs."],"Messrs.":["Messrs."],"Gov.":["Gov."],"Gen.":["Gen."],"Lt.":["Lt."],"Col.":["Col."],"Mt.":["Mt."],"Bros.":["Bros."],"Corp.":["Corp."],"Co.":["Co."],"co.":["co."],"Inc.":["Inc."],"Ltd.":["Ltd."],"Rep.":["Rep."],"Sen.":["Sen."],"Jr.":["Jr."],"Sr.":["Sr."],"Ph.D.":["Ph.D."],"J.D.":["J.D."],"M.D.":["M.D."],"Rev.":["Rev."],"Adm.":["Adm."],"St.":["St."],"a.m.":["a.m."],"p.m.":["p.m."],"b.c.":["b.c."],"B.C.":["B.C."],"a.d.":["a.d."],"A.D.":["A.D."],"b.c.e.":["b.c.e."],"B.C.E.":["B.C.E."],"Jan.":["Jan."],"Feb.":["Feb."],"Mar.":["Mar."],"Apr.":["Apr."],"May.":["May."],"Jun.":["Jun."],"Jul.":["Jul."],"Aug.":["Aug."],"Sep.":["Sep."],"Sept.":["Sept."],"Oct.":["Oct."],"Nov.":["Nov."],"Dec.":["Dec."],"Ala.":["Ala."],"Ariz.":["Ariz."],"Ark.":["Ark."],"Calif.":["Calif."],"Colo.":["Colo."],"Conn.":["Conn."],"Del.":["Del."],"D.C.":["D.C."],"Fla.":["Fla."],"Ga.":["Ga."],"Ill.":["Ill."],"Ind.":["Ind."],"Kans.":["Kans."],"Kan.":["Kan."],"Ky.":["Ky."],"La.":["La."],"Md.":["Md."],"Mass.":["Mass."],"Mich.":["Mich."],"Minn.":["Minn."],"Miss.":["Miss."],"Mo.":["Mo."],"Mont.":["Mont."],"Nebr.":["Nebr."],"Neb.":["Neb."],"Nev.":["Nev."],"N.H.":["N.H."],"N.J.":["N.J."],"N.M.":["N.M."],"N.Y.":["N.Y."],"N.C.":["N.C."],"N.D.":["N.D."],"Okla.":["Okla."],"Ore.":["Ore."],"Pa.":["Pa."],"Tenn.":["Tenn."],"Va.":["Va."],"Wash.":["Wash."],"Wis.":["Wis."]},se={"^_^":["^_^"],"=D":["=D"],";-p":[";-p"],":O":[":O"],":-/":[":-/"],xD:["xD"],V_V:["V_V"],";(":[";("],"(:":["(:"],'")':['")'],":Y":[":Y"],":]":[":]"],":3":[":3"],":(":[":("],":-)":[":-)"],"=3":["=3"],":))":[":))"],":>":[":>"],";p":[";p"],":p":[":p"],"=[[":["=[["],xDD:["xDD"],"<333":["<333"],"<33":["<33"],":P":[":P"],"o.O":["o.O"],"<3":["<3"],";-)":[";-)"],":)":[":)"],"-_-":["-_-"],":')":[":')"],o_O:["o_O"],";)":[";)"],"=]":["=]"],"(=":["(="],"-__-":["-__-"],":/":[":/"],":0":[":0"],"(^_^)":["(^_^)"],";D":[";D"],o_o:["o_o"],":((":[":(("],"=)":["=)"]},he={"'s":["'s"],"'S":["'S"],"ain't":["ai","n't"],aint:["ai","nt"],"Ain't":["Ai","n't"],"aren't":["are","n't"],arent:["are","nt"],"Aren't":["Are","n't"],"can't":["ca","n't"],cant:["ca","nt"],"Can't":["Ca","n't"],"can't've":["ca","n't","'ve"],"'cause":["'cause'"],cannot:["can","not"],Cannot:["Can","not"],"could've":["could","'ve"],couldve:["could","ve"],"Could've":["Could","'ve"],"couldn't":["could","n't"],couldnt:["could","nt"],"Couldn't":["Could","n't"],"couldn't've":["could","n't","'ve"],couldntve:["could","nt","ve"],"Couldn't've":["Could","n't","'ve"],"didn't":["did","n't"],didnt:["did","nt"],"Didn't":["Did","n't"],"doesn't":["does","n't"],doesnt:["does","nt"],"Doesn't":["Does","n't"],"don't":["do","n't"],dont:["do","nt"],"Don't":["Do","n't"],"hadn't":["had","n't"],hadnt:["had","nt"],"Hadn't":["Had","n't"],"hadn't've":["had","n't","'ve"],"hasn't":["has","n't"],hasnt:["has","nt"],"haven't":["have","n't"],havent:["have","nt"],"he'd":["he","'d"],hed:["he","d"],"he'd've":["he","'d","'ve"],hedve:["he","d","ve"],"he'll":["he","'ll"],"he'll've":["he","'ll","'ve"],"he's":["he","'s"],hes:["he","s"],"how'd":["how","'d"],howd:["how","d"],"how'd'y":["how","'d","'y"],"how'll":["how","'ll"],howll:["how","ll"],"how's":["how","'s"],hows:["how","s"],"I'd":["I","'d"],"I'd've":["I","'d","'ve"],"I'll":["I","'ll"],"i'll":["i","'ll"],"I'll've":["I","'ll","'ve"],"i'll've":["i","'ll","'ve"],"I'm":["I","'m"],"i'm":["i","'m"],Im:["I","m"],im:["i","m"],"I'ma":["I","'ma"],"i'ma":["i","'ma"],"I've":["I","'ve"],"i've":["i","'ve"],"isn't":["is","n't"],isnt:["is","nt"],"Isn't":["Is","n't"],"It'd":["It","'d"],"it'd":["it","'d"],"it'd've":["it","'d","'ve"],"it'll've":["it","'ll","'ve"],"it'll":["it","'ll"],itll:["it","ll"],"it's":["it","'s"],"let's":["let","'s"],lets:["let","s"],"ma'am":["ma'am"],"mayn't":["may","n't"],"mightn't":["might","n't"],"mightn't've":["might","n't","'ve"],"might've":["might","'ve"],"mustn't":["must","n't"],"mustn't've":["must","n't","'ve"],"must've":["must","'ve"],"needn't":["need","n't"],"needn't've":["need","n't","'ve"],"not've":["not","'ve"],"o'clock":["o'clock"],"oughtn't":["ought","n't"],"oughtn't've":["ought","n't","'ve"],"so've":["so","'ve"],"so's":["so","'s"],"shan't":["sha","n't"],"sha'n't":["sha'","n't"],"shan't've":["sha","n't","'ve"],"she'd":["she","'d"],"she'd've":["she","'d","'ve"],"she'll":["she","'ll"],"she'll've":["she","'ll","'ve"],"she's":["she","'s"],"should've":["should","'ve"],"shouldn't":["should","n't"],"shouldn't've":["should","n't","'ve"],"that'd":["that","'d"],"that'd've":["that","'d","'ve"],"that's":["that","'s"],thats:["that","s"],"there'd":["there","'d"],"there'd've":["there","'d","'ve"],"there's":["there","'s"],"they'd":["they","'d"],"They'd":["They","'d"],"they'd've":["they","'d","'ve"],"They'd've":["They","'d","'ve"],"they'll":["they","'ll"],"They'll":["They","'ll"],"they'll've":["they","'ll","'ve"],"They'll've":["They","'ll","'ve"],"they're":["they","'re"],"They're":["They","'re"],"they've":["they","'ve"],"They've":["They","'ve"],"to've":["to","'ve"],"wasn't":["was","n't"],"we'd":["we","'d"],"We'd":["We","'d"],"we'd've":["we","'d","'ve"],"we'll":["we","'ll"],"We'll":["We","'ll"],"we'll've":["we","'ll","'ve"],"We'll've":["We","'ll","'ve"],"we're":["we","'re"],"We're":["We","'re"],"we've":["we","'ve"],"We've":["We","'ve"],"weren't":["were","n't"],"what'll":["what","'ll"],"what'll've":["what","'ll","'ve"],"what're":["what","'re"],"what's":["what","'s"],"what've":["what","'ve"],"when's":["when","'s"],"when've":["when","'ve"],"where'd":["where","'d"],"where's":["where","'s"],"where've":["where","'ve"],"who'd":["who","'d"],"who'll":["who","'ll"],"who'll've":["who","'ll'","'ve'"],"who're":["who","'re"],"who's":["who","'s"],"who've":["who","'ve"],"why've":["why","'ve"],"why'll":["why","'ll"],"why're":["why","'re"],"why's":["why","'s"],"will've":["will","'ve"],"won't":["wo","n't"],wont:["wo","nt"],"won't've":["wo","n't","'ve"],"would've":["would","'ve"],"wouldn't":["would","n't"],"wouldn't've":["would","n't","'ve"],"y'all":["y'","all"],"y'all'd":["y'","all","'d"],"y'all'd've":["y'","all","'d","'ve"],"y'all're":["y'","all","'re'"],"y'all've":["y'","all","ve"],"you'd":["you","'d"],"You'd":["You","'d"],"you'd've":["you","'d","'ve"],"You'd've":["You","'d","'ve"],"you'll":["you","'ll"],"You'll":["You","'ll"],"you'll've":["you","'ll","'ve"],"You'll've":["You","'ll","'ve"],"you're":["you","'re"],"You're":["You","'re"],"you've":["you","'ve"],"You've":["You","'ve"]},ce=/^([,([{*<"“'`‘]|\.{1,3})/gi,de=/([,.!?%*>:;"'”`)\]}]|\.\.\.)$/gi;function ue(e,t){var n;for(n=0;n<t.length;n++)e.push(t[n]);return e}function ve(e){var t,n,r,o=[],a=[];do{se[e]||le[e]||he[e]?n=!0:(t=e.split(ce)).length>1?(o.push(t[1]),e=t[2]):(t=e.split(de)).length>1?(e=t[0],a.unshift(t[1])):n=!0}while(!n);return r=o,e&&r.push(e),"..."===a[a.length-1]&&(a.pop(),a.unshift("...")),ue(r,a),r}function pe(e,t){var n,r,o,a,i,l;if(!te(e))throw new TypeError(ie("0kd3F,Ex",e));if(arguments.length>1&&!R(t))throw new TypeError(ie("0kd55,Ld",t));if(!e)return[];for(r=t?e.split(/(\s+)/):e.split(/\s+/),i={},o=[],l=0;l<r.length;l++)K(i,a=r[l])?ue(o,i[a]):(ue(o,n=ve(a)),i[a]=n);return o}export{pe as default};
//# sourceMappingURL=mod.js.map
