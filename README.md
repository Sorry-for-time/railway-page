# 一个简单的仿 12306 首页的静态页面

# IMPORTANT MESSAGE

> 仅作为个人的练习项目, 不对其进行任何负责(包括编写上的缺陷等), 页面样式/布局/LOGO 复用/模仿等仅作为个人练习上的模仿, 不进行任何商业/版权上的使用, 望悉知!!!, 综上, 不对本项目负任何的责任

## 当前版本功能

- 使用 `mockjs` 模拟部分测试数据
- 主页面路由组件的切换的过渡效果(视觉上更加友好)
- 可复用的多彩背景待开发提示页面组件
- 更加视觉友好的错误页提示
- 部分样式优化
- 图片懒加载设置, 路由组件缓存上限设置-

## note:

- **项目持续更新中(未完)...**
- 这个项目要求你必须已经安装好了 nodejs 环境(>=12)
- 且已经安装好了 vue-cli 脚手架工具(>=5.0)
- 在一切无误后边可以进行本地测试和打包部署了

```sh
cd railway-page

# 安装项目依赖
npm install

# 启动开发预览服务器
npm run dev

# 打包构建
npm run build
```

- 此外你也可以修改 `package.json` 文件下的 `scripts` 区域以更改指令

## 基本展示

<div align="center">
<h3>主页</h3>
<img src=".assets/main-page.jpeg" alt="图片貌似没加载出来..." width="80%" />

<h3>图片懒加载配置</h3>
<img src=".assets/loading-hint.png" alt="图片貌似没加载出来..." width="80%" />

<h3>侧边栏效果</h3>
<img src=".assets/right-side-bar.png" alt="图片貌似没加载出来..." width="80%" />

<h3>待开发页面提示</h3>
<img src=".assets/wait-develop-hint.png" alt="图片貌似没加载出来..." width="80%" />

<h3>错误链接处理</h3>
<img src=".assets/not-found-hint.png" alt="图片貌似没加载出来..." width="80%" />
</div>

## src 目录结构

```txt
├───assets              # 静态资源
│   ├───img
│   └───scss            # 默认全局样式
└───components          # 组件文件夹
    ├───announcement    # 底部通知想组件
    ├───carousel        # 轮播图
    ├───contentBody     # 主体部分包裹组件
    ├───helpBar         # 右侧帮助栏
    ├───pageFooter      # 页脚
    ├───pageHeader      # 页首
    ├───railwayLine     # 铁路旅游推荐组件
    ├───serviceBrand    # 服务板块大图推荐
    └───serviceList     # 服务列表展示
```
