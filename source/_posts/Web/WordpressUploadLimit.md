---
title: Docker下WorldPress去除上传限制
date: 2023-08-02 16:28:39
cover: https://img.laoz.org/i/2023/11/13/tz0tm3-0.webp
tags: 
- WordPress
categories: 
- WP
description: Docker下WorldPress去除上传限制
---
![Title](https://img.laoz.org/i/2023/11/13/tz0tm3-0.webp)
我这边用的是Docker部署的WordPress，但是wp默认的上传限制在3m之内，这样上传个稍微大点的主题直接就嘎了。
<!-- more -->

如何解决：

Docker 部署的时候可以使用文件映射的方式，将容器内的文件映射到本地。wp控制文件上传大小的文件是一个php的配置文件，映射这个文件到本地然后修改就行，或者你本地直接创建完，然后映射到容器内部。

初始docker-compose 命令

```yaml
version: '3.1'

services:

  wordpress:
    image: wordpress
    restart: always
    ports:
      - 80:80
    environment:
      WORDPRESS_DB_HOST: xxxx:3306
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PASSWORD: xxx
      WORDPRESS_DB_NAME: wp
    volumes:
      - /root/env/wp:/var/www/html

```

本地新增up.ini文件

``` ini
file_uploads = On 
upload_max_filesize = 300M  
post_max_size = 350M 
max_execution_time = 1800 
```

增加配置后端的映射文件

```yaml
version: '3.1'

services:

  wordpress:
    image: wordpress
    restart: always
    ports:
      - 80:80
    environment:
      WORDPRESS_DB_HOST: xxxx:3306
      WORDPRESS_DB_USER: root
      WORDPRESS_DB_PASSWORD: xxx
      WORDPRESS_DB_NAME: wp
    volumes:
      - /root/env/wp:/var/www/html
      - /root/env/wp/up.ini:/usr/local/etc/php/php.ini  # 新增这一行 将本地配置文件映射到容器内
```

保存后重启就能看到上传限制变成了上面的300M. Enjoy!