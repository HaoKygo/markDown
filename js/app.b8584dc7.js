(function(e){function t(t){for(var n,r,o=t[0],l=t[1],i=t[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,i||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],n=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},c=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/markDown/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var d=l;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0031":function(e,t,s){},"034f":function(e,t,s){"use strict";var n=s("85ec"),a=s.n(n);a.a},"279e":function(e,t,s){"use strict";var n=s("432b"),a=s.n(n);a.a},3892:function(e,t,s){"use strict";var n=s("3b21"),a=s.n(n);a.a},"3b21":function(e,t,s){},"432b":function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=c(e);return s(t)}function c(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id="4678"},"4e11":function(e,t,s){"use strict";var n=s("0031"),a=s.n(n);a.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("aside",{staticClass:"tool-bar"},[s("ctl-button",{attrs:{text:e.addBtnText},on:{"btn-clicked":e.addNote}}),s("ctl-button",{attrs:{text:e.deleteBtnText},on:{"btn-clicked":e.deleteNote}}),e.selectedNote?s("note-title-input",{model:{value:e.selectedNote.title,callback:function(t){e.$set(e.selectedNote,"title",t)},expression:"selectedNote.title"}}):e._e(),s("div",{staticClass:"notes-item"},e._l(e.notes,(function(t,n){return s("note-item",{key:n,attrs:{title:t.title,isSelected:t===e.selectedNote},on:{"note-clicked":function(s){return e.selectNote(t)}}})})),1)],1),e.selectedNote?[s("main-edit-panel",{attrs:{createdDate:e._f("date")(e.selectedNote.created)},model:{value:e.selectedNote.content,callback:function(t){e.$set(e.selectedNote,"content",t)},expression:"selectedNote.content"}}),s("preview-panel",{attrs:{notePre:e.notePreview}})]:e._e()],2)},c=[],r=(s("7db0"),s("c975"),s("a434"),s("e0c1")),o=s.n(r),l=s("c1df"),i=s.n(l),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ctl-btn",on:{click:function(t){return e.$emit("btn-clicked")}}},[e._v(e._s(e.text))])},u=[],f={name:"CtlButton",props:["text"]},j=f,b=(s("4e11"),s("2877")),p=Object(b["a"])(j,d,u,!1,null,"40cae430",null),m=p.exports,h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"note",class:{selected:e.isSelected},on:{click:function(t){return e.$emit("note-clicked")}}},[e._v(" "+e._s(e.title)+" ")])},v=[],k={name:"NoteItem",props:["title","isSelected"]},g=k,y=(s("279e"),Object(b["a"])(g,h,v,!1,null,"3adff8aa",null)),_=y.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"notes-title-input"},[s("label",{staticClass:"input-label"},[e._v("标题：")]),s("input",{staticClass:"title-input",attrs:{type:"text",placeholder:"笔记标题"},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])},N=[],x={name:"NoteTitleInput",props:["value"]},O=x,z=(s("b865"),Object(b["a"])(O,w,N,!1,null,"22f8aad6",null)),P=z.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",{staticClass:"main"},[s("textarea",{staticClass:"note-input",domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),s("div",{staticClass:"status-bar"},[e._v(" 创建于："),s("span",{staticClass:"date"},[e._v(e._s(e.createdDate))])])])},S=[],$={name:"MainEditPanel",props:["value","createdDate"]},T=$,M=(s("f4f8"),Object(b["a"])(T,C,S,!1,null,"6c4a7359",null)),E=M.exports,D=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("aside",{staticClass:"preview",domProps:{innerHTML:e._s(e.notePre)}})},I=[],B={name:"PreviewPanel",props:["notePre"]},H=B,J=(s("3892"),Object(b["a"])(H,D,I,!1,null,"7f9d9968",null)),q=J.exports,A={name:"App",components:{CtlButton:m,NoteItem:_,NoteTitleInput:P,MainEditPanel:E,PreviewPanel:q},data:function(){return{notes:JSON.parse(localStorage.getItem("notes"))||[],selectedId:null,addBtnText:"+ 添加",deleteBtnText:"- 删除"}},computed:{notePreview:function(){return this.selectedNote?o()(this.selectedNote.content):""},calAddTitle:function(){return"已添加"+this.notes.length+"条笔记"},selectedNote:function(){var e=this;return this.notes.find((function(t){return t.id===e.selectedId}))}},methods:{addNote:function(){var e=Date.now(),t={id:String(e),title:"新笔记 "+(this.notes.length+1),content:"**Hello！**你可以用[markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)来写笔记！",created:e};this.notes.push(t)},deleteNote:function(){if(this.selectedNote&&confirm("确定删除笔记？")){var e=this.notes.indexOf(this.selectedNote);-1!==e&&this.notes.splice(e,1)}},selectNote:function(e){this.selectedId=e.id},saveNotes:function(){localStorage.setItem("notes",JSON.stringify(this.notes))}},watch:{notes:{handler:"saveNotes",deep:!0}},filters:{date:function(e){return i()(e).format("YY/MM/DD, HH:mm")}}},G=A,L=(s("034f"),Object(b["a"])(G,a,c,!1,null,null,null)),U=L.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(U)}}).$mount("#app")},"74ad":function(e,t,s){},"85ec":function(e,t,s){},b865:function(e,t,s){"use strict";var n=s("74ad"),a=s.n(n);a.a},cece:function(e,t,s){},f4f8:function(e,t,s){"use strict";var n=s("cece"),a=s.n(n);a.a}});
//# sourceMappingURL=app.b8584dc7.js.map