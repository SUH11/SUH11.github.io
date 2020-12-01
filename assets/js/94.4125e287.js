(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{442:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"移动端遇到的问题？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动端遇到的问题？"}},[t._v("#")]),t._v(" 移动端遇到的问题？")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("一像素问题")]),t._v(" "),s("ul",[s("li",[t._v("背景")]),t._v(" "),s("li",[t._v("用transform")])])]),t._v(" "),s("li",[s("p",[t._v("click事件会有300ms的延迟")]),t._v(" "),s("p",[t._v("因为在移动端里，浏览器需要等待一段时间来判断此次用户操作是单击还是双击，所以就有click 300ms 的延迟机制")]),t._v(" "),s("p",[t._v("解决方案：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("禁用缩放")]),t._v(" "),s("blockquote",[s("p",[t._v("当 "),s("code",[t._v("HTML")]),t._v("文档头部包含如下 "),s("code",[t._v("meta")]),t._v(" 标签时：表明这个页面是不可缩放的，那双击缩放的功能就没有意义了，此时浏览器可以禁用默认的双击缩放行为并且去掉 "),s("code",[t._v("300ms")]),t._v(" 的点击延迟")]),t._v(" "),s("p",[s("code",[t._v('content="user-scalable=no"')])])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("user-scalable=no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("initial-scale=1,maximum-scale=1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("更改默认的视口宽度")]),t._v(" "),s("blockquote",[s("p",[t._v("它没有完全禁用缩放，而只是禁用了浏览器默认的双击缩放行为，但用户仍然可以通过双指缩放操作来缩放页面。")])])]),t._v(" "),s("li",[s("p",[t._v("引入 "),s("code",[t._v("fastclick")]),t._v(" 库来解决")]),t._v(" "),s("p",[s("code",[t._v("FastClick")]),t._v(" 的实现原理是在检测到 "),s("code",[t._v("touchend")]),t._v(" 事件的时候，会通过 "),s("code",[t._v("DOM")]),t._v(" 自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后的click事件阻止掉。")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);