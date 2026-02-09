import { Carousel } from '@primereact/ui/carousel';
import { ChevronLeft } from '@primeicons/react/chevron-left';
import { ChevronRight } from '@primeicons/react/chevron-right';

function LoopDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel.Root className="max-w-xl mx-auto" align="center" loop slidesPerPage={1.75}>
                <Carousel.Content className="h-[240px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Carousel.Item key={i}>
                            <div className="h-full text-5xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-xl border border-surface">
                                <span>{i + 1}</span>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel.Content>
                <div className="flex mt-4 gap-4">
                    <Carousel.Indicators />
                    <div className="flex items-center justify-end gap-2 flex-1">
                        <Carousel.Prev className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronLeft className="text-lg"></ChevronLeft>
                        </Carousel.Prev>
                        <Carousel.Next className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <ChevronRight className="text-lg"></ChevronRight>
                        </Carousel.Next>
                    </div>
                </div>
            </Carousel.Root>
        </div>
    );
}

export default LoopDemo;
