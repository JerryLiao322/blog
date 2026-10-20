---
title: 写作指南：怎么在这个博客写文章
description: 给自己看的速查表：新建文章、常用格式、插入图片、发布。
pubDate: 2026-10-20
tags: [写作, 教程]
draft: true
---

> 这是一篇**草稿**，只在本地预览（`npm run dev`）时能看到，不会出现在正式网站上。可以留着当速查表，也可以直接删掉。

## 新建一篇文章

在终端里运行：

```bash
npm run new -- "文章标题" article-link
```

最后的 `article-link` 是文章的链接名，会出现在网址里：`https://jerryliao.vip/blog/article-link/`。只能用英文字母、数字和连字符；不写的话会自动用日期代替。

生成的文件在 `src/content/blog/` 里，文件开头两条 `---` 之间的部分是文章信息：

```yaml
---
title: "文章标题" # 标题
description: "一句话简介" # 显示在文章列表里
pubDate: 2026-10-20 # 发布日期
tags: [生活, 读书] # 标签，可以写多个
draft: true # 草稿：删掉这一行（或改成 false）才会发布
---
```

## 常用格式

### 文字

**粗体**、*斜体*、~~删除线~~、`行内代码`，还有[链接](https://astro.build/)。中文和 English 混排时，新版浏览器会自动在中间留出一点空隙。

### 列表

- 无序列表
- 第二项
  - 可以缩进

1. 有序列表
2. 第二步

- [x] 已经完成的事
- [ ] 还没做的事

### 引用

> 写作是思考的延伸。把想法写下来，才发现哪里还没想清楚。

### 表格

| 格式 | 写法 | 效果 |
| --- | --- | --- |
| 粗体 | `**文字**` | **文字** |
| 斜体 | `*文字*` | *文字* |
| 链接 | `[文字](网址)` | [文字](https://jerryliao.vip/) |

### 代码

```python
def greet(name: str) -> str:
    return f"你好，{name}！"

print(greet("世界"))
```

```js
const posts = await getPosts();
console.log(`一共有 ${posts.length} 篇文章`);
```

## 插入图片

把图片放进 `src/content/blog/images/` 文件夹，然后这样引用：

```md
![图片说明](./images/sample.svg)
```

![示例插图：远山和夕阳](./images/sample.svg)

照片（jpg、png）会在发布时自动压缩，不用担心体积。

## 分割线和脚注

换话题时可以用一条分割线：

---

这句话带了一个脚注[^1]。

[^1]: 脚注会统一显示在文章最下面。

## 发布

写完后删掉 `draft: true` 这一行，再把改动提交到 GitHub（步骤见 README），网站会在一两分钟内自动更新。
