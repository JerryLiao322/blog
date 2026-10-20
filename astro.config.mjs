// @ts-check

import { satteri } from '@astrojs/markdown-satteri';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 网站的正式地址：用于生成 RSS、站点地图和分享链接
	site: 'https://jerryliao.vip',
	integrations: [mdx(), sitemap()],
	markdown: {
		processor: satteri({
			features: {
				// 脚注区的标题和"返回"链接用中文
				gfm: { footnotes: { label: '脚注', backLabel: '返回正文 {reference}' } },
			},
		}),
		shikiConfig: {
			// 代码高亮配色：浅色 / 深色模式各一套
			themes: {
				light: 'github-light',
				dark: 'github-dark-dimmed',
			},
		},
	},
});
