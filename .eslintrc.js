module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-console': 'off',
		'no-use-before-define': 'off',
		'no-underscore-dangle': 'off',
		'no-param-reassign': 'off',
		'react/require-default-props': 'off',
		'react/destructuring-assignment': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'import/prefer-default-export': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'react/react-in-jsx-scope': 'off',
		'class-methods-use-this': 'off',

		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		],
		'@typescript-eslint/ban-types': [
			'error',
			{
				extendDefaults: true,
				types: {
					'{}': false,
				},
			},
		],
		'react/jsx-props-no-spreading': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
	settings: {
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
