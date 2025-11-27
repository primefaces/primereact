import { codeToHtml } from 'shiki';

export const themes = {
    dark: 'github-dark',
    light: 'github-light'
};

// alt
// light -> catppuccin-latte
// dark -> catppuccin-macchiato

export async function highlightCode(code: string, lang: string = 'tsx') {
    const html = await codeToHtml(code, {
        lang,
        themes,
        transformers: [
            {
                pre(node) {
                    node.properties['data-rehype-pretty-code-pre'] = '';
                },
                code(node) {
                    node.properties['data-line-numbers'] = '';
                },
                line(node) {
                    node.properties['data-line'] = '';
                }
            }
        ]
    });

    return html;
}
