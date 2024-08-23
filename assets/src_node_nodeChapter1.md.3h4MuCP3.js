import{_ as i,o as e,c as a,R as n}from"./chunks/framework.GeoionXv.js";const s="/assets/image1.S6VN3N9B.png",l="/assets/image2.PlqLhsaG.png",o="/assets/images3.dtTEsSGM.png",t="/assets/image4.enZxmaXM.png",j=JSON.parse('{"title":"node学习笔记","description":"","frontmatter":{},"headers":[],"relativePath":"src/node/nodeChapter1.md","filePath":"src/node/nodeChapter1.md"}'),r={name:"src/node/nodeChapter1.md"},p=n('<h1 id="node学习笔记" tabindex="-1">node学习笔记 <a class="header-anchor" href="#node学习笔记" aria-label="Permalink to &quot;node学习笔记&quot;">​</a></h1><h2 id="第一部分-node简介" tabindex="-1">第一部分：node简介 <a class="header-anchor" href="#第一部分-node简介" aria-label="Permalink to &quot;第一部分：node简介&quot;">​</a></h2><h3 id="node-js是什么" tabindex="-1">Node.js是什么 <a class="header-anchor" href="#node-js是什么" aria-label="Permalink to &quot;Node.js是什么&quot;">​</a></h3><p>一、<strong>官方对Node.js的定义</strong>：</p><ul><li><p>Node.js是一个基于<strong>V8 JavaScript引擎</strong>的JavaScript<strong>运行时</strong>环境。</p></li><li><p>也就是说Node.js基于V8引擎来执行JavaScript的代码，但是不仅仅只有V8引擎：</p></li><li><p>前面我们知道<strong>V8可以嵌入到任何C ++应用程序中</strong>，无论是Chrome还是Node.js，事实上都是嵌入了V8引擎来执行JavaScript代码；</p></li><li><p>但是在Chrome浏览器中，还需要解析、渲染HTML、CSS等相关渲染引擎(Blink渲染引擎)，另外还需要提供支持浏览器操作的API、浏览器自己的事件循环等；</p></li><li><p>另外，在Node.js中我们也需要进行一些额外的操作，比如文件系统读/写、网络IO、加密、压缩解压文件等操作；</p><h3 id="浏览器和node的差别" tabindex="-1">浏览器和Node的差别 <a class="header-anchor" href="#浏览器和node的差别" aria-label="Permalink to &quot;浏览器和Node的差别&quot;">​</a></h3></li><li><p>差别架构图如下 <img src="'+s+'" alt="image-20231021191414966"></p></li><li><p>Node.js详细架构图如下：</p><ul><li>我们编写的Javascript代码会经过V8引擎，在通过Node.js的Bindings,再放到Libuv的事件循环中</li><li><strong>libuv</strong>是用C语言编写的，是node中实现跨平台等其他操作系统层的重要平台</li><li>libuv提供了事件循环、文件系统读写、网络I/O、线程池等内容</li></ul><p><img src="'+l+'" alt="image-20231021191823295"></p></li></ul><h3 id="node-js前言-commonjs规范-个人总结理解" tabindex="-1">Node.js前言---commonJs规范(个人总结理解) <a class="header-anchor" href="#node-js前言-commonjs规范-个人总结理解" aria-label="Permalink to &quot;Node.js前言---commonJs规范(个人总结理解)&quot;">​</a></h3><ul><li>node是commonjs模块化规范的最好体现，因为node里面是<strong>直接内置支持commonjs</strong>的，就是支持export或module.exports={}和require（），那么他们实现模块化的本质其实就是<strong>对象的引用赋值</strong>的过程，因为exports导出的是一个对象，而require函数导入的就是这个<strong>对象的引用地址</strong>。</li><li>node中实际是module.exports的导出（也就是node提出的），exports.xxxx其实是commonjs中的规范（但node为了实现cjs的规范也实现了这种方式），但是在node中也能导出但一般不用。</li><li>在node中require引入过程中，引入的模块代码会<strong>被执行一次</strong>，多次引用不会重复执行，存在循环引用时候用的是深度优先算法，(本人对该算法的一理解：一路走到底)。 <strong>补充</strong> ：require的查找规则有很多种，根据你传入的路径来解析查找，（传入的是./会解析为文件路劲，或者传入‘fs’,当做内置模块去查找），esmodule是 es6提出来的规范，相当于js内置了这种规范，但是要浏览器支持，export defult是默认导出，一个模块只能有一个，es2022还加入了一个新特性，<strong>import.meta</strong>项目中常见的用法(import.meta.url)记录了当前模块的元信息</li></ul><h2 id="第二部分-npm工具介绍以及原理" tabindex="-1">第二部分，npm工具介绍以及原理 <a class="header-anchor" href="#第二部分-npm工具介绍以及原理" aria-label="Permalink to &quot;第二部分，npm工具介绍以及原理&quot;">​</a></h2><h3 id="npm简介" tabindex="-1">npm简介 <a class="header-anchor" href="#npm简介" aria-label="Permalink to &quot;npm简介&quot;">​</a></h3><ul><li>npm（全称 Node Package Manager）是 Node.js 的包管理工具，它是一个基于命令行的工具，用于帮助开发者在自己的项目中安装、升级、移除和管理依赖项。</li><li><a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">npm官网</a><ul><li>类似于 PHP 的工具：Composer。它是 PHP 的包管理器，可以用于下载、安装和管理 PHP 的依赖项，类似于 npm。</li><li>类似于 Java 的工具：Maven。它是 Java 的构建工具和项目管理工具，可以自动化构建、测试和部署 Java 应用程序，类似于 npm 和 webpack 的功能。</li><li>类似于 Python 的工具：pip。它是 Python 的包管理器，可以用于安装和管理 Python 的依赖项，类似于 npm。</li><li>类似于 Rust 的工具：Cargo。它是 Rust 的包管理器和构建工具，可以用于下载、编译和管理 Rust 的依赖项，类似于 npm 和 Maven 的功能。</li></ul><h3 id="npm常用命令" tabindex="-1">npm常用命令 <a class="header-anchor" href="#npm常用命令" aria-label="Permalink to &quot;npm常用命令&quot;">​</a></h3></li></ul><div class="info custom-block"><p class="custom-block-title">npm常用命令</p><ol><li>npm init：初始化一个新的 npm 项目，创建 package.json 文件。</li><li>npm install：安装一个包或一组包，并且会在当前目录存放一个node_modules。</li><li>npm install (package-name) --save：安装指定的包，并将其添加到 package.json 文件中的依赖列表中。</li><li>npm update (package-name)：更新指定的包。</li><li>npm uninstall (package-name)：卸载指定的包。</li><li>6.npm run (script-name)：执行 package.json 文件中定义的脚本命令。</li><li>npm info (package-name)：查看指定包的详细信息。</li><li>npm list：列出当前项目中安装的所有包。</li><li>npm outdated：列出当前项目中需要更新的包。</li><li>npm publish：发布自己开发的包到 npm 库中。</li><li>npm publish：发布自己开发的包到 npm 库中。</li><li>pm config list 用于列出所有的 npm 配置信息。执行该命令可以查看当前系统和用户级别的所有 npm 配置信息，以及当前项目的配置信息（如果在项目目录下执行该命令）</li><li>npm get registry 用于获取当前 npm 配置中的 registry 配置项的值。registry 配置项用于指定 npm 包的下载地址，如果未指定，则默认使用 npm 官方的包注册表地址</li><li>npm set registry npm config set registry (registry-url) 命令，将 registry 配置项的值修改为指定的 (registry-url) 地址</li></ol></div><h3 id="npm-install的原理" tabindex="-1">npm install的原理 <a class="header-anchor" href="#npm-install的原理" aria-label="Permalink to &quot;npm install的原理&quot;">​</a></h3><details class="details custom-block"><summary>点击展开查看</summary><ul><li>npm install采用的扁平式安装形式，会把所有的依赖项全部平铺在node_modules目录下面</li><li>先简单阐述npm install 的过程 <ol><li>首先会逐级去寻找npm的配置文件，是一个命名为.npmrc的配置文件，寻找路劲:项目根目录-用户级目录-全局根目录-npm安装的内置目录</li><li>检查项目根目录有没有package.json文件</li><li>对比package.json和package.lock.json文件，版本不一致根据package,json的版本号去下载依赖包并同时更新package.lock.json文件</li><li>检查npm依赖包缓存，如果有缓存直接解压进node_modules文件夹，没有缓存去根据配置文件下载源路径下载依赖包</li><li><ul><li><img src="'+o+'" alt="image.png"></li></ul></li></ol></li></ul></details><h3 id="npm-run的原理" tabindex="-1">npm run的原理 <a class="header-anchor" href="#npm-run的原理" aria-label="Permalink to &quot;npm run的原理&quot;">​</a></h3><p>1.根据package.json文件的可执行文件名字到项目级的node_modules目录下的.bin文件下执行对应的脚本 2.寻找node_modules也是逐级寻找的 3.假如都没有找到就会报错</p><p><img src="'+t+`" alt="image.png"></p><blockquote><p>因为nodejs 是跨平台的所以可执行命令兼容各个平台</p></blockquote><ul><li>.sh文件是给Linux unix Macos 使用</li><li>.cmd 给windows的cmd使用</li><li>.ps1 给windows的powerShell 使用 <strong>备注</strong>：npm 也是有生命周期的，如下：</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;predev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node prev.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;postdev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node post.js&quot;</span></span></code></pre></div><p>predev再执行dev之前会自动执行，postdev会在dev之后执行</p><h3 id="npx" tabindex="-1">npx <a class="header-anchor" href="#npx" aria-label="Permalink to &quot;npx&quot;">​</a></h3><ul><li>npx是npm5.2版本以后内置的一个工具</li><li>它允许<strong>用户在不安装全局包</strong>的情况下，运行已安装在<strong>本地项目中的包或者远程仓库中的包</strong>。</li><li>npx的作用是在命令行中运行node包中的可执行文件，而不需要全局安装这些包。</li><li>这可以使开发人员更轻松地管理包的依赖关系，并且可以避免全局污染的问题。它还可以帮助开发人员在项目中使用不同版本的包，而不会出现版本冲突的问题。</li></ul><h3 id="node中支持的模块化规范" tabindex="-1">node中支持的模块化规范 <a class="header-anchor" href="#node中支持的模块化规范" aria-label="Permalink to &quot;node中支持的模块化规范&quot;">​</a></h3><ul><li>其实node默认是commonjs，但是也可是是ESmodule</li><li>需要再package.json中指定type字段</li><li>假如指定ESmodeuls，就不能使用cjs,相应的有部分API也不能使用，例如__dirname和__filename</li><li><strong>CJS是基于运行时的同步加载(不支持tree shrking)，esm是基于编译时的异步加载</strong></li></ul>`,24),d=[p];function m(h,c,u,g,k,_){return e(),a("div",null,d)}const b=i(r,[["render",m]]);export{j as __pageData,b as default};
