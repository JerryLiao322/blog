// 新建一篇文章（默认是草稿）
// 用法：npm run new -- "文章标题" [链接名]
// 例如：npm run new -- "第一次去纽约" first-trip-to-nyc

import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [title, slugArg] = process.argv.slice(2);

if (!title) {
	console.log('用法：npm run new -- "文章标题" [链接名]');
	console.log('例如：npm run new -- "第一次去纽约" first-trip-to-nyc');
	process.exit(1);
}

const pad = (n) => String(n).padStart(2, '0');
const now = new Date();
const date = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

// 链接名只保留英文字母、数字和连字符；没有给出时用"日期-时分"
const slug =
	(slugArg ?? title)
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '') || `${date}-${pad(now.getHours())}${pad(now.getMinutes())}`;

const dir = join(process.cwd(), 'src', 'content', 'blog');
const file = join(dir, `${slug}.md`);

if (existsSync(file)) {
	console.error(`已经有同名文章了：src/content/blog/${slug}.md，换个链接名吧。`);
	process.exit(1);
}

mkdirSync(dir, { recursive: true });
writeFileSync(
	file,
	`---
title: ${JSON.stringify(title)}
description: ""
pubDate: ${date}
tags: []
draft: true
---

从这里开始写正文。

写完后删掉上面的 draft: true 这一行，文章才会发布到网站上。
`,
);

console.log(`已创建：src/content/blog/${slug}.md`);
console.log(`本地预览：http://localhost:4321/blog/${slug}/（需要先运行 npm run dev）`);
