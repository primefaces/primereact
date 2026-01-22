import { Carousel, CarouselContent, CarouselItem, CarouselPrev, CarouselNext } from '@/components/ui/carousel';

function SizeDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel className="max-w-sm mx-auto flex flex-col gap-8 items-center" orientation="vertical" slidesPerPage={1.3}>
                <CarouselPrev />
                <CarouselContent className="h-[240px] w-full">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <CarouselItem key={i}>
                            <div className="h-full text-5xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-xl border border-surface">
                                <span>{i + 1}</span>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default SizeDemo;
