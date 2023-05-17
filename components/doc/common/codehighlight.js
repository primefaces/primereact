import React, { useEffect, useRef } from 'react';
import { classNames } from '../../lib/utils/Utils';

export function CodeHighlight(props) {
    const codeElement = useRef();
    const languageClassName = `language-${props.lang || 'jsx'}`;

    useEffect(() => {
        window.Prism.highlightElement(codeElement.current);
    }, []);

    return (
        <pre style={props.style}>
            <code ref={codeElement} className={classNames(languageClassName, { 'pt-5': props.code && !props.import })}>
                {props.children}&nbsp;
            </code>
        </pre>
    );
}
