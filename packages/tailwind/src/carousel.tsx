'use client';

import * as React from 'react';
import { Carousel as PRCarousel } from 'primereact/carousel';
import { cn } from '@/components/ui/utils';
import { Button } from '@/components/ui/button';
import {
    type CarouselRootProps,
    type CarouselContentProps,
    type CarouselNextProps,
    type CarouselPrevProps,
    type CarouselIndicatorsProps,
    type CarouselItemProps,
    type CarouselIndicatorsInstance,
    type CarouselIndicatorProps
} from '@primereact/types/shared/carousel';

function Carousel({ ...props }: CarouselRootProps) {
    return <PRCarousel.Root {...props} />;
}

function CarouselContent({ className, ...props }: CarouselContentProps) {
    return (
        <PRCarousel.Content
            className={cn(
                'relative flex gap-(--spacing-items) [scroll-snap-type:var(--scroll-snap-type)] [scrollbar-width:none]',
                'data-[orientation=horizontal]:overflow-x-scroll data-[orientation=horizontal]:overscroll-x-contain',
                'data-[orientation=vertical]:flex-col data-[orientation=vertical]:overflow-y-scroll data-[orientation=vertical]:overscroll-y-contain',
                className
            )}
            {...props}
        />
    );
}

function CarouselItem({ className, ...props }: CarouselItemProps) {
    return (
        <PRCarousel.Item
            className={cn(
                'grow-0 shrink-0 min-w-0 basis-[calc(100%/var(--slides-per-page)-var(--spacing-items)*(var(--slides-per-page)-1)/var(--slides-per-page))] data-autosize:basis-auto data-[align=center]:snap-center data-[align=start]:snap-start data-[align=end]:snap-end ',
                className
            )}
            {...props}
        />
    );
}

function CarouselIndicator({ className, ...props }: CarouselIndicatorProps) {
    return <PRCarousel.Indicator className={cn('w-8 h-2 rounded-full bg-emphasis hover:bg-highlight-emphasis transition-colors data-active:bg-primary', className)} {...props} />;
}

function CarouselIndicators({ className, ...props }: CarouselIndicatorsProps) {
    return (
        <PRCarousel.Indicators className={cn('flex flex-wrap items-center justify-start gap-1 ', className)} {...props}>
            {(instance: CarouselIndicatorsInstance) => {
                return Array.from(instance.carousel?.state.snapPoints ?? []).map((s, i) => <CarouselIndicator key={s} page={i} />);
            }}
        </PRCarousel.Indicators>
    );
}

function CarouselNext({ className, ...props }: CarouselNextProps) {
    return (
        <PRCarousel.Next as={Button} iconOnly severity="secondary" size="small" className={cn('group', className)} {...props}>
            <i className="pi pi-chevron-right group-data-[orientation=vertical]:rotate-90" />
            <span className="sr-only">Next Slide</span>
        </PRCarousel.Next>
    );
}

function CarouselPrev({ className, ...props }: CarouselPrevProps) {
    return (
        <PRCarousel.Prev as={Button} iconOnly severity="secondary" size="small" className={cn('group', className)} {...props}>
            <i className="pi pi-chevron-left group-data-[orientation=vertical]:rotate-90" />
            <span className="sr-only">Prev Slide</span>
        </PRCarousel.Prev>
    );
}

export { Carousel, CarouselContent, CarouselItem, CarouselIndicator, CarouselIndicators, CarouselNext, CarouselPrev };
