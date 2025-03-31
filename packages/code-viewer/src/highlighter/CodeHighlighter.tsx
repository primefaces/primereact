import * as React from 'react';
import { codeToHtml } from 'shiki';
import type { CodeHighlighterProps } from './CodeHighlighter.types';

export function CodeHighlighter(props: CodeHighlighterProps) {
    const [highlightedCode, setHighlightedCode] = React.useState<string>('');

    React.useEffect(() => {
        async function highlightCode() {
            //const codeString = `const Demo = () => { return <div>Hello, world!</div>; }`;

            //const highlighter = await createHighlighter({ langs: ['tsx'], themes: ['github-dark'] });
            const html = await codeToHtml(props.code || '', { lang: 'tsx', theme: 'github-dark' });

            setHighlightedCode(html);
        }

        highlightCode();
    }, [props.code]);

    return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
}
