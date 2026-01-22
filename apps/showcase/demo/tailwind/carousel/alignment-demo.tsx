import { Carousel, CarouselContent, CarouselItem, CarouselIndicators, CarouselPrev, CarouselNext } from '@/components/ui/carousel';

function AlignmentDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel className="max-w-xl mx-auto" align="start" slidesPerPage={1.5}>
                <CarouselContent className="h-[240px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <CarouselItem key={i}>
                            <div className="h-full text-5xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-xl border border-surface">
                                <span>{i + 1}</span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex mt-4 gap-4">
                    <CarouselIndicators />
                    <div className="flex items-center justify-end gap-2 flex-1">
                        <CarouselPrev />
                        <CarouselNext />
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default AlignmentDemo;
