import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useEventListener } from '../../lib/hooks/Hooks';
import { classNames, DomHandler } from '../../lib/utils/Utils';

export function DocSectionNav(props) {
    const router = useRouter();
    const [activeId, setActiveId] = useState(null);
    const navRef = useRef(null);
    const blockedScroll = useRef(false);
    const scrollEndTimer = useRef(undefined);

    const onClick = (id) => {
        const label = document.getElementById(id);

        setActiveId(id);
        label && label.parentElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
        blockedScroll.current = true;
    };

    const [bindDocumentScrollListener] = useEventListener({
        target: 'window',
        type: 'scroll',
        listener: () => {
            clearTimeout(scrollEndTimer.current);
            scrollEndTimer.current = setTimeout(() => {
                blockedScroll.current = false;
            }, 100);
        }
    });

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const label = document.getElementById(hash);

        setActiveId(hash);
        label && label.parentElement.scrollIntoView({ block: 'start' });
        bindDocumentScrollListener();
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '50%',
            threshold: 0
        };

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !blockedScroll.current) {
                    const link = DomHandler.findSingle(entry.target, 'a');

                    if (link) {
                        setActiveId(link.id);
                        entry.target.scrollIntoView({ block: 'nearest', inline: 'start' });
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const labels = DomHandler.find(document.body, ':is(h1,h2,h3).doc-section-label');

        labels.forEach((label) => observer.observe(label));

        return () => {
            labels.forEach((label) => observer.unobserve(label));
        };
    }, [router]);

    return (
        <ul ref={navRef} className="doc-section-nav">
            {props.docs.map((doc) => {
                const hash = doc.id;

                return (
                    <React.Fragment key={doc.label}>
                        <li key={doc.label} className={classNames('navbar-item', { 'active active-navbar-item': activeId === doc.id })}>
                            <Link href={router.basePath + router.pathname + '#' + hash}>
                                <button className="p-link" onClick={() => onClick(doc.id)}>
                                    {doc.label}
                                </button>
                            </Link>
                        </li>
                        {doc.children && (
                            <ul>
                                {doc.children.map((child, i) => {
                                    const hash = child.id;

                                    return (
                                        <li key={child.id + '_' + child.label + '_' + i} className={classNames('navbar-child-item', { 'active active-navbar-child-item': activeId === child.id })}>
                                            <Link href={router.basePath + router.pathname + '#' + hash}>
                                                <button className="p-link" onClick={() => onClick(child.id)}>
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
