// get author, without decoding
// WordPress doesn't allow funky characters in usernames anyway
export function author(post) {
	return post.data.creator[0];
}

// get array of decoded category names, excluding 'uncategorized'
export function categories(post) {
	if (!post.data.category) {
		return [];
	}

	const categories = post.data.category
		.filter(category => category.$.domain === 'category')
		.map(({ $: attributes }) => decodeURIComponent(attributes.nicename));

	return categories.filter((category) => category !== 'uncategorized');
}

// get cover image filename, previously decoded and set on post.meta
// this one is unique as it relies on special logic executed by the parser
export function coverImage(post) {
	return post.meta.coverImage;
}

// get post date, previously saved as a luxon datetime object on post.meta
// this value is also used for year/month folders, date prefixes, etc. as needed
export function date(post) {
	return post.meta.date;
}

// get excerpt, not decoded, newlines collapsed
export function excerpt(post) {
	return post.data.encoded[1].replace(/[\r\n]+/gm, ' ');
}

// get ID
export function id(post) {
	return post.data.post_id[0];
}

// get slug, previously decoded and set on post.meta
export function slug(post) {
	return post.meta.slug;
}

// get array of decoded tag names
export function tags(post) {
	if (!post.data.category) {
		return [];
	}

	const categories = post.data.category
		.filter(category => category.$.domain === 'post_tag')
		.map(({ $: attributes }) => decodeURIComponent(attributes.nicename));

	return categories;
}

// get simple post title, but not decoded like other frontmatter string fields
export function title(post) {
	return post.data.title[0];
}

// get type, often this will always be "post"
// but can also be "page" or other custom types
export function type(post) {
	return post.data.post_type[0];
}
