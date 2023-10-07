---
title: Debian如何关闭ipv6
description: Debian如何关闭ipv6
tags:
  - Debian
  - IPV6
categories:
  - Linux
date: 2023-10-07 16:36:06
cover: https://img.laoz.org/925ab92a97e746fe59c73671eab25b52.webp
---
![debian](https://img.laoz.org/925ab92a97e746fe59c73671eab25b52.webp)

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
