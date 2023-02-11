import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useEventListener } from '../../lib/hooks/Hooks';
import { classNames, DomHandler } from '../../lib/utils/Utils';

export function DocSectionNav(props) {
    const router = useRouter();
    const [activeId, setActiveId] = useState(null);
    const navRef = useRef(null);
    const topbarHeight = useRef(0);
    const isScrollBlocked = useRef(false);
    const scrollEndTimer = useRef(undefined);

    const [bindDocumentScrollListener] = useEventListener({
        target: 'window',
        type: 'scroll',
        listener: (event) => {
            if (!isScrollBlocked.current) {
                const labels = DomHandler.find(event.target, ':is(h1,h2,h3).doc-section-label');
                const windowScrollTop = DomHandler.getWindowScrollTop();

                labels.forEach((label) => {
                    const { top } = DomHandler.getOffset(label);
                    const threshold = getThreshold(label);

                    if (top - threshold <= windowScrollTop) {
                        const link = DomHandler.findSingle(label, 'a');

                        setActiveId(link.id);
                    }
                });
            }

            clearTimeout(scrollEndTimer.current);
            scrollEndTimer.current = setTimeout(() => {
                isScrollBlocked.current = false;
            }, 100);
        }
    });

    const onClick = (id) => {
        setActiveId(id);
        scrollToLabelById(id, 'smooth');
        isScrollBlocked.current = true;
    };

    const scrollToLabelById = (id, behavior) => {
        const label = document.getElementById(id);

        label && label.parentElement.scrollIntoView({ block: 'start', behavior });
    };

    const getThreshold = (label) => {
        if (!topbarHeight.current) {
            const topbar = DomHandler.findSingle(document.body, '.layout-topbar');

            topbarHeight.current = topbar ? DomHandler.getHeight(topbar) : 0;
        }

        return topbarHeight.current + DomHandler.getHeight(label) * 1.5;
    };

    useEffect(() => {
        const hash = window.location.hash.substring(1);

        setActiveId(hash);
        scrollToLabelById(hash);
        bindDocumentScrollListener();
    }, []);

    useEffect(() => {
        const activeItem = DomHandler.findSingle(navRef.current, '.active-navbar-item');

        activeItem && activeItem.scrollIntoView({ block: 'nearest', inline: 'start' });
    }, [activeId]);

    const createItem = ({ id, label, children }, level = 0) => {
        const { basePath, pathname } = router;
        const href = `${basePath}${pathname}#${id}`;

        return (
            <li key={id} className={classNames('navbar-item', { 'active-navbar-item': activeId === id })}>
                <div className="navbar-item-content">
                    <Link href={href}>
                        <button className="p-link" onClick={() => onClick(id)} title={label}>
                            {label}
                        </button>
                    </Link>
                </div>

                <ul>{level !== 1 && children && children.map((child) => createItem(child, 1))}</ul>
            </li>
        );
    };

    return (
        <ul ref={navRef} className="doc-section-nav">
            {props.docs.map(createItem)}
        </ul>
    );
}
