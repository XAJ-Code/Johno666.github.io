const e=JSON.parse('{"key":"v-7f580872","path":"/code/vue/vue3-router4/07-%E9%87%8D%E5%AE%9A%E5%90%91-%E5%88%AB%E5%90%8D.html","title":"07-重定向-别名","lang":"zh-CN","frontmatter":{"category":"vue3","title":"07-重定向-别名","updated":"2023-05-13 22:56","description":"重定向 redirect 接收 3 种形式的参数 /** * Route Location that can infer the possible paths. * * @internal */ export declare interface RouteLocationPathRaw extends RouteQueryAndHash, MatcherLocationAsPath, RouteLocationOptions { } /** * User-level route location */ export declare type RouteLocationRaw = string | RouteLocationPathRaw | RouteLocationNamedRaw;","head":[["meta",{"property":"og:url","content":"https://johno666.github.io/code/vue/vue3-router4/07-%E9%87%8D%E5%AE%9A%E5%90%91-%E5%88%AB%E5%90%8D.html"}],["meta",{"property":"og:site_name","content":"小阿俊@博客"}],["meta",{"property":"og:title","content":"07-重定向-别名"}],["meta",{"property":"og:description","content":"重定向 redirect 接收 3 种形式的参数 /** * Route Location that can infer the possible paths. * * @internal */ export declare interface RouteLocationPathRaw extends RouteQueryAndHash, MatcherLocationAsPath, RouteLocationOptions { } /** * User-level route location */ export declare type RouteLocationRaw = string | RouteLocationPathRaw | RouteLocationNamedRaw;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://johno666.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-19T06:11:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"07-重定向-别名"}],["meta",{"property":"article:author","content":"XiaoAjun"}],["meta",{"property":"article:modified_time","content":"2023-09-19T06:11:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07-重定向-别名\\",\\"image\\":[\\"https://johno666.github.io/\\"],\\"dateModified\\":\\"2023-09-19T06:11:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoAjun\\",\\"url\\":\\"https://johno666.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"1.字符串形式配置","slug":"_1-字符串形式配置","link":"#_1-字符串形式配置","children":[]},{"level":2,"title":"2.对象形式配置","slug":"_2-对象形式配置","link":"#_2-对象形式配置","children":[]},{"level":2,"title":"3.函数模式（可以传参）","slug":"_3-函数模式-可以传参","link":"#_3-函数模式-可以传参","children":[]}],"git":{"createdTime":1695103873000,"updatedTime":1695103873000,"contributors":[{"name":"张伟竣","email":"2938795170@qq.com","commits":1}]},"readingTime":{"minutes":1.17,"words":351},"filePathRelative":"code/vue/vue3-router4/07-重定向-别名.md","localizedDate":"2023年9月19日","excerpt":"<h1> 重定向 redirect</h1>\\n<p>接收 3 种形式的参数</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token doc-comment comment\\">/**\\n * Route Location that can infer the possible paths.\\n *\\n * <span class=\\"token keyword\\">@internal</span>\\n */</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">declare</span> <span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">RouteLocationPathRaw</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">RouteQueryAndHash</span><span class=\\"token punctuation\\">,</span> MatcherLocationAsPath<span class=\\"token punctuation\\">,</span> RouteLocationOptions <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token doc-comment comment\\">/**\\n * User-level route location\\n */</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">declare</span> <span class=\\"token keyword\\">type</span> <span class=\\"token class-name\\">RouteLocationRaw</span> <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">string</span> <span class=\\"token operator\\">|</span> RouteLocationPathRaw <span class=\\"token operator\\">|</span> RouteLocationNamedRaw<span class=\\"token punctuation\\">;</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"XiaoAjun"},"autoDesc":true}');export{e as data};
