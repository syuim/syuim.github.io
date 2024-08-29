---
title : 'Ubuntu配置oh-My-Zsh'
date : 2023-05-02T16:28:22+08:00
draft : false
tags : ['Linux','Oh-my-zsh']
series : ['Linux']
featured : true
author: 苏御
---
<!-- ![oh-my-zsh](https://img.laoz.org/i/2024/65b36e375f8c6.webp) -->

## 1.安装zsh

```bash
sudo apt-get install zsh -y
```

## 2.安装oh-my-zsh

官网[[Oh My Zsh - a delightful & open source framework for Zsh](https://ohmyz.sh/)]

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

or

```bash
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

## 3.命令提示插件

安装

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

修改zsh配置文件，添加插件

```bash
nano ~/.zshrc
```

添加插件

```bash
plugins=(git zsh-autosuggestions)  # 搜索plugins 在git后面 空格加插件名称
```

生效插件

```bash
source ~/.zshrc
```