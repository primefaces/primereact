import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../../lib/utils/Utils';

export function DocSectionNav(props) {
    const [overflow, setOverflow] = useState(false);
    const router = useRouter();
    const ulRef = useRef(null);
    const elementsRef = useRef(null);

    useEffect(() => {
        const ulHeight = ulRef.current.offsetHeight;
        const elementsHeight = elementsRef.current.offsetHeight;

        if (elementsHeight > ulHeight) {
            setOverflow(true);
        }
    }, []);

    return (
        <ul ref={ulRef} className={classNames('sticky list-none p-0 m-0 hidden xl:block w-12rem px-3', { 'overflow-y-scroll': overflow })} style={{ top: '7rem', flexGrow: 0, flexShrink: 0, flexBasis: 'auto', height: 'calc(100vh - 15rem)' }}>
            <div ref={elementsRef}>
                {props.docs.map((doc) => (
                    <li key={doc.label}>
                        <Link href={router.basePath + router.pathname + '#' + doc.id}>
                            <button className="p-link block p-1 text-color hover:text-primary" onClick={() => document.getElementById(doc.id).parentElement.scrollIntoView({ block: 'center' })}>
                                {doc.label}
                            </button>
                        </Link>

                        {doc.children && (
                            <ul className="list-none m-0 py-0 pl-3">
                                {doc.children.map((child) => {
                                    return (
                                        <li key={child.label}>
                                            <Link href={router.basePath + router.pathname + '#' + child.id}>
                                                <button
                                                    className="p-link block p-1 text-color text-sm hover:text-primary"
                                                    onClick={() => {
                                                        document.getElementById(child.id).parentElement.scrollIntoView({ block: 'center' });
                                                    }}
                                                >
                                                    {child.label}
                                                </button>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </li>
                ))}
            </div>
        </ul>
    );
}
