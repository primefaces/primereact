'use client';
import * as React from 'react';
import Link from 'next/link';
import { Portal } from 'primereact/portal';
import adsjson from '@/assets/data/ads.json';

export default function DocAds() {
    const ads = adsjson.data;

    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const [page, setPage] = React.useState(0);

    function onNext() {
        setPage((prev) => (prev + 1) % ads.length);
    }

    function onPrev() {
        setPage((prev) => (prev - 1 + ads.length) % ads.length);
    }

    const startInterval = () => {
        if (timeoutRef.current || ads.length < 2) return;

        timeoutRef.current = setInterval(onNext, 7500);
    };

    const stopInterval = () => {
        if (timeoutRef.current) {
            clearInterval(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    React.useEffect(() => {
        startInterval();

        return () => stopInterval();
    }, []);

    return (
        <Portal>
            <div className="fixed bottom-4 xl:bottom-14 right-4 xl:right-14 w-(--sidebar-width) lg:block hidden">
                {ads.map((item, i) => {
                    const level = (i - page + ads.length) % ads.length;

                    return (
                        <div
                            key={i}
                            style={{ '--ad-level': level } as React.CSSProperties}
                            data-level={level}
                            onPointerEnter={stopInterval}
                            onPointerLeave={startInterval}
                            className="group perspective-[900px] absolute bottom-0 left-0 translate-y-[calc(var(--ad-level)*-20px)] scale-[calc(1-var(--ad-level)*0.1)] z-[calc(100-var(--ad-level))] w-full h-auto rounded-lg p-2.5 xl:p-3 bg-surface-0 dark:bg-surface-900 shadow-xs border border-surface dark:border-surface-800 transition-transform duration-500 "
                        >
                            <div className="group-data-[level=0]:opacity-100 opacity-25 group-data-[level=0]:blur-[0] blur-[0.5px] transition-[opacity,filter] duration-700">
                                <h4 className="text-sm font-semibold text-surface-700 dark:text-surface-200">{item.title}</h4>
                                <p className="text-sm text-surface-500 dark:text-surface-400 mt-1 line-clamp-2">{item.description}</p>
                                <Link
                                    href={''}
                                    className="block relative rounded-lg border border-surface-200 dark:border-surface-800 aspect-video mt-2 transition-[transform,box-shadow] duration-300 transform-gpu transform-3d group-hover:rotate-x-14 group-hover:rotate-z-4 group-hover:-rotate-y-16 "
                                >
                                    <img className="size-full object-cover relative z-3 rounded-[inherit]" src={item.image} alt={item.title} />
                                    {level === 0 && (
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden rounded-br-[inherit] rounded-tl-[inherit] rounded-[0.9rem] size-[calc(100%+6px)] object-cover absolute top-0 left-0 bg-surface-300 dark:bg-surface-600">
                                            <img className="size-full object-cover blur-3xl" src={item.image} alt={item.title} />
                                        </div>
                                    )}
                                </Link>
                                <div className="flex items-center mt-2.5 -mb-0.5">
                                    <span className="text-xs text-surface-500 dark:text-surface-400">PrimeAd</span>
                                    <div className="flex-1 flex items-center justify-end gap-2">
                                        <button onClick={onPrev} className="text-xs text-surface-500 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-100">
                                            Prev
                                        </button>
                                        <button onClick={onNext} className="text-xs text-surface-500 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-100">
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Portal>
    );
}
