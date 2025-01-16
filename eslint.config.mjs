export default {
    root: true,
    ignorePatterns: ['**/dist/**'],
    plugins: ['prettier'],
    extends: ['prettier'],
    rules: {
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
            { blankLine: 'any', prev: ['case', 'default'], next: 'break' },
            { blankLine: 'any', prev: 'case', next: 'case' },
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: 'block', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block' },
            { blankLine: 'always', prev: 'block-like', next: '*' },
            { blankLine: 'always', prev: '*', next: 'block-like' }
        ]
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: ['tsconfig.json'],
                createDefaultProgram: true
            },
            extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
            rules: {
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                '@typescript-eslint/no-empty-interface': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                'arrow-body-style': ['error', 'as-needed'],
                '@typescript-eslint/member-ordering': [
                    'error',
                    {
                        default: ['public-static-field', 'static-field', 'instance-field', 'public-instance-method', 'public-static-field']
                    }
                ],
                curly: 'error',
                'no-console': 'error',
                'prefer-const': 'error'
            }
        }
    ]
};
