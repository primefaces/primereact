'use client';

import { TableOfContents } from '@/lib/utils/getTableOfContents';
import { cn } from '@primeuix/utils';
import { Button } from 'primereact/button';
import * as React from 'react';

function useActiveItem(itemIds: string[]) {
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
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            itemIds?.forEach((id) => {
                const element = document.getElementById(id);

                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [itemIds]);

    const onItemClick = (id: string) => {
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

interface TreeProps {
    tree: TableOfContents;
    activeId: string | null;
    onItemClick: (id: string) => void;
    depth?: number;
}

function Tree({ tree, activeId, onItemClick, depth = 0 }: TreeProps) {
    if (!tree.items?.length) return null;

    return (
        <ul className={cn('mt-2', depth > 0 && 'pl-4')}>
            {tree.items.map((item, index) => (
                <li key={item.url + index} className="mb-2">
                    <a
                        id={'toc-' + item.url?.substring(1)}
                        href={item.url}
                        className={cn('leading-6 text-surface-500 hover:text-primary transition-colors duration-200', activeId === item.url?.substring(1) && '!text-primary')}
                        onClick={() => onItemClick(item.url?.substring(1))}
                    >
                        <span>{item.title}</span>
                    </a>

                    <Tree tree={{ items: item.items }} activeId={activeId} onItemClick={onItemClick} depth={depth + 1} />
                </li>
            ))}
        </ul>
    );
}

interface DocTocProps {
    toc: TableOfContents;
}

export default function DocToc({ toc }: DocTocProps) {
    const itemIds = React.useMemo(() => {
        const getAllUrls = (items: TableOfContents['items'] = []): string[] => {
            return items.flatMap((item) => {
                const urls = [item.url];

                if (item.items?.length) {
                    urls.push(...getAllUrls(item.items));
                }

                return urls;
            });
        };

        return getAllUrls(toc.items)
            .filter(Boolean)
            .map((url) => url.split('#')[1]);
    }, [toc]);

    const { activeId, activeTop, activeHeight, onItemClick } = useActiveItem(itemIds);

    return (
        <div
            className="w-[200px] min-[1200px]:w-[250px] sticky top-34 lg:block hidden"
            style={
                {
                    '--top': `${activeTop}px`,
                    '--height': `${activeHeight}px`
                } as React.CSSProperties
            }
        >
            <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                <div className="flex items-center gap-2 ">
                    <i className="pi pi-align-left opacity-50 !text-sm !leading-none"></i>
                    <span className="font-medium uppercase text-sm tracking-wide">On this page</span>
                </div>
                <div
                    className="relative mt-4 pl-4
            after:content-[''] after:absolute after:rounded-full after:left-0 after:transition-all after:duration-200 after:top-(--top) after:h-(--height) after:bg-primary after:w-px
            before:content-[''] before:absolute before:rounded-full before:left-0 before:top-0 before:h-full before:bg-surface-200 dark:before:bg-surface-800 before:w-px"
                >
                    <Tree tree={toc} activeId={activeId} onItemClick={onItemClick} />
                </div>
            </div>
            <div className="mt-8 rounded-lg border border-surface-200 dark:border-surface-800 px-4 py-6 bg-surface-0 dark:bg-surface-900">
                <div className="text-2xl font-semibold flex flex-col gap-2 text-center">
                    <span className="leading-none">Build Faster </span>
                    <span className="leading-none  text-primary">Design Better</span>
                </div>
                <div className="text-center text-[14px] mt-4 text-surface-500">490+ ready to use UI blocks to build spectacular applications in no time</div>
                <Button as={'a'} href="https://primeblocks.org/" target="_blank" rounded variant="outlined" className="!mx-auto mt-4 !flex !w-fit">
                    Browse Components
                </Button>
            </div>
        </div>
    );
}
