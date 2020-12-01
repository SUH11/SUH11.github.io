(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{409:function(t,a,e){"use strict";e.r(a);var v=e(42),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"http的连接管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http的连接管理"}},[t._v("#")]),t._v(" HTTP的连接管理")]),t._v(" "),e("p",[t._v("http性能问题：不算差，不够好")]),t._v(" "),e("ol",[e("li",[e("h4",{attrs:{id:"短连接（http0-9-1-0）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#短连接（http0-9-1-0）"}},[t._v("#")]),t._v(" 短连接（http0.9/1.0）")]),t._v(" "),e("p",[t._v("http的下层协议是：TCP")]),t._v(" "),e("p",[t._v("在 TCP 协议里，建立连接和关闭连接都是非常“昂贵”的操作。TCP 建立连接要有“三次握手”，发送 3 个数据包，需要 1 个 RTT；关闭连接是“四次挥手”，4 个数据包需要 2 个 RTT。")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200622114500907",href:"https://raw.githubusercontent.com/SUH11/images/master/http/17-1.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/SUH11/images/master/http/17-1.png",alt:"image-20200622114500907"}})])]),t._v(" "),e("p",[t._v("浪费的时间是：3/5 = 60%")]),t._v(" "),e("p",[t._v("有三分之二的时间被浪费掉了，传输效率低得惊人。")])]),t._v(" "),e("li",[e("h4",{attrs:{id:"长连接（http1-1）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#长连接（http1-1）"}},[t._v("#")]),t._v(" 长连接（http1.1）")]),t._v(" "),e("p",[t._v("也叫“持久连接”（persistent connections）、“连接保活”（keep alive）、“连接复用”（connection reuse）。")]),t._v(" "),e("p",[t._v("“成本均摊”：既然 TCP 的连接和关闭非常耗时间，那么就把这个时间成本由原来的一个“请求 - 应答”均摊到多个“请求 - 应答”上。")]),t._v(" "),e("p",[t._v("这样虽然不能改善 TCP 的连接效率，但基于“分母效应”，每个“请求 - 应答”的无效时间就会降低不少，整体传输效率也就提高了。")]),t._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"image-20200622133803300",href:"https://raw.githubusercontent.com/SUH11/images/master/http/17-2.png"}},[e("img",{attrs:{src:"https://raw.githubusercontent.com/SUH11/images/master/http/17-2.png",alt:"image-20200622133803300"}})])]),t._v(" "),e("p",[t._v("RTT：一个来回")]),t._v(" "),e("p",[t._v("​\t\ttcp三次握手：1.5rtt")]),t._v(" "),e("p",[t._v("​\t\ttcp四次挥手：2rtt")])]),t._v(" "),e("li",[e("h4",{attrs:{id:"连接相关的头字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接相关的头字段"}},[t._v("#")]),t._v(" 连接相关的头字段")]),t._v(" "),e("p",[t._v("Connection: keep-alive")]),t._v(" "),e("p",[t._v("长连接的缺点：")]),t._v(" "),e("p",[t._v("​\t因为 TCP 连接长时间不关闭，服务器必须在内存里保存它的状态，这就占用了服务器的资源。如果有大量的空闲长连接只连不发，就会很快耗尽服务器的资源，导致服务器无法为真正有需要的用户提供服务。")]),t._v(" "),e("p",[t._v("解决方法：")]),t._v(" "),e("p",[t._v("​\tConnection: close")])]),t._v(" "),e("li",[e("h4",{attrs:{id:"队头阻塞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#队头阻塞"}},[t._v("#")]),t._v(" 队头阻塞")]),t._v(" "),e("p",[t._v("因为 HTTP 规定报文必须是“一发一收”，这就形成了一个先进先出的“串行”队列。队列里的请求没有轻重缓急的优先级，只有入队的先后顺序，排在最前面的请求被最优先处理。")])]),t._v(" "),e("li",[e("h4",{attrs:{id:"性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),e("p",[t._v("a . 并发连接")]),t._v(" "),e("p",[t._v("​\tRFC7230：每个客户端最多兵法6～8个连接")]),t._v(" "),e("p",[t._v("b. 域名分片")]),t._v(" "),e("p",[t._v("​\tHTTP 协议和浏览器不是限制并发连接数量吗？好，那我就多开几个域名，比如 shard1.chrono.com、shard2.chrono.com，而这些域名都指向同一台服务器 www.chrono.com，这样实际长连接的数量就又上去了")])])]),t._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("ol",[e("li",[t._v("早期的 HTTP 协议使用短连接，收到响应后就立即关闭连接，效率很低；")]),t._v(" "),e("li",[t._v("HTTP/1.1 默认启用长连接，在一个连接上收发多个请求响应，提高了传输效率；")]),t._v(" "),e("li",[t._v("服务器会发送“Connection: keep-alive”字段表示启用了长连接；")]),t._v(" "),e("li",[t._v("报文头里如果有“Connection: close”就意味着长连接即将关闭；")]),t._v(" "),e("li",[t._v("过多的长连接会占用服务器资源，所以服务器会用一些策略有选择地关闭长连接；")]),t._v(" "),e("li",[t._v("“队头阻塞”问题会导致性能下降，可以用“并发连接”和“域名分片”技术缓解。")])])])}),[],!1,null,null,null);a.default=s.exports}}]);