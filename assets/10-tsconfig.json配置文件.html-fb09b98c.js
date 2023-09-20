const s=JSON.parse(`{"key":"v-5c65448e","path":"/code/language/typescript/%E5%B0%8F%E6%BB%A1TypeScript%E5%9F%BA%E7%A1%80%E6%95%99%E5%AD%A6/10-tsconfig.json%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html","title":"10-tsconfig.json配置文件","lang":"zh-CN","frontmatter":{"title":"10-tsconfig.json配置文件","updated":"2023-05-13 22:56","description":"生成tsconfig.json 文件 这个文件是通过tsc --init命令生成的 \\"compilerOptions\\": { \\"incremental\\": true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度 \\"tsBuildInfoFile\\": \\"./buildFile\\", // 增量编译文件的存储位置 \\"diagnostics\\": true, // 打印诊断信息 \\"target\\": \\"ES5\\", // 目标语言的版本 \\"module\\": \\"CommonJS\\", // 生成代码的模板标准 \\"outFile\\": \\"./app.js\\", // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置\\"module\\": \\"AMD\\", \\"lib\\": [\\"DOM\\", \\"ES2015\\", \\"ScriptHost\\", \\"ES2019.Array\\"], // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入\\"ES2019.Array\\", \\"allowJS\\": true, // 允许编译器编译JS，JSX文件 \\"checkJs\\": true, // 允许在JS文件中报错，通常与allowJS一起使用 \\"outDir\\": \\"./dist\\", // 指定输出目录 \\"rootDir\\": \\"./\\", // 指定输出文件目录(用于输出)，用于控制输出目录结构 \\"declaration\\": true, // 生成声明文件，开启后会自动生成声明文件 \\"declarationDir\\": \\"./file\\", // 指定生成声明文件存放目录 \\"emitDeclarationOnly\\": true, // 只生成声明文件，而不会生成js文件 \\"sourceMap\\": true, // 生成目标文件的sourceMap文件 \\"inlineSourceMap\\": true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中 \\"declarationMap\\": true, // 为声明文件生成sourceMap \\"typeRoots\\": [], // 声明文件目录，默认时node_modules/@types \\"types\\": [], // 加载的声明文件包 \\"removeComments\\":true, // 删除注释 \\"noEmit\\": true, // 不输出文件,即编译后不会生成任何js文件 \\"noEmitOnError\\": true, // 发送错误时不输出任何文件 \\"noEmitHelpers\\": true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用 \\"importHelpers\\": true, // 通过tslib引入helper函数，文件必须是模块 \\"downlevelIteration\\": true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现 \\"strict\\": true, // 开启所有严格的类型检查 \\"alwaysStrict\\": true, // 在代码中注入'use strict' \\"noImplicitAny\\": true, // 不允许隐式的any类型 \\"strictNullChecks\\": true, // 不允许把null、undefined赋值给其他类型的变量 \\"strictFunctionTypes\\": true, // 不允许函数参数双向协变 \\"strictPropertyInitialization\\": true, // 类的实例属性必须初始化 \\"strictBindCallApply\\": true, // 严格的bind/call/apply检查 \\"noImplicitThis\\": true, // 不允许this有隐式的any类型 \\"noUnusedLocals\\": true, // 检查只声明、未使用的局部变量(只提示不报错) \\"noUnusedParameters\\": true, // 检查未使用的函数参数(只提示不报错) \\"noFallthroughCasesInSwitch\\": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行) \\"noImplicitReturns\\": true, //每个分支都会有返回值 \\"esModuleInterop\\": true, // 允许export=导出，由import from 导入 \\"allowUmdGlobalAccess\\": true, // 允许在模块中全局变量的方式访问umd模块 \\"moduleResolution\\": \\"node\\", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入 \\"baseUrl\\": \\"./\\", // 解析非相对模块的基地址，默认是当前目录 \\"paths\\": { // 路径映射，相对于baseUrl // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置 \\"jquery\\": [\\"node_modules/jquery/dist/jquery.min.js\\"] }, \\"rootDirs\\": [\\"src\\",\\"out\\"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错 \\"listEmittedFiles\\": true, // 打印输出文件 \\"listFiles\\": true// 打印编译的文件(包括引用的声明文件) } // 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件） \\"include\\": [ \\"src/**/*\\" ], // 指定一个排除列表（include的反向操作） \\"exclude\\": [ \\"demo.ts\\" ], // 指定哪些文件使用该配置（属于手动一个个指定文件） \\"files\\": [ \\"demo.ts\\" ]","head":[["meta",{"property":"og:url","content":"https://johno666.github.io/code/language/typescript/%E5%B0%8F%E6%BB%A1TypeScript%E5%9F%BA%E7%A1%80%E6%95%99%E5%AD%A6/10-tsconfig.json%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"小阿俊@博客"}],["meta",{"property":"og:title","content":"10-tsconfig.json配置文件"}],["meta",{"property":"og:description","content":"生成tsconfig.json 文件 这个文件是通过tsc --init命令生成的 \\"compilerOptions\\": { \\"incremental\\": true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度 \\"tsBuildInfoFile\\": \\"./buildFile\\", // 增量编译文件的存储位置 \\"diagnostics\\": true, // 打印诊断信息 \\"target\\": \\"ES5\\", // 目标语言的版本 \\"module\\": \\"CommonJS\\", // 生成代码的模板标准 \\"outFile\\": \\"./app.js\\", // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置\\"module\\": \\"AMD\\", \\"lib\\": [\\"DOM\\", \\"ES2015\\", \\"ScriptHost\\", \\"ES2019.Array\\"], // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入\\"ES2019.Array\\", \\"allowJS\\": true, // 允许编译器编译JS，JSX文件 \\"checkJs\\": true, // 允许在JS文件中报错，通常与allowJS一起使用 \\"outDir\\": \\"./dist\\", // 指定输出目录 \\"rootDir\\": \\"./\\", // 指定输出文件目录(用于输出)，用于控制输出目录结构 \\"declaration\\": true, // 生成声明文件，开启后会自动生成声明文件 \\"declarationDir\\": \\"./file\\", // 指定生成声明文件存放目录 \\"emitDeclarationOnly\\": true, // 只生成声明文件，而不会生成js文件 \\"sourceMap\\": true, // 生成目标文件的sourceMap文件 \\"inlineSourceMap\\": true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中 \\"declarationMap\\": true, // 为声明文件生成sourceMap \\"typeRoots\\": [], // 声明文件目录，默认时node_modules/@types \\"types\\": [], // 加载的声明文件包 \\"removeComments\\":true, // 删除注释 \\"noEmit\\": true, // 不输出文件,即编译后不会生成任何js文件 \\"noEmitOnError\\": true, // 发送错误时不输出任何文件 \\"noEmitHelpers\\": true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用 \\"importHelpers\\": true, // 通过tslib引入helper函数，文件必须是模块 \\"downlevelIteration\\": true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现 \\"strict\\": true, // 开启所有严格的类型检查 \\"alwaysStrict\\": true, // 在代码中注入'use strict' \\"noImplicitAny\\": true, // 不允许隐式的any类型 \\"strictNullChecks\\": true, // 不允许把null、undefined赋值给其他类型的变量 \\"strictFunctionTypes\\": true, // 不允许函数参数双向协变 \\"strictPropertyInitialization\\": true, // 类的实例属性必须初始化 \\"strictBindCallApply\\": true, // 严格的bind/call/apply检查 \\"noImplicitThis\\": true, // 不允许this有隐式的any类型 \\"noUnusedLocals\\": true, // 检查只声明、未使用的局部变量(只提示不报错) \\"noUnusedParameters\\": true, // 检查未使用的函数参数(只提示不报错) \\"noFallthroughCasesInSwitch\\": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行) \\"noImplicitReturns\\": true, //每个分支都会有返回值 \\"esModuleInterop\\": true, // 允许export=导出，由import from 导入 \\"allowUmdGlobalAccess\\": true, // 允许在模块中全局变量的方式访问umd模块 \\"moduleResolution\\": \\"node\\", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入 \\"baseUrl\\": \\"./\\", // 解析非相对模块的基地址，默认是当前目录 \\"paths\\": { // 路径映射，相对于baseUrl // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置 \\"jquery\\": [\\"node_modules/jquery/dist/jquery.min.js\\"] }, \\"rootDirs\\": [\\"src\\",\\"out\\"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错 \\"listEmittedFiles\\": true, // 打印输出文件 \\"listFiles\\": true// 打印编译的文件(包括引用的声明文件) } // 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件） \\"include\\": [ \\"src/**/*\\" ], // 指定一个排除列表（include的反向操作） \\"exclude\\": [ \\"demo.ts\\" ], // 指定哪些文件使用该配置（属于手动一个个指定文件） \\"files\\": [ \\"demo.ts\\" ]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-19T06:11:13.000Z"}],["meta",{"property":"article:author","content":"XiaoAjun"}],["meta",{"property":"article:modified_time","content":"2023-09-19T06:11:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10-tsconfig.json配置文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-19T06:11:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"XiaoAjun\\",\\"url\\":\\"https://johno666.github.io/\\"}]}"]]},"headers":[{"level":2,"title":"生成tsconfig.json 文件","slug":"生成tsconfig-json-文件","link":"#生成tsconfig-json-文件","children":[]}],"git":{"createdTime":1695103873000,"updatedTime":1695103873000,"contributors":[{"name":"张伟竣","email":"2938795170@qq.com","commits":1}]},"readingTime":{"minutes":3.85,"words":1154},"filePathRelative":"code/language/typescript/小满TypeScript基础教学/10-tsconfig.json配置文件.md","localizedDate":"2023年9月19日","excerpt":"<h2> 生成tsconfig.json 文件</h2>\\n<p>这个文件是通过<code>tsc --init</code>命令生成的</p>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token string-property property\\">\\"compilerOptions\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token string-property property\\">\\"incremental\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度</span>\\n  <span class=\\"token string-property property\\">\\"tsBuildInfoFile\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"./buildFile\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 增量编译文件的存储位置</span>\\n  <span class=\\"token string-property property\\">\\"diagnostics\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 打印诊断信息 </span>\\n  <span class=\\"token string-property property\\">\\"target\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"ES5\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 目标语言的版本</span>\\n  <span class=\\"token string-property property\\">\\"module\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"CommonJS\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 生成代码的模板标准</span>\\n  <span class=\\"token string-property property\\">\\"outFile\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"./app.js\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置\\"module\\": \\"AMD\\",</span>\\n  <span class=\\"token string-property property\\">\\"lib\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"DOM\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"ES2015\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"ScriptHost\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"ES2019.Array\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入\\"ES2019.Array\\",</span>\\n  <span class=\\"token string-property property\\">\\"allowJS\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 允许编译器编译JS，JSX文件</span>\\n  <span class=\\"token string-property property\\">\\"checkJs\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 允许在JS文件中报错，通常与allowJS一起使用</span>\\n  <span class=\\"token string-property property\\">\\"outDir\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"./dist\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 指定输出目录</span>\\n  <span class=\\"token string-property property\\">\\"rootDir\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"./\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 指定输出文件目录(用于输出)，用于控制输出目录结构</span>\\n  <span class=\\"token string-property property\\">\\"declaration\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 生成声明文件，开启后会自动生成声明文件</span>\\n  <span class=\\"token string-property property\\">\\"declarationDir\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"./file\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 指定生成声明文件存放目录</span>\\n  <span class=\\"token string-property property\\">\\"emitDeclarationOnly\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 只生成声明文件，而不会生成js文件</span>\\n  <span class=\\"token string-property property\\">\\"sourceMap\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 生成目标文件的sourceMap文件</span>\\n  <span class=\\"token string-property property\\">\\"inlineSourceMap\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中</span>\\n  <span class=\\"token string-property property\\">\\"declarationMap\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 为声明文件生成sourceMap</span>\\n  <span class=\\"token string-property property\\">\\"typeRoots\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 声明文件目录，默认时node_modules/@types</span>\\n  <span class=\\"token string-property property\\">\\"types\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 加载的声明文件包</span>\\n  <span class=\\"token string-property property\\">\\"removeComments\\"</span><span class=\\"token operator\\">:</span><span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 删除注释 </span>\\n  <span class=\\"token string-property property\\">\\"noEmit\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 不输出文件,即编译后不会生成任何js文件</span>\\n  <span class=\\"token string-property property\\">\\"noEmitOnError\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 发送错误时不输出任何文件</span>\\n  <span class=\\"token string-property property\\">\\"noEmitHelpers\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用</span>\\n  <span class=\\"token string-property property\\">\\"importHelpers\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 通过tslib引入helper函数，文件必须是模块</span>\\n  <span class=\\"token string-property property\\">\\"downlevelIteration\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现</span>\\n  <span class=\\"token string-property property\\">\\"strict\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 开启所有严格的类型检查</span>\\n  <span class=\\"token string-property property\\">\\"alwaysStrict\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 在代码中注入'use strict'</span>\\n  <span class=\\"token string-property property\\">\\"noImplicitAny\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 不允许隐式的any类型</span>\\n  <span class=\\"token string-property property\\">\\"strictNullChecks\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 不允许把null、undefined赋值给其他类型的变量</span>\\n  <span class=\\"token string-property property\\">\\"strictFunctionTypes\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 不允许函数参数双向协变</span>\\n  <span class=\\"token string-property property\\">\\"strictPropertyInitialization\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 类的实例属性必须初始化</span>\\n  <span class=\\"token string-property property\\">\\"strictBindCallApply\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 严格的bind/call/apply检查</span>\\n  <span class=\\"token string-property property\\">\\"noImplicitThis\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 不允许this有隐式的any类型</span>\\n  <span class=\\"token string-property property\\">\\"noUnusedLocals\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 检查只声明、未使用的局部变量(只提示不报错)</span>\\n  <span class=\\"token string-property property\\">\\"noUnusedParameters\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 检查未使用的函数参数(只提示不报错)</span>\\n  <span class=\\"token string-property property\\">\\"noFallthroughCasesInSwitch\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 防止switch语句贯穿(即如果没有break语句后面不会执行)</span>\\n  <span class=\\"token string-property property\\">\\"noImplicitReturns\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">//每个分支都会有返回值</span>\\n  <span class=\\"token string-property property\\">\\"esModuleInterop\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 允许export=导出，由import from 导入</span>\\n  <span class=\\"token string-property property\\">\\"allowUmdGlobalAccess\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 允许在模块中全局变量的方式访问umd模块</span>\\n  <span class=\\"token string-property property\\">\\"moduleResolution\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"node\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 模块解析策略，ts默认用node的解析策略，即相对的方式导入</span>\\n  <span class=\\"token string-property property\\">\\"baseUrl\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"./\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 解析非相对模块的基地址，默认是当前目录</span>\\n  <span class=\\"token string-property property\\">\\"paths\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token comment\\">// 路径映射，相对于baseUrl</span>\\n    <span class=\\"token comment\\">// 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置</span>\\n    <span class=\\"token string-property property\\">\\"jquery\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"node_modules/jquery/dist/jquery.min.js\\"</span><span class=\\"token punctuation\\">]</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token string-property property\\">\\"rootDirs\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"src\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"out\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错</span>\\n  <span class=\\"token string-property property\\">\\"listEmittedFiles\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span> <span class=\\"token comment\\">// 打印输出文件</span>\\n  <span class=\\"token string-property property\\">\\"listFiles\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token comment\\">// 打印编译的文件(包括引用的声明文件)</span>\\n<span class=\\"token punctuation\\">}</span>\\n \\n<span class=\\"token comment\\">// 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）</span>\\n<span class=\\"token string-property property\\">\\"include\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n   <span class=\\"token string\\">\\"src/**/*\\"</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token comment\\">// 指定一个排除列表（include的反向操作）</span>\\n <span class=\\"token string-property property\\">\\"exclude\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n   <span class=\\"token string\\">\\"demo.ts\\"</span>\\n<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token comment\\">// 指定哪些文件使用该配置（属于手动一个个指定文件）</span>\\n <span class=\\"token string-property property\\">\\"files\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">[</span>\\n   <span class=\\"token string\\">\\"demo.ts\\"</span>\\n<span class=\\"token punctuation\\">]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"XiaoAjun"},"autoDesc":true}`);export{s as data};
