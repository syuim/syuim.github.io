---
title : '利用Air780e制作短信转发神器'
date : 2024-10-02T16:28:22+08:00
draft : false
tags : ['折腾','air780e']
series : ['Geek']
featured : true
author: 苏御
---


此教程只针对拿板子做短信转发器用，其他高阶操作（定位、联网、语音）需要自由拓展发挥。

##### 官网资料

Air780E : [https://doc.openluat.com/wiki/37?wiki_page_id=4454](https://doc.openluat.com/wiki/37?wiki_page_id=4454)

Air700E : [https://doc.openluat.com/wiki/44?wiki_page_id=4730](https://doc.openluat.com/wiki/44?wiki_page_id=4730)

![d](https://pic.syu.im/923888224255bc7c8a529031666bf41a.webp)

# 刷机前的准备

##### 下载Lua固件烧录工具Luatools_v2.7z


下载地址：[https://luatos.com/luatools/download/last](https://luatos.com/luatools/download/last)

大概看一下这个工具的安装使用教程[https://doc.openluat.com/wiki/37?wiki_page_id=4489](https://doc.openluat.com/wiki/37?wiki_page_id=4489)

##### 下载EC618芯片的固件

这一步也可以省略，第三步的脚本里面包含最新固件

直接下载合宙编译发布的正式版内核固件：打开[https://gitee.com/openLuat/LuatOS/releases](https://gitee.com/openLuat/LuatOS/releases) 后，搜索LuatOS-SoC#EC618下载需要的版本；

截至2023.3.15固件最新版本**LuatOS-SoC#EC618 V1105** [**https://gitee.com/openLuat/LuatOS/releases/download/v0007.ec618.v1105/core_V1105.zip**](https://gitee.com/openLuat/LuatOS/releases/download/v0007.ec618.v1105/core_V1105.zip)

（#是替换符，替换@，便于阅读）

##### 下载软件脚本

[https://github.com/lageev/air780e-forwarder](https://github.com/lageev/air780e-forwarder)

一般直接压缩压缩包就可以，如果你想后续跟着这个仓库更新，可以用git克隆到本地。

这个github仓库里有两个文件夹，core里面放的是固件，script里面放的是脚本。

![image.png](https://pic.syu.im/91e3724eef154c4f53aa26f939ff61cb.webp)

soc后缀的是固件，lua后缀的是脚本。

选择固件的时候，任选一个，固件的文件名写了固件不同的功能和版本，有的是基础固件，有的是带TTS的，RNDIS是带网卡能力的，一般选FULL（全都有）就可以了。

选择脚本的时候，需要全选。

这里说的「选」，是指第二步，烧录的时候选择「文件」，这里先不管。

脚本在烧录之前需要手动改一下config.lua 文件的代码，填写你自己的token或者webhook地址

![image.png](https://pic.syu.im/1d1dd36eb429efad7ed2b2411dff17d1.webp)

如上图，需要先填写「NOTIFY_TYPE」字段，这里支持多选，支持上面注释的例子里面的渠道。

比如你想同时推送到bark和钉钉,第四行代码就是NOTIFY_TYPE={"bark","dingtalk"}，以此类推，只有一个推送渠道的时候，大括号可以省略。

改写完「NOTIFY_TYPE」字段，还需要改下面的webhook地址，需要你去对应的软件获取，具体方法自己解决，代码里已经给了相关的文档地址。

这里举个bark的例子，如果你的iOS设备上安装了bark，

打开首页会有很多网址

比如 [https://api.day.app/xxxxxxxxxx](https://api.day.app/xxxxxxxxxx)

xxxxxxx所代表的就是bark的key，只需要把这个key复制到config.lua 中 BARK_KEY中即可，API字段不用变（如果你没有自己部署Bark的话）。

在config.lua 代码中填写完你自己的配置，保存之后，其他的就不要动了。

# 烧录固件和脚本

这里的烧录固件就相当于刷机，刷ROM，脚本就相当于安装App。

由于开发板自身没有用户界面，所以所有的安装操作都是通过烧录完成的。需要用USB-C数据线将电脑和开发板连接，剩下的所有操作都在LuaTool里面。

首先将开发板连接电脑，先不要开机。

按照下图步骤操作

1. 勾选「4G模块USB打印」
2. 选择右上方「项目管理按钮」
3. 创建项目，项目名随意，主要是区分每次刷的脚本和固件
4. 选择电脑中已经下载好的固件
5. 选择电脑中已经下载好的脚本
6. 点击「下载底层和脚本」

![image.png](https://pic.syu.im/59df9fcdec7826bdc5cb2eeaa82ca789.webp)

![](https://pic.syu.im/830bc88e7e282a155da8be5a3f7e9fc3.webp)

点击「下载底层和脚本」之后，软件会有文字提示，「正在准备xxx」「正在下载xxx」

这时候，同时按住电源键和BOOT键，软件有反应了再松手（提示「发现下载端口」），这时候固件和脚本会自动刷入，知道提示下载完成。

提示：700E和780E的按键一样，可以参考文章开头的大图，从左往右依次是「电源键」「重置键」「BOOT键」

这时，烧录操作全部完成，可以开机使用了。

这里多说一句，如果以后你想刷别的脚本，就直接新建项目选择背的脚本就行了，然后刷的时候点击「下载脚本」就行了，固件不用选，因为你只是更换脚本。

# 使用

日常使用插卡，接上电源即可（普通的USB-C接5V USB即可）。需要看日志可以连接电脑，使用Luatools查看。记得打开上面说的「4G模块USB打印」。

现在Air700E官网仅售9.9，780E仅售39。

700仅支持移动卡，780E支持移动＋联通。
