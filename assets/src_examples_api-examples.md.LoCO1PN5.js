import{u as p,o as r,c as h,k as a,t as e,m as t,R as o,a as s}from"./chunks/framework.GeoionXv.js";const d=o(`<h1 id="运行时api示例" tabindex="-1">运行时API示例 <a class="header-anchor" href="#运行时api示例" aria-label="Permalink to &quot;运行时API示例&quot;">​</a></h1><p>本页演示了VitePress提供的一些运行时API的用法。</p><p>该<code>useData（）</code> API可用于访问当前页面的网站、主题和页面数据。它在“.md”和“.vue”文件中都有效：</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### Theme Data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### Page Data</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">### Page Frontmatter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h2 id="输出结果" tabindex="-1">输出结果 <a class="header-anchor" href="#输出结果" aria-label="Permalink to &quot;输出结果&quot;">​</a></h2><h3 id="主题数据" tabindex="-1">主题数据 <a class="header-anchor" href="#主题数据" aria-label="Permalink to &quot;主题数据&quot;">​</a></h3>`,6),c=a("h3",{id:"页面数据",tabindex:"-1"},[s("页面数据 "),a("a",{class:"header-anchor",href:"#页面数据","aria-label":'Permalink to "页面数据"'},"​")],-1),k=a("h3",{id:"页面前置数据",tabindex:"-1"},[s("页面前置数据 "),a("a",{class:"header-anchor",href:"#页面前置数据","aria-label":'Permalink to "页面前置数据"'},"​")],-1),g=a("h2",{id:"more",tabindex:"-1"},[s("More "),a("a",{class:"header-anchor",href:"#more","aria-label":'Permalink to "More"'},"​")],-1),m=a("p",null,[s("更多请查看文档 "),a("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"full list of runtime APIs"),s(".")],-1),x=JSON.parse('{"title":"运行时API示例","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"src/examples/api-examples.md","filePath":"src/examples/api-examples.md"}'),u={name:"src/examples/api-examples.md"},y=Object.assign(u,{setup(_){const{site:f,theme:i,page:n,frontmatter:l}=p();return(E,b)=>(r(),h("div",null,[d,a("pre",null,e(t(i)),1),c,a("pre",null,e(t(n)),1),k,a("pre",null,e(t(l)),1),g,m]))}});export{x as __pageData,y as default};
