---
title: 小众Cactus主题优化
description: 小众Cactus主题优化 提速
tags:
  - Cactus
  - Hexo
categories:
  - Hexo
date: 2023-08-08 08:14:59
cover: https://img.laoz.org/38c66a3b99ee5ab4e7d5b8f3d44af77e.webp
---
![Cactus](https://img.laoz.org/38c66a3b99ee5ab4e7d5b8f3d44af77e.webp)

Cactus可能是众多Hexo主题中比较小众且满足我个人审美的主题了，但是也有不少bug，这边记录下怎么优化以及新增一些自己需要的功能。

Cactus github地址：[https://github.com/probberechts/hexo-theme-cactus](https://github.com/probberechts/hexo-theme-cactus)

## 1.主题加速
>
> 主题中大多数使用的css和js都使用jsdelivr或者cf的cdn，但是jsdelivr自从备案掉了之后迅速地被污染了。所以在正常的网络环境下是下载不了这些样式文件的，虽然这些文件打开一次之后会被浏览器缓存下来，但是作为一个速度敏感的程序员👨🏻‍💻来说，受不了自己的博客打开这么慢，把能改进的都改进了。

国内cdn加速有很多，这边给出一个参考 [https://www.bootcdn.cn/index.html](https://www.bootcdn.cn/index.html)。自己选择适合自己的就好。

原始主题文件中的_config.yml中：

```yaml
# loads libraries and styles from CDN instead or relying on local files
cdn:
  enable: true
  jquery: https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
  clipboard: https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.7/clipboard.min.js
  font_awesome: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
  justified_gallery_css: https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.8.1/css/justifiedGallery.min.css
  justified_gallery_js: https://cdnjs.cloudflare.com/ajax/libs/justifiedGallery/3.8.1/js/jquery.justifiedGallery.min.js
```

以jquery为例，打开bootcdn，搜索jquery，选择相同文件名，赋值相应链接即可。

![BvnRuc](https://img.laoz.org/6022f73dc49668754cc5fb9a9cc8ae95.webp)
![60gesu](https://img.laoz.org/352bf9f8d03958eab5da2eb657099174.webp)


修改后主题_config.yml:

```yaml
cdn:
  enable: true
  jquery: https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js
  clipboard: https://cdn.bootcdn.net/ajax/libs/clipboard.js/2.0.11/clipboard.min.js
  font_awesome: https://cdn.bootcdn.net/ajax/libs/font-awesome/6.4.0/css/all.min.css
  justified_gallery_css: https://cdn.bootcdn.net/ajax/libs/justifiedGallery/3.8.1/css/justifiedGallery.min.css
  justified_gallery_js: https://cdn.bootcdn.net/ajax/libs/justifiedGallery/3.8.1/js/jquery.justifiedGallery.min.js
 
```

这样替换之后，网站的加载速度瞬间就上来了，不会一直在pending中请求资源文件。

## 2.主题字体替换
>
> Cactus似乎用的是本地的字体，网站加载的时候会下载整个字体文件，这样也会拖累加载速度，使用webFont可以将字体切分并只下载所需字体文件，所以替换字体也算是加速的一种方式。

个人喜欢霞鹜文楷，就以此字体来替换整体主题字体吧。

霞鹜文楷Github：[https://github.com/lxgw/LxgwWenKai](https://github.com/lxgw/LxgwWenKai)
霞鹜文楷WebFont Github：[https://github.com/chawyehsu/lxgw-wenkai-webfont](https://github.com/chawyehsu/lxgw-wenkai-webfont)

在霞鹜文楷WebFont项目中可以找到国内的cdn加速也是用的bootcdn，可以直接复制项目中的在线样式地址，全局搜索styles.ejs,把地址粘贴到文件末尾即可。

```text
<link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css" />

```

然后再全局搜索定位font-family-body，将值"LXGW WenKai Screen R" 添加到最前面就能把改字体作为第一优先级的字体展示。再刷新一下博客就可以看到字体已经变了。
![](https://img.laoz.org/907e6227ba3dcf48ea6f7c1a7ba9af60.webp)

> ps: 浏览器开发工具发现请求网页的时候会请求两次字体文件，发现主题文件中还是用了另一个字体font-family-mono，这样加载页面的时候，使用这个样式的地方就会就会再请求一遍字体，显然没必要。直接搜索定位使用了该字体的样式文件，删了字体样式就好了。

## 3.Twikoo评论添加
>
> Cactus只有两个评论插件，都是国外的，感觉有点难用，一个是老牌Diaus，一个基于Github。看中Twikoo只有一个，评论消息推送，支持Telegram,Bark等。

参考[Twikoo官网](https://twikoo.js.org/)部署之后，发现不在支持的主题内，但是可以自己修改代码添加。

全局搜索comments.ejs,将代码添加到文件末尾

```ejs
<% if(page.comments && theme.twikoo.enabled){ %>
    <div id="tcomment"></div>
<% } %>
```

全局搜索comments.ejs,将代码添加到文件末尾,替换自己部署的Twikoo评论的地址到envId后。

```ejs
<!-- twikoo Comments -->
<% if (page.comments && theme.twikoo.enabled) {%>
  <script src="https://cdn.bootcdn.net/ajax/libs/twikoo/1.6.16/twikoo.all.min.js"></script>
  <script>
    twikoo.init({
      envId: 'xxxxxxx', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
      el: '#tcomment', // 容器元素
      // region: 'ap-guangzhou', // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      // path: location.pathname, // 用于区分不同文章的自定义 js 路径，如果您的文章路径不是 location.pathname，需传此参数
      // lang: 'zh-CN', // 用于手动设定评论区语言，支持的语言列表 https://github.com/imaegoo/twikoo/blob/main/src/client/utils/i18n/index.js
    })
    </script>
<% } %>
```

最后在主题的配置文件末尾添加代码，来打开Twikoo评论。

```yaml
twikoo:
  enabled: true
```
