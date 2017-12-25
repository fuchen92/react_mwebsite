# React_mwebsite

> A React.js project

## 说明

**学习 react 练手用。因为不知道找一个什么东西练手，就拿公司手机网来模仿（公司手机网并没有 react 版本，也没有用到任何框架，是多页应用，由后台同学和老大控制路由，渲染数据）。这只是一个模仿的练手作，如被告知需要删除会及时删除。**

**当学习了 vue 之后用 vue 写了一个相同的项目，同项目的 vue 版本在这里**
![https://github.com/fuchen92/vue_mwebsite](https://github.com/fuchen92/vue_mwebsite)


项目上渲染出来的都是（mock假数据），首页，列表页，文章页的数据都是假数据，以及用的图片，都是手机网的图直接拿过来用，不过有些功能是没有完全实现的，比如说加载更多，比如说搜索等功能。这些功能如果真正项目要用和完善的话需要和后台同学配合，列表页的文章列表就是请求假数据的，和后台同学配合的话直接参照请求文章列表修改请求的 url 和传参就好了。

## 目录结构

```
	react_mwebsite
		config
		node_modules				// 不用说了吧
		public						// index.html文件入口
		screenshots					// 截图
		scripts						// create react app run eject 后抽离出来的脚本文件
		server						// 提供mock假数据的文件，这个里面都是假数据，可以直接看到请求的数据结构
		src							// 源代码
			assets					// 一些用到的图片和样式
			components				// 组件
				advertise			// advertise 组件，每个文件夹包含该组件的 js 代码和 scss 样式
				...
			router					// 路由（说明：这里的文件夹其实没什么作用，react-router4版本有极大的改变，实际上的router配置在views/layout文件夹下layout.js就是实际的路由配置）
			views					// 视图，也就是页面
				layout				// 布局页，其实也是路由配置
					layout.js		// 实际上的 router 配置
				about				// about 页面
					...
			App.css					// 初始化项目文件
			App.js					// 初始化项目文件
			App.test.js				// 初始化项目文件
			index.css				// 初始化项目文件
			index.js				// 入口文件
			logo.svg
			registerServiceWorker.js	// 入口文件
		.editorconfig
		.gitignore
		package-lock.json
		package.json
		README.md
```

## 运行
```
	# 安装依赖
	cd react_mwebsite/server
	npm install

	# 启动提供mock数据的服务
	node index.js

	# 安装依赖
	cd react_mwebsite
	npm install

	# 启动
	npm start
```

## 页面

实现的页面

* 首页
* 频道页
* 列表页
* 文章页（加载更多没实现，实现也比较简单，和后台同学配合请求数据。文章列表渲染就是请求假数据，所以加载更多就懒的写了）
* 关于我们
* 加入我们
* 联系我们
* 侧边栏目录页
* 侧边栏搜索页（搜索功能没实现）

请求数据用的 ajax 库是 Axios。

... 和一些公共使用的组件

## 截图

![](https://github.com/fuchen92/react_mwebsite/blob/master/screenshots/1.png)
![](https://github.com/fuchen92/react_mwebsite/blob/master/screenshots/2.png)
![](https://github.com/fuchen92/react_mwebsite/blob/master/screenshots/4.png)
![](https://github.com/fuchen92/react_mwebsite/blob/master/screenshots/5.png)
![](https://github.com/fuchen92/react_mwebsite/blob/master/screenshots/8.png)
![](https://github.com/fuchen92/react_mwebsite/blob/master/screenshots/9.png)
![](https://github.com/fuchen92/react_mwebsite/blob/master/screenshots/13.png)
![](https://github.com/fuchen92/react_mwebsite/blob/master/screenshots/14.png)
![](https://github.com/fuchen92/react_mwebsite/blob/master/screenshots/10.png)
![](https://github.com/fuchen92/react_mwebsite/blob/master/screenshots/11.png)
![](https://github.com/fuchen92/react_mwebsite/blob/master/screenshots/12.png)

## 总结

小白我前后学了一遍 `vue` 和 `react`，并用 vue 和 react 写了同一个这个练手项目。深深感到技术之路，学无止境。就我个人而言，相比于 react 的 `jsx`，我更喜欢
`.vue`的单文件组件。技术浅陋就不多做比较了，只是个人喜好而已。

同时也发现了 react 的一点问题，不知道是我使用的姿势不对还是react本身的原因。在我写 article（views/article/article） 页面组件的时候，this.state.article内容是一个空的对象，里面的数据是请求服务后再进行填充的，填充后有多层数据结构，如果一开始不在 article 中定义一个同名的字段，那么在 render 方法中使用会直接报错。文字显得不那么好表达，以下是代码，同时在 article（views/article/article）文件当中也可以看到，我把问题记录在那里了，也记录了解决办法

```
	article 页面组件
		this.state = {
			/*
				注意：article本来是空的，里面的数据是请求后才得到
					也就是说里面的 keywords 数组，其实是请求后才填充进article的数据
			*/
			article: {}		// 此时如果这里不定义一个同名的keywords字段，在render中使用keyword是会直接报错的  false
		}

		/* 你得这么写（解决方法） */
		this.state = {
			article: {
				keywords: []		// 需要在这里定义一个keywords同名字段。不知道是我使用的姿势不对还是react本身的问题。但我确实这么写解决了问题。
			}
		}

	引申出来的一个问题：
		如果在 render 之前就要有数据，也就是先有数据在渲染，那么componentWillMount里面如果有异步请求的话，还是会先执行render方法，由于一开始数据是空的，那么页面上就会先出现空白。不知道有哪位道友有好的解决办法。目前想到的就是先显示一个加载画面什么的，等数据好了之后在setState一下:joy:
```


总之，磕磕绊绊的把结构码出来，对于 `react` 的使用和认识总算不那么生疏了。学海无涯，头发都掉光了。

