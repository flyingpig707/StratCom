# EdgeOne Makers 部署

《AI战略传播力》阅读站使用 GitHub 保存唯一正式书稿，由 VitePress 生成静态网页，并由 EdgeOne Makers 自动构建发布。

## 固定配置

仓库根目录的 `edgeone.json` 已记录构建参数：

| 项目 | 配置 |
| --- | --- |
| 仓库 | `flyingpig707/StratCom` |
| 生产分支 | `main` |
| 根目录 | `./` |
| Node.js | `22.17.1` |
| 安装命令 | `pnpm install --frozen-lockfile` |
| 构建命令 | `pnpm run docs:build` |
| 输出目录 | `book/.vitepress/dist` |
| 正式域名 | `stratcom.learn-together.cn` |

## 首次创建项目

1. 在 EdgeOne Makers 控制台选择“导入 Git 仓库”。
2. 连接 GitHub，并授权读取 `flyingpig707/StratCom`。
3. 选择 `main` 为生产分支，项目名使用 `stratcom`。
4. 确认控制台读取到 `edgeone.json` 中的构建配置。
5. 选择适合读者的加速区域并开始部署。
6. 使用系统提供的预览地址检查首页、正文、全文搜索、图片和附录表格。

## 绑定正式域名

1. 在项目的“域名管理”中添加 `stratcom.learn-together.cn`。
2. 将域名关联到 Production 环境。
3. 按控制台提示在域名 DNS 服务商处添加验证或 CNAME 记录。
4. 等待域名验证和 HTTPS 证书生效。
5. 如果加速区域包含中国大陆，先确认该域名已完成所需备案。

## 发布规则

- 推送或合并到 `main`：自动构建并更新正式环境；
- 推送到其他分支：进入 Preview 环境，用于合并前检查；
- 正式发布前至少检查首页、一个正文页面、附录长表格和移动端导航；
- 构建失败时先检查锁文件、Node 版本、构建日志和输出目录，不直接改线上产物。

本地执行与云端一致的校验：

```bash
pnpm install --frozen-lockfile
pnpm run content:check
pnpm run contributions:check
pnpm run docs:build
```

生成目录 `book/.vitepress/dist/` 仅是构建产物，不提交到 Git。

`pnpm-workspace.yaml` 只允许 VitePress 构建链中的 `esbuild` 执行安装脚本；不要改成允许全部依赖脚本。
