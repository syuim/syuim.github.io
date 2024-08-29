---
title : 'Debian如何关闭ipv6'
date : 2023-10-07T16:36:22+08:00
draft : false
tags : ['Linux','Debian','IPV6']
series : ['Linux']
featured : true
author: 苏御
---
<!-- ![debian](https://img.laoz.org/i/2024/65b36e361d27c.webp) -->
> update20221204:
>
> 在需要ipv6的时候可以设置ipv4优先：
>
> sed -i 's/#precedence ::ffff:0:0\/96  100/precedence ::ffff:0:0\/96  100/' /etc/gai.conf
>
> ref:[Link](https://u.sb/debian-prefer-ipv4/)

## 1. 打开sysctl配置文件

 ```shell
 sudo nano /etc/sysctl.conf
 ```

## 2. 在文件的末尾添加以下行

```shell
# 禁用IPv6
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
```

## 3. 保存并关闭文件

## 4. 应用配置更改

 ```shell
 sudo sysctl -p
 ```

## 5. 确认IPv6是否已禁用

```shell
ip a
```

看不到以`inet6`开头的IPv6地址就代表成功了。

