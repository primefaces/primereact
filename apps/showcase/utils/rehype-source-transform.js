import { visit } from 'unist-util-visit';

// TODO: refactor
export const rehypeAttachMeta = () => (tree) => {
    visit(tree, (node) => {
        if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;

            if (codeEl.tagName !== 'code') {
                return;
            }

            if (codeEl.data?.meta) {
                const regex = /event="([^"]*)"/;
                const match = codeEl.data?.meta.match(regex);

                if (match) {
                    node.__event__ = match ? match[1] : null;
                    codeEl.data.meta = codeEl.data.meta.replace(regex, '');
                }
            }

            node.__syntaxSource__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
            node.__style__ = node.properties?.__style__;
            node.__spec__ = node.properties?.__spec__;
            node.__full__ = node.properties?.__full__;
        }
    });
};

export const rehypeReAttachMeta = () => (tree) => {
    visit(tree, (node) => {
        if (node?.type === 'element' && node?.tagName === 'figure') {
            if (!('data-rehype-pretty-code-figure' in node.properties)) {
                return;
            }

            const preElement = node.children.at(-1);

            if (preElement.tagName !== 'pre') {
                return;
            }

            preElement.properties['__withMeta__'] = node.children.at(0).tagName === 'div';
            preElement.properties['__syntaxSource__'] = node.__syntaxSource__;
            preElement.properties['__spec__'] = node?.__spec__ ?? null;

            if (node.__src__) {
                preElement.properties['__src__'] = node.__src__;
            }

            if (node.__event__) {
                preElement.properties['__event__'] = node.__event__;
            }

            if (node.__style__) {
                preElement.properties['__style__'] = node.__style__;
            }

            const codeElement = preElement.children.at(-1);

            if (codeElement.tagName !== 'code') {
                return;
            }

            codeElement.properties['className'] = ['language-tsx'];

            if (codeElement.data?.meta?.includes('full') || node.__full__ === 'true') {
                preElement.properties['__full__'] = 'true';
            }
        }
    });
};

export const rehypeNpmCommandMeta = () => (tree) => {
    visit(tree, (node) => {
        if (node?.type === 'element' && node?.tagName === 'pre' && node.properties?.['__syntaxSource__']?.startsWith('npm install')) {
            const npmInstall = node.properties?.['__syntaxSource__'];

            node.properties['__npmInstall__'] = npmInstall;
            node.properties['__yarnInstall__'] = npmInstall.replace('npm install', 'yarn add');
            node.properties['__pnpmInstall__'] = npmInstall.replace('npm install', 'pnpm add');
            node.properties['__bunInstall__'] = npmInstall.replace('npm install', 'bun add');
        }
    });
};
