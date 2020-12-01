(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{434:function(a,t,e){"use strict";e.r(t);var v=e(42),r=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名"}},[a._v("#")]),a._v(" 域名")]),a._v(" "),e("ol",[e("li",[e("h4",{attrs:{id:"域名的形式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名的形式"}},[a._v("#")]),a._v(" 域名的形式")]),a._v(" "),e("p",[a._v("域名是一个有层次的结构，是一串用“.”分隔的多个单词，最右边的被称为“顶级域名“")]),a._v(" "),e("p",[a._v("“www”表示提供万维网服务、“mail”表示提供邮件服务，不过这也不是绝对的，名字的关键是要让我们容易记忆")]),a._v(" "),e("blockquote",[e("p",[a._v("在 Apache、Nginx 这样的 Web 服务器里，域名可以用来标识虚拟主机，决定由哪个虚拟主机来对外提供服务，比如在 Nginx 里就会使用“server_name”指令")])])]),a._v(" "),e("li",[e("h4",{attrs:{id:"域名的解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名的解析"}},[a._v("#")]),a._v(" 域名的解析")]),a._v(" "),e("p",[a._v("就像 IP 地址必须转换成 MAC 地址才能访问主机一样，域名也必须要转换成 IP 地址，这个过程就是“域名解析”。")]),a._v(" "),e("p",[a._v("​\tDNS 的核心系统是一个三层的树状、分布式服务，基本对应域名的结构：")]),a._v(" "),e("ul",[e("li",[a._v("根域名服务器（Root DNS Server）：管理顶级域名服务器，返回“com”“net”“cn”等顶级域名服务器的 IP 地址；")]),a._v(" "),e("li",[a._v("顶级域名服务器（Top-level DNS Server）：管理各自域名下的权威域名服务器，比如 com 顶级域名服务器可以返回 apple.com 域名服务器的 IP 地址；")]),a._v(" "),e("li",[a._v("权威域名服务器（Authoritative DNS Server）：管理自己域名下主机的 IP 地址，比如 apple.com 权威域名服务器可以返回 www.apple.com 的 IP 地址。")])]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://static001.geekbang.org/resource/image/6b/f2/6b020454987543efdd1cf6ddec784bf2.png"}},[e("img",{attrs:{src:"https://static001.geekbang.org/resource/image/6b/f2/6b020454987543efdd1cf6ddec784bf2.png",alt:""}})])]),a._v(" "),e("p",[a._v("例如，你要访问“www.apple.com”，就要进行下面的三次查询：")]),a._v(" "),e("ol",[e("li",[a._v("访问根域名服务器，它会告诉你“com”顶级域名服务器的地址；")]),a._v(" "),e("li",[a._v("访问“com”顶级域名服务器，它再告诉你“apple.com”域名服务器的地址；")]),a._v(" "),e("li",[a._v("最后访问“apple.com”域名服务器，就得到了了“www.apple.com”的地址。")])]),a._v(" "),e("p",[e("strong",[a._v("缓存")]),a._v("：老这么访问域名解析压力太大了")]),a._v(" "),e("ul",[e("li",[a._v("许多大公司、网络运行商都会建立自己的 DNS 服务器，作为用户 DNS 查询的代理，代替用户访问核心 DNS 系统")]),a._v(" "),e("li",[a._v("操作系统里也会对 DNS 解析结果做缓存")])]),a._v(" "),e("p",[e("a",{attrs:{"data-fancybox":"",title:"",href:"https://static001.geekbang.org/resource/image/e5/ac/e51df3245609880641043af65bba94ac.png"}},[e("img",{attrs:{src:"https://static001.geekbang.org/resource/image/e5/ac/e51df3245609880641043af65bba94ac.png",alt:""}})])])]),a._v(" "),e("li",[e("h4",{attrs:{id:"域名的-新玩法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#域名的-新玩法"}},[a._v("#")]),a._v(" 域名的“新玩法”")]),a._v(" "),e("ul",[e("li",[a._v("第一种，“重定向”")]),a._v(" "),e("li",[a._v("第二种，搭建一个在内部使用的 DNS，作为名字服务器\n"),e("ul",[e("li",[a._v("比如数据库服务都用域名“mysql.inner.app”，商品服务都用“goods.inner.app”，发起网络通信时也就不必再使用写死的 IP 地址了，可以直接用域名")])])]),a._v(" "),e("li",[a._v("第三种，负载均衡\n"),e("ul",[e("li",[a._v("因为域名解析可以返回多个 IP 地址，所以一个域名可以对应多台主机，客户端收到多个 IP 地址后，就可以自己使用轮询算法依次向服务器发起请求，实现负载均衡。")]),a._v(" "),e("li",[a._v("域名解析可以配置内部的策略，返回离客户端最近的主机，或者返回当前服务质量最好的主机，这样在 DNS 端把请求分发到不同的服务器，实现负载均衡。")])])])])])]),a._v(" "),e("h3",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("ol",[e("li",[a._v("域名使用字符串来代替 IP 地址，方便用户记忆，本质上一个名字空间系统；")]),a._v(" "),e("li",[a._v("DNS 就像是我们现实世界里的电话本、查号台，统管着互联网世界里的所有网站，是一个“超级大管家”；")]),a._v(" "),e("li",[a._v("DNS 是一个树状的分布式查询系统，但为了提高查询效率，外围有多级的缓存；")]),a._v(" "),e("li",[a._v("使用 DNS 可以实现基于域名的负载均衡，既可以在内网，也可以在外网。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);