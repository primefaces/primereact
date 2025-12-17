'use client';

import { Carousel } from 'primereact/carousel';

function SizeDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel className="max-w-sm mx-auto flex flex-col gap-8 items-center" orientation="vertical" slidesPerPage={1.3}>
                <Carousel.Prev className="w-10 h-10 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                    <i className="pi pi-chevron-up text-lg"></i>
                </Carousel.Prev>
                <Carousel.Content className="h-[240px] w-full">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Carousel.Item key={i}>
                            <div className="h-full text-5xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-xl border border-surface">
                                <span>{i + 1}</span>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel.Content>
                <Carousel.Next className="w-10 h-10 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                    <i className="pi pi-chevron-down text-lg"></i>
                </Carousel.Next>
            </Carousel>
        </div>
    );
}

export default SizeDemo;
