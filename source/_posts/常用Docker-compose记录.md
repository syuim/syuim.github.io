---
title: 常用Docker-compose记录
date: 2023-05-11 14:18:31
description:
tags:
categories:
cover: https://s2.loli.net/2023/05/11/XBaie8yEYqchxPS.png
---

## #1、nginx_proxy_manager

```yaml
version: '3'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80'  # 冒号左边可以改成自己服务器未被占用的端口
      - '81:81'  # 冒号左边可以改成自己服务器未被占用的端口
      - '443:443' # 冒号左边可以改成自己服务器未被占用的端口
    volumes:
      - /root/env/npm/data:/data # 冒号左边可以改路径，现在是表示把数据存放在在当前文件夹下的 data 文件夹中
      - /root/env/npm/cert:/etc/letsencrypt  # 冒号左边可以改路径，现在是表示把数据存放在在当前文件夹下的 letsencrypt 文件夹中
```

Ps:反代示例

``` txt
location /xxxxx {                
          proxy_redirect off;
          proxy_pass xxxx;    
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection "upgrade";
          proxy_set_header Host $http_host;
          proxy_read_timeout 300s;
          # Show realip in v2ray access.log
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
```
