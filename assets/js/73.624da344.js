(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{421:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"我应该迁移到https吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我应该迁移到https吗？"}},[s._v("#")]),s._v(" 我应该迁移到HTTPS吗？")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("迁移的必要性")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("移动开发建议迁移")]),s._v(" "),a("ul",[a("li",[s._v("Apple、Android、某信等开发平台在 2017 年就相继发出通知，要求所有的应用必须使用 HTTPS 连接，禁止不安全的 HTTP。")])])]),s._v(" "),a("li",[a("p",[s._v("“迁移到 HTTPS”已经不是“要不要做”的问题，而是“要怎么做”的问题了")])])])]),s._v(" "),a("li",[a("p",[s._v("迁移的顾虑")]),s._v(" "),a("ul",[a("li",[s._v("慢\n"),a("ul",[a("li",[s._v("惯性思维：HTTPS 会增加服务器的成本，增加客户端的时延，影响用户体验。")]),s._v(" "),a("li",[s._v("其实现在服务器和客户端的运算能力都已经有了很大的提升，性能方面完全没有担心的必要，而且还可以应用很多的优化解决方案")]),s._v(" "),a("li",[s._v("在经过适当优化之后，HTTPS 的额外 CPU 成本小于 1%，额外的网络成本小于 2%")])])]),s._v(" "),a("li",[s._v("贵\n"),a("ul",[a("li",[s._v("免费证书的 CA：其中最著名的是“Let’s Encrypt”")])])]),s._v(" "),a("li",[s._v("难\n"),a("ul",[a("li",[s._v("HTTPS 涉及的知识点太多、太复杂，有一定的技术门槛，不能很快上手。")])])])])]),s._v(" "),a("li",[a("p",[s._v("申请证书")]),s._v(" "),a("p",[a("strong",[s._v("Let’s Encrypt")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("申请证书时应当同时申请 "),a("strong",[s._v("RSA")]),s._v(" 和 "),a("strong",[s._v("ECDSA")]),s._v(" 两种证书")]),s._v(" "),a("ul",[a("li",[s._v("在 Nginx 里配置成双证书验证，这样服务器可以自动选择快速的椭圆曲线证书，同时也兼容只支持 RSA 的客户端")])])]),s._v(" "),a("li",[a("p",[s._v("如果申请 RSA 证书，私钥至少要 2048 位，摘要算法应该选用 SHA-2")]),s._v(" "),a("ul",[a("li",[s._v("SHA256、SHA384")])])]),s._v(" "),a("li",[a("p",[s._v("“Let’s Encrypt”证书的有效期很短，只有 90 天，时间一到就会过期失效，所以必须要定期更新。")])])])]),s._v(" "),a("li",[a("p",[s._v("配置 HTTPS")]),s._v(" "),a("p",[s._v("Nginx")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v("       xxx_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rsa2048 cert")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v("   xxx_rsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#rsa2048 private key")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v("       xxx_ecc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("crt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ecdsa cert")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v("   xxx_ecc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ecdsa private ke")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.强制 Nginx 只支持 TLS1.2 以上的协议，打开“Session Ticket”会话复用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_protocols")]),s._v("               TLSv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" TLSv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_session_timeout")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_session_tickets")]),s._v("         on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nssl_session_ticket_key      ticket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.密码套件的选择方面，建议是以服务器的套件优先。这样可以避免恶意客户端故意选择较弱的套件、降低安全等级，然后密码套件向 TLS1.3“看齐”，只使用 ECDHE、AES 和 ChaCha20，支持“False Start”。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_prefer_server_ciphers")]),s._v("   on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_ciphers")]),s._v("   ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ECDSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("AES256"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("SHA384"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("AES256"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("SHA384"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("AES128"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("GCM"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("SHA256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("RSA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("CHACHA20"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("POLY1305"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ECDHE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("AES128"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MD5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("SHA1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("配置完成，可以访问"),a("a",{attrs:{href:"https://www.ssllabs.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("SSLLabs"),a("OutboundLink")],1),s._v("测试网站的安全程度，它会模拟多种客户端发起测试，打出一个综合的评分。")])]),s._v(" "),a("li",[a("p",[s._v("重定向跳转")]),s._v(" "),a("p",[s._v("把不安全的 HTTP 网址用 301 或 302“重定向”到新的 HTTPS 网站，这在 Nginx 里也很容易做到，使用“return”或“rewrite”都可以。")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久重定向")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rewrite")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("^")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("https")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),s._v(" permanent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久重定向")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("但这种方式有两个问题。一个是重定向增加了网络成本，多出了一次请求；另一个是存在安全隐患，重定向的响应可能会被“中间人”窜改，实现“会话劫持”，跳转到恶意网站。")]),s._v(" "),a("p",[s._v("不过有一种叫**“HSTS”**（HTTP 严格传输安全，HTTP Strict Transport Security）的技术可以消除这种安全隐患。HTTPS 服务器需要在发出的响应头里添加一个“Strict-Transport-Security”的字段，再设定一个有效期，例如：")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("Strict"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Transport"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Security"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" max"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15768000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" includeSubDomains\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这相当于告诉浏览器：我这个网站必须严格使用 HTTPS 协议，在半年之内（182.5 天）都不允许用 HTTP，你以后就自己做转换吧，不要再来麻烦我了。")]),s._v(" "),a("blockquote",[a("p",[s._v("Chrome 浏览器只会在第一次连接时使用 HTTP 协议，之后就会都走 HTTPS 协议")]),s._v(" "),a("p",[s._v("有了“HSTS”的指示，以后浏览器再访问同样的域名的时候就会自动把 URI 里的“http”改成“https”，直接访问安全的 HTTPS 网站。这样“中间人”就失去了攻击的机会，而且对于客户端来说也免去了一次跳转，加快了连接速度。")])])])]),s._v(" "),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("ol",[a("li",[s._v("从 HTTP 迁移到 HTTPS 是“大势所趋”，能做就应该尽早做；")]),s._v(" "),a("li",[s._v("升级 HTTPS 首先要申请数字证书，可以选择免费好用的“Let’s Encrypt”；")]),s._v(" "),a("li",[s._v("配置 HTTPS 时需要注意选择恰当的 TLS 版本和密码套件，强化安全；")]),s._v(" "),a("li",[s._v("原有的 HTTP 站点可以保留作为过渡，使用 301 重定向到 HTTPS。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);