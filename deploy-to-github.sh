#!/bin/bash

echo "=========================================="
echo "GitHub Pages 部署脚本"
echo "=========================================="
echo ""

# 检查是否已配置Git用户信息
if [ -z "$(git config user.name)" ]; then
    echo "请先配置Git用户信息:"
    echo "git config --global user.name \"Your Name\""
    echo "git config --global user.email \"your.email@example.com\""
    exit 1
fi

# 提示用户输入GitHub仓库地址
echo "请输入你的GitHub仓库地址 (例如: https://github.com/username/web3-course-landing.git):"
read REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "错误: 仓库地址不能为空"
    exit 1
fi

echo ""
echo "正在配置远程仓库..."
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"

echo "正在推送代码到GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "=========================================="
    echo "✅ 代码推送成功!"
    echo "=========================================="
    echo ""
    echo "接下来的步骤:"
    echo "1. 访问你的GitHub仓库"
    echo "2. 点击 Settings > Pages"
    echo "3. 在 Build and deployment 中选择 'GitHub Actions'"
    echo "4. 等待自动部署完成(约2-3分钟)"
    echo "5. 访问你的网站: https://YOUR_USERNAME.github.io/REPO_NAME/"
    echo ""
else
    echo ""
    echo "❌ 推送失败,请检查:"
    echo "1. GitHub仓库地址是否正确"
    echo "2. 是否有推送权限"
    echo "3. 网络连接是否正常"
    echo ""
fi
