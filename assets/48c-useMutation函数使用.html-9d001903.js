const n=JSON.parse(`{"key":"v-2abdcde8","path":"/code/react/React18/48c-useMutation%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8.html","title":"48c-useMutation函数使用","lang":"zh-CN","frontmatter":{"category":"react18","title":"48c-useMutation函数使用","updated":"2023-05-13 22:56","description":"build 请求的构建器 delStudent import {createApi, fetchBaseQuery} from \\"@reduxjs/toolkit/dist/query/react\\"; // 创建Api对象 //createApi() 用来创建RTKQ中的API对象 // RTKQ的所有功能都需要通过该对象来进行 // createApi() 需要一个对象作为参数 const studentApi = createApi({ reducerPath: 'studentApi', // Api的标识，不能和其他的Api或reducer重复 baseQuery: fetchBaseQuery({ baseUrl: \\"http://localhost:1337/api/\\" }),// 指定查询的基础信息，发送请求使用的工具 endpoints(build) { // build是请求的构建器，通过build来设置请求的相关信息 return { delStudent:build.mutation({ query(id) { //http://localhost:1337/api/students/4 return { // 如果发送的get请求，需要返回一个对象来设置请求的信息 url:\`students/\${id}\`, method:'delete' }; } }), }; }// endpoints 用来指定Api中的各种功能，是一个方法，需要一个对象作为返回值 });","head":[["meta",{"property":"og:url","content":"https://johno666.github.io/code/react/React18/48c-useMutation%E5%87%BD%E6%95%B0%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"小阿俊@博客"}],["meta",{"property":"og:title","content":"48c-useMutation函数使用"}],["meta",{"property":"og:description","content":"build 请求的构建器 delStudent import {createApi, fetchBaseQuery} from \\"@reduxjs/toolkit/dist/query/react\\"; // 创建Api对象 //createApi() 用来创建RTKQ中的API对象 // RTKQ的所有功能都需要通过该对象来进行 // createApi() 需要一个对象作为参数 const studentApi = createApi({ reducerPath: 'studentApi', // Api的标识，不能和其他的Api或reducer重复 baseQuery: fetchBaseQuery({ baseUrl: \\"http://localhost:1337/api/\\" }),// 指定查询的基础信息，发送请求使用的工具 endpoints(build) { // build是请求的构建器，通过build来设置请求的相关信息 return { delStudent:build.mutation({ query(id) { //http://localhost:1337/api/students/4 return { // 如果发送的get请求，需要返回一个对象来设置请求的信息 url:\`students/\${id}\`, method:'delete' }; } }), }; }// endpoints 用来指定Api中的各种功能，是一个方法，需要一个对象作为返回值 });"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-19T06:11:13.000Z"}],["meta",{"property":"article:author","content":"XiaoAjun"}],["meta",{"property":"article:modified_time","content":"2023-09-19T06:11:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"48c-useMutation函数使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-19T06:11:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoAjun\\",\\"url\\":\\"https://johno666.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"build 请求的构建器 delStudent","slug":"build-请求的构建器-delstudent","link":"#build-请求的构建器-delstudent","children":[{"level":3,"title":"Mutation 钩子函数命名","slug":"mutation-钩子函数命名","link":"#mutation-钩子函数命名","children":[]}]},{"level":2,"title":"组件内使用","slug":"组件内使用","link":"#组件内使用","children":[{"level":3,"title":"获取删除的钩子，useMutation的钩子返回的是一个数组","slug":"获取删除的钩子-usemutation的钩子返回的是一个数组","link":"#获取删除的钩子-usemutation的钩子返回的是一个数组","children":[]}]},{"level":2,"title":"post/put 请求会自动转json","slug":"post-put-请求会自动转json","link":"#post-put-请求会自动转json","children":[]}],"git":{"createdTime":1695103873000,"updatedTime":1695103873000,"contributors":[{"name":"张伟竣","email":"2938795170@qq.com","commits":1}]},"readingTime":{"minutes":1.49,"words":448},"filePathRelative":"code/react/React18/48c-useMutation函数使用.md","localizedDate":"2023年9月19日","excerpt":"<h2> build 请求的构建器 delStudent</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span>createApi<span class=\\"token punctuation\\">,</span> fetchBaseQuery<span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"@reduxjs/toolkit/dist/query/react\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n\\n<span class=\\"token comment\\">// 创建Api对象</span>\\n<span class=\\"token comment\\">//createApi() 用来创建RTKQ中的API对象</span>\\n<span class=\\"token comment\\">// RTKQ的所有功能都需要通过该对象来进行</span>\\n<span class=\\"token comment\\">// createApi() 需要一个对象作为参数</span>\\n<span class=\\"token keyword\\">const</span> studentApi <span class=\\"token operator\\">=</span> <span class=\\"token function\\">createApi</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">reducerPath</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'studentApi'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// Api的标识，不能和其他的Api或reducer重复</span>\\n    <span class=\\"token literal-property property\\">baseQuery</span><span class=\\"token operator\\">:</span> <span class=\\"token function\\">fetchBaseQuery</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">baseUrl</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"http://localhost:1337/api/\\"</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span><span class=\\"token comment\\">// 指定查询的基础信息，发送请求使用的工具</span>\\n    <span class=\\"token function\\">endpoints</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">build</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// build是请求的构建器，通过build来设置请求的相关信息</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token literal-property property\\">delStudent</span><span class=\\"token operator\\">:</span>build<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">mutation</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token function\\">query</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">id</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                    <span class=\\"token comment\\">//http://localhost:1337/api/students/4</span>\\n                    <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">{</span>\\n                      <span class=\\"token comment\\">// 如果发送的get请求，需要返回一个对象来设置请求的信息</span>\\n                      <span class=\\"token literal-property property\\">url</span><span class=\\"token operator\\">:</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token string\\">students/</span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">\${</span>id<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">\`</span></span><span class=\\"token punctuation\\">,</span>\\n                      <span class=\\"token literal-property property\\">method</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'delete'</span>\\n                    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token comment\\">// endpoints 用来指定Api中的各种功能，是一个方法，需要一个对象作为返回值</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"XiaoAjun"},"autoDesc":true}`);export{n as data};
