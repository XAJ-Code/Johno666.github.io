const n=JSON.parse('{"key":"v-724dcfd1","path":"/code/react/React18/05-%E6%A8%A1%E5%9D%97%E5%8C%96.html","title":"05-模块化","lang":"zh-CN","frontmatter":{"category":"react18","title":"05-模块化","updated":"2023-05-13 22:56","description":"作为一个模块，我们不希望模块中所有的内容都暴露给外部 作为导入方，也不希望导入无用的变量 export（导出） 导出用来决定一个模块中哪些内容可以被外部查看 导出分成两种： 默认导出 语法： export default xxx; 一个模块中只能有一个默认导出 命名导出 export const A; // 导出变量（命名导出） export let name1, name2, …, nameN; export let name1 = …, name2 = …, …, nameN; ​ // 导出函数（命名导出） export function functionName(){...} ​ // 导出类（命名导出） export class ClassName {...} ​ // 导出一组 export { name1, name2, …, nameN }; ​ // 重命名导出 export { variable1 as name1, variable2 as name2, …, nameN }; ​ // 解构赋值后导出 export const { name1, name2: bar } = o; ​ // 默认导出 export default expression; export default function (…) { … } // also class, function* export default function name1(…) { … } // also class, function* export { name1 as default, … }; ​ // 聚合模块 export * from …; // 将其他模块中的全部内容导出（除了default） export * as name1 from …; // ECMAScript® 2O20 将其他模块中的全部内容以指定别名导出 export { name1, name2, …, nameN } from …; // 将其他模块中的指定内容导出 export { import1 as name1, import2 as name2, …, nameN } from …; // 将其他模块中的指定内容重命名导出 export { default, … } from …; ​","head":[["meta",{"property":"og:url","content":"https://johno666.github.io/code/react/React18/05-%E6%A8%A1%E5%9D%97%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"小阿俊@博客"}],["meta",{"property":"og:title","content":"05-模块化"}],["meta",{"property":"og:description","content":"作为一个模块，我们不希望模块中所有的内容都暴露给外部 作为导入方，也不希望导入无用的变量 export（导出） 导出用来决定一个模块中哪些内容可以被外部查看 导出分成两种： 默认导出 语法： export default xxx; 一个模块中只能有一个默认导出 命名导出 export const A; // 导出变量（命名导出） export let name1, name2, …, nameN; export let name1 = …, name2 = …, …, nameN; ​ // 导出函数（命名导出） export function functionName(){...} ​ // 导出类（命名导出） export class ClassName {...} ​ // 导出一组 export { name1, name2, …, nameN }; ​ // 重命名导出 export { variable1 as name1, variable2 as name2, …, nameN }; ​ // 解构赋值后导出 export const { name1, name2: bar } = o; ​ // 默认导出 export default expression; export default function (…) { … } // also class, function* export default function name1(…) { … } // also class, function* export { name1 as default, … }; ​ // 聚合模块 export * from …; // 将其他模块中的全部内容导出（除了default） export * as name1 from …; // ECMAScript® 2O20 将其他模块中的全部内容以指定别名导出 export { name1, name2, …, nameN } from …; // 将其他模块中的指定内容导出 export { import1 as name1, import2 as name2, …, nameN } from …; // 将其他模块中的指定内容重命名导出 export { default, … } from …; ​"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-19T06:11:13.000Z"}],["meta",{"property":"article:author","content":"XiaoAjun"}],["meta",{"property":"article:modified_time","content":"2023-09-19T06:11:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05-模块化\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-19T06:11:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoAjun\\",\\"url\\":\\"https://johno666.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"默认导出","slug":"默认导出","link":"#默认导出","children":[]},{"level":2,"title":"命名导出","slug":"命名导出","link":"#命名导出","children":[]},{"level":2,"title":"导入默认模块","slug":"导入默认模块","link":"#导入默认模块","children":[]},{"level":2,"title":"导入指定内容","slug":"导入指定内容","link":"#导入指定内容","children":[{"level":3,"title":"以指定别名引入模块中的指定内容","slug":"以指定别名引入模块中的指定内容","link":"#以指定别名引入模块中的指定内容","children":[]}]},{"level":2,"title":"导入默认及指定内容","slug":"导入默认及指定内容","link":"#导入默认及指定内容","children":[]}],"git":{"createdTime":1695103873000,"updatedTime":1695103873000,"contributors":[{"name":"张伟竣","email":"2938795170@qq.com","commits":1}]},"readingTime":{"minutes":1.99,"words":596},"filePathRelative":"code/react/React18/05-模块化.md","localizedDate":"2023年9月19日","excerpt":"<p>作为一个模块，我们不希望模块中所有的内容都暴露给外部<br>\\n作为导入方，也不希望导入无用的变量</p>\\n<h1> export（导出）</h1>\\n<p>导出用来决定一个模块中哪些内容可以被外部查看</p>\\n<p>导出分成两种：</p>\\n<h2> 默认导出</h2>\\n<ul>\\n<li>语法：<br>\\n<code>export default xxx;</code></li>\\n<li>一个模块中只能有一个默认导出</li>\\n</ul>\\n<h2> 命名导出</h2>\\n<p><code>export const A;</code></p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 导出变量（命名导出）  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">let</span> name1<span class=\\"token punctuation\\">,</span> name2<span class=\\"token punctuation\\">,</span> …<span class=\\"token punctuation\\">,</span> nameN<span class=\\"token punctuation\\">;</span>   \\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">let</span> name1 <span class=\\"token operator\\">=</span> …<span class=\\"token punctuation\\">,</span> name2 <span class=\\"token operator\\">=</span> …<span class=\\"token punctuation\\">,</span> …<span class=\\"token punctuation\\">,</span> nameN<span class=\\"token punctuation\\">;</span>   \\n​  \\n<span class=\\"token comment\\">// 导出函数（命名导出）  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">functionName</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">}</span>  \\n​  \\n<span class=\\"token comment\\">// 导出类（命名导出）  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ClassName</span> <span class=\\"token punctuation\\">{</span><span class=\\"token operator\\">...</span><span class=\\"token punctuation\\">}</span>  \\n​  \\n<span class=\\"token comment\\">// 导出一组  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token punctuation\\">{</span> name1<span class=\\"token punctuation\\">,</span> name2<span class=\\"token punctuation\\">,</span> …<span class=\\"token punctuation\\">,</span> nameN <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>  \\n​  \\n<span class=\\"token comment\\">// 重命名导出  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token punctuation\\">{</span> variable1 <span class=\\"token keyword\\">as</span> name1<span class=\\"token punctuation\\">,</span> variable2 <span class=\\"token keyword\\">as</span> name2<span class=\\"token punctuation\\">,</span> …<span class=\\"token punctuation\\">,</span> nameN <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>  \\n​  \\n<span class=\\"token comment\\">// 解构赋值后导出  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">const</span> <span class=\\"token punctuation\\">{</span> name1<span class=\\"token punctuation\\">,</span> <span class=\\"token literal-property property\\">name2</span><span class=\\"token operator\\">:</span> bar <span class=\\"token punctuation\\">}</span> <span class=\\"token operator\\">=</span> o<span class=\\"token punctuation\\">;</span>  \\n​  \\n<span class=\\"token comment\\">// 默认导出  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> expression<span class=\\"token punctuation\\">;</span>  \\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token keyword\\">function</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">…</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> … <span class=\\"token punctuation\\">}</span> <span class=\\"token comment\\">// also class, function*  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token keyword\\">function</span> <span class=\\"token function\\">name1</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">…</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> … <span class=\\"token punctuation\\">}</span> <span class=\\"token comment\\">// also class, function*  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token punctuation\\">{</span> name1 <span class=\\"token keyword\\">as</span> <span class=\\"token keyword\\">default</span><span class=\\"token punctuation\\">,</span> … <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>  \\n​  \\n<span class=\\"token comment\\">// 聚合模块  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token operator\\">*</span> from …<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 将其他模块中的全部内容导出（除了default）  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token operator\\">*</span> <span class=\\"token keyword\\">as</span> name1 from …<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// ECMAScript® 2O20 将其他模块中的全部内容以指定别名导出  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token punctuation\\">{</span> name1<span class=\\"token punctuation\\">,</span> name2<span class=\\"token punctuation\\">,</span> …<span class=\\"token punctuation\\">,</span> nameN <span class=\\"token punctuation\\">}</span> from …<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 将其他模块中的指定内容导出  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token punctuation\\">{</span> import1 <span class=\\"token keyword\\">as</span> name1<span class=\\"token punctuation\\">,</span> import2 <span class=\\"token keyword\\">as</span> name2<span class=\\"token punctuation\\">,</span> …<span class=\\"token punctuation\\">,</span> nameN <span class=\\"token punctuation\\">}</span> from …<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 将其他模块中的指定内容重命名导出  </span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token keyword\\">default</span><span class=\\"token punctuation\\">,</span> … <span class=\\"token punctuation\\">}</span> from …<span class=\\"token punctuation\\">;</span>   \\n​\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"XiaoAjun"},"autoDesc":true}');export{n as data};
