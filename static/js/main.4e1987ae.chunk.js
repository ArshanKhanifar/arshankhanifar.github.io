(this.webpackJsonpnetwork_performance=this.webpackJsonpnetwork_performance||[]).push([[0],{120:function(e,t,a){e.exports=a(133)},125:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),_=a(30),i=a.n(_);a(125),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(126);var s=a(13),c=a(19),o=a(21),l=a(35),u=a(1),p=a.n(u),h=a(5),m=a(2),d=a(3),f=a(17),b=a(6),v=a(7),E=a(14),O=a(12),k=a(10),w=a(20),y=a(28),A=a(27),g=(a(128),function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{style:{fontSize:13,fontWeight:"bold",whiteSpace:"nowrap"}},r.a.createElement(k.a,{sm:6},"min: ",this.props.min,"ms",r.a.createElement("br",null),"median: ",this.props.median,"ms",r.a.createElement("br",null),"max: ",this.props.max,"ms"),r.a.createElement(k.a,{sm:6},"25%: ",this.props.q1,"ms",r.a.createElement("br",null),"75%: ",this.props.q3,"ms",r.a.createElement("br",null),"jitter: ",this.props.jitter,"ms")))}}]),a}(n.Component)),T=(a(129),a(50)),x=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(T.a,this.props)}}]),a}(n.Component),M=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Body,{className:"WBBLatencyStageReport"},r.a.createElement(O.a,null,r.a.createElement(k.a,{md:2,xs:2},r.a.createElement("h5",{style:{marginTop:15}},this.props.title)),r.a.createElement(k.a,{md:7,xs:10},r.a.createElement(x,{data:this.props.data,scale:this.props.box_plot_scale,tooltip_html:"latency: ${d.value}</br>timestamp: ${d.time}"})),r.a.createElement(k.a,{md:3,xs:12},r.a.createElement(g,Object.assign({data:this.props.data},this.props.stats))))))}}]),a}(n.Component),D="1px solid #979797",j=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).median=0,n}return Object(d.a)(a,[{key:"report_bufferbloat",value:function(e,t){if(e.stats){var a=0,n="";return 0===t?(a=e.stats.median,this.median=a):(a=e.stats.median-this.median,n=(a="+".concat((a=a>=0?a:0).toFixed(2)))<50?"good":"bad"),a+=" ms",r.a.createElement("div",{className:"latency ".concat(n)},a)}}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{style:{textAlign:"center"}},Object.keys(this.props.stage_data).map((function(t,a){var n=e.props.stage_data[t];return r.a.createElement(k.a,{key:t,sm:12/e.props.stage_data.length,style:0!==a?{borderLeft:D}:{}},r.a.createElement("div",{className:"condition"},n.configuration.title),e.report_bufferbloat(n,a))}))))}}]),a}(n.Component),P=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Body,{className:"WBBLatencySummary"},r.a.createElement(O.a,null,r.a.createElement(k.a,{sm:12,md:7},r.a.createElement("h4",null,"Latency Results"),r.a.createElement("p",null,'Bufferbloat is measured by comparing the latency of an Internet connection when it is unloaded to when it is "saturated."')),r.a.createElement(k.a,{sm:12,md:5},r.a.createElement(j,{stage_data:this.props.stage_data})))))}}]),a}(n.Component),R=a(15),L=a(16),U=a(29),C=function(){function e(){Object(m.a)(this,e)}return Object(d.a)(e,[{key:"run",value:function(){var e=Object(h.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),B=function(){function e(){Object(m.a)(this,e)}return Object(d.a)(e,null,[{key:"sleep",value:function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){e()}),t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),I=function(){function e(t,a,n,r,_){Object(m.a)(this,e),this.url=t,this.interval=a,this.interval_cb=n,this.done_cb=r,this.count=_,this.cancelled=!1}return Object(d.a)(e,[{key:"start",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,a,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t++<this.count)){e.next=17;break}return e.next=4,fetch(this.url).then((function(e){return e.text()}));case 4:if(a=performance.getEntriesByName(this.url),n=a.slice(-1).pop(),r=n.responseStart-n.requestStart,!this.cancelled){e.next=9;break}return e.abrupt("return");case 9:if(!(r<R.a.IGNORE_TTFB_BELOW)){e.next=11;break}return e.abrupt("continue",1);case 11:return this.interval_cb(r),performance.clearResourceTimings(),e.next=15,B.sleep(this.interval);case 15:e.next=1;break;case 17:this.done_cb&&this.done_cb();case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){this.cancelled=!0}}]),e}(),N=function(){function e(){Object(m.a)(this,e)}return Object(d.a)(e,null,[{key:"provide",value:function(e,t,a){return new I("https://fonts.gstatic.com/l/font?kit=KFOmCnqEu92Fr1Me4GZNCzcPK4I&skey=a0a0114a1dcab3ac&v=v20",R.a.PING_INTERVAL,e,t,a)}}]),e}(),W=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e,n){var r;return Object(m.a)(this,a),(r=t.call(this)).data_callback=e,r.done_callback=n,r}return Object(d.a)(a,[{key:"run",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(U.a)(Object(L.a)(a.prototype),"run",this).call(this),t=N.provide(this.data_callback,this.done_callback,R.a.NUM_LATENCY_MEASUREMENTS),e.next=4,t.start();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(C),K=function(){function e(t,a){Object(m.a)(this,e),this.measurement_callback=t||function(){return null},this.done_callback=a||function(){return null},this.controller=new AbortController}return Object(d.a)(e,[{key:"get_http_fetch",value:function(e,t){var a=this.controller.signal;return fetch("https://speed".concat(t+1,".arshankhanifar.workers.dev/hi/down?bytes=").concat(e),{signal:a})}},{key:"convert_to_bps",value:function(e){return 1e3*e*8}},{key:"download",value:function(){var e=Object(h.a)(p.a.mark((function e(t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.measure_download(t,a));case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"download_for_n_seconds",value:function(){var e=Object(h.a)(p.a.mark((function e(t,a){var n=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 5e8,setTimeout((function(){n.cancel()}),1e3*t),e.abrupt("return",this.measure_download(5e8,a));case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"make_requests",value:function(e,t){var a=this;return Array(e).fill(0).map((function(e){return{}})).map((function(e,n){return e.fetch=function(){return a.get_http_fetch(t,n)},e}))}},{key:"measure_download",value:function(){var e=Object(h.a)(p.a.mark((function e(t,a){var n,r,_,i,s,c,o,l=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1e6,n=Date.now(),r=Date.now(),_=0,i=0,s=function(){if(!(_<1e6)){var e=l.convert_to_bps(_/(Date.now()-r));l.measurement_callback(e),_=0,r=Date.now()}},c=this.make_requests(a,t).map(function(){var e=Object(h.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,t.fetch();case 4:n=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("download request:".concat(a," unsuccessful"),e.t0),e.abrupt("return",Promise.resolve());case 11:return r=n.body.getReader(),e.abrupt("return",new Promise(function(){var e=Object(h.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return r.read().then((function(e){var n=e.done,r=e.value;if(!n)return _+=r.length,i+=r.length,s(),a();t()}))},e.prev=1,e.next=4,a();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t();case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}()),e.next=6,Promise.all(c);case 6:return o=this.convert_to_bps(i/(Date.now()-n)),this.done_callback(o),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){this.controller.abort()}}]),e}(),S=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e,n,r){var _;return Object(m.a)(this,a),(_=t.call(this)).data_callback=e,_.bandwidth_callback=n,_.done_callback=r,_}return Object(d.a)(a,[{key:"run",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1e5,Object(U.a)(Object(L.a)(a.prototype),"run",this).call(this),(t=N.provide(this.data_callback,null,1e5)).start(),n=new K((function(e){console.log("realtime rate ".concat(e/1e6,"mbps"))})),e.next=8,n.download_for_n_seconds(R.a.DOWNLOAD_DURATION,R.a.DOWNLOAD_NUM_STREAMS);case 8:r=e.sent,t.cancel(),this.bandwidth_callback(r),this.done_callback();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(C),q=function(){function e(t){Object(m.a)(this,e),this.started_saturation_cb=t||function(){}}return Object(d.a)(e,[{key:"get_http_fetch",value:function(e,t){var a="https://speed".concat(t+1,".arshankhanifar.workers.dev/hi/up");return fetch("".concat(a),{method:"POST",body:"0".repeat(e),headers:{"content-length":e}})}},{key:"measure_bandwidth",value:function(){var e=Object(h.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Date.now(),e.next=3,this.get_http_fetch(t,1);case 3:return n=e.sent,e.next=6,n.text();case 6:return e.abrupt("return",t/(Date.now()-a));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"guess_upload_speed",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,a,n,r,_,i,c,o,l,u=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(){var e=Object(h.a)(p.a.mark((function e(t,a,n,r){var _,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_=null,i=0;case 2:if(!(i<t)){e.next=13;break}return e.next=5,u.measure_bandwidth(r);case 5:if(_=e.sent,console.log("bw",8*_/1e3),!(Math.abs(_-n)/_>a)){e.next=10;break}return e.abrupt("return",[!1,_]);case 10:i++,e.next=2;break;case 13:return e.abrupt("return",[!0,_]);case 14:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),a=.2,n=0,r=1;case 4:if(!(r<30)){e.next=18;break}return _=1<<r,e.next=8,t(2,a,n,_);case 8:if(i=e.sent,c=Object(s.a)(i,2),o=c[0],l=c[1],!o){e.next=14;break}return e.abrupt("return",1e3*l);case 14:n=l;case 15:r++,e.next=4;break;case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"upload",value:function(){var e=Object(h.a)(p.a.mark((function e(t,a){var n,r,_,i,s=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.guess_upload_speed();case 2:return n=e.sent,this.started_saturation_cb(),r=t*n/a,_=Date.now(),i=Array(a).fill(0).map((function(e){return{}})).map((function(e,t){return e.fetch=function(){return s.get_http_fetch(r,t)},e})),e.next=9,Promise.all(i.map((function(e){return e.fetch().then((function(e){return e.text()}))})));case 9:return console.log("total time took:".concat((Date.now()-_)/1e3)),e.abrupt("return",r*a*1e3*8/(Date.now()-_));case 11:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}(),F=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e,n,r){var _;return Object(m.a)(this,a),(_=t.call(this)).data_callback=e,_.bandwidth_callback=n,_.done_callback=r,_}return Object(d.a)(a,[{key:"run",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1e5,Object(U.a)(Object(L.a)(a.prototype),"run",this).call(this),t=N.provide(this.data_callback,null,1e5),n=new q((function(){t.start()})),e.next=6,n.upload(R.a.UPLOAD_DURATION,R.a.UPLOAD_NUM_STREAMS);case 6:r=e.sent,t.cancel(),this.bandwidth_callback(r),this.done_callback();case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(C),H=a(26),G=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,(this.props.download_speed||this.props.upload_speed)&&r.a.createElement(O.a,null,r.a.createElement(k.a,{sm:0,md:3}),r.a.createElement(k.a,{sm:12,md:3},r.a.createElement("h4",{style:{marginTop:10}},"Speed Test Results:")),r.a.createElement(k.a,{sm:12,md:3,style:{textAlign:"center"}},r.a.createElement(O.a,null,this.props.download_speed&&r.a.createElement(k.a,{sm:6},r.a.createElement("div",null,"\u2193 Download"),r.a.createElement("div",{style:{fontSize:20}},(this.props.download_speed/1e6).toFixed(2),"Mbps")),this.props.upload_speed&&r.a.createElement(k.a,{sm:6,style:{borderLeft:D}},r.a.createElement("div",null,"\u2191 Upload"),r.a.createElement("div",{style:{fontSize:20}},(this.props.upload_speed/1e6).toFixed(2),"Mbps"))))))}}]),a}(n.Component),z=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"get_picture",value:function(e){return Object.keys(e.criteria).map((function(t){return e.criteria[t]})).reduce((function(e,t){return e&&t}))?"shield.svg":"bad.svg"}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.props.report?r.a.createElement("div",{className:"WBBCardTitle WBBTestingDone"},r.a.createElement("h2",null,"Your Bufferbloat Grade: ",this.props.report.grade),r.a.createElement(O.a,{style:{marginTop:15,marginBottom:15}},this.props.report.categories.map((function(t){return r.a.createElement("div",{className:"indicator",key:t.name},r.a.createElement("img",{src:e.get_picture(t),alt:"indicator-good"})," ",r.a.createElement("strong",null,t.name)," ")})))):r.a.createElement("div",{className:"WBBCardTitle"},r.a.createElement("h2",null,this.props.title)))}}]),a}(n.Component),$=function(){function e(){Object(m.a)(this,e)}return Object(d.a)(e,null,[{key:"generate_report",value:function(e){var t=[{name:"Web Browsing",criteria:{downlink:["LARGER_THAN",1],uplink:["LARGER_THAN",1],latency:null,latency_with_jitter:null}},{name:"Audio Calls",criteria:{downlink:["LARGER_THAN",3],uplink:["LARGER_THAN",3],latency:["SMALLER_THAN",150],latency_with_jitter:["SMALLER_THAN",200]}},{name:"4K Video Streaming",criteria:{downlink:["LARGER_THAN",40],uplink:null,latency:null,latency_with_jitter:null}},{name:"Video Conferencing",criteria:{downlink:["LARGER_THAN",2.5],uplink:["LARGER_THAN",2.5],latency:["SMALLER_THAN",150],latency_with_jitter:["SMALLER_THAN",200]}},{name:"Online Gaming",criteria:{downlink:["LARGER_THAN",3],uplink:["LARGER_THAN",.5],latency:["SMALLER_THAN",100],latency_with_jitter:["SMALLER_THAN",150]}}],a=e.download_speed/1e6,n=e.upload_speed/1e6,r=Object.keys(e.stages).map((function(t){return e.stages[t]})),_=Math.max.apply(Math,Object(c.a)(r.map((function(e){return e.stats.median})))),i=Math.max.apply(Math,Object(c.a)(r.map((function(e){return e.stats.median+e.stats.jitter})))),s=[{until:5,grade:"A+"},{until:30,grade:"A"},{until:60,grade:"B"},{until:200,grade:"C"},{until:400,grade:"D"},{until:1/0,grade:"F"}],o=e.stages.map((function(e){return e.stats.median})),l=o[1]-o[0],u=o[2]-o[0],p=((l=l>0?l:0)+(u=l>0?u:0))/2,h={downlink:a,uplink:n,latency:_,latency_with_jitter:i};return{categories:t.map((function(e){var t=e.criteria,a=Object.keys(t);return{name:e.name,criteria:a.reduce((function(e,a){return null===t[a]?(e[a]=!0,e):"LARGER_THAN"===t[a][0]?(e[a]=h[a]>t[a][1],e):(e[a]=h[a]<t[a][1],e)}),{})}})),grade:function(e){for(var t in s){var a=s[t];if(e<a.until)return a.grade}return s.slice(-1).pop().grade}(p)}}}]),e}(),V=(n.Component,a(31)),Y=(n.Component,function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).size=1e6,n.num_streams=4,n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{bg:"light"},r.a.createElement(V.a.Brand,{href:"#"},"KNP")),r.a.createElement(A.a,null,r.a.createElement(O.a,null,"Hello, World! version 0.4",r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(O.a,null,r.a.createElement("label",{htmlFor:"size"},"size"),r.a.createElement("input",{name:"size",type:"text",defaultValue:this.size,onChange:function(t){e.size=parseFloat(t.target.value)}.bind(this)})),r.a.createElement(O.a,null,r.a.createElement("label",{htmlFor:"num_streams"},"# streams"),r.a.createElement("input",{name:"num_streams",type:"text",defaultValue:this.num_streams,onChange:function(t){e.num_streams=parseFloat(t.target.value)}.bind(this)})),r.a.createElement(y.a,{onClick:this.upload.bind(this)},"Upload")))}},{key:"upload",value:function(){var e=Object(h.a)(p.a.mark((function e(){var t,a,n,r,_,i,o,l,u,h,m,d,f,b,v,O,k,w,y,A,g,T,x,M,D,j,P;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 4,t=this.size,a=this.num_streams,console.info("size",t,"num_streams",a),"https://speed1.arshankhanifar.workers.dev/hi/up",n="0".repeat(t),r=Object(c.a)(Array(a).keys()),_=[[Date.now(),0]],i=0,o=Array(a).fill(0),l=[],function(e){console.log("bandwidth",8*e/1e3)},u=function(e,t){var a=t.position||t.loaded;o[e]=a,i=o.reduce((function(e,t){return e+t})),_.push([Date.now(),i]);var n=_.slice(-1).pop(),r=Object(s.a)(n,2),c=r[0],u=r[1],p=_.slice(-2,-1).pop(),h=Object(s.a)(p,2),m=h[0],d=(u-h[1])/(c-m);d<1/0&&l.push(d)},h=r.map((function(e){var t={},a=new XMLHttpRequest;return a.upload.onprogress=function(t){return u(e,t)},t.done=new Promise((function(e){a.onreadystatechange=function(t){4===this.readyState&&e()}})),a.open("POST","https://speed1.arshankhanifar.workers.dev/hi/up",!0),a.setRequestHeader("Content-Type","text/plain"),t.xhr=a,a.send(n),console.log("sent request"),t})),e.next=16,Promise.all(h.map((function(e){return e.done})));case 16:console.log("all of the uploads are complete now"),console.log(_),m=_.slice(-1).pop(),d=Object(s.a)(m,2),f=d[0],b=d[1],v=_.slice(0,1).pop(),O=Object(s.a)(v,2),k=O[0],w=O[1],y=(b-w)/(f-k),console.log("average bandwidth",parseFloat((8*y/1e3).toFixed(2))),A=H.a.calculate_important_values(l.sort(E.a)).map((function(e){return(8*e/1e3).toFixed(2)})),g=Object(s.a)(A,6),T=g[0],x=g[1],M=g[2],D=g[3],j=g[4],P=g[5],console.log("other stats:\nq1, q3, median, min, max, std"),console.log(T,x,M,D,j,P);case 25:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(n.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},15:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={PING_INTERVAL:100,MAX_LATENCY_PLOTTED:200,DOWNLOAD_NUM_STREAMS:10,UPLOAD_NUM_STREAMS:8,IGNORE_TTFB_BELOW:3,NUM_LATENCY_MEASUREMENTS:30,DOWNLOAD_DURATION:5,UPLOAD_DURATION:5}},26:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(2),r=a(3),_=a(14),i=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"calculate_important_values",value:function(e){return[_.d(e,.25),_.d(e,.75),_.d(e,.5),e[0],e[e.length-1],_.b(e)||0]}}]),e}()},50:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return BoxPlot}));var _Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),d3__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(14),_utilities_statistics_utilities__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(26),_app_configuration__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(15),BoxPlot=function(_Component){Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(BoxPlot,_Component);var _super=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(BoxPlot);function BoxPlot(e){var t;return Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,BoxPlot),(t=_super.call(this,e)).TRANSITION_TIME=300,t.DOT_COLOUR="#4a90e2",t.chart_component=react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef(),t.data=e.data.filter((function(e){return!t.is_invalid(e)}))||[],t.height=e.height||80,t.width=e.width||460,t.scale=e.scale,t.tooltip_html=t.props.tooltip_html||"value: ${d.value}",t}return Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(BoxPlot,[{key:"calculate_important_values",value:function(e){var t=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.map((function(e){return e.value}))).sort(d3__WEBPACK_IMPORTED_MODULE_7__.a);return _utilities_statistics_utilities__WEBPACK_IMPORTED_MODULE_8__.a.calculate_important_values(t)}},{key:"get_chart_parameters",value:function(){var e={top:10,right:10,bottom:10,left:10},t=this.width-e.left-e.right,a=this.height-e.top-e.bottom;return[e,t,a,3/4*a,1/4*a]}},{key:"componentDidMount",value:function(){var e=this.get_chart_parameters(),t=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(e,3),a=t[0],n=t[1],r=t[2],_=d3__WEBPACK_IMPORTED_MODULE_7__.f(this.chart_component.current).append("svg").attr("width",n+a.left+a.right).attr("height",r+a.top+a.bottom).append("g").attr("transform","translate("+a.left+","+a.top+")");this._svg=_;var i=this.data;this.update_scale(i),this._points_container=_.append("g").attr("id","data_points"),this.add_tooltip(),this.draw_points(i),this.add_line_with_ticks(i),this.add_quartile_box_if_it_doesnt_exist(i)}},{key:"add_tooltip",value:function(){this._tooltip=d3__WEBPACK_IMPORTED_MODULE_7__.f(this.chart_component.current).append("div").style("opacity",0).attr("class","tooltip").style("border","solid").style("background-color","white").style("border-width","2px").style("border-radius","5px").style("padding","5px")}},{key:"set_circle_attributes",value:function set_circle_attributes(selection){var _this$get_chart_param3=this.get_chart_parameters(),_this$get_chart_param4=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_this$get_chart_param3,4),rel_pos=_this$get_chart_param4[3],tooltip=this._tooltip,component=this,mouseover=function(e){tooltip.style("opacity",1),d3__WEBPACK_IMPORTED_MODULE_7__.f(this).style("stroke","black").style("opacity",1)},mousemove=function mousemove(e,d){var relative_dist=d3__WEBPACK_IMPORTED_MODULE_7__.c(e,this);tooltip.html(eval("`"+component.tooltip_html+"`")).style("left",relative_dist[0]+"px").style("top",relative_dist[1]+rel_pos+"px")},mouseleave=function(e){tooltip.style("opacity",0),d3__WEBPACK_IMPORTED_MODULE_7__.f(this).style("stroke","none").style("opacity",.8)};selection.attr("cy",(function(){return rel_pos})).attr("r",3).attr("fill",this.DOT_COLOUR).on("mouseover",mouseover).on("mousemove",mousemove).on("mouseleave",mouseleave)}},{key:"draw_points",value:function(e){var t=this._x_scale,a=this._points_container.selectAll("circle").data(e).enter().append("circle").attr("cx",(function(e){return t(e.value)}));this.set_circle_attributes(a)}},{key:"update_points_locations",value:function(e){var t=this;this._points_container.selectAll("circle").data(e).transition().duration(this.TRANSITION_TIME).attr("cx",(function(e){return t._x_scale(e.value)}))}},{key:"add_line_with_ticks",value:function(e){var t=this._x_scale,a=this._svg,n=this.calculate_important_values(e),r=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(n,5),_=r[3],i=r[4],s=this.get_chart_parameters(),c=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(s,5),o=c[1],l=c[4],u=a.append("g").attr("transform","translate(0,"+l+")");this._middle_anchor=u;var p=t(_)||0,h=t(i)||o;function m(e){return u.append("line").attr("x1",e).attr("y1",-5).attr("x2",e).attr("y2",5).attr("stroke","#979797")}this.main_line=u.append("line").attr("x1",p).attr("y1",0).attr("x2",h).attr("y2",0).attr("stroke","#979797"),this.tick_1=m(p),this.tick_2=m(h)}},{key:"add_quartile_box_if_it_doesnt_exist",value:function(e){this._quartile_box||e.length<5||this.add_quartile_box(e)}},{key:"add_quartile_box",value:function(e){var t=this._x_scale,a=this.calculate_important_values(e),n=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(a,5),r=n[0],_=n[1],i=n[2];this._quartile_box=this._middle_anchor.append("g").attr("id","quartile_box"),this._quartile_rect=this._quartile_box.append("rect").attr("x",t(r)).attr("y",-10).attr("height",20).attr("width",t(_)-t(r)).attr("stroke-width",1.5).attr("fill","white").attr("stroke","#979797"),this._median_line=this._quartile_box.append("line").attr("x1",t(i)).attr("x2",t(i)).attr("y1",-10).attr("y2",10).attr("stroke","#979797").attr("stroke-width",1.5)}},{key:"update_scale",value:function(e){var t=this.get_chart_parameters(),a=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(t,2)[1];if(this.props.scale){var n=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.props.scale,2),r=n[0],_=n[1];this._x_scale=d3__WEBPACK_IMPORTED_MODULE_7__.e().domain([_,r]).range([a,0])}else{var i=this.calculate_important_values(e),s=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(i,5),c=s[3],o=s[4];this._x_scale=d3__WEBPACK_IMPORTED_MODULE_7__.e().domain([o,c]).range([a,0])}}},{key:"update_line_with_ticks",value:function(e){var t=this,a=this.calculate_important_values(e),n=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(a,5),r=n[3],_=n[4],i=this._x_scale,s=i(r),c=i(_),o=function(e,a){e.transition().duration(t.TRANSITION_TIME).attr("x1",a).attr("x2",a)};this.main_line.transition().duration(this.TRANSITION_TIME).attr("x1",s).attr("x2",c),o(this.tick_1,s),o(this.tick_2,c)}},{key:"update_box",value:function(e){if(this._quartile_box){var t=this.calculate_important_values(e),a=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(t,5),n=a[0],r=a[1],_=a[2],i=this._x_scale;this._quartile_rect.transition().duration(this.TRANSITION_TIME).attr("x",i(n)).attr("width",i(r)-i(n)),this._median_line.transition().duration(this.TRANSITION_TIME).attr("x1",i(_)).attr("x2",i(_))}}},{key:"refresh_chart",value:function(){var e=this.data;this.update_scale(e),this.update_points_locations(e),this.draw_points(e),this.add_quartile_box_if_it_doesnt_exist(e),this.update_line_with_ticks(e),this.update_box(e)}},{key:"add_point",value:function(e){this.data.push(e),this.refresh_chart()}},{key:"is_invalid",value:function(e){return!e||e.value>_app_configuration__WEBPACK_IMPORTED_MODULE_9__.a.MAX_LATENCY_PLOTTED}},{key:"componentDidUpdate",value:function(e,t,a){if(this.data.length!==e.data.length){var n=e.data.slice(-1).pop();this.is_invalid(n)||(this.data.push(n),this.refresh_chart())}else this.refresh_chart()}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{ref:this.chart_component}))}}]),BoxPlot}(react__WEBPACK_IMPORTED_MODULE_6__.Component)}},[[120,1,2]]]);
//# sourceMappingURL=main.4e1987ae.chunk.js.map