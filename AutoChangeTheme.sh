#!/bin/bash

# 设置文件路径和属性名
file_path="/root/Code/blog/themes/cactus/_config.yml"
property_name="colorscheme"
new_value="dark"

# 编辑属性
sed -i "s/\($property_name:\s*\).*/\1$new_value/" $file_path

# 提交到 Git
git add .
git commit -m "auto change theme"
git push 

echo "YAML 文件已更新并提交到 Git。"
