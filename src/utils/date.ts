// 日期一律按 UTC 显示：文章里写的 2026-10-20 不管在哪个时区构建，都显示为 10 月 20 日
const long = new Intl.DateTimeFormat('zh-CN', {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	timeZone: 'UTC',
});

/** 2026年10月20日 */
export const formatDate = (date: Date) => long.format(date);

/** 2026-10-20 */
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
