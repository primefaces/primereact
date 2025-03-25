import * as React from 'react';
import { codeToHtml } from 'shiki';
import type { CodeViewerProps } from './CodeViewer.types';

export function CodeViewer(props: CodeViewerProps) {
    const [highlightedCode, setHighlightedCode] = React.useState<string>('');

    React.useEffect(() => {
        async function highlightCode() {
            //const codeString = `const Demo = () => { return <div>Hello, world!</div>; }`;

            //const highlighter = await createHighlighter({ langs: ['tsx'], themes: ['github-dark'] });
            const html = await codeToHtml(props.source.code, { lang: 'tsx', theme: 'github-dark' });

            setHighlightedCode(html);
        }

        highlightCode();
    }, [props.source]);

    return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
}
