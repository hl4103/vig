# vig [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> a new web framework, inspired by sailsjs

## Installation

```sh
$ npm install --save vig
```

## Usage

```js
var vig = require('vig');

```
## License

Apache-2.0 © [calidion]()


[npm-image]: https://badge.fury.io/js/vig.svg
[npm-url]: https://npmjs.org/package/vig
[travis-image]: https://travis-ci.org/calidion/vig.svg?branch=master
[travis-url]: https://travis-ci.org/calidion/vig
[daviddm-image]: https://david-dm.org/calidion/vig.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/calidion/vig
[coveralls-image]: https://coveralls.io/repos/calidion/vig/badge.svg
[coveralls-url]: https://coveralls.io/r/calidion/vig


# 说明
目前的底层web框架相对较多，有express, koa, restify, loopback等。
但是上层的框架相对较少。
并且都是基于MVC理论的。
而MVC理论并不是一个精细的理论。
所以我们在这里会将MVC精细化，整理出一个更加符合Web的框架理论或者原型。

# Web基本的业务模型内容

对于现在常见的Web模型，他通常包括如下的内容：

1. 请求与返回（Request & Response）

2. 前端与后端（Frontend & Backend）

3. 数据库抽象与业务逻辑的连接（Database Design & Business Logic analystics）

4. 安全策略与权限管理（Security & Privileges）

5. 共享用户与单点登录（User Sharing & Autchenication)

6. 配置动态化与自动化( Configuration & Automation）

7. 标准化接口（API Standardization）

8. 模块化与独立化，可分布式化（Modulization，Indepency， Distribution）

9. 错误返回（Error Response)

10. 文件上传与云传输（Cloud File Distribution）

11. 数据输入的过滤与校验(Input Data Filtering and Validation)

12. 将控制器、模型、业务、库、路由更方便的进行标准化。

所以我们在设计这个框架时，将会着重关注以上的几点。  
并努力的将这些核心内容接口化，标准化，从而方便迁移与升级。

# vig框架的原型
vig 框架的原型已经在forim框架有所体现。  
但是vig未来会加强forim里的原型代码的模块化并且会适时的更新到forim上去验证。  
forim项目地址：  
https://github.com/calidion/forim/  
原型代码地址：  
https://github.com/calidion/forim/tree/master/lib/v2  

# vig的现有组成

## 基础web框架

目前会以express的接口为标准，未来如果有可能会进行标准化。
所以测试框架会优先选择express,
由于vig的目标是基础框架无关的关注Web业务逻辑的框架，
所以只要是基于express接口标准的框架都可以轻松的与vig配合使用。

express项目地址：
http://expressjs.com/

## ORM模型

ORM模型
优先选择waterline  
项目地址：  
https://github.com/balderdashy/waterline

## 错误标准

会使用errorable的错误规范  
项目地址：  
https://github.com/calidion/errorable  

## api标准

目前称为egg api，不会考虑restful api，
因为vig是偏向Web业务的框架，所以使用偏向于业务的egg api，而不是偏向资源的RESTful API。
未来egg api会修改为 vig api
项目地址：
https://github.com/calidion/egg

## 云存储

采用file cloud uploader
项目地址：
https://github.com/calidion/file-cloud-uploader

## 数据校验

可以一次性方便的对输入数据进行检验。

采用集成node-form-validator的方式进行

https://github.com/calidion/node-form-validator

## 参考框架

sailsjs

项目地址：
http://sailsjs.org/

# 为什么要使用vig，而不直接使用sailsjs
sailsjs是一个很前卫的框架，但是sailsjs的集成度过高，不利用于Web业务的拆分。
同时因为nodejs本身的积累相对比较少，模块的成熟度并不高，因些有时候模块的可替换能力是非常重要的。
所以vig会尽量优先考虑降低耦合性，目标将几大模块的接口进行标准化。
目前我们在使用sailjs的时候已经发现了很多因为集成度过度导致的问题，所以解耦合是这个框架的主要目标之一。
而vig项目的原因就是我们使用了sails框架，会受到sailsjs的束缚。

# 目标
vig 框架是一个致力于标准化Web接口，解耦合模块的框架。
让他即能够在小企业里方便的使用，也能在大企业里自如的开发。
如果你也喜欢这些理念，并且也发现了现在所使用的框架的问题，欢迎加入一起开发。

# 预期什么时候能完成？

vig将会保持持续不断的的完善。由于vig是会立刻应该到线上的。所以它会不断的完善，但是现在暂时不会有完整的RoadMap。
它会跟根据我的实际需求不断的完善。

# 未来可以看到的基于vig的项目
forim

# 项目地址
https://github.com/calidion/vig
