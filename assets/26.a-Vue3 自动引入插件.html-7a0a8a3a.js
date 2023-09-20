const n=JSON.parse(`{"key":"v-fb252e48","path":"/code/vue/vue3/26.a-Vue3%20%E8%87%AA%E5%8A%A8%E5%BC%95%E5%85%A5%E6%8F%92%E4%BB%B6.html","title":"26.a-Vue3 自动引入插件","lang":"zh-CN","frontmatter":{"category":"vue3","title":"26.a-Vue3 自动引入插件","updated":"2023-05-13 22:56","description":"小彩蛋 Vue3 自动引入插件 unplugin-auto-import/vite vite 配置 import { defineConfig } from 'vite' import vue from '@vitejs/plugin-vue' import VueJsx from '@vitejs/plugin-vue-jsx' import AutoImport from 'unplugin-auto-import/vite' // https://vitejs.dev/config/ export default defineConfig({ plugins: [vue(),VueJsx(),AutoImport({ imports:['vue'], dts:\\"src/auto-import.d.ts\\" })] })","head":[["meta",{"property":"og:url","content":"https://johno666.github.io/code/vue/vue3/26.a-Vue3%20%E8%87%AA%E5%8A%A8%E5%BC%95%E5%85%A5%E6%8F%92%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"小阿俊@博客"}],["meta",{"property":"og:title","content":"26.a-Vue3 自动引入插件"}],["meta",{"property":"og:description","content":"小彩蛋 Vue3 自动引入插件 unplugin-auto-import/vite vite 配置 import { defineConfig } from 'vite' import vue from '@vitejs/plugin-vue' import VueJsx from '@vitejs/plugin-vue-jsx' import AutoImport from 'unplugin-auto-import/vite' // https://vitejs.dev/config/ export default defineConfig({ plugins: [vue(),VueJsx(),AutoImport({ imports:['vue'], dts:\\"src/auto-import.d.ts\\" })] })"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-19T06:11:13.000Z"}],["meta",{"property":"article:author","content":"XiaoAjun"}],["meta",{"property":"article:modified_time","content":"2023-09-19T06:11:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"26.a-Vue3 自动引入插件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-19T06:11:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoAjun\\",\\"url\\":\\"https://johno666.github.io/\\"}]}"]]},"headers":[],"git":{"createdTime":1695103873000,"updatedTime":1695103873000,"contributors":[{"name":"张伟竣","email":"2938795170@qq.com","commits":1}]},"readingTime":{"minutes":0.44,"words":131},"filePathRelative":"code/vue/vue3/26.a-Vue3 自动引入插件.md","localizedDate":"2023年9月19日","excerpt":"<h1> 小彩蛋 Vue3 自动引入插件</h1>\\n<p><code>unplugin-auto-import/vite</code></p>\\n<p>vite 配置</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> defineConfig <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vite'</span>\\n<span class=\\"token keyword\\">import</span> vue <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'@vitejs/plugin-vue'</span>\\n<span class=\\"token keyword\\">import</span> VueJsx <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'@vitejs/plugin-vue-jsx'</span>\\n<span class=\\"token keyword\\">import</span> AutoImport <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'unplugin-auto-import/vite'</span>\\n<span class=\\"token comment\\">// https://vitejs.dev/config/</span>\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token function\\">defineConfig</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  plugins<span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token function\\">vue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span><span class=\\"token function\\">VueJsx</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span><span class=\\"token function\\">AutoImport</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    imports<span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'vue'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n    dts<span class=\\"token operator\\">:</span><span class=\\"token string\\">\\"src/auto-import.d.ts\\"</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">]</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"XiaoAjun"},"autoDesc":true}`);export{n as data};
