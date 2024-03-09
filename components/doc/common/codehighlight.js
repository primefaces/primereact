import React, { useEffect, useRef } from 'react';

export function CodeHighlight(props) {
    const codeElement = useRef();
    const languageClassName = `language-${props.lang || 'jsx'}`;

    useEffect(() => {
        window.Prism.highlightElement(codeElement.current);
    }, []);

    return (
        <pre style={props.style} tabIndex="-1">
            <code ref={codeElement} className={languageClassName}>
                {props.children}&nbsp;
            </code>
        </pre>
    );
}
