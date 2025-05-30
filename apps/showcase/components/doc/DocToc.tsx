'use client';

import useScroll from '@/hooks/useScroll';
import { cn } from '@primeuix/utils';
import { Button } from 'primereact/button';
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
                'max-h-[calc(90vh-300px)] overflow-y-auto pb-16 mb-2',
                y < 5 ? '[mask-image:linear-gradient(to_top,transparent_0%,rgb(0,0,0)_80px,rgb(0,0,0)_100%,_transparent_100%)]' : '[mask-image:linear-gradient(to_top,transparent_0%,rgb(0,0,0)_80px,rgb(0,0,0)_90%,_transparent_100%)]'
            )}
        >
            <div className="flex items-center gap-2 ">
                <i className="pi pi-align-left opacity-50 !text-sm !leading-none"></i>
                <span className="font-medium uppercase text-sm tracking-wide">On this page</span>
            </div>
            <div
                className="relative mt-4 pl-4
    after:content-[''] after:absolute after:rounded-full after:left-0 after:transition-[top,height] after:duration-300 after:top-(--top) after:h-(--height) after:bg-primary after:w-px
    before:content-[''] before:absolute before:rounded-full before:left-0 before:top-0 before:h-full before:bg-surface-200 dark:before:bg-surface-800 before:w-px"
            >
                <ul className="mt-2">
                    {toc.map(
                        (item, index) =>
                            item.slug !== undefined && (
                                <li key={item.slug + index} className="mb-2" style={{ paddingLeft: `${(item.level - 2) * 14}px` }}>
                                    <a
                                        onClick={() => onItemClick(item.slug)}
                                        id={'toc-' + item.slug}
                                        href={`#${item.slug}`}
                                        className={cn('leading-6 text-surface-500 hover:text-primary transition-colors duration-200', activeId === item.slug && '!text-primary')}
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
    return (
        <div className="w-[236px] sticky top-34 lg:block hidden">
            <DocTocList toc={toc} />
            <DocTocAd />
        </div>
    );
}

function DocTocAd() {
    return (
        <div className="rounded-lg border border-surface-200 dark:border-surface-800 px-4 py-6 bg-surface-0 dark:bg-surface-900">
            <div className="text-2xl font-semibold flex flex-col gap-2 text-center">
                <span className="leading-none">Build Faster </span>
                <span className="leading-none  text-primary">Design Better</span>
            </div>
            <div className="text-center text-[14px] mt-4 text-surface-500">490+ ready to use UI blocks to build spectacular applications in no time</div>
            <Button as={'a'} href="https://primeblocks.org/" target="_blank" rounded variant="outlined" className="!mx-auto mt-4 !flex !w-fit">
                Browse Components
            </Button>
        </div>
    );
}
