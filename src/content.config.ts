import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// 读取 src/content/blog/ 下所有的 Markdown（.md）和 MDX（.mdx）文件
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// 每篇文章开头 --- 之间可以写的字段
	schema: ({ image }) =>
		z.object({
			/** 标题（必填） */
			title: z.string(),
			/** 一句话简介，显示在文章列表和分享卡片里 */
			description: z.string().default(''),
			/** 发布日期，例如 2026-10-20（必填） */
			pubDate: z.coerce.date(),
			/** 最后更新日期（可选） */
			updatedDate: z.coerce.date().optional(),
			/** 标签，例如 [生活, 读书] */
			tags: z.array(z.string()).default([]),
			/** 设为 true 时只在本地预览中出现，不会发布到网站上 */
			draft: z.boolean().default(false),
			/** 封面图（可选），例如 ./images/cover.jpg */
			cover: image().optional(),
		}),
});

export const collections = { blog };
