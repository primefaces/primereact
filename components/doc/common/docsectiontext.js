import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export function DocSectionText(props) {
    const router = useRouter();
    const content = (
        <>
            {props.label}
            <Link href={router.basePath + router.pathname + '#' + props.id} target="_self">
                <a id={props.id}>#</a>
            </Link>
        </>
    );
    const tag = props.level === '2' ? 'h3' : 'h2';

    const Title = (titleProps) => {
        return React.createElement(tag, { className: 'doc-section-label' }, titleProps.children);
    };

    return (
        <>
            <Title>{content}</Title>
            <div className="doc-section-description">{props.children}</div>
        </>
    );
}
