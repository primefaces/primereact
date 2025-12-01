import { useEventListener } from '@/components/lib/hooks/Hooks';
import { DomHandler, ObjectUtils, classNames } from '@/components/lib/utils/Utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import AppContentContext from '@/components/layout/appcontentcontext';
import { useContext } from 'react';

export function DocSectionNav({ docs = [] }) {
    const { darkMode } = useContext(AppContentContext);
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

                const activeItem = DomHandler.findSingle(navRef.current, '.active-navbar-item');

                activeItem && activeItem.scrollIntoView({ block: 'nearest', inline: 'start' });
            }, 50);
        }
    });

    const onClick = (id) => {
        setActiveId(id);
        setTimeout(() => {
            scrollToLabelById(id, 'smooth');
            isScrollBlocked.current = true;
        }, 1);
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
        const hasHash = ObjectUtils.isNotEmpty(hash);
        const id = hasHash ? hash : (docs[0] || {}).id;

        setActiveId(id);
        hasHash && scrollToLabelById(id);
        bindDocumentScrollListener();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const createItem = ({ id, label, children }, level = 0) => {
        const { basePath, pathname } = router;
        const href = `${basePath}${pathname}#${id}`;

        return (
            <li key={id} className={classNames('navbar-item', { 'active-navbar-item': activeId === id })}>
                <div className="navbar-item-content">
                    <Link href={href}>
                        <button className="px-link" onClick={() => onClick(id)} title={label}>
                            {label}
                        </button>
                    </Link>
                </div>

                <ul>{level !== 1 && children && children.map((child) => createItem(child, 1))}</ul>
            </li>
        );
    };

    return (
        <div className="doc-section-nav-container">
            <ul ref={navRef} className="doc-section-nav">
                {docs.map((item) => createItem(item))}
            </ul>
        </div>
    );
}
