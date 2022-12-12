import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../../lib/utils/Utils';

export function DocSectionNav(props) {
    const [overflow, setOverflow] = useState(false);
    const router = useRouter();
    const ulRef = useRef(null);
    const elementsRef = useRef(null);
    const [activeTab, setActiveTab] = useState(0);

    const onButtonClick = (doc, i) => {
        if (doc.children) {
            setActiveTab(i + '-' + '0');
            document.getElementById(doc.children[0].id).parentElement.scrollIntoView({ block: 'center' });
        } else {
            setActiveTab(i);
            document.getElementById(doc.id).parentElement.scrollIntoView({ block: 'center' });
        }
    };

    useEffect(() => {
        const ulHeight = ulRef.current.offsetHeight;
        const elementsHeight = elementsRef.current.offsetHeight;

        if (elementsHeight > ulHeight) {
            setOverflow(true);
        }
    }, []);

    return (
        <ul
            ref={ulRef}
            className={classNames('sticky list-none p-0 my-0 mx-3 hidden xl:block w-20rem px-3 flex-shrink-0 flex-grow-0', { 'overflow-y-scroll': overflow })}
            style={{ top: '7rem', right: '0', flexBasis: 'auto', height: 'calc(100vh - 15rem)' }}
        >
            <div className="py-1" ref={elementsRef}>
                {props.docs.map((doc, i) => (
                    <li key={doc.label} className="flex flex-column">
                        <Link href={router.basePath + router.pathname + '#' + doc.id}>
                            <div className="flex">
                                <div className={classNames('h-2rem flex align-items-center justify-content-center z-1', { 'border-left-2 border-primary': activeTab === i })}></div>
                                <button className={classNames('flex flex-column p-link inline p-1 ml-2 hover:text-primary', { 'text-primary font-bold': activeTab === i, 'text-color': activeTab !== i })} onClick={() => onButtonClick(doc, i)}>
                                    {doc.label}
                                </button>
                            </div>
                        </Link>

                        {doc.children && (
                            <ul className="flex-1 list-none m-0 py-0 pl-3" style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto' }}>
                                {doc.children.map((child, j) => {
                                    return (
                                        <li className="flex" key={child.label}>
                                            <div className={classNames('h-2rem flex align-items-center justify-content-center z-1', { 'border-left-2 border-primary': activeTab === i + '-' + j })}></div>
                                            <Link href={router.basePath + router.pathname + '#' + child.id}>
                                                <button className="flex p-link block p-1 ml-2 text-color text-sm hover:text-primary" onClick={() => onButtonClick(child, i + '-' + j)}>
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
