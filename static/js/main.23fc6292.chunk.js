(this.webpackJsonpnetwork_performance=this.webpackJsonpnetwork_performance||[]).push([[0],{120:function(e,t,a){e.exports=a(133)},125:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),_=a(29),s=a.n(_);a(125),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(126);var i=a(14),c=a(34),o=a(1),l=a.n(o),u=a(20),h=a(24),p=a(7),d=a(2),m=a(3),f=a(19),b=a(8),v=a(9),O=a(12),E=a(13),k=a(11),w=a(18),y=a(23),g=a(27),M=(a(128),function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{style:{fontSize:13,fontWeight:"bold",whiteSpace:"nowrap"}},r.a.createElement(k.a,{sm:6},"min: ",this.props.min,"ms",r.a.createElement("br",null),"median: ",this.props.median,"ms",r.a.createElement("br",null),"max: ",this.props.max,"ms"),r.a.createElement(k.a,{sm:6},"25%: ",this.props.q1,"ms",r.a.createElement("br",null),"75%: ",this.props.q3,"ms",r.a.createElement("br",null),"jitter: ",this.props.jitter,"ms")))}}]),a}(n.Component)),x=(a(129),a(40)),D=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(x.a,this.props)}}]),a}(n.Component),j=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Body,{className:"WBBLatencyStageReport"},r.a.createElement(E.a,null,r.a.createElement(k.a,{md:2,xs:2},r.a.createElement("h5",{style:{marginTop:15}},this.props.title)),r.a.createElement(k.a,{md:7,xs:10},r.a.createElement(D,{data:this.props.data,scale:this.props.box_plot_scale,tooltip_html:"latency: ${d.value}</br>timestamp: ${d.time}"})),r.a.createElement(k.a,{md:3,xs:12},r.a.createElement(M,Object.assign({data:this.props.data},this.props.stats))))))}}]),a}(n.Component),T=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){e.data||console.warn("data empty",e.data),this.data!==e.data&&(this.data=e.data||[],this.update())}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{style:{textAlign:"center"}},Object.keys(this.props.stage_data).map((function(t,a){var n=e.props.stage_data[t];e.props.stage_data.length;return r.a.createElement(k.a,{sm:12/e.props.stage_data.length,style:0!==a?{borderLeft:"1px solid black"}:{}},r.a.createElement("div",{className:"condition"},n.configuration.title),r.a.createElement("div",{className:"latency"},n.stats&&n.stats.median))}))))}}]),a}(n.Component),P=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a.Body,{className:"WBBLatencySummary"},r.a.createElement(E.a,null,r.a.createElement(k.a,{sm:12,md:7},r.a.createElement("h4",null,"Latency Results"),r.a.createElement("p",null,'Bufferbloat is measured by comparing the latency of an Internet connection when it is unloaded to when it is "saturated."')),r.a.createElement(k.a,{sm:12,md:5},r.a.createElement(T,{stage_data:this.props.stage_data})))))}}]),a}(n.Component),A=function(){function e(){Object(d.a)(this,e)}return Object(m.a)(e,null,[{key:"sleep",value:function(){var e=Object(p.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){e()}),t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),U=a(17),C=function(){function e(t,a,n,r,_){Object(d.a)(this,e),this.url=t,this.interval=a,this.interval_cb=n,this.done_cb=r,this.count=_,this.cancelled=!1}return Object(m.a)(e,[{key:"start",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0;case 1:if(!(t++<this.count)){e.next=17;break}return e.next=4,fetch(this.url).then((function(e){return e.text()}));case 4:if(a=performance.getEntriesByName(this.url),n=a.slice(-1).pop(),r=n.responseStart-n.requestStart,!this.cancelled){e.next=9;break}return e.abrupt("return");case 9:if(!(r<U.a.IGNORE_TTFB_BELOW)){e.next=11;break}return e.abrupt("continue",1);case 11:return this.interval_cb(r),performance.clearResourceTimings(),e.next=15,A.sleep(this.interval);case 15:e.next=1;break;case 17:this.done_cb&&this.done_cb();case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){this.cancelled=!0}}]),e}(),B=a(15),I=a(28),L=function(){function e(){Object(d.a)(this,e)}return Object(m.a)(e,[{key:"run",value:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),R=function(){function e(){Object(d.a)(this,e)}return Object(m.a)(e,null,[{key:"provide",value:function(e,t,a){return new C("https://fonts.gstatic.com/l/font?kit=KFOmCnqEu92Fr1Me4GZNCzcPK4I&skey=a0a0114a1dcab3ac&v=v20",U.a.PING_INTERVAL,e,t,a)}}]),e}(),W=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e,n){var r;return Object(d.a)(this,a),(r=t.call(this)).NUM_MEASUREMENTS=30,r.data_callback=e,r.done_callback=n,r}return Object(m.a)(a,[{key:"run",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(I.a)(Object(B.a)(a.prototype),"run",this).call(this),t=R.provide(this.data_callback,this.done_callback,this.NUM_MEASUREMENTS),e.next=4,t.start();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(L),K=function(){function e(t,a){Object(d.a)(this,e),this.measurement_callback=t||function(){return null},this.done_callback=a||function(){return null},this.controller=new AbortController}return Object(m.a)(e,[{key:"get_http_fetch",value:function(e,t,a){var n=this.controller.signal;if(a)return fetch("https://speed".concat(t+1,".arshankhanifar.workers.dev/hi/down?bytes=").concat(e),{signal:n});var r="https://speed".concat(t+1,".arshankhanifar.workers.dev/hi/up");return fetch("".concat(r),Object(h.a)({},{method:"POST",body:"0".repeat(e),headers:{"content-length":e}},{signal:n}))}},{key:"convert_to_bps",value:function(e){return 1e3*e*8}},{key:"download",value:function(){var e=Object(p.a)(l.a.mark((function e(t,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.measure_download(t,a));case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"download_for_n_seconds",value:function(){var e=Object(p.a)(l.a.mark((function e(t,a){var n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 5e8,setTimeout((function(){n.cancel()}),1e3*t),e.abrupt("return",this.measure_download(5e8,a));case 3:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"make_requests",value:function(e,t,a){var n=this;return Array(e).fill(0).map((function(e){return{}})).map((function(e,r){return e.fetch=function(){return n.get_http_fetch(t,r,a)},e}))}},{key:"measure_upload",value:function(){var e=Object(p.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Date.now(),r=this.make_requests(a,t,!1).map((function(e){return e.fetch().then((function(e){return e.text()}))})),e.next=4,Promise.all(r);case 4:return e.abrupt("return",this.convert_to_bps(t*a/(Date.now()-n)));case 5:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"measure_download",value:function(){var e=Object(p.a)(l.a.mark((function e(t,a){var n,r,_,s,i,c,o,u=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1e6,n=Date.now(),r=Date.now(),_=0,s=0,i=function(){if(!(_<1e6)){var e=u.convert_to_bps(_/(Date.now()-r));u.measurement_callback(e),_=0,r=Date.now()}},c=this.make_requests(a,t,!0).map(function(){var e=Object(p.a)(l.a.mark((function e(t,a){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,t.fetch();case 4:n=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("download request:".concat(a," unsuccessful"),e.t0),e.abrupt("return",Promise.resolve());case 11:return r=n.body.getReader(),e.abrupt("return",new Promise(function(){var e=Object(p.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return r.read().then((function(e){var n=e.done,r=e.value;if(!n)return _+=r.length,s+=r.length,i(),a();t()}))},e.prev=1,e.next=4,a();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t();case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}()),e.next=6,Promise.all(c);case 6:return o=this.convert_to_bps(s/(Date.now()-n)),this.done_callback(o),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){this.controller.abort()}}]),e}(),N=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e,n,r){var _;return Object(d.a)(this,a),(_=t.call(this)).DOWNLOAD_DURATION=10,_.data_callback=e,_.bandwidth_callback=n,_.done_callback=r,_}return Object(m.a)(a,[{key:"run",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1e5,Object(I.a)(Object(B.a)(a.prototype),"run",this).call(this),(t=R.provide(this.data_callback,null,1e5)).start(),n=new K((function(e){console.log("realtime rate ".concat(e/1e6,"mbps"))})),e.next=8,n.download_for_n_seconds(this.DOWNLOAD_DURATION,U.a.MAX_NUM_STREAMS);case 8:r=e.sent,t.cancel(),this.bandwidth_callback(r),this.done_callback();case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(L),q=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e,n,r){var _;return Object(d.a)(this,a),(_=t.call(this)).data_callback=e,_.bandwidth_callback=n,_.done_callback=r,_}return Object(m.a)(a,[{key:"run",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1e5,Object(I.a)(Object(B.a)(a.prototype),"run",this).call(this),(t=R.provide(this.data_callback,null,1e5)).start(),n=new K,e.next=7,n.measure_upload(5e7,4);case 7:r=e.sent,t.cancel(),this.bandwidth_callback(r),this.done_callback();case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(L),S=a(37),F=function(e){Object(v.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).BOX_PLOT_SCALE_DEFAULT=[0,10],n.stages_configuration=[{name:"unloaded",title:"Unloaded",page_title:"Measuring Unloaded Latency"},{name:"down",title:"\u2193 Saturated",page_title:"Measuring Latency With Downlink Saturated"},{name:"up",title:"\u2191 Saturated",page_title:"Measuring Latency With Uplink Saturated"}],n.state={test_running:!1,test_title:"Bufferbloat Test",current_stage_idx:-1,stages:{},box_plot_scale:n.BOX_PLOT_SCALE_DEFAULT},n.stages=[new W(n.add_latency_to_current_stage.bind(Object(f.a)(n)),n.advance_stage.bind(Object(f.a)(n))),new N(n.add_latency_to_current_stage.bind(Object(f.a)(n)),n.downlink_measurement.bind(Object(f.a)(n)),n.advance_stage.bind(Object(f.a)(n))),new q(n.add_latency_to_current_stage.bind(Object(f.a)(n)),n.uplink_measurement.bind(),n.advance_stage.bind(Object(f.a)(n)))],n}return Object(m.a)(a,[{key:"downlink_measurement",value:function(e){console.log("avg download: ".concat(e/1e6,"mbps"))}},{key:"uplink_measurement",value:function(e){console.log("avg upload: ".concat(e/1e6,"mbps"))}},{key:"componentDidMount",value:function(){}},{key:"debug",value:function(){this.start_test().then((function(){}))}},{key:"advance_stage",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=this.state.current_stage_idx+1)>=this.stages.length)){e.next=4;break}return console.log("boom done stages"),e.abrupt("return");case 4:return e.next=6,this.setState({current_stage_idx:t,stages:Object(h.a)({},this.state.stages,Object(u.a)({},t,{configuration:this.stages_configuration[t],data:[]})),test_title:"".concat(t+1,"/").concat(this.stages_configuration.length," ").concat(this.stages_configuration[t].page_title)});case 6:console.log(this.state.stages),this.stages[t].run();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"start_test",value:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({test_running:!0});case 2:this.advance_stage();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"adjust_scale",value:function(e){e>U.a.MAX_LATENCY_PLOTTED||e>this.state.box_plot_scale[1]&&this.setState({box_plot_scale:[0,e]})}},{key:"add_latency_to_current_stage",value:function(e){this.adjust_scale(e);var t=this.state.current_stage_idx,a=this.state.stages[t],n=a.data||[],r=[].concat(Object(c.a)(n),[{value:e}]);this.setState({stages:Object(h.a)({},this.state.stages,Object(u.a)({},t,Object(h.a)({},a,{data:r,stats:Object(h.a)({},this.calculate_stats(r))})))})}},{key:"calculate_stats",value:function(e){var t=Object(c.a)(e.map((function(e){return e.value}))).sort(O.a),a=S.a.calculate_important_values(t).map((function(e){return e.toFixed(1)})),n=Object(i.a)(a,6),r=n[0],_=n[1],s=n[2];return{min:n[3],max:n[4],q1:r,q3:_,median:s,jitter:n[5]}}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"version: 1.04"),r.a.createElement(k.a,{sm:12},r.a.createElement(g.a,null,r.a.createElement(E.a,{style:{marginTop:40}},r.a.createElement(k.a,{sm:12},r.a.createElement(w.a,{className:"WBBCard WBBMainTestCard"},r.a.createElement(w.a.Header,null,r.a.createElement("h2",null,this.state.test_title)),this.state.test_running?r.a.createElement(w.a.Body,null,r.a.createElement(P,{stage_data:this.state.stages}),Object.keys(this.state.stages).map((function(t){var a=e.state.stages[t];return r.a.createElement(r.a.Fragment,null,0!==parseInt(t)?r.a.createElement(k.a,{sm:12},r.a.createElement("div",{className:"spacer"})):r.a.createElement(r.a.Fragment,null),r.a.createElement(j,{box_plot_scale:e.state.box_plot_scale,title:a.configuration.title,key:a.configuration.name,data:a.data,stats:a.stats}))}))):r.a.createElement(w.a.Body,null,r.a.createElement(w.a.Text,null,"Click below to start running the test."),r.a.createElement(y.a,{variant:"primary",onClick:this.start_test.bind(this)},"Start Test"))))))))}}]),a}(n.Component),$=a(30);n.Component,n.Component;s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={PING_INTERVAL:100,MAX_LATENCY_PLOTTED:200,MAX_NUM_STREAMS:10,IGNORE_TTFB_BELOW:3}},37:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(2),r=a(3),_=a(12),s=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,null,[{key:"calculate_important_values",value:function(e){return[_.d(e,.25),_.d(e,.75),_.d(e,.5),e[0],e[e.length-1],_.b(e)||0]}}]),e}()},40:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return BoxPlot}));var _Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(14),_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(34),_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),d3__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(12),_utilities_statistics_utilities__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(37),_app_configuration__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(17),BoxPlot=function(_Component){Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(BoxPlot,_Component);var _super=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(BoxPlot);function BoxPlot(e){var t;return Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,BoxPlot),(t=_super.call(this,e)).TRANSITION_TIME=300,t.DOT_COLOUR="#4a90e2",t.chart_component=react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef(),t.data=e.data||[],t.height=e.height||80,t.width=e.width||460,t.scale=e.scale,t.tooltip_html=t.props.tooltip_html||"value: ${d.value}",t}return Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(BoxPlot,[{key:"calculate_important_values",value:function(e){var t=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.a)(e.map((function(e){return e.value}))).sort(d3__WEBPACK_IMPORTED_MODULE_7__.a);return _utilities_statistics_utilities__WEBPACK_IMPORTED_MODULE_8__.a.calculate_important_values(t)}},{key:"get_chart_parameters",value:function(){var e={top:10,right:10,bottom:10,left:10},t=this.width-e.left-e.right,a=this.height-e.top-e.bottom;return[e,t,a,3/4*a,1/4*a]}},{key:"componentDidMount",value:function(){var e=this.get_chart_parameters(),t=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(e,3),a=t[0],n=t[1],r=t[2],_=d3__WEBPACK_IMPORTED_MODULE_7__.f(this.chart_component.current).append("svg").attr("width",n+a.left+a.right).attr("height",r+a.top+a.bottom).append("g").attr("transform","translate("+a.left+","+a.top+")");this._svg=_;var s=this.data;this.update_scale(s),this._points_container=_.append("g").attr("id","data_points"),this.add_tooltip(),this.draw_points(s),this.add_line_with_ticks(s),this.add_quartile_box_if_it_doesnt_exist(s)}},{key:"add_tooltip",value:function(){this._tooltip=d3__WEBPACK_IMPORTED_MODULE_7__.f(this.chart_component.current).append("div").style("opacity",0).attr("class","tooltip").style("border","solid").style("background-color","white").style("border-width","2px").style("border-radius","5px").style("padding","5px")}},{key:"set_circle_attributes",value:function set_circle_attributes(selection){var _this$get_chart_param3=this.get_chart_parameters(),_this$get_chart_param4=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_this$get_chart_param3,4),rel_pos=_this$get_chart_param4[3],tooltip=this._tooltip,component=this,mouseover=function(e){tooltip.style("opacity",1),d3__WEBPACK_IMPORTED_MODULE_7__.f(this).style("stroke","black").style("opacity",1)},mousemove=function mousemove(e,d){var relative_dist=d3__WEBPACK_IMPORTED_MODULE_7__.c(e,this);tooltip.html(eval("`"+component.tooltip_html+"`")).style("left",relative_dist[0]+"px").style("top",relative_dist[1]+rel_pos+"px")},mouseleave=function(e){tooltip.style("opacity",0),d3__WEBPACK_IMPORTED_MODULE_7__.f(this).style("stroke","none").style("opacity",.8)};selection.attr("cy",(function(){return rel_pos})).attr("r",3).attr("fill",this.DOT_COLOUR).on("mouseover",mouseover).on("mousemove",mousemove).on("mouseleave",mouseleave)}},{key:"draw_points",value:function(e){var t=this._x_scale,a=this._points_container.selectAll("circle").data(e).enter().append("circle").attr("cx",(function(e){return t(e.value)}));this.set_circle_attributes(a)}},{key:"update_points_locations",value:function(e){var t=this;this._points_container.selectAll("circle").data(e).transition().duration(this.TRANSITION_TIME).attr("cx",(function(e){return t._x_scale(e.value)}))}},{key:"add_line_with_ticks",value:function(e){var t=this._x_scale,a=this._svg,n=this.calculate_important_values(e),r=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(n,5),_=r[3],s=r[4],i=this.get_chart_parameters(),c=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(i,5),o=c[1],l=c[4],u=a.append("g").attr("transform","translate(0,"+l+")");this._middle_anchor=u;var h=t(_)||0,p=t(s)||o;function d(e){return u.append("line").attr("x1",e).attr("y1",-5).attr("x2",e).attr("y2",5).attr("stroke","#979797")}this.main_line=u.append("line").attr("x1",h).attr("y1",0).attr("x2",p).attr("y2",0).attr("stroke","#979797"),this.tick_1=d(h),this.tick_2=d(p)}},{key:"add_quartile_box_if_it_doesnt_exist",value:function(e){this._quartile_box||e.length<5||this.add_quartile_box(e)}},{key:"add_quartile_box",value:function(e){var t=this._x_scale,a=this.calculate_important_values(e),n=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(a,5),r=n[0],_=n[1],s=n[2];this._quartile_box=this._middle_anchor.append("g").attr("id","quartile_box"),this._quartile_rect=this._quartile_box.append("rect").attr("x",t(r)).attr("y",-10).attr("height",20).attr("width",t(_)-t(r)).attr("stroke-width",1.5).attr("fill","white").attr("stroke","#979797"),this._median_line=this._quartile_box.append("line").attr("x1",t(s)).attr("x2",t(s)).attr("y1",-10).attr("y2",10).attr("stroke","#979797").attr("stroke-width",1.5)}},{key:"update_scale",value:function(e){var t=this.get_chart_parameters(),a=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(t,2)[1];if(this.props.scale){var n=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.props.scale,2),r=n[0],_=n[1];this._x_scale=d3__WEBPACK_IMPORTED_MODULE_7__.e().domain([_,r]).range([a,0])}else{var s=this.calculate_important_values(e),i=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(s,5),c=i[3],o=i[4];this._x_scale=d3__WEBPACK_IMPORTED_MODULE_7__.e().domain([o,c]).range([a,0])}}},{key:"update_line_with_ticks",value:function(e){var t=this,a=this.calculate_important_values(e),n=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(a,5),r=n[3],_=n[4],s=this._x_scale,i=s(r),c=s(_),o=function(e,a){e.transition().duration(t.TRANSITION_TIME).attr("x1",a).attr("x2",a)};this.main_line.transition().duration(this.TRANSITION_TIME).attr("x1",i).attr("x2",c),o(this.tick_1,i),o(this.tick_2,c)}},{key:"update_box",value:function(e){if(this._quartile_box){var t=this.calculate_important_values(e),a=Object(_Users_arshankhanifar_waveform_network_performance_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(t,5),n=a[0],r=a[1],_=a[2],s=this._x_scale;this._quartile_rect.transition().duration(this.TRANSITION_TIME).attr("x",s(n)).attr("width",s(r)-s(n)),this._median_line.transition().duration(this.TRANSITION_TIME).attr("x1",s(_)).attr("x2",s(_))}}},{key:"refresh_chart",value:function(){var e=this.data;this.update_scale(e),this.update_points_locations(e),this.draw_points(e),this.add_quartile_box_if_it_doesnt_exist(e),this.update_line_with_ticks(e),this.update_box(e)}},{key:"add_point",value:function(e){this.data.push(e),this.refresh_chart()}},{key:"is_invalid",value:function(e){return!e||e.value>_app_configuration__WEBPACK_IMPORTED_MODULE_9__.a.MAX_LATENCY_PLOTTED}},{key:"componentDidUpdate",value:function(e,t,a){if(this.data.length!==e.data.length){var n=e.data.slice(-1).pop();this.is_invalid(n)||(this.data.push(n),this.refresh_chart())}else this.refresh_chart()}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{ref:this.chart_component}))}}]),BoxPlot}(react__WEBPACK_IMPORTED_MODULE_6__.Component)}},[[120,1,2]]]);
//# sourceMappingURL=main.23fc6292.chunk.js.map