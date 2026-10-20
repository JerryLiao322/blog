import { type CollectionEntry, getCollection } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** 全部文章，从新到旧排列。正式发布时不含草稿（draft: true），本地预览时含草稿。 */
export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort(
		(a, b) =>
			b.data.pubDate.valueOf() - a.data.pubDate.valueOf() ||
			a.data.title.localeCompare(b.data.title, 'zh-CN'),
	);
}

/** 按年份分组（保持原有顺序） */
export function groupByYear(posts: Post[]): [number, Post[]][] {
	const years = new Map<number, Post[]>();
	for (const post of posts) {
		const year = post.data.pubDate.getUTCFullYear();
		years.set(year, [...(years.get(year) ?? []), post]);
	}
	return [...years];
}

/** 按标签分组，文章多的标签排前面 */
export function groupByTag(posts: Post[]): [string, Post[]][] {
	const tags = new Map<string, Post[]>();
	for (const post of posts) {
		for (const tag of post.data.tags) {
			tags.set(tag, [...(tags.get(tag) ?? []), post]);
		}
	}
	return [...tags].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0], 'zh-CN'));
}

const CJK = /[㐀-䶿一-鿿豈-﫿]/g;

/** 字数和预计阅读时间：中文每分钟约 400 字，英文每分钟约 200 词 */
export function readingStats(markdown = '') {
	const text = markdown
		.replace(/```[\s\S]*?```/g, '') // 代码块不计入
		.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1'); // 链接只算文字部分
	const chars = text.match(CJK)?.length ?? 0;
	const words = text.replace(CJK, ' ').match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g)?.length ?? 0;
	return {
		words: chars + words,
		minutes: Math.max(1, Math.round(chars / 400 + words / 200)),
	};
}
