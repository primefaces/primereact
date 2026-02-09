'use client';
import { AngleDown } from '@primeicons/react/angle-down';
import { ChevronUp } from '@primeicons/react/chevron-up';
import { useScrollTop } from '@primereact/hooks';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const { scrollToTop, visible } = useScrollTop();

    return (
        <div className="flex flex-col items-center">
            <p>Scroll down the page to display the ScrollTop component.</p>
            <AngleDown className="animate-fadeout animate-duration-1000 animate-infinite text-[2rem] mb-[30rem]"></AngleDown>
            {visible && (
                <Button onClick={scrollToTop} iconOnly rounded className="fixed [inset-block-end:20px] [inset-inline-end:20px]">
                    <ChevronUp />
                </Button>
            )}
        </div>
    );
}
