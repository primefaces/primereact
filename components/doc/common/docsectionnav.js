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
            document.getElementById(doc.children[0].id).parentElement.scrollIntoView({ block: 'start', inline: 'nearest', offset: { top: 140 } });
        } else {
            setActiveTab(doc.id);
            document.getElementById(doc.id).parentElement.scrollIntoView({ block: 'start', inline: 'nearest', offset: { top: 140 } });
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
        const topbarEl = document.getElementsByClassName('layout-topbar')[0];

        const onScroll = (event) => {
            sections.forEach((section) => {
                const sectionLabelEl = section.querySelectorAll('.doc-section-label');
                const scrolledToSection = window.scrollY >= section.offsetTop - topbarEl.clientHeight - 20 && window.scrollY < section.offsetTop + section.offsetHeight - topbarEl.clientHeight - 20;

                if (scrolledToSection) {
                    sectionLabelEl[0].querySelector('a');

                    if (sectionLabelEl.length > 1) {
                        sectionLabelEl.forEach((child) => {
                            if (window.scrollY >= child.offsetTop - topbarEl.clientHeight - 20 && window.scrollY < child.offsetTop + child.offsetHeight - topbarEl.clientHeight - 20) {
                                setActiveTab(child.querySelector('a').getAttribute('id'));
                            }
                        });
                    } else {
                        setActiveTab(sectionLabelEl[0].querySelector('a').getAttribute('id'));
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
        <ul className={classNames('hidden xl:block', 'doc-section-nav')}>
            {props.docs.map((doc) => {
                const hash = doc.id === 'api' && doc.children ? doc.children[0].id : doc.id;

                return (
                    <React.Fragment key={doc.label}>
                        <li key={doc.label} className={classNames('navbar-item', { 'active-navbar-item': activeTab === doc.id })}>
                            <Link href={router.basePath + router.pathname + '#' + hash}>
                                <button className="p-link" onClick={() => onButtonClick(doc)}>
                                    {doc.label}
                                </button>
                            </Link>
                        </li>
                        {doc.children && (
                            <ul>
                                {doc.children.map((child) => {
                                    const hash = child.id;

                                    return (
                                        <li key={child.label} className={classNames('navbar-child-item', { 'active-navbar-child-item': activeTab === child.id })}>
                                            <Link href={router.basePath + router.pathname + '#' + hash}>
                                                <button className="p-link" onClick={() => onButtonClick(child)}>
                                                    {child.label}
                                                </button>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
}
