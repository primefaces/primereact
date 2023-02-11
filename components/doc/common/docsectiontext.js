import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export function DocSectionText(props) {
    const { id, label, level = 2, children } = props;
    const router = useRouter();

    const onClick = (event) => {
        const parentElement = event.currentTarget.parentElement;

        setTimeout(() => {
            parentElement.scrollIntoView({ block: 'start' });
        }, 0);
    };

    const content = (
        <>
            {label}
            <Link href={router.basePath + router.pathname + '#' + id} target="_self">
                <a id={id} onClick={onClick}>
                    #
                </a>
            </Link>
        </>
    );

    const Title = (titleProps) => {
        return React.createElement(`h${level}`, { className: 'doc-section-label' }, titleProps.children);
    };

    return (
        <>
            <Title>{content}</Title>
            <div className="doc-section-description">{children}</div>
        </>
    );
}
