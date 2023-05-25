---
title: Ubuntu配置oh-My-Zsh
date: 2023-05-02 16:28:39
cover: https://cdn.oldchow.cn/js0T69.png
tags: 
- Linux
- Ubuntu
- Zsh
categories: 
- Linux
description: 记录下如何快速打造下ubuntu的舒服的命令界面。
---

## #1.安装zsh

```bash
sudo apt-get install zsh
```

## #2.安装oh-my-zsh

官网[[Oh My Zsh - a delightful & open source framework for Zsh](https://ohmyz.sh/)]

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

or

```bash
sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

## #3.命令提示插件

安装

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

修改zsh配置文件，添加插件

```bash
vi ~/.zshrc
```

添加插件

```bash
plugins=(git zsh-autosuggestions)  # 搜索plugins 在git后面 空格加插件名称
```

生效插件

```bash
source ~/.zshrc
```
