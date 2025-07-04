import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
    eslintPluginUnicorn.configs.all,
    js.configs.recommended,
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            'unicorn/better-regex': 'warn',
            'no-unused-vars': 'warn',
            '@stylistic/indent': ['warn', 4],
            '@stylistic/arrow-spacing': ['warn', {
                'before': true,
                'after': true
            }],
            '@stylistic/brace-style': ['warn', '1tbs'],
            '@stylistic/comma-spacing': ['error', {'before': false, 'after': true}],
            '@stylistic/quotes': ['warn', 'single']
        },
    },
];