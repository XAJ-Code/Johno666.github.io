const e=JSON.parse('{"key":"v-2096b3cb","path":"/code/linux/03-Nginx%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E5%92%8C%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html","title":"03-Nginx常用命令和配置文件","lang":"zh-CN","frontmatter":{"category":"linux","title":"03-Nginx常用命令和配置文件","updated":"2023-05-13 22:56","description":"目录 Nginx 常用命令 Nginx 配置文件 反向代理 日志分析 负载均衡 upstream","head":[["meta",{"property":"og:url","content":"https://johno666.github.io/code/linux/03-Nginx%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E5%92%8C%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"小阿俊@博客"}],["meta",{"property":"og:title","content":"03-Nginx常用命令和配置文件"}],["meta",{"property":"og:description","content":"目录 Nginx 常用命令 Nginx 配置文件 反向代理 日志分析 负载均衡 upstream"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://johno666.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-19T06:11:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"03-Nginx常用命令和配置文件"}],["meta",{"property":"article:author","content":"XiaoAjun"}],["meta",{"property":"article:modified_time","content":"2023-09-19T06:11:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"03-Nginx常用命令和配置文件\\",\\"image\\":[\\"https://johno666.github.io/\\"],\\"dateModified\\":\\"2023-09-19T06:11:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoAjun\\",\\"url\\":\\"https://johno666.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"Nginx 常用命令","slug":"nginx-常用命令","link":"#nginx-常用命令","children":[{"level":3,"title":"0.安装 nginx","slug":"_0-安装-nginx","link":"#_0-安装-nginx","children":[]},{"level":3,"title":"1.查看 nginx 版本号","slug":"_1-查看-nginx-版本号","link":"#_1-查看-nginx-版本号","children":[]},{"level":3,"title":"2.启动 nginx","slug":"_2-启动-nginx","link":"#_2-启动-nginx","children":[]},{"level":3,"title":"3.停止 nginx","slug":"_3-停止-nginx","link":"#_3-停止-nginx","children":[]},{"level":3,"title":"4.重载 nginx 配置文件","slug":"_4-重载-nginx-配置文件","link":"#_4-重载-nginx-配置文件","children":[]},{"level":3,"title":"5 查看 nginx 进程","slug":"_5-查看-nginx-进程","link":"#_5-查看-nginx-进程","children":[]}]},{"level":2,"title":"1.如何查找 nginx 配置文件","slug":"_1-如何查找-nginx-配置文件","link":"#_1-如何查找-nginx-配置文件","children":[]},{"level":2,"title":"2.打开配置文件","slug":"_2-打开配置文件","link":"#_2-打开配置文件","children":[{"level":3,"title":"1.全局块","slug":"_1-全局块","link":"#_1-全局块","children":[]},{"level":3,"title":"2.events 块","slug":"_2-events-块","link":"#_2-events-块","children":[]},{"level":3,"title":"3.http 块","slug":"_3-http-块","link":"#_3-http-块","children":[]},{"level":3,"title":"4.server 块","slug":"_4-server-块","link":"#_4-server-块","children":[]},{"level":3,"title":"5.location 块","slug":"_5-location-块","link":"#_5-location-块","children":[]},{"level":3,"title":"案例 1 代理到哔哩哔哩","slug":"案例-1-代理到哔哩哔哩","link":"#案例-1-代理到哔哩哔哩","children":[]}]},{"level":2,"title":"proxy_set_header","slug":"proxy-set-header","link":"#proxy-set-header","children":[]},{"level":2,"title":"GoAccess","slug":"goaccess","link":"#goaccess","children":[{"level":3,"title":"1.默认状态是按照轮询的方式去做负载的","slug":"_1-默认状态是按照轮询的方式去做负载的","link":"#_1-默认状态是按照轮询的方式去做负载的","children":[]},{"level":3,"title":"2.权重 weight","slug":"_2-权重-weight","link":"#_2-权重-weight","children":[]},{"level":3,"title":"3.fail_timeout backup","slug":"_3-fail-timeout-backup","link":"#_3-fail-timeout-backup","children":[]}]}],"git":{"createdTime":1695103873000,"updatedTime":1695103873000,"contributors":[{"name":"张伟竣","email":"2938795170@qq.com","commits":1}]},"readingTime":{"minutes":7.49,"words":2247},"filePathRelative":"code/linux/03-Nginx常用命令和配置文件.md","localizedDate":"2023年9月19日","excerpt":"<p>目录</p>\\n<ul>\\n<li><a href=\\"#Nginx%20%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4\\">Nginx 常用命令</a></li>\\n<li><a href=\\"#Nginx%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6\\">Nginx 配置文件</a></li>\\n<li><a href=\\"#%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86\\">反向代理</a></li>\\n<li><a href=\\"#%E6%97%A5%E5%BF%97%E5%88%86%E6%9E%90\\">日志分析</a></li>\\n<li><a href=\\"#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20upstream\\">负载均衡 upstream</a></li>\\n</ul>","copyright":{"author":"XiaoAjun"},"autoDesc":true}');export{e as data};
