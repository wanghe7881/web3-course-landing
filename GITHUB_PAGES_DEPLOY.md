# 部署到 GitHub Pages 指南

本文档将指导您如何将 Web3 课程网站部署到 GitHub Pages。

## 方式一:通过 Manus 管理界面导出到 GitHub(推荐)

这是最简单的方式,无需手动操作 Git 命令。

### 步骤:

1. **打开 Manus 管理界面**
   - 点击聊天界面右上角的"管理"图标
   - 或点击项目卡片上的"查看"按钮

2. **进入 Settings → GitHub**
   - 在左侧导航栏找到"Settings"
   - 点击"GitHub"子菜单

3. **导出到 GitHub**
   - 选择要导出到的 GitHub 账号(Owner)
   - 输入仓库名称,例如:`web3-course-landing`
   - 点击"Export"按钮
   - 等待导出完成(通常需要 1-2 分钟)

4. **配置 GitHub Pages**
   - 导出完成后,访问您的 GitHub 仓库
   - 进入仓库的 Settings → Pages
   - 在"Source"下选择"GitHub Actions"
   - 保存设置

5. **等待自动部署**
   - GitHub Actions 会自动触发部署流程
   - 在仓库的"Actions"标签页可以查看部署进度
   - 部署成功后,网站地址会显示在 Pages 设置页面

6. **访问您的网站**
   - 默认地址格式:`https://[username].github.io/[repo-name]/`
   - 例如:`https://yourusername.github.io/web3-course-landing/`

---

## 方式二:手动使用 Git 命令行

如果您熟悉 Git 操作,可以使用命令行手动部署。

### 前置要求:

- 已安装 Git
- 已配置 GitHub 账号和 SSH 密钥
- 已在 GitHub 创建一个空仓库

### 步骤:

1. **初始化 Git 仓库并提交代码**

```bash
cd /home/ubuntu/web3-course-landing

# 初始化 Git(如果还没有)
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Web3 course landing page"
```

2. **关联远程仓库**

```bash
# 替换为您的 GitHub 仓库地址
git remote add origin git@github.com:yourusername/web3-course-landing.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

3. **配置 GitHub Pages**

- 访问仓库的 Settings → Pages
- 在"Source"下选择"GitHub Actions"
- 保存设置

4. **触发部署**

- 推送代码后,GitHub Actions 会自动运行
- 在"Actions"标签页查看部署状态
- 部署成功后即可访问网站

---

## 自定义域名(可选)

如果您有自己的域名,可以配置自定义域名:

1. **在 DNS 提供商处添加记录**

   - 添加 CNAME 记录:
     - 主机记录:`www`(或其他子域名)
     - 记录值:`[username].github.io`

2. **在 GitHub Pages 设置中配置**

   - 进入仓库的 Settings → Pages
   - 在"Custom domain"输入您的域名
   - 勾选"Enforce HTTPS"
   - 保存设置

3. **添加 CNAME 文件**

   在项目的 `client/public/` 目录下创建 `CNAME` 文件:

   ```
   www.yourdomain.com
   ```

   然后重新构建并推送代码。

---

## 故障排查

### 问题 1: 部署后页面显示 404

**原因**: Base 路径配置不正确

**解决方案**:

- 如果部署到 `https://username.github.io/repo-name/`,需要修改 `vite.config.ts`:
  ```typescript
  base: "/repo-name/",
  ```
- 如果部署到根域名或自定义域名,保持:
  ```typescript
  base: "/",
  ```

### 问题 2: CSS 样式丢失

**原因**: 资源路径错误

**解决方案**: 检查 `vite.config.ts` 中的 `base` 配置是否正确

### 问题 3: GitHub Actions 构建失败

**原因**: 依赖安装或构建错误

**解决方案**:

1. 查看 Actions 日志中的具体错误信息
2. 确保本地 `pnpm run build` 可以成功执行
3. 检查 `.github/workflows/deploy.yml` 配置是否正确

---

## 更新网站

每次修改代码后,只需推送到 GitHub:

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions 会自动重新构建和部署。

---

## 技术细节

- **构建工具**: Vite 7
- **框架**: React 19
- **样式**: Tailwind CSS 4
- **部署方式**: GitHub Actions + GitHub Pages
- **构建产物**: 静态 HTML/CSS/JS 文件

---

## 需要帮助?

如果遇到问题,可以:

1. 查看 GitHub Actions 的构建日志
2. 检查 GitHub Pages 的设置
3. 参考 [GitHub Pages 官方文档](https://docs.github.com/en/pages)
