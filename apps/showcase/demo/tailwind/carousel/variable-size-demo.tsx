import { Carousel, CarouselContent, CarouselItem, CarouselIndicators, CarouselPrev, CarouselNext } from '@/components/ui/carousel';

const items = ['120px', '80px', '200px', '160px', '220px', '180px', '280px', '100px'];

function VariableSizeDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel className="max-w-xl mx-auto" align="center" autoSize>
                <CarouselContent className="h-[140px]">
                    {items.map((width, i) => (
                        <CarouselItem key={i} style={{ width }}>
                            <div className="h-full text-4xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-lg border border-surface">
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

export default VariableSizeDemo;
