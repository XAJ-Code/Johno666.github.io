const n=JSON.parse(`{"key":"v-18ba555f","path":"/code/react/React18/47a-RTK%E5%BA%94%E7%94%A8.html","title":"47a-RTK应用","lang":"zh-CN","frontmatter":{"category":"react18","title":"47a-RTK应用","updated":"2023-05-13 22:56","description":"47a-RTK 使用 在 React 中全局使用 store import ReactDOM from \\"react-dom/client\\"; import App from \\"./App\\"; import {Provider} from \\"react-redux\\"; import store from './store'; const root = ReactDOM.createRoot(document.getElementById('root')); root.render( &lt;Provider store={store}&gt; &lt;App/&gt; &lt;/Provider&gt; );","head":[["meta",{"property":"og:url","content":"https://johno666.github.io/code/react/React18/47a-RTK%E5%BA%94%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"小阿俊@博客"}],["meta",{"property":"og:title","content":"47a-RTK应用"}],["meta",{"property":"og:description","content":"47a-RTK 使用 在 React 中全局使用 store import ReactDOM from \\"react-dom/client\\"; import App from \\"./App\\"; import {Provider} from \\"react-redux\\"; import store from './store'; const root = ReactDOM.createRoot(document.getElementById('root')); root.render( &lt;Provider store={store}&gt; &lt;App/&gt; &lt;/Provider&gt; );"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-19T06:11:13.000Z"}],["meta",{"property":"article:author","content":"XiaoAjun"}],["meta",{"property":"article:modified_time","content":"2023-09-19T06:11:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"47a-RTK应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-19T06:11:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoAjun\\",\\"url\\":\\"https://johno666.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"在 React 中全局使用 store","slug":"在-react-中全局使用-store","link":"#在-react-中全局使用-store","children":[]},{"level":2,"title":"执行三步骤","slug":"执行三步骤","link":"#执行三步骤","children":[]}],"git":{"createdTime":1695103873000,"updatedTime":1695103873000,"contributors":[{"name":"张伟竣","email":"2938795170@qq.com","commits":1}]},"readingTime":{"minutes":0.87,"words":262},"filePathRelative":"code/react/React18/47a-RTK应用.md","localizedDate":"2023年9月19日","excerpt":"<h1> 47a-RTK 使用</h1>\\n<h2> 在 React 中全局使用 store</h2>\\n<div class=\\"language-jsx line-numbers-mode\\" data-ext=\\"jsx\\"><pre class=\\"language-jsx\\"><code><span class=\\"token keyword\\">import</span> ReactDOM <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react-dom/client\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> App <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"./App\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span>Provider<span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react-redux\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> store <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'./store'</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> root <span class=\\"token operator\\">=</span> ReactDOM<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createRoot</span><span class=\\"token punctuation\\">(</span>document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'root'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nroot<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Provider</span></span> <span class=\\"token attr-name\\">store</span><span class=\\"token script language-javascript\\"><span class=\\"token script-punctuation punctuation\\">=</span><span class=\\"token punctuation\\">{</span>store<span class=\\"token punctuation\\">}</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token plain-text\\">\\n        </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">App</span></span><span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token plain-text\\">\\n    </span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span><span class=\\"token class-name\\">Provider</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"XiaoAjun"},"autoDesc":true}`);export{n as data};
