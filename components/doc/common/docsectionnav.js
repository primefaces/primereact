import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../../lib/utils/Utils';

export function DocSectionNav(props) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('');

    const onButtonClick = (doc) => {
        if (doc.children && doc.id === 'api') {
            setActiveTab(doc.children[0].id);
            document.getElementById(doc.children[0].id).parentElement.scrollIntoView({ block: 'center' });
        } else {
            setActiveTab(doc.id);
            document.getElementById(doc.id).parentElement.scrollIntoView({ block: 'center' });
        }
    };

    useEffect(() => {
        const handleHashChange = (url) => {
            const hash = url.split('#')[1];
            const docWithId = props.docs.find((doc) => doc.id === hash);

            if (docWithId && docWithId.children && docWithId.id === 'api') {
                setActiveTab(docWithId.children[0].id);
            } else {
                setActiveTab(hash);
            }
        };

        router.events.on('hashChangeStart', handleHashChange);

        return () => {
            router.events.off('hashChangeStart', handleHashChange);
        };
    }, [props.docs, router.events]);

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const onScroll = (event) => {
            event.preventDefault();
            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop && window.scrollY < section.offsetTop + section.offsetHeight) {
                    section.querySelectorAll('.doc-section-label')[0].querySelector('a');

                    if (section.querySelectorAll('.doc-section-label').length > 1) {
                        section.querySelectorAll('.doc-section-label').forEach((child) => {
                            if (window.scrollY >= child.offsetTop && window.scrollY < child.offsetTop + child.offsetHeight) {
                                setActiveTab(child.querySelector('a').getAttribute('id'));
                            }
                        });
                    } else {
                        setActiveTab(section.querySelectorAll('.doc-section-label')[0].querySelector('a').getAttribute('id'));
                    }
                }
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll, { passive: true });
        };
    }, []);

    return (
        <ul className={classNames('sticky list-none p-0 my-0 mx-3 hidden xl:block w-20rem px-3 flex-shrink-0 flex-grow-0 overflow-y-auto')} style={{ top: '7rem', right: '0', flexBasis: 'auto', height: 'calc(100vh - 15rem)' }}>
            <div className="py-1">
                {props.docs.map((doc) => (
                    <li key={doc.label} className="flex flex-column">
                        <Link href={router.basePath + router.pathname + '#' + (doc.id === 'api' ? doc.children[0].id : doc.id)}>
                            <div className="flex">
                                <div className={classNames('h-2rem flex align-items-center justify-content-center z-1', { 'border-left-2 border-primary': activeTab === doc.id })}></div>
                                <button className={classNames('flex flex-column p-link inline p-1 ml-2 hover:text-primary', { 'text-primary font-bold': activeTab === doc.id, 'text-color': activeTab !== doc.id })} onClick={() => onButtonClick(doc)}>
                                    {doc.label}
                                </button>
                            </div>
                        </Link>

                        {doc.children && (
                            <ul className="flex-1 list-none m-0 py-0 pl-3" style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto' }}>
                                {doc.children.map((child) => {
                                    return (
                                        <li className="flex" key={child.label}>
                                            <div className={classNames('h-2rem flex align-items-center justify-content-center z-1', { 'border-left-2 border-primary': activeTab === child.id })}></div>
                                            <Link href={router.basePath + router.pathname + '#' + child.id} cancel>
                                                <button className="flex p-link block p-1 ml-2 text-color text-sm hover:text-primary" onClick={() => onButtonClick(child)}>
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
