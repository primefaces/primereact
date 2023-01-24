import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { classNames } from '../../lib/utils/Utils';

export function DocSectionNav(props) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('');
    const [topbarHeight, setTopbarHeight] = useState(null);

    const onButtonClick = (doc) => {
        setActiveTab(doc.id);
        // Scroll to the clicked button's parent element
        scrollToTheSection(doc.id);
    };

    const scrollToTheSection = (id) => {
        document.getElementById(id).parentElement.scrollIntoView({ block: 'start', offset: { top: topbarHeight + 100 } });
    };

    const getIdOfTheSection = (section) => {
        return section.querySelector('a').getAttribute('id');
    };

    useEffect(() => {
        const handleHashChange = (url) => {
            const hash = url.split('#')[1];

            setActiveTab(hash);
        };

        router.events.on('onRouteChangeComplete', handleHashChange);

        return () => {
            router.events.off('onRouteChangeComplete', handleHashChange);
        };
    }, [props.docs, router.events]);

    useEffect(() => {
        const sections = document.querySelectorAll('section'); // Get all sections on the page
        const topbarEl = document.getElementsByClassName('layout-topbar')[0]; // Get the topbar element
        const hash = window.location.hash.substring(1); // Get the initial hash

        setTopbarHeight(topbarEl.clientHeight);

        // Set the active tab to the initial hash and scroll into view if it exists
        if (hash) {
            setActiveTab(hash);
            // Scroll to the section with the current hash
            scrollToTheSection(hash);
        } else if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            // Set the active tab to the first section
            setActiveTab(getIdOfTheSection(sections[0].querySelector('.doc-section-label')));
        }

        const onScroll = () => {
            sections.forEach((section) => {
                const sectionLabelEl = section.querySelectorAll('.doc-section-label'); //Get all labels on the currrent section
                // Check if the section is currently scrolled to center of the screen
                const isScrolledTo = (section) => window.scrollY >= section.offsetTop - topbarEl.clientHeight - 20 && window.scrollY < section.offsetTop + section.offsetHeight - topbarEl.clientHeight - 20;

                if (isScrolledTo(section)) {
                    // Check if the section has multiple child elements
                    if (sectionLabelEl.length > 1) {
                        sectionLabelEl.forEach((child) => {
                            // Check if the child element is currently scrolled to
                            if (isScrolledTo(child)) {
                                // Set the active tab to the id of the currently scrolled to child element
                                setActiveTab(getIdOfTheSection(child));
                            }
                        });
                    } else {
                        setActiveTab(getIdOfTheSection(sectionLabelEl[0]));
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
                const hash = doc.id;

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
                                                <button className="p-link" onClick={(event) => onButtonClick(child)}>
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
