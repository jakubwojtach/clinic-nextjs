import { defineField, defineType } from 'sanity'

export const socialMedia = defineType({
	name: 'socialMedia',
	title: 'Social Media',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Nazwa linku',
			type: 'string'
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url'
		}),
		defineField({
			name: 'type',
			title: 'Typ',
			type: 'string',
			options: {
				list: [
					{ title: 'Facebook', value: 'facebook' },
					{ title: 'Instagram', value: 'instagram' },
					{ title: 'Twitter', value: 'twitter' },
					{ title: 'LinkedIn', value: 'linkedin' },
					{ title: 'YouTube', value: 'youtube' },
					{ title: 'TikTok', value: 'tiktok' },
					{ title: 'Pinterest', value: 'pinterest' },
					{ title: 'Snapchat', value: 'snapchat' },
					{ title: 'Reddit', value: 'reddit' },
					{ title: 'Telegram', value: 'telegram' },
					{ title: 'X', value: 'x' },
					{ title: 'Twitch', value: 'twitch' },
					{ title: 'Discord', value: 'discord' },
					{ title: 'GitHub', value: 'github' },
					{ title: 'GitLab', value: 'gitlab' },
					{ title: 'Dribbble', value: 'dribbble' },
					{ title: 'Behance', value: 'behance' },
					{ title: 'Medium', value: 'medium' },
					{ title: 'DeviantArt', value: 'deviantart' },
					{ title: 'Flickr', value: 'flickr' },
					{ title: 'Tumblr', value: 'tumblr' },
					{ title: 'Vimeo', value: 'vimeo' },
					{ title: 'Vine', value: 'vine' },
					{ title: 'Weibo', value: 'weibo' },
					{ title: 'WeChat', value: 'wechat' },
					{ title: 'WhatsApp', value: 'whatsapp' },
					{ title: 'Xing', value: 'xing' }
				]
			}
		})
	]
})
