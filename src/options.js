import * as inquirer from '@inquirer/prompts';

export const all = [
	{
		name: 'wizard',
		type: 'boolean',
		description: 'Use wizard',
		default: true
	},
	{
		name: 'input',
		type: 'file-path',
		description: 'Path to WordPress export file',
		default: 'export.xml',
		prompt: inquirer.input
	},
	{
		name: 'post-folders',
		type: 'boolean',
		description: 'Put each post into its own folder',
		default: true,
		choices: [
			{
				name: 'Yes',
				value: true,
				description: '/my-post/index.md'
			},
			{
				name: 'No',
				value: false,
				description: '/my-post.md'
			}
		],
		prompt: inquirer.select
	},
	{
		name: 'prefix-date',
		type: 'boolean',
		description: 'Prefix with date',
		default: false,
		choices: [
			{
				name: 'Yes',
				value: true,
				description: ''
			},
			{
				name: 'No',
				value: false,
				description: ''
			}
		],
		prompt: inquirer.select
	},
	{
		name: 'date-folders',
		type: 'choice',
		description: 'Organize into folders based on date',
		default: 'none',
		choices: [
			{
				name: 'Year folders',
				value: 'year',
				description: ''
			},
			{
				name: 'Year and month folders',
				value: 'year-month',
				description: ''
			},
			{
				name: 'No',
				value: 'none',
				description: ''
			}
		],
		prompt: inquirer.select
	},
	{
		name: 'save-images',
		type: 'choice',
		description: 'Save images',
		default: 'all',
		choices: [
			{
				name: 'Images attached to posts',
				value: 'attached'
			},
			{
				name: 'Images scraped from post body content',
				value: 'scraped'
			},
			{
				name: 'Both',
				value: 'all'
			},
			{
				name: 'No',
				value: 'none'
			}
		],
		prompt: inquirer.select
	}
];
