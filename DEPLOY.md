# GitHub Pages 部署指南

本文档说明如何将Web3课程营销网站部署到GitHub Pages。

## 前置要求

1. 拥有GitHub账号
2. 已安装Git命令行工具

## 部署步骤

### 1. 在GitHub创建新仓库

1. 登录GitHub,点击右上角的"+"号,选择"New repository"
2. 填写仓库信息:
   - Repository name: `web3-course-landing` (或其他名称)
   - Description: Web3全岗位求职实战课营销网站
   - 选择 Public (公开仓库才能使用免费的GitHub Pages)
   - **不要**勾选"Add a README file"
3. 点击"Create repository"

### 2. 推送代码到GitHub

在项目目录中执行以下命令:

```bash
cd /home/ubuntu/web3-course-landing

# 初始化Git仓库(如果还没有初始化)
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: Web3 course landing page"

# 添加远程仓库(替换YOUR_USERNAME为你的GitHub用户名)
git remote add origin https://github.com/YOUR_USERNAME/web3-course-landing.git

# 推送到main分支
git branch -M main
git push -u origin main
```

### 3. 配置GitHub Pages

1. 在GitHub仓库页面,点击"Settings"
2. 在左侧菜单中找到"Pages"
3. 在"Build and deployment"部分:
   - Source: 选择"GitHub Actions"
4. 保存设置

### 4. 等待自动部署

推送代码后,GitHub Actions会自动运行部署流程:

1. 在仓库页面点击"Actions"标签
2. 查看"Deploy to GitHub Pages"工作流的运行状态
3. 等待部署完成(通常需要2-3分钟)

### 5. 访问网站

部署成功后,你的网站将可以通过以下地址访问:

```
https://YOUR_USERNAME.github.io/web3-course-landing/
```

## 自定义域名(可选)

如果你想使用自己的域名:

1. 在域名服务商处添加CNAME记录,指向 `YOUR_USERNAME.github.io`
2. 在GitHub仓库的Settings > Pages中,填写你的自定义域名
3. 等待DNS生效(可能需要几分钟到几小时)

## 更新网站

每次修改代码后,只需执行:

```bash
git add .
git commit -m "描述你的修改"
git push
```

GitHub Actions会自动重新部署网站。

## 故障排查

### 部署失败

1. 检查GitHub Actions的日志,查看具体错误信息
2. 确保所有依赖都已正确安装
3. 确保构建命令能在本地成功运行

### 页面显示404

1. 确认GitHub Pages已启用
2. 检查仓库是否为Public
3. 等待几分钟让DNS生效

### 图片或资源加载失败

1. 本项目已使用CDN链接存储所有图片,不会出现此问题
2. 如果添加了新的本地图片,请使用`manus-upload-file`上传到CDN

## 注意事项

- 所有图片资源已上传到CDN,不会占用GitHub仓库空间
- GitHub Pages对免费用户有带宽限制,但对于营销网站来说通常足够
- 如果需要更高的性能和可靠性,可以考虑使用Vercel、Netlify等专业托管服务

## 技术支持

如有问题,请联系:
- 微信: door7881
- Telegram: @wealth7881
