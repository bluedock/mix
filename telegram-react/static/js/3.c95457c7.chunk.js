(this.webpackJsonptelegram_react=this.webpackJsonptelegram_react||[]).push([[3],{665:function(e,t,n){},667:function(e,t,n){},668:function(e,t,n){},669:function(e,t,n){},671:function(e,t,n){"use strict";n.r(t);var r=n(28),a=n(11),i=n.n(a),s=n(21),o=n(3),c=n(4),l=n(6),u=n(5),d=n(7),p=n(0),f=n.n(p),h=n(13),k=n.n(h),m=n(27),S=n(15),b=n.n(S),v=n(23),g=n(341),w=n(600),y=n(270),O=n(670),E=n(194),j=n(45),C=n(44),P=n(51),R=n(666),M=n.n(R),x=n(75),D=n(9),U=(n(665),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){var r=this.props,a=r.info;return r.theme!==e.theme||a!==e.info}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.info,r=e.onSelect,a=e.onMouseDown,i=e.onMouseEnter,s=e.onDeleteClick;if(!n)return null;var o=n.title,c=n.stickers.map(function(e,n){return f.a.createElement("div",{className:k()("sticker-set-item",t.stickerSetItem),key:e.sticker.id,"data-sticker-id":e.sticker.id,onClick:function(){return r(e)},onMouseEnter:i,onMouseDown:a},f.a.createElement(x.b,{key:e.sticker.id,sticker:e,autoplay:!1,blur:!1,displaySize:D.ib-6,preview:!0,source:x.a.PICKER}))});return f.a.createElement("div",{className:"sticker-set"},f.a.createElement("div",{className:k()("sticker-set-title",t.title)},f.a.createElement("div",{className:"sticker-set-title-wrapper"},f.a.createElement("span",null,o)),s&&f.a.createElement(w.a,{"aria-label":"delete",classes:{root:t.iconRoot},size:"small",onClick:s},f.a.createElement(M.a,{fontSize:"inherit"}))),f.a.createElement("div",{className:"sticker-set-content"},c))}}]),t}(f.a.Component)),I=b()(function(e){return{title:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary},stickerSetItem:{width:D.ib,height:D.ib,padding:3,boxSizing:"border-box","&:hover":{background:"dark"===e.palette.type?"#303030":"#f4f4f4",borderRadius:6}},iconRoot:{fontSize:16,padding:4,margin:"4px 8px 4px 4px"}}},{withTheme:!0})(U),T=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];Object(o.a)(this,e),this.start=function(){n.stopped=!1,n.id=requestAnimationFrame(n.startAnim)},this.startAnim=function(e){var t=n.start,r=n.duration;n.start=e,n.end=t+r,n.draw(e)},this.draw=function(t){var r=n.stopped,a=n.duration,i=n.start,s=n.options;if(t-i>a&&s.every(function(e){return e.to===e.last})&&(n.stopped=!0),!r){var o=Math.min(t-i,a),c=0===a?1:o/a,l=e.outSine(c);s.forEach(function(e){var t=e.from,n=e.to,r=e.func;e.last=t+(n-t)*l,r(e.last)}),n.id=requestAnimationFrame(n.draw)}},this.stop=function(){n.stopped=!0,cancelAnimationFrame(n.id)},this.options=r,this.duration=t}return Object(c.a)(e,null,[{key:"outSine",value:function(e){return Math.sin(e*Math.PI/2)}}]),e}(),N=n(34),L=n(55);n(667);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var V=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClientUpdateStickerSetPosition=function(e){var t=e.position;n.setState({position:t})},n.scrollToPosition=function(){var e=n.state.position,t=Object(j.a)(n),r=t.animator,a=t.anchorRef,i=t.scrollRef.current,s=a.current,o=C.findDOMNode(s),c=i.scrollLeft,l=44*e-147,u=Number(o.style.left.replace("px","")),d=44*e;r&&r.stop(),n.animator=new T(0,[{from:c,to:l,func:function(e){return i.scrollLeft=e}},{from:Math.abs(d-u)>338?d-338*Math.sign(d-u):u,to:d,func:function(e){return o.style.left=e+"px"}}]),setTimeout(function(){n.animator&&n.animator.start()},0)},n.handleWheel=function(e){var t=Object(j.a)(n).scrollRef;0===e.deltaX&&(t.current.scrollLeft+=e.deltaY)},n.handleSelect=function(e){var t=n.props,r=t.stickers;(0,t.onSelect)(r.indexOf(e))},n.state={position:0},n.scrollRef=f.a.createRef(),n.anchorRef=f.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){L.a.on("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentWillUnmount",value:function(){L.a.off("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}},{key:"componentDidUpdate",value:function(e,t,n){t.position!==this.state.position&&this.scrollToPosition()}},{key:"render",value:function(){var e=this,t=this.props,n=t.classes,r=t.stickers.map(function(t){return f.a.createElement(x.b,{key:t.sticker.id,className:"stickers-picker-header-sticker",style:{width:32,height:32},sticker:t,play:!1,autoplay:!1,blur:!1,displaySize:32,preview:!0,source:x.a.PICKER_HEADER,openMedia:function(){return e.handleSelect(t)}})});return f.a.createElement("div",{className:k()("stickers-picker-header",n.borderColor)},f.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-header-scroll",onWheel:this.handleWheel},f.a.createElement("div",{className:"stickers-picker-header-items"},r),f.a.createElement("div",{ref:this.anchorRef,className:k()("stickers-picker-header-anchor",n.accentBackgroundDark)})))}}]),t}(f.a.Component),z=b()(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},Object(N.b)(e),{},Object(N.a)(e))})(V),A=n(25),B=n(20),F=n(48),H=n(2),W=n(1),X=(n(668),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onUpdateInstalledStickerSets=function(e){var t=e.is_masks;e.sticker_set_ids;t&&n.filterSets()},n.onUpdateRecentStickers=function(e){n.reloadRecentContent()},n.scrollTop=function(){n.scrollRef.current.scrollTop=0},n.loadContent=function(){var e=Object(s.a)(i.a.mark(function e(t,r,a){var s,o,c,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}return e.next=3,W.a.send({"@type":"getRecentStickers",is_attached:!1});case 3:t=e.sent;case 4:if(a){e.next=13;break}return e.next=7,W.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return s=e.sent,o=[],s.sets.forEach(function(e){o.push(W.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=12,Promise.all(o);case 12:a=e.sent;case 13:c=a.slice(0,5),l=a.reduce(function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e},[]),n.setState({recent:t,stickerSets:r,sets:c,fullSets:a,headerStickers:l}),n.setsLength=c.length;case 17:case"end":return e.stop()}},e)}));return function(t,n,r){return e.apply(this,arguments)}}(),n.loadInViewContentOnScroll=function(){n.loadInViewContent()},n.loadInViewContentOnScrollEnd=function(){n.loadInViewContent(400)},n.loadInViewContent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=n.scrollRef.current,r=n.state.sets,a=[];r.forEach(function(r){var i=n.itemsMap.get(r.id),s=C.findDOMNode(i);if(s){var o=t.scrollTop-e,c=t.scrollTop+t.offsetHeight+e,l=s.offsetTop,u=s.offsetTop+s.clientHeight;l>=o&&s.offsetTop<=c?a.push(r):u>=o&&u<=c?a.push(r):l<=o&&u>=c&&a.push(r)}}),a.forEach(function(e){var t=H.a.getStore();n.loadedSets.has(e.id)||(n.loadedSets.set(e.id,e.id),Object(B.x)(t,e))})},n.updatePosition=function(){var e=n.scrollRef.current,t=n.state.sets,r=e.scrollHeight,a=0,i=0;t.forEach(function(t,s){var o=n.itemsMap.get(t.id);if(o){var c=C.findDOMNode(o);if(c){i=0===s?c.offsetTop:i;var l=c.offsetTop-i;if(c&&l<=e.scrollTop){var u=Math.abs(e.scrollTop-l);u<=r&&(r=u,a=s)}}}}),W.a.clientUpdate({"@type":"clientUpdateStickerSetPosition",position:a})},n.handleScroll=Object(s.a)(i.a.mark(function e(){var t,r,a,s,o,c,l;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.loadInViewContentOnScrollEnd(),n.updatePosition(),t=n.scrollRef.current,!n.loadingChunk){e.next=5;break}return e.abrupt("return");case 5:if(r=!1,t.scrollTop+t.offsetHeight>=t.scrollHeight-400&&(r=!0),r){e.next=9;break}return e.abrupt("return",!1);case 9:if(a=n.state,s=a.sets,(o=a.stickerSets).sets.length!==s.length){e.next=12;break}return e.abrupt("return");case 12:return n.loadingChunk=!0,c=[],o.sets.slice(n.setsLength,n.setsLength+5).forEach(function(e){c.push(W.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=17,Promise.all(c).finally(function(){n.loadingChunk=!1});case 17:l=e.sent,n.setsLength+=l.length,n.setState({sets:s.concat(l)});case 20:case"end":return e.stop()}},e)})),n.loadPreviewContent=function(e){var t=n.state,r=t.recent,a=t.sets,i=Object(F.e)([r].concat(a)).find(function(t){return t.sticker.id===e});if(i){var s=H.a.getStore();Object(B.w)(s,i,null);Object(F.d)(i,a,5).forEach(function(e){Object(B.w)(s,e,null)})}},n.handleMouseEnter=function(e){var t=Number(e.currentTarget.dataset.stickerId);if(t&&n.mouseDown){n.mouseDownStickerId!==t&&(n.mouseDownStickerId=null),n.setState({previewStickerId:t}),n.loadPreviewContent(t);var r=n.props.onPreview,a=n.state,i=a.recent,s=a.sets;r(Object(F.e)([i].concat(s)).find(function(e){return e.sticker.id===t}))}},n.handleMouseDown=function(e){var t=Number(e.currentTarget.dataset.stickerId);if(t){n.mouseDownStickerId=t;var r=Date.now();return n.setState({previewStickerId:t,timestamp:r,showPreview:!1,cancelSend:!1}),setTimeout(function(){n.state.timestamp===r&&n.setState({showPreview:!0,cancelSend:!0},function(){var e=n.props.onPreview,r=n.state,a=r.recent,i=r.sets;e(Object(F.e)([a].concat(i)).find(function(e){return e.sticker.id===t}))})},500),n.loadPreviewContent(t),n.mouseDown=!0,document.addEventListener("mouseup",n.handleMouseUp),e.preventDefault(),e.stopPropagation(),!1}},n.handleMouseUp=function(){n.setState({previewStickerId:0,timestamp:0,showPreview:!1}),(0,n.props.onPreview)(null),n.mouseDown=!1,document.removeEventListener("mouseup",n.handleMouseUp)},n.handleStickerSelect=function(e){var t=n.props.onSelect;n.state.cancelSend||t(e)},n.handleSelectSet=function(){var e=Object(s.a)(i.a.mark(function e(t){var r,a,s,o,c,l,u,d,p,f;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.state,a=r.sets,s=r.stickerSets,o=Object(j.a)(n),c=o.scrollRef,!(t<a.length)){e.next=7;break}(l=n.itemsMap.get(a[t].id))&&(u=C.findDOMNode(l))&&(c.current.scrollTop=u.offsetTop),e.next=21;break;case 7:if(!(t<s.sets.length)){e.next=21;break}if(!n.loadingChunk){e.next=10;break}return e.abrupt("return");case 10:if(s.sets.length!==a.length){e.next=12;break}return e.abrupt("return");case 12:return n.loadingChunk=!0,d=[],s.sets.slice(n.setsLength,t+1).forEach(function(e){d.push(W.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=17,Promise.all(d).finally(function(){return n.loadingChunk=!1});case 17:p=e.sent,n.setsLength+=p.length,f=a.concat(p),n.setState({sets:f},function(){t<f.length&&n.handleSelectSet(t)});case 21:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.handleDeleteRecent=function(){W.a.send({"@type":"clearRecentStickers",is_attached:!1})},n.handleDeleteStickerSet=function(e){W.a.send({"@type":"changeStickerSet",set_id:e,is_installed:!1})},n.scrollRef=f.a.createRef(),n.itemsMap=new Map,n.loadedSets=new Map,n.state={recent:null,stickerSets:null,sets:[],headerStickers:[],position:0},n.loadInViewContentOnScrollEnd=Object(A.c)(n.loadInViewContentOnScrollEnd,100),n.loadInViewContentOnScroll=Object(A.y)(n.loadInViewContentOnScroll,2e3),n.updatePosition=Object(A.y)(n.updatePosition,250),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"shouldComponentUpdate",value:function(e,t,n){var r=this.state,a=r.position,i=r.recent,s=r.stickerSets,o=r.sets,c=r.showPreview;return t.recent!==i||(t.stickerSets!==s||(t.sets!==o||(t.showPreview!==c||t.position!==a)))}},{key:"componentDidMount",value:function(){L.a.on("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),L.a.on("updateRecentStickers",this.onUpdateRecentStickers)}},{key:"componentWillUnmount",value:function(){L.a.off("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),L.a.off("updateRecentStickers",this.onUpdateRecentStickers)}},{key:"filterSets",value:function(e){var t=this.state;t.sets,t.stickerSets}},{key:"reloadRecentContent",value:function(){var e=Object(s.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.a.send({"@type":"getRecentStickers",is_attached:!1});case 2:t=e.sent,this.setState({recent:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.t,n=this.state,r=n.recent,a=(n.stickerSets,n.sets),i=n.headerStickers;this.itemsMap.clear();var s=a.map(function(t){return f.a.createElement(I,{key:t.id,ref:function(n){return e.itemsMap.set(t.id,n)},info:t,onSelect:e.handleStickerSelect,onMouseDown:e.handleMouseDown,onMouseEnter:e.handleMouseEnter})}),o=r&&r.stickers.length>0?{stickers:r.stickers,title:t("RecentStickers")}:null;return f.a.createElement("div",{className:"stickers-picker"},f.a.createElement(z,{onSelect:this.handleSelectSet,stickers:i}),f.a.createElement("div",{ref:this.scrollRef,className:"stickers-picker-scroll",onScroll:this.handleScroll},Boolean(o)&&f.a.createElement(I,{info:o,onSelect:this.handleStickerSelect,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onDeleteClick:this.handleDeleteRecent}),s))}}]),t}(f.a.Component)),q=Object(m.a)(Object(P.c)(),Object(v.c)(),Object(P.b)())(X),J=n(12),K=n(90),Y=(n(669),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onClientUpdateChange=function(e){n.picker=null},n.handleButtonMouseEnter=function(e){n.buttonEnter=!0,setTimeout(function(){n.buttonEnter&&(n.updatePicker(!0),n.loadStickerSets())},D.f)},n.loadStickerSets=Object(s.a)(i.a.mark(function e(){var t,r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.sets){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,W.a.send({"@type":"getRecentStickers",is_attached:!1});case 4:return n.recent=e.sent,e.next=7,W.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return n.stickerSets=e.sent,t=[],n.stickerSets.sets.forEach(function(e){t.push(W.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=12,Promise.all(t);case 12:n.sets=e.sent,r=n.stickersPickerRef.current,a=H.a.getStore(),Object(B.v)(a,n.recent),n.sets.slice(0,5).reverse().forEach(function(e){Object(B.x)(a,e),r.loadedSets.set(e.id,e.id)}),n.sets.reduce(function(e,t){return t.stickers.length>0&&e.push(t.stickers[0]),e},[]).forEach(function(e){Object(B.y)(a,e)});case 20:case"end":return e.stop()}},e)})),n.handleButtonMouseLeave=function(){n.buttonEnter=!1,setTimeout(function(){n.tryClosePicker()},D.f)},n.tryClosePicker=function(){var e=n.state.sticker;n.paperEnter||n.buttonEnter||e||n.updatePicker(!1)},n.handlePaperMouseEnter=function(){n.paperEnter=!0},n.handlePaperMouseLeave=function(){n.paperEnter=!1,setTimeout(function(){n.tryClosePicker()},D.f)},n.updatePicker=function(e){n.setState({open:e})},n.handleEmojiClick=function(){n.setState({tab:0})},n.handleStickersClick=function(){var e=n.stickersPickerRef.current,t=n.state.tab;e.loadContent(n.recent,n.stickerSets,n.sets),n.setState({tab:1}),1===t&&e.scrollTop()},n.handleStickerSend=function(e){e&&(W.a.clientUpdate({"@type":"clientUpdateStickerSend",sticker:e}),n.updatePicker(!1))},n.handleStickerPreview=function(e){n.setState({sticker:e}),W.a.clientUpdate({"@type":"clientUpdateStickerPreview",sticker:e}),e||n.tryClosePicker()},n.state={open:!1,tab:0},n.emojiPickerRef=f.a.createRef(),n.stickersPickerRef=f.a.createRef(),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){J.a.on("clientUpdateThemeChange",this.onClientUpdateChange),K.a.on("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"componentWillUnmount",value:function(){J.a.off("clientUpdateThemeChange",this.onClientUpdateChange),K.a.off("clientUpdateLanguageChange",this.onClientUpdateChange)}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.theme,a=e.t,i=this.state,s=i.open,o=i.tab,c=i.sticker;if(s&&!this.picker){var l={search:a("Search"),notfound:a("NotEmojiFound"),skintext:a("ChooseDefaultSkinTone"),categories:{search:a("SearchResults"),recent:a("Recent"),people:a("SmileysPeople"),nature:a("AnimalsNature"),foods:a("FoodDrink"),activity:a("Activity"),places:a("TravelPlaces"),objects:a("Objects"),symbols:a("Symbols"),flags:a("Flags"),custom:a("Custom")}};this.picker=f.a.createElement(O.a,{ref:this.emojiPickerRef,set:"apple",showPreview:!1,showSkinTones:!1,onSelect:this.props.onSelect,color:n.palette.primary.dark,i18n:l,native:Object(A.p)(),style:{width:338,overflowX:"hidden"}}),this.stickersPicker=f.a.createElement(q,{ref:this.stickersPickerRef,onSelect:this.handleStickerSend,onPreview:this.handleStickerPreview})}return f.a.createElement(f.a.Fragment,null,f.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"dark"===n.palette.type?"emoji-mart.dark.css":"emoji-mart.light.css"}),f.a.createElement(w.a,{className:"inputbox-icon-button","aria-label":"Emoticon",onMouseEnter:this.handleButtonMouseEnter,onMouseLeave:this.handleButtonMouseLeave},f.a.createElement(y.a,null)),f.a.createElement("div",{className:k()(t.pickerRoot,Object(r.a)({},t.pickerRootOpened,s)),onMouseEnter:this.handlePaperMouseEnter,onMouseLeave:this.handlePaperMouseLeave},f.a.createElement("div",{className:"emoji-picker-header"},f.a.createElement(g.a,{color:0===o?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleEmojiClick},a("Emoji")),f.a.createElement(g.a,{color:1===o?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleStickersClick},a("Stickers"))),f.a.createElement("div",{className:k()("emoji-picker-content",{"emoji-picker-content-stickers":1===o})},this.picker,this.stickersPicker),Boolean(c)&&f.a.createElement(E.a,{sticker:c})))}}]),t}(f.a.Component)),G=Object(m.a)(b()(function(e){return{pickerRoot:{zIndex:e.zIndex.modal,width:338,overflowX:"hidden",backgroundColor:e.palette.background.paper,color:e.palette.text.primary,borderRadius:e.shape.borderRadius,boxShadow:e.shadows[8],position:"absolute",bottom:54,display:"none"},pickerRootOpened:{display:"block"}}},{withTheme:!0}),Object(v.c)());t.default=G(Y)}}]);
//# sourceMappingURL=3.c95457c7.chunk.js.map