const e=JSON.parse('{"key":"v-4ae9e929","path":"/code/vue/vue3/09-computed%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7.html","title":"09-computed计算属性","lang":"zh-CN","frontmatter":{"category":"vue3","title":"09-computed计算属性","updated":"2023-05-13 22:56","description":"computed用法 计算属性 就是当依赖的属性的值发生变化的时候，才会触发他的更改，如果依赖的值，不发生变化的时候，使用的是缓存中的属性值。 不需要在 改变值的方法里面调用 计算函数 函数形式 import { computed, reactive, ref } from \'vue\' let price = ref(0)//$0 let m = computed&lt;string&gt;(()=&gt;{ return `$` + price.value }) price.value = 500","head":[["meta",{"property":"og:url","content":"https://johno666.github.io/code/vue/vue3/09-computed%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7.html"}],["meta",{"property":"og:site_name","content":"小阿俊@博客"}],["meta",{"property":"og:title","content":"09-computed计算属性"}],["meta",{"property":"og:description","content":"computed用法 计算属性 就是当依赖的属性的值发生变化的时候，才会触发他的更改，如果依赖的值，不发生变化的时候，使用的是缓存中的属性值。 不需要在 改变值的方法里面调用 计算函数 函数形式 import { computed, reactive, ref } from \'vue\' let price = ref(0)//$0 let m = computed&lt;string&gt;(()=&gt;{ return `$` + price.value }) price.value = 500"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-19T06:11:13.000Z"}],["meta",{"property":"article:author","content":"XiaoAjun"}],["meta",{"property":"article:modified_time","content":"2023-09-19T06:11:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"09-computed计算属性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-19T06:11:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoAjun\\",\\"url\\":\\"https://johno666.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"函数形式","slug":"函数形式","link":"#函数形式","children":[]},{"level":2,"title":"对象形式","slug":"对象形式","link":"#对象形式","children":[]},{"level":2,"title":"computed购物车案例","slug":"computed购物车案例","link":"#computed购物车案例","children":[]}],"git":{"createdTime":1695103873000,"updatedTime":1695103873000,"contributors":[{"name":"张伟竣","email":"2938795170@qq.com","commits":1}]},"readingTime":{"minutes":1.27,"words":380},"filePathRelative":"code/vue/vue3/09-computed计算属性.md","localizedDate":"2023年9月19日","excerpt":"<h1> computed用法</h1>\\n<p>计算属性 就是当依赖的属性的值发生变化的时候，才会触发他的更改，如果依赖的值，不发生变化的时候，使用的是缓存中的属性值。</p>\\n<p>不需要在 改变值的方法里面调用 计算函数</p>\\n<h2> 函数形式</h2>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> computed<span class=\\"token punctuation\\">,</span> reactive<span class=\\"token punctuation\\">,</span> ref <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\'vue\'</span>\\n<span class=\\"token keyword\\">let</span> price <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span><span class=\\"token comment\\">//$0</span>\\n \\n<span class=\\"token keyword\\">let</span> m <span class=\\"token operator\\">=</span> <span class=\\"token generic-function\\"><span class=\\"token function\\">computed</span><span class=\\"token generic class-name\\"><span class=\\"token operator\\">&lt;</span><span class=\\"token builtin\\">string</span><span class=\\"token operator\\">&gt;</span></span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token operator\\">=&gt;</span><span class=\\"token punctuation\\">{</span>\\n   <span class=\\"token keyword\\">return</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">$</span><span class=\\"token template-punctuation string\\">`</span></span> <span class=\\"token operator\\">+</span> price<span class=\\"token punctuation\\">.</span>value\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n \\nprice<span class=\\"token punctuation\\">.</span>value <span class=\\"token operator\\">=</span> <span class=\\"token number\\">500</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"XiaoAjun"},"autoDesc":true}');export{e as data};
