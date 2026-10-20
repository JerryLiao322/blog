// 全站基本信息：改名字、简介、导航都在这里。

export const SITE = {
	/** 网站名称：显示在左上角和浏览器标签页 */
	title: 'Jerry Liao',
	/** 作者名：显示在页脚和 RSS 里 */
	author: 'Jerry Liao',
	/** 网站描述：搜索引擎和分享卡片里会显示 */
	description: 'Jerry Liao 的个人博客，记录学习、生活与思考。',
	/** 首页大标题 */
	greeting: '你好，我是 Jerry。',
	/** 首页大标题下面的自我介绍 */
	intro: '这里是我的个人博客，记录学习、生活，以及一些零碎的想法。',
	lang: 'zh-CN',
};

/** 顶部导航 */
export const NAV = [
	{ href: '/blog/', label: '文章' },
	{ href: '/tags/', label: '标签' },
	{ href: '/about/', label: '关于' },
];

/**
 * 社交链接，会显示在首页自我介绍下方。
 * 想加的话，去掉行首的 // 并换成你自己的地址。
 */
export const SOCIAL: { label: string; href: string }[] = [
	// { label: 'GitHub', href: 'https://github.com/你的用户名' },
	// { label: '邮箱', href: 'mailto:你的邮箱' },
];
