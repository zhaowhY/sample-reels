# 作品集-demo

## Demos
- [3D-旋转动画](https://kongkong99.github.io/sample-reels/#/3d-rotate) 代码路径: src/views/3D-rotateDemo
- [3D-球体词云](https://kongkong99.github.io/sample-reels/#/3d-wordCloud) 代码路径: src/views/3D-wordCloud
- [地理坐标在线转化工具](https://kongkong99.github.io/coordinate)
- [网站grayscale](https://kongkong99.github.io/sample-reels/#/grayscale) 代码路径: src/views/grayscale

### 特殊demo注释
- grayscale
> 可以通过参数不设置，具体参数查看源码函数，设置对应参数值，函数所在文件src/views/grayscale/grayscale.js。 IE10+做蒙版处理。

### 项目脚手架

- npm包地址: [jdc-webcli](https://www.npmjs.com/package/jdc-webcli)

### build step

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start
```

### 目录结构
  ```bash
  - public
    - favicon.ico
    - index.html  # 入口html
  - src   # 业务代码
    - assets  # 图片，字体等资源
    - api # 接口交互模块
    - components  # 公共组件
    - filters   # 过滤器
    - directives  # 指令集合
    - router   # vue router
    - store   # vuex
    - views   # 视图组件

    - App.vue
    - main.js   # 入口js
    - main.styl # 全局样式
  - .env.[mode] # 环境变量
  - .gitlab-ci.yml # cicd 配置文件
  - README.MD
  ```


