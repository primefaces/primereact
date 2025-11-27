'use client';

import { Carousel } from 'primereact/carousel';

function BasicDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel className="max-w-3xl mx-auto" align="center" loop>
                <Carousel.Content className="h-[200px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Carousel.Item key={i}>
                            <div className="p-1 h-full">
                                <div className="h-full bg-surface-0 dark:bg-surface-900 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-xl border border-surface shadow-sm">
                                    <div className="flex items-center justify-center text-5xl font-semibold">{i + 1}</div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel.Content>
                <div className="flex items-center justify-between mt-4">
                    <Carousel.Indicators />
                    <div className="flex items-center justify-end gap-4">
                        <Carousel.Prev className="w-10 h-10 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <i className="pi pi-chevron-left text-lg"></i>
                        </Carousel.Prev>
                        <Carousel.Next className="w-10 h-10 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <i className="pi pi-chevron-right text-lg"></i>
                        </Carousel.Next>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default BasicDemo;
