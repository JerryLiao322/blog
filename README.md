# Jerry Liao 的博客

网址：<https://jerryliao.vip>

用 [Astro](https://astro.build/) 搭建的个人博客，托管在 GitHub Pages 上。每次把改动推送到 GitHub，网站会在一两分钟内自动更新。

## 最省事的写法：直接在 GitHub 网页上写

1. 在 GitHub 上打开这个仓库的 `src/content/blog/` 文件夹
2. 点 **Add file → Create new file**
3. 文件名写成 `链接名.md`，例如 `my-trip.md`（只用英文字母、数字和连字符，它会出现在网址里）
4. 按下面的格式写，写完点 **Commit changes**
5. 等一两分钟，打开 <https://jerryliao.vip> 就能看到

```md
---
title: 文章标题
description: 一句话简介
pubDate: 2026-10-20
tags: [生活]
---

正文从这里开始……
```

## 在电脑上写（可以先预览）

需要先安装 Node.js 22 或更新的版本。

```bash
npm install                          # 第一次使用时安装依赖
npm run dev                          # 本地预览，打开 http://localhost:4321
npm run new -- "文章标题" my-post     # 新建一篇草稿
```

写完后提交并推送，网站会自动更新：

```bash
git add .
git commit -m "新文章：文章标题"
git push
```

### 文章开头的字段

| 字段 | 说明 |
| --- | --- |
| `title` | 标题（必填） |
| `description` | 一句话简介，显示在文章列表和分享卡片里 |
| `pubDate` | 发布日期，例如 `2026-10-20`（必填） |
| `updatedDate` | 更新日期（可选） |
| `tags` | 标签，例如 `[生活, 读书]` |
| `draft` | 设为 `true` 时只在本地预览中出现，不会发布 |
| `cover` | 封面图，例如 `./images/cover.jpg`（可选） |

图片放在 `src/content/blog/images/`，在文章里用 `![说明](./images/图片名.jpg)` 引用，发布时会自动压缩。

更完整的格式示例在草稿 `src/content/blog/writing-guide.md` 里（运行 `npm run dev` 后可以在本地网站上看到，不会发布）。

## 修改个人信息和样式

- 网站名、首页介绍、导航、社交链接：`src/consts.ts`
- "关于"页面：`src/pages/about.md`
- 颜色和字体：`src/styles/global.css` 最上面的变量
- 网站图标：`public/favicon.svg`

## 目录结构

```text
src/
├── content/blog/   文章（Markdown）
├── pages/          页面：首页、文章、标签、关于、404、RSS
├── layouts/        页面框架
├── components/     页眉、页脚、文章列表、目录等
├── styles/         全站样式
└── consts.ts       网站基本信息
```

## 部署

- 代码仓库：<https://github.com/JerryLiao322/blog>
- `.github/workflows/deploy.yml`：推送到 `main` 分支后自动构建，并发布到 GitHub Pages
- 域名 `jerryliao.vip` 在 Porkbun 注册，DNS 指向 GitHub Pages
- 域名到期日是 **2027-04-21**，记得在 Porkbun 续费
