'use client';
import useScroll from '@/shared/hooks/useScroll';
import { cn } from '@primeuix/utils';
import * as React from 'react';

function useActiveItem(itemIds: (string | undefined)[]) {
    const [activeId, setActiveId] = React.useState<string | null>(null);
    const [activeTop, setActiveTop] = React.useState<number>(0);
    const [activeHeight, setActiveHeight] = React.useState<number>(20);

    React.useEffect(() => {
        setActiveId(itemIds?.[0] ?? null);
    }, [itemIds]);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                        const tocElement = document.getElementById('toc-' + entry.target.id);

                        if (tocElement) {
                            setActiveTop(tocElement.offsetTop - 1);
                            setActiveHeight(tocElement.offsetHeight + 2);
                        }
                    }
                });
            },
            { rootMargin: `0% 0% -80% 0%` }
        );

        itemIds?.forEach((id) => {
            if (!id) return;

            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            itemIds?.forEach((id) => {
                if (!id) return;

                const element = document.getElementById(id);

                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [itemIds]);

    const onItemClick = (id: string | undefined) => {
        if (!id) return;

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveId(id);
            const tocElement = document.getElementById('toc-' + id);

            if (tocElement) {
                setActiveTop(tocElement.offsetTop - 1);
                setActiveHeight(tocElement.offsetHeight + 2);
            }
        }
    };

    return { activeId, activeTop, activeHeight, onItemClick };
}

type TableOfContentsItem = {
    text: string;
    level: number;
    slug: string | undefined;
};

type TableOfContents = TableOfContentsItem[];

function DocTocList({ toc }: { toc: TableOfContents }) {
    const tocListRef = React.useRef<HTMLDivElement>(null);
    const itemIds = React.useMemo(() => {
        return toc.map((item) => {
            if (item.slug) {
                return item.slug;
            }

            return;
        });
    }, [toc]);

    const { activeId, activeTop, activeHeight, onItemClick } = useActiveItem(itemIds);
    const { y } = useScroll(tocListRef);

    React.useEffect(() => {
        if (activeId) {
            tocListRef.current?.scrollTo({ top: Math.max(activeTop - 60, 0), behavior: 'smooth' });
        }
    }, [activeId, activeTop]);

    return (
        <div
            ref={tocListRef}
            style={
                {
                    '--top': `${activeTop}px`,
                    '--height': `${activeHeight}px`
                } as React.CSSProperties
            }
            className={cn(
                ' overflow-y-auto pb-10 mb-6 max-h-[calc(90vh-424px)] h-full',
                y < 5 ? '[mask-image:linear-gradient(to_top,transparent_0%,rgb(0,0,0)_60px,rgb(0,0,0)_100%,_transparent_100%)]' : '[mask-image:linear-gradient(to_top,transparent_0%,rgb(0,0,0)_60px,rgb(0,0,0)_90%,_transparent_100%)]'
            )}
        >
            <div
                className="relative pl-4
    after:content-[''] after:absolute after:rounded-full after:left-0 after:transition-[top,height] after:duration-300 after:top-(--top) after:h-(--height) after:bg-primary after:w-px
    before:content-[''] before:absolute before:rounded-full before:left-0 before:top-0 before:h-full before:bg-(--border-color) before:w-px"
            >
                <ul className="mt-2">
                    {toc.map(
                        (item, index) =>
                            item.slug !== undefined && (
                                <li key={item.slug + index} className="mb-1" style={{ paddingLeft: `${(item.level - 2) * 16}px` }}>
                                    <a
                                        onClick={() => onItemClick(item.slug)}
                                        id={'toc-' + item.slug}
                                        href={`#${item.slug}`}
                                        className={cn('text-surface-500 hover:text-primary transition-colors duration-200 text-sm', activeId === item.slug && '!text-primary')}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            )
                    )}
                </ul>
            </div>
        </div>
    );
}

interface DocTocProps {
    toc: TableOfContents;
}

export default function DocToc({ toc }: DocTocProps) {
    if (toc.length === 0) {
        return null;
    }

    return (
        <aside className="w-(--sidebar-width) sticky h-full top-[calc(var(--sticky-offset-top)+var(--docs-layout-spacing))] lg:block hidden ">
            <span className="uppercase font-mono text-xs text-color">On this page</span>
            <DocTocList toc={toc} />
        </aside>
    );
}
